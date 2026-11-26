import { describe, expect, it } from "vitest";
import { citySlug, mapPath, placeIdOf, placeParam } from "./cities";

describe("citySlug", () => {
  it("makes a URL segment of a city name", () => {
    expect(citySlug("Amsterdam")).toBe("amsterdam");
    expect(citySlug("Den Haag")).toBe("den-haag");
    expect(citySlug("São Paulo")).toBe("sao-paulo");
    expect(citySlug(" 's-Hertogenbosch ")).toBe("s-hertogenbosch");
  });
  it("builds a map's path", () => {
    expect(mapPath({ city: "Amsterdam", slug: "sights" })).toBe(
      "/amsterdam/sights",
    );
  });
});

describe("placeParam", () => {
  it("joins a readable title and the id", () => {
    expect(placeParam({ id: "abc123", title: "Catharinahofje" })).toBe(
      "catharinahofje-abc123",
    );
    expect(placeIdOf("catharinahofje-abc123")).toBe("abc123");
    expect(placeIdOf("abc123")).toBe("abc123");
  });
  it("cuts long titles on a word", () => {
    const param = placeParam({
      id: "x1",
      title:
        "Er ligt een roofstaat, the ship of the islands that the city ordered",
    });
    expect(param.length).toBeLessThanOrEqual(64);
    expect(param.endsWith("-x1")).toBe(true);
    expect(param).not.toMatch(/--/);
  });
  it("falls back to the id", () => {
    expect(placeParam({ id: "x1", title: "“”" })).toBe("x1");
  });
});
