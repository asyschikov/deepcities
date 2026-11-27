import { useState } from "react";
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

/**
 * The site owner's address, stored reversed so it appears nowhere in the
 * page or script as written; put together only when someone clicks.
 */
const CONTACT = "moc.liamg@vokihcsysa";
const contactAddress = () => [...CONTACT].reverse().join("");

/** "Contact": opens a mail to the owner, and shows the address once used. */
export const ContactLink = () => {
  const { t } = useTranslation();
  const [address, setAddress] = useState<string | null>(null);
  return address ? (
    <a href={`mailto:${address}`} className="underline hover:text-foreground">
      {address}
    </a>
  ) : (
    <button
      type="button"
      className="underline hover:text-foreground"
      onClick={() => {
        const to = contactAddress();
        setAddress(to);
        window.location.href = `mailto:${to}`;
      }}
    >
      {t("footer_contact")}
    </button>
  );
};

/** The small print: how visitors' photos may be reused, and a contact. */
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
      <span aria-hidden className="mx-2">
        ·
      </span>
      <ContactLink />
    </footer>
  );
};

/** Under an edit form's save button: what saving means for licensing. */
export const EditLicenseNote = () => {
  const { t } = useTranslation();
  return (
    <p className="text-center text-[11px] text-muted-foreground">
      {t("edit_license")} <LicenseLink />
    </p>
  );
};
