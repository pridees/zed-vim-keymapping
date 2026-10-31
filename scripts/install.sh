#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
keymap_source="$script_dir/../keymap.json"

case "$(uname -s)" in
    Linux) zed_config_dir="${XDG_CONFIG_HOME:-$HOME/.config}/zed" ;;
    Darwin) zed_config_dir="$HOME/.config/zed" ;;
    *) printf 'This installer supports Linux and macOS.\n' >&2; exit 1 ;;
esac

if [[ ! -f "$keymap_source" ]]; then
    printf 'Cannot find keymap.json next to the installer directory.\n' >&2
    exit 1
fi

keymap_target="$zed_config_dir/keymap.json"
if [[ -d "$keymap_target" ]]; then
    printf 'Cannot replace a directory: %s\n' "$keymap_target" >&2
    exit 1
fi

mkdir -p "$zed_config_dir"
temporary_keymap="$(mktemp "$zed_config_dir/.keymap.json.XXXXXX")"
trap 'rm -f -- "$temporary_keymap"' EXIT
cp "$keymap_source" "$temporary_keymap"

if [[ -e "$keymap_target" || -L "$keymap_target" ]]; then
    backup_dir="$(mktemp -d "$zed_config_dir/keymap-backup.XXXXXX")"
    # Preserve symlinks without changing the files they point to.
    cp -pP "$keymap_target" "$backup_dir/keymap.json"
    printf 'Previous keymap backed up to %s\n' "$backup_dir/keymap.json"
fi

mv -f "$temporary_keymap" "$keymap_target"
printf 'Keymap installed at %s\n' "$keymap_target"
