import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import type { DocumentSubject } from "~/lib/constants";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** Documents attached to one subject (the map, a place or a route). */
export const DocumentList = ({
  slug,
  collectionId,
  subjectType,
  subjectId,
  title,
  className,
}: {
  slug: string;
  collectionId: string;
  subjectType: DocumentSubject;
  subjectId: string;
  title: string;
  className?: string;
}) => {
  const trpc = useTRPC();
  const { translateTo } = useMapPage();
  const { data: rawDocs = [] } = useQuery(
    trpc.document.list.queryOptions({
      collectionId,
      subject: { subjectType, subjectId },
    }),
  );
  const docs = rawDocs.map((d) => localize(d, translateTo));
  if (docs.length === 0) return null;
  return (
    <section className={className}>
      <h2 className="mb-2 flex items-center gap-1.5 font-sans text-sm font-semibold">
        <BookOpen className="size-4" /> {title}
      </h2>
      <ul className="space-y-1.5">
        {docs.map((d) => (
          <li key={d.id}>
            <Link
              to="/m/$slug/d/$docId"
              params={{ slug, docId: d.id }}
              className="flex gap-3 rounded-md border p-2 transition hover:bg-muted/60"
            >
              {d.coverPhotoId && (
                <img
                  src={photoUrl(d.coverPhotoId)}
                  alt=""
                  loading="lazy"
                  className="size-12 shrink-0 rounded object-cover"
                />
              )}
              <div className="min-w-0">
                <div className="text-sm font-medium">{d.title}</div>
                {d.summary && (
                  <p className="line-clamp-2 text-xs text-muted-foreground">
                    {d.summary}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
