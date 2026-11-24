import { z } from "zod/v4";
import {
  CONTENT_LANGUAGES,
  DOCUMENT_SUBJECTS,
  FIELD_TYPES,
  MAX_ATTACHMENTS_PER_DOCUMENT,
  MAX_DOCUMENT_BODY,
  MAX_FIELDS_PER_MAP,
  MAX_LINKS_PER_PLACE,
  MAX_PATH_POINTS_PER_LEG,
  MAX_PHOTOS_PER_DOCUMENT,
  MAX_PHOTOS_PER_PLACE,
  MAX_STOPS_PER_ROUTE,
  MAX_VIA_PER_LEG,
  PLACE_DETAILS,
  ROUTE_MODES,
  type RouteMode,
  TRANSPORT_MODES,
  type TransportMode,
  VIEW_DETAILS,
} from "./constants";

// ─── Translations ───────────────────────────────────────────────────

export const contentLangSchema = z.enum(CONTENT_LANGUAGES);

/** An optional translated string; blank means "not translated" and is dropped. */
const translatedText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined))
    .optional();

/**
 * Per-language versions of an object's text fields, e.g.
 * `{ nl: { title: "…", summary: "…" } }`. Missing languages or fields fall
 * back to the base text (in the map's own language). Empty entries are dropped.
 */
const translationsOf = <S extends z.ZodRawShape>(shape: S) =>
  z
    .partialRecord(contentLangSchema, z.object(shape))
    .default({})
    .transform(
      (rec) =>
        Object.fromEntries(
          Object.entries(rec).flatMap(([lang, fields]) => {
            const kept = Object.fromEntries(
              Object.entries(fields ?? {}).filter(([, v]) => v !== undefined),
            );
            return Object.keys(kept).length > 0 ? [[lang, kept]] : [];
          }),
        ) as Partial<
          Record<(typeof CONTENT_LANGUAGES)[number], z.infer<z.ZodObject<S>>>
        >,
    );

const textTranslations = {
  title: translatedText(100),
  summary: translatedText(280),
  body: translatedText(10_000),
};
export const placeTranslationsSchema = translationsOf({
  ...textTranslations,
  /** Values of text/longtext custom fields, by field key. */
  attributes: z
    .record(z.string().max(32), z.string().trim().max(4000))
    .optional()
    .transform((a) => {
      const kept = Object.entries(a ?? {}).filter(([, v]) => v !== "");
      return kept.length > 0 ? Object.fromEntries(kept) : undefined;
    })
    .optional(),
});
export type PlaceTranslations = z.infer<typeof placeTranslationsSchema>;

export const routeTranslationsSchema = translationsOf(textTranslations);
export const stopTranslationsSchema = translationsOf({
  narration: translatedText(4000),
});
export const legTranslationsSchema = translationsOf({
  directions: translatedText(2000),
});

/** Translations of a map's own texts and labels (set by its admins). */
export const collectionTranslationsSchema = translationsOf({
  title: translatedText(80),
  tagline: translatedText(140),
  description: translatedText(4000),
  /** Category label by category key. */
  categories: z
    .record(z.string().max(32), z.string().trim().max(40))
    .optional(),
  /** Custom-field texts by field key; `options` maps base option → label. */
  fields: z
    .record(
      z.string().max(32),
      z.object({
        label: translatedText(40),
        help: translatedText(200),
        options: z
          .record(z.string().max(60), z.string().trim().max(60))
          .optional(),
      }),
    )
    .optional(),
});
export type CollectionTranslations = z.infer<
  typeof collectionTranslationsSchema
>;

export const categoryDefSchema = z.object({
  key: z
    .string()
    .trim()
    .min(1)
    .max(32)
    .regex(/^[a-z0-9-]+$/),
  label: z.string().trim().min(1).max(40),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/),
});
export type CategoryDef = z.infer<typeof categoryDefSchema>;

/**
 * A custom place field defined by a map (its "schema"). Values live in
 * `place.attributes[key]`; see app/lib/fields.ts for value checking.
 */
export const fieldDefSchema = z
  .object({
    key: z
      .string()
      .trim()
      .min(1)
      .max(32)
      .regex(/^[a-z][a-z0-9_]*$/),
    label: z.string().trim().min(1).max(40),
    type: z.enum(FIELD_TYPES),
    /** Allowed values for `select`. */
    options: z.array(z.string().trim().min(1).max(60)).max(40).optional(),
    required: z.boolean().optional(),
    /** Shown under the input in the form. */
    help: z.string().trim().max(200).optional(),
    /**
     * Hidden fields are kept (with their values) but not shown or edited.
     * Fields are never deleted, only hidden.
     */
    hidden: z.boolean().optional(),
    /** Select fields only: offer the options as filter chips on the map. */
    filter: z.boolean().optional(),
  })
  .refine((f) => f.type !== "select" || (f.options?.length ?? 0) > 0, {
    message: "A select field needs options",
  })
  .refine((f) => !f.filter || f.type === "select", {
    message: "Only select fields can be filters",
  });
export type FieldDef = z.infer<typeof fieldDefSchema>;

export const fieldDefsSchema = z
  .array(fieldDefSchema)
  .max(MAX_FIELDS_PER_MAP)
  .refine((fs) => new Set(fs.map((f) => f.key)).size === fs.length, {
    message: "Field keys must be unique",
  });

export const attributeValueSchema = z.union([
  z.string().max(4000),
  z.number(),
  z.boolean(),
]);
/** Values of a map's custom fields, keyed by `FieldDef.key`. Empty = absent. */
export const attributesSchema = z
  .record(z.string().max(32), attributeValueSchema)
  .default({});
export type Attributes = z.infer<typeof attributesSchema>;

/**
 * A view map's own values for some custom fields of a place: a value
 * replaces the home value on that map, null unsets it there.
 */
export const overrideAttributesSchema = z.record(
  z.string().max(32),
  attributeValueSchema.nullable(),
);
export type OverrideAttributes = z.infer<typeof overrideAttributesSchema>;

/** A view map's override for one place, as stored (see app/lib/overrides.ts). */
export interface OverrideDraft {
  /** Only the overridden keys. */
  attributes: OverrideAttributes;
  /** Replaces the place's category on the view; null keeps the home one. */
  category: string | null;
}

export const linkSchema = z.object({
  label: z.string().trim().min(1).max(60),
  url: z.url({ protocol: /^https?$/ }).max(500),
});

/** Optional admin-area name (null when unknown). */
const areaName = z.string().trim().min(1).max(80).nullable().default(null);

/** A complete proposed state of a place. Every proposal stores one. */
export const placeDraftSchema = z.object({
  title: z.string().trim().min(2).max(100),
  summary: z.string().trim().min(10).max(280),
  body: z.string().trim().max(10_000),
  category: z.string().min(1).max(32),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  address: z.string().trim().max(200).nullable(),
  municipality: areaName,
  borough: areaName,
  neighbourhood: areaName,
  subNeighbourhood: areaName,
  links: z.array(linkSchema).max(MAX_LINKS_PER_PLACE),
  photoIds: z.array(z.string().min(1).max(40)).max(MAX_PHOTOS_PER_PLACE),
  /** Custom fields; checked against the map's field definitions. */
  attributes: attributesSchema,
  /** Title/summary/body in other languages than the map's own. */
  translations: placeTranslationsSchema,
  /**
   * The cluster this place belongs to: a place on the same home map. Left
   * out, an edit keeps the current one (none for a new place).
   */
  parentId: z.string().min(1).max(40).nullable().optional(),
  /**
   * `city` shows on the home map, `district` only in full-detail views.
   * Left out, an edit keeps the current one; a new place gets `city`, or
   * `district` when it is added from a full-detail view.
   */
  detail: z.enum(PLACE_DETAILS).optional(),
});
export type PlaceDraft = z.infer<typeof placeDraftSchema>;

/**
 * A view map: it has no places of its own and shows those of `source`
 * that match `where` (every listed field must match one of its values),
 * at `detail` (see VIEW_DETAILS).
 */
export const mapViewSchema = z.object({
  source: z.string().min(1).max(40),
  where: z
    .object({
      borough: z.array(z.string().trim().min(1).max(80)).min(1).optional(),
      neighbourhood: z
        .array(z.string().trim().min(1).max(80))
        .min(1)
        .optional(),
      subNeighbourhood: z
        .array(z.string().trim().min(1).max(80))
        .min(1)
        .optional(),
      category: z.array(z.string().min(1).max(32)).min(1).optional(),
    })
    .strict()
    .optional(),
  detail: z.enum(VIEW_DETAILS),
});
export type MapView = z.infer<typeof mapViewSchema>;

export const idSchema = z.string().min(1).max(40);
export const slugSchema = z
  .string()
  .trim()
  .min(3)
  .max(60)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
export const emailSchema = z.email().trim().toLowerCase().max(254);

/** The draft-shaped subset of a stored place (for edits and diffs). */
export const draftOfPlace = (
  p: {
    [K in keyof PlaceDraft]: PlaceDraft[K] | undefined;
  },
): PlaceDraft => ({
  title: p.title ?? "",
  summary: p.summary ?? "",
  body: p.body ?? "",
  category: p.category ?? "",
  lat: p.lat ?? 0,
  lng: p.lng ?? 0,
  address: p.address ?? null,
  municipality: p.municipality ?? null,
  borough: p.borough ?? null,
  neighbourhood: p.neighbourhood ?? null,
  subNeighbourhood: p.subNeighbourhood ?? null,
  links: p.links ?? [],
  photoIds: p.photoIds ?? [],
  attributes: p.attributes ?? {},
  translations: p.translations ?? {},
  parentId: p.parentId ?? null,
  detail: p.detail ?? "city",
});

// ─── Routes ─────────────────────────────────────────────────────────

/** A point as GeoJSON orders it: [lng, lat]. */
export const lngLatSchema = z.tuple([
  z.number().min(-180).max(180),
  z.number().min(-90).max(90),
]);
export type LngLatTuple = z.infer<typeof lngLatSchema>;

/**
 * Something you visit on a route: a place on the map (`placeId`), or an
 * ad-hoc point (placeId null). For places, name and position are snapshots
 * the server refreshes on save, so a route still draws if the place goes.
 */
export const routeStopSchema = z.object({
  placeId: idSchema.nullable(),
  name: z.string().trim().min(1).max(100),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  /** Route-specific text for this stop (what to look at, from here). */
  narration: z.string().trim().max(4000).default(""),
  translations: stopTranslationsSchema,
});
export type RouteStop = z.infer<typeof routeStopSchema>;

/** The way from stop i to stop i+1. */
export const routeLegSchema = z.object({
  mode: z.enum(TRANSPORT_MODES),
  /** Follow streets (walk/bike) instead of straight lines between `via`. */
  snap: z.boolean().default(false),
  /** Intermediate waypoints that shape the path, in order. */
  via: z.array(lngLatSchema).max(MAX_VIA_PER_LEG).default([]),
  /** The drawn line, stop to stop. Stored so viewing needs no router. */
  path: z.array(lngLatSchema).min(2).max(MAX_PATH_POINTS_PER_LEG),
  /** How to get there: "Cross the bridge and keep left…". */
  directions: z.string().trim().max(2000).default(""),
  translations: legTranslationsSchema,
});
export type RouteLeg = z.infer<typeof routeLegSchema>;

/** A complete proposed state of a route. */
/** A route's main mode when none is given: a ride if any leg is ridden. */
export const inferRouteMode = (legs: { mode: TransportMode }[]): RouteMode =>
  legs.some((l) => l.mode === "bike") ? "bike" : "walk";

/** Within this of the start, a route's last stop closes a loop. */
export const LOOP_CLOSE_METERS = 150;

/** Whether a route comes back to where it began: the last stop is the first. */
export const inferRouteLoop = (
  stops: { placeId: string | null; lat: number; lng: number }[],
): boolean => {
  const first = stops[0];
  const last = stops.at(-1);
  if (!first || !last || stops.length < 3) return false;
  if (first.placeId !== null && first.placeId === last.placeId) return true;
  // Equirectangular is plenty at this scale.
  const k = 111_320;
  const dy = (last.lat - first.lat) * k;
  const dx = (last.lng - first.lng) * k * Math.cos((first.lat * Math.PI) / 180);
  return Math.hypot(dx, dy) <= LOOP_CLOSE_METERS;
};

export const routeDraftSchema = z
  .object({
    /** Walk or bike; inferred from the legs when left out. */
    mode: z.enum(ROUTE_MODES).optional(),
    /** Ends where it starts; inferred from the stops when left out. */
    loop: z.boolean().optional(),
    title: z.string().trim().min(2).max(100),
    summary: z.string().trim().min(10).max(280),
    /** Intro (markdown). */
    body: z.string().trim().max(10_000).default(""),
    stops: z.array(routeStopSchema).min(2).max(MAX_STOPS_PER_ROUTE),
    legs: z.array(routeLegSchema),
    photoIds: z
      .array(z.string().min(1).max(40))
      .max(MAX_PHOTOS_PER_PLACE)
      .default([]),
    translations: routeTranslationsSchema,
  })
  .refine((r) => r.legs.length === r.stops.length - 1, {
    message: "A route needs exactly one leg between each pair of stops",
    path: ["legs"],
  })
  .transform((r) => ({
    ...r,
    mode: r.mode ?? inferRouteMode(r.legs),
    loop: r.loop ?? inferRouteLoop(r.stops),
  }));
export type RouteDraft = z.infer<typeof routeDraftSchema>;

/** The draft-shaped subset of a stored route (for edits and diffs). */
export const draftOfRoute = (r: RouteDraft): RouteDraft => ({
  mode: r.mode,
  loop: r.loop,
  title: r.title,
  summary: r.summary,
  body: r.body,
  photoIds: r.photoIds,
  translations: r.translations,
  stops: r.stops,
  legs: r.legs,
});

// ─── Documents ──────────────────────────────────────────────────────

export const documentAttachmentSchema = z.object({
  subjectType: z.enum(DOCUMENT_SUBJECTS),
  subjectId: idSchema,
});
export type DocumentAttachment = z.infer<typeof documentAttachmentSchema>;

/** The editable state of a document. Every save stores one as a revision. */
export const documentTranslationsSchema = translationsOf({
  title: translatedText(120),
  summary: translatedText(400),
  body: translatedText(MAX_DOCUMENT_BODY),
});
export type DocumentTranslations = z.infer<typeof documentTranslationsSchema>;

export const documentDraftSchema = z.object({
  title: z.string().trim().min(2).max(120),
  summary: z.string().trim().max(400).default(""),
  /** Markdown. Inline pictures: `![caption](photo:<photoId>)`. */
  body: z.string().trim().max(MAX_DOCUMENT_BODY),
  /** All pictures the document uses (inline and gallery); first is the cover. */
  photoIds: z
    .array(z.string().min(1).max(40))
    .max(MAX_PHOTOS_PER_DOCUMENT)
    .default([]),
  attachments: z
    .array(documentAttachmentSchema)
    .max(MAX_ATTACHMENTS_PER_DOCUMENT)
    .default([]),
  /** Title/summary/body in the map's other languages (pictures shared). */
  translations: documentTranslationsSchema,
});
export type DocumentDraft = z.infer<typeof documentDraftSchema>;
