import { describe, expect, it } from "vitest";
import { galleryPhotoIds, normalizeDocumentDraft } from "./documents";
import type { DocumentDraft } from "./validation";

const draft: DocumentDraft = {
  kind: "text",
  title: "Michel de Klerk",
  summary: "",
  body: "![Het Schip](photo:p2)\n\ntext\n\n![tower](photo:p3)",
  photoIds: ["p1", "p2"],
  attachments: [
    { subjectType: "collection", subjectId: "c1" },
    { subjectType: "place", subjectId: "pl1" },
    { subjectType: "place", subjectId: "pl1" },
    { subjectType: "route", subjectId: "pl1" },
  ],
  translations: {},
};

describe("normalizeDocumentDraft", () => {
  it("adds inline photos after the listed ones, once", () => {
    expect(normalizeDocumentDraft(draft).photoIds).toEqual(["p1", "p2", "p3"]);
  });

  it("drops duplicate attachments but keeps same id on another subject type", () => {
    expect(normalizeDocumentDraft(draft).attachments).toEqual([
      { subjectType: "collection", subjectId: "c1" },
      { subjectType: "place", subjectId: "pl1" },
      { subjectType: "route", subjectId: "pl1" },
    ]);
  });
});

describe("galleryPhotoIds", () => {
  it("returns photos not shown inline", () => {
    expect(galleryPhotoIds(normalizeDocumentDraft(draft))).toEqual(["p1"]);
  });
});

describe("translated bodies", () => {
  const nl: DocumentDraft = {
    ...draft,
    translations: {
      nl: { body: "![Het Schip](photo:p2)\n\n![brug](photo:p9)" },
    },
  };
  it("count pictures shown inline in any language", () => {
    expect(normalizeDocumentDraft(nl).photoIds).toEqual([
      "p1",
      "p2",
      "p3",
      "p9",
    ]);
  });
  it("keep those pictures out of the gallery", () => {
    expect(galleryPhotoIds(normalizeDocumentDraft(nl))).toEqual(["p1"]);
  });
});
