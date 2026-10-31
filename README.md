# Zed Vim Keymapping

A Vim keymap for everyday development in Zed, paired with a searchable cheat sheet that keeps shortcuts close at hand.

Navigate files and tabs, jump to definitions, review Git changes, and work with Zed's AI tools from the keyboard. Common commands are grouped under `Space`, making them easier to find and remember.

**[Open the cheat sheet](https://pridees.github.io/zed-vim-keymapping/)**

Find a shortcut by key or command, browse commands by task, and explore both custom shortcuts and familiar Vim commands. Keep the cheat sheet open while you work, or use it to learn your next shortcut.

## Installation

Enable `"vim_mode": true` in Zed settings. Run the commands below from the cloned repository root. They create Zed's user configuration directory and copy `keymap.json` into it. Back up any existing keymap before replacing it; these commands replace the whole file rather than merge bindings.

### Linux / macOS

Uses `~/.config/zed`, or `$XDG_CONFIG_HOME/zed` on Linux when configured. `cp -i` asks before overwriting an existing file.

```sh
zed_config_dir="$HOME/.config/zed"
if [ "$(uname -s)" = "Linux" ]; then
    zed_config_dir="${XDG_CONFIG_HOME:-$HOME/.config}/zed"
fi
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
