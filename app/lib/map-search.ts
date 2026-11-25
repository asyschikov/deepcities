/**
 * The map pages' URL search params: everything a reader can see or choose
 * is kept here, so refreshing or sharing a link lands in the same state.
 */
import { useNavigate, useSearch } from "@tanstack/react-router";
import { z } from "zod/v4";
import { AREA_LEVELS, ROUTE_MODES } from "./constants";
import { contentLangSchema } from "./validation";

/** Ignore a malformed param rather than failing the page. */
const opt = <T extends z.ZodType>(schema: T) =>
  schema.optional().catch(undefined);

export const mapSearchSchema = z.object({
  /** Content language (when not the map's own). */
  lang: opt(contentLangSchema),
  /** Place pin size (medium when absent). */
  pins: opt(z.enum(["large", "small"])),
  /** Group nearby place pins into counted clusters (by zoom). */
  cluster: opt(z.boolean()),
  /** Experimental: category icons on pins and in the legend (unlisted). */
  icons: opt(z.boolean()),
  /** Boundary layer: which level of official areas to draw. */
  areas: opt(z.enum(AREA_LEVELS)),
  /** Sidebar tab (places is the default). */
  tab: opt(z.enum(["places", "routes", "visited"])),
  /** Place search text, category and field filters. */
  q: opt(z.string().max(200)),
  cat: opt(z.string().max(60)),
  /** Field filters that differ from the map's defaults; `[]` = all. */
  f: opt(
    z.record(
      z.string().max(60),
      z.union([z.string().max(200), z.array(z.string().max(200)).max(40)]),
    ),
  ),
  /** Places list sorted by distance from the reader. */
  near: opt(z.boolean()),
  /** Routes filter: walks or rides (the route's main mode). */
  mode: opt(z.enum(ROUTE_MODES)),
  /** Routes filter: only loops (end where they start). */
  loop: opt(z.boolean()),
  /** Map position: `zoom/lat/lng`. */
  map: opt(z.string().max(40)),
  // Page-level (not carried between pages):
  /** Selected route stop or leg (0-based). */
  stop: opt(z.number().int().min(0).max(500)),
  leg: opt(z.number().int().min(0).max(500)),
  /** Following the route on the ground, heading for this stop (0-based). */
  go: opt(z.number().int().min(0).max(500)),
  /** Photo shown in a gallery (0-based). */
  photo: opt(z.number().int().min(0).max(500)),
  /** Map description expanded; all documents listed. */
  about: opt(z.boolean()),
  docs: opt(z.boolean()),
});
export type MapSearch = z.infer<typeof mapSearchSchema>;

/** Kept on every link within a map. */
export const MAP_RETAINED_PARAMS = [
  "lang",
  "areas",
  "cluster",
  "icons",
  "pins",
  "tab",
  "q",
  "cat",
  "f",
  "near",
  "mode",
  "loop",
  "map",
] as const satisfies readonly (keyof MapSearch)[];

/** A boolean search param of the current map page, with its setter. */
export const useSearchFlag = (key: "about" | "docs" | "icons" | "near") => {
  const search = useSearch({ from: "/$city/$slug" });
  const navigate = useNavigate();
  const set = (on: boolean) =>
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        [key]: on || undefined,
      }),
      replace: true,
      resetScroll: false,
    });
  return [search[key] ?? false, set] as const;
};

export interface MapViewState {
  lat: number;
  lng: number;
  zoom: number;
}

export const formatMapView = ({ lat, lng, zoom }: MapViewState): string =>
  `${Number(zoom.toFixed(2))}/${lat.toFixed(5)}/${lng.toFixed(5)}`;

export const parseMapView = (s: string | undefined): MapViewState | null => {
  const [zoom, lat, lng] = (s ?? "").split("/").map(Number);
  if (zoom === undefined || lat === undefined || lng === undefined) return null;
  const ok =
    Number.isFinite(zoom) &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    zoom >= 0 &&
    zoom <= 22 &&
    Math.abs(lat) <= 90 &&
    Math.abs(lng) <= 180;
  return ok ? { lat, lng, zoom } : null;
};
