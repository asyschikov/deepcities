import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageShell } from "~/components/PageShell";
import { VisitHistory } from "~/components/VisitHistory";
import { useViewer } from "~/lib/use-viewer";

/** Every check-in you've made, on every map. Only you see this page. */
const VisitsPage = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  return (
    <PageShell title={t("visits_title")} subtitle={t("visits_subtitle")}>
      {viewer ? (
        <div className="-mx-4 rounded-lg border sm:mx-0">
          <VisitHistory showMap />
        </div>
      ) : (
        <Link
          to="/auth"
          search={{ next: "/me/visits" }}
          className="text-primary underline"
        >
          {t("header_sign_in")}
        </Link>
      )}
    </PageShell>
  );
};

export const Route = createFileRoute("/me_/visits")({
  head: () => ({ meta: [{ title: "My visits · Deep Cities" }] }),
  component: VisitsPage,
});
