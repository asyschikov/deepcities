import json, sys, os, re, hashlib, collections, unicodedata
W = '/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/copycheck'
N = 8
plan = json.load(open(W + '/plan.json'))
CACHE = W + '/dl/cache'
key = lambda u: hashlib.sha1(u.encode()).hexdigest()
SKIP = re.compile(r'^https?://(en|de|fr)\.(m\.)?wikipedia\.org|commons\.wikimedia\.org|^wd:|wikidata\.org|google\.|youtube\.com|instagram\.com|facebook\.com|\.(jpg|jpeg|png|gif)$', re.I)
PART = {'van','de','der','den','het','t','te','ten','ter','la','le','du','des','op','aan','in','en'}
def toks(s):
    s = unicodedata.normalize('NFC', s).replace('’', "'").replace('‘', "'")
    return [w.replace("'", '') for w in re.findall(r"[\w']+", s) if w.replace("'", '')]
def clean_md(s):
    s = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', s)
    return re.sub(r'[*_`#>]', '', s)
def sentences(text):
    out = []
    for line in clean_md(text).split('\n'):
        line = re.sub(r'^\s*[-•]\s*', '', line).strip()
        if not line: continue
        for s in re.split(r'(?<=[.!?;])\s+(?=["\'(\[]?[A-Z0-9À-Þ])', line):
            if len(toks(s)) >= 4: out.append(s.strip())
    return out
def substantive(orig_tokens):
    n = sum(1 for w in orig_tokens if w.isalpha() and w == w.lower() and w.lower() not in PART)
    return n >= 3
def src_for(p):
    res = []
    for u in p['sources']:
        if SKIP.search(u): continue
        res.append(u)
    res += ['amsmon:' + n for n in p['mons']]
    for n in p['mons']:
        u = 'https://monumentenregister.cultureelerfgoed.nl/monumenten/' + n
        if os.path.exists(CACHE + '/' + key(u) + '.json'): res.append(u)
    return list(dict.fromkeys(res))

patches = json.load(open(sys.argv[1]))
byid = {x['id']: x for x in patches}
results = []
for pid, x in byid.items():
    p = dict(plan[pid]); nl = ((x.get('patch') or {}).get('translations') or {}).get('nl') or {}
    if 'summary' in nl: p['nl_summary'] = nl['summary'] or ''
    if 'body' in nl: p['nl_body'] = nl['body'] or ''
    plan_one = {pid: p}
    for p in plan_one.values():
        srcs, fails, grams = [], [], {}
        for u in src_for(p):
            cp = CACHE + '/' + key(u) + '.json'
            if not os.path.exists(cp): fails.append(dict(url=u, why='not fetched')); continue
            r = json.load(open(cp))
            if not r.get('ok'):
                fails.append(dict(url=u, why='status %s%s' % (r.get('status'), ' ' + r['error'][:80] if r.get('error') else ''))); continue
            srcs.append(u)
            t = [w.lower() for w in toks(r['text'])]
            for i in range(len(t) - N + 1):
                grams.setdefault(tuple(t[i:i+N]), u)
        sents = sentences(p['nl_summary']) + sentences(p['nl_body'])
        copied, longest = [], dict(len=0, text='', source='')
        for s in sents:
            ot = toks(s); lt = [w.lower() for w in ot]
            hit = [tuple(lt[i:i+N]) in grams for i in range(len(lt) - N + 1)]
            # merge hits into runs
            runs, i = [], 0
            while i < len(hit):
                if hit[i]:
                    j = i
                    while j + 1 < len(hit) and hit[j+1]: j += 1
                    runs.append((i, j + N)); i = j + 1
                else: i += 1
            good = [(a, b) for a, b in runs if substantive(ot[a:b])]
            if good:
                a, b = max(good, key=lambda r: r[1] - r[0])
                src = grams[tuple(lt[a:a+N])]
                copied.append(dict(sentence=s, run=' '.join(lt[a:b]), run_len=b - a, source=src))
                if b - a > longest['len']: longest = dict(len=b - a, text=' '.join(lt[a:b]), source=src)
        n = len(sents); c = len(copied)
        share = round(c / n, 3) if n else 0.0
        band = '>50%' if share > 0.5 else '3+ or >25%' if (c >= 3 or share > 0.25) else '1-2' if c else '0'
        results.append(dict(id=p['id'], title=p['title'], borough=p['borough'], nl_sentences=n, copied=c,
            copied_share=share, band=band, sources_used=sorted({x['source'] for x in copied}),
            longest_run=longest, copied_sentences=copied, sources_fetched=srcs, sources_failed=fails))
    
for r in results:
    print(r['band'], r['copied'], '/', r['nl_sentences'], r['title'])
    for c in r['copied_sentences']: print('    COPIED', c['run_len'], 'words from', c['source'], ':', c['run'][:120])
