import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouteForm } from "~/components/RouteForm";
import { useMapPage } from "~/lib/map-page";
import { useViewer } from "~/lib/use-viewer";

const NewRoute = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const viewer = useViewer();
  const { view, setTab } = useMapPage();
  const slug = view.collection.slug;
  useEffect(() => setTab("routes"), [setTab]);

  return (
    <div className="space-y-5 p-5">
      <Link
        to="/m/$slug"
        params={{ slug }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("route_back")}
      </Link>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{t("route_new_title")}</h1>
        <p className="text-sm text-muted-foreground">{t("route_new_intro")}</p>
      </div>
      {!viewer ? (
        <p className="text-sm">
          <Link
            to="/auth"
            search={{ next: `/m/${slug}/r/new` }}
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
        <RouteForm
          initial={null}
          onDone={(res) =>
            res.status === "approved" && res.routeId
              ? navigate({
                  to: "/m/$slug/r/$routeId",
                  params: { slug, routeId: res.routeId },
                })
              : navigate({
                  to: "/m/$slug/review",
                  params: { slug },
                  search: { tab: "mine" },
                })
          }
        />
      )}
    </div>
  );
};

export const Route = createFileRoute("/m/$slug/r/new")({ component: NewRoute });
