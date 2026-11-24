"""Condensed item text. Usage: show.py SCOUT|ID[,ID...] [maxbody]
Also: show.py --draft "title substring" prints a draft's summary and body."""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
items = json.load(open(os.path.join(HERE, "items.json")))
drafts = json.load(open(os.path.join(HERE, "drafts.json")))

if sys.argv[1] == "--draft":
    for q in sys.argv[2:]:
        for d in drafts:
            if q.lower() in d["title"].lower() or q.lower() in (d["address"] or "").lower():
                print(f"## {d['slice']}: {d['title']} [{d['address']}] {d['category']} {d['rank']} mon={d['monuments']}\n{d['summary']}\n{d['body']}\n")
    sys.exit()
if sys.argv[1] == "--grep":
    pat = re.compile(sys.argv[2], re.I)
    for d in drafts:
        txt = d["title"] + " " + d["summary"] + " " + d["body"]
        for m in pat.finditer(txt):
            print(f"{d['slice']}: {d['title'][:70]} :: ...{txt[max(0, m.start()-80):m.end()+80]}...".replace("\n", " "))
    sys.exit()

keys = sys.argv[1].split(",")
mx = int(sys.argv[2]) if len(sys.argv) > 2 else 420


def sent(t, label, n=160):
    m = re.search(label + r"[^.]*?:(.*?)(?=(?:\. [A-Z][a-z]+:)|$)", t)
    return (m.group(1).strip()[:n]) if m else ""


for it in items:
    if it["scout"] not in keys and it["id"] not in keys:
        continue
    t = it["text"]
    body = re.sub(r"^\*\*.*?\*\*\s*", "", t)
    body = re.sub(r"^Pins?\b[^)]{0,220}?\)\.?\s*|^Pins?\s*[\d., ]+[^.]*\.\s*", "", body)
    print(f"\n{it['id']} [{it['rank']}] {it['title']} | {it['wijk']}")
    print("  " + body[:mx].replace("\n", " "))
    for lab in ("Status", "Caveat", "Second"):
        s = sent(t, lab)
        if s:
            print(f"  {lab}: {s}")
    print("  >> " + it["rank_text"][:150].replace("\n", " "))
