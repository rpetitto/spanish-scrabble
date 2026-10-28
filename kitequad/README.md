# Scrabble Español on KiteQuad

`index.html` is the KiteQuad build of the game in `src/App.jsx`. KiteQuad runs
browser-ready files with no build step and blocks network requests, so this version:

| Vite app | KiteQuad build |
| --- | --- |
| npm imports of React and lucide-react | `<script>` tags from unpkg (React 18.3.1, Babel standalone, lucide-react 0.344.0) |
| Tailwind Play CDN (`cdn.tailwindcss.com`) | Tailwind 3.4.17 precompiled to `vendor/tailwind.css` |
| Firebase anonymous auth | the signed-in KiteQuad student (`kitequad.me()`) |
| Firestore rooms + `onSnapshot` | `kitequad.store` with `{ scope: "class" }`, polled every 2.5 s |
| dictionary downloaded from GitHub | `data/scrabble-es-words.js` (Lexicón FILE 2017, bundled) |
| Google Translate for English meanings | `data/scrabble-es-glosses.js` (Wiktionary glossary), then `kitequad.ai` where the school has AI turned on |
| `alert()` when a room code is wrong | an inline message in the lobby |

Rooms are shared with the whole class, so a classmate joins with the room code
just like before. Rooms nobody has touched in 14 days are cleaned up when a new
room is created.

`index.html` loads `vendor/tailwind.css` and the two data files from jsDelivr at a
pinned commit of this repository; KiteQuad copies them into the app when it is
published.

## Rebuilding

From the repository root:

```bash
python3 kitequad/tools/make_kitequad_app.py
```

regenerates `index.html` from `src/App.jsx` and `index.template.html`.

If you add Tailwind classes, rebuild the stylesheet:

```bash
npx tailwindcss@3.4.17 -i tailwind.input.css --content kitequad/index.html -o kitequad/vendor/tailwind.css --minify
```

where `tailwind.input.css` holds the three `@tailwind base; @tailwind components; @tailwind utilities;` lines.

To rebuild the word list and glossary, download `spanish/file-2017.txt` from
[kamilmielnik/scrabble-dictionaries](https://github.com/kamilmielnik/scrabble-dictionaries) and
`es-en.data`, `es_allforms.csv`, `frequency.csv` from
[doozan/spanish_data](https://github.com/doozan/spanish_data), then:

```bash
python3 kitequad/tools/build_dictionary.py file-2017.txt es-en.data es_allforms.csv frequency.csv kitequad/data
```

After changing `vendor/` or `data/`, commit and push, then point the
`@<commit>` in `index.template.html` at that commit and regenerate `index.html`.
