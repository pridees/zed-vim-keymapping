#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
keymap_source="$script_dir/../keymap.json"
test_root="$(mktemp -d "${TMPDIR:-/tmp}/zed-install-test.XXXXXX")"
trap 'rm -rf -- "$test_root"' EXIT
shopt -s nullglob
cd "$test_root"

run_installer() {
    XDG_CONFIG_HOME="$1" bash "$script_dir/install.sh" > "$test_root/output.log" 2>&1
}

# Install into a new config directory, including spaces in its path.
config_root="$test_root/fresh config"
run_installer "$config_root"
cmp "$keymap_source" "$config_root/zed/keymap.json"
backups=("$config_root"/zed/keymap-backup.*/keymap.json)
[[ ${#backups[@]} -eq 0 ]]

# Keep separate backups on repeated installs.
printf 'Existing custom keymap\n' > "$config_root/zed/keymap.json"
run_installer "$config_root"
backups=("$config_root"/zed/keymap-backup.*/keymap.json)
[[ ${#backups[@]} -eq 1 ]]
[[ "$(cat "${backups[0]}")" == 'Existing custom keymap' ]]
run_installer "$config_root"
backups=("$config_root"/zed/keymap-backup.*/keymap.json)
[[ ${#backups[@]} -eq 2 ]]
cmp "$keymap_source" "$config_root/zed/keymap.json"

# Replacing a symlink must leave its target intact and preserve the link backup.
config_root="$test_root/symlink"
mkdir -p "$config_root/zed"
printf 'Linked keymap\n' > "$test_root/linked-keymap.json"
ln -s "$test_root/linked-keymap.json" "$config_root/zed/keymap.json"
run_installer "$config_root"
[[ ! -L "$config_root/zed/keymap.json" ]]
[[ "$(cat "$test_root/linked-keymap.json")" == 'Linked keymap' ]]
backups=("$config_root"/zed/keymap-backup.*/keymap.json)
[[ ${#backups[@]} -eq 1 && -L "${backups[0]}" ]]
[[ "$(readlink "${backups[0]}")" == "$test_root/linked-keymap.json" ]]
cmp "$keymap_source" "$config_root/zed/keymap.json"

# A broken symlink is still an existing configuration entry to back up.
config_root="$test_root/broken-symlink"
mkdir -p "$config_root/zed"
ln -s "$test_root/missing.json" "$config_root/zed/keymap.json"
run_installer "$config_root"
backups=("$config_root"/zed/keymap-backup.*/keymap.json)
[[ ${#backups[@]} -eq 1 && -L "${backups[0]}" ]]
cmp "$keymap_source" "$config_root/zed/keymap.json"

# Refuse a directory where the config file belongs.
config_root="$test_root/directory"
mkdir -p "$config_root/zed/keymap.json"
if run_installer "$config_root"; then
    printf 'Expected directory refusal.\n' >&2
    exit 1
fi
[[ -d "$config_root/zed/keymap.json" ]]

# Exercise error paths and platform detection without touching the real config.
mock_bin="$test_root/bin"
mkdir -p "$mock_bin"
cat > "$mock_bin/uname" <<'MOCK'
#!/usr/bin/env bash
printf '%s\n' "$ZED_INSTALL_TEST_OS"
MOCK
chmod +x "$mock_bin/uname"
if PATH="$mock_bin:$PATH" ZED_INSTALL_TEST_OS=Unsupported run_installer "$test_root/unsupported"; then
    printf 'Expected unsupported platform refusal.\n' >&2
    exit 1
fi
[[ ! -e "$test_root/unsupported" ]]

cat > "$mock_bin/mkdir" <<'MOCK'
#!/usr/bin/env bash
printf '%s\n' "$2" > "$ZED_INSTALL_TEST_LOG"
exit 1
MOCK
chmod +x "$mock_bin/mkdir"
if PATH="$mock_bin:$PATH" ZED_INSTALL_TEST_OS=Darwin ZED_INSTALL_TEST_LOG="$test_root/macos-path" run_installer "$test_root/ignored-xdg"; then
    printf 'Expected mocked mkdir to stop the macOS path check.\n' >&2
    exit 1
fi
[[ "$(cat "$test_root/macos-path")" == "$HOME/.config/zed" ]]
if PATH="$mock_bin:$PATH" ZED_INSTALL_TEST_OS=Linux ZED_INSTALL_TEST_LOG="$test_root/linux-path" run_installer ''; then
    printf 'Expected mocked mkdir to stop the Linux default path check.\n' >&2
    exit 1
fi
[[ "$(cat "$test_root/linux-path")" == "$HOME/.config/zed" ]]
rm "$mock_bin/mkdir"

mkdir -p "$test_root/missing-source/scripts"
cp "$script_dir/install.sh" "$test_root/missing-source/scripts/install.sh"
if XDG_CONFIG_HOME="$test_root/missing-config" bash "$test_root/missing-source/scripts/install.sh" > "$test_root/output.log" 2>&1; then
    printf 'Expected missing source refusal.\n' >&2
    exit 1
fi
[[ ! -e "$test_root/missing-config" ]]

config_root="$test_root/copy-failure"
mkdir -p "$config_root/zed"
printf 'Keep this keymap\n' > "$config_root/zed/keymap.json"
cat > "$mock_bin/cp" <<'MOCK'
#!/usr/bin/env bash
exit 1
MOCK
chmod +x "$mock_bin/cp"
if PATH="$mock_bin:$PATH" ZED_INSTALL_TEST_OS=Linux run_installer "$config_root"; then
    printf 'Expected copy failure.\n' >&2
    exit 1
fi
[[ "$(cat "$config_root/zed/keymap.json")" == 'Keep this keymap' ]]
temporary_files=("$config_root"/zed/.keymap.json.*)
[[ ${#temporary_files[@]} -eq 0 ]]
rm "$mock_bin/cp"

cat > "$mock_bin/mv" <<'MOCK'
#!/usr/bin/env bash
exit 1
MOCK
chmod +x "$mock_bin/mv"
if PATH="$mock_bin:$PATH" ZED_INSTALL_TEST_OS=Linux run_installer "$config_root"; then
    printf 'Expected replacement failure.\n' >&2
    exit 1
fi
[[ "$(cat "$config_root/zed/keymap.json")" == 'Keep this keymap' ]]
temporary_files=("$config_root"/zed/.keymap.json.*)
[[ ${#temporary_files[@]} -eq 0 ]]

printf 'Installer OK: fresh/repeated installs, backups, symlinks, paths and failure safety.\n'
