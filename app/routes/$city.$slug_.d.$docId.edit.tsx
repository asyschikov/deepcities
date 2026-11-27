import { useQuery } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { useTranslation } from "react-i18next";
import { DocumentEditor } from "~/components/DocumentEditor";
import { PageShell } from "~/components/PageShell";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadForEdit = createServerFn({ method: "GET" })
  .validator((input: { slug: string; documentId: string }) => input)
  .handler(async ({ data }) => {
    const caller = await createCaller();
    try {
      const [view, doc] = await Promise.all([
        caller.collection.bySlug({ slug: data.slug }),
        caller.document.byId({ documentId: data.documentId }),
      ]);
      return doc.document.collectionId === view.collection.id
        ? { view, doc }
        : null;
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });

const EditDocumentPage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { city, slug, docId } = Route.useParams();
  const initial = Route.useLoaderData();
  const { data: doc } = useQuery({
    ...trpc.document.byId.queryOptions({ documentId: docId }),
    initialData: initial.doc,
  });
  const { view } = initial;
  const d = doc.document;
  return (
    <PageShell
      back={{
        to: "/$city/$slug/d/$docId",
        params: { city, slug, docId },
        label: d.title,
      }}
      title={t("doc_edit_title")}
      subtitle={view.collection.title}
    >
      {doc.can.review ? (
        <DocumentEditor
          // Remount when someone else's save bumps the revision.
          key={d.revision}
          slug={slug}
          collectionId={view.collection.id}
          documentId={d.id}
          revision={d.revision}
          photos={doc.photos}
          initial={{
            kind: d.kind,
            title: d.title,
            summary: d.summary,
            body: d.body,
            photoIds: d.photoIds,
            translations: d.translations,
            attachments: doc.attachments.map(({ subjectType, subjectId }) => ({
              subjectType,
              subjectId,
            })),
          }}
        />
      ) : (
        <p className="text-muted-foreground">{t("doc_not_allowed")}</p>
      )}
    </PageShell>
  );
};

export const Route = createFileRoute("/$city/$slug_/d/$docId/edit")({
  loader: async ({ params }) => {
    const data = await loadForEdit({
      data: { slug: params.slug, documentId: params.docId },
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData ? `Edit ${loaderData.doc.document.title}` : "Edit"} · Deep Cities`,
      },
    ],
  }),
  component: EditDocumentPage,
});
