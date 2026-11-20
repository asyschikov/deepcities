import { MODE_SPEED_KMH, type TransportMode } from "./constants";
import { distanceMeters } from "./diff";
import type {
  LngLatTuple,
  RouteDraft,
  RouteLeg,
  RouteStop,
} from "./validation";

export const stopPoint = (s: Pick<RouteStop, "lat" | "lng">): LngLatTuple => [
  s.lng,
  s.lat,
];

const toLatLng = ([lng, lat]: LngLatTuple) => ({ lat, lng });

/** Length of a [lng, lat] polyline in metres. */
export const pathLength = (path: LngLatTuple[]): number =>
  path
    .slice(1)
    .reduce(
      (sum, p, i) => sum + distanceMeters(toLatLng(path[i] ?? p), toLatLng(p)),
      0,
    );

/** Straight segments from stop to stop through the leg's waypoints. */
export const straightPath = (
  from: LngLatTuple,
  via: LngLatTuple[],
  to: LngLatTuple,
): LngLatTuple[] => [from, ...via, to];

/**
 * Where to insert a new waypoint so it adds the least detour: between the
 * pair of consecutive points (stop, via…, stop) it is "closest" to.
 */
export const insertViaIndex = (
  from: LngLatTuple,
  via: LngLatTuple[],
  to: LngLatTuple,
  point: LngLatTuple,
): number => {
  const chain = [from, ...via, to];
  const d = (a: LngLatTuple, b: LngLatTuple) =>
    distanceMeters(toLatLng(a), toLatLng(b));
  const costs = chain.slice(1).map((b, i) => {
    const a = chain[i] ?? b;
    return d(a, point) + d(point, b) - d(a, b);
  });
  return costs.indexOf(Math.min(...costs));
};

export interface LegStats {
  meters: number;
  minutes: number;
}

export const legStats = (leg: Pick<RouteLeg, "mode" | "path">): LegStats => {
  const meters = pathLength(leg.path);
  const kmh = MODE_SPEED_KMH[leg.mode];
  return { meters, minutes: (meters / 1000 / kmh) * 60 };
};

export interface RouteStats extends LegStats {
  modes: TransportMode[];
  stops: number;
}

/** Totals for a route; time is moving time only (no lingering at stops). */
export const routeStats = (
  r: Pick<RouteDraft, "legs" | "stops">,
): RouteStats => {
  const legs = r.legs.map(legStats);
  return {
    meters: legs.reduce((s, l) => s + l.meters, 0),
    minutes: legs.reduce((s, l) => s + l.minutes, 0),
    modes: [...new Set(r.legs.map((l) => l.mode))],
    stops: r.stops.length,
  };
};

export const formatDistance = (meters: number): string =>
  meters < 1000
    ? `${Math.round(meters / 10) * 10} m`
    : `${(meters / 1000).toFixed(1)} km`;

export const formatDuration = (minutes: number): string => {
  const m = Math.max(1, Math.round(minutes));
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = Math.round((m - h * 60) / 5) * 5;
  return rest === 0 ? `${h} h` : `${h} h ${rest} min`;
};

export type RouteField =
  | "title"
  | "summary"
  | "body"
  | "stops"
  | "narration"
  | "legs"
  | "path"
  | "photoIds";

export interface RouteChange {
  field: RouteField;
  before: string;
  after: string;
}

const showStops = (r: RouteDraft) =>
  r.stops
    .map(
      (s, i) =>
        `${i + 1}. ${s.name}${s.placeId === null ? " (custom point)" : ""}`,
    )
    .join("\n");

const showNarration = (r: RouteDraft) =>
  r.stops
    .flatMap((s, i) => (s.narration ? [`${i + 1}. ${s.narration}`] : []))
    .join("\n\n");

const showLegs = (r: RouteDraft) =>
  r.legs
    .map(
      (l, i) =>
        `${i + 1}→${i + 2}: ${l.mode}${l.directions ? ` — ${l.directions}` : ""}`,
    )
    .join("\n");

const pathKey = (r: RouteDraft) =>
  JSON.stringify(
    r.legs.map((l) => l.path.map((p) => p.map((n) => n.toFixed(5)))),
  );

/** What changed between the current route and a proposed draft. */
export const diffRoutes = (
  before: RouteDraft,
  after: RouteDraft,
): RouteChange[] => {
  const pairs: [RouteField, string, string][] = [
    ["title", before.title, after.title],
    ["summary", before.summary, after.summary],
    ["body", before.body ?? "", after.body ?? ""],
    ["stops", showStops(before), showStops(after)],
    ["narration", showNarration(before), showNarration(after)],
    ["legs", showLegs(before), showLegs(after)],
    [
      "path",
      pathKey(before) === pathKey(after)
        ? ""
        : formatDistance(routeStats(before).meters),
      pathKey(before) === pathKey(after)
        ? ""
        : formatDistance(routeStats(after).meters),
    ],
    ["photoIds", before.photoIds.join(","), after.photoIds.join(",")],
  ];
  return pairs
    .filter(([, a, b]) => a !== b)
    .map(([field, a, b]) => ({ field, before: a, after: b }));
};
