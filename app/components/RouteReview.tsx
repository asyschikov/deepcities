import { Repeat, Route as RouteIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MapView } from "~/components/MapView";
import {
  legLines,
  ModeIcon,
  routeBounds,
  stopPins,
} from "~/components/RouteParts";
import { Button } from "~/components/ui/button";
import { languageName } from "~/lib/content-lang";
import {
  diffRoutes,
  formatDistance,
  formatDuration,
  routeStats,
} from "~/lib/routes";
import { photoUrl } from "~/lib/utils";
import type { RouteDraft } from "~/lib/validation";

const RouteMap = ({
  draft,
  before,
}: {
  draft: RouteDraft;
  before?: RouteDraft;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <RouteIcon /> {t("review_show_route")}
      </Button>
    );
  const first = draft.stops[0];
  return (
    <div className="h-72 overflow-hidden rounded-md border">
      <MapView
        center={{ lat: first?.lat ?? 0, lng: first?.lng ?? 0 }}
        zoom={14}
        markers={[]}
        lines={[
          ...(before
            ? legLines("before", before.legs).map((l) => ({
                ...l,
                color: "#a8a29e",
                dashed: true,
              }))
            : []),
          ...legLines("after", draft.legs),
        ]}
        pins={stopPins(draft.stops)}
        fitTo={routeBounds(draft.stops, [
          ...draft.legs,
          ...(before?.legs ?? []),
        ])}
      />
    </div>
  );
};

/** A new route as the reviewer sees it. */
const RoutePreview = ({ draft }: { draft: RouteDraft }) => {
  const { t } = useTranslation();
  const stats = routeStats(draft);
  return (
    <div className="space-y-2 text-sm">
      <div className="font-semibold">{draft.title}</div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <ModeIcon mode={draft.mode} className="size-3.5" />
        {draft.loop && <Repeat className="size-3.5" />}
        {t("routes_stats", {
          stops: stats.stops,
          distance: formatDistance(stats.meters),
          duration: formatDuration(stats.minutes),
        })}
      </div>
      <p>{draft.summary}</p>
      {draft.body && (
        <p className="whitespace-pre-line text-muted-foreground">
          {draft.body}
        </p>
      )}
      <ol className="space-y-1.5">
        {draft.stops.map((s, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: stops are positional; the same place may appear twice
          <li key={`${i}-${s.name}`}>
            <span className="font-medium">
              {i + 1}. {s.name}
            </span>
            {s.placeId === null && (
              <span className="ml-1 text-xs text-warning">
                ({t("route_custom_point")})
              </span>
            )}
            {s.narration && (
              <p className="line-clamp-3 text-xs text-muted-foreground">
                {s.narration}
              </p>
            )}
            {draft.legs[i] && (
              <p className="flex items-center gap-1 pl-3 text-xs text-muted-foreground">
                <ModeIcon mode={draft.legs[i].mode} className="size-3" />
                {draft.legs[i].directions || t(`mode_${draft.legs[i].mode}`)}
              </p>
            )}
          </li>
        ))}
      </ol>
      {draft.photoIds.length > 0 && (
        <div className="flex gap-1.5">
          {draft.photoIds.map((id) => (
            <img
              key={id}
              src={photoUrl(id)}
              alt=""
              className="size-16 rounded object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RouteDiff = ({
  before,
  after,
}: {
  before: RouteDraft;
  after: RouteDraft;
}) => {
  const { t } = useTranslation();
  const changes = diffRoutes(before, after);
  if (changes.length === 0)
    return (
      <p className="text-sm text-muted-foreground">{t("review_no_changes")}</p>
    );
  return (
    <dl className="space-y-3 text-sm">
      {changes.map((c) => (
        <div key={c.lang ? `${c.lang}:${c.field}` : c.field}>
          <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t(`route_field_${c.field}`)}
            {c.lang && ` · ${languageName(c.lang)}`}
          </dt>
          {c.field === "path" ? (
            <dd className="mt-1">
              {t("review_route_path_changed", {
                before: c.before,
                after: c.after,
              })}
            </dd>
          ) : (
            <dd className="mt-1 space-y-1">
              {c.before && (
                <div className="rounded bg-destructive/10 px-2 py-1 whitespace-pre-line line-through decoration-destructive/40">
                  {c.before}
                </div>
              )}
              <div className="rounded bg-success/10 px-2 py-1 whitespace-pre-line">
                {c.after || "—"}
              </div>
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
};

/** Body of a route proposal card in the moderation queue. */
export const RouteProposalBody = ({
  kind,
  draft,
  current,
}: {
  kind: "create" | "edit" | "archive";
  draft: RouteDraft | null;
  current: RouteDraft | null;
}) => {
  const { t } = useTranslation();
  return (
    <>
      {kind === "create" && draft && <RoutePreview draft={draft} />}
      {kind === "edit" && draft && current && (
        <RouteDiff before={current} after={draft} />
      )}
      {kind === "archive" && current && (
        <p className="text-sm">
          {t("review_route_archive_explainer", { title: current.title })}
        </p>
      )}
      {(draft ?? current) && (
        <RouteMap
          draft={draft ?? (current as RouteDraft)}
          before={kind === "edit" ? (current ?? undefined) : undefined}
        />
      )}
    </>
  );
};
