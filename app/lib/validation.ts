import { z } from "zod/v4";
import {
  FIELD_TYPES,
  MAX_FIELDS_PER_MAP,
  MAX_LINKS_PER_PLACE,
  MAX_PATH_POINTS_PER_LEG,
  MAX_PHOTOS_PER_PLACE,
  MAX_STOPS_PER_ROUTE,
  MAX_VIA_PER_LEG,
  TRANSPORT_MODES,
} from "./constants";

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
  })
  .refine((f) => f.type !== "select" || (f.options?.length ?? 0) > 0, {
    message: "A select field needs options",
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

export const linkSchema = z.object({
  label: z.string().trim().min(1).max(60),
  url: z.url({ protocol: /^https?$/ }).max(500),
});

/** Optional admin-area name; older drafts lack it, so it defaults to null. */
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
});
export type PlaceDraft = z.infer<typeof placeDraftSchema>;

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
});
export type RouteLeg = z.infer<typeof routeLegSchema>;

/** A complete proposed state of a route. */
export const routeDraftSchema = z
  .object({
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
  })
  .refine((r) => r.legs.length === r.stops.length - 1, {
    message: "A route needs exactly one leg between each pair of stops",
    path: ["legs"],
  });
export type RouteDraft = z.infer<typeof routeDraftSchema>;

/** The draft-shaped subset of a stored route (for edits and diffs). */
export const draftOfRoute = (r: RouteDraft): RouteDraft => ({
  title: r.title,
  summary: r.summary,
  body: r.body ?? "",
  stops: r.stops,
  legs: r.legs,
  photoIds: r.photoIds ?? [],
});
