param([string]$Message = 'Update manuscript review website')
$ErrorActionPreference = 'Stop'
$siteDirectory = Split-Path -Parent $PSScriptRoot
$bundledNode = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$nodeCommand = if (Test-Path -LiteralPath $bundledNode) { $bundledNode } else { (Get-Command node -ErrorAction Stop).Source }
Push-Location -LiteralPath $siteDirectory
try {
    $branch = git branch --show-current
    if ($LASTEXITCODE -ne 0 -or $branch -ne 'main') { throw 'Publishing requires the main branch.' }
    $remote = git remote get-url origin
    if ($LASTEXITCODE -ne 0 -or $remote -ne 'https://github.com/ioslide/TCSVT-29693-2026.git') { throw 'Unexpected publishing destination.' }
    & $nodeCommand (Join-Path $PSScriptRoot 'verify-review.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Manuscript synchronization verification failed.' }
    & $nodeCommand (Join-Path $PSScriptRoot 'build-site.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Website packaging failed.' }
    git add --all
    if ($LASTEXITCODE -ne 0) { throw 'Could not stage website changes.' }
    git diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
        git commit -m $Message
        if ($LASTEXITCODE -ne 0) { throw 'Could not commit website changes.' }
    } elseif ($LASTEXITCODE -ne 0) { throw 'Could not inspect staged changes.' }
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw 'GitHub upload failed; deployment has not been triggered.' }
    Write-Output 'Uploaded to GitHub. GitHub Actions will automatically deploy this commit.'
} finally { Pop-Location }
