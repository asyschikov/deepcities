import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  notFound,
  Outlet,
  useMatch,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Flag,
  MapPin,
  Pencil,
  Route as RouteIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { DocumentList } from "~/components/DocumentList";
import { MarkdownView } from "~/components/MarkdownView";
import { Gallery } from "~/components/PhotoGallery";
import { PlaceAttributes } from "~/components/PlaceAttributes";
import { RatingBadge, RatingInput } from "~/components/RatingStars";
import { UntranslatedNote } from "~/components/UntranslatedNote";
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
import { Textarea } from "~/components/ui/textarea";
import { localize, localizePlace, untranslated } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { useViewer } from "~/lib/use-viewer";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadPlace = createServerFn({ method: "GET" })
  .validator((placeId: string) => placeId)
  .handler(async ({ data: placeId }) => {
    const caller = await createCaller();
    try {
      return await caller.place.byId({ placeId });
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });

const SuggestRemoval = ({ placeId }: { placeId: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const { view } = useMapPage();
  const submit = useMutation(
    trpc.proposal.create.mutationOptions({
      onSuccess: async (res) => {
        await queryClient.invalidateQueries();
        setOpen(false);
        toast.success(
          res.status === "approved"
            ? t("place_removed")
            : t("form_sent_for_review"),
        );
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Flag />{" "}
          {view.can.review ? t("place_remove") : t("place_suggest_removal")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("place_removal_title")}</DialogTitle>
          <DialogDescription>{t("place_removal_desc")}</DialogDescription>
        </DialogHeader>
        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder={t("place_removal_placeholder")}
          aria-label={t("place_removal_title")}
        />
        <DialogFooter>
          <Button
            variant="destructive"
            disabled={reason.trim().length < 5 || submit.isPending}
            onClick={() =>
              submit.mutate({ kind: "archive", placeId, note: reason.trim() })
            }
          >
            {view.can.review ? t("place_remove") : t("place_suggest_removal")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const PlacePage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const viewer = useViewer();
  const { slug, placeId } = Route.useParams();
  const initial = Route.useLoaderData();
  const { view, categoryOf, focusOn, translateTo } = useMapPage();
  const editing = useMatch({
    from: "/m/$slug/p/$placeId/edit",
    shouldThrow: false,
  });

  const { data } = useQuery({
    ...trpc.place.byId.queryOptions({ placeId }),
    initialData: initial,
  });
  const { can, rating, history, myPending } = data;
  const place = localizePlace(data.place, translateTo);
  const missing = translateTo
    ? untranslated(data.place, translateTo, ["title", "summary", "body"])
    : [];
  const { data: onRoutes = [] } = useQuery(
    trpc.route.throughPlace.queryOptions({ placeId }),
  );

  useEffect(() => {
    focusOn({ lat: place.lat, lng: place.lng });
  }, [place.lat, place.lng, focusOn]);

  const rate = useMutation(
    trpc.rating.set.mutationOptions({
      onSuccess: () =>
        Promise.all([
          queryClient.invalidateQueries({
            queryKey: trpc.place.byId.queryKey({ placeId }),
          }),
          queryClient.invalidateQueries({
            queryKey: trpc.place.list.queryKey(),
          }),
        ]),
      onError: (err) => toast.error(err.message),
    }),
  );

  if (editing) return <Outlet />;

  const cat = categoryOf(place.category);
  const area = [
    place.subNeighbourhood,
    place.neighbourhood,
    place.borough,
    place.municipality,
  ]
    .filter(Boolean)
    .join(", ");
  const archived = place.status === "archived";

  return (
    <article className="space-y-5 p-5">
      <Link
        to="/m/$slug"
        params={{ slug }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("place_back")}
      </Link>

      {archived && (
        <div className="rounded-md border border-warning bg-warning/10 p-3 text-sm">
          {t("place_archived")}
        </div>
      )}

      {missing.length > 0 && (
        <UntranslatedNote
          partly={missing.length < 3 && !missing.includes("title")}
          edit={{ to: "/m/$slug/p/$placeId/edit", params: { slug, placeId } }}
        />
      )}

      <Gallery
        photoIds={place.photoIds}
        photos={data.photos}
        title={place.title}
      />

      <header className="space-y-1.5">
        <div
          className="flex items-center gap-2 text-xs font-medium"
          style={{ color: cat.color }}
        >
          <span
            className="size-2 rounded-full"
            style={{ background: cat.color }}
          />
          {cat.label}
        </div>
        <h1 className="text-2xl leading-tight font-semibold">{place.title}</h1>
        {area && <p className="text-sm text-muted-foreground">{area}</p>}
        <RatingBadge avg={rating.avg} count={rating.count} />
      </header>

      <p className="text-[15px] leading-relaxed">{place.summary}</p>
      <PlaceAttributes
        fields={view.collection.fields}
        attributes={place.attributes}
        className="rounded-lg border p-3"
      />
      {place.body && (
        <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
          <MarkdownView content={place.body} slug={slug} />
        </div>
      )}

      <DocumentList
        slug={slug}
        collectionId={place.collectionId}
        subjectType="place"
        subjectId={place.id}
        title={t("place_further_reading")}
      />

      {(place.address || place.links.length > 0) && (
        <div className="space-y-2 rounded-lg bg-muted/60 p-3 text-sm">
          {place.address && (
            <a
              className="flex items-center gap-2 hover:underline"
              href={`https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=18/${place.lat}/${place.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="size-4 text-brick" /> {place.address}
            </a>
          )}
          {place.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer nofollow ugc"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink className="size-4" /> {l.label}
            </a>
          ))}
        </div>
      )}

      {onRoutes.length > 0 && (
        <section className="space-y-1.5 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("place_on_routes")}
          </h2>
          <ul className="space-y-1 text-sm">
            {onRoutes.map((r) => (
              <li key={r.id}>
                <Link
                  to="/m/$slug/r/$routeId"
                  params={{ slug, routeId: r.id }}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <RouteIcon className="size-4" />{" "}
                  {localize(r, translateTo).title}
                  <span className="text-xs text-muted-foreground">
                    {t("place_route_stop", { n: r.stop, of: r.of })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!archived && (
        <section className="space-y-2 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("rating_your")}
          </h2>
          {can.rate ? (
            <RatingInput
              value={rating.mine}
              disabled={rate.isPending}
              onChange={(score) => rate.mutate({ placeId, score })}
            />
          ) : (
            <p className="text-sm text-muted-foreground">
              {viewer ? (
                t("rating_not_allowed")
              ) : (
                <Link
                  to="/auth"
                  search={{ next: `/m/${slug}/p/${placeId}` }}
                  className="text-primary underline"
                >
                  {t("rating_sign_in")}
                </Link>
              )}
            </p>
          )}
        </section>
      )}

      {!archived && (
        <section className="flex flex-wrap items-center gap-2 border-t pt-4">
          {can.propose ? (
            <>
              <Button asChild size="sm" variant="outline">
                <Link to="/m/$slug/p/$placeId/edit" params={{ slug, placeId }}>
                  <Pencil />{" "}
                  {can.review ? t("place_edit") : t("place_suggest_edit")}
                </Link>
              </Button>
              <SuggestRemoval placeId={placeId} />
            </>
          ) : !viewer ? (
            <Link
              to="/auth"
              search={{ next: `/m/${slug}/p/${placeId}` }}
              className="text-sm text-primary underline"
            >
              {t("place_sign_in_to_edit")}
            </Link>
          ) : null}
          {myPending.length > 0 && (
            <p className="w-full text-xs text-muted-foreground">
              <Clock className="mr-1 inline size-3" />
              {t("place_you_have_pending", { count: myPending.length })}
            </p>
          )}
        </section>
      )}

      <section className="space-y-2 border-t pt-4">
        <h2 className="font-sans text-sm font-semibold">
          {t("place_history")}
        </h2>
        <ol className="space-y-2 text-xs text-muted-foreground">
          {history.map((h) => (
            <li key={h.id}>
              <span className="font-medium text-foreground">
                {t(`history_${h.kind}`, {
                  name: h.author?.name ?? t("someone"),
                })}
              </span>
              {h.reviewer && h.reviewer.id !== h.author?.id && (
                <> · {t("history_approved_by", { name: h.reviewer.name })}</>
              )}
              {h.reviewedAt && (
                <> · {formatDistanceToNow(h.reviewedAt, { addSuffix: true })}</>
              )}
              {h.note && <div className="italic">“{h.note}”</div>}
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export const Route = createFileRoute("/m/$slug/p/$placeId")({
  loader: async ({ params }) => {
    const data = await loadPlace({ data: params.placeId });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.place.title} · Deep Cities` },
          { name: "description", content: loaderData.place.summary },
        ]
      : [],
  }),
  component: PlacePage,
});
