import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { PlaceForm } from "~/components/PlaceForm";
import { useMapPage } from "~/lib/map-page";
import { useViewer } from "~/lib/use-viewer";

const NewPlace = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const viewer = useViewer();
  const { view } = useMapPage();
  const slug = view.collection.slug;

  return (
    <div className="space-y-5 p-5">
      <BackLink
        fallback={
          <Link
            to="/m/$slug"
            params={{ slug }}
            search={{ tab: undefined }}
            className={BACK_LINK_CLASS}
          >
            <ArrowLeft className="size-4" /> {t("place_back")}
          </Link>
        }
      />
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{t("new_title")}</h1>
        <p className="text-sm text-muted-foreground">{t("new_intro")}</p>
      </div>
      {!viewer ? (
        <p className="text-sm">
          <Link
            to="/auth"
            search={{ next: `/m/${slug}/new` }}
            className="text-primary underline"
          >
            {t("new_sign_in")}
          </Link>
        </p>
      ) : !view.can.propose ? (
        <p className="rounded-md bg-muted p-3 text-sm">
          {t("new_not_allowed")}
        </p>
      ) : (
        <PlaceForm
          initial={null}
          onDone={(res) =>
            res.status === "approved" && res.placeId
              ? navigate({
                  to: "/m/$slug/p/$placeId",
                  params: { slug, placeId: res.placeId },
                  replace: true,
                })
              : navigate({
                  to: "/m/$slug/review",
                  params: { slug },
                  search: { tab: "mine" },
                  replace: true,
                })
          }
        />
      )}
    </div>
  );
};

export const Route = createFileRoute("/m/$slug/new")({ component: NewPlace });
