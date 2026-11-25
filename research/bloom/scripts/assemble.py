"""Merge research/bloom/places/*.json into import drafts for `dc import bloom`.
Usage: AMS_RAW=<dir> python3 -B assemble.py [slice ...] > out.json"""
import json, glob, os, sys, math
sys.path.insert(0, os.path.dirname(__file__))
import areas
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
want = set(sys.argv[1:])
from urllib.parse import urlparse
LABELS = {"amsterdamsebos.nl": "Amsterdamse Bos", "api.data.amsterdam.nl": "City tree register", "www.vdberk.nl": "Van den Berk (bloom times)",
          "nl.wikipedia.org": "Wikipedia (nl)", "en.wikipedia.org": "Wikipedia (en)", "www.parool.nl": "Het Parool", "www.at5.nl": "AT5", "www.nhnieuws.nl": "NH Nieuws",
          "indebuurt.nl": "Indebuurt", "www.amsterdam.nl": "Gemeente Amsterdam", "www.hortus.nl": "Hortus Botanicus", "bomenstichting.nl": "Bomenstichting", "www.bomenstichting.nl": "Bomenstichting"}
def link_list(urls):
    out, used = [], set()
    for u in urls:
        if not isinstance(u, str) or not u.startswith("http") or "api.data" in u: continue
        host = urlparse(u).netloc
        label = LABELS.get(host, host.removeprefix("www."))
        n = 2
        base = label
        while label in used: label = f"{base} {n}"; n += 1
        used.add(label); out.append({"label": label, "url": u})
        if len(out) == 6: break
    return out
drafts, seen = [], {}
for f in sorted(glob.glob(os.path.join(HERE, "places", "*.json"))):
    name = os.path.basename(f)[:-5]
    if want and name not in want: continue
    for p in json.load(open(f)).get("places", []):
        d = {k: v for k, v in p.items() if k not in ("spot", "sources", "spots", "notes", "note", "parentSuggestion", "parent")}
        if name.startswith("cur-") and p.get("sources") and not d.get("links"):
            d["links"] = link_list(p["sources"])
        d.setdefault("category", "green"); d.setdefault("detail", "theme")
        loc = areas.locate(d["lat"], d["lng"])
        if loc["borough"]:
            d.update(loc)
        else:
            d["municipality"] = d.get("municipality") or "Amstelveen"; print(f"NO AMSTERDAM AREA: {d['title']} -> {d['municipality']}", file=sys.stderr)
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
