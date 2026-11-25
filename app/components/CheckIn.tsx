import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useRouterState } from "@tanstack/react-router";
import { format, formatDistanceToNow } from "date-fns";
import type { TFunction } from "i18next";
import {
  Camera,
  CircleCheck,
  ImagePlus,
  Loader2,
  LocateFixed,
  Lock,
  MapPinCheck,
  UserRound,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { QuickReport } from "~/components/GoneReport";
import { PublicPrompt } from "~/components/Score";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { VerdictPicker } from "~/components/Verdict";
import {
  type CheckinPhotoKind,
  type Verdict,
  VISIT_REACH_M,
} from "~/lib/constants";
import { distanceMeters } from "~/lib/diff";
import type { GeoFix } from "~/lib/geolocation";
import { useMapPage } from "~/lib/map-page";
import { onTheSpot } from "~/lib/reach";
import { type ResizedImage, resizeImage } from "~/lib/resize-image";
import { useViewer } from "~/lib/use-viewer";
import { checkinPhotoUrl, cn } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** A position fresh enough to say where you were when checking in. */
const FRESH_MS = 2 * 60_000;

/** A fix taken recently enough to count. */
const freshFix = (fix: GeoFix | null): GeoFix | null =>
  fix && Date.now() - fix.at < FRESH_MS ? fix : null;

/**
 * Whether you can check in at a point right now: "here" (on the spot),
 * "far" (with how far), or "unknown" (no recent position).
 */
const reachOf = (
  fix: GeoFix | null,
  point: { lat: number; lng: number },
):
  | { state: "here"; fix: GeoFix }
  | { state: "far"; meters: number }
  | { state: "unknown" } => {
  const f = freshFix(fix);
  if (!f) return { state: "unknown" };
  if (onTheSpot(f, point)) return { state: "here", fix: f };
  return { state: "far", meters: Math.round(distanceMeters(f, point)) };
};

/** "+12 points", when a thing earned any. */
const toastPoints = (t: TFunction, points: number) => {
  if (points > 0) toast.success(t("score_earned", { count: points }));
};

type Offered = "approved" | "pending" | "full" | null;

/** Refresh everything that shows visits, verdicts or place photos. */
const useRefreshVisits = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: trpc.checkin.pathKey() }),
      queryClient.invalidateQueries({ queryKey: trpc.place.pathKey() }),
    ]);
};

/** Upload resized photos to a check-in, telling the visitor what happened. */
const useAddPhotos = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const add = useMutation(trpc.checkin.addPhoto.mutationOptions());
  return async (
    checkinId: string,
    photos: {
      kind: CheckinPhotoKind;
      img: ResizedImage;
      isPrivate?: boolean;
    }[],
  ): Promise<number> => {
    const offered: Offered[] = [];
    let points = 0;
    for (const { kind, img, isPrivate } of photos) {
      try {
        const res = await add.mutateAsync({
          checkinId,
          kind,
          base64: img.base64,
          contentType: img.contentType,
          width: img.width,
          height: img.height,
          isPrivate: isPrivate ?? false,
        });
        offered.push(res.offered);
        points += res.points;
      } catch (err) {
        toast.error(
          err instanceof Error ? err.message : t("visit_photo_failed"),
        );
      }
    }
    if (offered.includes("approved")) toast.success(t("visit_photo_added"));
    else if (offered.includes("pending"))
      toast.success(t("visit_photo_review"));
    else if (offered.includes("full")) toast.message(t("visit_photo_full"));
    return points;
  };
};

/** "Make private" for a selfie: off by default. */
const PrivateToggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  const { t } = useTranslation();
  return (
    <label className="flex items-center gap-1.5 text-xs">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-3.5 accent-primary"
      />
      <Lock className="size-3 text-muted-foreground" />
      {t("visit_selfie_private")}
    </label>
  );
};

/** Pick (or take) one photo; shows it once picked. */
const PhotoSlot = ({
  kind,
  value,
  onChange,
}: {
  kind: CheckinPhotoKind;
  value: ResizedImage | null;
  onChange: (img: ResizedImage | null) => void;
}) => {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const Icon = kind === "selfie" ? UserRound : Camera;
  return (
    <div className="space-y-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-dashed bg-muted/40">
        {value ? (
          <>
            <img
              src={value.previewUrl}
              alt=""
              className="size-full object-cover"
            />
            <button
              type="button"
              onClick={() => onChange(null)}
              aria-label={t("visit_photo_remove")}
              className="absolute top-1 right-1 rounded-full bg-black/60 p-1 text-white"
            >
              <X className="size-3.5" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => input.current?.click()}
            className="flex size-full flex-col items-center justify-center gap-1 p-2 text-center text-xs text-muted-foreground hover:bg-muted"
          >
            {busy ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <Icon className="size-5" />
            )}
            {t(`visit_photo_${kind}`)}
          </button>
        )}
      </div>
      <p className="text-[11px] leading-snug text-muted-foreground">
        {t(`visit_photo_${kind}_hint`)}
      </p>
      <input
        ref={input}
        type="file"
        accept="image/*"
        capture={kind === "selfie" ? "user" : "environment"}
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          setBusy(true);
          try {
            onChange(await resizeImage(file));
          } catch {
            toast.error(t("photos_upload_failed", { name: file.name }));
          } finally {
            setBusy(false);
          }
        }}
      />
    </div>
  );
};

/** Where you are relative to the place, and how to get to a check-in. */
const ReachNote = ({
  reach,
  onLocate,
  locating,
}: {
  reach: ReturnType<typeof reachOf>;
  onLocate: () => void;
  locating: boolean;
}) => {
  const { t } = useTranslation();
  if (reach.state === "here") return null;
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border border-dashed p-2.5 text-sm text-muted-foreground">
      <span className="min-w-0 flex-1">
        {reach.state === "far"
          ? t("visit_too_far", {
              meters: reach.meters,
              reach: VISIT_REACH_M,
            })
          : t("visit_need_location", { reach: VISIT_REACH_M })}
      </span>
      {reach.state === "unknown" && (
        <Button size="sm" variant="outline" onClick={onLocate}>
          {locating ? <Loader2 className="animate-spin" /> : <LocateFixed />}
          {t("visit_locate")}
        </Button>
      )}
    </div>
  );
};

/**
 * Check in to a place: "I was here", on the spot only, with an optional
 * verdict and photos (one of the place, offered to the place, and a
 * selfie, kept with your visit). Earns explorer points.
 */
export const CheckInDialog = ({
  placeId,
  placeTitle,
  lat,
  lng,
  routeId,
  verdict: currentVerdict,
  open,
  onOpenChange,
}: {
  placeId: string;
  placeTitle: string;
  lat: number;
  lng: number;
  routeId?: string;
  verdict: Verdict | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { geo } = useMapPage();
  const refresh = useRefreshVisits();
  const addPhotos = useAddPhotos();
  const [verdict, setVerdict] = useState<Verdict | null>(currentVerdict);
  const [selfie, setSelfie] = useState<ResizedImage | null>(null);
  const [selfiePrivate, setSelfiePrivate] = useState(false);
  const [shot, setShot] = useState<ResizedImage | null>(null);
  const [saving, setSaving] = useState(false);
  const [askPublic, setAskPublic] = useState(false);
  const create = useMutation(trpc.checkin.create.mutationOptions());
  const reach = reachOf(geo.fix, { lat, lng });

  const submit = async () => {
    if (reach.state !== "here") return;
    setSaving(true);
    try {
      const { fix } = reach;
      const res = await create.mutateAsync({
        placeId,
        routeId: routeId ?? null,
        verdict,
        position: { lat: fix.lat, lng: fix.lng, accuracy: fix.accuracy },
      });
      toast.success(t("visit_checked_in", { name: placeTitle }));
      onOpenChange(false);
      const photoPoints = await addPhotos(res.id, [
        ...(shot ? [{ kind: "place" as const, img: shot }] : []),
        ...(selfie
          ? [{ kind: "selfie" as const, img: selfie, isPrivate: selfiePrivate }]
          : []),
      ]);
      toastPoints(t, res.points + photoPoints);
      setSelfie(null);
      setShot(null);
      setSelfiePrivate(false);
      if (res.askPublic) setAskPublic(true);
      await refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : String(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(o) => {
          if (o) {
            setVerdict(currentVerdict);
            if (geo.status === "off") geo.start();
          }
          onOpenChange(o);
        }}
      >
        <DialogContent className="max-h-[90dvh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {t("visit_check_in_title", { name: placeTitle })}
            </DialogTitle>
            <DialogDescription>{t("visit_check_in_desc")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <ReachNote
              reach={reach}
              onLocate={geo.start}
              locating={geo.status === "locating"}
            />
            <div className="space-y-1.5">
              <div className="text-sm font-medium">{t("verdict_question")}</div>
              <VerdictPicker value={verdict} onChange={setVerdict} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <PhotoSlot kind="place" value={shot} onChange={setShot} />
              <div className="space-y-1.5">
                <PhotoSlot kind="selfie" value={selfie} onChange={setSelfie} />
                <PrivateToggle
                  checked={selfiePrivate}
                  onChange={setSelfiePrivate}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={submit}
              disabled={saving || reach.state !== "here"}
              className="w-full sm:w-auto"
            >
              {saving ? <Loader2 className="animate-spin" /> : <MapPinCheck />}
              {t("visit_check_in")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <PublicPrompt open={askPublic} onOpenChange={setAskPublic} />
    </>
  );
};

/** A button that opens the check-in dialog (for cards and lists). */
export const CheckInButton = ({
  placeId,
  placeTitle,
  lat,
  lng,
  routeId,
  size = "sm",
  variant = "default",
  className,
  label,
}: {
  placeId: string;
  placeTitle: string;
  lat: number;
  lng: number;
  routeId?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline";
  className?: string;
  label?: string;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const viewer = useViewer();
  const [open, setOpen] = useState(false);
  const { data } = useQuery({
    ...trpc.checkin.forPlace.queryOptions({ placeId }),
    enabled: viewer !== null,
  });
  if (!viewer) return null;
  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        <MapPinCheck /> {label ?? t("visit_check_in")}
      </Button>
      <CheckInDialog
        placeId={placeId}
        placeTitle={placeTitle}
        lat={lat}
        lng={lng}
        routeId={routeId}
        verdict={data?.verdict ?? null}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};

/** Add a photo to an existing check-in, any time later. */
const AddVisitPhoto = ({
  checkinId,
  kind,
  isPrivate = false,
}: {
  checkinId: string;
  kind: CheckinPhotoKind;
  isPrivate?: boolean;
}) => {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);
  const addPhotos = useAddPhotos();
  const refresh = useRefreshVisits();
  const [busy, setBusy] = useState(false);
  const Icon = kind === "selfie" ? UserRound : ImagePlus;
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        disabled={busy}
        onClick={() => input.current?.click()}
      >
        {busy ? <Loader2 className="animate-spin" /> : <Icon />}
        {t(`visit_add_${kind}`)}
      </Button>
      <input
        ref={input}
        type="file"
        accept="image/*"
        capture={kind === "selfie" ? "user" : "environment"}
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          setBusy(true);
          try {
            const points = await addPhotos(checkinId, [
              { kind, img: await resizeImage(file), isPrivate },
            ]);
            toastPoints(t, points);
            await refresh();
          } catch {
            toast.error(t("photos_upload_failed", { name: file.name }));
          } finally {
            setBusy(false);
          }
        }}
      />
    </>
  );
};

/** Your own photos from visits, with what became of each. */
export const VisitPhotos = ({
  photos,
  className,
}: {
  photos: {
    id: string;
    kind: CheckinPhotoKind;
    offered: boolean;
    isPrivate?: boolean;
  }[];
  className?: string;
}) => {
  const { t } = useTranslation();
  if (photos.length === 0) return null;
  const titleOf = (p: (typeof photos)[number]) =>
    p.offered
      ? t("visit_photo_offered")
      : p.isPrivate
        ? t("visit_photo_private")
        : t("visit_photo_kept");
  return (
    <div className={cn("grid grid-cols-3 gap-1.5", className)}>
      {photos.map((p) => (
        <a
          key={p.id}
          href={checkinPhotoUrl(p.id)}
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-square overflow-hidden rounded-md bg-muted"
          title={titleOf(p)}
        >
          <img
            src={checkinPhotoUrl(p.id)}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
          {p.kind === "selfie" && (
            <span className="absolute bottom-1 left-1 flex gap-0.5">
              <UserRound className="size-4 rounded-full bg-black/50 p-0.5 text-white" />
              {p.isPrivate && (
                <Lock className="size-4 rounded-full bg-black/50 p-0.5 text-white" />
              )}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

/**
 * The place page's "your visits": check in (on the spot), your verdict,
 * your photos, and quick corrections for the moderators.
 */
export const VisitPanel = ({
  placeId,
  placeTitle,
  lat,
  lng,
  canVisit,
  markedGone = false,
  className,
}: {
  placeId: string;
  placeTitle: string;
  lat: number;
  lng: number;
  canVisit: boolean;
  /** A moderator already marked it gone: no need to report it. */
  markedGone?: boolean;
  className?: string;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const viewer = useViewer();
  const { geo } = useMapPage();
  const href = useRouterState({ select: (s) => s.location.href });
  const refresh = useRefreshVisits();
  const [open, setOpen] = useState(false);
  const [selfiePrivate, setSelfiePrivate] = useState(false);
  const { data } = useQuery({
    ...trpc.checkin.forPlace.queryOptions({ placeId }),
    enabled: viewer !== null,
  });
  const setVerdict = useMutation(
    trpc.checkin.setVerdict.mutationOptions({
      onSuccess: async (res) => {
        toastPoints(t, res.points);
        await refresh();
      },
      onError: (err) => toast.error(err.message),
    }),
  );

  if (!viewer) {
    return (
      <section className={cn("space-y-2 rounded-lg border p-3", className)}>
        <Link
          to="/auth"
          search={{ next: href }}
          className="text-sm text-primary underline"
        >
          {t("visit_sign_in")}
        </Link>
      </section>
    );
  }
  if (!canVisit) return null;

  const visits = data?.visits ?? [];
  const latest = visits[0];
  const here = reachOf(geo.fix, { lat, lng }).state === "here";
  const photos = visits.flatMap((v) => v.photos);

  return (
    <section className={cn("space-y-3 rounded-lg border p-3", className)}>
      <div className="flex flex-wrap items-center gap-2">
        {latest ? (
          <div className="flex min-w-0 flex-1 items-center gap-1.5 text-sm">
            <CircleCheck className="size-4 shrink-0 text-[#15803d]" />
            <span className="font-medium">{t("visit_visited")}</span>
            <span
              className="truncate text-muted-foreground"
              title={format(latest.createdAt, "PPp")}
            >
              ·{" "}
              {visits.length > 1
                ? t("visit_times", {
                    count: visits.length,
                    when: formatDistanceToNow(latest.createdAt, {
                      addSuffix: true,
                    }),
                  })
                : formatDistanceToNow(latest.createdAt, { addSuffix: true })}
            </span>
          </div>
        ) : (
          <p className="min-w-0 flex-1 text-sm text-muted-foreground">
            {here
              ? t("visit_you_are_here")
              : t("visit_check_in_there", { reach: VISIT_REACH_M })}
          </p>
        )}
        <Button
          size="sm"
          variant={here ? "default" : "outline"}
          onClick={() => setOpen(true)}
        >
          <MapPinCheck />
          {latest ? t("visit_check_in_again") : t("visit_check_in")}
        </Button>
      </div>

      {latest && (
        <>
          <div className="space-y-1.5">
            <div className="text-xs font-medium text-muted-foreground">
              {t("verdict_yours")}
            </div>
            <VerdictPicker
              value={data?.verdict ?? null}
              disabled={setVerdict.isPending}
              onChange={(verdict) => setVerdict.mutate({ placeId, verdict })}
            />
          </div>
          <VisitPhotos photos={photos} />
          <div className="flex flex-wrap items-center gap-2">
            <AddVisitPhoto checkinId={latest.id} kind="place" />
            <AddVisitPhoto
              checkinId={latest.id}
              kind="selfie"
              isPrivate={selfiePrivate}
            />
            <PrivateToggle
              checked={selfiePrivate}
              onChange={setSelfiePrivate}
            />
          </div>
          <p className="text-[11px] text-muted-foreground">
            {t("visit_private_note")}
          </p>
        </>
      )}

      {!markedGone && (
        <div className="border-t pt-2">
          <QuickReport placeId={placeId} placeTitle={placeTitle} />
        </div>
      )}

      <CheckInDialog
        placeId={placeId}
        placeTitle={placeTitle}
        lat={lat}
        lng={lng}
        verdict={data?.verdict ?? null}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  );
};
