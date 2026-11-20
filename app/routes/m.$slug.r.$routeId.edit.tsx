import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { RouteForm } from "~/components/RouteForm";
import { draftOfRoute, type RouteDraft } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const EditRoute = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
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
      <Link
        to="/m/$slug/r/$routeId"
        params={{ slug, routeId }}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {t("route_edit_back")}
      </Link>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">
          {data.can.review
            ? t("edit_title_mod", { title: initial.title })
            : t("edit_title", { title: initial.title })}
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
              ? navigate({
                  to: "/m/$slug/r/$routeId",
                  params: { slug, routeId },
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

export const Route = createFileRoute("/m/$slug/r/$routeId/edit")({
  component: EditRoute,
});
