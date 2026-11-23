"""Create (or update the settings of) the map from map.yaml via the tRPC API.

Uses the same site and token as `pnpm dc` (DC_URL / DC_TOKEN, else
~/.config/deep-cities/config.json). Creating needs a super-admin token; if the
slug exists, its settings are updated instead (needs manage rights).

Usage: python3 create_map.py [--dry-run]
"""
import json, os, sys, urllib.request, urllib.parse
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_URL = "https://deepcities.org"


def config():
    path = os.path.expanduser("~/.config/deep-cities/config.json")
    f = json.load(open(path)) if os.path.exists(path) else {}
    url = (os.environ.get("DC_URL") or f.get("url") or DEFAULT_URL).rstrip("/")
    return url, os.environ.get("DC_TOKEN") or f.get("token")


def call(url, token, kind, path, payload):
    headers = {"content-type": "application/json", "user-agent": "deep-cities-research/0.1"}
    if token:
        headers["authorization"] = f"Bearer {token}"
    body = json.dumps({"json": payload})
    endpoint = f"{url}/api/trpc/{path}"
    if kind == "query":
        req = urllib.request.Request(f"{endpoint}?input={urllib.parse.quote(body)}", headers=headers)
    else:
        req = urllib.request.Request(endpoint, data=body.encode(), headers=headers, method="POST")
    try:
        res = json.load(urllib.request.urlopen(req, timeout=60))
    except urllib.error.HTTPError as e:
        res = json.load(e)
    if "error" in res:
        raise SystemExit(f"{path}: {res['error']['json'].get('message')}")
    return res["result"]["data"]["json"]


def main():
    m = yaml.safe_load(open(os.path.join(HERE, "..", "map.yaml")))
    url, token = config()
    print(f"site: {url}", file=sys.stderr)
    if "--dry-run" in sys.argv:
        print(json.dumps(m, ensure_ascii=False, indent=1))
        return
    maps = call(url, token, "query", "collection.list", None)
    existing = next((c for c in maps if c["slug"] == m["slug"]), None)
    if existing:
        settings = {k: v for k, v in m.items() if k != "slug"}
        call(url, token, "mutation", "collection.updateSettings", {**settings, "collectionId": existing["id"]})
        print(json.dumps({"updated": m["slug"], "id": existing["id"]}))
    else:
        print(json.dumps(call(url, token, "mutation", "collection.create", m)))


if __name__ == "__main__":
    main()
