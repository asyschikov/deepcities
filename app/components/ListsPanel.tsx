import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import { ListChecks } from "lucide-react";
import { useTranslation } from "react-i18next";
import { localize } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/**
 * The map's Lists tab: documents of the "list" kind, each a description with
 * its places (e.g. all the murals), opened like any document.
 */
export const ListsPanel = () => {
  const { city = "", slug = "" } = useParams({ strict: false });
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { view, translateTo } = useMapPage();
  const { data: raw, isPending } = useQuery(
    trpc.document.list.queryOptions({
      collectionId: view.collection.id,
      kind: "list",
    }),
  );
  if (isPending) return null;
  const lists = (raw ?? []).map((d) => localize(d, translateTo));
  if (lists.length === 0)
    return (
      <p className="p-4 text-sm text-muted-foreground">{t("lists_empty")}</p>
    );
  return (
    <ul className="space-y-2 p-4">
      {lists.map((l) => (
        <li key={l.id}>
          <Link
            to="/$city/$slug/d/$docId"
            params={{ city, slug, docId: l.id }}
            className="flex gap-3 rounded-lg border p-3 transition hover:bg-muted/60"
          >
            {l.coverPhotoId ? (
              <img
                src={photoUrl(l.coverPhotoId, "thumb")}
                alt=""
                loading="lazy"
                className="size-16 shrink-0 rounded object-cover"
              />
            ) : (
              <div className="grid size-16 shrink-0 place-items-center rounded bg-muted text-muted-foreground">
                <ListChecks className="size-6" />
              </div>
            )}
            <div className="min-w-0 space-y-0.5">
              <div className="font-medium">{l.title}</div>
              <div className="text-xs text-muted-foreground">
                {t("list_places", { count: l.placeCount })}
              </div>
              {l.summary && (
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {l.summary}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
