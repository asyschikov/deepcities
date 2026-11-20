import { useTranslation } from "react-i18next";
import { showAttribute, visibleFields } from "~/lib/fields";
import { cn } from "~/lib/utils";
import type { Attributes, FieldDef } from "~/lib/validation";

/** A place's custom-field values as a definition list, in schema order. */
export const PlaceAttributes = ({
  fields,
  attributes,
  className,
}: {
  fields: FieldDef[];
  attributes: Attributes | undefined;
  className?: string;
}) => {
  const { t } = useTranslation();
  const rows = visibleFields(fields).flatMap((f) => {
    const value = attributes?.[f.key];
    return value === undefined || value === "" ? [] : [{ f, value }];
  });
  if (rows.length === 0) return null;
  return (
    <dl
      className={cn(
        "grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm",
        className,
      )}
    >
      {rows.map(({ f, value }) => (
        <div key={f.key} className="contents">
          <dt className="text-muted-foreground">{f.label}</dt>
          <dd
            className={cn(
              "min-w-0",
              f.type === "longtext" && "whitespace-pre-line",
            )}
          >
            {f.type === "url" && typeof value === "string" ? (
              <a
                href={value}
                target="_blank"
                rel="noreferrer nofollow ugc"
                className="break-all text-primary hover:underline"
              >
                {value.replace(/^https?:\/\//, "")}
              </a>
            ) : (
              showAttribute(value, t("value_yes"), t("value_no"))
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
};
