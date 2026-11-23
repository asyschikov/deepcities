import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CircleCheck,
  ClipboardCheck,
  FilePlus,
  Inbox,
  Navigation,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DocumentList } from "~/components/DocumentList";
import { RoleBadge } from "~/components/RoleBadge";
import { RoutesPanel } from "~/components/RoutesPanel";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { VerdictSummary } from "~/components/Verdict";
import { VisitHistory } from "~/components/VisitHistory";
import { useAppMode } from "~/lib/app-mode";
import { distanceMeters } from "~/lib/diff";
import { useSettledFix } from "~/lib/geolocation";
import { useMapPage } from "~/lib/map-page";
import { useSearchFlag } from "~/lib/map-search";
import { formatDistance } from "~/lib/routes";
import { useViewer } from "~/lib/use-viewer";
import { cn, photoUrl } from "~/lib/utils";

const MapIndex = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  const {
    view,
    places,
    visiblePlaces,
    category,
    setCategory,
    fieldFilters,
    setFieldFilter,
    search,
    setSearch,
    categoryOf,
    tab,
    setTab,
    setHoverPlaceId,
    geo,
    visitedIds,
    translateTo,
  } = useMapPage();
  const exploring = useAppMode() === "explore";
  // Near me: nearest first, with how far each place is.
  const [near, setNear] = useSearchFlag("near");
  const here = useSettledFix(geo.fix);
  // biome-ignore lint/correctness/useExhaustiveDependencies: start once when opened with ?near
  useEffect(() => {
    if (near && geo.status === "off") geo.start();
  }, [near]);
  const listed = useMemo(() => {
    if (!here) return visiblePlaces.map((p) => ({ p, meters: null }));
    const withDistance = visiblePlaces.map((p) => ({
      p,
      meters: distanceMeters(here, p),
    }));
    return near
      ? withDistance.sort((a, b) => a.meters - b.meters)
      : withDistance;
  }, [visiblePlaces, here, near]);
  // Leaving the list (e.g. opening a place) ends any hover highlight.
  useEffect(() => () => setHoverPlaceId(null), [setHoverPlaceId]);
  const { collection, can, role, pendingCount } = view;
  const slug = collection.slug;
  const city = collection.citySlug;
  const [aboutOpen, setAboutOpen] = useSearchFlag("about");

  return (
    <div className="flex flex-col">
      <div className="space-y-3 border-b p-4 md:p-5">
        {/* The city and map are named in the header's breadcrumbs. */}
        <h1 className="sr-only">{collection.title}</h1>
        {collection.tagline && (
          <p className="text-lg leading-snug font-medium">
            {collection.tagline}
          </p>
        )}
        {collection.description && (
          <div className="text-sm">
            <p
              className={cn(
                "text-muted-foreground",
                !aboutOpen && "line-clamp-2",
              )}
            >
              {collection.description}
            </p>
            <button
              type="button"
              className="text-xs font-medium text-primary hover:underline"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              {aboutOpen ? t("map_about_less") : t("map_about_more")}
            </button>
          </div>
        )}
        {!exploring && (
          <div className="flex flex-wrap gap-2 pt-1">
            <Button asChild size="sm">
              {viewer ? (
                <Link to="/$city/$slug/new" params={{ city, slug }}>
                  <Plus /> {t("map_suggest_place")}
                </Link>
              ) : (
                <Link to="/auth" search={{ next: `/${city}/${slug}/new` }}>
                  <Plus /> {t("map_suggest_place")}
                </Link>
              )}
            </Button>
            {can.review && (
              <Button asChild size="sm" variant="outline">
                <Link to="/$city/$slug/review" params={{ city, slug }}>
                  <ClipboardCheck /> {t("map_review")}
                  {pendingCount > 0 && (
                    <Badge className="ml-1 h-5 bg-brick px-1.5">
                      {pendingCount}
                    </Badge>
                  )}
                </Link>
              </Button>
            )}
            {viewer && !can.review && (
              <Button asChild size="sm" variant="outline">
                <Link
                  to="/$city/$slug/review"
                  params={{ city, slug }}
                  search={{ tab: "mine" }}
                >
                  <Inbox /> {t("map_my_suggestions")}
                </Link>
              </Button>
            )}
            {can.review && (
              <Button asChild size="sm" variant="ghost">
                <Link to="/$city/$slug/d/new" params={{ city, slug }}>
                  <FilePlus /> {t("map_new_document")}
                </Link>
              </Button>
            )}
            {can.manage && (
              <Button asChild size="sm" variant="ghost">
                <Link to="/$city/$slug/manage" params={{ city, slug }}>
                  <Settings /> {t("map_manage")}
                </Link>
              </Button>
            )}
            {viewer && (
              <span className="flex items-center">
                <RoleBadge role={role} />
              </span>
            )}
          </div>
        )}
      </div>

      <DocumentList
        slug={slug}
        collectionId={collection.id}
        subjectType="collection"
        subjectId={collection.id}
        title={t("map_documents")}
        className="border-b p-4"
      />

      <div className="flex border-b" role="tablist">
        {(viewer
          ? (["places", "routes", "visited"] as const)
          : (["places", "routes"] as const)
        ).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={cn(
              "flex-1 border-b-2 px-4 py-2.5 text-sm font-medium transition",
              tab === key
                ? "border-brick text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t(`map_tab_${key}`)}
          </button>
        ))}
      </div>

      {tab === "routes" ? (
        <RoutesPanel />
      ) : tab === "visited" && viewer ? (
        <VisitHistory collectionId={collection.id} translateTo={translateTo} />
      ) : (
        <>
          <div className="space-y-3 border-b bg-card/95 p-4 backdrop-blur sticky top-0 z-10">
            <div className="relative">
              <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("map_search_placeholder", {
                  count: places.length,
                })}
                className="pl-8"
                aria-label={t("map_search")}
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                aria-pressed={near}
                onClick={() => {
                  if (!near && geo.status !== "on") geo.start();
                  setNear(!near);
                }}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition",
                  near
                    ? "border-[#2563eb] bg-[#2563eb] text-white"
                    : "hover:bg-muted",
                )}
              >
                <Navigation className="size-3" />
                {t("near_me")}
              </button>
              {collection.categories.map((c) => {
                const active = category === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(active ? null : c.key)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition",
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "hover:bg-muted",
                    )}
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ background: c.color }}
                    />
                    {c.label}
                  </button>
                );
              })}
            </div>
            {collection.fields
              .filter((f) => f.filter && f.type === "select" && !f.hidden)
              .map((f) => (
                <fieldset
                  key={f.key}
                  className="flex flex-wrap items-center gap-1.5"
                >
                  <legend className="sr-only">
                    {t("map_filter_by", { field: f.label })}
                  </legend>
                  <span
                    aria-hidden
                    className="mr-1 text-xs text-muted-foreground"
                  >
                    {f.label}
                  </span>
                  {(f.options ?? []).map((o) => {
                    const active = fieldFilters[f.key] === o;
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setFieldFilter(f.key, active ? null : o)}
                        className={cn(
                          "rounded-full border px-2.5 py-1 text-xs transition",
                          active
                            ? "border-foreground bg-foreground text-background"
                            : "hover:bg-muted",
                        )}
                      >
                        {f.optionLabels?.[o] ?? o}
                      </button>
                    );
                  })}
                </fieldset>
              ))}
          </div>

          {near && !here && (
            <p className="border-b p-4 text-sm text-muted-foreground">
              {geo.status === "denied"
                ? t("geo_denied_help")
                : geo.status === "unavailable"
                  ? t("geo_unavailable")
                  : t("near_me_locating")}
            </p>
          )}
          <ul className="divide-y">
            {listed.map(({ p, meters }) => {
              const cat = categoryOf(p.category);
              return (
                <li
                  key={p.id}
                  onMouseEnter={() => setHoverPlaceId(p.id)}
                  onMouseLeave={() => setHoverPlaceId(null)}
                  onFocus={() => setHoverPlaceId(p.id)}
                  onBlur={() => setHoverPlaceId(null)}
                >
                  <Link
                    to="/$city/$slug/p/$placeId"
                    params={{ city, slug, placeId: p.id }}
                    className="flex gap-3 p-4 transition hover:bg-muted/60"
                  >
                    <div
                      className="size-16 shrink-0 overflow-hidden rounded-md"
                      style={{ background: `${cat.color}22` }}
                    >
                      {p.coverPhotoId ? (
                        <img
                          src={photoUrl(p.coverPhotoId)}
                          alt=""
                          loading="lazy"
                          className="size-full object-cover"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center">
                          <span
                            className="size-3 rounded-full"
                            style={{ background: cat.color }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="flex min-w-0 items-center gap-1.5 font-sans text-base font-semibold">
                          <span className="truncate">{p.title}</span>
                          {visitedIds.has(p.id) && (
                            <CircleCheck
                              className="size-4 shrink-0 text-[#15803d]"
                              aria-label={t("visit_visited")}
                            />
                          )}
                        </h3>
                        <VerdictSummary
                          counts={p.verdicts}
                          className="shrink-0"
                        />
                      </div>
                      <div className="flex gap-2 text-xs">
                        <span style={{ color: cat.color }}>{cat.label}</span>
                        {meters !== null && (
                          <span className="text-muted-foreground">
                            {formatDistance(meters)}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {p.summary}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          {visiblePlaces.length === 0 && (
            <p className="p-8 text-center text-sm text-muted-foreground">
              {places.length === 0 ? t("map_empty") : t("map_no_matches")}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export const Route = createFileRoute("/$city/$slug/")({
  component: MapIndex,
});
