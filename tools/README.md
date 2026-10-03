# 回复同步与检查

当前回复来源为 `revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v13/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v13.tex`。先编译回复稿，再从网站目录运行：

```text
node tools/sync-review.mjs
node tools/verify-review.mjs
```

依赖为 Node.js、Pandoc 和已有 LaTeX 安装。解析器兼容 Pandoc 的新旧表格格式，并将 makecell 内换行保留在同一表格单元格中。

`sync-review.mjs` 更新 17 条完整作者回复、9 个证据表格、热图和回复 PDF，保留网页交互及论文摘录。`sync-review-v12.mjs` 文件名保留历史版本标记，当前解析来源已更新为 v13，同时负责论文摘录同步；一般回复更新请使用前者。

`verify-review.mjs` 直接解析 v13，逐块核对开场信和 17 条完整回复，并检查三份 PDF、论文源码哈希、表格结构、数学表达和差异内容。DCF-Lite 的参数快照与固定参照生命周期用文字说明，检查会防止重新引入新增代理符号。

`sync-assets.py` 仅在论文 PDF、分页或摘录范围改变时使用，需要 PyMuPDF、Pillow，并须重新核对证据框。它会重建论文页面及裁剪图；不应仅为更新作者回复而运行。

只更新修改后论文时，使用 `python tools/sync-assets.py --version revised`，保留原稿和回复 PDF。渲染器沿用 `data.js` 中已核对的框选坐标，不再覆盖成历史坐标。排版更新后，须检查各映射的页码和范围，并同步论文摘录与叙述差异。

同步论文摘录时可设置 `REVIEW_MANUSCRIPT_ONLY=1` 后运行 `node tools/sync-review-v12.mjs`，保留回复正文、开场信及回复来源信息，且不复制回复 PDF。

网页可直接打开 `website/index.html`。Native PDFs 可通过本地静态服务读取完整 PDF；文件协议下保留页面图片和源 PDF 链接作为备用。
