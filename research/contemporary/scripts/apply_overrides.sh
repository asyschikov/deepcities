#!/bin/zsh
# Apply one checked overrides slice to the contemporary view: apply_overrides.sh <slice>
set -e
cd "$(dirname $0)/../../.."
T=$(mktemp)
python3 -c "
import json,sys
d=json.load(open('research/contemporary/overrides/$1.json'))
out=[{k:v for k,v in e.items() if k!='title'} for e in d]
assert '—' not in json.dumps(out,ensure_ascii=False)
json.dump(out,open('$T','w'),ensure_ascii=False)"
env -u DC_URL -u DC_TOKEN pnpm -s dc override-many contemporary $T --note "Contemporary Architecture: architecture fields and texts ($1, fact-checked)" | python3 -c "import json,sys;print('$1',json.load(sys.stdin).get('summary'))"
rm -f $T
