import { describe, expect, it } from "vitest";
import {
  inlinePhotoIds,
  linkedIds,
  parseBlocks,
  parseInline,
  parseTarget,
} from "./markdown";

describe("parseBlocks", () => {
  it("keeps the original dialect: headings, lists, paragraphs", () => {
    expect(
      parseBlocks(
        "## Look for\n\n- a\n- b\n\n1. one\n2. two\n\nline one\nline two",
      ),
    ).toEqual([
      { kind: "heading", level: 2, text: "Look for" },
      { kind: "ul", items: ["a", "b"] },
      { kind: "ol", items: ["one", "two"] },
      { kind: "p", text: "line one line two" },
    ]);
  });

  it("parses picture lines, quotes and rules", () => {
    expect(
      parseBlocks(
        "![Het Schip from the canal](photo:abc123)\n> quoted\n> on two lines\n\n---\ntext",
      ),
    ).toEqual([
      { kind: "image", photoId: "abc123", caption: "Het Schip from the canal" },
      { kind: "quote", text: "quoted on two lines" },
      { kind: "hr" },
      { kind: "p", text: "text" },
    ]);
  });

  it("does not turn external images into pictures", () => {
    expect(parseBlocks("![x](https://example.org/a.jpg)")).toEqual([
      { kind: "p", text: "![x](https://example.org/a.jpg)" },
    ]);
  });

  it("ends a paragraph at a picture line", () => {
    expect(parseBlocks("intro\n![](photo:p1)")).toEqual([
      { kind: "p", text: "intro" },
      { kind: "image", photoId: "p1", caption: "" },
    ]);
  });
});

describe("parseInline", () => {
  it("parses emphasis and links", () => {
    expect(
      parseInline(
        "**De Klerk** built *Het Schip*, see [the museum](https://hetschip.nl) and [Spaarndammerplantsoen](place:p_1).",
      ),
    ).toEqual([
      { kind: "strong", text: "De Klerk" },
      { kind: "text", text: " built " },
      { kind: "em", text: "Het Schip" },
      { kind: "text", text: ", see " },
      {
        kind: "link",
        text: "the museum",
        target: { kind: "external", url: "https://hetschip.nl" },
      },
      { kind: "text", text: " and " },
      {
        kind: "link",
        text: "Spaarndammerplantsoen",
        target: { kind: "place", id: "p_1" },
      },
      { kind: "text", text: "." },
    ]);
  });

  it("renders links with unsafe targets as plain text", () => {
    expect(parseTarget("javascript:alert(1)")).toBeNull();
    expect(parseTarget("data:text/html,x")).toBeNull();
    expect(parseTarget("place:../../x")).toBeNull();
    expect(
      parseInline("[click](javascript:void)").some((i) => i.kind === "link"),
    ).toBe(false);
  });
});

describe("inlinePhotoIds / linkedIds", () => {
  const body = [
    "![a](photo:p1)",
    "See [Het Schip](place:pl1) and [the essay](doc:d1).",
    "- also [Het Schip](place:pl1) again",
    "![b](photo:p2)",
    "![a again](photo:p1)",
  ].join("\n");

  it("lists inline photos once, in order", () => {
    expect(inlinePhotoIds(body)).toEqual(["p1", "p2"]);
  });

  it("lists linked places and documents once", () => {
    expect(linkedIds(body)).toEqual({ places: ["pl1"], docs: ["d1"] });
  });
});
