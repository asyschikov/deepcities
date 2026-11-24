import json, sys, os, hashlib, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
W, pid, n = sys.argv[1], sys.argv[2], int(sys.argv[3])
sys.argv = [sys.argv[0], W]
import score
R = {r['id']: r for r in json.load(open(W + '/results.json'))}
r = R[pid]; p = score.plan[pid]
grams = {}
for u in r['sources_fetched']:
    t = [w.lower() for w in score.toks(json.load(open(score.CACHE + '/' + score.key(u) + '.json'))['text'])]
    for i in range(len(t) - n + 1): grams.setdefault(tuple(t[i:i+n]), u)
print(r['title'], r['copied'], '/', r['nl_sentences'])
for s in score.sentences(p['nl_summary']) + score.sentences(p['nl_body']):
    lt = [w.lower() for w in score.toks(s)]
    best = 0; cur = 0
    for i in range(len(lt) - n + 1):
        cur = cur + 1 if tuple(lt[i:i+n]) in grams else 0; best = max(best, cur)
    print('  [%s]' % (best + n - 1 if best else 0), s[:140])
