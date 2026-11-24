#!/bin/zsh
# Assemble one checked slice and import it into the contemporary view: import_slice.sh <slice> [--dry-run]
set -e
cd "$(dirname $0)/../../.."
export AMS_RAW=${AMS_RAW:-/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/raw}
python3 -B research/contemporary/scripts/validate.py research/contemporary/places/$1.yaml | tail -1
OUT=scripts/data/amsterdam-contemporary-$1.json
ASM_ONLY=$1 python3 -B research/contemporary/scripts/assemble.py 2>/tmp/asm-$1.err > /tmp/asm-$1.json
python3 -c "
import json,yaml
t={p['title'] for p in yaml.safe_load(open('research/contemporary/places/$1.yaml'))}
d=[p for p in json.load(open('/tmp/asm-$1.json')) if p['title'] in t]
json.dump(d,open('$OUT','w'),ensure_ascii=False,indent=1)
print(len(d),'places;',[(p['title'][:28],p.get('municipality'),p.get('borough')) for p in d])"
grep -v "^[0-9]* places" /tmp/asm-$1.err | grep -F -f <(python3 -c "
import yaml;[print(p['title']) for p in yaml.safe_load(open('research/contemporary/places/$1.yaml'))]") || true
env -u DC_URL -u DC_TOKEN pnpm -s dc import contemporary $OUT ${2:-} --note "Contemporary Architecture: $1 (fact-checked)" > /tmp/imp-$1.json || true
python3 -c "
import json;d=json.load(open('/tmp/imp-$1.json'));print(d.get('summary'));[print(' ',r.get('result'),r.get('placeId'),r['title'][:50],r.get('error','')) for r in d.get('results',[])]"
