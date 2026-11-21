import { createId } from "@paralleldrive/cuid2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowDown,
  ArrowUp,
  Loader2,
  MapPinPlus,
  Search,
  Trash2,
  Waypoints,
} from "lucide-react";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ContentLangTabs, OriginalText } from "~/components/ContentLangTabs";
import type { MapPin } from "~/components/MapView";
import { PhotoUploader } from "~/components/PhotoUploader";
import {
  legLines,
  ModeIcon,
  routeBounds,
  stopPins,
} from "~/components/RouteParts";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import {
  type ContentLang,
  MAX_STOPS_PER_ROUTE,
  MAX_VIA_PER_LEG,
  ROUTE_MODES,
  type RouteMode,
  SNAPPABLE_MODES,
  TRANSPORT_MODES,
  type TransportMode,
} from "~/lib/constants";
import { type MapOverlay, useMapOverlay, useMapPage } from "~/lib/map-page";
import {
  formatDistance,
  formatDuration,
  insertViaIndex,
  legStats,
  stopPoint,
  straightPath,
} from "~/lib/routes";
import { cn } from "~/lib/utils";
import {
  inferRouteLoop,
  type LngLatTuple,
  type RouteDraft,
  type RouteLeg,
  type RouteStop,
  routeDraftSchema,
} from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

interface EditorStop extends RouteStop {
  uid: string;
}

interface EditorLeg extends RouteLeg {
  /** Signature of the inputs `path` was computed from (see `legSig`). */
  pathSig: string;
  error?: string;
}

const legKey = (a: EditorStop, b: EditorStop) => `${a.uid}>${b.uid}`;

const round = ([lng, lat]: LngLatTuple) =>
  `${lng.toFixed(6)},${lat.toFixed(6)}`;

/** What a leg's path depends on; when it changes, the path is recomputed. */
const legSig = (
  from: EditorStop,
  to: EditorStop,
  leg: Pick<RouteLeg, "mode" | "snap" | "via">,
) =>
  [
    leg.snap && SNAPPABLE_MODES.includes(leg.mode) ? leg.mode : "line",
    round(stopPoint(from)),
    ...leg.via.map(round),
    round(stopPoint(to)),
  ].join(";");

const wantsSnap = (leg: Pick<RouteLeg, "mode" | "snap">) =>
  leg.snap && SNAPPABLE_MODES.includes(leg.mode);

const newLeg = (
  from: EditorStop,
  to: EditorStop,
  mode: TransportMode,
): EditorLeg => {
  const leg = {
    mode,
    snap: SNAPPABLE_MODES.includes(mode),
    via: [],
    path: straightPath(stopPoint(from), [], stopPoint(to)),
    directions: "",
    translations: {},
  };
  // A straight line is already right for non-snapped legs.
  return {
    ...leg,
    pathSig: wantsSnap(leg) ? "" : legSig(from, to, leg),
  };
};

const Section = ({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) => (
  <section className="space-y-2">
    <div>
      <h2 className="font-sans text-sm font-semibold">{title}</h2>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
    {children}
  </section>
);

/** Search box listing places on the map to add as the next stop. */
const PlacePicker = ({
  onPick,
  disabled,
}: {
  onPick: (placeId: string) => void;
  disabled: boolean;
}) => {
  const { t } = useTranslation();
  const { places } = useMapPage();
  const [q, setQ] = useState("");
  const matches = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return needle
      ? places.filter((p) => p.title.toLowerCase().includes(needle)).slice(0, 6)
      : [];
  }, [places, q]);
  return (
    <div className="space-y-1">
      <div className="relative">
        <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
        <Input
          value={q}
          disabled={disabled}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("route_form_find_place")}
          aria-label={t("route_form_find_place")}
          className="pl-8"
        />
      </div>
      {matches.length > 0 && (
        <ul className="divide-y rounded-md border text-sm">
          {matches.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className="w-full px-3 py-2 text-left hover:bg-muted"
                onClick={() => {
                  onPick(p.id);
                  setQ("");
                }}
              >
                {p.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const RouteForm = ({
  initial,
  routeId,
  onDone,
}: {
  /** Current route when editing; null for a new route. */
  initial: RouteDraft | null;
  routeId?: string;
  onDone: (res: {
    status: "approved" | "pending";
    routeId: string | null;
  }) => void;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { view, places, focusOn, baseLang, translateTo } = useMapPage();
  const collectionId = view.collection.id;

  // The route's main mode; new legs start with it.
  const [mode, setMode] = useState<RouteMode>(initial?.mode ?? "walk");
  // Loop: follows the stops (last = first) unless set by hand.
  const [loopChoice, setLoopChoice] = useState<boolean | null>(() =>
    initial && initial.loop !== inferRouteLoop(initial.stops)
      ? initial.loop
      : null,
  );
  const [title, setTitle] = useState(initial?.title ?? "");
  const [summary, setSummary] = useState(initial?.summary ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [translations, setTranslations] = useState<RouteDraft["translations"]>(
    initial?.translations ?? {},
  );
  // Start in the language the reader is viewing, so "translate" lands there.
  const [editLang, setEditLang] = useState<ContentLang>(
    translateTo ?? baseLang,
  );
  const translating = editLang !== baseLang;
  const base = { title, summary, body };
  const baseSetters = { title: setTitle, summary: setSummary, body: setBody };
  const textOf = (key: "title" | "summary" | "body") =>
    translating ? (translations[editLang]?.[key] ?? "") : base[key];
  const setText = (key: "title" | "summary" | "body", value: string) =>
    translating
      ? setTranslations((tr) => ({
          ...tr,
          [editLang]: { ...tr[editLang], [key]: value },
        }))
      : baseSetters[key](value);
  const narrationOf = (s: EditorStop) =>
    translating ? (s.translations?.[editLang]?.narration ?? "") : s.narration;
  const directionsOf = (l: EditorLeg) =>
    translating ? (l.translations?.[editLang]?.directions ?? "") : l.directions;
  const [photoIds, setPhotoIds] = useState<string[]>(initial?.photoIds ?? []);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Stops get local ids so legs can follow them through reorders.
  const [stops, setStops] = useState<EditorStop[]>(() =>
    (initial?.stops ?? []).map((s) => ({ ...s, uid: createId() })),
  );
  const [legs, setLegs] = useState<Map<string, EditorLeg>>(() => {
    const m = new Map<string, EditorLeg>();
    stops.slice(1).forEach((to, i) => {
      const from = stops[i];
      const leg = initial?.legs[i];
      if (from && leg)
        m.set(legKey(from, to), { ...leg, pathSig: legSig(from, to, leg) });
    });
    return m;
  });
  const [activeLeg, setActiveLeg] = useState<number | null>(null);
  const [addingPoint, setAddingPoint] = useState(false);

  /** The legs in stop order, creating defaults for new stop pairs. */
  const orderedLegs = useMemo(
    () =>
      stops.slice(1).flatMap((to, i) => {
        const from = stops[i];
        if (!from) return [];
        const existing = legs.get(legKey(from, to));
        return [{ key: legKey(from, to), from, to, leg: existing }];
      }),
    [stops, legs],
  );

  // Create legs for new pairs (inherit the previous leg's mode).
  useEffect(() => {
    const missing = orderedLegs.filter((l) => !l.leg);
    if (missing.length === 0) return;
    setLegs((prev) => {
      const next = new Map(prev);
      for (const m of missing) {
        const prevMode =
          orderedLegs
            .slice(0, orderedLegs.indexOf(m))
            .reverse()
            .find((l) => l.leg)?.leg?.mode ?? mode;
        next.set(m.key, newLeg(m.from, m.to, prevMode));
      }
      return next;
    });
  }, [orderedLegs, mode]);

  const updateLeg = useCallback(
    (key: string, patch: Partial<EditorLeg>) =>
      setLegs((prev) => {
        const cur = prev.get(key);
        if (!cur) return prev;
        return new Map(prev).set(key, { ...cur, ...patch });
      }),
    [],
  );

  // Keep paths in sync: straight lines immediately, street paths via the router.
  const snap = useMutation(trpc.route.snap.mutationOptions());
  const inFlight = useRef(new Set<string>());
  const [snapping, setSnapping] = useState(0);
  useEffect(() => {
    for (const { key, from, to, leg } of orderedLegs) {
      if (!leg) continue;
      const sig = legSig(from, to, leg);
      if (leg.pathSig === sig) continue;
      const points = straightPath(stopPoint(from), leg.via, stopPoint(to));
      if (!wantsSnap(leg)) {
        updateLeg(key, { path: points, pathSig: sig, error: undefined });
        continue;
      }
      const flightKey = `${key}|${sig}`;
      if (inFlight.current.has(flightKey)) continue;
      inFlight.current.add(flightKey);
      setSnapping((n) => n + 1);
      snap
        .mutateAsync({ collectionId, mode: leg.mode, points })
        .then((res) =>
          updateLeg(key, { path: res.path, pathSig: sig, error: undefined }),
        )
        .catch((err: unknown) =>
          // Fall back to straight lines so the route stays usable.
          updateLeg(key, {
            path: points,
            pathSig: sig,
            error: err instanceof Error ? err.message : String(err),
          }),
        )
        .finally(() => {
          inFlight.current.delete(flightKey);
          setSnapping((n) => n - 1);
        });
    }
  }, [orderedLegs, collectionId, snap.mutateAsync, updateLeg]);

  // ─── stop editing ────────────────────────────────────────────────

  const addPlaceStop = useCallback(
    (placeId: string) => {
      const p = places.find((x) => x.id === placeId);
      if (!p) return;
      setStops((prev) =>
        prev.length >= MAX_STOPS_PER_ROUTE ||
        prev[prev.length - 1]?.placeId === placeId
          ? prev
          : [
              ...prev,
              {
                uid: createId(),
                placeId,
                name: p.title,
                lat: p.lat,
                lng: p.lng,
                narration: "",
                translations: {},
              },
            ],
      );
    },
    [places],
  );

  const addPointStop = useCallback(
    (lat: number, lng: number) => {
      setStops((prev) =>
        prev.length >= MAX_STOPS_PER_ROUTE
          ? prev
          : [
              ...prev,
              {
                uid: createId(),
                placeId: null,
                name: t("route_form_point_name", { n: prev.length + 1 }),
                lat,
                lng,
                narration: "",
                translations: {},
              },
            ],
      );
      setAddingPoint(false);
    },
    [t],
  );

  const patchStop = useCallback(
    (i: number, patch: Partial<EditorStop>) =>
      setStops((prev) =>
        prev.map((s, j) => (j === i ? { ...s, ...patch } : s)),
      ),
    [],
  );
  const moveStop = (i: number, by: number) =>
    setStops((prev) => {
      const a = prev[i];
      const b = prev[i + by];
      if (!a || !b) return prev;
      return prev.map((s, k) => (k === i ? b : k === i + by ? a : s));
    });
  const removeStop = (i: number) => {
    setStops((prev) => prev.filter((_, j) => j !== i));
    setActiveLeg(null);
  };

  // ─── waypoints on the selected leg ──────────────────────────────

  const active = activeLeg === null ? undefined : orderedLegs[activeLeg];
  const addVia = useCallback(
    (lat: number, lng: number) => {
      if (!active?.leg || active.leg.via.length >= MAX_VIA_PER_LEG) return;
      const point: LngLatTuple = [lng, lat];
      const at = insertViaIndex(
        stopPoint(active.from),
        active.leg.via,
        stopPoint(active.to),
        point,
      );
      const via = [...active.leg.via];
      via.splice(at, 0, point);
      updateLeg(active.key, { via });
    },
    [active, updateLeg],
  );

  // ─── map overlay ────────────────────────────────────────────────

  const [fitOnce] = useState(() =>
    initial ? routeBounds(initial.stops, initial.legs) : null,
  );
  const overlay = useMemo<MapOverlay>(() => {
    const viaPins: MapPin[] =
      active?.leg?.via.map(([lng, lat], j) => ({
        id: `via:${active.key}:${j}`,
        lat,
        lng,
        kind: "via",
        color: "#c2410c",
        title: t("route_form_via_title"),
        draggable: true,
        onClick: () =>
          updateLeg(active.key, {
            via: active.leg?.via.filter((_, k) => k !== j) ?? [],
          }),
        onDragEnd: (p) =>
          updateLeg(active.key, {
            via:
              active.leg?.via.map(
                (v, k): LngLatTuple => (k === j ? [p.lng, p.lat] : v),
              ) ?? [],
          }),
      })) ?? [];
    return {
      lines: legLines(
        "draft",
        orderedLegs.flatMap((l) => (l.leg ? [l.leg] : [])),
        { activeLeg },
      ),
      pins: [
        ...stopPins(stops, {
          draggableAdhoc: true,
          onDragEnd: (i, p) => patchStop(i, { lat: p.lat, lng: p.lng }),
        }),
        ...viaPins,
      ],
      fitTo: fitOnce,
      hidePlaceIds: stops.flatMap((s) => (s.placeId ? [s.placeId] : [])),
      onPlaceClick: addPlaceStop,
      onMapClick: (p) => {
        if (addingPoint) addPointStop(p.lat, p.lng);
        else if (active) addVia(p.lat, p.lng);
      },
    };
  }, [
    orderedLegs,
    stops,
    active,
    activeLeg,
    addingPoint,
    fitOnce,
    addPlaceStop,
    addPointStop,
    addVia,
    updateLeg,
    patchStop,
    t,
  ]);
  useMapOverlay(overlay);

  // ─── submit ──────────────────────────────────────────────────────

  const submit = useMutation(
    trpc.proposal.createRoute.mutationOptions({
      onSuccess: async (res) => {
        await queryClient.invalidateQueries();
        toast.success(
          res.status === "approved"
            ? t("form_published")
            : t("form_sent_for_review"),
        );
        onDone(res);
      },
      onError: (err) => toast.error(err.message),
    }),
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = routeDraftSchema.safeParse({
      mode,
      loop: loopChoice ?? undefined,
      title,
      summary,
      body,
      translations,
      photoIds,
      stops: stops.map(({ uid: _uid, ...s }) => s),
      legs: orderedLegs.map((l) => {
        const {
          pathSig: _sig,
          error: _err,
          ...leg
        } = l.leg ?? {
          ...newLeg(l.from, l.to, mode),
        };
        return leg;
      }),
    });
    if (!parsed.success) {
      // Errors are about the original texts and the route itself.
      setEditLang(baseLang);
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((i) => [
            String(i.path[0]),
            t(`route_form_error_${String(i.path[0])}`),
          ]),
        ),
      );
      return;
    }
    setErrors({});
    const trimmedNote = note.trim() || null;
    submit.mutate(
      routeId
        ? { kind: "edit", routeId, draft: parsed.data, note: trimmedNote }
        : {
            kind: "create",
            collectionId,
            draft: parsed.data,
            note: trimmedNote,
          },
    );
  };

  const hasAdhoc = stops.some((s) => s.placeId === null);

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <ContentLangTabs value={editLang} onChange={setEditLang} />
      {!translating && (
        <fieldset className="space-y-1.5">
          <legend className="text-sm font-medium">
            {t("route_form_mode")}
          </legend>
          <div className="flex gap-2">
            {ROUTE_MODES.map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                className={cn(
                  "flex min-h-9 items-center gap-1.5 rounded-md border px-3 text-sm transition",
                  mode === m
                    ? "border-foreground bg-foreground text-background"
                    : "hover:bg-muted",
                )}
              >
                <ModeIcon mode={m} className="size-4" />
                {t(`mode_${m}`)}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {t("route_form_mode_help")}
          </p>
          <label className="flex items-start gap-2 pt-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={loopChoice ?? inferRouteLoop(stops)}
              onChange={(e) => setLoopChoice(e.target.checked)}
            />
            <span>
              {t("route_form_loop")}
              <span className="block text-xs text-muted-foreground">
                {t("route_form_loop_help")}
              </span>
            </span>
          </label>
        </fieldset>
      )}
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="route-title">{t("form_title")}</Label>
          {translating && <OriginalText text={title} lang={baseLang} />}
          <Input
            id="route-title"
            lang={editLang}
            value={textOf("title")}
            maxLength={100}
            onChange={(e) => setText("title", e.target.value)}
            placeholder={t("route_form_title_placeholder")}
          />
          {errors.title && (
            <p className="text-xs text-destructive">{errors.title}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="route-summary">{t("form_summary")}</Label>
          {translating && <OriginalText text={summary} lang={baseLang} />}
          <Textarea
            id="route-summary"
            lang={editLang}
            rows={2}
            maxLength={280}
            value={textOf("summary")}
            onChange={(e) => setText("summary", e.target.value)}
          />
          {errors.summary ? (
            <p className="text-xs text-destructive">{errors.summary}</p>
          ) : (
            <p className="text-xs text-muted-foreground">
              {t("form_summary_hint", { n: 280 - textOf("summary").length })}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="route-body">{t("route_form_intro")}</Label>
          {translating && <OriginalText text={body} lang={baseLang} />}
          <Textarea
            id="route-body"
            lang={editLang}
            rows={4}
            value={textOf("body")}
            onChange={(e) => setText("body", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">{t("form_body_hint")}</p>
        </div>
      </div>

      <Section title={t("route_form_stops")} hint={t("route_form_stops_hint")}>
        <ol className="space-y-0">
          {stops.map((s, i) => {
            const entry = orderedLegs[i];
            const leg = entry?.leg;
            return (
              <li key={s.uid}>
                <div className="space-y-2 rounded-lg border bg-card p-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background ${s.placeId === null ? "outline-2 outline-dashed outline-foreground outline-offset-1" : ""}`}
                    >
                      {i + 1}
                    </span>
                    {s.placeId === null ? (
                      <Input
                        value={s.name}
                        maxLength={100}
                        aria-label={t("route_form_point_label")}
                        onChange={(e) => patchStop(i, { name: e.target.value })}
                        className="h-8"
                      />
                    ) : (
                      <button
                        type="button"
                        className="min-w-0 flex-1 truncate text-left text-sm font-medium hover:underline"
                        onClick={() => focusOn({ lat: s.lat, lng: s.lng })}
                      >
                        {s.name}
                      </button>
                    )}
                    <div className="ml-auto flex shrink-0">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        disabled={i === 0}
                        aria-label={t("manage_field_up")}
                        onClick={() => moveStop(i, -1)}
                      >
                        <ArrowUp />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        disabled={i === stops.length - 1}
                        aria-label={t("manage_field_down")}
                        onClick={() => moveStop(i, 1)}
                      >
                        <ArrowDown />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        aria-label={t("route_form_remove_stop")}
                        onClick={() => removeStop(i)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                  {s.placeId === null && (
                    <p className="text-xs text-muted-foreground">
                      {t("route_form_point_hint")}
                    </p>
                  )}
                  {translating && (
                    <OriginalText text={s.narration} lang={baseLang} />
                  )}
                  <Textarea
                    rows={2}
                    lang={editLang}
                    value={narrationOf(s)}
                    placeholder={t("route_form_narration_placeholder")}
                    aria-label={t("route_form_narration")}
                    onChange={(e) =>
                      patchStop(
                        i,
                        translating
                          ? {
                              translations: {
                                ...s.translations,
                                [editLang]: { narration: e.target.value },
                              },
                            }
                          : { narration: e.target.value },
                      )
                    }
                  />
                </div>

                {entry && leg && (
                  <div
                    className={`ml-3 space-y-2 border-l-2 border-dashed py-3 pl-5 ${activeLeg === i ? "border-brick" : "border-muted-foreground/30"}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Select
                        value={leg.mode}
                        onValueChange={(v) => {
                          const mode = v as TransportMode;
                          updateLeg(entry.key, {
                            mode,
                            snap: SNAPPABLE_MODES.includes(mode),
                          });
                        }}
                      >
                        <SelectTrigger
                          className="h-8 w-32"
                          aria-label={t("route_form_mode")}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {TRANSPORT_MODES.map((m) => (
                            <SelectItem key={m} value={m}>
                              <ModeIcon mode={m} />
                              {t(`mode_${m}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {SNAPPABLE_MODES.includes(leg.mode) && (
                        <label className="flex items-center gap-1.5 text-xs">
                          <input
                            type="checkbox"
                            checked={leg.snap}
                            onChange={(e) =>
                              updateLeg(entry.key, { snap: e.target.checked })
                            }
                          />
                          {t("route_form_snap")}
                        </label>
                      )}
                      <Button
                        type="button"
                        size="sm"
                        variant={activeLeg === i ? "default" : "outline"}
                        className="h-8"
                        onClick={() => {
                          setActiveLeg(activeLeg === i ? null : i);
                          setAddingPoint(false);
                        }}
                      >
                        <Waypoints />
                        {activeLeg === i
                          ? t("route_form_path_done")
                          : t("route_form_path_edit")}
                      </Button>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {formatDistance(legStats(leg).meters)} ·{" "}
                        {formatDuration(legStats(leg).minutes)}
                      </span>
                    </div>
                    {activeLeg === i && (
                      <p className="rounded-md bg-accent/60 p-2 text-xs">
                        {t("route_form_path_hint")}
                        {leg.via.length > 0 && (
                          <button
                            type="button"
                            className="ml-1 text-primary underline"
                            onClick={() => updateLeg(entry.key, { via: [] })}
                          >
                            {t("route_form_clear_via", {
                              count: leg.via.length,
                            })}
                          </button>
                        )}
                      </p>
                    )}
                    {leg.error && (
                      <p className="text-xs text-destructive">
                        {t("route_form_snap_failed", { message: leg.error })}
                      </p>
                    )}
                    {translating && (
                      <OriginalText text={leg.directions} lang={baseLang} />
                    )}
                    <Textarea
                      rows={2}
                      lang={editLang}
                      value={directionsOf(leg)}
                      placeholder={t("route_form_directions_placeholder")}
                      aria-label={t("route_form_directions")}
                      onChange={(e) =>
                        updateLeg(
                          entry.key,
                          translating
                            ? {
                                translations: {
                                  ...leg.translations,
                                  [editLang]: { directions: e.target.value },
                                },
                              }
                            : { directions: e.target.value },
                        )
                      }
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        {errors.stops && (
          <p className="text-xs text-destructive">{errors.stops}</p>
        )}

        <PlacePicker
          onPick={addPlaceStop}
          disabled={stops.length >= MAX_STOPS_PER_ROUTE}
        />
        <p className="text-xs text-muted-foreground">
          {t("route_form_click_places")}
        </p>
        <div className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">
          {addingPoint ? (
            <span className="flex items-center gap-2">
              <MapPinPlus className="size-4 text-brick" />
              {t("route_form_point_click")}
              <button
                type="button"
                className="ml-auto text-primary underline"
                onClick={() => setAddingPoint(false)}
              >
                {t("cancel")}
              </button>
            </span>
          ) : (
            <>
              {t("route_form_point_nudge")}{" "}
              <button
                type="button"
                className="text-primary underline"
                onClick={() => {
                  setAddingPoint(true);
                  setActiveLeg(null);
                }}
              >
                {t("route_form_point_add")}
              </button>
            </>
          )}
        </div>
        {hasAdhoc && (
          <p className="text-xs text-muted-foreground">
            {t("route_form_adhoc_note")}
          </p>
        )}
      </Section>

      <div className="space-y-1.5">
        <Label>{t("form_photos")}</Label>
        <PhotoUploader
          collectionId={collectionId}
          value={photoIds}
          onChange={setPhotoIds}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="route-note">{t("form_note")}</Label>
        <Textarea
          id="route-note"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          {view.can.review ? t("form_note_hint_mod") : t("form_note_hint")}
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={submit.isPending || snapping > 0}
      >
        {snapping > 0 && <Loader2 className="animate-spin" />}
        {snapping > 0
          ? t("route_form_snapping")
          : view.can.review
            ? t("form_submit_publish")
            : routeId
              ? t("form_submit_edit")
              : t("route_form_submit_new")}
      </Button>
    </form>
  );
};
