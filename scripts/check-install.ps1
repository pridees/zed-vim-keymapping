$ErrorActionPreference = 'Stop'

$installer = Join-Path $PSScriptRoot 'install.ps1'
$keymapSource = Join-Path $PSScriptRoot '..\keymap.json'
$testRoot = Join-Path ([System.IO.Path]::GetTempPath()) ('zed-install-test.' + [guid]::NewGuid().ToString('N'))
$originalAppData = $env:APPDATA
New-Item -ItemType Directory -Path $testRoot | Out-Null

function Assert-True([bool] $Condition, [string] $Message) {
    if (-not $Condition) { throw $Message }
}

function Assert-Keymap([string] $Path) {
    Assert-True (Test-Path -LiteralPath $Path -PathType Leaf) "Missing installed keymap: $Path"
    Assert-True ((Get-FileHash -LiteralPath $Path).Hash -eq (Get-FileHash -LiteralPath $keymapSource).Hash) 'Installed content differs'
}

function Assert-Fails([scriptblock] $Action) {
    $failed = $false
    try { & $Action } catch { $failed = $true }
    Assert-True $failed 'Expected installer failure'
}

Push-Location $testRoot
try {
    # Installation is independent of the caller's working directory.
    $env:APPDATA = Join-Path $testRoot 'fresh config'
    $target = Join-Path $env:APPDATA 'Zed/keymap.json'
    & $installer *> $null
    Assert-Keymap $target
    Assert-True (@(Get-ChildItem -LiteralPath (Split-Path $target) -Filter 'keymap-backup.*').Count -eq 0) 'Unexpected backup'

    Set-Content -LiteralPath $target -Value 'Existing custom keymap'
    & $installer *> $null
    $backups = @(Get-ChildItem -LiteralPath (Split-Path $target) -Filter 'keymap-backup.*')
    Assert-True ($backups.Count -eq 1) 'Expected one backup'
    Assert-True ((Get-Content -LiteralPath (Join-Path $backups[0].FullName 'keymap.json') -Raw).Trim() -eq 'Existing custom keymap') 'Original content lost'
    & $installer *> $null
    Assert-True (@(Get-ChildItem -LiteralPath (Split-Path $target) -Filter 'keymap-backup.*').Count -eq 2) 'Backup was overwritten'
    Assert-Keymap $target

    $env:APPDATA = Join-Path $testRoot 'directory'
    $target = Join-Path $env:APPDATA 'Zed/keymap.json'
    New-Item -ItemType Directory -Path $target -Force | Out-Null
    Assert-Fails { & $installer *> $null }
    Assert-True (Test-Path -LiteralPath $target -PathType Container) 'Directory was replaced'

    # Failure after backing up must restore the original entry.
    $env:APPDATA = Join-Path $testRoot 'replacement-failure'
    $target = Join-Path $env:APPDATA 'Zed/keymap.json'
    New-Item -ItemType Directory -Path (Split-Path $target) -Force | Out-Null
    Set-Content -LiteralPath $target -Value 'Keep this keymap'
    function Move-Item {
        [CmdletBinding()]
        param([string] $LiteralPath, [string] $Destination)
        if ($LiteralPath.EndsWith('.tmp')) { throw 'Simulated replacement failure' }
        Microsoft.PowerShell.Management\Move-Item @PSBoundParameters
    }
    try { Assert-Fails { & $installer *> $null } } finally { Remove-Item Function:Move-Item }
    Assert-True ((Get-Content -LiteralPath $target -Raw).Trim() -eq 'Keep this keymap') 'Original keymap was not restored'
    Assert-True (@(Get-ChildItem -LiteralPath (Split-Path $target) -Force -Filter '*.tmp').Count -eq 0) 'Temporary file leaked'

    # Windows may require Developer Mode or elevation to create test symlinks.
    $linkedPath = Join-Path $testRoot 'linked-keymap.json'
    Set-Content -LiteralPath $linkedPath -Value 'Linked keymap'
    foreach ($broken in @($false, $true)) {
        $env:APPDATA = Join-Path $testRoot "symlink-$broken"
        $target = Join-Path $env:APPDATA 'Zed/keymap.json'
        New-Item -ItemType Directory -Path (Split-Path $target) -Force | Out-Null
        $linkTarget = if ($broken) { Join-Path $testRoot 'missing.json' } else { $linkedPath }
        try {
            New-Item -ItemType SymbolicLink -Path $target -Target $linkTarget | Out-Null
        } catch {
            Write-Host "Symlink case skipped: $($_.Exception.Message)"
            continue
        }
        & $installer *> $null
        Assert-Keymap $target
        Assert-True ([string]::IsNullOrEmpty((Get-Item -LiteralPath $target).LinkType)) 'Destination remains a symlink'
        Assert-True ((Get-Content -LiteralPath $linkedPath -Raw).Trim() -eq 'Linked keymap') 'Symlink target changed'
        $backups = @(Get-ChildItem -LiteralPath (Split-Path $target) -Filter 'keymap-backup.*')
        Assert-True ($backups.Count -eq 1) 'Symlink backup missing'
        $backup = Get-Item -LiteralPath (Join-Path $backups[0].FullName 'keymap.json') -Force
        Assert-True ($backup.LinkType -eq 'SymbolicLink') 'Symlink backup was dereferenced'
    }

    $env:APPDATA = Join-Path $testRoot 'missing-source-config'
    $missingSourceDir = Join-Path $testRoot 'missing-source/scripts'
    New-Item -ItemType Directory -Path $missingSourceDir -Force | Out-Null
    $isolatedInstaller = Join-Path $missingSourceDir 'install.ps1'
    Copy-Item -LiteralPath $installer -Destination $isolatedInstaller
    Assert-Fails { & $isolatedInstaller *> $null }
    Assert-True (-not (Test-Path -LiteralPath $env:APPDATA)) 'Config created despite missing source'

    $env:APPDATA = ''
    Assert-Fails { & $installer *> $null }
    Write-Host 'Installer OK: fresh/repeated installs, backups, symlinks, paths and rollback.'
} finally {
    $env:APPDATA = $originalAppData
    Pop-Location
    Remove-Item -LiteralPath $testRoot -Recurse -Force
}
