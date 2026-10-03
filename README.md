# TCSVT 29693 2026 revision review website

Interactive manuscript revision review with reviewer responses, PDF comparisons, figures, and a change map.

Site: https://tcsvt-29693-2026.xhy.im

Repository: https://github.com/ioslide/TCSVT-29693-2026

Every push to `main` runs `.github/workflows/pages.yml`, validates the static assets, packages the website, and publishes it to GitHub Pages. No npm installation is needed to package the site. Deployment excludes the local authoring tools and Git metadata. A content hash in the published script and stylesheet URLs avoids retaining old code after an update.

From the original Windows manuscript workspace, publish a finished local change with:

```powershell
& 'X:\work\papers\TCSVT_DCF\website\tools\publish.ps1' -Message 'Describe the website update'
```

This verifies manuscript synchronization, commits website changes, and pushes to GitHub. Saving a local file alone does not upload it; the command completes that step. Subsequent website edits performed by an agent in this checkout follow `AGENTS.md` and publish after verification unless instructed otherwise.

The original synchronization utilities in `tools/README.md` require the surrounding local manuscript files. They are not needed by the public deployment workflow.

Custom-domain DNS in Cloudflare:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | TCSVT-29693-2026 | ioslide.github.io | DNS only |

The custom domain must also be configured in the repository's GitHub Pages settings. The `CNAME` file documents the intended domain; the Actions workflow does not configure the Pages domain from that file.
