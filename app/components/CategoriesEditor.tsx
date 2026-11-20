import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { CATEGORY_COLORS } from "~/lib/constants";
import type { CategoryDef } from "~/lib/validation";

const slugifyKey = (label: string) =>
  label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 32);

export const CategoriesEditor = ({
  value,
  onChange,
}: {
  value: CategoryDef[];
  onChange: (v: CategoryDef[]) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      {value.map((c, i) => (
        <div key={c.key || i} className="flex items-center gap-2">
          <input
            type="color"
            value={c.color}
            aria-label={t("manage_category_color")}
            onChange={(e) =>
              onChange(
                value.map((v, j) =>
                  j === i ? { ...v, color: e.target.value } : v,
                ),
              )
            }
            className="h-9 w-10 cursor-pointer rounded border bg-transparent"
          />
          <Input
            value={c.label}
            aria-label={t("manage_category_label")}
            onChange={(e) =>
              onChange(
                value.map((v, j) =>
                  j === i ? { ...v, label: e.target.value } : v,
                ),
              )
            }
          />
          <code className="hidden w-32 truncate text-xs text-muted-foreground sm:block">
            {c.key}
          </code>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("manage_category_remove")}
            onClick={() => onChange(value.filter((_, j) => j !== i))}
          >
            <Trash2 />
          </Button>
        </div>
      ))}
      <NewCategory existing={value} onAdd={(c) => onChange([...value, c])} />
    </div>
  );
};

const NewCategory = ({
  existing,
  onAdd,
}: {
  existing: CategoryDef[];
  onAdd: (c: CategoryDef) => void;
}) => {
  const { t } = useTranslation();
  const [label, setLabel] = useState("");
  const key = slugifyKey(label);
  const taken = existing.some((c) => c.key === key);
  return (
    <div className="flex gap-2">
      <Input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder={t("manage_category_new")}
        aria-label={t("manage_category_new")}
      />
      <Button
        type="button"
        variant="outline"
        disabled={!key || taken}
        onClick={() => {
          onAdd({
            key,
            label: label.trim(),
            color:
              CATEGORY_COLORS[existing.length % CATEGORY_COLORS.length] ??
              "#57534e",
          });
          setLabel("");
        }}
      >
        <Plus /> {t("manage_category_add")}
      </Button>
    </div>
  );
};
