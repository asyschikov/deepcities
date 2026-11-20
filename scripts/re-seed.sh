#!/usr/bin/env bash
# Reset the LOCAL D1: apply migrations, load users + the empty Amsterdam map,
# then (if `pnpm dev` is running) import the place data with the CLI.
set -euo pipefail
cd "$(dirname "$0")/.."
node scripts/seed.ts
pnpm wrangler d1 migrations apply DB --local
pnpm wrangler d1 execute DB --local --file scripts/seed.sql

FIELDS=scripts/data/amsterdam-fields.json
DATA=scripts/data/bos-en-lommer-monuments.json
if [[ -f "$DATA" ]] && curl -sf -o /dev/null http://localhost:5173/; then
  TOKEN=$(pnpm -s mint-token superadmin@deepcities.local --name re-seed | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).token))')
  DC_URL=http://localhost:5173 DC_TOKEN="$TOKEN" pnpm -s dc fields amsterdam-c-list "$FIELDS" >/dev/null
  DC_URL=http://localhost:5173 DC_TOKEN="$TOKEN" pnpm -s dc import amsterdam-c-list "$DATA" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.stringify(JSON.parse(s).summary)))'
else
  echo "Start \`pnpm dev\` and re-run to import $DATA."
fi
echo "Seeded. Sign in at http://localhost:5173/auth with e.g. admin@deepcities.local"
