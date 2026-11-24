import json, sys, os, re, hashlib, subprocess, time, html, threading, urllib.parse, collections
from concurrent.futures import ThreadPoolExecutor
W = sys.argv[1]
CACHE = W + '/dl/cache'; os.makedirs(CACHE, exist_ok=True)
UA = 'deep-cities-research/0.1'
plan = json.load(open(W + '/plan.json'))
key = lambda u: hashlib.sha1(u.encode()).hexdigest()
def cpath(u): return CACHE + '/' + key(u) + '.json'
def curl(url):
    for attempt in range(5):
        b, st, ct = curl1(url)
        if st not in (429, 503, 0): return b, st, ct
        time.sleep(20 * (attempt + 1))
    return b, st, ct
def curl1(url):
    r = subprocess.run(['curl', '-sL', '--compressed', '--max-time', '40', '-A', UA, '-w', '\n__META__%{http_code} %{content_type}', url], capture_output=True)
    out = r.stdout
    i = out.rfind(b'\n__META__')
    meta = out[i+9:].decode(errors='replace').split(' ', 1) if i >= 0 else ['000', '']
    return out[:i] if i >= 0 else out, int(meta[0] or 0), (meta[1] if len(meta) > 1 else '')
def strip_html(b):
    t = b.decode('utf-8', errors='replace')
    t = re.sub(r'(?is)<(script|style|noscript|svg)\b.*?</\1>', ' ', t)
    t = re.sub(r'(?is)<!--.*?-->', ' ', t)
    t = re.sub(r'(?i)<(br|p|div|li|h\d|tr)\b[^>]*>', '\n', t)
    t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    return re.sub(r'[ \t\r\f\v]+', ' ', t)
def pdftext(b):
    p = CACHE + '/tmp_%d.pdf' % threading.get_ident()
    open(p, 'wb').write(b)
    r = subprocess.run(['pdftotext', '-q', p, '-'], capture_output=True)
    os.remove(p); return r.stdout.decode(errors='replace')
def wiki_title(u):
    m = re.match(r'https?://nl\.(?:m\.)?wikipedia\.org/wiki/([^#?]+)', u)
    return urllib.parse.unquote(m.group(1)).replace('_', ' ') if m else None
def fetch_one(u):
    cp = cpath(u)
    if os.path.exists(cp): return
    rec = dict(url=u, ok=False, text='', status=0, kind='')
    try:
        t = wiki_title(u)
        if t:
            api = 'https://nl.wikipedia.org/w/api.php?' + urllib.parse.urlencode(dict(action='query', prop='extracts', explaintext=1, redirects=1, titles=t, format='json', formatversion=2))
            b, s, ct = curl(api); d = json.loads(b)
            pg = d['query']['pages'][0]
            rec.update(kind='wiki', status=s, text=pg.get('extract', ''), ok=bool(pg.get('extract')))
        elif u.startswith('amsmon:'):
            n = u[7:]
            b, s, ct = curl('https://api.data.amsterdam.nl/v1/monumenten/monumenten/?_format=json&monumentnummer=' + n)
            ms = json.loads(b).get('_embedded', {}).get('monumenten', [])
            txt = '\n'.join(str(v) for m in ms for k, v in m.items() if isinstance(v, str) and len(v) > 40 and k not in ('_links',))
            rec.update(kind='amsmon', status=s, text=txt, ok=bool(ms), statuses=[m.get('status') for m in ms])
        elif re.match(r'https?://(api\.)?data\.amsterdam\.nl/(v1/)?monumenten/(monumenten/)?[0-9a-f-]{36}', u):
            uid = re.search(r'[0-9a-f-]{36}', u).group(0)
            b, s, ct = curl('https://api.data.amsterdam.nl/v1/monumenten/monumenten/%s?_format=json' % uid)
            m = json.loads(b)
            txt = '\n'.join(str(v) for k, v in m.items() if isinstance(v, str) and len(v) > 40)
            rec.update(kind='amsmon', status=s, text=txt, ok=s == 200)
        else:
            b, s, ct = curl(u)
            if 'pdf' in ct or b[:5] == b'%PDF-': txt = pdftext(b)
            elif 'json' in ct: txt = b.decode(errors='replace')
            else: txt = strip_html(b)
            rec.update(kind='page', status=s, text=txt, ok=(200 <= s < 300 and len(txt.split()) > 30), ctype=ct)
    except Exception as e:
        rec['error'] = repr(e)[:300]
    json.dump(rec, open(cp, 'w'), ensure_ascii=False)
def host(u):
    if u.startswith('amsmon:'): return 'api.data.amsterdam.nl'
    return urllib.parse.urlparse(u).netloc.lower().removeprefix('www.')
SKIP = re.compile(r'^https?://(en|de|fr)\.(m\.)?wikipedia\.org|commons\.wikimedia\.org|^wd:|wikidata\.org|google\.|youtube\.com|instagram\.com|facebook\.com|\.(jpg|jpeg|png|gif)$', re.I)
def all_urls():
    us = set()
    for p in plan.values():
        for u in p['sources']:
            if not SKIP.search(u) and not wiki_title(u): us.add(u)
        for n in p['mons']: us.add('amsmon:' + n)
    return us
if __name__ == '__main__':
    mode = sys.argv[2] if len(sys.argv) > 2 else 'all'
    us = all_urls()
    if mode == 'rce':  # RCE pages for monument numbers that are not purely municipal
        us = set()
        for p in plan.values():
            for n in p['mons']:
                cp = cpath('amsmon:' + n)
                st = json.load(open(cp)).get('statuses', []) if os.path.exists(cp) else []
                if not st or any('ijks' in (x or '') for x in st):
                    us.add('https://monumentenregister.cultureelerfgoed.nl/monumenten/' + n)
    def bad(u):
        try: r = json.load(open(cpath(u)))
        except Exception: return True
        return r.get('status') in (0, 429, 503) or bool(r.get('error'))
    todo = [u for u in us if not os.path.exists(cpath(u)) or bad(u)]
    for u in todo:
        if os.path.exists(cpath(u)): os.remove(cpath(u))
    groups = collections.defaultdict(list)
    for u in todo: groups[host(u)].append(u)
    print(len(us), 'urls,', len(todo), 'to fetch,', len(groups), 'hosts', flush=True)
    def run_host(h):
        delay = 1.2 if 'wikipedia' in h else 3.0 if h in ('4en5mei.nl', 'nhnieuws.nl') else 1.0
        for u in groups[h]:
            fetch_one(u); time.sleep(delay)
    with ThreadPoolExecutor(12) as ex:
        list(ex.map(run_host, sorted(groups, key=lambda h: -len(groups[h]))))
    print('done', flush=True)
