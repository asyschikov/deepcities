"""Compact review dump: per item, tail of text after rank, strong draft candidates, cross-scout neighbours."""
import json, math, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
items = json.load(open(os.path.join(HERE, "items.json")))
drafts = json.load(open(os.path.join(HERE, "drafts.json")))
scouts = sys.argv[1].split(",") if len(sys.argv) > 1 else None


def dist(a, b, c, d):
    return math.hypot((a - c) * 111320, (b - d) * 111320 * math.cos(math.radians(a)))


for it in items:
    if scouts and it["scout"] not in scouts:
        continue
    t = it["text"]
    tail = it["rank_text"][:170].replace("\n", " ")
    print(f"\n{it['id']} [{it['rank']}] {it['title'][:120]} | {it['wijk']}{' ~' if it['pin_approx'] else ''}")
    print(f"   tail: {tail}")
    for i, v in it["cands"]:
        m = re.match(r"(\d+)m", v)
        if (m and int(m.group(1)) <= 35) or "MON" in v or "ADDR" in v:
            d = drafts[i]
            print(f"   D {v:>9} {d['slice']}: {d['title'][:85]} [{d['address']}] :: {d['summary'][:110]}")
    if it["lat"]:
        for o in items:
            if o["scout"] != it["scout"] and o["lat"] and dist(it["lat"], it["lng"], o["lat"], o["lng"]) <= 45:
                print(f"   X {dist(it['lat'], it['lng'], o['lat'], o['lng']):.0f}m {o['id']}: {o['title'][:80]}")
