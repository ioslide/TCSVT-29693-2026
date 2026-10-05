# Website publishing

This directory is the Git checkout for ioslide/TCSVT-29693-2026. The user requested ongoing GitHub Pages publication at https://tcsvt-29693-2026.xhy.im.

For completed website edit requests, verify the site and publish the finished changes using tools/publish.ps1 unless the user explicitly asks to keep the changes local or not publish. Do not publish incomplete intermediate edits. Read-only reviews do not trigger publication.

The existing tools/verify-review.mjs checks the site's content against latex_revise/main.tex and the v14 response source. Both manuscript and response inputs are read-only; synchronization modifies website files only. GitHub Actions uses the self-contained tools/build-site.mjs to validate and package only static website files. The local authoring sources remain outside this repository.

Check the GitHub Actions result after pushing and distinguish an uploaded commit from a successful live deployment. Never store authentication tokens in the repository.
