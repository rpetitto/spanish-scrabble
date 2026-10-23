import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { Users, Play, LogOut, CheckCircle, RefreshCw, SkipForward, Trash2, HelpCircle, X, Sparkles, BookOpen, AlertCircle } from 'lucide-react';

const appId = typeof __app_id !== 'undefined' ? __app_id : 'spanish-scrabble-app';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
  apiKey: "mock-key", projectId: "mock-project"
};

let app, auth, db;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.error("Error al inicializar Firebase", e);
}

// 15x15 Scrabble Layout: T = Triple Palabra, D = Doble Palabra, t = Triple Letra, d = Doble Letra, _ = Normal, * = Centro
const BOARD_LAYOUT = [
  ['T', '_', '_', 'd', '_', '_', '_', 'T', '_', '_', '_', 'd', '_', '_', 'T'],
  ['_', 'D', '_', '_', '_', 't', '_', '_', '_', 't', '_', '_', '_', 'D', '_'],
  ['_', '_', 'D', '_', '_', '_', 'd', '_', 'd', '_', '_', '_', 'D', '_', '_'],
  ['d', '_', '_', 'D', '_', '_', '_', 'd', '_', '_', '_', 'D', '_', '_', 'd'],
  ['_', '_', '_', '_', 'D', '_', '_', '_', '_', '_', 'D', '_', '_', '_', '_'],
  ['_', 't', '_', '_', '_', 't', '_', '_', '_', 't', '_', '_', '_', 't', '_'],
  ['_', '_', 'd', '_', '_', '_', 'd', '_', 'd', '_', '_', '_', 'd', '_', '_'],
  ['T', '_', '_', 'd', '_', '_', '_', '*', '_', '_', '_', 'd', '_', '_', 'T'],
  ['_', '_', 'd', '_', '_', '_', 'd', '_', 'd', '_', '_', '_', 'd', '_', '_'],
  ['_', 't', '_', '_', '_', 't', '_', '_', '_', 't', '_', '_', '_', 't', '_'],
  ['_', '_', '_', '_', 'D', '_', '_', '_', '_', '_', 'D', '_', '_', '_', '_'],
  ['d', '_', '_', 'D', '_', '_', '_', 'd', '_', '_', '_', 'D', '_', '_', 'd'],
  ['_', '_', 'D', '_', '_', '_', 'd', '_', 'd', '_', '_', '_', 'D', '_', '_'],
  ['_', 'D', '_', '_', '_', 't', '_', '_', '_', 't', '_', '_', '_', 'D', '_'],
  ['T', '_', '_', 'd', '_', '_', '_', 'T', '_', '_', '_', 'd', '_', '_', 'T']
];

const TILE_POINTS = {
  A:1, Á:1, B:3, C:3, D:2, E:1, É:1, F:4, G:2, H:4, I:1, Í:1, J:8, L:1, M:3, 
  N:1, Ñ:8, O:1, Ó:1, P:3, Q:5, R:1, S:1, T:1, U:1, Ú:1, V:4, X:8, Z:10
};

const INITIAL_BAG = "AAAAAAAAAAAABBBCCCCHDDDDDEEEEEEEEEEEEFGGHHIIIIIIJLLLLMMNNNNNNOOOOOOOOOPPQRRRRRSSSSSSTTTTUUUUUVXZZ".split('');

const toggleLetter = (letter) => {
  const toggles = {
    'A': 'Á', 'Á': 'A',
    'E': 'É', 'É': 'E',
    'I': 'Í', 'Í': 'I',
    'O': 'Ó', 'Ó': 'O',
    'U': 'Ú', 'Ú': 'U',
    'N': 'Ñ', 'Ñ': 'N'
  };
  return toggles[letter] || letter;
};

// Utility to normalize Spanish words for dictionary lookup (removing accents & converting lowercase)
const normalizeWordForDict = (word) => {
  return word.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// Global dictionary set cache
let spanishDictionarySet = null;
let isDictionaryLoading = false;

const loadSpanishDictionary = async () => {
  if (spanishDictionarySet) return spanishDictionarySet;
  if (isDictionaryLoading) return null;
  
  isDictionaryLoading = true;
  try {
    const primaryUrl = 'https://raw.githubusercontent.com/kamilmielnik/scrabble-dictionaries/master/spanish/file-2017.txt';
    const fallbackUrl = 'https://raw.githubusercontent.com/kamilmielnik/scrabble-dictionaries/master/spanish/fise-2.txt';
    
    let response = await fetch(primaryUrl);
    if (!response.ok) {
      response = await fetch(fallbackUrl);
    }
    
    if (response.ok) {
      const text = await response.text();
      const wordList = text.split(/\r?\n/).map(w => w.trim().toLowerCase()).filter(Boolean);
      spanishDictionarySet = new Set(wordList);
    } else {
      console.warn("Failed to fetch dictionary online. Initializing fallback rules.");
      spanishDictionarySet = new Set();
    }
  } catch (err) {
    console.error("Error downloading Spanish dictionary:", err);
    spanishDictionarySet = new Set();
  } finally {
    isDictionaryLoading = false;
  }
  return spanishDictionarySet;
};

// Free Spanish→English translation (no API key)
const fetchEnglishDefinition = async (spanishWord) => {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=${encodeURIComponent(spanishWord)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("translate failed");
    const data = await res.json();
    const translated = data?.[0]?.[0]?.[0];
    if (translated && typeof translated === "string" && translated.trim()) {
      return translated.trim();
    }
    return "(sin traducción)";
  } catch (err) {
    console.error("Translation error:", err);
    return "(traducción no disponible)";
  }
};

// Helper to extract words created by placed tiles on a 15x15 board

// Validate Scrabble placement rules
const validatePlacement = (board, placedTiles, isFirstMove) => {
  if (!placedTiles || placedTiles.length === 0) {
    return { ok: false, message: "Coloca al menos una ficha." };
  }

  const positions = placedTiles.map(t => ({
    r: Math.floor(t.index / 15),
    c: t.index % 15,
    index: t.index
  }));

  const rows = positions.map(p => p.r);
  const cols = positions.map(p => p.c);
  const sameRow = rows.every(r => r === rows[0]);
  const sameCol = cols.every(c => c === cols[0]);

  if (!sameRow && !sameCol) {
    return { ok: false, message: "Todas las fichas deben estar en la misma fila o columna." };
  }

  // Contiguous check (no gaps in the line of play)
  if (sameRow) {
    const sorted = [...positions].sort((a, b) => a.c - b.c);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].c !== sorted[i-1].c + 1) {
        // Check if gap is filled by existing board tiles
        for (let c = sorted[i-1].c + 1; c < sorted[i].c; c++) {
          if (board[sorted[0].r * 15 + c] === null) {
            return { ok: false, message: "Las fichas deben formar una línea continua (sin huecos)." };
          }
        }
      }
    }
  } else {
    const sorted = [...positions].sort((a, b) => a.r - b.r);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].r !== sorted[i-1].r + 1) {
        for (let r = sorted[i-1].r + 1; r < sorted[i].r; r++) {
          if (board[r * 15 + sorted[0].c] === null) {
            return { ok: false, message: "Las fichas deben formar una línea continua (sin huecos)." };
          }
        }
      }
    }
  }

  const CENTER = 112; // row 7, col 7

  if (isFirstMove) {
    const coversCenter = positions.some(p => p.index === CENTER);
    if (!coversCenter) {
      return { ok: false, message: "La primera palabra debe cubrir la estrella del centro." };
    }
    if (placedTiles.length < 2) {
      return { ok: false, message: "La primera palabra debe tener al menos 2 letras." };
    }
  } else {
    // Must touch at least one existing tile (edge-adjacent, not diagonal)
    const touchesExisting = positions.some(p => {
      const neighbors = [
        [p.r - 1, p.c], [p.r + 1, p.c],
        [p.r, p.c - 1], [p.r, p.c + 1]
      ];
      return neighbors.some(([nr, nc]) => {
        if (nr < 0 || nr >= 15 || nc < 0 || nc >= 15) return false;
        const cell = board[nr * 15 + nc];
        // Existing tile that was not just placed this turn
        return cell !== null && !placedTiles.some(pt => pt.index === nr * 15 + nc);
      });
    });
    if (!touchesExisting) {
      return { ok: false, message: "La palabra debe conectar con las fichas ya colocadas en el tablero." };
    }
  }

  return { ok: true };
};

const extractFormedWords = (board, placedTiles) => {
  if (!placedTiles || placedTiles.length === 0) return [];
  
  const getCell = (r, c) => {
    if (r < 0 || r >= 15 || c < 0 || c >= 15) return null;
    return board[r * 15 + c];
  };

  const words = new Set();

  const rows = placedTiles.map(t => Math.floor(t.index / 15));
  const cols = placedTiles.map(t => t.index % 15);
  
  const sameRow = rows.every(r => r === rows[0]);
  const sameCol = cols.every(c => c === cols[0]);

  const readFullLine = (startR, startC, dRow, dCol) => {
    let r = startR;
    let c = startC;
    while (getCell(r - dRow, c - dCol) !== null) {
      r -= dRow;
      c -= dCol;
    }
    let word = "";
    while (getCell(r, c) !== null) {
      word += getCell(r, c).letter;
      r += dRow;
      c += dCol;
    }
    return word;
  };

  if (sameRow) {
    const primaryWord = readFullLine(rows[0], cols[0], 0, 1);
    if (primaryWord.length > 1) words.add(primaryWord);
  } 
  if (sameCol) {
    const primaryWord = readFullLine(rows[0], cols[0], 1, 0);
    if (primaryWord.length > 1) words.add(primaryWord);
  }

  placedTiles.forEach(tile => {
    const tr = Math.floor(tile.index / 15);
    const tc = tile.index % 15;

    const horizWord = readFullLine(tr, tc, 0, 1);
    if (horizWord.length > 1) words.add(horizWord);

    const vertWord = readFullLine(tr, tc, 1, 0);
    if (vertWord.length > 1) words.add(vertWord);
  });

  return Array.from(words);
};


// Simple computer player: finds a dictionary word it can form from its rack
const findComputerMove = async (rack, dict, board) => {
  if (!dict || dict.size === 0) return null;
  const letters = rack.filter(Boolean).map(l => l.toUpperCase());
  if (letters.length < 2) return null;

  const isEmpty = board.every(c => c === null);
  const CENTER = 112;

  // Collect candidate words (prefer shorter for speed)
  const candidates = [];
  for (let len = 2; len <= Math.min(letters.length, 5); len++) {
    const combos = getCombinations(letters, len);
    for (const combo of combos.slice(0, 200)) {
      const word = combo.join('');
      if (dict.has(normalizeWordForDict(word))) {
        candidates.push({ word, letters: combo });
      }
    }
    if (candidates.length > 20) break;
  }
  if (candidates.length === 0) return null;

  // Try to place each candidate legally
  for (const cand of candidates) {
    const placement = tryPlaceWord(board, cand.letters, isEmpty, CENTER, dict);
    if (placement) return { ...cand, positions: placement };
  }
  return null;
};

const allWordsValid = (board, positions, letters, dict) => {
  // Build temporary board with the new tiles
  const temp = [...board];
  positions.forEach((idx, i) => { temp[idx] = { letter: letters[i] }; });
  const placed = positions.map((idx, i) => ({ index: idx, letter: letters[i] }));
  const words = extractFormedWords(temp, placed);
  if (words.length === 0) return false;
  return words.every(w => dict.has(normalizeWordForDict(w)));
};

const tryPlaceWord = (board, letters, isEmpty, center, dict) => {
  const len = letters.length;
  // Horizontal placements
  for (let r = 0; r < 15; r++) {
    for (let c = 0; c <= 15 - len; c++) {
      const positions = [];
      let ok = true;
      let touches = false;
      let coversCenter = false;
      for (let i = 0; i < len; i++) {
        const idx = r * 15 + (c + i);
        if (board[idx] !== null) { ok = false; break; }
        positions.push(idx);
        if (idx === center) coversCenter = true;
        const neighbors = [idx - 1, idx + 1, idx - 15, idx + 15];
        for (const n of neighbors) {
          if (n >= 0 && n < 225 && board[n] !== null && !positions.includes(n)) touches = true;
        }
      }
      if (!ok) continue;
      const legal = (isEmpty && coversCenter) || (!isEmpty && touches);
      if (legal && allWordsValid(board, positions, letters, dict)) return positions;
    }
  }
  // Vertical placements
  for (let c = 0; c < 15; c++) {
    for (let r = 0; r <= 15 - len; r++) {
      const positions = [];
      let ok = true;
      let touches = false;
      let coversCenter = false;
      for (let i = 0; i < len; i++) {
        const idx = (r + i) * 15 + c;
        if (board[idx] !== null) { ok = false; break; }
        positions.push(idx);
        if (idx === center) coversCenter = true;
        const neighbors = [idx - 1, idx + 1, idx - 15, idx + 15];
        for (const n of neighbors) {
          if (n >= 0 && n < 225 && board[n] !== null && !positions.includes(n)) touches = true;
        }
      }
      if (!ok) continue;
      const legal = (isEmpty && coversCenter) || (!isEmpty && touches);
      if (legal && allWordsValid(board, positions, letters, dict)) return positions;
    }
  }
  return null;
};

const getCombinations = (arr, len) => {
  if (len === 1) return arr.map(a => [a]);
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = getCombinations(arr.slice(i + 1), len - 1);
    for (const r of rest) results.push([arr[i], ...r]);
  }
  return results;
};

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('lobby'); // 'lobby', 'game'
  const [roomCode, setRoomCode] = useState('');
  const [gameState, setGameState] = useState(null);
  const [isSinglePlayer, setIsSinglePlayer] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [dictLoaded, setDictLoaded] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined') {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.error("Error de autenticación", e);
      }
    };
    initAuth();

    loadSpanishDictionary().then(() => setDictLoaded(true));

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const createRoom = async () => {
    if (!user) return;
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    const initialBoard = Array(225).fill(null);
    let bag = [...INITIAL_BAG].sort(() => Math.random() - 0.5);
    const p1Rack = bag.splice(0, 7);

    const newGame = {
      players: { [user.uid]: { name: 'Jugador 1', score: 0, rack: p1Rack, isHost: true } },
      board: initialBoard,
      bag: bag,
      currentTurn: user.uid,
      status: 'waiting',
      code: code
    };

    try {
      const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', code);
      await setDoc(roomRef, newGame);
      setRoomCode(code);
      setView('game');
    } catch (e) {
      console.error("Error al crear la sala", e);
    }
  };

  const joinRoom = async (codeToJoin) => {
    if (!user || !codeToJoin) return;
    const code = codeToJoin.toUpperCase();
    const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', code);
    
    try {
      const docSnap = await getDoc(roomRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (!data.players[user.uid]) {
          let bag = [...data.bag];
          const rack = bag.splice(0, 7);
          const playerNum = Object.keys(data.players).length + 1;
          const updatedPlayers = { ...data.players, [user.uid]: { name: `Jugador ${playerNum}`, score: 0, rack: rack, isHost: false } };
          await updateDoc(roomRef, {
            players: updatedPlayers,
            bag: bag,
            status: Object.keys(updatedPlayers).length >= 2 ? 'playing' : 'waiting'
          });
        }
        setRoomCode(code);
        setView('game');
      } else {
        alert("Sala no encontrada. Revisa el código e intenta de nuevo.");
      }
    } catch (e) {
      console.error("Error al unirse", e);
    }
  };

  const startSinglePlayer = () => {
    const localUser = { uid: 'local-player', displayName: 'Tú' };
    const initialBoard = Array(225).fill(null);
    let bag = [...INITIAL_BAG].sort(() => Math.random() - 0.5);
    const humanRack = bag.splice(0, 7);
    const computerRack = bag.splice(0, 7);

    const localGame = {
      players: {
        'local-player': { name: 'Tú', score: 0, rack: humanRack, isHost: true },
        'computer': { name: 'Computadora', score: 0, rack: computerRack, isHost: false }
      },
      board: initialBoard,
      bag,
      currentTurn: 'local-player',
      status: 'playing',
      code: 'SOLO'
    };

    setUser(localUser);
    setGameState(localGame);
    setRoomCode('SOLO');
    setIsSinglePlayer(true);
    setView('game');
  };

  useEffect(() => {
    if (!isSinglePlayer && view === 'game' && roomCode && user) {
      const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', roomCode);
      const unsubscribe = onSnapshot(roomRef, (docSnap) => {
        if (docSnap.exists()) {
          setGameState(docSnap.data());
        } else {
          setView('lobby');
        }
      }, (error) => console.error("Error de sincronización:", error));
      return () => unsubscribe();
    }
  }, [view, roomCode, user]);

  // Single-player works without auth. Multiplayer waits for user.
  const multiplayerReady = !!user;

  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden flex flex-col select-none">
      {view === 'lobby' ? (
        <Lobby 
          onCreate={createRoom} 
          onJoin={joinRoom} 
          onSinglePlayer={startSinglePlayer}
          multiplayerReady={multiplayerReady}
          onOpenInstructions={() => setShowInstructions(true)} 
          dictLoaded={dictLoaded} 
        />
      ) : (
        <GameScreen 
          gameState={gameState} 
          user={user} 
          roomCode={roomCode} 
          isSinglePlayer={isSinglePlayer}
          onLocalUpdate={(updates) => {
            if (isSinglePlayer) {
              setGameState(prev => {
                if (!prev) return prev;
                const next = { ...prev };
                if (updates.board) next.board = updates.board;
                if (updates.bag) next.bag = updates.bag;
                if (updates.currentTurn) next.currentTurn = updates.currentTurn;
                if (updates.players) {
                  next.players = { ...next.players };
                  Object.keys(updates.players).forEach(uid => {
                    next.players[uid] = { ...next.players[uid], ...updates.players[uid] };
                  });
                }
                return next;
              });
            }
          }}
          onLeave={() => { setView('lobby'); setIsSinglePlayer(false); setGameState(null); }} 
          onOpenInstructions={() => setShowInstructions(true)}
        />
      )}

      {showInstructions && (
        <InstructionsModal onClose={() => setShowInstructions(false)} />
      )}
    </div>
  );
}

function Lobby({ onCreate, onJoin, onSinglePlayer, multiplayerReady, onOpenInstructions, dictLoaded }) {
  const [joinCode, setJoinCode] = useState('');

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-950">
      <div className="bg-slate-900/90 border border-amber-500/20 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center backdrop-blur-md">
        <div className="inline-flex p-3 bg-amber-500/10 rounded-2xl mb-4 border border-amber-500/30 text-amber-400">
          <Sparkles size={36} />
        </div>
        <h1 className="text-4xl font-black mb-1 tracking-wide text-amber-400 uppercase">Scrabble Español</h1>
        <p className="text-slate-400 text-sm mb-4">Practica vocabulario en español — solo o con amigos</p>

        <div className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 text-xs px-3 py-1.5 rounded-full mb-6 text-slate-400">
          <BookOpen size={14} className={dictLoaded ? "text-emerald-400" : "text-amber-400 animate-pulse"} />
          <span>{dictLoaded ? "Diccionario oficial activo" : "Cargando diccionario de Español..."}</span>
        </div>

        <div className="space-y-4">
          <button 
            onClick={onSinglePlayer}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-4 px-6 rounded-2xl text-lg transition shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <Play size={22} className="fill-current" /> Jugar Solo (sin conexión)
          </button>

          <div className="relative flex items-center py-1">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-slate-500 uppercase tracking-wider">o multijugador</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <button 
            onClick={onCreate}
            disabled={!multiplayerReady}
            className={`w-full flex items-center justify-center gap-2 font-black py-4 px-6 rounded-2xl text-lg transition shadow-lg active:scale-95 ${
              multiplayerReady 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Play size={22} className="fill-current" /> Crear Nueva Partida
          </button>

          <div className="relative flex items-center py-1">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-bold text-slate-500 uppercase tracking-wider">o ingresar código</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="CÓDIGO" 
              className="flex-1 uppercase bg-slate-950 border-2 border-slate-800 rounded-2xl px-4 py-3 text-lg font-mono font-bold text-center focus:outline-none focus:border-amber-400 text-amber-300 placeholder-slate-600 tracking-widest"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              maxLength={6}
            />
            <button 
              onClick={() => onJoin(joinCode)}
              disabled={!multiplayerReady}
              className={`font-bold px-6 rounded-2xl text-base transition active:scale-95 ${
                multiplayerReady 
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30' 
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              Unirse
            </button>
          </div>
        </div>

        <button 
          onClick={onOpenInstructions}
          className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400 transition"
        >
          <HelpCircle size={16} /> ¿Cómo se juega? (Reglas y Acentos)
        </button>
      </div>
    </div>
  );
}

function GameScreen({ gameState, user, roomCode, isSinglePlayer, onLocalUpdate, onLeave, onOpenInstructions }) {
  const [selectedRackIndex, setSelectedRackIndex] = useState(null);
  const [localBoard, setLocalBoard] = useState(null);
  const [localRack, setLocalRack] = useState(null);
  const [placedTiles, setPlacedTiles] = useState([]);
  
  const [isValidating, setIsValidating] = useState(false);
  const [definitionModal, setDefinitionModal] = useState(null);
  const [invalidWordModal, setInvalidWordModal] = useState(null);
  const [exchangeMode, setExchangeMode] = useState(false);
  const [tilesToExchange, setTilesToExchange] = useState([]);
  const [wordLookupModal, setWordLookupModal] = useState(null);

  useEffect(() => {
    if (gameState) {
      setLocalBoard(gameState.board);
      if (gameState.players[user.uid]) {
        setLocalRack(gameState.players[user.uid].rack);
      }
      setPlacedTiles([]);
      setSelectedRackIndex(null);
    }
  }, [gameState, user.uid]);

  // Computer takes its turn in single-player mode
  useEffect(() => {
    if (!isSinglePlayer || !gameState || gameState.currentTurn !== 'computer') return;
    if (!onLocalUpdate) return;

const playComputerTurn = async () => {
  const dict = await loadSpanishDictionary();
  const computer = gameState.players.computer;
  if (!computer || !dict) return;

  const letters = computer.rack.filter(Boolean);
  if (letters.length < 2) {
    // Just pass
    onLocalUpdate({ currentTurn: 'local-player' });
    return;
  }

  // Build a few candidate words from the rack
  const candidates = [];
  for (let len = Math.min(letters.length, 5); len >= 2; len--) {
    const combos = getCombinations(letters, len);
    for (const combo of combos.slice(0, 100)) {
      const word = combo.join('');
      if (dict.has(normalizeWordForDict(word))) {
        candidates.push({ word, letters: combo });
      }
    }
    if (candidates.length >= 10) break;
  }

  const isEmpty = gameState.board.every(c => c === null);
  const CENTER = 112;
  let placed = false;
  let newBoard = [...gameState.board];
  let newRack = [...computer.rack];
  let newBag = [...gameState.bag];
  let scoreAdd = 0;

  for (const cand of candidates) {
    const positions = tryPlaceWord(gameState.board, cand.letters, isEmpty, CENTER, dict);
    if (positions) {
      for (let i = 0; i < cand.letters.length; i++) {
        newBoard[positions[i]] = { letter: cand.letters[i] };
        scoreAdd += (TILE_POINTS[cand.letters[i]] || 0) + 2;
        const ri = newRack.indexOf(cand.letters[i]);
        if (ri !== -1) newRack[ri] = null;
      }
      newRack = newRack.filter(Boolean);
      while (newRack.length < 7 && newBag.length > 0) newRack.push(newBag.pop());
      placed = true;
      break;
    }
  }

  // If nothing legal was found, just pass the turn
  onLocalUpdate({
    board: placed ? newBoard : gameState.board,
    bag: placed ? newBag : gameState.bag,
    currentTurn: 'local-player',
    players: {
      computer: {
        rack: placed ? newRack : computer.rack,
        score: (computer.score || 0) + scoreAdd
      }
    }
  });
};

    const timer = setTimeout(playComputerTurn, 800);
    return () => clearTimeout(timer);
  }, [isSinglePlayer, gameState?.currentTurn]);

  if (!gameState || !localBoard || !localRack) {
    return (
      <div className="flex-1 flex items-center justify-center text-amber-400 font-medium">
        Cargando estado del juego...
      </div>
    );
  }

  const isMyTurn = gameState.currentTurn === user.uid;

  const handleRackClick = (index) => {
    if (!isMyTurn) return;
    
    if (selectedRackIndex === index) {
      const newRack = [...localRack];
      const letter = newRack[index];
      if (!letter) return;
      const toggled = toggleLetter(letter);
      
      if (toggled !== letter) {
        newRack[index] = toggled;
        setLocalRack(newRack);
      }
      setSelectedRackIndex(null);
    } else {
      setSelectedRackIndex(index);
    }
  };

  const placeTileAtBoardIndex = (targetIndex, rackIndexToUse) => {
    if (!isMyTurn || rackIndexToUse === null || targetIndex === null) return;
    if (localBoard[targetIndex] !== null) return;

    const letterToPlace = localRack[rackIndexToUse];
    if (!letterToPlace) return;

    const newBoard = [...localBoard];
    newBoard[targetIndex] = { letter: letterToPlace, isNew: true };
    setLocalBoard(newBoard);

    setPlacedTiles([...placedTiles, { index: targetIndex, letter: letterToPlace, rackIndex: rackIndexToUse }]);

    const newRack = [...localRack];
    newRack[rackIndexToUse] = null;
    setLocalRack(newRack);
    setSelectedRackIndex(null);
  };

  const handleBoardClick = (targetIndex) => {
    const cell = localBoard[targetIndex];
    // If clicking a tile placed this turn, pick it back up
    if (cell?.isNew && isMyTurn) {
      const placed = placedTiles.find(t => t.index === targetIndex);
      if (placed) {
        const newBoard = [...localBoard];
        newBoard[targetIndex] = null;
        setLocalBoard(newBoard);
        const newRack = [...localRack];
        // Put it back in its original rack slot if empty, otherwise first empty
        if (newRack[placed.rackIndex] === null) {
          newRack[placed.rackIndex] = placed.letter;
        } else {
          const empty = newRack.findIndex(t => t === null);
          if (empty !== -1) newRack[empty] = placed.letter;
        }
        setLocalRack(newRack);
        setPlacedTiles(placedTiles.filter(t => t.index !== targetIndex));
        setSelectedRackIndex(null);
      }
      return;
    }
    // If clicking an existing (committed) tile, look up the word
    if (cell && !cell.isNew) {
      lookupWordAt(targetIndex);
      return;
    }
    // Otherwise place selected rack tile
    if (selectedRackIndex !== null) {
      placeTileAtBoardIndex(targetIndex, selectedRackIndex);
    }
  };

  const handleDragStart = (e, rackIndex) => {
    if (!isMyTurn || localRack[rackIndex] === null) return;
    e.dataTransfer.setData("text/plain", rackIndex.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const rackIndexStr = e.dataTransfer.getData("text/plain");
    if (rackIndexStr !== "") {
      const rackIndex = parseInt(rackIndexStr, 10);
      placeTileAtBoardIndex(targetIndex, rackIndex);
    }
  };

  const handleUndoSingle = () => {
    if (!isMyTurn || placedTiles.length === 0) return;

    const lastTile = placedTiles[placedTiles.length - 1];
    
    const newBoard = [...localBoard];
    newBoard[lastTile.index] = null;
    setLocalBoard(newBoard);

    const newRack = [...localRack];
    newRack[lastTile.rackIndex] = lastTile.letter;
    setLocalRack(newRack);

    setPlacedTiles(placedTiles.slice(0, -1));
    setSelectedRackIndex(null);
  };

  const handleClearAll = () => {
    if (!isMyTurn || placedTiles.length === 0) return;

    setLocalBoard(gameState.board);
    setLocalRack(gameState.players[user.uid].rack);
    setPlacedTiles([]);
    setSelectedRackIndex(null);
  };

  const handleShuffleRack = () => {
    if (!isMyTurn) return;
    const filled = localRack.filter(t => t !== null);
    for (let i = filled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filled[i], filled[j]] = [filled[j], filled[i]];
    }
    // Preserve null slots at the end
    const shuffled = [...filled];
    while (shuffled.length < localRack.length) shuffled.push(null);
    setLocalRack(shuffled);
    setSelectedRackIndex(null);
  };

  const handlePassTurn = () => {
    if (!isMyTurn) return;
    handleClearAll();
    setExchangeMode(true);
    setTilesToExchange([]);
  };

  const toggleExchangeTile = (index) => {
    setTilesToExchange(prev => {
      const next = prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index];
      return next;
    });
  };

  const confirmExchange = async () => {
    const playerIds = Object.keys(gameState.players);
    const currentIndex = playerIds.indexOf(user.uid);
    const nextTurn = isSinglePlayer ? 'computer' : playerIds[(currentIndex + 1) % playerIds.length];

    let newBag = [...gameState.bag];
    let newRack = [...localRack];

    // Return selected tiles to bag and draw replacements
    tilesToExchange.forEach(idx => {
      if (newRack[idx]) {
        newBag.push(newRack[idx]);
        newRack[idx] = null;
      }
    });
    // Shuffle returned tiles into bag
    newBag.sort(() => Math.random() - 0.5);
    // Draw replacements
    for (let i = 0; i < newRack.length; i++) {
      if (newRack[i] === null && newBag.length > 0) {
        newRack[i] = newBag.pop();
      }
    }
    newRack = newRack.filter(t => t !== null);
    while (newRack.length < 7 && newBag.length > 0) {
      newRack.push(newBag.pop());
    }

    setExchangeMode(false);
    setTilesToExchange([]);

    if (isSinglePlayer && onLocalUpdate) {
      onLocalUpdate({
        bag: newBag,
        currentTurn: nextTurn,
        players: { [user.uid]: { rack: newRack } }
      });
      return;
    }

    const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', roomCode);
    try {
      await updateDoc(roomRef, {
        bag: newBag,
        currentTurn: nextTurn,
        [`players.${user.uid}.rack`]: newRack
      });
    } catch (e) {
      console.error("Error al pasar el turno", e);
    }
  };

  const cancelExchange = () => {
    setExchangeMode(false);
    setTilesToExchange([]);
  };

  const lookupWordAt = async (index) => {
    const cell = localBoard[index];
    if (!cell) return;
    // Find the horizontal and vertical words through this cell
    const r = Math.floor(index / 15);
    const c = index % 15;
    const getCell = (rr, cc) => {
      if (rr < 0 || rr >= 15 || cc < 0 || cc >= 15) return null;
      return localBoard[rr * 15 + cc];
    };
    const readWord = (sr, sc, dr, dc) => {
      let rr = sr, cc = sc;
      while (getCell(rr - dr, cc - dc)) { rr -= dr; cc -= dc; }
      let w = "";
      while (getCell(rr, cc)) { w += getCell(rr, cc).letter; rr += dr; cc += dc; }
      return w.length > 1 ? w : null;
    };
    const horiz = readWord(r, c, 0, 1);
    const vert = readWord(r, c, 1, 0);
    const word = horiz || vert;
    if (!word) return;
    const def = await fetchEnglishDefinition(word);
    setWordLookupModal({ word, definition: def });
  };

  const handleConfirmAndValidateTurn = async () => {
    if (!isMyTurn || placedTiles.length === 0) return;

    setIsValidating(true);

    // Check if board is empty (first move)
    const isFirstMove = gameState.board.every(cell => cell === null);
    const placement = validatePlacement(localBoard, placedTiles, isFirstMove);
    if (!placement.ok) {
      setInvalidWordModal({ invalidWords: [placement.message] });
      setIsValidating(false);
      return;
    }
    
    const dict = await loadSpanishDictionary();
    const formedWords = extractFormedWords(localBoard, placedTiles);

    if (formedWords.length === 0) {
      setInvalidWordModal({ invalidWords: ["Por favor coloca las fichas formando una palabra conectada."] });
      setIsValidating(false);
      return;
    }

    const invalidList = [];
    if (dict && dict.size > 0) {
      formedWords.forEach(w => {
        const normalized = normalizeWordForDict(w);
        if (!dict.has(normalized)) {
          invalidList.push(w);
        }
      });
    }

    if (invalidList.length > 0) {
      setInvalidWordModal({ invalidWords: invalidList });
      setIsValidating(false);
      return;
    }

    let turnScore = placedTiles.reduce((sum, tile) => sum + (TILE_POINTS[tile.letter] || 0), 0);
    turnScore += placedTiles.length * 2;

    const mainWordPlayed = formedWords[0] || "";

    const englishDef = await fetchEnglishDefinition(mainWordPlayed);

    let newBag = [...gameState.bag];
    let newRack = localRack.filter(t => t !== null);
    while (newRack.length < 7 && newBag.length > 0) {
      newRack.push(newBag.pop());
    }

    const finalBoard = localBoard.map(cell => cell ? { letter: cell.letter } : null);
    const playerIds = Object.keys(gameState.players);
    const currentIndex = playerIds.indexOf(user.uid);
    const nextTurn = isSinglePlayer ? 'computer' : playerIds[(currentIndex + 1) % playerIds.length];

    const turnPayload = {
      board: finalBoard,
      bag: newBag,
      currentTurn: nextTurn,
      [`players.${user.uid}.rack`]: newRack,
      [`players.${user.uid}.score`]: (gameState.players[user.uid].score || 0) + turnScore
    };

    setIsValidating(false);
    
    setDefinitionModal({
      word: mainWordPlayed,
      definition: englishDef,
      turnScore,
      turnPayload
    });
  };

  const handleCompleteTurnAndAdvance = async () => {
    if (!definitionModal) return;

    if (isSinglePlayer && onLocalUpdate) {
      const payload = definitionModal.turnPayload;
      const playerUpdate = {};
      // Convert dotted player paths into nested object for local update
      Object.keys(payload).forEach(k => {
        if (k.startsWith('players.')) {
          const parts = k.split('.');
          const uid = parts[1];
          const field = parts[2];
          if (!playerUpdate[uid]) playerUpdate[uid] = {};
          playerUpdate[uid][field] = payload[k];
        }
      });
      onLocalUpdate({
        board: payload.board,
        bag: payload.bag,
        currentTurn: payload.currentTurn,
        players: playerUpdate
      });
      setPlacedTiles([]);
      setDefinitionModal(null);
      return;
    }

    const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', roomCode);
    try {
      await updateDoc(roomRef, definitionModal.turnPayload);
      setPlacedTiles([]);
      setDefinitionModal(null);
    } catch (e) {
      console.error("Error al actualizar la jugada", e);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-3 gap-2 bg-slate-950 overflow-hidden relative">
      
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {isSinglePlayer ? 'Modo:' : 'Código de Sala:'}
          </span>
          <span className="bg-slate-950 border border-amber-500/30 px-3 py-1 rounded-xl text-amber-400 font-mono font-black text-lg tracking-wider">
            {isSinglePlayer ? 'SOLO' : roomCode}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(gameState.players).map(([id, p]) => (
            <div 
              key={id} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${
                gameState.currentTurn === id 
                  ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-bold' 
                  : 'border-slate-800 bg-slate-950 text-slate-400'
              }`}
            >
              <Users size={14} />
              <span className="text-sm">{id === user.uid ? 'Tú' : p.name}</span>
              <span className="bg-slate-800 text-amber-400 text-xs px-2 py-0.5 rounded-lg font-bold">
                {p.score || 0} pts
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenInstructions}
            className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-xl transition"
            title="Instrucciones del juego"
          >
            <HelpCircle size={20} />
          </button>
          <button 
            onClick={onLeave} 
            className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-900/40 border border-rose-500/20 px-3 py-2 rounded-xl transition font-semibold"
          >
            <LogOut size={14}/> Salir
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0 relative my-1">
        <div 
          className="relative bg-slate-900 p-2 rounded-2xl border-2 border-slate-800 shadow-2xl shrink-0" 
          style={{ aspectRatio: '1/1', height: 'min(100%, 65vh)' }}
        >
          <div 
            className="grid w-full h-full bg-slate-950 p-1 rounded-xl gap-0.5 border border-slate-800"
            style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))', gridTemplateRows: 'repeat(15, minmax(0, 1fr))' }}
          >
            {localBoard.map((cell, index) => {
              const r = Math.floor(index / 15);
              const c = index % 15;
              const type = BOARD_LAYOUT[r][c];

              let bgClass = "bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800/40";
              let label = "";
              let labelColor = "text-slate-600";

              if (type === 'T') { bgClass = "bg-rose-950/60 border border-rose-500/30"; label = "3P"; labelColor = "text-rose-400"; }
              else if (type === 'D' || type === '*') { bgClass = "bg-pink-950/60 border border-pink-500/30"; label = type === '*' ? "★" : "2P"; labelColor = "text-pink-400"; }
              else if (type === 't') { bgClass = "bg-sky-950/60 border border-sky-500/30"; label = "3L"; labelColor = "text-sky-400"; }
              else if (type === 'd') { bgClass = "bg-blue-950/60 border border-blue-500/30"; label = "2L"; labelColor = "text-blue-400"; }

              return (
                <div 
                  key={`${r}-${c}`}
                  onClick={() => handleBoardClick(index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`relative flex items-center justify-center rounded-md font-bold text-xs select-none transition-all cursor-pointer ${
                    cell ? 'bg-amber-100 border-b-2 border-r-2 border-amber-300 shadow-lg' : bgClass
                  } ${cell?.isNew ? 'ring-2 ring-emerald-400 z-10 animate-pulse' : ''}`}
                >
                  {cell ? (
                    <span className="text-slate-950 text-base md:text-xl font-black flex items-center justify-center">
                      {cell.letter}
                      <span className="absolute bottom-0.5 right-0.5 text-[8px] font-bold text-slate-700">
                        {TILE_POINTS[cell.letter]}
                      </span>
                    </span>
                  ) : (
                    <span className={`text-[10px] font-black pointer-events-none opacity-80 ${labelColor}`}>
                      {label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-900 border border-slate-800 p-3 rounded-2xl flex items-center justify-between gap-4 shrink-0 shadow-xl">
        
        <div className="flex gap-2 w-48">
          <button 
            onClick={handleUndoSingle}
            disabled={!isMyTurn || placedTiles.length === 0 || isValidating}
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 py-2.5 rounded-xl font-bold transition text-xs text-amber-300 active:scale-95"
            title="Deshacer la última ficha colocada"
          >
            <RefreshCw size={14}/> Deshacer
          </button>
          <button 
            onClick={handleClearAll}
            disabled={!isMyTurn || placedTiles.length === 0 || isValidating}
            className="flex-1 flex items-center justify-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 disabled:opacity-30 disabled:cursor-not-allowed border border-rose-500/20 py-2.5 rounded-xl font-bold transition text-xs text-rose-300 active:scale-95"
            title="Limpiar todas las fichas colocadas en este turno"
          >
            <Trash2 size={14}/> Limpiar
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            {isMyTurn ? "Tus Fichas (Haz clic para seleccionar o cambiar acentos/Ñ)" : "Turno de tu oponente"}
          </span>
          <div className="flex gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 min-h-[3.5rem]">
            {localRack.map((letter, i) => (
              <div 
                key={i}
                draggable={isMyTurn && letter !== null}
                onDragStart={(e) => handleDragStart(e, i)}
                onClick={() => handleRackClick(i)}
                className={`
                  relative w-11 h-13 md:w-12 md:h-14 rounded-xl flex items-center justify-center font-black text-xl md:text-2xl select-none transition-all
                  ${letter === null 
                    ? 'bg-slate-900/50 border-2 border-dashed border-slate-800' 
                    : 'bg-amber-100 text-slate-950 shadow-md cursor-grab border-b-4 border-amber-300 hover:bg-amber-50'}
                  ${selectedRackIndex === i ? '-translate-y-2 ring-4 ring-amber-400 shadow-amber-400/50' : 'hover:-translate-y-0.5'}
                  ${!isMyTurn && letter !== null ? 'opacity-40 grayscale cursor-not-allowed' : ''}
                `}
              >
                {letter && (
                  <>
                    {letter}
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-extrabold text-slate-700">
                      {TILE_POINTS[letter]}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 w-56">
          <button 
            onClick={handlePassTurn}
            disabled={!isMyTurn || isValidating}
            className="flex-1 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 py-2.5 rounded-xl font-bold transition text-xs text-slate-300 active:scale-95"
          >
            <SkipForward size={14}/> Pasar
          </button>
          <button 
            onClick={handleConfirmAndValidateTurn}
            disabled={!isMyTurn || placedTiles.length === 0 || isValidating}
            className="flex-[1.6] flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed py-2.5 rounded-xl font-black text-xs text-slate-950 shadow-lg shadow-emerald-500/20 transition active:scale-95"
          >
            {isValidating ? (
              <RefreshCw className="animate-spin" size={16} />
            ) : (
              <CheckCircle size={16}/>
            )}
            {isValidating ? "Validando..." : "Validar y Jugar"}
          </button>
        </div>

      </div>

      {exchangeMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border-2 border-amber-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl">
            <h2 className="text-xl font-black text-amber-400 mb-2 text-center">Cambiar fichas</h2>
            <p className="text-slate-400 text-xs text-center mb-4">Selecciona las fichas que quieres devolver a la bolsa</p>
            <div className="flex gap-2 justify-center mb-6">
              {localRack.map((letter, i) => letter && (
                <button
                  key={i}
                  onClick={() => toggleExchangeTile(i)}
                  className={`w-10 h-12 rounded-lg font-black text-lg transition ${
                    tilesToExchange.includes(i)
                      ? 'bg-rose-500 text-white ring-2 ring-rose-300'
                      : 'bg-amber-100 text-slate-950'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={cancelExchange} className="flex-1 bg-slate-800 hover:bg-slate-700 py-2.5 rounded-xl font-bold text-sm">
                Cancelar
              </button>
              <button onClick={confirmExchange} className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2.5 rounded-xl font-black text-sm">
                {tilesToExchange.length === 0 ? 'Pasar sin cambiar' : `Cambiar ${tilesToExchange.length}`}
              </button>
            </div>
          </div>
        </div>
      )}

      {wordLookupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md" onClick={() => setWordLookupModal(null)}>
          <div className="bg-slate-900 border-2 border-sky-500/40 rounded-3xl max-w-sm w-full p-6 text-slate-200 shadow-2xl text-center" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-black text-sky-400 capitalize mb-2">{wordLookupModal.word}</h2>
            <p className="text-slate-300 text-sm italic mb-4">"{wordLookupModal.definition}"</p>
            <button onClick={() => setWordLookupModal(null)} className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 py-2.5 rounded-xl font-black">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {definitionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl relative text-center">
            
            <div className="inline-flex p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-3 border border-emerald-500/30">
              <BookOpen size={36} />
            </div>

            <h2 className="text-3xl font-black text-emerald-400 capitalize mb-1 tracking-wide">
              {definitionModal.word}
            </h2>
            <p className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">
              ¡Palabra Válida! (+{definitionModal.turnScore} Puntos)
            </p>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left mb-6">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles size={14} /> Definición en Inglés:
              </div>
              <p className="text-slate-200 text-sm leading-relaxed italic">
                "{definitionModal.definition}"
              </p>
            </div>

            <button 
              onClick={handleCompleteTurnAndAdvance}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-3.5 rounded-2xl transition shadow-lg shadow-emerald-500/20 active:scale-95 text-base"
            >
              Continuar al Siguiente Turno
            </button>
          </div>
        </div>
      )}

      {invalidWordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border-2 border-rose-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl relative text-center">
            <div className="inline-flex p-4 bg-rose-500/10 rounded-full text-rose-400 mb-3 border border-rose-500/30">
              <AlertCircle size={36} />
            </div>

            <h2 className="text-2xl font-black text-rose-400 mb-2">
              Palabra No Reconocida
            </h2>

            <p className="text-slate-300 text-xs mb-4">
              La siguiente combinación no existe en el diccionario oficial de Scrabble Español:
            </p>

            <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 mb-6 flex flex-wrap justify-center gap-2">
              {invalidWordModal.invalidWords.map((w, idx) => (
                <span key={idx} className="bg-rose-950/80 border border-rose-500/30 text-rose-300 px-3 py-1 rounded-xl font-bold font-mono text-sm">
                  {w}
                </span>
              ))}
            </div>

            <button 
              onClick={() => setInvalidWordModal(null)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-3 rounded-xl border border-slate-700 transition"
            >
              Ajustar Fichas
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

function InstructionsModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-slate-200 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4 text-amber-400">
          <HelpCircle size={28} />
          <h2 className="text-2xl font-black uppercase tracking-wide">Instrucciones del Juego</h2>
        </div>

        <div className="space-y-4 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <h3 className="font-bold text-amber-400 mb-1 flex items-center gap-2">
              <BookOpen size={16} /> Validación de Diccionario
            </h3>
            <p className="text-slate-300 text-xs">
              Al hacer clic en <strong>Validar y Jugar</strong>, la palabra se verifica contra el diccionario oficial en español de <em>kamilmielnik/scrabble-dictionaries</em>. Si la palabra existe, se muestra su definición breve en inglés para aprender el vocabulario.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <h3 className="font-bold text-amber-400 mb-1 flex items-center gap-2">
              <Sparkles size={16} /> Acentos y la Letra Ñ
            </h3>
            <p className="text-slate-300 text-xs">
              Para colocar una vocal acentuada (<strong>Á, É, Í, Ó, Ú</strong>) o cambiar una <strong>N</strong> por una <strong>Ñ</strong>:
              <br />
              1. Haz clic en la ficha dentro de tu atril para seleccionarla.
              <br />
              2. Vuelve a hacer clic sobre ella para alternar su acento o tilde.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
            <h3 className="font-bold text-amber-400 mb-1">Controles de Turno</h3>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              <li><strong>Deshacer:</strong> Regresa la última ficha colocada en este turno a tu atril.</li>
              <li><strong>Limpiar:</strong> Regresa todas las fichas colocadas en este turno.</li>
              <li><strong>Pasar:</strong> Cede tu turno al siguiente jugador sin jugar.</li>
              <li><strong>Validar y Jugar:</strong> Confirma la palabra, consulta el diccionario y muestra la definición.</li>
            </ul>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl transition"
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
}
