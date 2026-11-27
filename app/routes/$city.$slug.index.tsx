import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  FilePlus,
  Inbox,
  Navigation,
  Plus,
  Search,
  Settings,
  TriangleAlert,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
import { categoryIcon } from "~/lib/category-icons";
import { distanceMeters } from "~/lib/diff";
import { filterFields, isDefaultSelection } from "~/lib/field-filters";
import { useSettledFix } from "~/lib/geolocation";
import { useMapPage } from "~/lib/map-page";
import { useSearchFlag } from "~/lib/map-search";
import { formatDistance } from "~/lib/routes";
import { canonicalLink } from "~/lib/seo";
import { useViewer } from "~/lib/use-viewer";
import { cn, photoUrl } from "~/lib/utils";

/** A filter chip, on or off. */
const filterChip = (active: boolean) =>
  cn(
    "rounded-full border px-2.5 py-1 text-xs transition",
    active
      ? "border-foreground bg-foreground text-background"
      : "hover:bg-muted",
  );

/** List rows in the server-rendered page; the rest render in the browser. */
const FIRST_PAINT_ROWS = 40;

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
    clearFilters,
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
  // Anything narrowing the list: the search, a category or a field filter.
  const [noPhoto, setNoPhoto] = useSearchFlag("nophoto");
  // Filters below the categories that narrow the list (a map's default
  // choice doesn't count), for the folded toggle's label.
  const moreActive =
    filterFields(view.collection.fields).filter((f) => {
      const selected = fieldFilters[f.key] ?? [];
      return selected.length > 0 && !isDefaultSelection(f, selected);
    }).length + (noPhoto ? 1 : 0);
  const [filtersOpen, setFiltersOpen] = useSearchFlag("filters");
  const filtered =
    search.trim() !== "" ||
    category !== null ||
    noPhoto ||
    Object.values(fieldFilters).some((v) => v.length > 0);
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
  // The server renders only the top of the list (the full one is over a
  // megabyte of HTML); the rest follows once the page is running. Crawlers
  // find every place through the area lists and the sitemap instead.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const rows = hydrated ? listed : listed.slice(0, FIRST_PAINT_ROWS);
  // Leaving the list (e.g. opening a place) ends any hover highlight.
  useEffect(() => () => setHoverPlaceId(null), [setHoverPlaceId]);
  const { collection, can, role } = view;
  // Suggestions to review, plus places visitors reported gone.
  const pendingCount = view.pendingCount + view.goneCount;
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
          <div className="text-base leading-relaxed">
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
              className="text-sm font-medium text-primary hover:underline"
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
            {(can.manage || (collection.view?.list && can.propose)) && (
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
                className="pr-8 pl-8"
                aria-label={t("map_search")}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label={t("map_search_clear")}
                  className="absolute top-1/2 right-1.5 grid size-6 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
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
                    <CategorySwatch
                      categoryKey={c.key}
                      color={c.color}
                      withIcon
                    />
                    {c.label}
                  </button>
                );
              })}
            </div>
            {/* On a phone, the filters below the categories fold away
                behind a toggle that says how many of them are on. */}
            <button
              type="button"
              aria-expanded={filtersOpen}
              aria-controls="more-filters"
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground md:hidden"
            >
              <ChevronDown
                className={cn(
                  "size-3.5 transition",
                  filtersOpen && "rotate-180",
                )}
              />
              {filtersOpen
                ? t("map_filters_less")
                : moreActive > 0
                  ? t("map_filters_more_active", { count: moreActive })
                  : t("map_filters_more")}
            </button>
            <div
              id="more-filters"
              className={cn("space-y-3", !filtersOpen && "max-md:hidden")}
            >
              {filterFields(collection.fields).map((f) => {
                const selected = fieldFilters[f.key] ?? [];
                const byDefault = isDefaultSelection(f, selected);
                const chip = filterChip;
                return (
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
                    <button
                      type="button"
                      aria-pressed={selected.length === 0}
                      onClick={() => setFieldFilter(f.key, [])}
                      className={chip(selected.length === 0)}
                    >
                      {t("map_filter_all")}
                    </button>
                    {(f.options ?? []).map((o) => {
                      const active = selected.includes(o);
                      return (
                        <button
                          key={o}
                          type="button"
                          aria-pressed={active}
                          onClick={() =>
                            setFieldFilter(
                              f.key,
                              active
                                ? selected.filter((v) => v !== o)
                                : [...selected, o],
                            )
                          }
                          className={chip(active)}
                        >
                          {f.optionLabels?.[o] ?? o}
                        </button>
                      );
                    })}
                    {byDefault && (
                      <span className="text-xs text-muted-foreground">
                        {t("map_filter_default")}
                      </span>
                    )}
                  </fieldset>
                );
              })}
              <fieldset className="flex flex-wrap items-center gap-1.5">
                <legend className="sr-only">{t("map_filter_photo")}</legend>
                <span
                  aria-hidden
                  className="mr-1 text-xs text-muted-foreground"
                >
                  {t("map_filter_photo")}
                </span>
                <button
                  type="button"
                  aria-pressed={!noPhoto}
                  onClick={() => setNoPhoto(false)}
                  className={filterChip(!noPhoto)}
                >
                  {t("map_filter_all")}
                </button>
                <button
                  type="button"
                  aria-pressed={noPhoto}
                  onClick={() => setNoPhoto(true)}
                  className={filterChip(noPhoto)}
                >
                  {t("map_filter_no_photo")}
                </button>
              </fieldset>
            </div>
            {(filtered || near) && (
              <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                <span>
                  {visiblePlaces.length < places.length &&
                    t("map_filter_showing", {
                      shown: visiblePlaces.length,
                      total: places.length,
                    })}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    clearFilters();
                    setNear(false);
                  }}
                  className="inline-flex shrink-0 items-center gap-1 font-medium text-foreground hover:underline"
                >
                  <X className="size-3" />
                  {t("map_filter_clear")}
                </button>
              </div>
            )}
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
            {rows.map(({ p, meters }) => {
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
                          src={photoUrl(p.coverPhotoId, "thumb")}
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
                          {p.goneReports > 0 && (
                            <TriangleAlert
                              className="size-4 shrink-0 text-warning"
                              aria-label={t("gone_notice", {
                                count: p.goneReports,
                              })}
                            />
                          )}
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
  head: ({ params }) => ({
    links: canonicalLink(`/${params.city}/${params.slug}`),
  }),
  component: MapIndex,
});

/** A category's legend mark: a dot, or with `?icons=true` its icon on a disc. */
const CategorySwatch = ({
  categoryKey,
  color,
  withIcon,
}: {
  categoryKey: string;
  color: string;
  withIcon: boolean;
}) => {
  const Icon = withIcon ? categoryIcon(categoryKey) : undefined;
  if (!Icon) {
    return (
      <span className="size-2 rounded-full" style={{ background: color }} />
    );
  }
  return (
    <span
      className="flex size-4 items-center justify-center rounded-full"
      style={{ background: color }}
    >
      <Icon className="size-2.5" color="white" strokeWidth={2.5} aria-hidden />
    </span>
  );
};
