import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format, isSameDay } from "date-fns";
import { MapPinCheck, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { VisitPhotos } from "~/components/CheckIn";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { VerdictTag } from "~/components/Verdict";
import type { ContentLang } from "~/lib/constants";
import { localize } from "~/lib/content-lang";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/**
 * Your check-ins, newest first and grouped by day: on one map (its
 * Visited tab) or everywhere (your profile). Only you see these.
 */
export const VisitHistory = ({
  collectionId,
  translateTo = null,
  showMap = false,
}: {
  collectionId?: string;
  translateTo?: ContentLang | null;
  /** Name the map of each visit (when listing every map). */
  showMap?: boolean;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: visits, isPending } = useQuery(
    trpc.checkin.mine.queryOptions({ collectionId: collectionId ?? null }),
  );
  const remove = useMutation(
    trpc.checkin.delete.mutationOptions({
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: trpc.checkin.pathKey() }),
      onError: (err) => toast.error(err.message),
    }),
  );

  if (isPending) return null;
  if (!visits || visits.length === 0) {
    return (
      <div className="space-y-2 p-8 text-center text-sm text-muted-foreground">
        <MapPinCheck className="mx-auto size-6" />
        <p>{t("visits_empty")}</p>
      </div>
    );
  }

  const places = new Set(visits.map((v) => v.place.id)).size;
  return (
    <div>
      <p className="border-b px-4 py-3 text-sm text-muted-foreground">
        {t("visits_checkins", { count: visits.length })} ·{" "}
        {t("visits_places", { count: places })}
      </p>
      <ol className="divide-y">
        {visits.map((v, i) => {
          const prev = visits[i - 1];
          const newDay = !prev || !isSameDay(prev.createdAt, v.createdAt);
          const title = localize(
            { title: v.place.title, translations: v.place.translations },
            translateTo,
          ).title;
          return (
            <li key={v.id}>
              {newDay && (
                <div className="bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  {format(v.createdAt, "EEEE d MMMM yyyy")}
                </div>
              )}
              <div className="flex gap-3 p-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-md bg-muted">
                  {v.place.coverPhotoId && (
                    <img
                      src={photoUrl(v.place.coverPhotoId)}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    {v.place.archived ? (
                      <span className="truncate font-semibold">{title}</span>
                    ) : (
                      <Link
                        to="/$city/$slug/p/$placeId"
                        params={{
                          city: v.map.citySlug,
                          slug: v.map.slug,
                          placeId: v.place.id,
                        }}
                        className="truncate font-semibold hover:underline"
                      >
                        {title}
                      </Link>
                    )}
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {format(v.createdAt, "HH:mm")}
                    </span>
                  </div>
                  {showMap && (
                    <div className="text-xs text-muted-foreground">
                      {v.map.title}
                    </div>
                  )}
                  {v.verdict && <VerdictTag verdict={v.verdict} />}
                  <VisitPhotos photos={v.photos} className="pt-1" />
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="size-8 shrink-0 text-muted-foreground"
                      aria-label={t("visits_delete")}
                      title={t("visits_delete")}
                      disabled={remove.isPending}
                    >
                      <Trash2 />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{t("visits_delete")}</AlertDialogTitle>
                      <AlertDialogDescription>
                        {t("visits_delete_confirm")}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => remove.mutate({ checkinId: v.id })}
                      >
                        {t("visits_delete")}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
