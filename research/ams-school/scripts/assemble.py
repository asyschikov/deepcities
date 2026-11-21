"""Assemble places/*.yaml into one import file for `pnpm dc import`.

- strips reviewer-only keys (`sources`)
- moves the Dutch `nl` block to `translations.nl` (AMS_NO_NL=1 to leave it out,
  for a site without content languages)
- sets the official area hierarchy (gemeente / stadsdeel / gebied / wijk) by
  point-in-polygon (scripts/areas.py; needs AMS_RAW for the boundary cache)
- reports likely duplicates across slices (same monument number, or < 25 m apart)

Usage: AMS_RAW=… python3 assemble.py > places.json
"""
import json, math, os, sys, collections
import yaml

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from areas import locate  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
PLACES = os.path.join(HERE, "..", "places")


def dist(a, b):
    dy = (a["lat"] - b["lat"]) * 111320
    dx = (a["lng"] - b["lng"]) * 111320 * math.cos(math.radians(a["lat"]))
    return math.hypot(dx, dy)


def main():
    out = []
    for name in sorted(os.listdir(PLACES)):
        if not name.endswith(".yaml"):
            continue
        for p in yaml.safe_load(open(os.path.join(PLACES, name))) or []:
            # Dutch goes to `translations.nl` (the site's content-language
            # format: title/summary/body + text attributes; blank = fall back).
            nl = {k: v for k, v in (p.get("nl") or {}).items() if k != "sources" and v}
            p = {k: v for k, v in p.items() if k not in ("sources", "nl")}
            if nl and os.environ.get("AMS_NO_NL") != "1":
                p["translations"] = {"nl": nl}
            p.update(locate(p["lat"], p["lng"]))
            p["_slice"] = name[:-5]
            out.append(p)

    warn = lambda *a: print(*a, file=sys.stderr)
    by_nr = collections.defaultdict(list)
    for p in out:
        for nr in str((p.get("attributes") or {}).get("monument_number") or "").replace(" ", "").split(","):
            if nr:
                by_nr[nr].append(p["title"])
    for nr, titles in by_nr.items():
        if len(titles) > 1:
            warn(f"same monument number {nr}: {titles}")
    for i, a in enumerate(out):
        for b in out[i + 1:]:
            if dist(a, b) < 25:
                warn(f"{dist(a, b):.0f} m apart: {a['title']!r} ({a['_slice']}) / {b['title']!r} ({b['_slice']})")
    outside = [p["title"] for p in out if not p.get("municipality")]
    if outside:
        warn("outside Amsterdam:", outside)
    for p in out:
        p.pop("_slice")
    warn(f"{len(out)} places;", dict(collections.Counter(p["category"] for p in out)))
    json.dump(out, sys.stdout, ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
