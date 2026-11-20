import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { CONTENT_LANGUAGES, type ContentLang } from "~/lib/constants";
import { isContentLang, languageName } from "~/lib/content-lang";
import type { CollectionTranslations } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";
import type { RouterOutputs } from "~/trpc/router";

type Collection = RouterOutputs["collection"]["bySlug"]["collection"];
type LangTexts = NonNullable<CollectionTranslations[ContentLang]>;

/** One translated text: the original as a placeholder, the translation as value. */
const TextRow = ({
  id,
  label,
  original,
  value,
  onChange,
  long,
}: {
  id: string;
  label: string;
  original: string;
  value: string;
  onChange: (v: string) => void;
  long?: boolean;
}) => (
  <div className="space-y-1">
    <Label htmlFor={id} className="text-xs text-muted-foreground">
      {label}
    </Label>
    {long ? (
      <Textarea
        id={id}
        rows={3}
        value={value}
        placeholder={original}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <Input
        id={id}
        value={value}
        placeholder={original}
        onChange={(e) => onChange(e.target.value)}
      />
    )}
  </div>
);

/** The map's own texts and labels translated into `lang`. */
const LangTextsEditor = ({
  c,
  lang,
  value,
  onChange,
}: {
  c: Collection;
  lang: ContentLang;
  value: LangTexts;
  onChange: (v: LangTexts) => void;
}) => {
  const { t } = useTranslation();
  const set = (patch: Partial<LangTexts>) => onChange({ ...value, ...patch });
  const setField = (
    key: string,
    patch: NonNullable<LangTexts["fields"]>[string],
  ) =>
    set({
      fields: {
        ...value.fields,
        [key]: { ...value.fields?.[key], ...patch },
      },
    });
  return (
    <details className="rounded-md border p-3" lang={lang}>
      <summary className="cursor-pointer text-sm font-medium">
        {t("manage_lang_texts", { lang: languageName(lang) })}
      </summary>
      <div className="mt-3 space-y-3">
        <TextRow
          id={`${lang}-title`}
          label={t("manage_field_title")}
          original={c.title}
          value={value.title ?? ""}
          onChange={(v) => set({ title: v })}
        />
        <TextRow
          id={`${lang}-tagline`}
          label={t("manage_field_tagline")}
          original={c.tagline ?? ""}
          value={value.tagline ?? ""}
          onChange={(v) => set({ tagline: v })}
        />
        <TextRow
          id={`${lang}-description`}
          label={t("manage_field_description")}
          original={c.description ?? ""}
          value={value.description ?? ""}
          onChange={(v) => set({ description: v })}
          long
        />
        <fieldset className="space-y-2">
          <legend className="text-xs font-semibold">
            {t("manage_field_categories")}
          </legend>
          {c.categories.map((cat) => (
            <TextRow
              key={cat.key}
              id={`${lang}-cat-${cat.key}`}
              label={cat.label}
              original={cat.label}
              value={value.categories?.[cat.key] ?? ""}
              onChange={(v) =>
                set({ categories: { ...value.categories, [cat.key]: v } })
              }
            />
          ))}
        </fieldset>
        {c.fields.some((f) => !f.hidden) && (
          <fieldset className="space-y-3">
            <legend className="text-xs font-semibold">
              {t("manage_field_fields")}
            </legend>
            {c.fields
              .filter((f) => !f.hidden)
              .map((f) => (
                <div key={f.key} className="space-y-2 rounded border p-2">
                  <TextRow
                    id={`${lang}-field-${f.key}`}
                    label={f.label}
                    original={f.label}
                    value={value.fields?.[f.key]?.label ?? ""}
                    onChange={(v) => setField(f.key, { label: v })}
                  />
                  {f.help && (
                    <TextRow
                      id={`${lang}-help-${f.key}`}
                      label={t("manage_lang_help")}
                      original={f.help}
                      value={value.fields?.[f.key]?.help ?? ""}
                      onChange={(v) => setField(f.key, { help: v })}
                    />
                  )}
                  {(f.options ?? []).map((o) => (
                    <TextRow
                      key={o}
                      id={`${lang}-opt-${f.key}-${o}`}
                      label={o}
                      original={o}
                      value={value.fields?.[f.key]?.options?.[o] ?? ""}
                      onChange={(v) =>
                        setField(f.key, {
                          options: {
                            ...value.fields?.[f.key]?.options,
                            [o]: v,
                          },
                        })
                      }
                    />
                  ))}
                </div>
              ))}
          </fieldset>
        )}
      </div>
    </details>
  );
};

/**
 * Content languages of a map: the one its content is written in, the others
 * readers can switch to, and translations of the map's own texts.
 */
export const MapLanguages = ({ c }: { c: Collection }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [language, setLanguage] = useState<ContentLang>(c.language);
  const [languages, setLanguages] = useState<ContentLang[]>(c.languages);
  const [translations, setTranslations] = useState<CollectionTranslations>(
    c.translations,
  );
  const save = useMutation(
    trpc.collection.updateSettings.mutationOptions({
      onSuccess: () => {
        toast.success(t("manage_saved"));
        return queryClient.invalidateQueries({
          queryKey: trpc.collection.pathKey(),
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const extra = languages.filter((l) => l !== language);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          {t("manage_languages")}
        </CardTitle>
        <CardDescription>{t("manage_languages_desc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            save.mutate({
              collectionId: c.id,
              title: c.title,
              tagline: c.tagline,
              description: c.description,
              city: c.city,
              centerLat: c.centerLat,
              centerLng: c.centerLng,
              zoom: c.zoom,
              categories: c.categories,
              contributionPolicy: c.contributionPolicy,
              language,
              languages: extra,
              translations,
            });
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="base-language">{t("manage_lang_base")}</Label>
            <Select
              value={language}
              onValueChange={(v) => {
                if (isContentLang(v)) setLanguage(v);
              }}
            >
              <SelectTrigger id="base-language" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CONTENT_LANGUAGES.map((l) => (
                  <SelectItem key={l} value={l}>
                    {languageName(l)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {t("manage_lang_base_hint")}
            </p>
          </div>
          <fieldset className="space-y-1.5">
            <legend className="text-sm font-medium">
              {t("manage_lang_extra")}
            </legend>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {CONTENT_LANGUAGES.filter((l) => l !== language).map((l) => (
                <label key={l} className="flex items-center gap-1.5 text-sm">
                  <input
                    type="checkbox"
                    checked={languages.includes(l)}
                    onChange={(e) =>
                      setLanguages((ls) =>
                        e.target.checked
                          ? [...ls, l]
                          : ls.filter((x) => x !== l),
                      )
                    }
                  />
                  <span lang={l}>{languageName(l)}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {t("manage_lang_extra_hint")}
            </p>
          </fieldset>
          {extra.map((l) => (
            <LangTextsEditor
              key={l}
              c={c}
              lang={l}
              value={translations[l] ?? {}}
              onChange={(v) => setTranslations((tr) => ({ ...tr, [l]: v }))}
            />
          ))}
          <Button type="submit" disabled={save.isPending}>
            {t("manage_save")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
