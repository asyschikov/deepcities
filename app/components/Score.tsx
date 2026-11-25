import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { formatDistanceToNow } from "date-fns";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { UserAvatar } from "~/components/UserAvatar";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { SCORE_POINTS } from "~/lib/constants";
import { useViewer } from "~/lib/use-viewer";
import { cn } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

const useSetPublic = (onDone?: () => void) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return useMutation(
    trpc.score.setPublic.mutationOptions({
      onSuccess: async () => {
        onDone?.();
        await queryClient.invalidateQueries({
          queryKey: trpc.score.pathKey(),
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );
};

/** Asked once, after your first check-in: show you on the leaderboards? */
export const PublicPrompt = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { t } = useTranslation();
  const setPublic = useSetPublic(() => onOpenChange(false));
  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        // Closing without choosing counts as "not now" (asked once).
        if (!o && !setPublic.isPending) setPublic.mutate({ isPublic: false });
        onOpenChange(o);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("score_public_title")}</DialogTitle>
          <DialogDescription>{t("score_public_desc")}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            disabled={setPublic.isPending}
            onClick={() => setPublic.mutate({ isPublic: false })}
          >
            {t("score_public_no")}
          </Button>
          <Button
            disabled={setPublic.isPending}
            onClick={() => setPublic.mutate({ isPublic: true })}
          >
            <Trophy /> {t("score_public_yes")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

/** Your total, small, for the header (links to your profile). */
export const PointsBadge = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const viewer = useViewer();
  const { data } = useQuery({
    ...trpc.score.mine.queryOptions(),
    enabled: viewer !== null,
  });
  if (!viewer || !data) return null;
  return (
    <Link
      to="/me"
      hash="points"
      title={t("score_points", { count: data.total })}
      className={cn(
        "flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium tabular-nums",
        className,
      )}
    >
      <Trophy className="size-3.5 text-brick" />
      {data.total}
    </Link>
  );
};

/** Profile: your points, by city, what earned them, and going public. */
export const MyPoints = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.score.mine.queryOptions());
  const setPublic = useSetPublic();
  if (!data) return null;
  return (
    <section id="points" className="max-w-md space-y-4">
      <div>
        <h2 className="text-lg font-semibold">{t("score_title")}</h2>
        <p className="mt-1 flex items-center gap-2 text-3xl font-semibold tabular-nums">
          <Trophy className="size-7 text-brick" />
          {t("score_points", { count: data.total })}
        </p>
      </div>
      {data.byCity.length > 1 && (
        <ul className="text-sm">
          {data.byCity.map((c) => (
            <li key={c.city} className="flex justify-between">
              <span>{c.city}</span>
              <span className="tabular-nums">{c.points}</span>
            </li>
          ))}
        </ul>
      )}
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-0.5 size-4 accent-primary"
          checked={data.isPublic}
          disabled={setPublic.isPending}
          onChange={(e) => setPublic.mutate({ isPublic: e.target.checked })}
        />
        <span>
          {t("score_public_toggle")}
          <span className="block text-xs text-muted-foreground">
            {t("score_public_hint")}
          </span>
        </span>
      </label>
      {data.recent.length > 0 && (
        <ul className="divide-y rounded-lg border text-sm">
          {data.recent.map((e) => (
            <li key={e.id} className="flex items-baseline gap-2 px-3 py-2">
              <span className="min-w-0 flex-1">
                {t(`score_kind_${e.kind}`)}
                {e.placeTitle && (
                  <span className="text-muted-foreground">
                    {" "}
                    · {e.placeTitle}
                  </span>
                )}
                <span className="block text-xs text-muted-foreground">
                  {formatDistanceToNow(e.createdAt, { addSuffix: true })}
                </span>
              </span>
              <span className="font-medium tabular-nums">+{e.points}</span>
            </li>
          ))}
        </ul>
      )}
      <details className="text-xs text-muted-foreground">
        <summary className="cursor-pointer">{t("score_how")}</summary>
        <ul className="mt-2 space-y-0.5">
          {Object.entries(SCORE_POINTS).map(([kind, points]) => (
            <li key={kind} className="flex justify-between">
              <span>{t(`score_rule_${kind}`)}</span>
              <span className="tabular-nums">{points}</span>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
};

/** A city's top explorers (public profiles only). */
export const Leaderboard = ({ city }: { city: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.score.leaderboard.queryOptions({ city }));
  if (!data || data.length === 0) return null;
  return (
    <section className="mx-auto max-w-5xl px-4 pb-12">
      <h2 className="mb-1 text-2xl font-semibold">
        {t("score_leaderboard", { city })}
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        {t("score_leaderboard_hint")}
      </p>
      <ol className="max-w-md divide-y rounded-lg border">
        {data.map((r) => (
          <li
            key={r.profileId}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm",
              r.isYou && "bg-brick/5 font-medium",
            )}
          >
            <span className="w-6 text-right text-muted-foreground tabular-nums">
              {r.rank}
            </span>
            <UserAvatar name={r.name} avatarId={r.avatarId} />
            <span className="min-w-0 flex-1 truncate">{r.name}</span>
            <span className="tabular-nums">{r.points}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
