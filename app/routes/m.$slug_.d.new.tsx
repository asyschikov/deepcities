import { useQuery } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { DocumentEditor } from "~/components/DocumentEditor";
import { PageShell } from "~/components/PageShell";
import { loadCollection } from "~/lib/loaders";
import { useTRPC } from "~/trpc/client";

const NewDocumentPage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { slug } = Route.useParams();
  const initial = Route.useLoaderData();
  const { data: view } = useQuery({
    ...trpc.collection.bySlug.queryOptions({ slug }),
    initialData: initial,
  });
  return (
    <PageShell
      back={{ to: "/m/$slug", params: { slug }, label: view.collection.title }}
      title={t("doc_new")}
      subtitle={t("doc_new_desc")}
    >
      {view.can.review ? (
        <DocumentEditor
          slug={slug}
          collectionId={view.collection.id}
          initial={{
            title: "",
            summary: "",
            body: "",
            photoIds: [],
            translations: {},
            attachments: [
              { subjectType: "collection", subjectId: view.collection.id },
            ],
          }}
        />
      ) : (
        <p className="text-muted-foreground">{t("doc_not_allowed")}</p>
      )}
    </PageShell>
  );
};

export const Route = createFileRoute("/m/$slug_/d/new")({
  loader: async ({ params }) => {
    const view = await loadCollection({ data: params.slug });
    if (!view) throw notFound();
    return view;
  },
  head: () => ({ meta: [{ title: "New document · Deep Cities" }] }),
  component: NewDocumentPage,
});
