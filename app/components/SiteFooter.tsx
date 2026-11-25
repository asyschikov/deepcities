import { useTranslation } from "react-i18next";
import { PHOTO_LICENSE, PHOTO_LICENSE_URL } from "~/lib/constants";
import { cn } from "~/lib/utils";

/** A link to the licence visitors' photos are shared under. */
export const LicenseLink = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <a
      href={PHOTO_LICENSE_URL}
      target="_blank"
      rel="noreferrer license"
      className={cn("underline hover:text-foreground", className)}
    >
      {t("license_read", { license: PHOTO_LICENSE })}
    </a>
  );
};

/** The small print: how visitors' photos may be reused. */
export const SiteFooter = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <footer
      className={cn(
        "mx-auto w-full max-w-5xl px-4 py-6 text-xs text-muted-foreground",
        className,
      )}
    >
      {t("footer_license")} <LicenseLink />
    </footer>
  );
};
