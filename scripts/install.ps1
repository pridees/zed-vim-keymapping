$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($env:APPDATA)) {
    throw 'APPDATA is not set. Run this installer on Windows.'
}

$keymapSource = Join-Path $PSScriptRoot '..\keymap.json'
if (-not (Test-Path -LiteralPath $keymapSource -PathType Leaf)) {
    throw 'Cannot find keymap.json next to the installer directory.'
}

$zedConfigDir = Join-Path $env:APPDATA 'Zed'
$keymapTarget = Join-Path $zedConfigDir 'keymap.json'
$existingKeymap = Get-Item -LiteralPath $keymapTarget -Force -ErrorAction SilentlyContinue
if ($null -ne $existingKeymap -and $existingKeymap.PSIsContainer) {
    throw "Cannot replace a directory: $keymapTarget"
}

New-Item -ItemType Directory -Path $zedConfigDir -Force | Out-Null
$temporaryKeymap = Join-Path $zedConfigDir ('.keymap.' + [guid]::NewGuid().ToString('N') + '.tmp')
$backupPath = $null

try {
    Copy-Item -LiteralPath $keymapSource -Destination $temporaryKeymap
    if ($null -ne $existingKeymap) {
        $backupDir = Join-Path $zedConfigDir ('keymap-backup.' + [guid]::NewGuid().ToString('N'))
        New-Item -ItemType Directory -Path $backupDir | Out-Null
        $backupPath = Join-Path $backupDir 'keymap.json'
        # Move the entry itself so a symlink's target is never overwritten.
        Move-Item -LiteralPath $keymapTarget -Destination $backupPath
        Write-Host "Previous keymap backed up to $backupPath"
    }

    Move-Item -LiteralPath $temporaryKeymap -Destination $keymapTarget
    Write-Host "Keymap installed at $keymapTarget"
} catch {
    if ($null -ne $backupPath) {
        $backup = Get-Item -LiteralPath $backupPath -Force -ErrorAction SilentlyContinue
        $installed = Get-Item -LiteralPath $keymapTarget -Force -ErrorAction SilentlyContinue
        if ($null -ne $backup -and $null -eq $installed) {
            Move-Item -LiteralPath $backupPath -Destination $keymapTarget
        }
    }
    throw
} finally {
    if (Test-Path -LiteralPath $temporaryKeymap) {
        Remove-Item -LiteralPath $temporaryKeymap -Force
    }
}
