import { useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { usePreviousEntry } from "~/lib/nav-history";

export const BACK_LINK_CLASS =
  "inline-flex max-w-full items-center gap-1 text-sm text-muted-foreground hover:text-foreground";

/**
 * "Back": returns to the previous page the reader was on (named after it),
 * like the browser's Back button. Without one (a shared link, a reload) it
 * shows `fallback`, a link to the parent page.
 */
export const BackLink = ({ fallback }: { fallback: ReactNode }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const previous = usePreviousEntry();
  if (!previous) return fallback;
  return (
    <a
      href={previous.href}
      className={BACK_LINK_CLASS}
      onClick={(e) => {
        // Let modified clicks open the page in a new tab.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
          return;
        e.preventDefault();
        router.history.back();
      }}
    >
      <ArrowLeft className="size-4 shrink-0" />
      <span className="truncate">
        {previous.title ? t("back_to", { name: previous.title }) : t("back")}
      </span>
    </a>
  );
};
