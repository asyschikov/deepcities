/**
 * Structured logger for Cloudflare Workers.
 *
 * Uses consola with a custom reporter that outputs JSON lines,
 * which Workers Logs automatically indexes.
 */

import { createConsola, type LogObject } from "consola/basic";

const jsonReporter = {
  log: (logObj: LogObject) => {
    const { type, tag, args } = logObj;
    const [first, ...rest] = args;
    const fields =
      typeof first === "object" && first !== null && !Array.isArray(first)
        ? (first as Record<string, unknown>)
        : { msg: first };
    const extra =
      rest.length > 0 ? { extra: rest.length === 1 ? rest[0] : rest } : {};

    const method =
      type === "error" || type === "fatal"
        ? console.error
        : type === "warn"
          ? console.warn
          : console.log;

    method(
      JSON.stringify({
        level: type,
        ...(tag ? { tag } : {}),
        ...fields,
        ...extra,
      }),
    );
  },
};

const baseLogger = createConsola({ reporters: [jsonReporter] });

/** Create a file-level tagged logger: `const log = createLog("telegram");` */
export const createLog = (tag: string) => baseLogger.withTag(tag);
