"""Screen Centrum's monument records: which ones get read in the monument round.
Usage: S=<scratchpad> python3 -B screen.py   (needs $S/centrum/monuments.json, $S/centrum/wd.json)
A record is a candidate when it is not a plain house (function), has a Wikipedia article (wiki),
carries a name (named), has a written city register text (text), or has a long national
register text (rce; only once $S/raw/rce/<nr>.json exists). Writes $S/centrum/candidates.json."""
import json, os, re
S = os.environ["S"]
R = json.load(open(S + "/centrum/monuments.json")); W = json.load(open(S + "/centrum/wd.json"))
def named(r):
    n = (r.get("naam") or "").strip(); a = (r.get("adressering") or "").strip()
    return bool(n) and n.lower() != a.lower() and not re.match(r"^[\w\s\.'-]+ \d", n)
def text(r): return r.get("redengevendeOmschrijvingPubliek") or r.get("beschrijvingPubliek") or ""
def rce(r):
    p = f"{S}/raw/rce/{r['monumentnummer']}.json"
    return (json.load(open(p)).get("text") or "") if os.path.exists(p) else ""
def why(r, rce_min=700):
    w = W.get(str(r["monumentnummer"]), {}); o = []
    if r.get("oorspronkelijkeFunctie") not in ("wonen", None): o.append("function")
    if w.get("nlwiki") or w.get("enwiki"): o.append("wiki")
    if named(r): o.append("named")
    if len(text(r)) > 200: o.append("text")
    if r["status"] == "Rijksmonument" and len(rce(r)) >= rce_min: o.append("rce")
    return o
if __name__ == "__main__":
    out = {r["identificatie"]: why(r) for r in R}
    json.dump(out, open(S + "/centrum/candidates.json", "w"))
    print(sum(1 for v in out.values() if v), "candidates of", len(R))
