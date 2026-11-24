import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { PlaceForm } from "~/components/PlaceForm";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { useLeaveForm } from "~/lib/nav-history";
import { draftOfPlace, type PlaceDraft } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const EditPlace = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { translateTo } = useMapPage();
  const navigate = useNavigate();
  const leaveForm = useLeaveForm();
  const { city, slug, placeId } = Route.useParams();
  // On a view map, the place as the view shows it (its own values merged).
  const { data } = useQuery(
    trpc.place.byId.queryOptions({ placeId, map: slug }),
  );

  // Snapshot once: refetches must not reset the form or the draft pin.
  const place = data?.place;
  // biome-ignore lint/correctness/useExhaustiveDependencies: initialise once per place
  const initial = useMemo<PlaceDraft | null>(
    () => (place ? draftOfPlace(place) : null),
    [place?.id, place?.revision],
  );

  if (!data || !initial) return null;

  return (
    <div className="space-y-5 p-5">
      <BackLink
        fallback={
          <Link
            to="/$city/$slug/p/$placeId"
            params={{ city, slug, placeId }}
            className={BACK_LINK_CLASS}
          >
            <ArrowLeft className="size-4" /> {t("edit_back")}
          </Link>
        }
      />
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">
          {data.can.review
            ? t("edit_title_mod", {
                title: localize(initial, translateTo).title,
              })
            : t("edit_title", { title: localize(initial, translateTo).title })}
        </h1>
        <p className="text-sm text-muted-foreground">
          {data.can.review ? t("edit_intro_mod") : t("edit_intro")}
        </p>
        {data.viewId && (
          <p className="text-sm text-muted-foreground">
            {t("edit_intro_view")}
          </p>
        )}
      </div>
      {data.can.propose ? (
        <PlaceForm
          initial={initial}
          placeId={placeId}
          viewValues={
            data.viewId
              ? { collectionId: data.viewId, base: data.base }
              : undefined
          }
          onDone={(res) =>
            res.status === "approved"
              ? leaveForm(`/${city}/${slug}/p/${placeId}`, () =>
                  navigate({
                    to: "/$city/$slug/p/$placeId",
                    params: { city, slug, placeId },
                    replace: true,
                  }),
                )
              : navigate({
                  to: "/$city/$slug/review",
                  params: { city, slug },
                  search: { tab: "mine" },
                  replace: true,
                })
          }
        />
      ) : (
        <p className="rounded-md bg-muted p-3 text-sm">
          {t("new_not_allowed")}
        </p>
      )}
    </div>
  );
};

export const Route = createFileRoute("/$city/$slug/p/$placeId/edit")({
  component: EditPlace,
});
