"""Render source PDFs and evidence crops with PyMuPDF and Pillow."""
import hashlib
import io
import json
from pathlib import Path
import shutil

import fitz
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SITE = ROOT / "website"
path = SITE / "data.js"
data = json.loads(path.read_text(encoding="utf-8").split("=", 1)[1].rsplit(";", 1)[0])


def image(page, box=None):
    clip = None
    if box:
        x, y, w, h = box
        clip = fitz.Rect(x / 100 * page.rect.width, y / 100 * page.rect.height,
                         (x + w) / 100 * page.rect.width, (y + h) / 100 * page.rect.height)
    pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), clip=clip, alpha=False)
    return Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")


# These passages changed on p. 4; the remaining mapped passages retain their layout.
changes = {c["id"]: c for c in data["changes"]}
changes["pcs-definition"]["revised"]["box"] = [7.516, 64.773, 42.157, 16.162]
changes["probe-theory"]["revised"]["boxes"] = [[7.516, 80.808, 42.157, 13.889], [50.49, 32.576, 42.4, 13.7]]
changes["probe-theory"]["revised"]["box"] = changes["probe-theory"]["revised"]["boxes"][0]
changes["regions"]["revised"]["box"] = [50.49, 63.8, 42.4, 9.9]
changes["domainnet"]["revised"]["box"] = [50.49, 37.5, 42.4, 18.7]
changes["transfer"]["revised"]["box"] = [50.49, 17.4, 42.4, 50.3]
changes["threshold-guidance"]["revised"]["box"] = [50.49, 68.6, 42.4, 21.5]
for figure in data["figures"]:
    if "transfer" in figure.get("changes", []):
        figure["revised"]["box"] = changes["transfer"]["revised"]["box"]

for version, directory in [("original", "latex_old_version"), ("revised", "latex")]:
    source = ROOT / directory / "main.pdf"
    doc = fitz.open(source)
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

# Figure 11(b) includes signed values and a method-average column in the current source.
probe = fitz.open(ROOT / "latex/domainnet_heatmap_with_gain.pdf")
changes["domainnet"]["after"] = probe[0].get_text()
changes["domainnet"]["diff"] = {"original": [], "revised": [{"kind": "add", "text": changes["domainnet"]["after"]}]}
response_source = ROOT / data["meta"]["fullResponseSource"]
response_pdf = response_source.with_suffix(".pdf")
data["meta"]["responsePages"] = len(fitz.open(response_pdf))
data["meta"]["responsePdfSha256"] = hashlib.sha256(response_pdf.read_bytes()).hexdigest()
shutil.copyfile(response_pdf, SITE / "assets/pdf/response.pdf")
shutil.copyfile(response_source.parent / "assets/retention_gate_heatmap.png", SITE / "assets/response/retention-gates.png")
path.write_text("window.REVIEW_DATA=" + json.dumps(data, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
print("Synchronized both source PDFs, all page previews, mapped crops, and figure data.")
