"""Apply merges.json to live places: build patches from the current text.
Usage: python3 -B apply_merges.py <raw-dir> <out-dir>  (raw-dir holds `dc place` JSON per id)."""
import json, os, re, sys
HERE = os.path.dirname(os.path.abspath(__file__))
ops = json.load(open(os.path.join(HERE, "..", "merges.json")))
raw, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)

def apply(text, o, lang):
    head = "Look for:" if lang == "en" else "Let op:"
    g = lambda k: o.get(f"{lang}_{k}")
    def rep(t, a, b):
        assert t.count(a) == 1, (o["id"], lang, a[:60])
        return t.replace(a, b)
    if g("sent_replace"): text = rep(text, *g("sent_replace"))
    if g("replace"): text = rep(text, *g("replace"))
    if g("drop_line"): text = rep(text, "\n" + g("drop_line"), "")
    if g("insert_after"):
        a, b = g("insert_after"); text = rep(text, a, a + b)
    if lang == "nl" and o.get("nl_look_replace_prefix"):
        pre, new = o["nl_look_replace_prefix"]
        lines = text.split("\n"); idx = [i for i, l in enumerate(lines) if l.startswith(pre)]
        assert len(idx) == 1, (o["id"], pre); lines[idx[0]] = new; text = "\n".join(lines)
    if g("para"):
        m = list(re.finditer(rf"^{re.escape(head)}", text, re.M)); assert len(m) == 1, (o["id"], lang, "head")
        i = m[0].start(); text = text[:i] + g("para") + "\n\n" + text[i:]
    if g("look"): text = text.rstrip("\n") + "\n" + g("look")
    return text

for o in ops:
    p = json.load(open(os.path.join(raw, o["id"] + ".json")))["place"]
    nl = p["translations"]["nl"]
    patch = {"body": apply(p["body"], o, "en"),
             "translations": {"nl": {**nl, "body": apply(nl["body"], o, "nl")}}}
    if o.get("link"):
        links = p.get("links") or []
        if len(links) < 6 and all(l["url"] != o["link"]["url"] for l in links):
            patch["links"] = links + [o["link"]]
        elif len(links) >= 6: print("no room for link:", o["id"], file=sys.stderr)
    for t in (patch["body"], patch["translations"]["nl"]["body"]):
        assert "—" not in t and " – " not in t, o["id"]
    json.dump(patch, open(os.path.join(out, o["id"] + ".json"), "w"), ensure_ascii=False, indent=1)
    print(o["id"], p["title"][:50], len(p["body"]), "->", len(patch["body"]))
