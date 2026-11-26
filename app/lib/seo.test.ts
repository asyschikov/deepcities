import { describe, expect, it } from "vitest";
import { isPrivateRoute, snippet, withCity } from "./seo";

describe("snippet", () => {
  it("keeps short text", () => {
    expect(snippet("A  stone\nship.")).toBe("A stone ship.");
  });
  it("cuts long text on a word", () => {
    const out = snippet("word ".repeat(60));
    expect(out.length).toBeLessThanOrEqual(160);
    expect(out.endsWith("word…")).toBe(true);
  });
});

describe("isPrivateRoute", () => {
  it("hides forms and accounts", () => {
    expect(isPrivateRoute("/$city/$slug/p/$placeId/edit")).toBe(true);
    expect(isPrivateRoute("/$city/$slug_/manage")).toBe(true);
    expect(isPrivateRoute("/$city/$slug/r/new")).toBe(true);
    expect(isPrivateRoute("/me_/visits")).toBe(true);
    expect(isPrivateRoute("/auth")).toBe(true);
  });
  it("keeps public pages", () => {
    expect(isPrivateRoute("/$city/$slug/p/$placeId")).toBe(false);
    expect(isPrivateRoute("/$city/")).toBe(false);
    expect(isPrivateRoute("__root__")).toBe(false);
  });
});

describe("withCity", () => {
  it("adds the city once", () => {
    expect(withCity("Deep Centrum", "Amsterdam")).toBe(
      "Deep Centrum, Amsterdam",
    );
    expect(withCity("Deep Amsterdam", "Amsterdam")).toBe("Deep Amsterdam");
  });
});
