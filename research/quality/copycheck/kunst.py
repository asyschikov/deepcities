import json, sys, os, re, time, subprocess, html, glob, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
W = sys.argv[1]; sys.argv = [sys.argv[0], W]
import fetch
UA = fetch.UA
def get(url, hdr=None):
    cmd = ['curl', '-sL', '-A', UA] + (['-H', hdr] if hdr else []) + [url]
    return subprocess.run(cmd, capture_output=True).stdout.decode(errors='replace')
groups = collections.defaultdict(dict)
for f in glob.glob(fetch.CACHE + '/*.json'):
    r = json.load(open(f))
    if r['ok']: continue
    m = re.match(r'https?://((?:www\.)?buitenkunstamsterdam\.nl|[a-z]+\.kunstwacht\.nl)/(?:Kunstwerken|kunstwerken/bekijk|Plattegrond)/(\d+)', r['url'], re.I)
    if m: groups['https://' + m.group(1).lower().replace('buitenkunstamsterdam', 'www.buitenkunstamsterdam').replace('www.www.', 'www.')][r['url']] = m.group(2)
for site, um in groups.items():
    page = get(site + '/')
    base = re.search(r'data-base-url="([^"]+)"', page); tok = re.search(r'data-token="([^"]+)"', page)
    if not (base and tok): print('no token for', site); continue
    ids = sorted(set(um.values()), key=int); found = {}
    for i in range(0, len(ids), 40):
        url = base.group(1) + '/api/v1/art-objects-frontend?page=1&itemsPerPage=100&f1n=id&f1o=in&f1v=' + ','.join(ids[i:i+40])
        d = json.loads(get(url, 'token: ' + tok.group(1)))
        for o in d.get('data', []):
            desc = html.unescape(re.sub(r'<[^>]+>', ' ', o.get('description') or ''))
            arts = ' '.join(' '.join(filter(None, [a.get('firstName'), a.get('interjection'), a.get('surName')])) for a in (o.get('artists') or {}).values())
            found[str(o['id'])] = '%s. %s. %s' % (o.get('title', ''), arts, desc)
        time.sleep(1)
    for u, i in um.items():
        t = found.get(i, '')
        json.dump(dict(url=u, ok=len(t.split()) > 8, text=t, status=200, kind='kunstwacht-api'), open(fetch.cpath(u), 'w'), ensure_ascii=False)
    print(site, len(um), 'urls', len(found), 'found', sum(1 for i in um.values() if len(found.get(i, '').split()) > 8), 'with text')
