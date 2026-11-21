import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "@tanstack/react-router";
import { Archive, ImageDown, Plus, Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { MarkdownView } from "~/components/MarkdownView";
import type { PhotoMeta } from "~/components/PhotoCredit";
import { PhotoUploader } from "~/components/PhotoUploader";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import { MAX_PHOTOS_PER_DOCUMENT } from "~/lib/constants";
import { useLeaveForm } from "~/lib/nav-history";
import { photoUrl } from "~/lib/utils";
import type { DocumentAttachment, DocumentDraft } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

export interface DocumentEditorProps {
  slug: string;
  collectionId: string;
  /** Absent when creating. */
  documentId?: string;
  revision?: number;
  initial: DocumentDraft;
  photos?: PhotoMeta[];
}

const ArchiveButton = ({
  documentId,
  slug,
}: {
  documentId: string;
  slug: string;
}) => {
  const { city = "" } = useParams({ strict: false });
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const archive = useMutation(
    trpc.document.archive.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries();
        toast.success(t("doc_archived_toast"));
        await navigate({
          to: "/$city/$slug",
          params: { city, slug },
          replace: true,
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
          <Archive /> {t("doc_archive")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("doc_archive_title")}</DialogTitle>
          <DialogDescription>{t("doc_archive_desc")}</DialogDescription>
        </DialogHeader>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          aria-label={t("doc_archive_title")}
        />
        <DialogFooter>
          <Button
            variant="destructive"
            disabled={note.trim().length < 3 || archive.isPending}
            onClick={() => archive.mutate({ documentId, note: note.trim() })}
          >
            {t("doc_archive")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const DocumentEditor = ({
  slug,
  collectionId,
  documentId,
  revision,
  initial,
  photos,
}: DocumentEditorProps) => {
  const { city = "" } = useParams({ strict: false });
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const leaveForm = useLeaveForm();
  const queryClient = useQueryClient();
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState(initial.title);
  const [summary, setSummary] = useState(initial.summary);
  const [body, setBody] = useState(initial.body);
  const [photoIds, setPhotoIds] = useState(initial.photoIds);
  const [attachments, setAttachments] = useState<DocumentAttachment[]>(
    initial.attachments,
  );
  const [note, setNote] = useState("");
  const [placeQuery, setPlaceQuery] = useState("");

  const { data: places = [] } = useQuery(
    trpc.place.list.queryOptions({ collectionId }),
  );
  const placeById = useMemo(
    () => new Map(places.map((p) => [p.id, p])),
    [places],
  );
  const { data: routes = [] } = useQuery(
    trpc.route.list.queryOptions({ collectionId }),
  );

  const onMap = attachments.some((a) => a.subjectType === "collection");
  const toggleMap = () =>
    setAttachments((list) =>
      onMap
        ? list.filter((a) => a.subjectType !== "collection")
        : [{ subjectType: "collection", subjectId: collectionId }, ...list],
    );
  const attachedPlaceIds = attachments
    .filter((a) => a.subjectType === "place")
    .map((a) => a.subjectId);
  const isAttached = (a: DocumentAttachment) =>
    attachments.some(
      (x) => x.subjectType === a.subjectType && x.subjectId === a.subjectId,
    );
  const attach = (a: DocumentAttachment) =>
    setAttachments((list) =>
      list.some(
        (x) => x.subjectType === a.subjectType && x.subjectId === a.subjectId,
      )
        ? list
        : [...list, a],
    );
  const attachPlace = (id: string) =>
    attach({ subjectType: "place", subjectId: id });
  const detach = (a: DocumentAttachment) =>
    setAttachments((list) =>
      list.filter(
        (x) =>
          !(x.subjectType === a.subjectType && x.subjectId === a.subjectId),
      ),
    );
  const q = placeQuery.trim().toLowerCase();
  const matches = q
    ? places
        .filter(
          (p) =>
            p.title.toLowerCase().includes(q) &&
            !attachedPlaceIds.includes(p.id),
        )
        .slice(0, 8)
    : [];

  const insertPhoto = (id: string) => {
    const el = bodyRef.current;
    const snippet = `\n\n![](photo:${id})\n\n`;
    const at = el?.selectionStart ?? body.length;
    setBody((b) =>
      `${b.slice(0, at)}${snippet}${b.slice(at)}`.replace(/^\n+/, ""),
    );
  };

  const save = useMutation(
    trpc.document.save.mutationOptions({
      onSuccess: async (res) => {
        await queryClient.invalidateQueries();
        toast.success(t("doc_saved"));
        // Back to the document if we came from it, so Back skips the form.
        leaveForm(`/${city}/${slug}/d/${res.id}`, () =>
          navigate({
            to: "/$city/$slug/d/$docId",
            params: { city, slug, docId: res.id },
            replace: true,
          }),
        );
      },
      onError: (err) => toast.error(err.message),
    }),
  );

  const valid = title.trim().length >= 2;

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        save.mutate({
          collectionId,
          documentId,
          baseRevision: revision,
          draft: {
            title,
            summary,
            body,
            photoIds,
            attachments,
            // Not edited here yet: other-language versions are kept as they are.
            translations: initial.translations,
          },
          note: note.trim() || null,
        });
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="doc-title">{t("doc_title")}</Label>
        <Input
          id="doc-title"
          value={title}
          maxLength={120}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="doc-summary">{t("doc_summary")}</Label>
        <Textarea
          id="doc-summary"
          value={summary}
          maxLength={400}
          rows={2}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <Tabs defaultValue="write" className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="doc-body">{t("doc_body")}</Label>
          <TabsList>
            <TabsTrigger value="write">{t("doc_write")}</TabsTrigger>
            <TabsTrigger value="preview">{t("doc_preview")}</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="write" className="space-y-1">
          <Textarea
            id="doc-body"
            ref={bodyRef}
            value={body}
            rows={22}
            className="font-mono text-[13px] leading-relaxed"
            onChange={(e) => setBody(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">{t("doc_body_help")}</p>
        </TabsContent>
        <TabsContent value="preview">
          <div className="min-h-40 rounded-md border p-4">
            <MarkdownView content={body} slug={slug} photos={photos} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-2">
        <Label>{t("doc_pictures")}</Label>
        <p className="text-xs text-muted-foreground">
          {t("doc_pictures_help")}
        </p>
        <PhotoUploader
          collectionId={collectionId}
          value={photoIds}
          onChange={setPhotoIds}
          max={MAX_PHOTOS_PER_DOCUMENT}
        />
        {photoIds.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {photoIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => insertPhoto(id)}
                className="flex items-center gap-1 rounded border px-1.5 py-1 text-xs hover:bg-muted"
                title={t("doc_insert_picture")}
              >
                <img
                  src={photoUrl(id)}
                  alt=""
                  className="size-6 rounded object-cover"
                />
                <ImageDown className="size-3.5" />
              </button>
            ))}
          </div>
        )}
      </div>

      <fieldset className="space-y-3 rounded-lg border p-4">
        <legend className="px-1 text-sm font-medium">
          {t("doc_shown_on")}
        </legend>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={onMap} onChange={toggleMap} />
          {t("doc_on_map")}
        </label>
        <div className="space-y-2">
          <div className="text-sm">{t("doc_on_places")}</div>
          {attachedPlaceIds.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {attachedPlaceIds.map((id) => (
                <li
                  key={id}
                  className="flex items-center gap-1 rounded-full border bg-muted/60 py-0.5 pr-1 pl-2.5 text-xs"
                >
                  {placeById.get(id)?.title ?? id}
                  <button
                    type="button"
                    onClick={() =>
                      detach({ subjectType: "place", subjectId: id })
                    }
                    aria-label={t("doc_detach")}
                    className="rounded-full p-0.5 hover:bg-background"
                  >
                    <X className="size-3" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
            <Input
              value={placeQuery}
              onChange={(e) => setPlaceQuery(e.target.value)}
              placeholder={t("doc_find_place")}
              aria-label={t("doc_find_place")}
              className="pl-8"
            />
          </div>
          {matches.length > 0 && (
            <ul className="divide-y rounded-md border text-sm">
              {matches.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-muted"
                    onClick={() => {
                      attachPlace(p.id);
                      setPlaceQuery("");
                    }}
                  >
                    <Plus className="size-3.5" /> {p.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {routes.length > 0 && (
          <div className="space-y-1.5">
            <div className="text-sm">{t("doc_on_routes")}</div>
            {routes.map((r) => {
              const a: DocumentAttachment = {
                subjectType: "route",
                subjectId: r.id,
              };
              const on = isAttached(a);
              return (
                <label key={r.id} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => (on ? detach(a) : attach(a))}
                  />
                  {r.title}
                </label>
              );
            })}
          </div>
        )}
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="doc-note">{t("doc_note")}</Label>
        <Input
          id="doc-note"
          value={note}
          maxLength={500}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Button type="submit" disabled={!valid || save.isPending}>
          {documentId ? t("doc_save") : t("doc_publish")}
        </Button>
        {documentId && <ArchiveButton documentId={documentId} slug={slug} />}
      </div>
    </form>
  );
};
