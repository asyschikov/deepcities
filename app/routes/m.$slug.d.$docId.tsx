import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, Map as MapIcon, Pencil } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MarkdownView } from "~/components/MarkdownView";
import { PhotoCredit } from "~/components/PhotoCredit";
import { UntranslatedNote } from "~/components/UntranslatedNote";
import { Button } from "~/components/ui/button";
import { localize, untranslated } from "~/lib/content-lang";
import { galleryPhotoIds } from "~/lib/documents";
import { useMapPage } from "~/lib/map-page";
import { photoUrl } from "~/lib/utils";
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
  const { slug, docId } = Route.useParams();
  const initial = Route.useLoaderData();
  const { categoryOf, setOverlay, translateTo } = useMapPage();
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
    <article className="space-y-5 p-5">
      <Link
        to="/m/$slug"
        params={{ slug }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("doc_back")}
      </Link>

      {doc.status === "archived" && (
        <div className="rounded-md border border-warning bg-warning/10 p-3 text-sm">
          {t("doc_archived")}
        </div>
      )}

      {cover && (
        <figure className="space-y-1">
          <img
            src={photoUrl(cover)}
            alt=""
            className="aspect-[4/3] w-full rounded-lg bg-muted object-cover"
          />
          <PhotoCredit photo={photoById.get(cover)} />
        </figure>
      )}

      <header className="space-y-1.5">
        <div className="text-xs font-medium tracking-wide text-brick uppercase">
          {t("doc_kicker")}
        </div>
        <h1 className="text-2xl leading-tight font-semibold">{doc.title}</h1>
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
          <div className="grid grid-cols-2 gap-2">
            {gallery.slice(1).map((id) => (
              <figure key={id} className="space-y-1">
                <a href={photoUrl(id)} target="_blank" rel="noreferrer">
                  <img
                    src={photoUrl(id)}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-md bg-muted object-cover"
                  />
                </a>
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
                    to="/m/$slug/p/$placeId"
                    params={{ slug, placeId: p.id }}
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
            <Link to="/m/$slug/d/$docId/edit" params={{ slug, docId }}>
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
              <li key={h.id}>
                <span className="font-medium text-foreground">
                  {t(`doc_history_${h.action}`, {
                    name: h.editor?.name ?? t("someone"),
                  })}
                </span>
                {" · "}
                {formatDistanceToNow(h.createdAt, { addSuffix: true })}
                {h.note && <div className="italic">“{h.note}”</div>}
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
};

export const Route = createFileRoute("/m/$slug/d/$docId")({
  loader: async ({ params }) => {
    const data = await loadDocument({ data: params.docId });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.document.title} · Deep Cities` },
          ...(loaderData.document.summary
            ? [{ name: "description", content: loaderData.document.summary }]
            : []),
        ]
      : [],
  }),
  component: DocumentPage,
});
