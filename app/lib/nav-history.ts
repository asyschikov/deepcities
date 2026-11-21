/**
 * What the previous history entry was, so "back" links can go back in
 * history (and say where to) instead of to a fixed parent page.
 *
 * Entries are keyed by TanStack Router's history index and recorded as the
 * reader moves around; after a full page load nothing earlier is known, and
 * back links fall back to their parent page.
 */
import { useLocation, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export interface HistoryEntry {
  href: string;
  pathname: string;
  /** The page's title, without the site name. */
  title?: string;
}

const entries = new Map<number, HistoryEntry>();
const SITE_SUFFIX = / · Deep Cities$/;

const useIndex = (): number => {
  const router = useRouter();
  useLocation(); // re-render on navigation
  return router.history.location.state.__TSR_index ?? 0;
};

/** Record each entry the reader visits (mount once, at the root). */
export const useTrackHistory = () => {
  const location = useLocation();
  const index = useIndex();
  useEffect(() => {
    const entry: HistoryEntry = {
      href: location.href,
      pathname: location.pathname,
    };
    entries.set(index, entry);
    // The new page sets its title just after rendering.
    const id = setTimeout(() => {
      if (entries.get(index) === entry)
        entry.title = document.title.replace(SITE_SUFFIX, "") || undefined;
    }, 400);
    return () => clearTimeout(id);
  }, [location.href, location.pathname, index]);
};

/** The entry Back would return to, if it was visited in this page load. */
export const usePreviousEntry = (): HistoryEntry | null => {
  const index = useIndex();
  return index > 0 ? (entries.get(index - 1) ?? null) : null;
};

/**
 * After a form is saved: return to `pathname` if that's where the reader
 * came from (so Back doesn't revisit the form); otherwise replace the
 * form's entry with `go()`.
 */
export const useLeaveForm = () => {
  const router = useRouter();
  const previous = usePreviousEntry();
  return (pathname: string, go: () => unknown) => {
    if (previous?.pathname === pathname) router.history.back();
    else go();
  };
};
