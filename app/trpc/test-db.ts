/**
 * Tests only: an in-memory SQLite database with every migration applied,
 * behind the small part of the D1 API that drizzle's D1 driver uses, so
 * routers can be called as they are in the worker.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { DatabaseSync, type SQLInputValue } from "node:sqlite";
import { createDb, type Database } from "~/lib/db";
import { D1_MAX_PARAMS } from "~/lib/db/chunk";
import type { ServerEnv } from "~/lib/server-env";
import type { Profile, TRPCContext } from "./init";

const MIGRATIONS = join(import.meta.dirname, "../lib/db/migrations");

type Params = SQLInputValue[];

class Statement {
  constructor(
    private readonly sqlite: DatabaseSync,
    private readonly sql: string,
    private readonly params: Params = [],
  ) {}

  bind(...params: Params) {
    // D1 refuses statements with more than 100 bound parameters.
    if (params.length > D1_MAX_PARAMS)
      throw new Error(
        `D1 allows at most ${D1_MAX_PARAMS} bound parameters, got ${params.length}`,
      );
    return new Statement(this.sqlite, this.sql, params);
  }

  private prepared() {
    return this.sqlite.prepare(this.sql);
  }

  /** Rows as objects, or for writes the change count. */
  exec() {
    const stmt = this.prepared();
    if (stmt.columns().length > 0)
      return { results: stmt.all(...this.params), success: true, meta: {} };
    const r = stmt.run(...this.params);
    return {
      results: [],
      success: true,
      meta: {
        changes: Number(r.changes),
        last_row_id: Number(r.lastInsertRowid),
      },
    };
  }

  async all() {
    return this.exec();
  }

  async run() {
    return this.exec();
  }

  async first() {
    return this.exec().results[0] ?? null;
  }

  async raw() {
    const stmt = this.prepared();
    stmt.setReturnArrays(true);
    return stmt.all(...this.params);
  }
}

class FakeD1 {
  constructor(readonly sqlite: DatabaseSync) {}

  prepare(sql: string) {
    return new Statement(this.sqlite, sql);
  }

  async batch(stmts: Statement[]) {
    this.sqlite.exec("BEGIN");
    try {
      const out = stmts.map((s) => s.exec());
      this.sqlite.exec("COMMIT");
      return out;
    } catch (err) {
      this.sqlite.exec("ROLLBACK");
      throw err;
    }
  }

  async exec(sql: string) {
    this.sqlite.exec(sql);
    return { count: 0, duration: 0 };
  }
}

export interface TestDb {
  db: Database;
  sqlite: DatabaseSync;
  /** The D1 binding itself, for code that uses it without drizzle. */
  d1: D1Database;
}

/** A fresh database with the schema from the migrations. */
export const testDb = (): TestDb => {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec("PRAGMA foreign_keys = ON");
  for (const file of readdirSync(MIGRATIONS)
    .filter((f) => f.endsWith(".sql"))
    .sort())
    sqlite.exec(readFileSync(join(MIGRATIONS, file), "utf8"));
  const d1 = new FakeD1(sqlite) as unknown as D1Database;
  return { db: createDb(d1), sqlite, d1 };
};

/** A tRPC context for `profile` (null: signed out). */
export const testContext = (
  db: Database,
  profile: Profile | null,
): TRPCContext => ({ db, env: {} as ServerEnv, profile });
