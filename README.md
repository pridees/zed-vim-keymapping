# Zed Vim Keymapping

Personal Zed Vim keymap with a full-screen, searchable terminal-style cheat sheet.

**[Open the cheat sheet](https://pridees.github.io/zed-vim-keymapping/)**

Custom leader keys, project tree, Git, agent controls and native Vim bindings. `Space` is the leader. Exact contexts and action parameters are available on each row. Native bindings are pinned to Zed **1.25.3**; custom context overrides are marked. Helix-only bindings are excluded. Native lists Vim editing commands and Vim-style navigation, including actions implemented outside `vim::`. Ordinary Zed UI shortcuts (field traversal, notebook execution, agent submission, and editor aliases) are excluded. Standard keyboard aliases are hidden when an equivalent Vim binding exists in the same context; the installed keymap is unchanged.

## Installation

Enable `"vim_mode": true` in Zed settings. Run the commands below from the cloned repository root. They create Zed's user configuration directory and copy `keymap.json` into it. Back up any existing keymap before replacing it; these commands replace the whole file rather than merge bindings.

### Linux

Uses `$XDG_CONFIG_HOME/zed`, falling back to `~/.config/zed`. `cp -i` asks before overwriting an existing file.

```sh
zed_config_dir="${XDG_CONFIG_HOME:-$HOME/.config}/zed"
mkdir -p "$zed_config_dir"
cp -i keymap.json "$zed_config_dir/keymap.json"
```

### macOS

Uses `~/.config/zed`. `cp -i` asks before overwriting an existing file.

```sh
zed_config_dir="$HOME/.config/zed"
mkdir -p "$zed_config_dir"
cp -i keymap.json "$zed_config_dir/keymap.json"
```

### Windows (PowerShell)

Uses `%APPDATA%\Zed`. `Copy-Item -Confirm` asks for confirmation before copying.

```powershell
$zedConfigDir = Join-Path $env:APPDATA "Zed"
New-Item -ItemType Directory -Path $zedConfigDir -Force | Out-Null
Copy-Item -LiteralPath ".\keymap.json" -Destination (Join-Path $zedConfigDir "keymap.json") -Confirm
```

These commands copy the same keymap on every platform; `ctrl` bindings remain Control bindings on macOS. The configuration paths follow [Zed's user keymap documentation](https://zed.dev/docs/key-bindings#user-keymaps).

### Symlink alternative (Linux/macOS)

To keep Zed linked to this checkout, replace the `cp` command above with the following command. The destination must not already exist.

```sh
ln -s "$PWD/keymap.json" "$zed_config_dir/keymap.json"
```

The reference defaults come from [Zed](https://github.com/zed-industries/zed/blob/8dd255c3eafb5231056fe4e6f601cedd011f1c93/assets/keymaps/vim.json). See [reference/NOTICE.md](reference/NOTICE.md) for attribution. Project code and configuration: [MIT](LICENSE).
