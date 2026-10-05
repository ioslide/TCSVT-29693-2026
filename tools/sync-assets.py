"""Render read-only source PDFs and evidence crops with PDFium and Pillow."""
import hashlib
import argparse
import json
from pathlib import Path
import shutil

import pypdfium2 as pdfium
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "website"
path = SITE / "data.js"
data = json.loads(path.read_text(encoding="utf-8").split("=", 1)[1].rsplit(";", 1)[0])
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--version", action="append", choices=["original", "revised"],
                    help="Refresh only the selected manuscript; omit to refresh both and the response assets.")
args = parser.parse_args()
versions = set(args.version or ["original", "revised"])


def image(page, box=None):
    rendered = page.render(scale=2.5).to_pil().convert("RGB")
    if box:
        x, y, w, h = box
        rendered = rendered.crop((round(x / 100 * rendered.width), round(y / 100 * rendered.height),
                                  round((x+w) / 100 * rendered.width), round((y+h) / 100 * rendered.height)))
    return rendered


# Coordinates are measured against the PDF and stored in data.js. Preserve them
# when rendering; a renderer must not reset reviewed boxes to an older layout.
changes = {c["id"]: c for c in data["changes"]}

for version, directory in [("original", "latex_old_version"), ("revised", "latex_revise")]:
    if version not in versions:
        continue
    source = ROOT / directory / "main.pdf"
    doc = pdfium.PdfDocument(source)
    data["meta"]["pages"][version] = len(doc)
    data["meta"]["hashes"][version]["pdf"] = hashlib.sha256(source.read_bytes()).hexdigest()
    shutil.copyfile(source, SITE / "assets" / "pdf" / f"{version}.pdf")
    for i, page in enumerate(doc, 1):
        image(page).save(SITE / "assets" / "pages" / f"{version}-{i}.webp", quality=90)
    for item in [*data["changes"], *data["figures"]]:
        ref = item.get(version)
        if not ref or "box" not in ref:
            continue
        pieces = [image(doc[ref["page"] - 1], box) for box in ref.get("boxes", [ref["box"]])]
        width = max(p.width for p in pieces)
        gap = 12
        crop = Image.new("RGB", (width, sum(p.height for p in pieces) + gap * (len(pieces) - 1)), "white")
        y = 0
        for piece in pieces:
            crop.paste(piece, (0, y))
            y += piece.height + gap
        crop.save(SITE / ref["image"], quality=92)
        ref["aspect"] = crop.width / crop.height

# Text diffs are synchronized from LaTeX, not from PDF glyph extraction.
if args.version is None:
    response_source = ROOT / data["meta"]["fullResponseSource"]
    response_pdf = response_source.with_suffix(".pdf")
    data["meta"]["responsePages"] = len(pdfium.PdfDocument(response_pdf))
    data["meta"]["responsePdfSha256"] = hashlib.sha256(response_pdf.read_bytes()).hexdigest()
    shutil.copyfile(response_pdf, SITE / "assets/pdf/response.pdf")
    shutil.copyfile(response_source.parent / "assets/retention_gate_heatmap.png", SITE / "assets/response/retention-gates.png")
    for filename in ["ab_margin_3d_lambda_u2.pdf", "ab_margin_3d_N_sk_varepsilon.pdf",
                     "imagenet_c_cross_heatmap_with_gain.pdf", "domainnet_heatmap_with_gain.pdf"]:
        panel = pdfium.PdfDocument(response_source.parent / "assets" / filename)
        image(panel[0]).save(SITE / "assets/response" / filename.replace(".pdf", ".png"))
path.write_text("window.REVIEW_DATA=" + json.dumps(data, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
print("Synchronized " + ", ".join(sorted(versions)) + " PDF(s), page previews, mapped crops, and figure data.")
