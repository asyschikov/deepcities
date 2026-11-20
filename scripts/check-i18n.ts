/** Fails if a static t("key") used in app/ is missing from messages/en.json. */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const messages = JSON.parse(readFileSync("messages/en.json", "utf8")) as Record<
  string,
  string
>;
const has = (k: string) => k in messages || `${k}_one` in messages;
const files = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? files(join(dir, e.name))
      : e.name.endsWith(".tsx")
        ? [join(dir, e.name)]
        : [],
  );
const missing = files("app").flatMap((f) =>
  [...readFileSync(f, "utf8").matchAll(/\bt\("([a-z0-9_]+)"/g)]
    .map((m) => m[1] ?? "")
    .filter((k) => !has(k))
    .map((k) => `${f}: ${k}`),
);
if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}
console.log("i18n ok");
