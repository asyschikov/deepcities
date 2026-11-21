import { describe, expect, it } from "vitest";
import { formatMapView, mapSearchSchema, parseMapView } from "./map-search";

describe("map search params", () => {
  it("round-trips the map position", () => {
    const s = formatMapView({ lat: 52.379201, lng: 4.850499, zoom: 13.5 });
    expect(s).toBe("13.5/52.37920/4.85050");
    expect(parseMapView(s)).toEqual({ lat: 52.3792, lng: 4.8505, zoom: 13.5 });
    expect(formatMapView({ lat: 0, lng: 0, zoom: 0 })).toBe(
      "0/0.00000/0.00000",
    );
  });

  it("rejects malformed positions", () => {
    expect(parseMapView(undefined)).toBeNull();
    expect(parseMapView("13")).toBeNull();
    expect(parseMapView("13/95/4")).toBeNull();
    expect(parseMapView("x/52/4")).toBeNull();
  });

  it("drops bad params instead of failing", () => {
    expect(
      mapSearchSchema.parse({ areas: "nope", tab: "routes", stop: -1 }),
    ).toEqual({ tab: "routes" });
  });
});
