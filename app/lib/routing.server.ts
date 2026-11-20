import type { TransportMode } from "./constants";
import { createLog } from "./logger";
import type { LngLatTuple } from "./validation";

/**
 * Street routing for walk/bike legs via the FOSSGIS-hosted OSRM servers
 * (routing.openstreetmap.de; free, fair use, OSM data). Called only while
 * editing a route; the resulting path is stored on the route.
 */
const PROFILE: Partial<Record<TransportMode, string>> = {
  walk: "routed-foot",
  bike: "routed-bike",
};

const log = createLog("routing");

export class SnapError extends Error {}

export const snapPath = async (
  mode: TransportMode,
  points: LngLatTuple[],
  userAgent: string,
): Promise<LngLatTuple[]> => {
  const profile = PROFILE[mode];
  if (!profile) throw new SnapError(`Can't follow streets for ${mode}`);
  const coords = points
    .map(([lng, lat]) => `${lng.toFixed(6)},${lat.toFixed(6)}`)
    .join(";");
  const url = `https://routing.openstreetmap.de/${profile}/route/v1/driving/${coords}?overview=full&geometries=geojson`;
  const res = await fetch(url, { headers: { "User-Agent": userAgent } });
  if (!res.ok) {
    log.warn({ msg: "snap.http", status: res.status });
    throw new SnapError("The street router is unavailable, try again later");
  }
  const body = (await res.json()) as {
    code: string;
    routes?: { geometry: { coordinates: LngLatTuple[] } }[];
  };
  const line = body.routes?.[0]?.geometry.coordinates;
  if (body.code !== "Ok" || !line || line.length < 2) {
    throw new SnapError("No street route found between these points");
  }
  // Start and end exactly at the stops (the router snaps to the nearest road).
  const [first, last] = [points[0], points[points.length - 1]];
  return first && last ? [first, ...line, last] : line;
};
