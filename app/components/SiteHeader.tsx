import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut, MapPinned, Shield, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
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
import { getInitials } from "~/lib/utils";

export const SiteHeader = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  const href = useRouterState({ select: (s) => s.location.href });

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-4 border-b bg-background/90 px-4 backdrop-blur">
      <Link to="/" className="flex items-center gap-2">
        <MapPinned className="size-5 text-brick" />
        <span className="font-serif text-lg font-semibold tracking-tight">
          {t("brand")}
        </span>
      </Link>
      <div className="ml-auto flex items-center gap-2">
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
