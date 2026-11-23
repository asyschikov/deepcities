import { Link, useMatches, useRouterState } from "@tanstack/react-router";
import {
  LogOut,
  MapPinCheck,
  MapPinned,
  Shield,
  UserRound,
} from "lucide-react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { ModeSwitch } from "~/components/ModeSwitch";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useViewer } from "~/lib/use-viewer";
import { cn, getInitials } from "~/lib/utils";

interface MapCrumb {
  city: string;
  citySlug: string;
  slug: string;
  title: string;
  cityDefault: boolean;
}

const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null;

const asMap = (v: unknown): MapCrumb | null =>
  isRecord(v) &&
  typeof v.city === "string" &&
  typeof v.citySlug === "string" &&
  typeof v.slug === "string" &&
  typeof v.title === "string" &&
  typeof v.cityDefault === "boolean"
    ? (v as unknown as MapCrumb)
    : null;

/**
 * Where the page sits: the city and, unless it is the city's own map, the
 * map. Read from the loaded pages (a map page's view, a city page's maps).
 */
const useCrumbs = (): { city: MapCrumb | null; map: MapCrumb | null } =>
  useMatches({
    select: (matches) => {
      for (const m of [...matches].reverse()) {
        const data: unknown = m.loaderData;
        const view = isRecord(data) && isRecord(data.view) ? data.view : null;
        const map = view ? asMap(view.collection) : null;
        if (map) return { city: map, map: map.cityDefault ? null : map };
        const city = m.params as { city?: string };
        if (Array.isArray(data) && city.city) {
          const inCity = data.map(asMap).find((x) => x?.citySlug === city.city);
          if (inCity) return { city: inCity, map: null };
        }
      }
      return { city: null, map: null };
    },
    structuralSharing: true,
  });

export const SiteHeader = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  const href = useRouterState({ select: (s) => s.location.href });
  const { city, map } = useCrumbs();
  const crumbs = [
    city && {
      key: "city",
      label: city.city,
      link: (
        <Link
          to="/$city"
          params={{ city: city.citySlug }}
          className="truncate hover:underline"
        >
          {city.city}
        </Link>
      ),
    },
    map && {
      key: "map",
      label: map.title,
      link: (
        <Link
          to="/$city/$slug"
          params={{ city: map.citySlug, slug: map.slug }}
          className="truncate hover:underline"
        >
          {map.title}
        </Link>
      ),
    },
  ].filter((c) => c !== null);

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-4 border-b bg-background/90 px-4 backdrop-blur">
      <nav
        aria-label={t("header_breadcrumbs")}
        className="flex min-w-0 items-center gap-2 font-serif text-lg font-semibold tracking-tight"
      >
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <MapPinned className="size-5 text-brick" />
          {/* Phones with a place to show: the logo is enough. */}
          <span className={cn(crumbs.length > 0 && "max-sm:sr-only")}>
            {t("brand")}
          </span>
        </Link>
        {crumbs.map((c) => (
          <Fragment key={c.key}>
            <span aria-hidden className="text-muted-foreground/60">
              /
            </span>
            {c.link}
          </Fragment>
        ))}
      </nav>
      <div className="ml-auto flex shrink-0 items-center gap-2">
        <ModeSwitch />
        {viewer ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
                aria-label={t("header_account")}
              >
                {getInitials(viewer.name)}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="font-medium">{viewer.name}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {viewer.email}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/me/visits">
                  <MapPinCheck /> {t("header_visits")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/me">
                  <UserRound /> {t("header_profile")}
                </Link>
              </DropdownMenuItem>
              {viewer.role === "super_admin" && (
                <DropdownMenuItem asChild>
                  <Link to="/admin">
                    <Shield /> {t("header_site_admin")}
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <form method="post" action="/auth/signout">
                <DropdownMenuItem asChild>
                  <button type="submit" className="w-full">
                    <LogOut /> {t("header_sign_out")}
                  </button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild size="sm" variant="outline">
            <Link to="/auth" search={{ next: href }}>
              {t("header_sign_in")}
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};
