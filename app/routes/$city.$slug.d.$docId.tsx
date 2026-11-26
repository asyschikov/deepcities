import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowLeft,
  Map as MapIcon,
  Maximize2,
  Minimize2,
  Pencil,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod/v4";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { CoverPhoto } from "~/components/CoverPhoto";
import { MarkdownView } from "~/components/MarkdownView";
import { PhotoCredit } from "~/components/PhotoCredit";
import { PhotoViewer } from "~/components/PhotoViewer";
import { UntranslatedNote } from "~/components/UntranslatedNote";
import { UserAvatar } from "~/components/UserAvatar";
import { Button } from "~/components/ui/button";
import { localize, untranslated } from "~/lib/content-lang";
import { galleryPhotoIds } from "~/lib/documents";
import { useMapPage } from "~/lib/map-page";
import { canonicalLink, seoMeta } from "~/lib/seo";
import { cn, photoUrl } from "~/lib/utils";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadDocument = createServerFn({ method: "GET" })
  .validator((documentId: string) => documentId)
  .handler(async ({ data: documentId }) => {
    const caller = await createCaller();
    try {
      return await caller.document.byId({ documentId });
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });

const DocumentPage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { city, slug, docId } = Route.useParams();
  const initial = Route.useLoaderData();
  const navigate = useNavigate();
  // Full-screen reading is in the URL, so Back leaves it and links can share it.
  const { full = false } = Route.useSearch();
  const setFull = (on: boolean) =>
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        full: on || undefined,
      }),
    });
  useEffect(() => {
    if (!full) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")
        navigate({
          to: ".",
          search: (prev: Record<string, unknown>) => ({
            ...prev,
            full: undefined,
          }),
        });
    };
    window.addEventListener("keydown", onKey);
    // The page behind shouldn't scroll while reading.
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [full, navigate]);
  const { categoryOf, setOverlay, translateTo } = useMapPage();
  const [viewing, setViewing] = useState<number | null>(null);
  const { data } = useQuery({
    ...trpc.document.byId.queryOptions({ documentId: docId }),
    initialData: initial,
  });
  const { document: rawDoc, places, photos, can, history } = data;
  // Texts in the reader's language; pictures are shared by all versions.
  const doc = localize(rawDoc, translateTo);
  const missing = translateTo
    ? untranslated(rawDoc, translateTo, ["title", "summary", "body"])
    : [];

  // Brighten the document's places, dim the rest and zoom to them. Keyed by a
  // string so refetches with the same places don't reset the map view.
  const placeKey = places.map((p) => `${p.id}:${p.lng}:${p.lat}`).join(",");
  useEffect(() => {
    const parts = placeKey
      ? placeKey.split(",").map((s) => {
          const [id = "", lng = "0", lat = "0"] = s.split(":");
          return { id, lngLat: [Number(lng), Number(lat)] as [number, number] };
        })
      : [];
    setOverlay(
      parts.length > 0
        ? {
            dimPlaces: true,
            highlightPlaceIds: parts.map((p) => p.id),
            fitTo: parts.map((p) => p.lngLat),
          }
        : null,
    );
    return () => setOverlay(null);
  }, [placeKey, setOverlay]);

  const gallery = galleryPhotoIds(rawDoc);
  const cover = gallery[0];
  const photoById = new Map(photos.map((p) => [p.id, p]));

  return (
    <div
      className={cn(
        full &&
          "fixed inset-0 z-50 overflow-y-auto bg-background md:text-[17px]",
      )}
    >
      <article
        className={cn(
          "space-y-5",
          full ? "mx-auto max-w-2xl px-5 py-8 md:py-12" : "p-5",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          {full ? (
            <span />
          ) : (
            <BackLink
              fallback={
                <Link
                  to="/$city/$slug"
                  params={{ city, slug }}
                  search={{ tab: undefined }}
                  className={BACK_LINK_CLASS}
                >
                  <ArrowLeft className="size-4" /> {t("doc_back")}
                </Link>
              }
            />
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => setFull(!full)}
          >
            {full ? <Minimize2 /> : <Maximize2 />}
            {full ? t("doc_fullscreen_exit") : t("doc_fullscreen")}
          </Button>
        </div>

        {doc.status === "archived" && (
          <div className="rounded-md border border-warning bg-warning/10 p-3 text-sm">
            {t("doc_archived")}
          </div>
        )}

        {cover && (
          <figure className="space-y-1">
            <CoverPhoto
              id={cover}
              alt=""
              width={photoById.get(cover)?.width}
              height={photoById.get(cover)?.height}
              onOpen={() => setViewing(0)}
              openLabel={t("photo_open")}
            />
            <PhotoCredit photo={photoById.get(cover)} />
          </figure>
        )}
        <PhotoViewer
          photoIds={gallery}
          photos={photos}
          index={viewing ?? 0}
          onIndexChange={setViewing}
          open={viewing !== null}
          onOpenChange={(open) => {
            if (!open) setViewing(null);
          }}
          title={doc.title}
        />

        <header className="space-y-1.5">
          <div className="text-xs font-medium tracking-wide text-brick uppercase">
            {t("doc_kicker")}
          </div>
          <h1
            className={cn(
              "leading-tight font-semibold",
              full ? "text-3xl md:text-4xl" : "text-2xl",
            )}
          >
            {doc.title}
          </h1>
          {doc.summary && (
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {doc.summary}
            </p>
          )}
        </header>

        {missing.length > 0 && (
          <UntranslatedNote
            partly={missing.length < 3 && !missing.includes("title")}
          />
        )}

        {doc.body && (
          <div className="text-foreground/85">
            <MarkdownView content={doc.body} slug={slug} photos={photos} />
          </div>
        )}

        {gallery.length > 1 && (
          <section className="space-y-2 border-t pt-4">
            <h2 className="font-sans text-sm font-semibold">
              {t("doc_gallery")}
            </h2>
            <div
              className={cn("grid gap-2", full ? "grid-cols-3" : "grid-cols-2")}
            >
              {gallery.slice(1).map((id, i) => (
                <figure key={id} className="space-y-1">
                  <button
                    type="button"
                    className="block w-full cursor-zoom-in"
                    aria-label={t("photo_open")}
                    onClick={() => setViewing(i + 1)}
                  >
                    <img
                      src={photoUrl(id)}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-md bg-muted object-cover"
                    />
                  </button>
                  <PhotoCredit photo={photoById.get(id)} />
                </figure>
              ))}
            </div>
          </section>
        )}

        {places.length > 0 && (
          <section className="space-y-2 border-t pt-4">
            <h2 className="flex items-center gap-1.5 font-sans text-sm font-semibold">
              <MapIcon className="size-4" />
              {t("doc_places", { count: places.length })}
            </h2>
            <ul className="divide-y rounded-lg border">
              {places.map((raw) => {
                const p = localize(raw, translateTo);
                const cat = categoryOf(p.category);
                return (
                  <li key={p.id}>
                    <Link
                      to="/$city/$slug/p/$placeId"
                      params={{ city, slug, placeId: p.id }}
                      className="flex items-center gap-3 p-2.5 transition hover:bg-muted/60"
                    >
                      <div
                        className="size-10 shrink-0 overflow-hidden rounded"
                        style={{ background: `${cat.color}22` }}
                      >
                        {p.coverPhotoId && (
                          <img
                            src={photoUrl(p.coverPhotoId)}
                            alt=""
                            loading="lazy"
                            className="size-full object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium">
                          {p.title}
                        </div>
                        <div className="text-xs" style={{ color: cat.color }}>
                          {cat.label}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {can.review && (
          <section className="border-t pt-4">
            <Button asChild size="sm" variant="outline">
              <Link
                to="/$city/$slug/d/$docId/edit"
                params={{ city, slug, docId }}
              >
                <Pencil /> {t("doc_edit")}
              </Link>
            </Button>
          </section>
        )}

        {history.length > 0 && (
          <section className="space-y-2 border-t pt-4">
            <h2 className="font-sans text-sm font-semibold">
              {t("place_history")}
            </h2>
            <ol className="space-y-2 text-xs text-muted-foreground">
              {history.map((h) => (
                <li key={h.id} className="flex gap-2">
                  <UserAvatar
                    name={h.editor?.name ?? "?"}
                    avatarId={h.editor?.avatarId}
                    className="mt-0.5 size-5 text-[10px]"
                  />
                  <div>
                    <span className="font-medium text-foreground">
                      {t(`doc_history_${h.action}`, {
                        name: h.editor?.name ?? t("someone"),
                      })}
                    </span>
                    {" · "}
                    {formatDistanceToNow(h.createdAt, { addSuffix: true })}
                    {h.note && <div className="italic">“{h.note}”</div>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>
    </div>
  );
};

export const Route = createFileRoute("/$city/$slug/d/$docId")({
  validateSearch: z.object({ full: z.boolean().optional() }),
  loader: async ({ params }) => {
    const data = await loadDocument({ data: params.docId });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { document } = loaderData;
    const path = `/${params.city}/${params.slug}/d/${document.id}`;
    return {
      meta: seoMeta({
        title: `${document.title} · Deep Cities`,
        description: document.summary || document.body.slice(0, 400),
        path,
        photoId: document.photoIds[0],
        type: "article",
      }),
      links: canonicalLink(path),
    };
  },
  component: DocumentPage,
});
