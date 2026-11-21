import { CONTENT_LANGUAGES, type ContentLang } from "./constants";
import { showAttribute } from "./fields";
import type { PlaceDraft } from "./validation";

export type DraftField =
  | keyof Omit<PlaceDraft, "lat" | "lng" | "attributes" | "translations">
  | "location";

export interface FieldChange {
  /** A standard field, or "attribute" for a map's custom field `key`. */
  field: DraftField | "attribute";
  key?: string;
  /** Set when the change is to a translation of `field` into this language. */
  lang?: ContentLang;
  before: string;
  after: string;
}

/** Great-circle distance in metres. */
export const distanceMeters = (
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number => {
  const R = 6_371_000;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const show = (draft: PlaceDraft, field: DraftField): string => {
  switch (field) {
    case "location":
      return `${draft.lat.toFixed(5)}, ${draft.lng.toFixed(5)}`;
    case "links":
      return draft.links.map((l) => `${l.label} — ${l.url}`).join("\n");
    case "photoIds":
      return draft.photoIds.join(",");
    case "address":
    case "municipality":
    case "borough":
    case "neighbourhood":
    case "subNeighbourhood":
      // Null when unknown.
      return draft[field] ?? "";
    default:
      return draft[field];
  }
};

const FIELDS: DraftField[] = [
  "title",
  "category",
  "summary",
  "body",
  "address",
  "municipality",
  "borough",
  "neighbourhood",
  "subNeighbourhood",
  "location",
  "links",
  "photoIds",
];

/** Custom-field values that differ (drafts may predate `attributes`). */
const diffAttributes = (
  before: PlaceDraft,
  after: PlaceDraft,
): FieldChange[] => {
  const a = before.attributes ?? {};
  const b = after.attributes ?? {};
  const keys = [...new Set([...Object.keys(b), ...Object.keys(a)])];
  return keys
    .map((key) => ({
      field: "attribute" as const,
      key,
      before: showAttribute(a[key]),
      after: showAttribute(b[key]),
    }))
    .filter((c) => c.before !== c.after);
};

const TRANSLATED = ["title", "summary", "body"] as const;

/** Translated texts that differ, per language and field. */
export const diffTranslations = <F extends string>(
  before: Partial<Record<ContentLang, Partial<Record<F, string>>>> | undefined,
  after: Partial<Record<ContentLang, Partial<Record<F, string>>>> | undefined,
  fields: readonly F[],
): { field: F; lang: ContentLang; before: string; after: string }[] =>
  CONTENT_LANGUAGES.flatMap((lang) =>
    fields.map((field) => ({
      field,
      lang,
      before: before?.[lang]?.[field] ?? "",
      after: after?.[lang]?.[field] ?? "",
    })),
  ).filter((c) => c.before !== c.after);

/** Fields that differ between the current place and a proposed draft. */
export const diffDrafts = (
  before: PlaceDraft,
  after: PlaceDraft,
): FieldChange[] => [
  ...FIELDS.map((field) => ({
    field,
    before: show(before, field),
    after: show(after, field),
  })).filter((c) =>
    c.field === "location"
      ? distanceMeters(before, after) >= 1
      : c.before !== c.after,
  ),
  ...diffAttributes(before, after),
  ...diffTranslations(before.translations, after.translations, TRANSLATED),
  ...CONTENT_LANGUAGES.flatMap((lang) => {
    const a = before.translations?.[lang]?.attributes ?? {};
    const b = after.translations?.[lang]?.attributes ?? {};
    return [...new Set([...Object.keys(b), ...Object.keys(a)])]
      .map((key) => ({
        field: "attribute" as const,
        key,
        lang,
        before: a[key] ?? "",
        after: b[key] ?? "",
      }))
      .filter((c) => c.before !== c.after);
  }),
];
