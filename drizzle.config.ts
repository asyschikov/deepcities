import { defineConfig } from "drizzle-kit";

// Only used for `drizzle-kit generate`. Migrations are applied with
// `wrangler d1 migrations apply` (see package.json), which reads the same dir.
export default defineConfig({
  dialect: "sqlite",
  schema: "./app/lib/db/schema.ts",
  out: "./app/lib/db/migrations",
});
