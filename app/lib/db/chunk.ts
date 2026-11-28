/**
 * D1 allows at most 100 bound parameters per statement, so long id lists and
 * multi-row inserts are split into chunks. The test database enforces the
 * same limit (app/trpc/test-db.ts).
 */
export const D1_MAX_PARAMS = 100;

/** Ids per `IN (...)` list, leaving room for a few other parameters. */
export const ID_CHUNK = 90;

export const chunked = <T>(xs: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(xs.length / size) }, (_, i) =>
    xs.slice(i * size, (i + 1) * size),
  );

/** Run `run` per chunk of `ids` and concatenate the rows. */
export const selectIn = async <R>(
  ids: string[],
  run: (chunk: string[]) => Promise<R[]>,
): Promise<R[]> => (await Promise.all(chunked(ids, ID_CHUNK).map(run))).flat();

/** Rows per multi-row insert for a table with `columns` columns. */
export const rowChunk = (columns: number) =>
  Math.max(1, Math.floor(D1_MAX_PARAMS / columns));
