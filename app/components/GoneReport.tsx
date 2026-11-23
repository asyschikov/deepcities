import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { SearchX, TriangleAlert } from "lucide-react";
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

/** "Gone or can't find it?": report it, or take your report back. */
export const ReportGone = ({
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
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const { data } = useQuery(trpc.gone.forPlace.queryOptions({ placeId }));
  const refresh = () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: trpc.gone.pathKey() }),
      queryClient.invalidateQueries({ queryKey: trpc.place.list.queryKey() }),
    ]);
  const report = useMutation(
    trpc.gone.report.mutationOptions({
      onSuccess: async () => {
        setOpen(false);
        setNote("");
        toast.success(t("gone_reported"));
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

  if (data?.mine) {
    return (
      <p className="text-xs text-muted-foreground">
        {t("gone_you_reported", {
          when: formatDistanceToNow(data.mine, { addSuffix: true }),
        })}{" "}
        <button
          type="button"
          className="font-medium text-primary hover:underline"
          disabled={withdraw.isPending}
          onClick={() => withdraw.mutate({ placeId })}
        >
          {t("gone_withdraw")}
        </button>
      </p>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground hover:underline"
      >
        <SearchX className="size-3.5" /> {t("gone_ask")}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("gone_title", { name: placeTitle })}</DialogTitle>
            <DialogDescription>{t("gone_desc")}</DialogDescription>
          </DialogHeader>
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t("gone_placeholder")}
            aria-label={t("gone_note")}
            maxLength={500}
          />
          <DialogFooter>
            <Button
              disabled={report.isPending}
              onClick={() => {
                const fix = geo.fix;
                report.mutate({
                  placeId,
                  note: note.trim() || null,
                  position:
                    fix && Date.now() - fix.at < 2 * 60_000
                      ? { lat: fix.lat, lng: fix.lng, accuracy: fix.accuracy }
                      : null,
                });
              }}
            >
              <SearchX /> {t("gone_report")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
