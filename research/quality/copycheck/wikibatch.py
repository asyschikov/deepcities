import json, sys, os, re, time, subprocess, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
W = sys.argv[1]
sys.argv = [sys.argv[0], W]
import fetch
def wikitext_to_text(t):
    t = re.sub(r'(?s)<!--.*?-->', '', t)
    t = re.sub(r'(?s)<ref[^>/]*/>', '', t)
    t = re.sub(r'(?s)<ref[^>]*>.*?</ref>', '', t)
    for _ in range(4): t = re.sub(r'\{\{[^{}]*\}\}', ' ', t)
    t = re.sub(r'(?s)\{\|.*?\|\}', ' ', t)
    t = re.sub(r'\[\[(?:Bestand|Afbeelding|File|Image|Categorie|Category):[^\[\]]*(\[\[[^\]]*\]\][^\[\]]*)*\]\]', ' ', t)
    t = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', t)
    t = re.sub(r'\[https?://\S+\s*([^\]]*)\]', r'\1', t)
    t = re.sub(r"'{2,}", '', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'^=+\s*(.*?)\s*=+\s*$', r'\1.', t, flags=re.M)
    return t
urls = sorted({u for p in fetch.plan.values() for u in p['sources'] if fetch.wiki_title(u)})
todo = []
for u in urls:
    cp = fetch.cpath(u)
    if os.path.exists(cp):
        r = json.load(open(cp))
        if r.get('ok'): continue
    todo.append(u)
print(len(urls), 'wiki urls', len(todo), 'todo', flush=True)
for i in range(0, len(todo), 50):
    chunk = todo[i:i+50]
    titles = {u: fetch.wiki_title(u) for u in chunk}
    api = 'https://nl.wikipedia.org/w/api.php'
    data = urllib.parse.urlencode(dict(action='query', prop='revisions', rvprop='content', rvslots='main', redirects=1, format='json', formatversion=2, titles='|'.join(sorted(set(titles.values())))))
    for attempt in range(6):
        r = subprocess.run(['curl', '-s', '-A', fetch.UA, '-w', '\n%{http_code}', '--data', data, api], capture_output=True)
        body, _, st = r.stdout.rpartition(b'\n')
        if st == b'200': break
        time.sleep(20 * (attempt + 1))
    d = json.loads(body)['query']
    m = {}
    for k in ('normalized', 'redirects'):
        for x in d.get(k, []): m[x['from']] = x['to']
    pages = {pg['title']: pg for pg in d.get('pages', [])}
    for u, t in titles.items():
        tt = t
        for _ in range(3): tt = m.get(tt, tt)
        pg = pages.get(tt)
        txt = ''
        if pg and pg.get('revisions'): txt = wikitext_to_text(pg['revisions'][0]['slots']['main']['content'])
        json.dump(dict(url=u, ok=bool(txt), text=txt, status=200 if pg else 0, kind='wiki', resolved=tt, missing=bool(pg and pg.get('missing'))), open(fetch.cpath(u), 'w'), ensure_ascii=False)
    print(i, flush=True)
    time.sleep(15)
