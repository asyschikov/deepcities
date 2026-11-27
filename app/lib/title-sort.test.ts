import { describe, expect, it } from "vitest";
import { compareTitles, titleSortKey } from "./title-sort";

describe("titleSortKey", () => {
  it("skips leading quotes and brackets", () => {
    expect(titleSortKey('"Nooit gedacht" builder\'s stone')).toBe(
      "Nooit gedacht\" builder's stone",
    );
    expect(titleSortKey("(Zoals) ze is")).toBe("Zoals) ze is");
    expect(titleSortKey("'Pandora' cherries")).toBe("Pandora' cherries");
  });
  it("skips the Dutch articles 't and 's", () => {
    expect(titleSortKey("'t Smalle")).toBe("Smalle");
    expect(titleSortKey("'s-Gravenhekje")).toBe("Gravenhekje");
    expect(titleSortKey("Tolhuis")).toBe("Tolhuis");
  });
});

describe("compareTitles", () => {
  it("orders by the first real letter", () => {
    const titles = [
      "'t Smalle",
      '"Er ligt een roofstaat"',
      "Amstel",
      "(Zoals)",
    ];
    expect([...titles].sort((a, b) => compareTitles(a, b, "en"))).toEqual([
      "Amstel",
      '"Er ligt een roofstaat"',
      "'t Smalle",
      "(Zoals)",
    ]);
  });
});
