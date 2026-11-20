import { ArrowDown, ArrowUp, Eye, EyeOff, Plus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { FIELD_TYPES, type FieldType } from "~/lib/constants";
import { cn } from "~/lib/utils";
import type { FieldDef } from "~/lib/validation";

const keyOf = (label: string) =>
  label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^[^a-z]+|_+$/g, "")
    .slice(0, 32);

const parseOptions = (text: string) =>
  [
    ...new Set(
      text
        .split(",")
        .map((o) => o.trim())
        .filter(Boolean),
    ),
  ].slice(0, 40);

/** Comma-separated options, committed on blur so typing a comma works. */
const OptionsInput = ({
  value,
  onChange,
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) => {
  const { t } = useTranslation();
  const [text, setText] = useState(value.join(", "));
  return (
    <Input
      value={text}
      placeholder={t("manage_field_options")}
      aria-label={t("manage_field_options")}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => onChange(parseOptions(text))}
    />
  );
};

/**
 * Editor for a map's custom place fields. Keys are fixed once created
 * (values are stored under them); labels, types and options can change.
 * Saved fields can't be deleted, only hidden; unsaved new ones can be.
 */
export const FieldsEditor = ({
  value,
  onChange,
}: {
  value: FieldDef[];
  onChange: (v: FieldDef[]) => void;
}) => {
  const { t } = useTranslation();
  const update = (i: number, patch: Partial<FieldDef>) =>
    onChange(value.map((f, j) => (j === i ? { ...f, ...patch } : f)));
  const move = (i: number, by: number) => {
    const j = i + by;
    const a = value[i];
    const b = value[j];
    if (!a || !b) return;
    onChange(value.map((f, k) => (k === i ? b : k === j ? a : f)));
  };

  return (
    <div className="space-y-3">
      {value.map((f, i) => (
        <div
          key={f.key}
          className={cn(
            "space-y-2 rounded-md border p-3",
            f.hidden && "border-dashed bg-muted/40 opacity-70",
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Input
              value={f.label}
              aria-label={t("manage_field_label")}
              className="min-w-40 flex-1"
              onChange={(e) => update(i, { label: e.target.value })}
            />
            <Select
              value={f.type}
              onValueChange={(v) =>
                update(i, {
                  type: v as FieldType,
                  options: v === "select" ? (f.options ?? []) : undefined,
                })
              }
            >
              <SelectTrigger
                className="w-32"
                aria-label={t("manage_field_type")}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FIELD_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {t(`field_type_${type}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <label className="flex items-center gap-1.5 text-sm">
              <input
                type="checkbox"
                checked={Boolean(f.required)}
                onChange={(e) =>
                  update(i, { required: e.target.checked || undefined })
                }
              />
              {t("manage_field_required")}
            </label>
            <div className="flex">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={i === 0}
                aria-label={t("manage_field_up")}
                onClick={() => move(i, -1)}
              >
                <ArrowUp />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={i === value.length - 1}
                aria-label={t("manage_field_down")}
                onClick={() => move(i, 1)}
              >
                <ArrowDown />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={
                  f.hidden ? t("manage_field_show") : t("manage_field_hide")
                }
                title={
                  f.hidden ? t("manage_field_show") : t("manage_field_hide")
                }
                onClick={() =>
                  update(i, { hidden: f.hidden ? undefined : true })
                }
              >
                {f.hidden ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>
          {f.type === "select" && (
            <OptionsInput
              value={f.options ?? []}
              onChange={(options) => update(i, { options })}
            />
          )}
          <div className="flex items-center gap-2">
            <Input
              value={f.help ?? ""}
              placeholder={t("manage_field_help")}
              aria-label={t("manage_field_help")}
              onChange={(e) => update(i, { help: e.target.value || undefined })}
            />
            <code className="shrink-0 text-xs text-muted-foreground">
              {f.key}
            </code>
          </div>
        </div>
      ))}
      <NewField existing={value} onAdd={(f) => onChange([...value, f])} />
      <p className="text-xs text-muted-foreground">{t("manage_fields_hint")}</p>
    </div>
  );
};

const NewField = ({
  existing,
  onAdd,
}: {
  existing: FieldDef[];
  onAdd: (f: FieldDef) => void;
}) => {
  const { t } = useTranslation();
  const [label, setLabel] = useState("");
  const key = keyOf(label);
  const taken = existing.some((f) => f.key === key);
  return (
    <div className="flex gap-2">
      <Input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder={t("manage_field_new")}
        aria-label={t("manage_field_new")}
      />
      <Button
        type="button"
        variant="outline"
        disabled={!key || taken}
        onClick={() => {
          onAdd({ key, label: label.trim(), type: "text" });
          setLabel("");
        }}
      >
        <Plus /> {t("manage_field_add")}
      </Button>
    </div>
  );
};
