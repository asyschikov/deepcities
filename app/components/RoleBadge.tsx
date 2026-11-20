import { useTranslation } from "react-i18next";
import type { EffectiveRole } from "~/lib/permissions";
import { cn } from "~/lib/utils";

const STYLES: Record<EffectiveRole, string> = {
  viewer: "bg-muted text-muted-foreground",
  contributor: "bg-secondary text-secondary-foreground",
  moderator: "bg-accent text-accent-foreground",
  admin: "bg-primary text-primary-foreground",
  super_admin: "bg-brick text-white",
};

export const RoleBadge = ({ role }: { role: EffectiveRole }) => {
  const { t } = useTranslation();
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide normal-case",
        STYLES[role],
      )}
    >
      {t(`role_${role}`)}
    </span>
  );
};
