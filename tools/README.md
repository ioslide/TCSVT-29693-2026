# 回复同步与检查

当前修改稿来源为 `latex_revise/main.tex` 与同目录 `main.pdf`；回复来源为 `revise/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14/Response_to_Editors_and_Reviewers_TCSVT_GPT5-6_v14.tex` 及其 PDF。论文、回复稿及其源图均只读；工具仅写入 `website`，使用作者已经编译好的 PDF。从网站目录运行：

```text
node tools/sync-review.mjs
node tools/verify-review.mjs
```

依赖为 Node.js、Pandoc 和已有 LaTeX 安装。解析器兼容 Pandoc 的新旧表格格式，并将 makecell 内换行保留在同一表格单元格中。

`sync-review.mjs` 更新 17 条完整作者回复、问题原文与标题、表格、证据图引用和回复 PDF，保留网页交互及论文摘录。`sync-review-v12.mjs` 文件名保留历史版本标记，当前解析来源为 v14，同时负责论文摘录同步；一般回复更新请使用前者。解析器支持新版 Comment 标题、有序/无序列表、引用、数学公式、图注与表格标题。

`verify-review.mjs` 直接解析 v14，逐块核对开场信、问题原文、标题与 17 条完整回复，并检查三份 PDF、论文源码哈希、表格结构、数学表达和差异内容。网站回复遵循 v14 的观点、数据与论证力度；解析器 `directResponse` 仅把明确列出的防御式句型改为直接陈述。审稿意见、论文摘录与数学公式保持来源原文。

`sync-assets.py` 仅在论文 PDF、分页或摘录范围改变时使用，需要 PDFium、Pillow，并须重新核对证据框。它会重建论文页面及裁剪图。不带 `--version` 会同时渲染 v14 回复稿的五幅 PDF 证据图。

只更新修改后论文时，使用 `python tools/sync-assets.py --version revised`，保留原稿和回复 PDF。渲染器沿用 `data.js` 中已核对的框选坐标，不再覆盖成历史坐标。排版更新后，须检查各映射的页码和范围，并同步论文摘录与叙述差异。

同步论文摘录时可设置 `REVIEW_MANUSCRIPT_ONLY=1` 后运行 `node tools/sync-review-v12.mjs`，保留回复正文、开场信及回复来源信息，且不复制回复 PDF。

`align-evidence-v14.py` 使用 pdfplumber 测量本次新版 Related Work、传感器文献、survey/GOLD、PCS 理论与四区域定义的坐标。其段落边界针对当前 v14 排版；未来重排后须重新测量，不能直接复用。须检查所有裁剪图和框选后的页面，确保裁剪与 Text diff 范围对应。

最新正文的 Hyperparameter Sensitivity 全段位于第 11 页，不再跨到第 12 页。Table IV 位于第 8 页右栏；Fig. 12(c)/(d) 只裁剪完整子图，文字模式使用回复稿的完整子图注。`sync-compiled-evidence.py` 同步八个 PDF 表格/面板摘录、两个子图注和证据标题。GOLD 摘录按句子边界结束，避免源码空行变化导致截取后续章节。

完成同步后，运行 `verify-review.mjs` 对照全部回复、正文分节和图注，再用具备 PyMuPDF 的本地 Python 运行 `verify-evidence-content.py`，检查图表编号、子图、表格摘录与实际框选范围。`verify-browser.cjs`、`verify-pdf-context.cjs`、`verify-evidence-paging.cjs` 和 `verify-evidence-navigation.cjs` 检查桌面及手机端显示与导航；可通过 `REVIEW_URL` 设置静态服务地址。

网页可直接打开 `website/index.html`。Native PDFs 可通过本地静态服务读取完整 PDF；文件协议下保留页面图片和源 PDF 链接作为备用。
