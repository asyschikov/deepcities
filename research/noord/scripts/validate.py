"""Validate place YAML files against the map definition (research/west/map.yaml) and the
server's draft limits (app/lib/validation.ts). Every place needs a Dutch
version under `nl` (pass --no-nl to skip that check).
Usage: validate.py [--no-nl] places/*.yaml"""
import os, re, sys, collections
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
MAP = yaml.safe_load(open(os.path.join(HERE, "..", "map.yaml")))
CATS = {c["key"] for c in MAP["categories"]}
FIELDS = {f["key"]: f for f in MAP["fields"]}
ALLOWED = {"title", "summary", "body", "category", "lat", "lng", "address", "municipality", "borough",
           "neighbourhood", "subNeighbourhood", "links", "photos", "attributes", "note", "sources", "nl"}
NL_KEYS = {"title", "summary", "body", "attributes", "sources"}
TEXT_FIELDS = {k for k, f in FIELDS.items() if f["type"] in ("text", "longtext")}


def check_nl(p, e, require_nl):
    nl = p.get("nl")
    if nl is None:
        if require_nl: e.append("missing nl (Dutch) version")
        return
    for k in nl:
        if k not in NL_KEYS: e.append(f"unknown nl key {k}")
    if not (2 <= len(nl.get("title", "")) <= 100): e.append("nl.title length")
    if not (10 <= len(nl.get("summary", "")) <= 280): e.append(f"nl.summary length {len(nl.get('summary', ''))}")
    if len(nl.get("body", "")) > 10000: e.append("nl.body > 10000")
    if p.get("body") and not nl.get("body"): e.append("nl.body missing")
    for k, v in (nl.get("attributes") or {}).items():
        if k not in TEXT_FIELDS: e.append(f"nl.attributes.{k}: only text fields are translated")


def check(p):
    e = []
    t = p.get("title", "")
    if not (2 <= len(t) <= 100): e.append("title length")
    if not (10 <= len(p.get("summary", "")) <= 280): e.append(f"summary length {len(p.get('summary', ''))}")
    if len(p.get("body", "")) > 10000: e.append("body > 10000")
    if p.get("category") not in CATS: e.append(f"category {p.get('category')!r}")
    if not isinstance(p.get("lat"), float) or not 52.25 < p["lat"] < 52.45: e.append("lat")
    if not isinstance(p.get("lng"), float) or not 4.7 < p["lng"] < 5.1: e.append("lng")
    if p.get("address") and len(p["address"]) > 200: e.append("address > 200")
    links = p.get("links") or []
    if len(links) > 6: e.append("> 6 links")
    labels = [l.get("label", "") for l in links]
    if len(set(labels)) != len(labels): e.append("duplicate link labels")
    for l in links:
        if not (1 <= len(l.get("label", "")) <= 60) or not re.match(r"^https?://", l.get("url", "")): e.append(f"bad link {l}")
    for ph in p.get("photos") or []:
        if isinstance(ph, dict) and not all(ph.get(k) for k in ("source", "credit", "license", "sourceUrl")):
            e.append(f"non-Commons photo needs source, credit, license, sourceUrl: {ph}")
    if len(p.get("photos") or []) > 8: e.append("> 8 photos")
    for ph in p.get("photos") or []:
        src = ph if isinstance(ph, str) else ph.get("source", "")
        if not (src.startswith("commons:File:") or src.startswith("https://") or src.startswith("http://commons") or isinstance(ph, dict)):
            e.append(f"photo source {src!r}")
    for k, v in (p.get("attributes") or {}).items():
        f = FIELDS.get(k)
        if not f: e.append(f"unknown attribute {k}"); continue
        if f["type"] == "select" and v not in f["options"]: e.append(f"{k}={v!r} not an option")
        if f["type"] == "number" and not isinstance(v, int): e.append(f"{k} must be a number")
        if f["type"] == "text" and (not isinstance(v, str) or len(v) > 200): e.append(f"{k} must be text ≤200")
    for k in p:
        if k not in ALLOWED: e.append(f"unknown key {k}")
    check_nl(p, e, REQUIRE_NL)
    return e


REQUIRE_NL = "--no-nl" not in sys.argv


def main(paths):
    titles, bad, n = collections.Counter(), 0, 0
    for path in paths:
        data = yaml.safe_load(open(path)) or []
        for p in data:
            n += 1
            titles[p.get("title", "").lower()] += 1
            errs = check(p)
            if errs:
                bad += 1
                print(f"{os.path.basename(path)} :: {p.get('title')}: {'; '.join(errs)}")
    dups = [t for t, c in titles.items() if c > 1]
    if dups: print("duplicate titles:", dups)
    print(f"{n} places, {bad} with errors, {len(dups)} duplicate titles")
    return 1 if bad or dups else 0


if __name__ == "__main__":
    sys.exit(main([a for a in sys.argv[1:] if not a.startswith("--")]))
