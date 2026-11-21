import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { DocumentSubject } from "~/lib/constants";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** How many documents show before "Show all". */
const PREVIEW = 5;

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
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { translateTo } = useMapPage();
  const [expanded, setExpanded] = useState(false);
  const { data: rawDocs = [] } = useQuery(
    trpc.document.list.queryOptions({
      collectionId,
      subject: { subjectType, subjectId },
    }),
  );
  const docs = rawDocs.map((d) => localize(d, translateTo));
  if (docs.length === 0) return null;
  const shown = expanded ? docs : docs.slice(0, PREVIEW);
  return (
    <section className={className}>
      <h2 className="mb-2 flex items-center gap-1.5 font-sans text-sm font-semibold">
        <BookOpen className="size-4" /> {title}
      </h2>
      <ul className="space-y-1.5">
        {shown.map((d) => (
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
      {docs.length > PREVIEW && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {expanded ? (
            <>
              <ChevronUp className="size-4" /> {t("docs_show_less")}
            </>
          ) : (
            <>
              <ChevronDown className="size-4" />{" "}
              {t("docs_show_all", { count: docs.length })}
            </>
          )}
        </button>
      )}
    </section>
  );
};
