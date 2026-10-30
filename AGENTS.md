# Zed Vim Keymapping

Personal Linux Zed Vim configuration and its full-screen GitHub Pages cheat sheet. All project content is English. The visual style is dark, terminal-inspired, monospace, large and readable, with minimal prose.

## Source of truth

- `keymap.json`: active custom Zed JSONC keymap. The local Zed configuration symlinks to this file.
- `reference/vim.json`: upstream Vim defaults pinned to Zed 1.25.3, commit `8dd255c3eafb5231056fe4e6f601cedd011f1c93`. It includes shared Helix definitions; the generator excludes Helix-only contexts.
- `scripts/build.mjs`: generates `docs/keymaps.js` from both files; no dependencies.
- `docs/`: static GitHub Pages site, deployed from `main:/docs`.

## Required workflow

Whenever you change a key binding, update the cheat sheet immediately in the same change. Run `node scripts/build.mjs`, revise human-readable labels in `docs/app.js` when needed, and run `node scripts/build.mjs --check`. Never leave the documentation out of sync or hand-edit generated `docs/keymaps.js`.

Preserve exact Zed contexts, action parameters, precedence and disabled prefix rules. Distinguish center tabs, docks, ProjectPanel, GitPanel, GitDiff, multibuffers, editor modes and terminal selection mode. Do not describe a context-specific shortcut as global. The native reference is a versioned snapshot, not a claim that every action is active in every context. Update the pinned version and commit together when refreshing defaults.

Inspect the actual changes before committing. Validate generator coverage, JavaScript syntax, search/filter behavior, keyboard access, and narrow/wide layouts when browser tooling is available. State when visual testing was unavailable. Do not change unrelated Zed settings. Keep the site framework-free, responsive, and usable without external fonts or services.

Publishing changes requires user authorization; a request to publish includes the associated commit, push and GitHub Pages deployment. Do not automatically update the legacy gist unless requested.
