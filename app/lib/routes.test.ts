import { describe, expect, it } from "vitest";
import {
  diffRoutes,
  formatDistance,
  formatDuration,
  insertViaIndex,
  pathLength,
  routeStats,
} from "./routes";
import { type RouteDraft, routeDraftSchema } from "./validation";

const a = {
  placeId: "p1",
  name: "A",
  lat: 52.38,
  lng: 4.84,
  narration: "",
  translations: {},
};
const b = {
  placeId: null,
  name: "B",
  lat: 52.38,
  lng: 4.85,
  narration: "",
  translations: {},
};
const route: RouteDraft = {
  title: "Test walk",
  summary: "A walk for the tests.",
  body: "",
  stops: [a, b],
  legs: [
    {
      mode: "walk",
      snap: true,
      via: [],
      path: [
        [4.84, 52.38],
        [4.85, 52.38],
      ],
      directions: "",
      translations: {},
    },
  ],
  photoIds: [],
  translations: {},
};

describe("route geometry", () => {
  it("measures paths", () => {
    // 0.01° of longitude at 52.38°N ≈ 680 m.
    expect(pathLength(route.legs[0]?.path ?? [])).toBeGreaterThan(670);
    expect(pathLength(route.legs[0]?.path ?? [])).toBeLessThan(690);
  });

  it("estimates walking time from distance", () => {
    const s = routeStats(route);
    expect(s.modes).toEqual(["walk"]);
    expect(Math.round(s.minutes)).toBe(9); // 680 m at 4.5 km/h
  });

  it("inserts a waypoint where it adds the least detour", () => {
    const from: [number, number] = [0, 0];
    const to: [number, number] = [0, 3];
    const via: [number, number][] = [
      [0, 1],
      [0, 2],
    ];
    expect(insertViaIndex(from, via, to, [0.1, 2.5])).toBe(2);
    expect(insertViaIndex(from, via, to, [0.1, 0.5])).toBe(0);
  });

  it("formats distance and duration", () => {
    expect(formatDistance(842)).toBe("840 m");
    expect(formatDistance(2520)).toBe("2.5 km");
    expect(formatDuration(13.7)).toBe("14 min");
    expect(formatDuration(125)).toBe("2 h 5 min");
  });
});

describe("routeDraftSchema", () => {
  it("needs one leg between each pair of stops", () => {
    expect(routeDraftSchema.safeParse(route).success).toBe(true);
    expect(routeDraftSchema.safeParse({ ...route, legs: [] }).success).toBe(
      false,
    );
  });
});

describe("diffRoutes", () => {
  it("reports nothing for identical routes", () => {
    expect(diffRoutes(route, structuredClone(route))).toEqual([]);
  });

  it("reports reordered stops, new directions and a redrawn path", () => {
    const after: RouteDraft = {
      ...route,
      stops: [b, a],
      legs: [
        {
          ...(route.legs[0] as RouteDraft["legs"][number]),
          directions: "Follow the canal",
          path: [
            [4.85, 52.38],
            [4.845, 52.381],
            [4.84, 52.38],
          ],
        },
      ],
    };
    expect(diffRoutes(route, after).map((c) => c.field)).toEqual([
      "stops",
      "legs",
      "path",
    ]);
  });
});
