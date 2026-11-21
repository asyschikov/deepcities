/**
 * A city's official areas (Amsterdam: gemeente → stadsdeel → gebied → wijk):
 * geometry helpers shared by the server, the map and the import script.
 */
import { z } from "zod/v4";
import { AREA_LEVELS, type AreaLevel } from "./constants";
import type { AreaGeometry } from "./db/schema";

type Pt = [number, number];
export type BBox = [number, number, number, number];

const lngLat = z.tuple([
  z.number().min(-180).max(180),
  z.number().min(-90).max(90),
]);
const ring = z.array(lngLat).min(4);
export const areaGeometrySchema = z.union([
  z.object({ type: z.literal("Polygon"), coordinates: z.array(ring).min(1) }),
  z.object({
    type: z.literal("MultiPolygon"),
    coordinates: z.array(z.array(ring).min(1)).min(1),
  }),
]);

/** One area in an import file; parents are referenced by level + code. */
export const areaImportSchema = z.object({
  level: z.enum(AREA_LEVELS),
  code: z.string().trim().min(1).max(40),
  name: z.string().trim().min(1).max(100),
  parent: z
    .object({ level: z.enum(AREA_LEVELS), code: z.string().min(1).max(40) })
    .nullable(),
  geometry: areaGeometrySchema.nullable(),
});
export type AreaImport = z.infer<typeof areaImportSchema>;

export const polygonsOf = (g: AreaGeometry): Pt[][][] =>
  g.type === "Polygon" ? [g.coordinates] : g.coordinates;

export const bboxOf = (g: AreaGeometry): BBox =>
  polygonsOf(g)
    .flat(2)
    .reduce<BBox>(
      ([a, b, c, d], [x, y]) => [
        Math.min(a, x),
        Math.min(b, y),
        Math.max(c, x),
        Math.max(d, y),
      ],
      [Infinity, Infinity, -Infinity, -Infinity],
    );

export const inBBox = ([x, y]: Pt, [a, b, c, d]: BBox): boolean =>
  x >= a && x <= c && y >= b && y <= d;

/** Ray casting: is `p` inside the closed ring? */
const inRing = ([x, y]: Pt, r: Pt[]): boolean =>
  r.reduce((inside, [xi, yi], i) => {
    const [xj, yj] = r[(i + r.length - 1) % r.length] ?? [xi, yi];
    const crosses =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    return crosses ? !inside : inside;
  }, false);

/** Inside an outer ring and none of its holes, in any of the polygons. */
export const containsPoint = (g: AreaGeometry, p: Pt): boolean =>
  polygonsOf(g).some(
    ([outer, ...holes]) =>
      outer !== undefined &&
      inRing(p, outer) &&
      !holes.some((h) => inRing(p, h)),
  );

/** Squared distance from p to segment ab, in degrees (fine at city scale). */
const segDist2 = ([px, py]: Pt, [ax, ay]: Pt, [bx, by]: Pt): number => {
  const dx = bx - ax;
  const dy = by - ay;
  const len = dx * dx + dy * dy;
  const t =
    len === 0
      ? 0
      : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len));
  const x = ax + t * dx - px;
  const y = ay + t * dy - py;
  return x * x + y * y;
};

/** Douglas–Peucker on an open polyline. */
const simplifyLine = (pts: Pt[], tol2: number): Pt[] => {
  if (pts.length < 3) return pts;
  const first = pts[0] as Pt;
  const last = pts[pts.length - 1] as Pt;
  const { i, d } = pts.slice(1, -1).reduce(
    (best, p, j) => {
      const dist = segDist2(p, first, last);
      return dist > best.d ? { i: j + 1, d: dist } : best;
    },
    { i: 0, d: -1 },
  );
  if (d <= tol2) return [first, last];
  return [
    ...simplifyLine(pts.slice(0, i + 1), tol2).slice(0, -1),
    ...simplifyLine(pts.slice(i), tol2),
  ];
};

const round = (n: number) => Math.round(n * 1e6) / 1e6;

/**
 * Simplify for display: drop points within `tolerance` degrees of the line
 * (≈ 0.00002° is 1.5–2 m in Amsterdam) and round to 6 decimals. Rings keep
 * at least 4 points.
 */
export const simplifyGeometry = (
  g: AreaGeometry,
  tolerance = 0.00002,
): AreaGeometry => {
  const ringOf = (r: Pt[]): Pt[] => {
    const s = simplifyLine(r, tolerance * tolerance);
    return (s.length >= 4 ? s : r).map(([x, y]) => [round(x), round(y)]);
  };
  return g.type === "Polygon"
    ? { type: "Polygon", coordinates: g.coordinates.map(ringOf) }
    : {
        type: "MultiPolygon",
        coordinates: g.coordinates.map((poly) => poly.map(ringOf)),
      };
};

/** A representative inner point (for assigning children to parents). */
export const innerPoint = (g: AreaGeometry): Pt => {
  const [a, b, c, d] = bboxOf(g);
  const centre: Pt = [(a + c) / 2, (b + d) / 2];
  if (containsPoint(g, centre)) return centre;
  // Concave shapes: fall back to a vertex nudged towards the centre.
  const outer = polygonsOf(g)[0]?.[0] ?? [];
  const nudged = outer
    .map(
      ([x, y]): Pt => [x + (centre[0] - x) * 0.05, y + (centre[1] - y) * 0.05],
    )
    .find((p) => containsPoint(g, p));
  return nudged ?? centre;
};

/** Rings as lines, for drawing outlines on the map. */
export const outlineRings = (g: AreaGeometry): Pt[][] => polygonsOf(g).flat();

export const childLevel = (l: AreaLevel): AreaLevel | null =>
  AREA_LEVELS[AREA_LEVELS.indexOf(l) + 1] ?? null;
