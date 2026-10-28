"""Turn src/App.jsx (the Vite + Firebase app) into the script block of kitequad/index.html.

KiteQuad runs browser-ready files with no build step and no network access, so this
swaps the npm imports for <script> globals, Firebase for the kitequad store, and the
runtime dictionary/translation downloads for the bundled data in kitequad/data/.
Everything else in App.jsx is kept as it is.

Usage: python3 kitequad/tools/make_kitequad_app.py   (from the repo root)
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
src = (ROOT / 'src' / 'App.jsx').read_text(encoding='utf-8')
src = '\n'.join(line.rstrip() for line in src.split('\n'))  # App.jsx has stray trailing spaces
template = (ROOT / 'kitequad' / 'index.template.html').read_text(encoding='utf-8')

def swap(old, new):
    global src
    old = '\n'.join(line.rstrip() for line in old.split('\n'))
    count = src.count(old)
    if count != 1:
        raise SystemExit(f'expected exactly one match, found {count}:\n{old[:200]}')
    src = src.replace(old, new)

# --- npm imports and Firebase setup -> script globals and the KiteQuad store ---------
swap('''import React, { useState, useEffect } from 'react';
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
''', '''const { useState, useEffect, useRef } = React;
const { Users, Play, LogOut, CheckCircle, RefreshCw, SkipForward, Trash2, HelpCircle, X, Sparkles, BookOpen, AlertCircle } = LucideReact;

// Multiplayer rooms live in KiteQuad's class-wide store (this replaces Firebase/Firestore).
// A room is one JSON value under "room:<CODE>", shared by everyone in the class.
const ROOM_PREFIX = 'room:';
const CLASS_SCOPE = { scope: 'class' };
const ROOM_POLL_MS = 2500;
const STALE_ROOM_MS = 14 * 24 * 60 * 60 * 1000;
const LOCAL_USER = { uid: 'local-player', displayName: 'Tú' };

const kqReady = (async () => {
  if (typeof kitequad === 'undefined') throw new Error("KiteQuad no está disponible");
  await kitequad.ready();
})();

const roomKey = (code) => ROOM_PREFIX + code;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const newWriteId = () => Math.random().toString(36).slice(2, 10);

const getRoom = async (code) => {
  await kqReady;
  return kitequad.store.get(roomKey(code), CLASS_SCOPE);
};

// Apply a Firestore-style update ({ "players.<uid>.rack": [...] }) to a plain object
const applyUpdates = (state, updates) => {
  const next = JSON.parse(JSON.stringify(state));
  Object.entries(updates).forEach(([path, value]) => {
    const parts = path.split('.');
    let target = next;
    parts.slice(0, -1).forEach(p => {
      if (target[p] === undefined || target[p] === null) target[p] = {};
      target = target[p];
    });
    target[parts[parts.length - 1]] = value;
  });
  return next;
};

// Read-modify-write on a shared room. The store has no transactions, so after writing
// we read the room back; if another player's write (say, two classmates joining at the
// same moment) replaced ours, we rebuild the change on top of theirs and try again.
// makeUpdates(room) returns the updates to apply, or null when nothing needs to change.
const updateRoom = async (code, makeUpdates) => {
  for (let attempt = 0; attempt < 4; attempt++) {
    const current = await getRoom(code);
    if (!current) throw new Error("La sala ya no existe");
    const updates = makeUpdates(current);
    if (!updates) return current;
    const writeId = newWriteId();
    const next = { ...applyUpdates(current, updates), rev: (current.rev || 0) + 1, writeId };
    await kitequad.store.set(roomKey(code), next, CLASS_SCOPE);
    await sleep(700 + Math.random() * 800);
    const saved = await getRoom(code);
    if (saved && (saved.writeId === writeId || (saved.rev || 0) > next.rev)) return saved;
  }
  throw new Error("Otro jugador modificó la sala al mismo tiempo");
};

// Rooms are never closed, so prune ones nobody has touched in two weeks to stay
// inside the class storage quota.
const cleanupStaleRooms = async () => {
  try {
    const rooms = await kitequad.store.list({ scope: 'class', prefix: ROOM_PREFIX });
    const cutoff = Date.now() - STALE_ROOM_MS;
    const stale = rooms.filter(r => Date.parse(r.updatedAt) < cutoff).slice(0, 5);
    for (const r of stale) await kitequad.store.remove(r.key, CLASS_SCOPE);
  } catch (e) {
    console.warn("No se pudieron limpiar las salas antiguas", e);
  }
};
''')

# --- dictionary: bundled word list instead of a download -------------------------------
swap('''// Global dictionary set cache
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
      const wordList = text.split(/\\r?\\n/).map(w => w.trim().toLowerCase()).filter(Boolean);
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
''', '''// Global dictionary cache: normalized word -> base36 glossary ids ("" when none)
let spanishDictionary = null;
let spanishLemmas = [];
let dictionaryPromise = null;

const pageLoaded = () => new Promise(resolve => {
  if (document.readyState === 'complete') resolve();
  else window.addEventListener('load', resolve, { once: true });
});

// The Lexicón FILE 2017 word list ships with the app (data/scrabble-es-words.js) because
// KiteQuad blocks downloads. Each line is front-coded: its first character is how many
// letters it shares with the previous word, and an optional " ids" suffix points into
// the English glossary (" =" repeats the previous line's ids).
const decodeDictionary = (packed) => {
  const words = new Map();
  let prev = '';
  let prevRefs = '';
  for (const line of packed.split('\\n')) {
    const space = line.indexOf(' ', 1);
    const word = prev.slice(0, parseInt(line[0], 36)) + (space === -1 ? line.slice(1) : line.slice(1, space));
    let refs = space === -1 ? '' : line.slice(space + 1);
    if (refs === '=') refs = prevRefs;
    words.set(word, refs);
    prev = word;
    prevRefs = refs;
  }
  return words;
};

const loadSpanishDictionary = () => {
  if (!dictionaryPromise) {
    dictionaryPromise = (async () => {
      await pageLoaded();
      await sleep(0); // let the lobby paint before the decode
      try {
        if (typeof window.SCRABBLE_ES_WORDS === 'string') {
          spanishDictionary = decodeDictionary(window.SCRABBLE_ES_WORDS);
          window.SCRABBLE_ES_WORDS = null;
        } else {
          console.warn("Failed to load the bundled dictionary. Initializing fallback rules.");
          spanishDictionary = new Map();
        }
        if (typeof window.SCRABBLE_ES_LEMMAS === 'string') {
          spanishLemmas = window.SCRABBLE_ES_LEMMAS.split('\\n').map(line => line.split('\\t'));
          window.SCRABBLE_ES_LEMMAS = null;
        }
      } catch (err) {
        console.error("Error loading Spanish dictionary:", err);
        spanishDictionary = new Map();
      }
      return spanishDictionary;
    })();
  }
  return dictionaryPromise;
};
''')

# --- English meaning: bundled glossary, then KiteQuad AI, instead of Google Translate ---
swap('''// Free Spanish→English translation (no API key)
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
''', '''// Spanish→English meaning: first the bundled Wiktionary glossary, then KiteQuad's AI
// (only answers where the school has turned AI on).
const translationCache = new Map();

const glossaryDefinition = (dict, key) => {
  const refs = dict.get(key);
  if (!refs) return null;
  return refs.split(',')
    .map(id => spanishLemmas[parseInt(id, 36)])
    .filter(entry => entry && entry[1])
    .map(([lemma, gloss]) => normalizeWordForDict(lemma) === key ? gloss : `${gloss} (de «${lemma}»)`)
    .join(' · ') || null;
};

const aiDefinition = async (spanishWord) => {
  try {
    await kqReady;
    const { text } = await kitequad.ai.chat({
      system: 'You translate one Spanish word into English for a Spanish Scrabble vocabulary game. Accents may be missing because the tiles drop them. Reply with only the English meaning in at most six words, with no quotes or explanation. Translate the exact form, for example "hablamos" -> "we speak".',
      messages: [{ role: 'user', content: spanishWord.toLowerCase() }],
      maxTokens: 24
    });
    const translated = (text || '').trim().replace(/^["“']+|["”']+$/g, '');
    return translated || "(sin traducción)";
  } catch (err) {
    if (err?.code === 'ai_unavailable' || err?.code === 'not_authorized') return "(sin traducción)";
    console.error("Translation error:", err);
    return "(traducción no disponible)";
  }
};

const fetchEnglishDefinition = async (spanishWord) => {
  const key = normalizeWordForDict(spanishWord);
  if (translationCache.has(key)) return translationCache.get(key);
  const dict = await loadSpanishDictionary();
  const definition = glossaryDefinition(dict, key) || await aiDefinition(spanishWord);
  if (definition !== "(traducción no disponible)") translationCache.set(key, definition);
  return definition;
};
''')

# --- App: KiteQuad sign-in instead of Firebase auth, store instead of Firestore ---------
swap('''export default function App() {
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

    const initialBoard''', '''function App() {
  const [kqUser, setKqUser] = useState(null); // the signed-in KiteQuad student (multiplayer)
  const [view, setView] = useState('lobby'); // 'lobby', 'game'
  const [roomCode, setRoomCode] = useState('');
  const [gameState, setGameState] = useState(null);
  const [isSinglePlayer, setIsSinglePlayer] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [dictLoaded, setDictLoaded] = useState(false);
  const [lobbyError, setLobbyError] = useState('');
  const lastRoomJson = useRef(null);

  const user = isSinglePlayer ? LOCAL_USER : kqUser;

  useEffect(() => {
    // KiteQuad signs the student in; their opaque KiteQuad id identifies them in rooms.
    let stopListening = () => {};
    kqReady
      .then(() => kitequad.me())
      .then((me) => {
        setKqUser({ uid: me.id });
        stopListening = kitequad.on('signout', () => setKqUser(null));
      })
      .catch((e) => console.error("Error de autenticación", e));

    loadSpanishDictionary().then(() => setDictLoaded(true));

    return () => stopListening();
  }, []);

  const showRoom = (room) => {
    lastRoomJson.current = JSON.stringify(room);
    setGameState(room);
  };

  const createRoom = async () => {
    if (!user) return;
    setLobbyError('');
    let code;
    try {
      do {
        code = Math.random().toString(36).substring(2, 8).toUpperCase();
      } while (await getRoom(code));
    } catch (e) {
      console.error("Error al crear la sala", e);
      setLobbyError("No se pudo crear la sala. Intenta de nuevo.");
      return;
    }

    const initialBoard''')

swap('''    try {
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
''', '''    try {
      await kitequad.store.set(roomKey(code), { ...newGame, rev: 1, writeId: newWriteId() }, CLASS_SCOPE);
      setRoomCode(code);
      setView('game');
      cleanupStaleRooms();
    } catch (e) {
      console.error("Error al crear la sala", e);
      setLobbyError("No se pudo crear la sala. Intenta de nuevo.");
    }
  };

  const joinRoom = async (codeToJoin) => {
    if (!user || !codeToJoin) return;
    const code = codeToJoin.toUpperCase();
    setLobbyError('');

    try {
      const data = await getRoom(code);
      if (data) {
        if (!data.players[user.uid]) {
          const room = await updateRoom(code, (fresh) => {
            if (fresh.players[user.uid]) return null;
            let bag = [...fresh.bag];
            const rack = bag.splice(0, 7);
            const playerNum = Object.keys(fresh.players).length + 1;
            const updatedPlayers = { ...fresh.players, [user.uid]: { name: `Jugador ${playerNum}`, score: 0, rack: rack, isHost: false } };
            return {
              players: updatedPlayers,
              bag: bag,
              status: Object.keys(updatedPlayers).length >= 2 ? 'playing' : 'waiting'
            };
          });
          showRoom(room);
        }
        setRoomCode(code);
        setView('game');
      } else {
        setLobbyError("Sala no encontrada. Revisa el código e intenta de nuevo.");
      }
    } catch (e) {
      console.error("Error al unirse", e);
      setLobbyError("No se pudo unir a la sala. Intenta de nuevo.");
    }
  };
''')

swap('''  const startSinglePlayer = () => {
    const localUser = { uid: 'local-player', displayName: 'Tú' };
    const initialBoard''', '''  const startSinglePlayer = () => {
    const initialBoard''')
swap('''    setUser(localUser);
    setGameState(localGame);''', '''    setGameState(localGame);''')

swap('''  useEffect(() => {
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
''', '''  // Keep the room in sync by polling the class store (the stand-in for onSnapshot).
  // Only real changes reach gameState, so tiles being placed aren't reset by a poll.
  useEffect(() => {
    if (isSinglePlayer || view !== 'game' || !roomCode || !user) return;
    let cancelled = false;
    let timer = null;
    lastRoomJson.current = null;
    const poll = async () => {
      try {
        const data = await getRoom(roomCode);
        if (cancelled) return;
        if (!data) {
          setView('lobby');
          return;
        }
        const json = JSON.stringify(data);
        if (json !== lastRoomJson.current) showRoom(data);
      } catch (error) {
        console.error("Error de sincronización:", error);
      }
      if (!cancelled) timer = setTimeout(poll, ROOM_POLL_MS);
    };
    poll();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [view, roomCode, user?.uid, isSinglePlayer]);

  // Single-player works without sign-in. Multiplayer waits for the KiteQuad student.
  const multiplayerReady = !!kqUser;
''')

swap('''      {view === 'lobby' ? (
        <Lobby
          onCreate={createRoom}
          onJoin={joinRoom}
          onSinglePlayer={startSinglePlayer}
          multiplayerReady={multiplayerReady}
          onOpenInstructions={() => setShowInstructions(true)}
          dictLoaded={dictLoaded}
        />''', '''      {view === 'lobby' || !user ? (
        <Lobby
          onCreate={createRoom}
          onJoin={joinRoom}
          onSinglePlayer={startSinglePlayer}
          multiplayerReady={multiplayerReady}
          onOpenInstructions={() => setShowInstructions(true)}
          dictLoaded={dictLoaded}
          error={lobbyError}
        />''')
swap('''          onLeave={() => { setView('lobby'); setIsSinglePlayer(false); setGameState(null); }}''',
     '''          onRoomSaved={showRoom}
          onLeave={() => { setView('lobby'); setIsSinglePlayer(false); setGameState(null); }}''')

# --- Lobby: show messages in the page (alert() is blocked in KiteQuad's sandbox) -------
swap('''function Lobby({ onCreate, onJoin, onSinglePlayer, multiplayerReady, onOpenInstructions, dictLoaded }) {''',
     '''function Lobby({ onCreate, onJoin, onSinglePlayer, multiplayerReady, onOpenInstructions, dictLoaded, error }) {''')
swap('''              Unirse
            </button>
          </div>
        </div>
''', '''              Unirse
            </button>
          </div>

          {error && (
            <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-rose-400">
              <AlertCircle size={14} /> {error}
            </p>
          )}
        </div>
''')

# --- GameScreen: write turns to the class store ----------------------------------------
swap('''function GameScreen({ gameState, user, roomCode, isSinglePlayer, onLocalUpdate, onLeave, onOpenInstructions }) {''',
     '''function GameScreen({ gameState, user, roomCode, isSinglePlayer, onLocalUpdate, onRoomSaved, onLeave, onOpenInstructions }) {''')
swap('''  const [toast, setToast] = useState(null);
''', '''  const [toast, setToast] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
''')

swap('''  const confirmExchange = async () => {
    const playerIds = Object.keys(gameState.players);
    const currentIndex = playerIds.indexOf(user.uid);
    const nextTurn = isSinglePlayer ? 'computer' : playerIds[(currentIndex + 1) % playerIds.length];

    let newBag = [...gameState.bag];
    let newRack = [...localRack];
''', '''  // Built from the latest room state so tile draws and turn order include anyone who
  // joined in the meantime.
  const buildExchangeUpdates = (state, rack, exchangeIndexes) => {
    const playerIds = Object.keys(state.players);
    const currentIndex = playerIds.indexOf(user.uid);
    const nextTurn = isSinglePlayer ? 'computer' : playerIds[(currentIndex + 1) % playerIds.length];

    let newBag = [...state.bag];
    let newRack = [...rack];
''')
swap('''    tilesToExchange.forEach(idx => {
      if (newRack[idx]) {''', '''    exchangeIndexes.forEach(idx => {
      if (newRack[idx]) {''')
swap('''    while (newRack.length < 7 && newBag.length > 0) {
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
''', '''    while (newRack.length < 7 && newBag.length > 0) {
      newRack.push(newBag.pop());
    }

    return {
      bag: newBag,
      currentTurn: nextTurn,
      [`players.${user.uid}.rack`]: newRack
    };
  };

  const confirmExchange = async () => {
    const rack = [...localRack];
    const exchangeIndexes = [...tilesToExchange];

    setExchangeMode(false);
    setTilesToExchange([]);

    if (isSinglePlayer && onLocalUpdate) {
      const updates = buildExchangeUpdates(gameState, rack, exchangeIndexes);
      onLocalUpdate({
        bag: updates.bag,
        currentTurn: updates.currentTurn,
        players: { [user.uid]: { rack: updates[`players.${user.uid}.rack`] } }
      });
      return;
    }

    try {
      const room = await updateRoom(roomCode, (fresh) =>
        fresh.currentTurn === user.uid ? buildExchangeUpdates(fresh, rack, exchangeIndexes) : null
      );
      onRoomSaved(room);
    } catch (e) {
      console.error("Error al pasar el turno", e);
      setToast("No se pudo pasar el turno. Intenta de nuevo.");
      setTimeout(() => setToast(null), 2500);
    }
  };
''')

swap('''    const englishDef = await fetchEnglishDefinition(mainWordPlayed);

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
''', '''    const englishDef = await fetchEnglishDefinition(mainWordPlayed);

    const turn = {
      finalBoard: localBoard.map(cell => cell ? { letter: cell.letter } : null),
      keptTiles: localRack.filter(t => t !== null),
      turnScore
    };

    setIsValidating(false);

    setDefinitionModal({
      word: mainWordPlayed,
      definition: englishDef,
      turnScore,
      turn
    });
  };

  // Built when the turn is saved, from the latest room state, so tile draws and turn
  // order include anyone who joined while the definition was showing.
  const buildTurnPayload = (state, { finalBoard, keptTiles, turnScore }) => {
    let newBag = [...state.bag];
    let newRack = [...keptTiles];
    while (newRack.length < 7 && newBag.length > 0) {
      newRack.push(newBag.pop());
    }

    const playerIds = Object.keys(state.players);
    const currentIndex = playerIds.indexOf(user.uid);
    const nextTurn = isSinglePlayer ? 'computer' : playerIds[(currentIndex + 1) % playerIds.length];

    return {
      board: finalBoard,
      bag: newBag,
      currentTurn: nextTurn,
      [`players.${user.uid}.rack`]: newRack,
      [`players.${user.uid}.score`]: (state.players[user.uid].score || 0) + turnScore
    };
  };
''')

swap('''  const handleCompleteTurnAndAdvance = async () => {
    if (!definitionModal) return;

    if (isSinglePlayer && onLocalUpdate) {
      const payload = definitionModal.turnPayload;''', '''  const handleCompleteTurnAndAdvance = async () => {
    if (!definitionModal || isSaving) return;

    if (isSinglePlayer && onLocalUpdate) {
      const payload = buildTurnPayload(gameState, definitionModal.turn);''')
swap('''    const roomRef = doc(db, 'artifacts', appId, 'public', 'data', 'rooms', roomCode);
    try {
      await updateDoc(roomRef, definitionModal.turnPayload);
      setPlacedTiles([]);
      setDefinitionModal(null);
    } catch (e) {
      console.error("Error al actualizar la jugada", e);
    }
  };
''', '''    setIsSaving(true);
    try {
      const room = await updateRoom(roomCode, (fresh) =>
        fresh.currentTurn === user.uid ? buildTurnPayload(fresh, definitionModal.turn) : null
      );
      setPlacedTiles([]);
      setDefinitionModal(null);
      onRoomSaved(room);
    } catch (e) {
      console.error("Error al actualizar la jugada", e);
      setToast("No se pudo guardar la jugada. Intenta de nuevo.");
      setTimeout(() => setToast(null), 2500);
    } finally {
      setIsSaving(false);
    }
  };
''')

swap('''            <button
              onClick={handleCompleteTurnAndAdvance}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-3.5 rounded-2xl transition shadow-lg shadow-emerald-500/20 active:scale-95 text-base"
            >
              Continuar al Siguiente Turno
            </button>''', '''            <button
              onClick={handleCompleteTurnAndAdvance}
              disabled={isSaving}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-60 disabled:cursor-wait text-slate-950 font-black py-3.5 rounded-2xl transition shadow-lg shadow-emerald-500/20 active:scale-95 text-base"
            >
              {isSaving ? "Guardando..." : "Continuar al Siguiente Turno"}
            </button>''')

# The toast sits inside GameScreen's root, which modals cover; lift it above them.
swap('''        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800''',
     '''        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60] bg-slate-800''')

# --- Instructions: credit the bundled data ---------------------------------------------
swap('''Si la palabra existe, se muestra su definición breve en inglés para aprender el vocabulario.
            </p>''', '''Si la palabra existe, se muestra su definición breve en inglés para aprender el vocabulario.
            </p>
            <p className="text-slate-500 text-[11px] mt-2">
              Definiciones en inglés: Wiktionary (CC BY-SA).
            </p>''')

assert 'firebase/' not in src and 'initializeApp' not in src and 'fetch(' not in src and 'import ' not in src and 'alert(' not in src
src += '''
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
'''

html = template.replace('/*__APP_CODE__*/', src.rstrip('\n'))
(ROOT / 'kitequad' / 'index.html').write_text(html, encoding='utf-8')
print('wrote kitequad/index.html', len(html), 'bytes')
