/**
 * Mint an API token for an existing user straight into D1 (bootstrap, e.g.
 * before email sign-in works). Prints the raw token once.
 *
 *   pnpm mint-token you@example.com [--remote] [--name "laptop CLI"]
 */
import { execFileSync } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";

const args = process.argv.slice(2);
const email = args.find(
  (a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--name",
);
if (!email)
  throw new Error("usage: mint-token <email> [--remote] [--name NAME]");
const remote = args.includes("--remote");
const nameIdx = args.indexOf("--name");
const name = nameIdx >= 0 ? (args[nameIdx + 1] ?? "CLI") : "CLI";

const token = `dc_${randomBytes(32).toString("base64url")}`;
const hash = createHash("sha256").update(token).digest("hex");
const publicId = `tok_${randomBytes(5).toString("hex")}`;
const q = (v: string) => `'${v.replaceAll("'", "''")}'`;
const sql = `INSERT INTO api_token (id_hash, public_id, profile_id, name, created_at) SELECT ${q(hash)}, ${q(publicId)}, id, ${q(name)}, unixepoch() FROM profile WHERE email = ${q(email.toLowerCase())}; SELECT changes() AS inserted;`;

const res = execFileSync(
  "pnpm",
  [
    "wrangler",
    "d1",
    "execute",
    "DB",
    remote ? "--remote" : "--local",
    "--json",
    "--command",
    sql,
  ],
  { encoding: "utf8" },
);
if (!/"inserted":\s*1/.test(res)) {
  console.error(
    `No profile with email ${email}. Sign in once (or seed) first.`,
  );
  process.exit(1);
}
console.log(
  JSON.stringify(
    {
      email,
      publicId,
      token,
      use: `pnpm dc login ${token}${remote ? "" : " --url http://localhost:5173"}`,
    },
    null,
    2,
  ),
);
