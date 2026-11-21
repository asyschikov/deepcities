import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { RouteForm } from "~/components/RouteForm";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { useLeaveForm } from "~/lib/nav-history";
import { draftOfRoute, type RouteDraft } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const EditRoute = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { translateTo } = useMapPage();
  const navigate = useNavigate();
  const leaveForm = useLeaveForm();
  const { slug, routeId } = Route.useParams();
  const { data } = useQuery(trpc.route.byId.queryOptions({ routeId }));

  // Snapshot once: refetches must not reset the editor.
  const route = data?.route;
  // biome-ignore lint/correctness/useExhaustiveDependencies: initialise once per revision
  const initial = useMemo<RouteDraft | null>(
    () => (route ? draftOfRoute(route) : null),
    [route?.id, route?.revision],
  );
  if (!data || !initial) return null;

  return (
    <div className="space-y-5 p-5">
      <BackLink
        fallback={
          <Link
            to="/m/$slug/r/$routeId"
            params={{ slug, routeId }}
            className={BACK_LINK_CLASS}
          >
            <ArrowLeft className="size-4" /> {t("route_edit_back")}
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
          {data.can.review ? t("route_edit_intro_mod") : t("route_edit_intro")}
        </p>
      </div>
      {data.can.propose ? (
        <RouteForm
          initial={initial}
          routeId={routeId}
          onDone={(res) =>
            res.status === "approved"
              ? leaveForm(`/m/${slug}/r/${routeId}`, () =>
                  navigate({
                    to: "/m/$slug/r/$routeId",
                    params: { slug, routeId },
                    replace: true,
                  }),
                )
              : navigate({
                  to: "/m/$slug/review",
                  params: { slug },
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

export const Route = createFileRoute("/m/$slug/r/$routeId/edit")({
  component: EditRoute,
});
