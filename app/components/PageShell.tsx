import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { BACK_LINK_CLASS, BackLink } from "~/components/BackLink";
import { SiteFooter } from "~/components/SiteFooter";

/** Standard non-map page: back link, title, content column. */
export const PageShell = ({
  back,
  title,
  subtitle,
  children,
}: {
  back?: { to: string; params?: Record<string, string>; label: string };
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}) => (
  <main className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8">
    {back && (
      <BackLink
        fallback={
          <Link to={back.to} params={back.params} className={BACK_LINK_CLASS}>
            <ArrowLeft className="size-4" /> {back.label}
          </Link>
        }
      />
    )}
    <div className="space-y-1">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {subtitle && <div className="text-muted-foreground">{subtitle}</div>}
    </div>
    {children}
    <SiteFooter className="max-w-none px-0 pt-10" />
  </main>
);
