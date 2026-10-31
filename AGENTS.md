# Zed Vim Keymapping

Personal Linux Zed Vim configuration and its full-screen GitHub Pages cheat sheet. All project content is English. The visual style is dark, terminal-inspired, monospace, large and readable, with minimal prose.

## Source of truth

- `keymap.json`: active custom Zed JSONC keymap. The local Zed configuration symlinks to this file.
- `reference/vim.json`: upstream Vim defaults pinned to Zed 1.25.3, commit `8dd255c3eafb5231056fe4e6f601cedd011f1c93`. It includes shared Helix definitions; the generator excludes Helix-only contexts.
- `reference/linux-ui.json`: selected native Linux UI bindings from the same pinned version, with original contexts and key-equivalent settings. These supplement the Vim reference for explicitly documented controls.
- `scripts/build.mjs`: generates `docs/keymaps.js` from the custom keymap and reference files; no dependencies.
- `docs/`: static GitHub Pages site, deployed from `main:/docs`.

## Required workflow

Whenever you change a key binding, update the cheat sheet immediately in the same change. Run `node scripts/build.mjs`, revise human-readable labels in `docs/labels.js` and parameter-aware descriptions in `docs/app.js` when needed, and run `node scripts/build.mjs --check`. Keep every binding description clear and no longer than three words; run `node scripts/check-ui.mjs` to check all labels and UI logic. Never leave the documentation out of sync or hand-edit generated `docs/keymaps.js`.

Preserve exact Zed contexts, action parameters, precedence and disabled prefix rules. Distinguish center tabs, docks, ProjectPanel, GitPanel, GitDiff, multibuffers, editor modes and terminal selection mode. Do not describe a context-specific shortcut as global. Hide standard keyboard aliases only when a Vim equivalent has the same context and complete action arguments. Preserve distinct Vim commands, user bindings, and literal-character entry; this is a documentation filter, not a keymap change. The native reference is a versioned snapshot, not a claim that every action is active in every context. Update the pinned version and commit together when refreshing defaults.

Inspect the actual changes before committing. Validate generator coverage, JavaScript syntax, search/filter behavior, keyboard access, and narrow/wide layouts when browser tooling is available. State when visual testing was unavailable. Do not change unrelated Zed settings. Keep the site framework-free, responsive, and usable without external fonts or services.

Publishing changes requires user authorization; a request to publish includes the associated commit, push and GitHub Pages deployment. Do not automatically update the legacy gist unless requested.

## Deployment

- Repository: https://github.com/pridees/zed-vim-keymapping
- Live site: https://pridees.github.io/zed-vim-keymapping/
- GitHub Pages publishes the `docs/` directory from `main`. A push to `main` triggers deployment automatically. There is no separate hosting service or manual upload step.
- Generated `docs/keymaps.js` must be committed. GitHub Pages does not run the local generator. Preserve `docs/.nojekyll`.

Before an authorized publication, run from the repository root:

```sh
node scripts/build.mjs
node scripts/build.mjs --check
node scripts/check-ui.mjs
node --check docs/app.js
node --check docs/labels.js
git diff --check
git status --short
```

Review the diff, stage only intended files, inspect `git diff --cached`, and commit with a descriptive message. Push the commit with `git push origin main`. Do not force-push. If the remote has advanced, inspect and reconcile the changes before retrying.

Check deployment status with GitHub CLI:

```sh
gh api repos/pridees/zed-vim-keymapping/pages/builds/latest \
  --jq '{status, commit, error}'
git rev-parse HEAD
```

Wait until the build reports `built` for the pushed commit. An older successful build does not verify the new deployment. If the build fails, inspect the error and the repository's Pages deployment logs; do not report publication as successful.

Fetch the live page and any changed assets (`app.js`, `labels.js`, `style.css`, `keymaps.js`) and compare their contents with the committed files in `docs/`. A query parameter containing the commit SHA can avoid stale cached responses. Confirm that the page and assets return successful HTTP responses. Check the rendered page when browser tooling is available; distinguish HTTP/content checks from visual validation.

After successful deployment, return the live site URL and briefly describe the changes. If the request only authorizes a local edit, leave the changes uncommitted and do not push. Do not reconfigure Pages or update the legacy gist for routine deployments.
