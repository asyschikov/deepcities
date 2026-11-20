import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PlaceForm } from "~/components/PlaceForm";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { draftOfPlace, type PlaceDraft } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const EditPlace = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { translateTo } = useMapPage();
  const navigate = useNavigate();
  const { slug, placeId } = Route.useParams();
  const { data } = useQuery(trpc.place.byId.queryOptions({ placeId }));

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
      <Link
        to="/m/$slug/p/$placeId"
        params={{ slug, placeId }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("edit_back")}
      </Link>
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
      </div>
      {data.can.propose ? (
        <PlaceForm
          initial={initial}
          placeId={placeId}
          onDone={(res) =>
            res.status === "approved"
              ? navigate({
                  to: "/m/$slug/p/$placeId",
                  params: { slug, placeId },
                })
              : navigate({
                  to: "/m/$slug/review",
                  params: { slug },
                  search: { tab: "mine" },
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

export const Route = createFileRoute("/m/$slug/p/$placeId/edit")({
  component: EditPlace,
});
