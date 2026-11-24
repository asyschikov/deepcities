"""Warn about pool places within 40 m of a slice's drafts: near.py <import.json> <all.json>"""
import json, math, sys
new = json.load(open(sys.argv[1])); live = json.load(open(sys.argv[2])); live = live.get("places", live) if isinstance(live, dict) else live
d = lambda a, b: math.hypot((a["lat"] - b["lat"]) * 111320, (a["lng"] - b["lng"]) * 111320 * math.cos(math.radians(a["lat"])))
for n in new:
    near = [(round(d(n, p)), p["title"][:60], p["id"]) for p in live if p.get("lat") and d(n, p) < 40]
    if near: print(n["title"][:40], "->", near)
