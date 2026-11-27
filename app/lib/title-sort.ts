/**
 * Alphabetical order of place titles by their first real letter: leading
 * quotes, brackets and the like don't count, nor the Dutch articles 't and
 * 's ("'t Smalle" files under S, as in Dutch indexes).
 */
const LEAD = /^[^\p{L}\p{N}'‘’`]+/u;
const ARTICLE = /^['‘’`][ts][\s-]+/i;
const PUNCT = /^[^\p{L}\p{N}]+/u;

export const titleSortKey = (title: string): string =>
  title.trim().replace(LEAD, "").replace(ARTICLE, "").replace(PUNCT, "");

export const compareTitles = (a: string, b: string, lang?: string): number =>
  titleSortKey(a).localeCompare(titleSortKey(b), lang, {
    sensitivity: "base",
    numeric: true,
  });
