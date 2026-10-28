"""Build the offline Spanish word list and Spanish->English glossary for the KiteQuad app.

KiteQuad blocks network requests, so the dictionary the Vite app downloaded at runtime
ships with the app as two script files instead.

Usage:
  python3 build_dictionary.py file-2017.txt es-en.data es_allforms.csv frequency.csv OUT_DIR

Inputs:
  file-2017.txt    github.com/kamilmielnik/scrabble-dictionaries spanish/file-2017.txt (Lexicón FILE 2017)
  es-en.data, es_allforms.csv, frequency.csv
                   github.com/doozan/spanish_data (built from Wiktionary, CC BY-SA)

Outputs (in OUT_DIR):
  scrabble-es-words.js   window.SCRABBLE_ES_WORDS: one line per valid word, front-coded
                         against the previous line (first char = base36 shared-prefix length),
                         optionally followed by " " + comma-separated base36 lemma ids,
                         or " =" for "same ids as the previous line".
  scrabble-es-glosses.js window.SCRABBLE_ES_LEMMAS: one "lemma<TAB>short English gloss" line per id.
"""
import sys, os, re, unicodedata, gzip, json, collections
dict_path, data_path, forms_path, freq_path, out_dir = sys.argv[1:6]

def norm(w):
    w = w.lower().replace('ñ', '\x01')
    w = unicodedata.normalize('NFD', w)
    w = ''.join(ch for ch in w if not unicodedata.combining(ch))
    return w.replace('\x01', 'ñ')

KEEP_POS = ['n','v','adj','adv','pron','prep','conj','determiner','interj','num','art','contraction','part','particle','phrase']
FORM_OF = re.compile(r'\b(?:form|spelling|plural|feminine|masculine|misspelling|abbreviation|diminutive|augmentative|superlative|clipping|initialism|acronym|ellipsis|apocopic|synonym|equivalent|participle|gerund|infinitive)\b[^"]*\bof\b', re.I)

entries = {}
cur = pos = None
for line in open(data_path, encoding='utf-8'):
    line = line.rstrip('\n')
    if line == '_____':
        cur = pos = None; continue
    if cur is None:
        cur = line; entries.setdefault(cur, collections.OrderedDict()); continue
    if line.startswith('pos: '):
        pos = line[5:].strip(); entries[cur].setdefault(pos, []); continue
    if line.startswith('  gloss: ') and pos is not None:
        entries[cur][pos].append([line[9:].strip(), '']); continue
    if line.startswith('    q: ') and pos is not None and entries[cur][pos]:
        entries[cur][pos][-1][1] += ' ' + line[7:].strip()

def strip_brackets(s):
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r'\([^()]*\)', '', s)
        s = re.sub(r'\[[^\[\]]*\]', '', s)
    return re.sub(r'\s+([,;:])', r'\1', re.sub(r'\s+', ' ', s)).strip(' ,;:.')

def segments(g):
    out = []
    for seg in strip_brackets(g).split(';'):
        seg = seg.strip(' ,;:.')
        if not seg or '"' in seg or '#' in seg: continue
        if len(seg) > 32 and ',' in seg[:32]:
            seg = seg[:32].rsplit(',', 1)[0].strip()
        out.append(seg)
    return out

SKIP_Q = re.compile(r'vulgar|offensive|derogatory|pejorative|slur|slang|euphemis', re.I)
SKIP_GLOSS = re.compile(r'^expletive$', re.I)
LETTER = re.compile(r'^(?:the )?(?:name of the )?letter\b|\bGreek letter\b|^letter:', re.I)

def usable(gloss, q):
    if SKIP_Q.search(q) or LETTER.search(gloss) or SKIP_GLOSS.search(gloss): return None
    if FORM_OF.search(gloss):
        m = re.search(r'"[^"]*",\s*([^"]+)$', gloss)   # 'apocopic form of "mío", my' -> 'my'
        return m.group(1) if m else None
    return gloss

def short_gloss(lemma):
    e = entries.get(lemma)
    if not e: return None
    picked = []
    for p, glosses in e.items():
        if p not in KEEP_POS: continue
        segs = None
        for g, q in glosses:
            g = usable(g, q)
            if g and segments(g):
                segs = segments(g); break
        if not segs: continue
        if not picked:
            short = [s for s in segs if len(s) <= 32]
            picked = list(dict.fromkeys(short[:2])) or [segs[0][:60].rsplit(' ', 1)[0] + '…' if len(segs[0]) > 60 else segs[0]]
        elif len(segs[0]) <= 24 and not segs[0][0].isupper() and segs[0] not in picked:
            picked.append(segs[0])
        if len(picked) >= 2: break
    if not picked: return None
    out = picked[0]
    for s in picked[1:]:
        if len(out) + len(s) <= 48: out += '; ' + s
    return out

# How often each (normalized form, lemma) pair occurs in real text
form_count = collections.Counter(); lemma_count = collections.Counter()
for row in list(open(freq_path, encoding='utf-8'))[1:]:
    parts = row.rstrip('\n').split(',')
    if len(parts) < 5: continue
    count, lemma, usage = int(parts[0]), parts[1], parts[4]
    lemma_count[lemma] += count
    for u in usage.split('|'):
        c, _, f = u.partition(':')
        if c.isdigit(): form_count[(norm(f), lemma)] += int(c)

POS_RANK = {p: i for i, p in enumerate(KEEP_POS)}
forms = collections.defaultdict(set)
for line in open(forms_path, encoding='utf-8'):
    row = line.rstrip('\n').split(',')
    if len(row) < 3: continue
    form, p, lemmas = row[0], row[1], row[2:]
    if ' ' in form or p not in POS_RANK: continue
    nf = norm(form)
    for lem in lemmas:
        forms[nf].add((lem, POS_RANK[p], lem == form))

words = sorted(set(w.strip() for w in open(dict_path, encoding='utf-8') if w.strip()))
gloss_cache = {}; lemma_ids = {}; lemma_list = []; refs = []; hit = 0
for w in words:
    best = {}
    for lem, prank, is_self in forms.get(w, ()):
        if lem != lem.lower(): continue   # proper nouns and abbreviations
        key = (-form_count[(w, lem)], -lemma_count[lem], not is_self, prank)
        if lem not in best or key < best[lem]: best[lem] = key
    chosen = []
    for lem in sorted(best, key=lambda l: best[l]):
        if lem not in gloss_cache: gloss_cache[lem] = short_gloss(lem)
        if gloss_cache[lem]: chosen.append(lem)
        if len(chosen) == 2: break
    ids = []
    for lem in chosen:
        if lem not in lemma_ids:
            lemma_ids[lem] = len(lemma_list); lemma_list.append(lem)
        ids.append(lemma_ids[lem])
    hit += bool(ids)
    refs.append(ids)

B36 = '0123456789abcdefghijklmnopqrstuvwxyz'
def b36(n):
    s = ''
    while True:
        s = B36[n % 36] + s; n //= 36
        if n == 0: return s

lines = []; prev = ''; prev_ids = None
for w, ids in zip(words, refs):
    k = 0
    while k < min(len(prev), len(w), 35) and prev[k] == w[k]: k += 1
    line = B36[k] + w[k:]
    if ids:
        line += ' =' if ids == prev_ids else ' ' + ','.join(b36(i) for i in ids)
    lines.append(line); prev = w; prev_ids = ids
words_txt = '\n'.join(lines)
lemmas_txt = '\n'.join(f'{l}\t{gloss_cache[l]}' for l in lemma_list)
for name, txt in (('words', words_txt), ('lemmas', lemmas_txt)):
    print(name, len(txt.encode()), 'bytes, gz', len(gzip.compress(txt.encode())), file=sys.stderr)
print('words', len(words), 'with gloss', hit, 'lemmas', len(lemma_list), file=sys.stderr)

credit = (" * Word list: Lexicón FILE 2017 (via github.com/kamilmielnik/scrabble-dictionaries).\n"
          " * English glosses: Wiktionary, CC BY-SA (via github.com/doozan/spanish_data).\n"
          " * Generated by kitequad/tools/build_dictionary.py; do not edit by hand. */\n")
for fname, var, txt, what in (('scrabble-es-words.js', 'SCRABBLE_ES_WORDS', words_txt, 'word list'),
                              ('scrabble-es-glosses.js', 'SCRABBLE_ES_LEMMAS', lemmas_txt, 'English glossary')):
    with open(os.path.join(out_dir, fname), 'w', encoding='utf-8') as f:
        f.write(f"/* Scrabble Español {what} for KiteQuad.\n" + credit)
        f.write(f'window.{var}=' + json.dumps(txt, ensure_ascii=False) + ';\n')
