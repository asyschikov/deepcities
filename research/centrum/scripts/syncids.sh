# usage: syncids.sh <dir-with-<id>.json> <id>...  : sync every draft entry (research/centrum, jewish, food) whose title matches the live title
D=$1; shift
for id in "$@"; do t=$(python3 -c "import json,sys;print(json.load(open(sys.argv[1]))['place']['title'])" $D/$id.json); n=0
 for f in $(grep -rlF -- "$t" research/centrum/places research/centrum/clusters/places research/jewish/places research/food/places 2>/dev/null); do python3 -B research/centrum/scripts/yamlsync.py $f $D/$id.json >/dev/null 2>&1 && { echo $f; n=$((n+1)); }; done
 [ $n = 0 ] && echo "NO DRAFT: $t" >&2; done | sort -u
