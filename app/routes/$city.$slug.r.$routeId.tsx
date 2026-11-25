import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  notFound,
  Outlet,
  useMatch,
  useNavigate,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { formatDistanceToNow } from "date-fns";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock,
  Flag,
  MapPin,
  Navigation,
  Pencil,
  Repeat,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { CheckInButton } from "~/components/CheckIn";
import { DocumentList } from "~/components/DocumentList";
import { FollowRouteCard } from "~/components/FollowRouteCard";
import { MarkdownView } from "~/components/MarkdownView";
import { Gallery } from "~/components/PhotoGallery";
import {
  legLines,
  ModeIcon,
  routeBounds,
  STOP_COLOR,
  stopPins,
} from "~/components/RouteParts";
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
import { useAppMode } from "~/lib/app-mode";
import {
  localizeRoute,
  routeHasUntranslated,
  untranslated,
} from "~/lib/content-lang";
import { distanceMeters } from "~/lib/diff";
import { isAt, useWakeLock } from "~/lib/geolocation";
import { type MapOverlay, useMapOverlay, useMapPage } from "~/lib/map-page";
import { formatDistance, formatDuration, legStats } from "~/lib/routes";
import { useViewer } from "~/lib/use-viewer";
import { cn } from "~/lib/utils";
import { draftOfRoute } from "~/lib/validation";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadRoute = createServerFn({ method: "GET" })
  .validator((routeId: string) => routeId)
  .handler(async ({ data: routeId }) => {
    const caller = await createCaller();
    try {
      return await caller.route.byId({ routeId });
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });

const SuggestRouteRemoval = ({ routeId }: { routeId: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { view } = useMapPage();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const submit = useMutation(
    trpc.proposal.createRoute.mutationOptions({
      onSuccess: async (res) => {
        await queryClient.invalidateQueries();
        setOpen(false);
        toast.success(
          res.status === "approved"
            ? t("route_removed")
            : t("form_sent_for_review"),
        );
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const label = view.can.review
    ? t("route_remove")
    : t("route_suggest_removal");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Flag /> {label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("route_removal_title")}</DialogTitle>
          <DialogDescription>{t("route_removal_desc")}</DialogDescription>
        </DialogHeader>
        <Textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder={t("place_removal_placeholder")}
          aria-label={t("route_removal_title")}
        />
        <DialogFooter>
          <Button
            variant="destructive"
            disabled={reason.trim().length < 5 || submit.isPending}
            onClick={() =>
              submit.mutate({ kind: "archive", routeId, note: reason.trim() })
            }
          >
            {label}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const RoutePage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const viewer = useViewer();
  const mode = useAppMode();
  const { city, slug, routeId } = Route.useParams();
  const initial = Route.useLoaderData();
  const { places, focusOn, setTab, translateTo, geo, setFollowing, showMap } =
    useMapPage();
  const editing = useMatch({
    from: "/$city/$slug/r/$routeId/edit",
    shouldThrow: false,
  });
  const { data } = useQuery({
    ...trpc.route.byId.queryOptions({ routeId }),
    initialData: initial,
  });
  const { stats, can, history, myPending } = data;
  const placeById = useMemo(
    () => new Map(places.map((p) => [p.id, p])),
    [places],
  );
  // Place stops show the place's (localized) current name.
  const route = useMemo(() => {
    const r = localizeRoute(draftOfRoute(data.route), translateTo);
    return {
      ...data.route,
      ...r,
      stops: r.stops.map((s) => {
        const p = s.placeId ? placeById.get(s.placeId) : undefined;
        return p ? { ...s, name: p.title } : s;
      }),
    };
  }, [data.route, translateTo, placeById]);
  const partlyUntranslated =
    translateTo !== null &&
    routeHasUntranslated(draftOfRoute(data.route), translateTo);
  // The selected stop or leg is in the URL (`?stop=2`), so links share it.
  const {
    stop: selectedStop = null,
    leg: selectedLeg = null,
    go = null,
  } = Route.useSearch();
  const navigate = useNavigate();
  const select = useCallback(
    (sel: { stop?: number; leg?: number }) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          stop: sel.stop,
          leg: sel.leg,
        }),
        replace: true,
        resetScroll: false,
      }),
    [navigate],
  );

  // Following the route on the ground (`?go=n`: heading for stop n).
  const going = go !== null && go < route.stops.length;
  const setGo = useCallback(
    (next: number | null) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          go: next ?? undefined,
          stop: undefined,
          leg: undefined,
        }),
        replace: true,
        resetScroll: false,
      }),
    [navigate],
  );
  const [reached, setReached] = useState<ReadonlySet<number>>(new Set());
  /** The stop you last arrived at; walking on from it heads for the next. */
  const arrivedAt = useRef<number | null>(null);
  const headFor = useCallback(
    (i: number) => {
      arrivedAt.current = null;
      setGo(i);
    },
    [setGo],
  );
  const startFollowing = () => {
    // Start anywhere: at the stop nearest to you, if we know where you are.
    const fix = geo.fix;
    const nearest = fix
      ? route.stops.reduce(
          (best, s, i) =>
            distanceMeters(fix, s) < distanceMeters(fix, route.stops[best] ?? s)
              ? i
              : best,
          0,
        )
      : 0;
    if (geo.status !== "on") geo.start();
    setReached(new Set());
    headFor(nearest);
    setFollowing(true);
    showMap();
  };
  const endFollowing = useCallback(() => {
    setGo(null);
    setFollowing(false);
  }, [setGo, setFollowing]);
  const target = going ? route.stops[go] : undefined;
  const arrived = Boolean(geo.fix && target && isAt(geo.fix, target));
  useWakeLock(going);
  // Arriving ticks the stop off; walking on from it heads for the next.
  useEffect(() => {
    if (!going || !geo.fix || !target) return;
    if (arrived) {
      arrivedAt.current = go;
      setReached((r) => (r.has(go) ? r : new Set(r).add(go)));
    } else if (
      arrivedAt.current === go &&
      go < route.stops.length - 1 &&
      distanceMeters(geo.fix, target) > 60
    ) {
      headFor(go + 1);
    }
  }, [going, go, geo.fix, target, arrived, route.stops.length, headFor]);
  const activeStop = going ? go : selectedStop;
  const activeLeg = going ? (go > 0 ? go - 1 : null) : selectedLeg;

  // Coming back from a route lands on the Routes tab.
  useEffect(() => setTab("routes"), [setTab]);

  const bounds = useMemo(
    () => routeBounds(route.stops, route.legs),
    [route.stops, route.legs],
  );

  const selectStop = useCallback(
    (i: number) => {
      if (going) {
        // While following, tapping a stop heads for it instead.
        headFor(i);
        return;
      }
      select({ stop: i });
      const s = route.stops[i];
      if (s) focusOn({ lat: s.lat, lng: s.lng });
      document
        .getElementById(`stop-${i}`)
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    },
    [route.stops, focusOn, select, going, headFor],
  );

  // Opened with `?stop=n`: show that stop (once, on arrival).
  const arrivedStop = useRef(activeStop);
  useEffect(() => {
    const i = arrivedStop.current;
    const s = i === null ? undefined : route.stops[i];
    if (i === null || !s) return;
    focusOn({ lat: s.lat, lng: s.lng });
    document.getElementById(`stop-${i}`)?.scrollIntoView({ block: "center" });
  }, [route.stops, focusOn]);

  const overlay = useMemo<MapOverlay | null>(
    () =>
      editing
        ? null
        : {
            lines: legLines(route.id, route.legs, { activeLeg }),
            pins: stopPins(route.stops, { activeStop, onClick: selectStop }),
            fitTo: going ? null : bounds,
            dimPlaces: true,
            hidePlaceIds: route.stops.flatMap((s) =>
              s.placeId ? [s.placeId] : [],
            ),
            card: going ? (
              <FollowRouteCard
                city={city}
                slug={slug}
                stops={route.stops}
                target={go}
                reached={reached}
                mode={route.mode}
                fix={geo.fix}
                geoStatus={geo.status}
                arrived={arrived}
                onTarget={(i) => {
                  headFor(i);
                  setFollowing(true);
                }}
                onEnd={endFollowing}
                extra={
                  target?.placeId ? (
                    <CheckInButton
                      placeId={target.placeId}
                      placeTitle={target.name}
                      lat={target.lat}
                      lng={target.lng}
                      routeId={route.id}
                      className="flex-1"
                      variant={arrived ? "default" : "outline"}
                    />
                  ) : undefined
                }
              />
            ) : undefined,
          },
    [
      editing,
      route,
      activeStop,
      activeLeg,
      bounds,
      selectStop,
      going,
      go,
      reached,
      geo.fix,
      geo.status,
      arrived,
      city,
      slug,
      headFor,
      setFollowing,
      endFollowing,
      target,
    ],
  );
  useMapOverlay(overlay);

  if (editing) return <Outlet />;
  const archived = route.status === "archived";
  const exploring = mode === "explore";

  return (
    <article className="space-y-5 p-5">
      <BackLink
        fallback={
          <Link
            to="/$city/$slug"
            params={{ city, slug }}
            search={{ tab: "routes" }}
            className={BACK_LINK_CLASS}
          >
            <ArrowLeft className="size-4" /> {t("route_back")}
          </Link>
        }
      />

      {archived && (
        <div className="rounded-md border border-warning bg-warning/10 p-3 text-sm">
          {t("route_archived")}
        </div>
      )}

      {partlyUntranslated && (
        <UntranslatedNote
          partly={untranslated(data.route, translateTo, ["title"]).length === 0}
          edit={{
            to: "/$city/$slug/r/$routeId/edit",
            params: { city, slug, routeId },
          }}
        />
      )}

      <Gallery
        photoIds={route.photoIds}
        photos={data.photos}
        title={route.title}
      />

      <header className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase">
          <span className="flex items-center gap-1">
            <ModeIcon mode={route.mode} className="size-3.5" />
            {t(`mode_${route.mode}`)}
          </span>
          {route.loop && (
            <>
              ·
              <span className="flex items-center gap-1">
                <Repeat className="size-3.5" />
                {t("route_loop")}
              </span>
            </>
          )}
          ·
          {t("routes_stats", {
            stops: stats.stops,
            distance: formatDistance(stats.meters),
            duration: formatDuration(stats.minutes),
          })}
        </div>
        <h1 className="text-2xl leading-tight font-semibold">{route.title}</h1>
      </header>

      {!archived && route.stops.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {going ? (
            <>
              <Button size="sm" onClick={showMap} className="md:hidden">
                <Navigation /> {t("follow_show")}
              </Button>
              <Button size="sm" variant="outline" onClick={endFollowing}>
                {t("follow_end")}
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={startFollowing}>
              <Navigation /> {t("follow_start")}
            </Button>
          )}
          <p className="w-full text-xs text-muted-foreground">
            {going ? t("follow_tap_stop") : t("follow_start_hint")}
          </p>
        </div>
      )}

      <p className="text-[15px] leading-relaxed">{route.summary}</p>
      {route.body && (
        <div className="space-y-3 text-sm leading-relaxed text-foreground/85">
          <MarkdownView content={route.body} slug={slug} />
        </div>
      )}

      <ol className="space-y-0">
        {route.stops.map((s, i) => {
          const leg = route.legs[i];
          const onMap = s.placeId !== null && placeById.has(s.placeId);
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: stops are positional; the same place may appear twice
            <li key={`${i}-${s.name}`} id={`stop-${i}`}>
              <div
                className={cn(
                  "flex gap-3 rounded-lg p-2 transition",
                  activeStop === i && "bg-accent/60",
                )}
              >
                <button
                  type="button"
                  onClick={() => selectStop(i)}
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white shadow",
                    s.placeId === null &&
                      "border-dashed border-foreground bg-white text-foreground",
                  )}
                  style={
                    s.placeId === null ? undefined : { background: STOP_COLOR }
                  }
                  aria-label={t("route_show_stop", { n: i + 1 })}
                >
                  {reached.has(i) ? <Check className="size-4" /> : i + 1}
                </button>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="font-semibold">
                    {onMap && s.placeId ? (
                      <Link
                        to="/$city/$slug/p/$placeId"
                        params={{ city, slug, placeId: s.placeId }}
                        className="group inline-flex items-baseline gap-0.5 underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
                      >
                        {s.name}
                        <ChevronRight className="size-4 shrink-0 self-center text-muted-foreground transition group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      s.name
                    )}
                  </div>
                  {s.placeId !== null && !onMap && (
                    <p className="text-xs text-muted-foreground">
                      {t("route_stop_removed")}
                    </p>
                  )}
                  {s.narration && (
                    <div className="space-y-2 text-sm leading-relaxed text-foreground/85">
                      <MarkdownView content={s.narration} slug={slug} />
                    </div>
                  )}
                  {onMap && s.placeId && (
                    <Link
                      to="/$city/$slug/p/$placeId"
                      params={{ city, slug, placeId: s.placeId }}
                      className="inline-flex items-center gap-0.5 text-sm font-medium text-brick hover:underline"
                    >
                      {t("route_stop_more")}
                      <ChevronRight className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
              {leg && (
                <button
                  type="button"
                  onClick={() => {
                    select({ leg: i });
                  }}
                  className={cn(
                    "ml-5 flex w-[calc(100%-1.25rem)] gap-3 border-l-2 border-dashed py-3 pl-5 text-left text-sm transition",
                    activeLeg === i
                      ? "border-brick"
                      : "border-muted-foreground/30",
                  )}
                >
                  <ModeIcon mode={leg.mode} className="mt-0.5" />
                  <span className="min-w-0 flex-1 space-y-1">
                    <span className="block text-xs text-muted-foreground">
                      {t(`mode_${leg.mode}`)} ·{" "}
                      {formatDistance(legStats(leg).meters)} ·{" "}
                      {formatDuration(legStats(leg).minutes)}
                    </span>
                    {leg.directions && (
                      <span className="block whitespace-pre-line text-foreground/85">
                        {leg.directions}
                      </span>
                    )}
                  </span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
      <p className="text-xs text-muted-foreground">
        <MapPin className="mr-1 inline size-3" />
        {t("route_time_note")}
      </p>

      {!exploring && !archived && (
        <section className="flex flex-wrap items-center gap-2 border-t pt-4">
          {can.propose ? (
            <>
              <Button asChild size="sm" variant="outline">
                <Link
                  to="/$city/$slug/r/$routeId/edit"
                  params={{ city, slug, routeId }}
                >
                  <Pencil />{" "}
                  {can.review ? t("route_edit") : t("route_suggest_edit")}
                </Link>
              </Button>
              <SuggestRouteRemoval routeId={routeId} />
            </>
          ) : !viewer ? (
            <Link
              to="/auth"
              search={{ next: `/${city}/${slug}/r/${routeId}` }}
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

      <DocumentList
        slug={slug}
        collectionId={route.collectionId}
        subjectType="route"
        subjectId={route.id}
        title={t("place_further_reading")}
        className="border-t pt-4"
      />

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
                    {t(`history_route_${h.kind}`, {
                      name: h.author?.name ?? t("someone"),
                    })}
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

export const Route = createFileRoute("/$city/$slug/r/$routeId")({
  loader: async ({ params }) => {
    const data = await loadRoute({ data: params.routeId });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.route.title} · Deep Cities` },
          { name: "description", content: loaderData.route.summary },
        ]
      : [],
  }),
  component: RoutePage,
});
