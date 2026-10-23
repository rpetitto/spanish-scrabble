# Spanish Scrabble – Structural Fixes

These files fix the issues that keep the GitHub Pages site blank.

## What to do

1. In your local clone of `rpetitto/spanish-scrabble`:

   ```bash
   # Rename / remove the bad entry file
   rm src/main.jsx.md          # or git rm
   # Ensure src/main.jsx exists (already included here)

   # Move the workflow folder
   mkdir -p .github/workflows
   mv github/workflows/deploy.yml .github/workflows/   # if it still exists under github/
   # or just copy the version from this package
   rmdir github/workflows 2>/dev/null || true
   rmdir github 2>/dev/null || true
   ```

2. Copy these files over the corresponding ones in your repo:
   - `src/main.jsx`
   - `.github/workflows/deploy.yml`
   - `package-lock.json`
   - (other files are unchanged)

3. Commit and push:

   ```bash
   git add src/main.jsx .github/workflows/deploy.yml package-lock.json
   git rm src/main.jsx.md 2>/dev/null || true
   git commit -m "Fix entry point, workflow path, and add lockfile so Pages deploys"
   git push
   ```

4. The GitHub Action should now run, build the site, and deploy `dist/` to the `gh-pages` branch.  
   The live site should load the lobby instead of a blank page.

## Notes

- Firebase still uses the mock fallback. Multiplayer rooms will fail until you add a real `firebaseConfig`.
- Scoring and word-placement rules are still the simplified versions from the original code.
- After the first successful deploy you can delete the old `github/` folder if it remains.
