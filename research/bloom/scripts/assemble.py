"""Merge research/bloom/places/*.json into import drafts for `dc import bloom`.
Usage: AMS_RAW=<dir> python3 -B assemble.py [slice ...] > out.json"""
import json, glob, os, sys, math
sys.path.insert(0, os.path.dirname(__file__))
import areas
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
want = set(sys.argv[1:])
drafts, seen = [], {}
for f in sorted(glob.glob(os.path.join(HERE, "places", "*.json"))):
    name = os.path.basename(f)[:-5]
    if want and name not in want: continue
    for p in json.load(open(f)).get("places", []):
        d = {k: v for k, v in p.items() if k not in ("spot", "sources", "spots")}
        d.setdefault("category", "green"); d.setdefault("detail", "theme")
        loc = areas.locate(d["lat"], d["lng"])
        if loc["borough"]:
            d.update(loc)
        else:
            d.setdefault("municipality", d.get("municipality") or "Amsterdam")
        key = d["title"].lower()
        if key in seen:
            print(f"DUPLICATE title {d['title']} ({seen[key]} and {name})", file=sys.stderr); continue
        for o in drafts:
            dist = math.hypot((o["lat"] - d["lat"]) * 111320, (o["lng"] - d["lng"]) * 67800)
            if dist < 60: print(f"NEAR {round(dist)} m: {o['title']} / {d['title']}", file=sys.stderr)
        seen[key] = name
        drafts.append(d)
json.dump(drafts, sys.stdout, ensure_ascii=False, indent=1)
print(f"{len(drafts)} drafts", file=sys.stderr)
