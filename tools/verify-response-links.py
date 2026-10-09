"""Audit read-only response PDF links, destinations, page references and site routes."""
from pathlib import Path
from urllib.parse import urlparse
import json
import re
import pdfplumber
from pypdf import PdfReader

site = Path(__file__).resolve().parents[1]
data = json.loads((site / 'data.js').read_text(encoding='utf-8').split('=', 1)[1].rsplit(';', 1)[0])
source = site.parent / data['meta']['fullResponseSource']
tex = source.read_text(encoding='utf-8')
active_tex = re.sub(r'(?<!\\)%[^\n]*', '', tex)
aux = source.with_suffix('.aux').read_text(encoding='utf-8')
reader = PdfReader(source.with_suffix('.pdf'))
labels = {m[1]: (int(m[2]), m[3]) for m in re.finditer(
    r'\\newlabel\{([^}]+)\}\{\{[^}]*\}\{(\d+)\}\{[^}]*\}\{([^}]+)\}', aux)}
destinations = reader.named_destinations
comments = {c['id']: c for c in data['comments']}
changes = {c['id']: c for c in data['changes']}
reviewlinks = re.findall(r'\\reviewlinks\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}', active_tex)
website = re.search(r'\\newcommand\{\\reviewwebsite\}\{([^}]+)\}', active_tex)[1]
link_templates = re.findall(r'\\href\{(\\reviewwebsite[^}]+)\}', active_tex)
expected_urls = set()
for cid, label, evidence in reviewlinks:
    assert comments[cid]['label'] == label, (cid, label)
    assert evidence in comments[cid]['changes'], (cid, evidence)
    assert cid in changes[evidence]['comments'], (cid, evidence)
    for template in link_templates:
        expected_urls.add(template.replace(r'\reviewwebsite', website).replace(r'\#', '#')
                          .replace('#1', cid).replace('#2', label).replace('#3', evidence))

external, internal, destination_report = [], [], []
expected_internal = [labels[label][1] for label in re.findall(r'\\hyperref\[([^\]]+)\]', active_tex)]
with pdfplumber.open(source.with_suffix('.pdf')) as pdf:
    for label, (page_number, name) in labels.items():
        assert name in destinations, ('Missing destination', label, name)
        dest = destinations[name]
        assert reader.get_destination_page_number(dest) + 1 == page_number, ('Wrong destination page', label)
        page = pdf.pages[page_number - 1]
        top = float(page.height) - float(dest['/Top'])
        assert 0 <= top < float(page.height), ('Destination outside page', label, top)
        # First rendered text below the anchor should be the corresponding heading/comment.
        lines = [line for line in page.extract_text_lines() if line['top'] >= top - 2]
        assert lines, ('Destination below all content', label)
        delta = lines[0]['top'] - top
        # A figure anchor precedes the graphic; its first extractable text can
        # be farther below it than a section/comment heading.
        max_gap = 250 if label.startswith('response-fig-') else 45
        assert -2 <= delta < max_gap, ('Vertical destination offset', label, delta)
        destination_report.append({'label': label, 'destination': name, 'page': page_number,
                                   'top_pt': round(top, 2), 'first_text_gap_pt': round(delta, 2),
                                   'first_text': lines[0]['text']})
    for page_number, page in enumerate(reader.pages, 1):
        for ref in page.get('/Annots', []):
            annot = ref.get_object()
            if annot.get('/Subtype') != '/Link':
                continue
            action = annot.get('/A', {})
            if action.get('/S') == '/URI':
                uri = str(action['/URI'])
                assert uri in expected_urls, ('Unexpected PDF website URL', uri)
                external.append({'page': page_number, 'url': uri})
            else:
                target = annot.get('/Dest', action.get('/D'))
                assert isinstance(target, str) and target in destinations, ('Unresolved internal PDF link', target)
                dest = destinations[target]
                target_page = reader.get_destination_page_number(dest) + 1
                text = pdf.pages[page_number - 1].crop(tuple(float(n) for n in (
                    annot['/Rect'][0], pdf.pages[page_number - 1].height - annot['/Rect'][3],
                    annot['/Rect'][2], pdf.pages[page_number - 1].height - annot['/Rect'][1]))).extract_text() or ''
                assert text.strip(), ('Internal link rectangle misses its text', page_number, target)
                visible_page = re.search(r'p\.\s*(\d+)', text)
                if visible_page:
                    assert int(visible_page[1]) == target_page, ('Displayed page differs from destination', text, target_page)
                internal.append({'from_page': page_number, 'target_page': target_page,
                                 'destination': target, 'text': text})
assert {link['url'] for link in external} == expected_urls
assert len(external) == len(expected_urls), 'PDF website links differ from enabled source links'
assert [link['destination'] for link in internal] == expected_internal, 'PDF internal targets differ from source navigation'
for label in re.findall(r'\\(?:hyperref\[([^\]]+)\]|pageref\*?\{([^}]+)\})', active_tex):
    assert (label[0] or label[1]) in labels, ('Unresolved TeX navigation reference', label)
report = {'response_pages': len(reader.pages), 'external_links': external,
          'internal_links': internal, 'destinations': destination_report, 'failures': []}
output = site / '.deployment/alignment-20261008'
output.mkdir(parents=True, exist_ok=True)
(output / 'response-links.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Verified {len(external)} PDF website links, {len(internal)} internal links, '
      f'{len(destination_report)} named destination positions and all visible/source page references.')
