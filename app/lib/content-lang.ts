/**
 * Content languages: a map's places, routes and texts are written in the
 * map's own language and may carry `translations` into others. Readers pick
 * a language per map; anything not translated falls back to the original.
 * This is about content, not the UI (that is i18n via `t()`).
 */
import {
  CONTENT_LANGUAGE_NAMES,
  CONTENT_LANGUAGES,
  type ContentLang,
} from "./constants";
import type {
  CategoryDef,
  CollectionTranslations,
  FieldDef,
  RouteDraft,
} from "./validation";

export const isContentLang = (v: unknown): v is ContentLang =>
  typeof v === "string" && (CONTENT_LANGUAGES as readonly string[]).includes(v);

export const languageName = (lang: ContentLang): string =>
  CONTENT_LANGUAGE_NAMES[lang];

/** The map's own language first, then the extra ones (no duplicates). */
export const mapLanguages = (c: {
  language: ContentLang;
  languages: ContentLang[];
}): ContentLang[] => [
  c.language,
  ...c.languages.filter((l) => l !== c.language),
];

type Translatable = {
  translations?: Partial<Record<ContentLang, Record<string, unknown>>>;
};

/** The text overrides `o` has for `lang` (non-empty strings only). */
const overridesFor = (
  o: Translatable,
  lang: ContentLang,
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(o.translations?.[lang] ?? {}).filter(
      (e): e is [string, string] =>
        typeof e[1] === "string" && e[1].trim() !== "",
    ),
  );

/**
 * `o` with its text fields in `lang` where translated. Translation keys are
 * the field names (`title`, `summary`, `narration`…), so this works for
 * places, routes, stops and legs alike.
 */
export const localize = <T extends Translatable>(
  o: T,
  lang: ContentLang | null,
): T => (lang ? { ...o, ...overridesFor(o, lang) } : o);

/**
 * Which of `keys` have base text but no `lang` version, i.e. what a reader
 * in `lang` sees in the original language.
 */
export const untranslated = <T extends Translatable, K extends keyof T>(
  o: T,
  lang: ContentLang,
  keys: K[],
): K[] => {
  const have = overridesFor(o, lang);
  return keys.filter((k) => {
    const base = o[k];
    return typeof base === "string" && base.trim() !== "" && !have[String(k)];
  });
};

/**
 * A place in `lang`: texts, plus translated values of text custom fields
 * merged over the originals.
 */
export const localizePlace = <
  P extends Translatable & { attributes?: Record<string, unknown> },
>(
  p: P,
  lang: ContentLang | null,
): P => {
  if (!lang) return p;
  const attrs = p.translations?.[lang]?.attributes;
  const extra =
    attrs && typeof attrs === "object"
      ? Object.fromEntries(
          Object.entries(attrs).filter(
            ([, v]) => typeof v === "string" && v.trim() !== "",
          ),
        )
      : {};
  return {
    ...localize(p, lang),
    ...(p.attributes ? { attributes: { ...p.attributes, ...extra } } : {}),
  };
};

/** A route with its own texts, stop narrations and leg directions in `lang`. */
export const localizeRoute = <R extends RouteDraft>(
  r: R,
  lang: ContentLang | null,
): R =>
  lang
    ? {
        ...localize(r, lang),
        stops: r.stops.map((s) => localize(s, lang)),
        legs: r.legs.map((l) => localize(l, lang)),
      }
    : r;

/** Whether a route has any text a `lang` reader would see untranslated. */
export const routeHasUntranslated = (
  r: RouteDraft,
  lang: ContentLang,
): boolean =>
  untranslated(r, lang, ["title", "summary", "body"]).length > 0 ||
  r.stops.some((s) => untranslated(s, lang, ["narration"]).length > 0) ||
  r.legs.some((l) => untranslated(l, lang, ["directions"]).length > 0);

/** A custom field as readers see it, with option values → shown labels. */
export type LocalFieldDef = FieldDef & {
  optionLabels?: Record<string, string>;
};

/**
 * A map's texts and labels in `lang`. Option values are stored in the base
 * language, so `fields[].options` stay as they are and `optionLabels` maps
 * them to what to show.
 */
export const localizeCollection = <
  C extends {
    title: string;
    tagline: string | null;
    description: string | null;
    language: ContentLang;
    categories: CategoryDef[];
    fields: FieldDef[];
    translations: CollectionTranslations;
  },
>(
  c: C,
  lang: ContentLang | null,
): Omit<C, "fields"> & { fields: LocalFieldDef[] } => {
  const t = lang && lang !== c.language ? c.translations?.[lang] : undefined;
  if (!t) return c;
  const nonEmpty = (v: string | undefined) => (v?.trim() ? v : undefined);
  return {
    ...c,
    title: nonEmpty(t.title) ?? c.title,
    tagline: nonEmpty(t.tagline) ?? c.tagline,
    description: nonEmpty(t.description) ?? c.description,
    categories: c.categories.map((cat) => ({
      ...cat,
      label: nonEmpty(t.categories?.[cat.key]) ?? cat.label,
    })),
    fields: c.fields.map((f) => {
      const ft = t.fields?.[f.key];
      if (!ft) return f;
      return {
        ...f,
        label: nonEmpty(ft.label) ?? f.label,
        help: nonEmpty(ft.help) ?? f.help,
        optionLabels: Object.fromEntries(
          Object.entries(ft.options ?? {}).filter(([, v]) => v.trim()),
        ),
      };
    }),
  };
};

/** Only the list-level texts of translations (no bodies), for list payloads. */
export const listTranslations = (
  t: Partial<Record<ContentLang, { title?: string; summary?: string }>>,
): Partial<Record<ContentLang, { title?: string; summary?: string }>> =>
  Object.fromEntries(
    Object.entries(t ?? {}).map(([lang, v]) => [
      lang,
      { title: v?.title, summary: v?.summary },
    ]),
  );
