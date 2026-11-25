import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Plus, Trash2 } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ContentLangTabs, OriginalText } from "~/components/ContentLangTabs";
import { PhotoUploader } from "~/components/PhotoUploader";
import { EditLicenseNote } from "~/components/SiteFooter";
import { Button } from "~/components/ui/button";
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
import { type ContentLang, MAX_LINKS_PER_PLACE } from "~/lib/constants";
import { attributeIssues, visibleFields } from "~/lib/fields";
import { useMapPage } from "~/lib/map-page";
import { stableJson } from "~/lib/overrides";
import {
  type Attributes,
  type FieldDef,
  type OverrideTranslations,
  type PlaceDraft,
  type PlaceTranslations,
  placeDraftSchema,
} from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const langsOf = (...ts: object[]): ContentLang[] =>
  [...new Set(ts.flatMap((t) => Object.keys(t)))] as ContentLang[];

/** `t` with each language's translated field values taken from `from`. */
const withFieldTranslations = (
  t: PlaceTranslations,
  from: PlaceTranslations,
): PlaceTranslations =>
  Object.fromEntries(
    langsOf(t, from).flatMap((lang) => {
      const { attributes: _, ...texts } = t[lang] ?? {};
      const attributes = from[lang]?.attributes;
      const entry = { ...texts, ...(attributes ? { attributes } : {}) };
      return Object.keys(entry).length > 0 ? [[lang, entry]] : [];
    }),
  );

/** Only the translated values of the fields `keys` names. */
const fieldTranslations = (
  t: PlaceTranslations,
  keys: Set<string>,
): OverrideTranslations =>
  Object.fromEntries(
    langsOf(t).flatMap((lang) => {
      const kept = Object.entries(t[lang]?.attributes ?? {}).filter(([k]) =>
        keys.has(k),
      );
      return kept.length > 0
        ? [[lang, { attributes: Object.fromEntries(kept) }]]
        : [];
    }),
  );

const AREA_FIELDS = [
  "municipality",
  "borough",
  "neighbourhood",
  "subNeighbourhood",
] as const;
const TEXT_FIELDS = ["address", ...AREA_FIELDS] as const;
type TextField = (typeof TEXT_FIELDS)[number];

/** Custom-field inputs are edited as strings ("" = empty). */
type FormState = Omit<PlaceDraft, "lat" | "lng" | "attributes" | TextField> &
  Record<TextField, string> & { attributes: Record<string, string> };

/** Select value standing in for "no value" (Radix Select disallows ""). */
const NONE = "__none";

const attributesToForm = (
  defs: FieldDef[],
  a: Attributes | undefined,
): Record<string, string> =>
  Object.fromEntries(
    defs.map((d) => [d.key, a?.[d.key] === undefined ? "" : String(a[d.key])]),
  );

/** Form strings → typed values; unparseable numbers stay strings so validation reports them. */
const attributesFromForm = (
  defs: FieldDef[],
  form: Record<string, string>,
): Attributes =>
  Object.fromEntries(
    defs.flatMap((d): [string, Attributes[string]][] => {
      const raw = (form[d.key] ?? "").trim();
      if (raw === "") return [];
      if (d.type === "number")
        return [[d.key, Number.isFinite(Number(raw)) ? Number(raw) : raw]];
      if (d.type === "boolean") return [[d.key, raw === "true"]];
      return [[d.key, raw]];
    }),
  );

const toForm = (d: PlaceDraft, defs: FieldDef[]): FormState => ({
  ...d,
  address: d.address ?? "",
  municipality: d.municipality ?? "",
  borough: d.borough ?? "",
  neighbourhood: d.neighbourhood ?? "",
  subNeighbourhood: d.subNeighbourhood ?? "",
  attributes: attributesToForm(defs, d.attributes),
});

const emptyForm = (city: string, defs: FieldDef[]): FormState => ({
  title: "",
  summary: "",
  body: "",
  category: "",
  address: "",
  municipality: city,
  borough: "",
  neighbourhood: "",
  subNeighbourhood: "",
  links: [],
  photoIds: [],
  attributes: attributesToForm(defs, {}),
  translations: {},
});

const TRANSLATED_TEXT = ["title", "summary", "body"] as const;
type TranslatedText = (typeof TRANSLATED_TEXT)[number];

const AttributeInput = ({
  def,
  value,
  onChange,
}: {
  def: FieldDef;
  value: string;
  onChange: (v: string) => void;
}) => {
  const { t } = useTranslation();
  const id = `attr-${def.key}`;
  if (def.type === "select" || def.type === "boolean") {
    const options =
      def.type === "boolean"
        ? [
            { value: "true", label: t("value_yes") },
            { value: "false", label: t("value_no") },
          ]
        : (def.options ?? []).map((o) => ({ value: o, label: o }));
    return (
      <Select
        value={value === "" ? NONE : value}
        onValueChange={(v) => onChange(v === NONE ? "" : v)}
      >
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={NONE}>—</SelectItem>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
  if (def.type === "longtext") {
    return (
      <Textarea
        id={id}
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  return (
    <Input
      id={id}
      value={value}
      inputMode={def.type === "number" ? "decimal" : undefined}
      type={def.type === "url" ? "url" : "text"}
      placeholder={def.type === "url" ? "https://" : undefined}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Field = ({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label htmlFor={id}>{label}</Label>
    {children}
    {error ? (
      <p className="text-xs text-destructive">{error}</p>
    ) : hint ? (
      <p className="text-xs text-muted-foreground">{hint}</p>
    ) : null}
  </div>
);

export const PlaceForm = ({
  initial,
  placeId,
  viewValues,
  onDone,
}: {
  /** Current place state when editing; null when proposing a new place. */
  initial: PlaceDraft | null;
  placeId?: string;
  /**
   * Editing on a view map: `initial` shows the view's values, and changes
   * to fields and category become the view's own (`base`: the home
   * place's values of those).
   */
  viewValues?: {
    collectionId: string;
    base: {
      attributes: Attributes;
      category: string;
      translations: PlaceTranslations;
    };
  };
  onDone: (result: {
    status: "approved" | "pending";
    placeId: string | null;
  }) => void;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { view, draft, setDraft, setPicking, baseLang, translateTo } =
    useMapPage();
  // Start in the language the reader is viewing, so "translate" lands there.
  const [editLang, setEditLang] = useState<ContentLang>(
    translateTo ?? baseLang,
  );
  const translating = editLang !== baseLang;
  // A new place added from a view lives on its source: no view-own fields.
  const ownKeys = new Set(
    view.collection.view && !placeId
      ? view.collection.ownFields.map((f) => f.key)
      : [],
  );
  const allDefs = view.collection.fields.filter((f) => !ownKeys.has(f.key));
  const defs = visibleFields(allDefs);
  // Values of hidden fields aren't editable here; pass them through as-is.
  const hiddenValues = Object.fromEntries(
    allDefs
      .filter((d) => d.hidden && initial?.attributes?.[d.key] !== undefined)
      .map((d) => [d.key, initial?.attributes?.[d.key] ?? ""]),
  );
  const [form, setForm] = useState<FormState>(
    initial ? toForm(initial, defs) : emptyForm(view.collection.city, defs),
  );
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));
  /** Title/summary/body in the language being edited. */
  const textOf = (key: TranslatedText) =>
    translating ? (form.translations[editLang]?.[key] ?? "") : form[key];
  const setText = (key: TranslatedText, value: string) =>
    translating
      ? setForm((f) => ({
          ...f,
          translations: {
            ...f.translations,
            [editLang]: { ...f.translations[editLang], [key]: value },
          },
        }))
      : set(key, value);
  const attrOf = (key: string) =>
    translating
      ? (form.translations[editLang]?.attributes?.[key] ?? "")
      : (form.attributes[key] ?? "");
  const setAttr = (key: string, value: string) =>
    translating
      ? setForm((f) => ({
          ...f,
          translations: {
            ...f.translations,
            [editLang]: {
              ...f.translations[editLang],
              attributes: {
                ...f.translations[editLang]?.attributes,
                [key]: value,
              },
            },
          },
        }))
      : set("attributes", { ...form.attributes, [key]: value });
  // On a view, translated field values are the view's own (an override).
  const shownDefs = translating
    ? defs.filter((d) => d.type === "text" || d.type === "longtext")
    : defs;
  const textKeys = new Set(
    allDefs
      .filter((d) => d.type === "text" || d.type === "longtext")
      .map((d) => d.key),
  );

  // Turn on pin-picking on the map while this form is open.
  useEffect(() => {
    setPicking(true);
    setDraft(initial ? { lat: initial.lat, lng: initial.lng } : null);
    return () => {
      setPicking(false);
      setDraft(null);
    };
  }, [initial, setDraft, setPicking]);

  const finish = async (res: {
    status: "approved" | "pending";
    placeId: string | null;
  }) => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: trpc.place.pathKey() }),
      queryClient.invalidateQueries({
        queryKey: trpc.collection.pathKey(),
      }),
      queryClient.invalidateQueries({ queryKey: trpc.proposal.pathKey() }),
    ]);
    toast.success(
      res.status === "approved"
        ? t("form_published")
        : t("form_sent_for_review"),
    );
    onDone(res);
  };
  const submit = useMutation(
    trpc.proposal.create.mutationOptions({
      onSuccess: finish,
      onError: (err) => toast.error(err.message),
    }),
  );
  // On a view the two writes are awaited in turn (see submitOnView).
  const submitHome = useMutation(trpc.proposal.create.mutationOptions());
  const submitOverride = useMutation(
    trpc.proposal.createOverride.mutationOptions(),
  );
  const pending =
    submit.isPending || submitHome.isPending || submitOverride.isPending;

  /**
   * On a view map: fields and category become the view's own values (an
   * override proposal on the view); everything else edits the home place.
   * Each is only sent when it changed.
   */
  const submitOnView = async (
    on: NonNullable<typeof viewValues>,
    id: string,
    parsed: PlaceDraft,
    note: string | null,
  ) => {
    const before = initial ? placeDraftSchema.safeParse(initial) : null;
    const homePart = (d: PlaceDraft) =>
      stableJson({
        ...d,
        attributes: on.base.attributes,
        category: "",
        translations: withFieldTranslations(d.translations, {}),
      });
    const homeChanged =
      !before?.success || homePart(before.data) !== homePart(parsed);
    const viewTranslations = (d: PlaceDraft) =>
      fieldTranslations(d.translations, textKeys);
    const valuesChanged =
      !before?.success ||
      before.data.category !== parsed.category ||
      stableJson(before.data.attributes) !== stableJson(parsed.attributes) ||
      stableJson(viewTranslations(before.data)) !==
        stableJson(viewTranslations(parsed));
    try {
      const results = [
        ...(valuesChanged
          ? [
              await submitOverride.mutateAsync({
                collectionId: on.collectionId,
                placeId: id,
                reset: true,
                category: parsed.category,
                // Every field: an empty one means "no value on this map".
                attributes: Object.fromEntries(
                  allDefs.map((d) => [d.key, parsed.attributes[d.key] ?? null]),
                ),
                // Translated field values as the view shows them (those
                // equal to the home place's are not stored).
                translations: viewTranslations(parsed),
                note,
              }),
            ]
          : []),
        ...(homeChanged || !valuesChanged
          ? [
              await submitHome.mutateAsync({
                kind: "edit",
                placeId: id,
                draft: {
                  ...parsed,
                  attributes: on.base.attributes,
                  category: on.base.category,
                  translations: withFieldTranslations(
                    parsed.translations,
                    on.base.translations,
                  ),
                },
                note,
              }),
            ]
          : []),
      ];
      await finish({
        status: results.some((r) => r.status === "pending")
          ? "pending"
          : "approved",
        placeId: id,
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : String(err));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) {
      setErrors({ location: t("form_error_location") });
      return;
    }
    const attributes = {
      ...hiddenValues,
      ...attributesFromForm(defs, form.attributes),
    };
    const parsed = placeDraftSchema.safeParse({
      ...form,
      ...Object.fromEntries(
        TEXT_FIELDS.map((k) => [k, form[k].trim() || null]),
      ),
      lat: draft.lat,
      lng: draft.lng,
      attributes,
    });
    const attrErrors = attributeIssues(allDefs, attributes).map((i) => [
      `attr:${i.key}`,
      t("form_error_attribute", { message: i.message }),
    ]);
    if (!parsed.success || attrErrors.length > 0) {
      // Errors are about the original texts and shared fields.
      setEditLang(baseLang);
      setErrors(
        Object.fromEntries([
          ...(parsed.success ? [] : parsed.error.issues).map((i) => [
            String(i.path[0]),
            t(`form_error_${String(i.path[0])}`),
          ]),
          ...attrErrors,
        ]),
      );
      return;
    }
    setErrors({});
    const trimmedNote = note.trim() || null;
    if (placeId && viewValues) {
      void submitOnView(viewValues, placeId, parsed.data, trimmedNote);
      return;
    }
    submit.mutate(
      placeId
        ? { kind: "edit", placeId, draft: parsed.data, note: trimmedNote }
        : {
            kind: "create",
            collectionId: view.collection.id,
            draft: parsed.data,
            note: trimmedNote,
          },
    );
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div
        className={`flex items-start gap-3 rounded-lg border p-3 text-sm ${
          errors.location
            ? "border-destructive"
            : draft
              ? "bg-accent/50"
              : "border-dashed"
        }`}
      >
        <MapPin className="mt-0.5 size-4 shrink-0 text-brick" />
        <div>
          <div className="font-medium">
            {draft ? t("form_location_set") : t("form_location_pick")}
          </div>
          <div className="text-xs text-muted-foreground">
            {draft
              ? `${draft.lat.toFixed(5)}, ${draft.lng.toFixed(5)} · ${t("form_location_adjust")}`
              : t("form_location_hint")}
          </div>
          {errors.location && (
            <p className="mt-1 text-xs text-destructive">{errors.location}</p>
          )}
        </div>
      </div>

      <ContentLangTabs value={editLang} onChange={setEditLang} />

      <Field id="title" label={t("form_title")} error={errors.title}>
        {translating && <OriginalText text={form.title} lang={baseLang} />}
        <Input
          id="title"
          lang={editLang}
          value={textOf("title")}
          onChange={(e) => setText("title", e.target.value)}
          placeholder={t("form_title_placeholder")}
          maxLength={100}
        />
      </Field>

      {!translating && (
        <Field id="category" label={t("form_category")} error={errors.category}>
          <Select
            value={form.category}
            onValueChange={(v) => set("category", v)}
          >
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder={t("form_category_placeholder")} />
            </SelectTrigger>
            <SelectContent>
              {view.collection.categories.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: c.color }}
                  />
                  {c.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      )}

      <Field
        id="summary"
        label={t("form_summary")}
        hint={t("form_summary_hint", { n: 280 - textOf("summary").length })}
        error={errors.summary}
      >
        {translating && <OriginalText text={form.summary} lang={baseLang} />}
        <Textarea
          id="summary"
          lang={editLang}
          rows={2}
          value={textOf("summary")}
          onChange={(e) => setText("summary", e.target.value)}
          maxLength={280}
        />
      </Field>

      <Field
        id="body"
        label={t("form_body")}
        hint={t("form_body_hint")}
        error={errors.body}
      >
        {translating && <OriginalText text={form.body} lang={baseLang} />}
        <Textarea
          id="body"
          lang={editLang}
          rows={6}
          value={textOf("body")}
          onChange={(e) => setText("body", e.target.value)}
        />
      </Field>

      {!translating && (
        <>
          <Field id="address" label={t("form_address")} error={errors.address}>
            <Input
              id="address"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              placeholder={t("form_address_placeholder")}
            />
          </Field>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AREA_FIELDS.map((k) => (
              <Field key={k} id={k} label={t(`form_${k}`)} error={errors[k]}>
                <Input
                  id={k}
                  value={form[k]}
                  onChange={(e) => set(k, e.target.value)}
                  placeholder={t(`form_${k}_placeholder`)}
                />
              </Field>
            ))}
          </div>
        </>
      )}

      {shownDefs.length > 0 && (
        <fieldset className="space-y-3 rounded-lg border p-3">
          <legend className="px-1 text-sm font-medium">
            {t("form_details")}
          </legend>
          {shownDefs.map((d) => (
            <Field
              key={d.key}
              id={`attr-${d.key}`}
              label={d.required && !translating ? `${d.label} *` : d.label}
              hint={d.help}
              error={errors[`attr:${d.key}`]}
            >
              {translating && (
                <OriginalText
                  text={form.attributes[d.key] ?? ""}
                  lang={baseLang}
                />
              )}
              <AttributeInput
                def={d}
                value={attrOf(d.key)}
                onChange={(v) => setAttr(d.key, v)}
              />
            </Field>
          ))}
        </fieldset>
      )}

      {!translating && (
        <>
          <div className="space-y-1.5">
            <Label>{t("form_photos")}</Label>
            <PhotoUploader
              collectionId={view.collection.id}
              value={form.photoIds}
              onChange={(ids) => set("photoIds", ids)}
            />
          </div>

          <div className="space-y-2">
            <Label>{t("form_links")}</Label>
            {form.links.map((link, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: rows have no identity beyond position
              <div key={i} className="flex gap-2">
                <Input
                  aria-label={t("form_link_label")}
                  placeholder={t("form_link_label")}
                  value={link.label}
                  className="w-1/3"
                  onChange={(e) =>
                    set(
                      "links",
                      form.links.map((l, j) =>
                        j === i ? { ...l, label: e.target.value } : l,
                      ),
                    )
                  }
                />
                <Input
                  aria-label={t("form_link_url")}
                  placeholder="https://"
                  value={link.url}
                  onChange={(e) =>
                    set(
                      "links",
                      form.links.map((l, j) =>
                        j === i ? { ...l, url: e.target.value } : l,
                      ),
                    )
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={t("form_link_remove")}
                  onClick={() =>
                    set(
                      "links",
                      form.links.filter((_, j) => j !== i),
                    )
                  }
                >
                  <Trash2 />
                </Button>
              </div>
            ))}
            {errors.links && (
              <p className="text-xs text-destructive">{errors.links}</p>
            )}
            {form.links.length < MAX_LINKS_PER_PLACE && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  set("links", [...form.links, { label: "", url: "" }])
                }
              >
                <Plus /> {t("form_link_add")}
              </Button>
            )}
          </div>
        </>
      )}

      <Field
        id="note"
        label={t("form_note")}
        hint={view.can.review ? t("form_note_hint_mod") : t("form_note_hint")}
      >
        <Textarea
          id="note"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Field>

      <Button type="submit" className="w-full" disabled={pending}>
        {view.can.review
          ? t("form_submit_publish")
          : placeId
            ? t("form_submit_edit")
            : t("form_submit_new")}
      </Button>
      <EditLicenseNote />
    </form>
  );
};
