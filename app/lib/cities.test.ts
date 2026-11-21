import { describe, expect, it } from "vitest";
import { citySlug, mapPath } from "./cities";

describe("citySlug", () => {
  it("makes a URL segment of a city name", () => {
    expect(citySlug("Amsterdam")).toBe("amsterdam");
    expect(citySlug("Den Haag")).toBe("den-haag");
    expect(citySlug("São Paulo")).toBe("sao-paulo");
    expect(citySlug(" 's-Hertogenbosch ")).toBe("s-hertogenbosch");
  });
  it("builds a map's path", () => {
    expect(mapPath({ city: "Amsterdam", slug: "deep" })).toBe(
      "/amsterdam/deep",
    );
  });
});
