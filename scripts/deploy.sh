#!/usr/bin/env bash
# Build, migrate and deploy the site:  pnpm ship
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building..."
rm -rf dist
pnpm build

echo "==> Applying D1 migrations..."
pnpm wrangler d1 migrations apply DB --remote

echo "==> Deploying..."
pnpm wrangler deploy -c dist/server/wrangler.json
