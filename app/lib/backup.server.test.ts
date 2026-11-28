import { DatabaseSync } from "node:sqlite";
import { describe, expect, it } from "vitest";
import { testDb } from "~/trpc/test-db";
import { dumpKey, dumpSql, expiredDumps, sqlLiteral } from "./backup.server";

const tablesOf = (sqlite: DatabaseSync) =>
  sqlite
    .prepare(
      "select name from sqlite_master where type = 'table' and name not like 'sqlite_%' order by name",
    )
    .all()
    .map((r) => String(r.name));

const rowsOf = (sqlite: DatabaseSync, table: string) =>
  sqlite.prepare(`select * from "${table}" order by rowid`).all();

describe("sqlLiteral", () => {
  it("writes values as SQLite literals", () => {
    expect(sqlLiteral(null)).toBe("NULL");
    expect(sqlLiteral(52.37)).toBe("52.37");
    expect(sqlLiteral("it's")).toBe("'it''s'");
    expect(sqlLiteral(new Uint8Array([1, 255]))).toBe("X'01ff'");
  });
});

describe("dumpSql", () => {
  it("loads into an empty database as the same tables and rows", async () => {
    const { sqlite, d1 } = testDb();
    sqlite.exec(`
      insert into profile (id, email, name, created_at) values ('u1', 'a@example.com', 'O''Neil', 1);
      insert into collection (id, slug, title, city, center_lat, center_lng, categories, created_at)
        values ('c1', 'sights', 'Deep', 'Amsterdam', 52.37, 4.9, '[{"key":"a"}]', 1);
    `);
    // More rows than one page, with text that needs care.
    const insert = sqlite.prepare(
      "insert into place (id, collection_id, title, summary, category, lat, lng, links, photo_ids, created_at, updated_at) values (?, 'c1', ?, ?, 'a', ?, 4.9, '[]', '[]', 1, 1)",
    );
    for (let i = 0; i < 450; i++)
      insert.run(`p${i}`, `Place ${i}; -- 'quoted'`, "line one\nline two", i);

    const chunks: string[] = [];
    const stats = { tables: 0, rows: 0 };
    for await (const chunk of dumpSql(d1, new Date(0), stats))
      chunks.push(chunk);

    const copy = new DatabaseSync(":memory:", {
      enableForeignKeyConstraints: false,
    });
    copy.exec(chunks.join(""));

    const tables = tablesOf(sqlite);
    expect(tablesOf(copy)).toEqual(tables);
    for (const t of tables) expect(rowsOf(copy, t)).toEqual(rowsOf(sqlite, t));
    expect(stats).toEqual({ tables: tables.length, rows: 452 });
    const indexes = (db: DatabaseSync) =>
      db
        .prepare(
          "select name from sqlite_master where type = 'index' and sql is not null order by name",
        )
        .all();
    expect(indexes(copy)).toEqual(indexes(sqlite));
  });
});

describe("expiredDumps", () => {
  it("keeps a month of dailies and every first of the month", () => {
    const now = new Date("2026-11-28T03:17:00Z");
    const key = (iso: string) => dumpKey(new Date(iso));
    const recent = key("2026-11-01T03:17:00Z");
    const old = key("2026-10-20T03:17:00Z");
    const monthly = key("2026-08-01T03:17:00Z");
    expect(expiredDumps([recent, old, monthly, "db/other.txt"], now)).toEqual([
      old,
    ]);
  });
});
