/**
 * Maps as views over a city's place pool. A place lives once, on its home
 * map (`place.collectionId`); a view map (`collection.view`) has no places
 * of its own and shows a filtered slice of its source's places.
 *
 * - A home map shows its own `city` places.
 * - A view with `detail: "city"` shows the source's `city` places that
 *   match `where`.
 * - A view with `detail: "full"` shows every matching place except cluster
 *   parents (places with published children) and `theme` places: the
 *   leaves at full detail.
 * - A list view (`list: true`) shows exactly the source places picked for
 *   it (`collection_place`), at any detail. `theme` places show only there.
 *
 * These are the rules in plain code (for links and tests); the SQL that
 * lists places applies the same rules (`app/trpc/map-places.ts`).
 */
import type { PlaceDetail } from "./constants";
import type { MapView } from "./validation";

export interface ViewMap {
  id: string;
  view: MapView | null;
}

export interface ViewedPlace {
  collectionId: string;
  detail: PlaceDetail;
  borough: string | null;
  neighbourhood: string | null;
  subNeighbourhood: string | null;
  category: string;
  /** Ids of the list views that include it (`collection_place`). */
  lists?: string[];
}

type WhereKey = keyof NonNullable<MapView["where"]>;
export const VIEW_WHERE_KEYS = [
  "borough",
  "neighbourhood",
  "subNeighbourhood",
  "category",
] as const satisfies readonly WhereKey[];

/** The map whose places `m` shows: its view's source, or itself. */
export const homeIdOf = (m: ViewMap): string => m.view?.source ?? m.id;

/** Every listed field of `where` has the place's value among its values. */
export const matchesWhere = (
  p: ViewedPlace,
  where: MapView["where"],
): boolean =>
  VIEW_WHERE_KEYS.every((k) => {
    const values = where?.[k];
    const value = p[k];
    return values === undefined || (value !== null && values.includes(value));
  });

/** Whether map `m` shows (published) place `p`. */
export const mapShows = (
  m: ViewMap,
  p: ViewedPlace,
  isClusterParent: boolean,
): boolean => {
  if (p.collectionId !== homeIdOf(m)) return false;
  if (!m.view) return p.detail === "city";
  if (m.view.list) return p.lists?.includes(m.id) ?? false;
  if (!matchesWhere(p, m.view.where)) return false;
  return m.view.detail === "city"
    ? p.detail === "city"
    : p.detail !== "theme" && !isClusterParent;
};

/** The detail a place gets when it is added from map `m`. */
export const detailForNew = (m: ViewMap): PlaceDetail =>
  m.view?.list ? "theme" : m.view?.detail === "full" ? "district" : "city";

/**
 * Which map to link a place in: the first of `candidates` that shows it,
 * else its home map (always among `maps`; not for a `theme` place, which
 * only list views show), else null.
 */
export const mapToLink = <M extends ViewMap>(
  p: ViewedPlace,
  isClusterParent: boolean,
  candidates: M[],
  maps: M[],
): M | null =>
  candidates.find((m) => mapShows(m, p, isClusterParent)) ??
  (p.detail === "theme" ? null : maps.find((m) => m.id === p.collectionId)) ??
  null;

/**
 * Where to look first when linking a place from map `current`.
 * A parent: the current map, then its home map, then views of it.
 * A child: the current map, then full-detail views of its home, then the
 * home map, then any other view (list views among them).
 */
export const linkOrder = <M extends ViewMap>(
  kind: "parent" | "child",
  current: M | null,
  maps: M[],
  homeId: string,
): M[] => {
  const home = maps.filter((m) => m.id === homeId);
  const views = maps.filter((m) => m.view?.source === homeId);
  const full = views.filter((m) => m.view?.detail === "full");
  const rest = views.filter((m) => m.view?.detail !== "full");
  const ordered =
    kind === "parent"
      ? [...home, ...full, ...rest]
      : [...full, ...home, ...rest];
  return [...(current ? [current] : []), ...ordered];
};

/**
 * Whether making `parentId` the parent of `placeId` would close a loop.
 * `parentOf` gives a place's current parent (null: none, undefined: unknown).
 */
export const wouldCycle = (
  placeId: string | null,
  parentId: string,
  parentOf: (id: string) => string | null | undefined,
): boolean => {
  const seen = new Set<string>();
  let at: string | null | undefined = parentId;
  while (at) {
    if (at === placeId || seen.has(at)) return true;
    seen.add(at);
    at = parentOf(at);
  }
  return false;
};
