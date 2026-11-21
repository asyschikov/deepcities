import { inlinePhotoIds } from "./markdown";
import type { DocumentAttachment, DocumentDraft } from "./validation";

const attachmentKey = (a: DocumentAttachment) =>
  `${a.subjectType}:${a.subjectId}`;

/**
 * Canonical form of a document draft before it is stored: attachments are
 * de-duplicated (first wins), and every picture shown inline in the body is
 * part of `photoIds` (appended after the explicitly listed ones).
 */
export const normalizeDocumentDraft = (draft: DocumentDraft): DocumentDraft => {
  const seen = new Set<string>();
  const attachments = draft.attachments.filter((a) => {
    const key = attachmentKey(a);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const bodies = [
    draft.body,
    ...Object.values(draft.translations ?? {}).map((t) => t?.body ?? ""),
  ];
  const photoIds = [
    ...new Set([...draft.photoIds, ...bodies.flatMap(inlinePhotoIds)]),
  ];
  return { ...draft, photoIds, attachments };
};

/** Photos of a document that are not shown inline, i.e. its gallery. */
export const galleryPhotoIds = (
  draft: Pick<DocumentDraft, "body" | "photoIds"> &
    Partial<Pick<DocumentDraft, "translations">>,
) => {
  // Pictures inline in any language version aren't repeated in the gallery.
  const inline = new Set(
    [
      draft.body,
      ...Object.values(draft.translations ?? {}).map((t) => t?.body ?? ""),
    ].flatMap(inlinePhotoIds),
  );
  return draft.photoIds.filter((id) => !inline.has(id));
};
