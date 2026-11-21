import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardCheck,
  FilePlus,
  Inbox,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AreaPicker } from "~/components/AreaPicker";
import { DocumentList } from "~/components/DocumentList";
import { RatingBadge } from "~/components/RatingStars";
import { RoleBadge } from "~/components/RoleBadge";
import { RoutesPanel } from "~/components/RoutesPanel";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useMapPage } from "~/lib/map-page";
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
  } = useMapPage();
  // Leaving the list (e.g. opening a place) ends any hover highlight.
  useEffect(() => () => setHoverPlaceId(null), [setHoverPlaceId]);
  const { collection, can, role, pendingCount } = view;
  const slug = collection.slug;
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="space-y-3 border-b p-5">
        <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {collection.city}
          {viewer && <RoleBadge role={role} />}
        </div>
        <h1 className="text-3xl leading-tight font-semibold">
          {collection.title}
        </h1>
        {collection.tagline && (
          <p className="text-muted-foreground">{collection.tagline}</p>
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
              onClick={() => setAboutOpen((o) => !o)}
            >
              {aboutOpen ? t("map_about_less") : t("map_about_more")}
            </button>
          </div>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild size="sm">
            {viewer ? (
              <Link to="/m/$slug/new" params={{ slug }}>
                <Plus /> {t("map_suggest_place")}
              </Link>
            ) : (
              <Link to="/auth" search={{ next: `/m/${slug}/new` }}>
                <Plus /> {t("map_suggest_place")}
              </Link>
            )}
          </Button>
          {can.review && (
            <Button asChild size="sm" variant="outline">
              <Link to="/m/$slug/review" params={{ slug }}>
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
                to="/m/$slug/review"
                params={{ slug }}
                search={{ tab: "mine" }}
              >
                <Inbox /> {t("map_my_suggestions")}
              </Link>
            </Button>
          )}
          {can.review && (
            <Button asChild size="sm" variant="ghost">
              <Link to="/m/$slug/d/new" params={{ slug }}>
                <FilePlus /> {t("map_new_document")}
              </Link>
            </Button>
          )}
          {can.manage && (
            <Button asChild size="sm" variant="ghost">
              <Link to="/m/$slug/manage" params={{ slug }}>
                <Settings /> {t("map_manage")}
              </Link>
            </Button>
          )}
        </div>
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
        {(["places", "routes"] as const).map((key) => (
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
      ) : (
        <>
          <div className="sticky top-0 z-10 space-y-3 border-b bg-card/95 p-4 backdrop-blur">
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
            <AreaPicker />
            <div className="flex flex-wrap gap-1.5">
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

          <ul className="divide-y">
            {visiblePlaces.map((p) => {
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
                    to="/m/$slug/p/$placeId"
                    params={{ slug, placeId: p.id }}
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
                        <h3 className="truncate font-sans text-base font-semibold">
                          {p.title}
                        </h3>
                        <RatingBadge
                          avg={p.rating.avg}
                          count={p.rating.count}
                        />
                      </div>
                      <div className="text-xs" style={{ color: cat.color }}>
                        {cat.label}
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

export const Route = createFileRoute("/m/$slug/")({
  component: MapIndex,
});
