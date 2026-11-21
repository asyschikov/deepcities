#!/usr/bin/env node
/**
 * dc — Deep Cities command-line client. Built for scripts and LLM agents:
 * every command prints one JSON document to stdout; errors print
 * {"error": {...}} to stderr and exit non-zero. Run `pnpm dc help`.
 *
 * Talks to the public tRPC API with a personal API token, so it has exactly
 * the permissions of the token's owner (contributor edits go to review;
 * moderator+ edits publish immediately).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { DOC_HELP, makeDocCommands } from "./dc-docs.ts";

const DEFAULT_URL = "https://deep-cities.bookverse-app.workers.dev";
const CONFIG_PATH = join(homedir(), ".config", "deep-cities", "config.json");
const MAX_PHOTO_BYTES = 4 * 1024 * 1024;
const MAX_PHOTO_EDGE = 1600;

const HELP = `dc — Deep Cities CLI. JSON in, JSON out.

SETUP
  Create a token at <site>/me ("API tokens"), then:
    dc login <token> [--url <site>]       saves to ${CONFIG_PATH}
  Or set env DC_TOKEN (and optionally DC_URL; default ${DEFAULT_URL}).

READ
  dc whoami                                you, your site role
  dc maps                                  all maps (slug, title, place count)
  dc map <slug>                            settings, categories, custom place fields
                                           ("fields"), your role + capabilities
  dc places <slug> [--borough X] [--neighbourhood X] [--sub-neighbourhood X]
                   [--category KEY] [--field key=value]... [--q TEXT]
                                           published places (compact, with attributes)
  dc place <placeId>                       full place: fields, photos (+credits), history

WRITE  (contributors: goes to review; moderators/admins: published immediately)
  dc create <slug> <draft>  [--note TEXT]  new place
  dc update <placeId> <patch> [--note TEXT]
                                           patch is merged onto the current place;
                                           arrays (links, photoIds) replace wholesale;
                                           "attributes" merge per key (null deletes one);
                                           "translations" merge per language and field
  dc archive <placeId> --note TEXT         remove from the map (kept in history)
  dc import <slug> <file.json|-> [--note TEXT] [--dry-run] [--upsert]
                                           bulk create from a JSON array of drafts
                                           (each may carry "note"); titles already on
                                           the map are skipped, or with --upsert updated
                                           like \`dc update\` ("photos" ignored if the place
                                           already has some); keeps going past failures
  dc photo <slug> <source> [--credit TEXT] [--license TEXT] [--source-url URL]
                                           upload one photo, prints {"id"}; use the id
                                           in photoIds. source = local file path,
                                           https URL, or commons:File:Name.jpg
                                           (Commons: credit/license filled in automatically)

MAP SCHEMA (map admins)
  dc fields <slug> <defs.json|->           replace the map's custom place fields with a
                                           JSON array of field definitions (see \`dc schema\`);
                                           existing keys must stay (hide, don't delete)
  dc settings <slug> <json|->              change map settings: title, tagline,
                                           description, city, centerLat, centerLng, zoom,
                                           contributionPolicy, categories (full array of
                                           {key, label, color}; keys used by places stay);
                                           keys left out are kept
  dc languages <slug> <json|->             content languages: {"language": "en",
                                           "languages": ["nl"], "translations": {"nl":
                                           {title, tagline, description, categories:
                                           {key: label}, fields: {key: {label, help,
                                           options: {value: label}}}}}}; translations
                                           merge per language/field like place patches

AREAS  (a city's official divisions, shared by all its maps)
  dc areas <city>                          the hierarchy: [{id, level, code, name,
                                           parentId, bbox}] (levels: municipality,
                                           borough, neighbourhood, subNeighbourhood)
  dc areas-import <file.json|->            super admins: replace a city's areas from
                                           {"city", "source", "areas": [{level, code,
                                           name, parent: {level, code} | null,
                                           geometry: GeoJSON (Multi)Polygon | null}]};
                                           Amsterdam: node scripts/fetch-amsterdam-areas.ts

ROUTES  (same review rules as places)
  dc routes <slug>                         published routes (stats, stop names)
  dc route <routeId>                       full route: stops, legs (paths), history
  dc route-create <slug> <route> [--note TEXT]
                                           new route; see "route" in \`dc schema\`
  dc route-update <routeId> <patch> [--note TEXT]
                                           merged onto the current route; "stops" and
                                           "legs" replace wholesale. Legs whose stops or
                                           waypoints changed are redrawn
  dc route-archive <routeId> --note TEXT   remove a route from the map

REVIEW (moderators+)
  dc queue <slug> [--status pending|approved|rejected|withdrawn]
  dc approve <proposalId> [--note TEXT]
  dc reject <proposalId> --note TEXT

  dc schema                                draft + field-definition reference
  dc help

<draft>/<patch> is inline JSON ('{"title":...}'), a path to a .json file, or - for stdin.
A draft or patch may also carry "photos": [<source> | {"source", "credit", "license",
"sourceUrl"}] — each is uploaded and appended to photoIds.
`;

const SCHEMA = {
  draft: {
    title: "string, 2–100 chars (required)",
    summary: "string, 10–280 chars: one or two sentences (required)",
    body: 'markdown string, ≤10000 chars (default "")',
    category: "category key from `dc map <slug>` (required)",
    lat: "number, WGS84 (required)",
    lng: "number, WGS84 (required)",
    address: "string ≤200 or null",
    municipality: 'string ≤80 or null, e.g. "Amsterdam"',
    borough: 'string ≤80 or null, e.g. "West" (Amsterdam stadsdeel)',
    neighbourhood: 'string ≤80 or null, e.g. "Bos en Lommer"',
    subNeighbourhood:
      'string ≤80 or null, e.g. "Landlust" (Amsterdam wijk); areas go coarse → fine',
    links: "array ≤6 of {label ≤60, url http(s)}",
    photoIds: "array ≤8 of photo ids (from `dc photo`), first is the cover",
    attributes:
      'object of the map\'s custom fields, { key: value } (default {}); keys and types come from `dc map <slug>` → collection.fields. Omit or "" for no value.',
    translations:
      'optional, texts in the map\'s other content languages (`dc map` → collection.languages): {"nl": {"title", "summary", "body", "attributes": {<text/longtext field key>: "…"}}}. Every field is optional; missing ones show the original. The map\'s own language (collection.language) is the untranslated draft itself.',
    photos: "CLI-only convenience, see `dc help`",
  },
  fieldDefinition: {
    key: "lowercase snake_case, ≤32, unique; values are stored under it, so never rename",
    label: "string ≤40, shown to people",
    type: "text (≤200) | longtext (≤4000) | number | url (http/s) | select | boolean",
    options:
      'select only: array of allowed strings, e.g. ["Rijksmonument", "Gemeentelijk monument"]',
    required: "optional boolean",
    help: "optional string ≤200, shown under the input",
    hidden:
      "optional boolean. Fields can't be deleted (the server rejects a list missing an existing key); set hidden: true to retire one, its values are kept",
  },
  route: {
    mode: '"walk" or "bike": the route\'s main mode — what it is, shown and filtered on. Defaults to "bike" if any leg is ridden, else "walk". Legs may still use other transport (a ferry crossing)',
    loop: "true if the route ends where it starts. Defaults to true when the last stop is the first place (or within 150 m of it); a loop's finish is counted once and the map can filter on it",
    title: "string, 2–100 chars (required)",
    summary: "string, 10–280 chars (required)",
    body: "markdown intro, ≤10000 chars",
    stops:
      'array of 2–30, in order. Each is a place on the map: {"place": "<placeId or exact title>", "narration": "markdown, what to look at here"}, or (discouraged; prefer adding a place) an ad-hoc point: {"name", "lat", "lng", "narration"}',
    legs: 'optional array, one per gap between stops (missing ones default to the route\'s mode): {"mode": "walk|bike|tram|bus|metro|ferry|train", "directions": "how to get to the next stop", "via": [[lng, lat] | {"lat","lng"}, …] waypoints the path must pass, "snap": true to follow streets (default for walk/bike)}. Paths are computed by the CLI (street router for snapped walk/bike legs, straight lines otherwise); pass "path": [[lng,lat],…] to set one explicitly',
    photos: "as for places",
    photoIds: "array ≤8 of photo ids",
    translations:
      'optional {"nl": {"title", "summary", "body"}}. Stops take {"translations": {"nl": {"narration"}}} and legs {"translations": {"nl": {"directions"}}}',
  },
  photoSources: [
    "./path/to/file.jpg (jpeg/png/webp; resized with macOS `sips` if large)",
    "https://example.org/image.jpg",
    "commons:File:Some_name.jpg",
    "https://commons.wikimedia.org/wiki/File:Some_name.jpg",
    "http://commons.wikimedia.org/wiki/Special:FilePath/Some_name.jpg (Wikidata P18)",
  ],
};

// ─── tiny helpers ───────────────────────────────────────────────────

type Json = null | boolean | number | string | Json[] | { [k: string]: Json };
type Obj = Record<string, unknown>;

class CliError extends Error {
  readonly code: string;
  constructor(message: string, code = "CLI_ERROR") {
    super(message);
    this.code = code;
  }
}

const out = (value: unknown) =>
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);

/** Every value of flags given more than once (e.g. --field a=1 --field b=2). */
const repeatedFlags = new Map<string, string[]>();

const parseArgs = (argv: string[]) => {
  const positional: string[] = [];
  const flags: Record<string, string> = {};
  const setFlag = (name: string, value: string) => {
    flags[name] = value;
    repeatedFlags.set(name, [...(repeatedFlags.get(name) ?? []), value]);
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i] ?? "";
    if (a.startsWith("--")) {
      const next = argv[i + 1];
      if (next === undefined || next.startsWith("--"))
        setFlag(a.slice(2), "true");
      else {
        setFlag(a.slice(2), next);
        i++;
      }
    } else positional.push(a);
  }
  return { positional, flags };
};

const need = (v: string | undefined, what: string): string => {
  if (!v) throw new CliError(`Missing ${what}. See \`dc help\`.`, "USAGE");
  return v;
};

const readJsonArg = (arg: string): Obj => {
  const text =
    arg === "-"
      ? readFileSync(0, "utf8")
      : arg.trim().startsWith("{")
        ? arg
        : readFileSync(arg, "utf8");
  try {
    const v: unknown = JSON.parse(text);
    if (!v || typeof v !== "object" || Array.isArray(v)) throw new Error();
    return v as Obj;
  } catch {
    throw new CliError("Draft/patch must be a JSON object", "BAD_JSON");
  }
};

// ─── config + transport ─────────────────────────────────────────────

const loadConfig = (): { url: string; token: string | null } => {
  const file = existsSync(CONFIG_PATH)
    ? (JSON.parse(readFileSync(CONFIG_PATH, "utf8")) as {
        url?: string;
        token?: string;
      })
    : {};
  return {
    url: (process.env.DC_URL ?? file.url ?? DEFAULT_URL).replace(/\/$/, ""),
    token: process.env.DC_TOKEN ?? file.token ?? null,
  };
};

const config = loadConfig();

const call = async (
  kind: "query" | "mutation",
  path: string,
  input: unknown,
): Promise<Json> => {
  const headers: Record<string, string> = {
    "content-type": "application/json",
  };
  if (config.token) headers.Authorization = `Bearer ${config.token}`;
  const body = JSON.stringify({ json: input });
  const url = `${config.url}/api/trpc/${path}`;
  const res =
    kind === "query"
      ? await fetch(`${url}?input=${encodeURIComponent(body)}`, { headers })
      : await fetch(url, { method: "POST", headers, body });
  const text = await res.text();
  let parsed: {
    result?: { data?: { json?: Json } };
    error?: { json?: { message?: string; data?: { code?: string } } };
  };
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new CliError(
      `HTTP ${res.status} from ${url}: ${text.slice(0, 200)}`,
      "HTTP",
    );
  }
  if (parsed.error) {
    const e = parsed.error.json;
    throw new CliError(
      e?.message ?? "Request failed",
      e?.data?.code ?? "ERROR",
    );
  }
  return parsed.result?.data?.json ?? null;
};
const query = (path: string, input?: unknown) => call("query", path, input);
const mutate = (path: string, input: unknown) => call("mutation", path, input);

const collectionOf = async (slug: string) => {
  const res = (await query("collection.bySlug", { slug })) as {
    collection: { id: string; categories: { key: string }[] };
    role: string;
    can: Record<string, boolean>;
  };
  return res;
};

// ─── photos ─────────────────────────────────────────────────────────

const sniff = (
  b: Uint8Array,
): "image/jpeg" | "image/png" | "image/webp" | null => {
  if (b[0] === 0xff && b[1] === 0xd8) return "image/jpeg";
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47)
    return "image/png";
  const riff = new TextDecoder().decode(b.subarray(0, 4));
  const webp = new TextDecoder().decode(b.subarray(8, 12));
  return riff === "RIFF" && webp === "WEBP" ? "image/webp" : null;
};

/** Pixel size from the file header (JPEG SOFn, PNG IHDR, WebP VP8/VP8L/VP8X). */
const dimensions = (
  b: Uint8Array,
): { width: number; height: number } | null => {
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const type = sniff(b);
  if (type === "image/png")
    return { width: dv.getUint32(16), height: dv.getUint32(20) };
  if (type === "image/webp") {
    const chunk = new TextDecoder().decode(b.subarray(12, 16));
    if (chunk === "VP8 ")
      return {
        width: dv.getUint16(26, true) & 0x3fff,
        height: dv.getUint16(28, true) & 0x3fff,
      };
    if (chunk === "VP8L") {
      const bits = dv.getUint32(21, true);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    if (chunk === "VP8X") {
      const u24 = (o: number) =>
        (b[o] ?? 0) | ((b[o + 1] ?? 0) << 8) | ((b[o + 2] ?? 0) << 16);
      return { width: u24(24) + 1, height: u24(27) + 1 };
    }
    return null;
  }
  if (type === "image/jpeg") {
    let o = 2;
    while (o + 9 < b.length) {
      if (b[o] !== 0xff) return null;
      const marker = b[o + 1] ?? 0;
      const len = dv.getUint16(o + 2);
      const isSof =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        ![0xc4, 0xc8, 0xcc].includes(marker);
      if (isSof)
        return { height: dv.getUint16(o + 5), width: dv.getUint16(o + 7) };
      o += 2 + len;
    }
  }
  return null;
};

/** Shrink with macOS `sips` when a local image is too big; returns new bytes. */
const shrink = (bytes: Uint8Array): Uint8Array => {
  const dir = join(tmpdir(), `dc-${process.pid}`);
  mkdirSync(dir, { recursive: true });
  const src = join(dir, "in");
  const dst = join(dir, "out.jpg");
  writeFileSync(src, bytes);
  try {
    execFileSync(
      "sips",
      [
        "-Z",
        String(MAX_PHOTO_EDGE),
        "-s",
        "format",
        "jpeg",
        "-s",
        "formatOptions",
        "82",
        src,
        "--out",
        dst,
      ],
      { stdio: "ignore" },
    );
  } catch {
    throw new CliError(
      `Image is over ${MAX_PHOTO_BYTES / 1024 / 1024} MB or ${MAX_PHOTO_EDGE}px and couldn't be resized (needs macOS sips). Resize it first.`,
      "PHOTO_TOO_LARGE",
    );
  }
  return new Uint8Array(readFileSync(dst));
};

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const commonsTitle = (source: string): string | null => {
  if (source.startsWith("commons:")) return source.slice("commons:".length);
  const m = source.match(
    /commons\.wikimedia\.org\/wiki\/(File:[^?#]+|Special:FilePath\/[^?#]+)/,
  );
  if (!m?.[1]) return null;
  const t = decodeURIComponent(m[1]);
  return t.startsWith("Special:FilePath/")
    ? `File:${t.slice("Special:FilePath/".length)}`
    : t;
};

interface PhotoMeta {
  credit?: string;
  license?: string;
  sourceUrl?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * GET with retries on rate limiting (Wikimedia answers 429, or 200 with a
 * plain-text "too many requests"), backing off 2s, 4s, 8s, 16s.
 */
const politeFetch = async (url: string, attempt = 0): Promise<Response> => {
  const res = await fetch(url, {
    // Wikimedia rejects (429) User-Agents without contact info.
    headers: { "User-Agent": `deep-cities-cli/0.1 (${config.url})` },
  });
  const limited =
    res.status === 429 ||
    res.status === 503 ||
    (res.headers.get("content-type")?.startsWith("text/plain") ?? false);
  if (!limited || attempt >= 4) return res;
  await sleep(2000 * 2 ** attempt);
  return politeFetch(url, attempt + 1);
};

/** Resolve a Commons file to a ≤1600px rendition plus attribution. */
const fromCommons = async (title: string) => {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.search = new URLSearchParams({
    action: "query",
    format: "json",
    titles: title.replaceAll("_", " "),
    prop: "imageinfo",
    iiprop: "url|extmetadata|mime",
    iiurlwidth: String(MAX_PHOTO_EDGE),
  }).toString();
  const res = await politeFetch(api.toString());
  const data = (await res.json()) as {
    query?: {
      pages?: Record<
        string,
        {
          imageinfo?: {
            thumburl?: string;
            url: string;
            descriptionurl: string;
            extmetadata?: Record<string, { value: string }>;
          }[];
        }
      >;
    };
  };
  const info = Object.values(data.query?.pages ?? {})[0]?.imageinfo?.[0];
  if (!info)
    throw new CliError(`Commons file not found: ${title}`, "NOT_FOUND");
  const meta = info.extmetadata ?? {};
  const artist = meta.Artist?.value ? stripHtml(meta.Artist.value) : undefined;
  return {
    url: info.thumburl ?? info.url,
    meta: {
      credit: artist ? `${artist} / Wikimedia Commons` : "Wikimedia Commons",
      license: meta.LicenseShortName?.value
        ? stripHtml(meta.LicenseShortName.value)
        : undefined,
      sourceUrl: info.descriptionurl,
    } satisfies PhotoMeta,
  };
};

const fetchBytes = async (url: string): Promise<Uint8Array> => {
  const res = await politeFetch(url);
  if (!res.ok)
    throw new CliError(`Download failed (${res.status}): ${url}`, "DOWNLOAD");
  return new Uint8Array(await res.arrayBuffer());
};

const uploadPhoto = async (
  collectionId: string,
  source: string,
  given: PhotoMeta,
): Promise<{ id: string; width: number; height: number } & PhotoMeta> => {
  const commons = commonsTitle(source);
  let bytes: Uint8Array;
  let meta: PhotoMeta = {};
  if (commons) {
    const c = await fromCommons(commons);
    bytes = await fetchBytes(c.url);
    meta = c.meta;
  } else if (/^https?:\/\//.test(source)) {
    bytes = await fetchBytes(source);
    meta = { sourceUrl: source };
  } else {
    if (!existsSync(source))
      throw new CliError(`No such file: ${source}`, "NOT_FOUND");
    bytes = new Uint8Array(readFileSync(source));
  }
  let dims = dimensions(bytes);
  if (!sniff(bytes) || !dims)
    throw new CliError(`Not a JPEG/PNG/WebP image: ${source}`, "BAD_IMAGE");
  if (
    bytes.length > MAX_PHOTO_BYTES ||
    Math.max(dims.width, dims.height) > 2400
  ) {
    bytes = shrink(bytes);
    dims = dimensions(bytes);
    if (!dims) throw new CliError("Resize failed", "BAD_IMAGE");
  }
  const merged: PhotoMeta = {
    ...meta,
    ...Object.fromEntries(Object.entries(given).filter(([, v]) => v)),
  };
  const res = (await mutate("photo.upload", {
    collectionId,
    base64: Buffer.from(bytes).toString("base64"),
    contentType: sniff(bytes),
    width: dims.width,
    height: dims.height,
    credit: merged.credit ?? null,
    license: merged.license ?? null,
    sourceUrl: merged.sourceUrl ?? null,
  })) as { id: string };
  return { id: res.id, ...dims, ...merged };
};

/** Upload any `photos` on a draft/patch and return the new photo ids. */
const uploadDraftPhotos = async (
  collectionId: string,
  photos: unknown,
): Promise<string[]> => {
  if (photos === undefined) return [];
  if (!Array.isArray(photos))
    throw new CliError('"photos" must be an array', "BAD_JSON");
  const ids: string[] = [];
  for (const p of photos) {
    const spec =
      typeof p === "string"
        ? { source: p }
        : (p as { source?: string } & PhotoMeta);
    const up = await uploadPhoto(
      collectionId,
      need(spec.source, "photos[].source"),
      spec,
    );
    ids.push(up.id);
  }
  return ids;
};

// ─── commands ───────────────────────────────────────────────────────

const DRAFT_KEYS = [
  "title",
  "summary",
  "body",
  "category",
  "lat",
  "lng",
  "address",
  "municipality",
  "borough",
  "neighbourhood",
  "subNeighbourhood",
  "links",
  "photoIds",
  "attributes",
  "translations",
] as const;

const EMPTY_DRAFT = {
  body: "",
  address: null,
  municipality: null,
  borough: null,
  neighbourhood: null,
  subNeighbourhood: null,
  links: [],
  attributes: {},
  translations: {},
};

type Attrs = Record<string, unknown>;

/** JSON with object keys sorted, for change detection. */
const stableJson = (v: unknown): string =>
  JSON.stringify(v, (_k, val: unknown) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.fromEntries(
          Object.entries(val as Obj).sort(([a], [b]) => a.localeCompare(b)),
        )
      : val,
  );

/** Merge attribute patches: keys replace, null deletes; keeps only `known` keys from `base`. */
const mergeAttributes = (
  base: Attrs,
  patch: unknown,
  known: Set<string>,
): Attrs => {
  if (
    patch !== undefined &&
    (typeof patch !== "object" || Array.isArray(patch))
  )
    throw new CliError('"attributes" must be an object', "BAD_JSON");
  const kept = Object.entries(base).filter(([k]) => known.has(k));
  const merged = { ...Object.fromEntries(kept), ...((patch as Attrs) ?? {}) };
  return Object.fromEntries(
    Object.entries(merged).filter(([, v]) => v !== null),
  );
};

/**
 * Merge translation patches per language and per field: `{"nl": {"title": "…"}}`
 * sets one field, a null field deletes it, a null language deletes all of it.
 * `attributes` inside a language merge per key like top-level attributes.
 */
const mergeTranslations = (base: unknown, patch: unknown): Obj => {
  if (patch === undefined) return (base as Obj) ?? {};
  if (typeof patch !== "object" || patch === null || Array.isArray(patch))
    throw new CliError(
      '"translations" must be an object: {"nl": {"title": "…"}}',
      "BAD_JSON",
    );
  const b = (base as Record<string, Obj | undefined>) ?? {};
  const langs = [...new Set([...Object.keys(b), ...Object.keys(patch)])];
  return Object.fromEntries(
    langs.flatMap((lang) => {
      const p = (patch as Record<string, Obj | null | undefined>)[lang];
      if (p === null) return [];
      const cur = b[lang] ?? {};
      if (p === undefined) return [[lang, cur]];
      const merged: Obj = { ...cur, ...p };
      if (p.attributes !== undefined || cur.attributes !== undefined)
        merged.attributes = Object.fromEntries(
          Object.entries({
            ...((cur.attributes as Obj | undefined) ?? {}),
            ...((p.attributes as Obj | null | undefined) ?? {}),
          }).filter(([, v]) => v !== null),
        );
      const kept = Object.entries(merged).filter(([, v]) => v !== null);
      return kept.length > 0 ? [[lang, Object.fromEntries(kept)]] : [];
    }),
  );
};

/** Propose an edit: `patch` merged onto the place's current state. */
const editPlace = async (placeId: string, patch: Obj, note: string | null) => {
  const current = (await query("place.byId", { placeId })) as {
    place: Obj & {
      collectionId: string;
      photoIds: string[];
      attributes: Attrs;
    };
    fields: { key: string }[];
  };
  // Values of fields the map no longer defines are dropped, not resent.
  const known = new Set(current.fields.map((f) => f.key));
  const added = await uploadDraftPhotos(
    current.place.collectionId,
    patch.photos,
  );
  const draft = {
    ...EMPTY_DRAFT,
    ...pickDraft(current.place),
    ...pickDraft(patch),
    attributes: mergeAttributes(
      current.place.attributes ?? {},
      patch.attributes,
      known,
    ),
    translations: mergeTranslations(
      current.place.translations,
      patch.translations,
    ),
    photoIds: [
      ...((patch.photoIds as string[] | undefined) ?? current.place.photoIds),
      ...added,
    ],
  };
  const before = { ...EMPTY_DRAFT, ...pickDraft(current.place) };
  // The server trims text, so a file's trailing newline isn't a change.
  if (stableJson(trimmed(before)) === stableJson(trimmed(draft)))
    return { status: "unchanged", placeId };
  return mutate("proposal.create", { kind: "edit", placeId, draft, note });
};

/** `v` with every string trimmed, for comparing drafts as the server stores them. */
const trimmed = (v: unknown): unknown =>
  typeof v === "string"
    ? v.trim()
    : Array.isArray(v)
      ? v.map(trimmed)
      : v && typeof v === "object"
        ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, trimmed(x)]))
        : v;

const pickDraft = (o: Obj): Obj =>
  Object.fromEntries(
    DRAFT_KEYS.filter((k) => o[k] !== undefined).map((k) => [k, o[k]]),
  );

const unknownKeys = (o: Obj) =>
  Object.keys(o).filter(
    (k) => !(DRAFT_KEYS as readonly string[]).includes(k) && k !== "photos",
  );

// ─── routes ─────────────────────────────────────────────────────────

const MODES = ["walk", "bike", "tram", "bus", "metro", "ferry", "train"];
const SNAPPABLE = ["walk", "bike"];

type Pt = [number, number];
interface Stop {
  placeId: string | null;
  name: string;
  lat: number;
  lng: number;
  narration: string;
  translations?: Obj;
}
interface Leg {
  mode: string;
  snap: boolean;
  via: Pt[];
  path: Pt[];
  directions: string;
  translations?: Obj;
}

/** Accept [lng, lat] or {lat, lng}. */
const toPt = (v: unknown, what: string): Pt => {
  if (
    Array.isArray(v) &&
    v.length === 2 &&
    v.every((n) => typeof n === "number")
  )
    return [v[0] as number, v[1] as number];
  const o = v as { lat?: unknown; lng?: unknown } | null;
  if (o && typeof o.lat === "number" && typeof o.lng === "number")
    return [o.lng, o.lat];
  throw new CliError(`${what} must be [lng, lat] or {"lat","lng"}`, "BAD_JSON");
};

const resolveStops = (
  raw: unknown,
  places: { id: string; title: string; lat: number; lng: number }[],
): Stop[] => {
  if (!Array.isArray(raw))
    throw new CliError('"stops" must be an array', "BAD_JSON");
  const byId = new Map(places.map((p) => [p.id, p]));
  const byTitle = new Map(places.map((p) => [p.title.toLowerCase(), p]));
  return raw.map((r, i) => {
    const o = (r ?? {}) as Obj;
    const ref = (o.place ?? o.placeId) as string | null | undefined;
    const narration = typeof o.narration === "string" ? o.narration : "";
    const translations = (o.translations as Obj | undefined) ?? {};
    if (ref) {
      const p = byId.get(ref) ?? byTitle.get(String(ref).toLowerCase());
      if (!p)
        throw new CliError(
          `stops[${i}]: no place "${ref}" on this map (use an id or exact title from \`dc places\`)`,
          "BAD_JSON",
        );
      return {
        placeId: p.id,
        name: p.title,
        lat: p.lat,
        lng: p.lng,
        narration,
        translations,
      };
    }
    if (typeof o.lat !== "number" || typeof o.lng !== "number" || !o.name)
      throw new CliError(
        `stops[${i}]: give "place", or "name" + "lat" + "lng" for an ad-hoc point`,
        "BAD_JSON",
      );
    return {
      placeId: null,
      name: String(o.name),
      lat: o.lat,
      lng: o.lng,
      narration,
      translations,
    };
  });
};

const stopIdentity = (s: Stop) =>
  s.placeId ?? `${s.name}@${s.lat.toFixed(6)},${s.lng.toFixed(6)}`;

/**
 * Build legs for `stops`: explicit `rawLegs` win; otherwise reuse the
 * previous leg between the same two stops; otherwise walk. Paths are
 * recomputed unless still valid (same endpoints and waypoints).
 */
const buildLegs = async (
  collectionId: string,
  stops: Stop[],
  rawLegs: unknown,
  previous: { stops: Stop[]; legs: Leg[] } | null,
  /** The route's main mode: what legs without a mode use. */
  routeMode = "walk",
): Promise<{ legs: Leg[]; warnings: string[] }> => {
  if (rawLegs !== undefined && !Array.isArray(rawLegs))
    throw new CliError('"legs" must be an array', "BAD_JSON");
  const given = (rawLegs as Obj[] | undefined) ?? [];
  if (given.length > stops.length - 1)
    throw new CliError(
      `${given.length} legs for ${stops.length} stops; there is one leg between each pair`,
      "BAD_JSON",
    );
  const prevByPair = new Map(
    (previous?.legs ?? []).flatMap((l, i) => {
      const a = previous?.stops[i];
      const b = previous?.stops[i + 1];
      return a && b
        ? [[`${stopIdentity(a)}>${stopIdentity(b)}`, l] as const]
        : [];
    }),
  );
  const warnings: string[] = [];
  const legs: Leg[] = [];
  for (let i = 0; i < stops.length - 1; i++) {
    const from = stops[i] as Stop;
    const to = stops[i + 1] as Stop;
    const old = prevByPair.get(`${stopIdentity(from)}>${stopIdentity(to)}`);
    const g = given[i];
    const mode = String(g?.mode ?? old?.mode ?? routeMode);
    if (!MODES.includes(mode))
      throw new CliError(
        `legs[${i}].mode must be one of ${MODES.join(", ")}`,
        "BAD_JSON",
      );
    const snap =
      typeof g?.snap === "boolean"
        ? g.snap
        : g?.mode === undefined && old
          ? old.snap
          : SNAPPABLE.includes(mode);
    const via = Array.isArray(g?.via)
      ? (g.via as unknown[]).map((v, j) => toPt(v, `legs[${i}].via[${j}]`))
      : (old?.via ?? []);
    const directions = String(g?.directions ?? old?.directions ?? "");
    const translations =
      (g?.translations as Obj | undefined) ?? old?.translations ?? {};
    const points: Pt[] = [[from.lng, from.lat], ...via, [to.lng, to.lat]];
    let path: Pt[];
    if (Array.isArray(g?.path)) {
      path = (g.path as unknown[]).map((v, j) =>
        toPt(v, `legs[${i}].path[${j}]`),
      );
    } else if (
      old &&
      old.mode === mode &&
      old.snap === snap &&
      JSON.stringify(old.via) === JSON.stringify(via)
    ) {
      path = old.path;
    } else if (snap && SNAPPABLE.includes(mode)) {
      try {
        path = (
          (await mutate("route.snap", { collectionId, mode, points })) as {
            path: Pt[];
          }
        ).path;
      } catch (err) {
        warnings.push(
          `leg ${i + 1} (${from.name} → ${to.name}): street routing failed, using straight lines: ${err instanceof Error ? err.message : String(err)}`,
        );
        path = points;
      }
    } else {
      path = points;
    }
    legs.push({ mode, snap, via, path, directions, translations });
  }
  return { legs, warnings };
};

const ROUTE_KEYS = [
  "mode",
  "loop",
  "title",
  "summary",
  "body",
  "stops",
  "legs",
  "photos",
  "photoIds",
  "translations",
] as const;
/** A route's main mode from CLI input: "walk" or "bike" (else undefined). */
const routeModeOf = (v: unknown): "walk" | "bike" | undefined => {
  if (v === undefined || v === null) return undefined;
  if (v === "walk" || v === "bike") return v;
  throw new CliError(
    `"mode" must be "walk" or "bike" (the route's main mode), not ${JSON.stringify(v)}`,
    "BAD_JSON",
  );
};
/** The route's loop flag from CLI input (left out → inferred). */
const loopOf = (v: unknown): { loop?: boolean } => {
  if (v === undefined || v === null) return {};
  if (typeof v === "boolean") return { loop: v };
  throw new CliError('"loop" must be true or false', "BAD_JSON");
};
const unknownRouteKeys = (o: Obj) =>
  Object.keys(o).filter((k) => !(ROUTE_KEYS as readonly string[]).includes(k));

const placesOf = async (collectionId: string) =>
  (await query("place.list", { collectionId })) as {
    id: string;
    title: string;
    lat: number;
    lng: number;
  }[];

const commands: Record<
  string,
  (pos: string[], flags: Record<string, string>) => Promise<unknown>
> = {
  help: async () => {
    process.stdout.write(HELP + DOC_HELP);
    return undefined;
  },
  schema: async () => SCHEMA,

  login: async ([token], flags) => {
    const url = (flags.url ?? config.url).replace(/\/$/, "");
    mkdirSync(join(homedir(), ".config", "deep-cities"), { recursive: true });
    writeFileSync(
      CONFIG_PATH,
      JSON.stringify({ url, token: need(token, "<token>") }, null, 2),
      { mode: 0o600 },
    );
    Object.assign(config, { url, token });
    const me = await query("auth.me");
    if (!me)
      throw new CliError("Token not accepted by the server", "UNAUTHORIZED");
    return { savedTo: CONFIG_PATH, url, me };
  },

  whoami: async () => {
    const me = await query("auth.me");
    if (!me)
      throw new CliError(
        "Not authenticated: run `dc login <token>`",
        "UNAUTHORIZED",
      );
    return { url: config.url, ...(me as Obj) };
  },

  maps: () => query("collection.list"),

  map: async ([slug]) => collectionOf(need(slug, "<slug>")),

  places: async ([slug], flags) => {
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const rows = (await query("place.list", {
      collectionId: collection.id,
    })) as Obj[];
    const has = (v: unknown, want: string | undefined) =>
      !want || String(v ?? "").toLowerCase() === want.toLowerCase();
    const q = flags.q?.toLowerCase();
    const fieldFilters = (repeatedFlags.get("field") ?? []).map((f) => {
      const eq = f.indexOf("=");
      if (eq < 1) throw new CliError("--field expects key=value", "USAGE");
      return [f.slice(0, eq), f.slice(eq + 1)] as const;
    });
    return rows
      .filter(
        (p) =>
          has(p.neighbourhood, flags.neighbourhood) &&
          has(p.subNeighbourhood, flags["sub-neighbourhood"]) &&
          has(p.borough, flags.borough) &&
          has(p.category, flags.category) &&
          fieldFilters.every(([k, v]) =>
            has((p.attributes as Attrs | undefined)?.[k], v),
          ),
      )
      .filter(
        (p) =>
          !q ||
          `${p.title} ${p.summary} ${p.address}`.toLowerCase().includes(q),
      )
      .map(({ updatedAt: _u, coverPhotoId, ...p }) => ({
        ...p,
        hasPhoto: coverPhotoId !== null,
      }));
  },

  place: ([placeId]) =>
    query("place.byId", { placeId: need(placeId, "<placeId>") }),

  photo: async ([slug, source], flags) => {
    const { collection } = await collectionOf(need(slug, "<slug>"));
    return uploadPhoto(collection.id, need(source, "<source>"), {
      credit: flags.credit,
      license: flags.license,
      sourceUrl: flags["source-url"],
    });
  },

  create: async ([slug, arg], flags) => {
    const input = readJsonArg(need(arg, "<draft>"));
    const bad = unknownKeys(input);
    if (bad.length)
      throw new CliError(`Unknown draft fields: ${bad.join(", ")}`, "BAD_JSON");
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const added = await uploadDraftPhotos(collection.id, input.photos);
    const draft = {
      ...EMPTY_DRAFT,
      ...pickDraft(input),
      photoIds: [...((input.photoIds as string[] | undefined) ?? []), ...added],
    };
    return mutate("proposal.create", {
      kind: "create",
      collectionId: collection.id,
      draft,
      note: flags.note ?? null,
    });
  },

  update: async ([placeId, arg], flags) => {
    const patch = readJsonArg(need(arg, "<patch>"));
    const bad = unknownKeys(patch);
    if (bad.length)
      throw new CliError(`Unknown patch fields: ${bad.join(", ")}`, "BAD_JSON");
    return editPlace(need(placeId, "<placeId>"), patch, flags.note ?? null);
  },

  /** Replace a map's custom place fields (admins). Other settings are kept. */
  fields: async ([slug, arg]) => {
    const text =
      need(arg, "<defs.json>") === "-"
        ? readFileSync(0, "utf8")
        : arg?.trim().startsWith("[")
          ? arg
          : readFileSync(arg ?? "", "utf8");
    const fields: unknown = JSON.parse(text);
    if (!Array.isArray(fields))
      throw new CliError("Field definitions must be a JSON array", "BAD_JSON");
    const { collection: c } = (await query("collection.bySlug", {
      slug: need(slug, "<slug>"),
    })) as { collection: Obj & { id: string } };
    await mutate("collection.updateSettings", {
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
      fields,
      language: c.language,
      languages: c.languages,
      translations: c.translations,
    });
    return { ok: true, fields };
  },

  /** Change a map's general settings (admins); keys left out are kept. */
  settings: async ([slug, arg]) => {
    const input = readJsonArg(need(arg, "<settings.json>"));
    const keys = [
      "title",
      "tagline",
      "description",
      "city",
      "centerLat",
      "centerLng",
      "zoom",
      "categories",
      "contributionPolicy",
    ];
    const bad = Object.keys(input).filter((k) => !keys.includes(k));
    if (bad.length)
      throw new CliError(
        `Unknown keys: ${bad.join(", ")} (expected ${keys.join(", ")})`,
        "BAD_JSON",
      );
    const { collection: c } = (await query("collection.bySlug", {
      slug: need(slug, "<slug>"),
    })) as { collection: Obj & { id: string } };
    const settings = Object.fromEntries(
      keys.map((k) => [k, k in input ? input[k] : c[k]]),
    );
    // Pass the language settings through: they are part of the same update.
    await mutate("collection.updateSettings", {
      collectionId: c.id,
      ...settings,
      language: c.language,
      languages: c.languages,
      translations: c.translations,
    });
    return { ok: true, ...settings };
  },

  /** Set a map's content languages and translated map texts (admins). */
  languages: async ([slug, arg]) => {
    const input = readJsonArg(need(arg, "<languages.json>"));
    const bad = Object.keys(input).filter(
      (k) => !["language", "languages", "translations"].includes(k),
    );
    if (bad.length)
      throw new CliError(
        `Unknown keys: ${bad.join(", ")} (expected language, languages, translations)`,
        "BAD_JSON",
      );
    const { collection: c } = (await query("collection.bySlug", {
      slug: need(slug, "<slug>"),
    })) as { collection: Obj & { id: string } };
    await mutate("collection.updateSettings", {
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
      language: input.language ?? c.language,
      languages: input.languages ?? c.languages,
      translations:
        input.translations === undefined
          ? c.translations
          : mergeTranslations(c.translations, input.translations),
    });
    const { collection: after } = (await query("collection.bySlug", {
      slug,
    })) as { collection: Obj };
    return {
      ok: true,
      language: after.language,
      languages: after.languages,
      translations: after.translations,
    };
  },

  archive: async ([placeId], flags) =>
    mutate("proposal.create", {
      kind: "archive",
      placeId: need(placeId, "<placeId>"),
      note: need(flags.note, "--note"),
    }),

  /** Bulk create; skips titles already on the map, continues past failures. */
  import: async ([slug, arg], flags) => {
    const text =
      need(arg, "<file.json>") === "-"
        ? readFileSync(0, "utf8")
        : readFileSync(arg ?? "", "utf8");
    const items: unknown = JSON.parse(text);
    if (!Array.isArray(items))
      throw new CliError(
        "Import file must be a JSON array of drafts",
        "BAD_JSON",
      );
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const existing = (await query("place.list", {
      collectionId: collection.id,
    })) as { id: string; title: string; coverPhotoId: string | null }[];
    const byTitle = new Map(existing.map((p) => [p.title.toLowerCase(), p.id]));
    const withPhotos = new Set(
      existing.filter((p) => p.coverPhotoId).map((p) => p.id),
    );
    const results: Obj[] = [];
    for (const raw of items as Obj[]) {
      const { note, ...input } = raw;
      const title = String(input.title ?? "");
      const existingId = byTitle.get(title.toLowerCase());
      if (existingId && !flags.upsert) {
        results.push({
          title,
          result: "skipped",
          reason: "title exists",
          placeId: existingId,
        });
        continue;
      }
      const bad = unknownKeys(input);
      if (bad.length) {
        results.push({
          title,
          result: "failed",
          error: `Unknown fields: ${bad.join(", ")}`,
        });
        continue;
      }
      if (flags["dry-run"]) {
        results.push({
          title,
          result: existingId ? "would-update" : "would-create",
        });
        continue;
      }
      const itemNote = typeof note === "string" ? note : (flags.note ?? null);
      if (existingId) {
        try {
          // Re-running an import must not re-upload photos a place already has.
          const patch = withPhotos.has(existingId)
            ? { ...input, photos: undefined }
            : input;
          const res = (await editPlace(existingId, patch, itemNote)) as Obj;
          results.push({
            title,
            result:
              res.status === "approved"
                ? "updated"
                : res.status === "unchanged"
                  ? "unchanged"
                  : "pending-review",
            ...res,
          });
        } catch (err) {
          results.push({
            title,
            result: "failed",
            placeId: existingId,
            error: err instanceof Error ? err.message : String(err),
          });
        }
        continue;
      }
      try {
        const added = await uploadDraftPhotos(collection.id, input.photos);
        const draft = {
          ...EMPTY_DRAFT,
          ...pickDraft(input),
          photoIds: [
            ...((input.photoIds as string[] | undefined) ?? []),
            ...added,
          ],
        };
        const res = (await mutate("proposal.create", {
          kind: "create",
          collectionId: collection.id,
          draft,
          note: itemNote,
        })) as Obj;
        results.push({
          title,
          result: res.status === "approved" ? "created" : "pending-review",
          ...res,
        });
      } catch (err) {
        results.push({
          title,
          result: "failed",
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }
    const count = (r: string) => results.filter((x) => x.result === r).length;
    return {
      summary: {
        total: results.length,
        created: count("created"),
        updated: count("updated"),
        unchanged: count("unchanged"),
        pendingReview: count("pending-review"),
        skipped: count("skipped"),
        failed: count("failed"),
        wouldCreate: count("would-create"),
        wouldUpdate: count("would-update"),
      },
      results,
    };
  },

  routes: async ([slug]) => {
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const rows = (await query("route.list", {
      collectionId: collection.id,
    })) as (Obj & { stops: Obj[] })[];
    return rows.map(({ legs: _legs, updatedAt: _u, stops, ...r }) => ({
      ...r,
      stops: stops.map((s) => s.name),
    }));
  },

  route: ([routeId]) =>
    query("route.byId", { routeId: need(routeId, "<routeId>") }),

  "route-create": async ([slug, arg], flags) => {
    const input = readJsonArg(need(arg, "<route>"));
    const bad = unknownRouteKeys(input);
    if (bad.length)
      throw new CliError(`Unknown route fields: ${bad.join(", ")}`, "BAD_JSON");
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const stops = resolveStops(input.stops, await placesOf(collection.id));
    const mode = routeModeOf(input.mode);
    const { legs, warnings } = await buildLegs(
      collection.id,
      stops,
      input.legs,
      null,
      mode ?? "walk",
    );
    const added = await uploadDraftPhotos(collection.id, input.photos);
    const res = await mutate("proposal.createRoute", {
      kind: "create",
      collectionId: collection.id,
      draft: {
        // Left out: the server infers it from the legs.
        ...(mode ? { mode } : {}),
        ...loopOf(input.loop),
        title: input.title,
        summary: input.summary,
        body: input.body ?? "",
        translations: input.translations ?? {},
        stops,
        legs,
        photoIds: [
          ...((input.photoIds as string[] | undefined) ?? []),
          ...added,
        ],
      },
      note: flags.note ?? null,
    });
    return warnings.length ? { ...(res as Obj), warnings } : res;
  },

  "route-update": async ([routeId, arg], flags) => {
    const patch = readJsonArg(need(arg, "<patch>"));
    const bad = unknownRouteKeys(patch);
    if (bad.length)
      throw new CliError(`Unknown route fields: ${bad.join(", ")}`, "BAD_JSON");
    const { route: current } = (await query("route.byId", {
      routeId: need(routeId, "<routeId>"),
    })) as {
      route: Obj & {
        collectionId: string;
        stops: Stop[];
        legs: Leg[];
        photoIds: string[];
      };
    };
    const stops =
      patch.stops === undefined
        ? current.stops
        : resolveStops(patch.stops, await placesOf(current.collectionId));
    const mode = routeModeOf(patch.mode) ?? routeModeOf(current.mode);
    const { legs, warnings } = await buildLegs(
      current.collectionId,
      stops,
      patch.legs,
      { stops: current.stops, legs: current.legs },
      mode ?? "walk",
    );
    const added = await uploadDraftPhotos(current.collectionId, patch.photos);
    const res = await mutate("proposal.createRoute", {
      kind: "edit",
      routeId,
      draft: {
        ...(mode ? { mode } : {}),
        // Kept unless given; new stops re-infer it.
        ...loopOf(
          patch.loop ?? (patch.stops === undefined ? current.loop : undefined),
        ),
        title: patch.title ?? current.title,
        summary: patch.summary ?? current.summary,
        body: patch.body ?? current.body,
        translations: mergeTranslations(
          current.translations,
          patch.translations,
        ),
        stops,
        legs,
        photoIds: [
          ...((patch.photoIds as string[] | undefined) ?? current.photoIds),
          ...added,
        ],
      },
      note: flags.note ?? null,
    });
    return warnings.length ? { ...(res as Obj), warnings } : res;
  },

  "route-archive": async ([routeId], flags) =>
    mutate("proposal.createRoute", {
      kind: "archive",
      routeId: need(routeId, "<routeId>"),
      note: need(flags.note, "--note"),
    }),

  ...makeDocCommands({
    url: config.url,
    query,
    mutate,
    collectionOf,
    uploadPhoto,
    fail: (message, code) => {
      throw new CliError(message, code);
    },
  }),

  queue: async ([slug], flags) => {
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const rows = (await query("proposal.queue", {
      collectionId: collection.id,
      statuses: [flags.status ?? "pending"],
    })) as Obj[];
    return rows.map((p) => ({
      id: p.id,
      subject: p.subject,
      kind: p.kind,
      status: p.status,
      placeId: p.placeId,
      routeId: p.routeId,
      note: p.note,
      author: (p.author as Obj | null)?.name ?? null,
      createdAt: p.createdAt,
      draft: p.subject === "route" ? p.routeDraft : p.draft,
    }));
  },

  approve: ([proposalId], flags) =>
    mutate("proposal.review", {
      proposalId: need(proposalId, "<proposalId>"),
      decision: "approve",
      note: flags.note ?? null,
    }),

  reject: ([proposalId], flags) =>
    mutate("proposal.review", {
      proposalId: need(proposalId, "<proposalId>"),
      decision: "reject",
      note: need(flags.note, "--note"),
    }),
};

const main = async () => {
  const [cmd = "help", ...rest] = process.argv.slice(2);
  const { positional, flags } = parseArgs(rest);
  const run = commands[cmd === "--help" || cmd === "-h" ? "help" : cmd];
  if (!run)
    throw new CliError(`Unknown command "${cmd}". Run \`dc help\`.`, "USAGE");
  const result = await run(positional, flags);
  if (result !== undefined) out(result);
};

main().catch((err: unknown) => {
  const e =
    err instanceof CliError ? err : new CliError(String(err), "UNEXPECTED");
  process.stderr.write(
    `${JSON.stringify({ error: { code: e.code, message: e.message } })}\n`,
  );
  process.exit(1);
});
