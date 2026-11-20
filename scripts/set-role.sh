#!/usr/bin/env bash
# Set a user's site-wide role on the LOCAL D1 (they must have signed in once).
#   pnpm set-role you@example.com super_admin
# Pass --remote as a third arg to target the deployed database.
set -euo pipefail
email="${1:?email}"; role="${2:?role (user|super_admin)}"; target="${3:---local}"
[[ "$role" == "user" || "$role" == "super_admin" ]] || { echo "bad role"; exit 1; }
[[ "$email" =~ ^[^\'\;[:space:]]+@[^\'\;[:space:]]+$ ]] || { echo "bad email"; exit 1; }
cd "$(dirname "$0")/.."
pnpm wrangler d1 execute DB "$target" --command "UPDATE profile SET role='$role' WHERE email=lower('$email'); SELECT email, role FROM profile WHERE email=lower('$email');"
