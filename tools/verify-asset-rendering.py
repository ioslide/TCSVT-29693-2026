"""Compare every published page/crop/response figure to the read-only PDFs."""
from pathlib import Path
from functools import lru_cache
import hashlib
import json
import io
import pypdfium2 as pdfium
from PIL import Image, ImageChops, ImageStat, ImageDraw

site = Path(__file__).resolve().parents[1]
data = json.loads((site / 'data.js').read_text(encoding='utf-8').split('=', 1)[1].rsplit(';', 1)[0])
docs = {version: pdfium.PdfDocument(site.parent / directory / 'main.pdf') for version, directory in
        [('original', 'latex_old_version'), ('revised', 'latex_revise')]}
output = site / '.deployment/alignment-20261008'
output.mkdir(parents=True, exist_ok=True)
checks, tiles = [], []

@lru_cache(maxsize=8)
def page_image(version, number):
    return docs[version][number - 1].render(scale=2.5).to_pil().convert('RGB')

def compare(asset, expected, **detail):
    actual = Image.open(site / asset).convert('RGB')
    assert actual.size == expected.size, (asset, actual.size, expected.size)
    # Re-encode using the site's renderer, so compression alone is not an error.
    if asset.endswith('.webp'):
        encoded = io.BytesIO()
        expected.save(encoded, format='WEBP', quality=90 if '/pages/' in asset else 92)
        encoded.seek(0)
        expected = Image.open(encoded).convert('RGB')
    difference = max(ImageStat.Stat(ImageChops.difference(actual, expected)).mean)
    assert difference < 1.0, ('Stale or misaligned raster', asset, difference)
    checks.append({'asset': asset, 'mean_pixel_difference': round(difference, 5), **detail})

for version, document in docs.items():
    for n in range(1, len(document) + 1):
        compare(f'assets/pages/{version}-{n}.webp', page_image(version, n), kind='page')
for item in [*data['changes'], *data['figures']]:
    for version in docs:
        ref = item.get(version)
        if not ref or 'box' not in ref:
            continue
        regions = ref.get('regions', [{'page': ref['page'], 'box': box}
                                    for box in ref.get('boxes', [ref['box']])])
        pieces = []
        for region in regions:
            rendered = page_image(version, region['page'])
            x, y, w, h = region['box']
            pieces.append(rendered.crop((round(x / 100 * rendered.width), round(y / 100 * rendered.height),
                round((x + w) / 100 * rendered.width), round((y + h) / 100 * rendered.height))))
        expected = Image.new('RGB', (max(p.width for p in pieces),
            sum(p.height for p in pieces) + 12 * (len(pieces) - 1)), 'white')
        y = 0
        for piece in pieces:
            expected.paste(piece, (0, y))
            y += piece.height + 12
        compare(ref['image'], expected, kind='crop', id=item['id'], version=version)
        if version == 'revised':
            tile = Image.new('RGB', (600, 570), '#e8edf3')
            draw = ImageDraw.Draw(tile)
            draw.text((10, 8), f"{item['id']} | p.{ref['page']} | {ref['label']}", fill='black')
            thumb = expected.copy()
            thumb.thumbnail((580, 530))
            tile.paste(thumb, ((600 - thumb.width) // 2, 35))
            tiles.append(tile)
response = (site.parent / data['meta']['fullResponseSource']).parent
for filename in ['ab_margin_3d_lambda_u2', 'ab_margin_3d_N_sk_varepsilon',
                 'imagenet_c_cross_heatmap_with_gain', 'domainnet_heatmap_with_gain']:
    doc = pdfium.PdfDocument(response / 'assets' / (filename + '.pdf'))
    compare('assets/response/' + filename + '.png', doc[0].render(scale=2.5).to_pil().convert('RGB'), kind='response')
assert hashlib.sha256((site / 'assets/response/retention-gates.png').read_bytes()).digest() == hashlib.sha256(
    (response / 'assets/retention_gate_heatmap.png').read_bytes()).digest()
for start in range(0, len(tiles), 6):
    sheet = Image.new('RGB', (1800, 1140), 'white')
    for index, tile in enumerate(tiles[start:start + 6]):
        sheet.paste(tile, ((index % 3) * 600, (index // 3) * 570))
    sheet.save(output / f'crops-{start // 6 + 1}.png')
(output / 'asset-rendering.json').write_text(json.dumps(checks, indent=2), encoding='utf-8')
print(f'Verified {len(checks)} page previews, evidence crops and response panel renders; heatmap bytes match source.')
