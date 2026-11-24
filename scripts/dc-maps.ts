/**
 * Map commands for the `dc` CLI (see scripts/dc.ts): create a map, export
 * its configuration (to keep in the repo or to start another map from),
 * manage its members, and make it its city's own map.
 */

type Obj = Record<string, unknown>;

export interface MapDeps {
  query: (path: string, input?: unknown) => Promise<unknown>;
  mutate: (path: string, input: unknown) => Promise<unknown>;
  readJson: (arg: string) => Obj;
  need: (v: string | undefined, what: string) => string;
  fail: (message: string, code: string) => never;
}

/** What `map-create` accepts and `map-export` prints. */
const CONFIG_KEYS = [
  "slug",
  "title",
  "tagline",
  "description",
  "city",
  "cityDefault",
  "centerLat",
  "centerLng",
  "zoom",
  "contributionPolicy",
  "categories",
  "fields",
  "language",
  "languages",
  "translations",
] as const;

/** Copied by `map-create --from`: the map's shape, not its identity. */
const SHAPE_KEYS = [
  "zoom",
  "contributionPolicy",
  "categories",
  "fields",
  "language",
  "languages",
] as const;

const MEMBER_ROLES = ["admin", "moderator", "contributor", "banned"];

type Collection = Obj & { id: string; slug: string; city: string };

/**
 * Category and field labels in other languages carry over to a copy; the
 * title, tagline and description belong to the original map.
 */
const shapeTranslations = (translations: unknown): Obj =>
  Object.fromEntries(
    Object.entries((translations ?? {}) as Record<string, Obj>)
      .map(([lang, t]) => [
        lang,
        Object.fromEntries(
          (["categories", "fields"] as const)
            .filter((k) => t[k] !== undefined)
            .map((k) => [k, t[k]]),
        ),
      ])
      .filter(([, t]) => Object.keys(t as Obj).length > 0),
  );

const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** `patch` merged into `base` key by key, at every depth; null deletes. */
const deepMerge = (base: unknown, patch: unknown): unknown => {
  if (!isObj(base) || !isObj(patch)) return patch;
  const keys = [...new Set([...Object.keys(base), ...Object.keys(patch)])];
  return Object.fromEntries(
    keys.flatMap((k) => {
      if (!(k in patch)) return [[k, base[k]]];
      if (patch[k] === null) return [];
      return [[k, deepMerge(base[k], patch[k])]];
    }),
  );
};

export const makeMapCommands = (deps: MapDeps) => {
  const { query, mutate, readJson, need, fail } = deps;

  const bySlug = async (slug: string) =>
    (
      (await query("collection.bySlug", { slug })) as {
        collection: Collection;
      }
    ).collection;

  const exportOf = (c: Collection) =>
    Object.fromEntries(CONFIG_KEYS.map((k) => [k, c[k] ?? null]));

  return {
    /** A new map from a config object (super admins). */
    "map-create": async (
      [arg]: string[],
      flags: Record<string, string>,
    ): Promise<unknown> => {
      const input = readJson(need(arg, "<map.json>"));
      const bad = Object.keys(input).filter(
        (k) => !(CONFIG_KEYS as readonly string[]).includes(k),
      );
      if (bad.length)
        fail(
          `Unknown keys: ${bad.join(", ")} (expected ${CONFIG_KEYS.join(", ")})`,
          "BAD_JSON",
        );
      const from = flags.from ? await bySlug(flags.from) : null;
      const base: Obj = from
        ? {
            ...Object.fromEntries(SHAPE_KEYS.map((k) => [k, from[k]])),
            translations: shapeTranslations(from.translations),
          }
        : {};
      const merged: Obj = {
        tagline: null,
        description: null,
        zoom: 13,
        contributionPolicy: "open",
        fields: [],
        ...base,
        ...input,
        // With --from, the file's labels add to the copied ones per key.
        ...(from && input.translations !== undefined
          ? { translations: deepMerge(base.translations, input.translations) }
          : {}),
      };
      const missing = [
        "slug",
        "title",
        "city",
        "centerLat",
        "centerLng",
        "categories",
      ].filter((k) => merged[k] === undefined || merged[k] === null);
      if (missing.length)
        fail(
          `Missing: ${missing.join(", ")}${from ? "" : " (or pass --from <slug> to copy categories and fields)"}`,
          "BAD_JSON",
        );
      const { cityDefault, ...settings } = merged;
      const created = (await mutate("collection.create", settings)) as {
        id: string;
        slug: string;
        citySlug: string;
      };
      if (cityDefault === true)
        await mutate("collection.setCityDefault", {
          collectionId: created.id,
          on: true,
        });
      return {
        ...created,
        path: `/${created.citySlug}/${created.slug}`,
        copiedFrom: from?.slug ?? null,
        map: exportOf(await bySlug(created.slug)),
      };
    },

    /** A map's full configuration, in the shape `map-create` accepts. */
    "map-export": async ([slug]: string[]): Promise<unknown> =>
      exportOf(await bySlug(need(slug, "<slug>"))),

    /** Make a map its city's own map, or stop it being one (super admins). */
    "city-default": async ([slug, onOff]: string[]): Promise<unknown> => {
      const value = need(onOff, "on|off");
      if (value !== "on" && value !== "off")
        fail('Expected "on" or "off"', "USAGE");
      const c = await bySlug(need(slug, "<slug>"));
      await mutate("collection.setCityDefault", {
        collectionId: c.id,
        on: value === "on",
      });
      const maps = (await query("collection.list")) as Obj[];
      return {
        ok: true,
        city: c.city,
        maps: maps
          .filter((m) => m.city === c.city)
          .map((m) => ({ slug: m.slug, cityDefault: m.cityDefault })),
      };
    },

    /**
     * Make a map a view of another map's places, or a home map again
     * ("none"). `source` may be a slug or an id.
     */
    "map-view": async ([slug, arg]: string[]): Promise<unknown> => {
      const c = await bySlug(need(slug, "<slug>"));
      const given = need(arg, "<view.json|->|none>");
      if (given === "none" || given === "null") {
        await mutate("collection.setView", { collectionId: c.id, view: null });
        return { ok: true, slug: c.slug, view: null };
      }
      const input = readJson(given);
      const keys = ["source", "list", "where", "detail", "sourceFields"];
      const bad = Object.keys(input).filter((k) => !keys.includes(k));
      if (bad.length)
        fail(
          `Unknown keys: ${bad.join(", ")} (expected ${keys.join(", ")})`,
          "BAD_JSON",
        );
      if (
        input.sourceFields !== undefined &&
        !(
          Array.isArray(input.sourceFields) &&
          input.sourceFields.every((k: unknown) => typeof k === "string")
        )
      )
        fail('"sourceFields" must be an array of field keys', "BAD_JSON");
      if (typeof input.source !== "string" || !input.source)
        fail('"source" must be a map slug or id', "BAD_JSON");
      const maps = (await query("collection.list")) as Collection[];
      const source = maps.find(
        (m) => m.slug === input.source || m.id === input.source,
      );
      if (!source) fail(`No map "${String(input.source)}"`, "NOT_FOUND");
      const view = { ...input, source: source?.id };
      await mutate("collection.setView", { collectionId: c.id, view });
      const shown = (await query("place.list", {
        collectionId: c.id,
      })) as Obj[];
      return {
        ok: true,
        slug: c.slug,
        view: { ...view, sourceSlug: source?.slug },
        places: shown.length,
      };
    },

    /** People with a role on the map (map admins). */
    members: async ([slug]: string[]): Promise<unknown> => {
      const c = await bySlug(need(slug, "<slug>"));
      return query("collection.members", { collectionId: c.id });
    },

    /** Give, change or take away (none) someone's role on the map. */
    member: async ([slug, email, role]: string[]): Promise<unknown> => {
      const r = need(role, `<${MEMBER_ROLES.join("|")}|none>`);
      if (r !== "none" && !MEMBER_ROLES.includes(r))
        fail(`Role must be one of ${MEMBER_ROLES.join(", ")} or none`, "USAGE");
      const c = await bySlug(need(slug, "<slug>"));
      await mutate("collection.setMember", {
        collectionId: c.id,
        email: need(email, "<email>"),
        role: r === "none" ? null : r,
      });
      return query("collection.members", { collectionId: c.id });
    },
  };
};

export const MAP_HELP = `
MAPS
  dc map-create <map.json|-> [--from <slug>]
                                           super admins: a new map. Keys: slug, title,
                                           city, centerLat, centerLng, categories
                                           (required), tagline, description, zoom (13),
                                           contributionPolicy (open), fields, language,
                                           languages, translations, cityDefault.
                                           --from copies another map's categories,
                                           fields, languages (with their category and
                                           field labels), zoom and policy; keys given
                                           in the file win, except "translations",
                                           which merge per key (null deletes one)
  dc map-export <slug>                     the map's whole configuration in the
                                           map-create shape (keep it in scripts/data,
                                           or change slug/title/city, drop translated
                                           titles, and create a copy)
  dc city-default <slug> on|off            super admins: the city's own map (its page
                                           lists it first; one per city)
  dc map-view <slug> <view.json|-|none>    map admins: make the map a view of another
                                           map's places: {"source": "<slug>", "where":
                                           {"borough": ["Centrum"]}, "detail": "full"},
                                           or a list view: {"source": "<slug>", "list":
                                           true} (see LIST VIEWS in \`dc help\` and
                                           "mapView" in \`dc schema\`). "sourceFields":
                                           [key, …] shows only those of the source's
                                           fields ([] none; left out: all). The map must
                                           have no places of its own; its title, texts,
                                           centre and zoom stay its own, categories and
                                           fields are the source's. "none" makes it a
                                           home map again. Prints how many places it shows
  dc members <slug>                        map admins: who has a role on the map
  dc member <slug> <email> <admin|moderator|contributor|banned|none>
                                           give, change or remove a role (they must have
                                           signed in once); only super admins appoint
                                           admins
  Change an existing map with \`dc settings\`, \`dc fields\` and \`dc languages\`.
`;
