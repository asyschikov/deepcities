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
  ArrowDown,
  ArrowLeft,
  Clock,
  ExternalLink,
  Flag,
  MapPin,
  Navigation,
  Pencil,
  Route as RouteIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { VisitPanel } from "~/components/CheckIn";
import { DocumentList } from "~/components/DocumentList";
import { GoneNotice } from "~/components/GoneReport";
import { MarkdownView } from "~/components/MarkdownView";
import { Gallery } from "~/components/PhotoGallery";
import { PlaceAttributes } from "~/components/PlaceAttributes";
import { LicenseLink } from "~/components/SiteFooter";
import { UntranslatedNote } from "~/components/UntranslatedNote";
import { UserAvatar } from "~/components/UserAvatar";
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
import { VerdictSummary } from "~/components/Verdict";
import { useAppMode } from "~/lib/app-mode";
import { placeParam } from "~/lib/cities";
import { localize, localizePlace, untranslated } from "~/lib/content-lang";
import { distanceMeters } from "~/lib/diff";
import { extraDescription } from "~/lib/fields";
import { isMarkedGone } from "~/lib/gone";
import { useMapPage } from "~/lib/map-page";
import { formatDistance } from "~/lib/routes";
import { canonicalLink, seoMeta } from "~/lib/seo";
import { useViewer } from "~/lib/use-viewer";
import { cn } from "~/lib/utils";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadPlace = createServerFn({ method: "GET" })
  .validator((p: { placeId: string; map: string }) => p)
  .handler(async ({ data }) => {
    const caller = await createCaller();
    try {
      return await caller.place.byId(data);
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
  const viewer = useViewer();
  const mode = useAppMode();
  const { city, slug, placeId } = Route.useParams();
  const initial = Route.useLoaderData();
  const { view, categoryOf, focusOn, translateTo, geo } = useMapPage();
  const editing = useMatch({
    from: "/$city/$slug/p/$placeId/edit",
    shouldThrow: false,
  });

  const { data } = useQuery({
    ...trpc.place.byId.queryOptions({ placeId, map: slug }),
    initialData: initial,
  });
  const { can, verdicts, history, myPending } = data;
  const parent = data.parent && localize(data.parent, translateTo);
  const children = data.children.map((c) => localize(c, translateTo));
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
  const exploring = mode === "explore";
  const away = geo.fix ? distanceMeters(geo.fix, place) : null;
  const markedGone = isMarkedGone(place.attributes, view.collection.fields);
  const extra = extraDescription(view.collection.fields, place.attributes);
  const visit = !archived && (
    <VisitPanel
      placeId={placeId}
      placeTitle={place.title}
      lat={place.lat}
      lng={place.lng}
      canVisit={can.visit}
      markedGone={markedGone}
    />
  );

  return (
    <article className="space-y-5 p-5">
      <BackLink
        fallback={
          <Link
            to="/$city/$slug"
            params={{ city, slug }}
            search={{ tab: undefined }}
            className={BACK_LINK_CLASS}
          >
            <ArrowLeft className="size-4" /> {t("place_back")}
          </Link>
        }
      />

      {archived && (
        <div className="rounded-md border border-warning bg-warning/10 p-3 text-sm">
          {t("place_archived")}
        </div>
      )}

      {missing.length > 0 && (
        <UntranslatedNote
          partly={missing.length < 3 && !missing.includes("title")}
          edit={{
            to: "/$city/$slug/p/$placeId/edit",
            params: { city, slug, placeId },
          }}
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
        {parent && (
          <p className="text-sm text-muted-foreground">
            {t("place_part_of")}{" "}
            {parent.link ? (
              <Link
                to="/$city/$slug/p/$placeId"
                params={{
                  city: parent.link.city,
                  slug: parent.link.slug,
                  placeId: parent.id,
                }}
                className="text-primary hover:underline"
              >
                {parent.title}
              </Link>
            ) : (
              parent.title
            )}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <VerdictSummary counts={verdicts} />
          {away !== null && (
            <span className="text-xs text-[#2563eb]">
              {t("place_away", { distance: formatDistance(away) })}
            </span>
          )}
        </div>
      </header>

      {!markedGone && !archived && <GoneNotice placeId={placeId} />}

      {exploring && visit}

      <p className="text-[15px] leading-relaxed">{place.summary}</p>
      <PlaceAttributes
        fields={view.collection.fields}
        attributes={place.attributes}
        className="rounded-lg border p-3"
      />
      {/* A theme map's own text comes first: it's why the place is on this
          map. The place's general description follows, one tap away. */}
      {extra && (
        <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
          {place.body && (
            <button
              type="button"
              className="flex items-center gap-1 text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              onClick={() =>
                document
                  .getElementById("place-about")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <ArrowDown className="size-3" aria-hidden />
              {t("place_about_jump")}
            </button>
          )}
          <MarkdownView content={extra} slug={slug} className="text-[15px]" />
        </div>
      )}
      {place.body && (
        <section
          id="place-about"
          className={cn(
            "space-y-3 text-sm leading-relaxed text-foreground/85",
            extra && "scroll-mt-4 border-t pt-3",
          )}
        >
          {extra && (
            <h2 className="font-sans text-sm font-semibold text-foreground">
              {t("place_about")}
            </h2>
          )}
          <MarkdownView
            content={place.body}
            slug={slug}
            className="text-[15px]"
          />
        </section>
      )}

      {children.length > 0 && (
        <section className="space-y-2 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("place_parts", { count: children.length })}
          </h2>
          <ul className="space-y-2 text-sm">
            {children.map((c) => (
              <li key={c.id}>
                {c.link ? (
                  <Link
                    to="/$city/$slug/p/$placeId"
                    params={{
                      city: c.link.city,
                      slug: c.link.slug,
                      placeId: c.id,
                    }}
                    className="font-medium text-primary hover:underline"
                  >
                    {c.title}
                  </Link>
                ) : (
                  <span className="font-medium">{c.title}</span>
                )}
                <p className="text-muted-foreground">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <DocumentList
        slug={slug}
        collectionId={view.collection.id}
        subjectType="place"
        subjectId={place.id}
        title={t("place_further_reading")}
      />

      <div className="space-y-2 rounded-lg bg-muted/60 p-3 text-sm">
        <a
          className="flex items-center gap-2 text-primary hover:underline"
          href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&travelmode=walking`}
          target="_blank"
          rel="noreferrer"
        >
          <Navigation className="size-4" /> {t("place_directions")}
        </a>
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
        <p className="text-[11px] text-muted-foreground">
          {t("place_license")} <LicenseLink />
        </p>
      </div>

      {onRoutes.length > 0 && (
        <section className="space-y-1.5 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("place_on_routes")}
          </h2>
          <ul className="space-y-1 text-sm">
            {onRoutes.map((r) => (
              <li key={r.id}>
                <Link
                  to="/$city/$slug/r/$routeId"
                  params={{ city, slug, routeId: r.id }}
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

      {!exploring && visit && (
        <section className="space-y-2 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("visit_yours")}
          </h2>
          {visit}
        </section>
      )}

      {exploring && !archived && can.propose && (
        <p className="border-t pt-4 text-xs text-muted-foreground">
          <Link
            to="/$city/$slug/p/$placeId/edit"
            params={{ city, slug, placeId }}
            className="hover:underline"
          >
            {t("place_explore_wrong")}
          </Link>
        </p>
      )}

      {!exploring && !archived && (
        <section className="flex flex-wrap items-center gap-2 border-t pt-4">
          {can.propose ? (
            <>
              <Button asChild size="sm" variant="outline">
                <Link
                  to="/$city/$slug/p/$placeId/edit"
                  params={{ city, slug, placeId }}
                >
                  <Pencil />{" "}
                  {can.review ? t("place_edit") : t("place_suggest_edit")}
                </Link>
              </Button>
              <SuggestRemoval placeId={placeId} />
            </>
          ) : !viewer ? (
            <Link
              to="/auth"
              search={{ next: `/${city}/${slug}/p/${placeId}` }}
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

      {!exploring && (
        <section className="space-y-2 border-t pt-4">
          <h2 className="font-sans text-sm font-semibold">
            {t("place_history")}
          </h2>
          <ol className="space-y-2 text-xs text-muted-foreground">
            {history.map((h) => (
              <li key={h.id} className="flex gap-2">
                <UserAvatar
                  name={h.author?.name ?? "?"}
                  avatarId={h.author?.avatarId}
                  className="mt-0.5 size-5 text-[10px]"
                />
                <div>
                  <span className="font-medium text-foreground">
                    {t(
                      h.subject === "override"
                        ? "history_override"
                        : h.subject === "membership"
                          ? `history_membership_${h.kind}`
                          : `history_${h.kind}`,
                      {
                        name: h.author?.name ?? t("someone"),
                      },
                    )}
                  </span>
                  {h.reviewer && h.reviewer.id !== h.author?.id && (
                    <>
                      {" "}
                      · {t("history_approved_by", { name: h.reviewer.name })}
                    </>
                  )}
                  {h.reviewedAt && (
                    <>
                      {" "}
                      · {formatDistanceToNow(h.reviewedAt, { addSuffix: true })}
                    </>
                  )}
                  {h.note && <div className="italic">“{h.note}”</div>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
};

export const Route = createFileRoute("/$city/$slug/p/$placeId")({
  loader: async ({ params }) => {
    const data = await loadPlace({
      data: { placeId: params.placeId, map: params.slug },
    });
    if (!data) throw notFound();
    return data;
  },
  // The place's own page is its canonical URL; this panel is the map view.
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { place, home } = loaderData;
    const path = `/${home.city}/p/${placeParam(place)}`;
    return {
      meta: seoMeta({
        title: `${place.title} · ${home.title}`,
        description: place.summary,
        path,
        photoId: place.photoIds[0],
        type: "article",
      }),
      links: canonicalLink(path),
    };
  },
  component: PlacePage,
});
