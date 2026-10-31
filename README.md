# Zed Vim Keymapping

Personal Zed Vim keymap with a full-screen, searchable terminal-style cheat sheet.

**[Open the cheat sheet](https://pridees.github.io/zed-vim-keymapping/)**

Custom leader keys, project tree, Git, agent controls and native Vim bindings. `Space` is the leader. Exact contexts and action parameters are available on each row. Native bindings are pinned to Zed **1.25.3**; custom context overrides are marked. Helix-only bindings are excluded. Standard keyboard aliases are hidden when an equivalent Vim binding exists in the same context; the installed keymap is unchanged.

## Install

Enable `"vim_mode": true` in Zed settings. Back up your existing keymap, then link the cloned repository:

```sh
ln -s /absolute/path/to/zed-vim-keymapping/keymap.json ~/.config/zed/keymap.json
```

## Maintain

```sh
node scripts/build.mjs
node scripts/build.mjs --check
```

Update the cheat sheet whenever keymaps change. Serve `docs/` with any static web server to preview. GitHub Pages serves `main:/docs`; no build dependencies or external assets are needed.

The reference defaults come from [Zed](https://github.com/zed-industries/zed/blob/8dd255c3eafb5231056fe4e6f601cedd011f1c93/assets/keymaps/vim.json). See [reference/NOTICE.md](reference/NOTICE.md) for attribution. Project code and configuration: [MIT](LICENSE).
