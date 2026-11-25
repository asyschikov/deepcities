import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import {
  CircleCheck,
  DoorClosed,
  MapPinOff,
  RefreshCw,
  Search,
  SearchX,
  TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Textarea } from "~/components/ui/textarea";
import { REPORT_KINDS, type ReportKind } from "~/lib/constants";
import { useMapPage } from "~/lib/map-page";
import { useTRPC } from "~/trpc/client";

/** Visitors say it's gone or they couldn't find it (until a moderator acts). */
export const GoneNotice = ({ placeId }: { placeId: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.gone.forPlace.queryOptions({ placeId }));
  if (!data || data.count === 0) return null;
  return (
    <p className="flex items-start gap-2 rounded-md border border-warning bg-warning/10 p-2.5 text-sm">
      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warning" />
      <span>
        {t("gone_notice", { count: data.count })}
        {data.latest && (
          <span className="text-muted-foreground">
            {" "}
            · {formatDistanceToNow(data.latest, { addSuffix: true })}
          </span>
        )}
      </span>
    </p>
  );
};

const KIND_ICONS: Record<ReportKind, typeof SearchX> = {
  there: CircleCheck,
  gone: SearchX,
  not_found: Search,
  wrong_location: MapPinOff,
  closed: DoorClosed,
  changed: RefreshCw,
};

/**
 * Quick corrections from a visitor: it's there, it's gone, couldn't find
 * it, the pin is off, closed or no access, or it has changed. Each goes to
 * the map's moderators; one report per person (a new one replaces it).
 */
export const QuickReport = ({
  placeId,
  placeTitle,
}: {
  placeId: string;
  placeTitle: string;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { geo } = useMapPage();
  const [kind, setKind] = useState<ReportKind | null>(null);
  const [note, setNote] = useState("");
  const { data } = useQuery(trpc.gone.forPlace.queryOptions({ placeId }));
  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: trpc.gone.pathKey() }),
      queryClient.invalidateQueries({ queryKey: trpc.place.list.queryKey() }),
      queryClient.invalidateQueries({ queryKey: trpc.score.pathKey() }),
    ]);
  const report = useMutation(
    trpc.gone.report.mutationOptions({
      onSuccess: async (res) => {
        setKind(null);
        setNote("");
        toast.success(t("gone_reported"));
        if (res.points > 0)
          toast.success(t("score_earned", { count: res.points }));
        await refresh();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const withdraw = useMutation(
    trpc.gone.withdraw.mutationOptions({
      onSuccess: refresh,
      onError: (err) => toast.error(err.message),
    }),
  );

  if (data?.mine && data.mineKind) {
    return (
      <p className="text-xs text-muted-foreground">
        {t("report_you_said", {
          what: t(`report_${data.mineKind}`),
          when: formatDistanceToNow(data.mine, { addSuffix: true }),
        })}{" "}
        <button
          type="button"
          className="font-medium text-primary hover:underline"
          disabled={withdraw.isPending}
          onClick={() => withdraw.mutate({ placeId })}
        >
          {t("report_take_back")}
        </button>
      </p>
    );
  }

  return (
    <div className="space-y-1.5">
      <div className="text-xs font-medium text-muted-foreground">
        {t("report_ask")}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {REPORT_KINDS.map((k) => {
          const Icon = KIND_ICONS[k];
          return (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs hover:bg-muted"
            >
              <Icon className="size-3.5" /> {t(`report_${k}`)}
            </button>
          );
        })}
      </div>
      <Dialog open={kind !== null} onOpenChange={(o) => !o && setKind(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {kind && t(`report_${kind}`)}: {placeTitle}
            </DialogTitle>
            <DialogDescription>{t("report_desc")}</DialogDescription>
          </DialogHeader>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={kind ? t(`report_${kind}_placeholder`) : ""}
            aria-label={t("gone_note")}
            maxLength={500}
          />
          <DialogFooter>
            <Button
              disabled={report.isPending || kind === null}
              onClick={() => {
                if (!kind) return;
                const fix = geo.fix;
                report.mutate({
                  placeId,
                  kind,
                  note: note.trim() || null,
                  position:
                    fix && Date.now() - fix.at < 2 * 60_000
                      ? { lat: fix.lat, lng: fix.lng, accuracy: fix.accuracy }
                      : null,
                });
              }}
            >
              {t("gone_report")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
