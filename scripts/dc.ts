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
import { MAP_HELP, makeMapCommands } from "./dc-maps.ts";

const DEFAULT_URL = "https://deepcities.org";
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
                                           (creating maps and members: see MAPS below)
  dc places <slug> [--borough X] [--neighbourhood X] [--sub-neighbourhood X]
                   [--category KEY] [--field key=value]... [--q TEXT] [--all]
                                           the places the map shows (compact, with
                                           attributes, parentId, detail); for a view
                                           map, what the view shows, with its own
                                           values ("overridden" lists them). --all:
                                           every place of the map's home, at any detail
  dc place <placeId> [--map <slug>]        full place: fields, photos (+credits), history,
                                           parent and children; --map <view>: with that
                                           view's own values ("base": the home values)
  dc export <slug> [--all]                 every place the map shows in full (all
                                           translations, attributes, photo ids): backup,
                                           diff base, bulk review; --all as for places

WRITE  (contributors: goes to review; moderators/admins: published immediately)
  dc create <slug> <draft>  [--note TEXT]  new place
  dc update <placeId> <patch> [--note TEXT]
                                           patch is merged onto the current place;
                                           arrays (links, photoIds) replace wholesale;
                                           "attributes" merge per key (null deletes one);
                                           "translations" merge per language and field
  dc archive <placeId> --note TEXT         remove from the map (kept in history)
  update and archive take --dry-run: shows the diff (or the place), writes nothing

  dc update-many <file.json|-> [--note TEXT] [--dry-run]
                                           many edits: [{"id", "patch", "note"?}] (or
                                           [{"id", ...patch}]); patches merge like update
  update edits the place itself, on its home map. For values that apply on one
  view map only, use override (see VIEWS AND CLUSTERS):
  dc override <viewSlug> <placeId> <patch|-> [--note TEXT] [--dry-run]
                                           the view's own values for a place: {"attributes"?:
                                           {key: value | null}, "category"?: KEY | null,
                                           "revert"?: [key | "category"], "reset"?: true};
                                           merged onto the view's current override
  dc override-many <viewSlug> <file.json|-> [--note TEXT] [--dry-run]
                                           [{"id", "attributes"?, "category"?, "revert"?,
                                           "reset"?, "note"?}]
  dc archive-many <file.json|-> --note TEXT [--dry-run]
                                           ["id", …] or [{"id", "note"?}]
  dc copy <slug> <placeId>... [--category KEY] [--note TEXT] [--dry-run]
                                           copy places onto another map with their
                                           photos and translations; the history note
                                           says where each came from. Attributes the
                                           target map doesn't define (or whose select
                                           value it lacks) and languages it doesn't
                                           offer are dropped and listed. Titles already
                                           there are skipped
  dc import <slug> <file.json|-> [--note TEXT] [--dry-run] [--upsert]
                                           bulk create from a JSON array of drafts
                                           (each may carry "note"); titles already on
                                           the map (at any detail) are skipped, or with
                                           --upsert updated
                                           like \`dc update\` ("photos" ignored if the place
                                           already has some); keeps going past failures.
                                           New places that match one on the city's other
                                           maps (same title, monument_number, or < 25 m)
                                           get "alsoOn" (--no-cross-check skips it).
                                           "parent" may name a place earlier in the file.
                                           A view map refuses imports: import into its
                                           source
  dc photo <slug> <source> [--credit TEXT] [--license TEXT] [--source-url URL]
                                           upload one photo, prints {"id"}; use the id
                                           in photoIds. source = local file path,
                                           https URL, or commons:File:Name.jpg
                                           (Commons: credit/license filled in automatically)

MAP SCHEMA (map admins)
  dc fields <slug> <defs.json|->           replace the map's custom place fields with a
                                           JSON array of field definitions (see \`dc schema\`);
                                           existing keys must stay (hide, don't delete).
                                           On a view: the fields it adds after its
                                           source's (keys must differ from the source's);
                                           their values are set with dc override
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

Bulk commands (import, update-many, archive-many, copy) print every result and
exit 1 if any failed. Network, database and rate-limit errors are retried with
backoff (1 s, 3 s, 9 s); --retries N changes the number of retries (default 3).

VIEWS AND CLUSTERS
  A place lives on one home map. A view map (see \`dc map-view\`) has no places of
  its own: it shows some of its source's places, so \`dc places <view>\` lists
  them, \`dc create <view>\` adds the place to the source ("detail": "district"
  when the view shows full detail), and \`dc import <view>\` is refused.
  A cluster is an ordinary place other places name as "parent" (by id or exact
  title on the same home map). Home maps show "detail": "city" places; a
  full-detail view shows every matching place except clusters with parts.

  A view can give a place values of its own (an override): custom fields and
  category, e.g. rank "Amazing" in Deep Centrum while Deep Amsterdam says "Nice".
  A view shows the home values with its override on top: attribute keys replace
  per key (null: no value on the view), a category replaces the home one. Keys
  equal to the home value are not stored. Texts, location, photos, links, parent
  and detail are always the home place's (dc update). Overrides go through the
  view's review queue and permissions (moderators+ publish immediately).
    dc override centrum <placeId> '{"attributes": {"rank": "Amazing"}}'
    dc override centrum <placeId> '{"revert": ["rank"]}'     back to the home value
  A view may also define fields of its own (dc fields <view>): shown after the
  source's fields, with values only in its overrides.

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
    parent:
      'optional, the cluster this place is part of: a place id or exact title on the same home map; null for none. Sent as "parentId". Left out, an update keeps the current parent',
    detail:
      'optional, "city" (shown on the home, citywide map) or "district" (only in full-detail views, e.g. Deep Centrum). Left out, an update keeps it; a new place gets "city", or "district" when created through a full-detail view',
    photos: "CLI-only convenience, see `dc help`",
  },
  mapView: {
    source:
      "slug (or id) of the map whose places the view shows; a home map of the same city",
    where:
      'optional filter, every listed key must match one of its values: {"borough": ["Centrum"], "neighbourhood": [...], "subNeighbourhood": [...], "category": [...]}',
    detail:
      '"city": the source\'s city-level places that match; "full": every matching place except clusters with parts (the leaves at full detail)',
  },
  override: {
    attributes:
      "optional object { key: value | null }: what the view shows for these fields (its source's fields and its own, `dc map <view>` → collection.fields); null: no value on the view. Keys left out keep the view's current value",
    category:
      "optional category key (the source's categories) shown on the view; null: the home category",
    revert:
      'optional array of field keys (or "category") to take from the home place again',
    reset:
      "optional true: drop the view's current override first, then apply the rest",
    stored:
      'only keys that differ from the home place are kept; `dc places <view>` and `dc export <view>` show the effective values and list overridden keys in "overridden"',
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
  let res: Response;
  let text: string;
  try {
    res =
      kind === "query"
        ? await fetch(`${url}?input=${encodeURIComponent(body)}`, { headers })
        : await fetch(url, { method: "POST", headers, body });
    text = await res.text();
  } catch (err) {
    throw new CliError(
      `Network error calling ${path}: ${err instanceof Error ? err.message : String(err)}`,
      "NETWORK",
    );
  }
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
/** Error codes worth another try: the network, the database, rate limits. */
const TRANSIENT = new Set([
  "NETWORK",
  "HTTP",
  "INTERNAL_SERVER_ERROR",
  "TOO_MANY_REQUESTS",
  "TIMEOUT",
  "BAD_GATEWAY",
  "SERVICE_UNAVAILABLE",
  "GATEWAY_TIMEOUT",
]);
const isTransient = (err: unknown) =>
  err instanceof CliError && TRANSIENT.has(err.code);

/** Attempts per call or import item (`--retries N` sets the extra tries). */
let attempts = 4;

const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Run `fn`, retrying transient failures with backoff (1 s, 3 s, 9 s…).
 * `beforeRetry` may settle the outcome itself (e.g. a create that did land).
 */
const withRetries = async <T>(
  fn: () => Promise<T>,
  beforeRetry?: () => Promise<T | undefined>,
): Promise<T> => {
  for (let i = 1; ; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i >= attempts || !isTransient(err)) throw err;
      await pause(1000 * 3 ** (i - 1));
      const settled = await beforeRetry?.();
      if (settled !== undefined) return settled;
    }
  }
};

// Reads are safe to repeat. Writes are retried by the commands that can
// tell whether a failed attempt landed (import, update-many, copy…).
const query = (path: string, input?: unknown) =>
  withRetries(() => call("query", path, input));
const mutate = (path: string, input: unknown) => call("mutation", path, input);

const collectionOf = async (slug: string) => {
  const res = (await query("collection.bySlug", { slug })) as {
    collection: {
      id: string;
      slug: string;
      categories: { key: string }[];
      view: { source: string } | null;
    };
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
  "parentId",
  "detail",
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

/** Leaves of a JSON value by dotted path (arrays are leaves). */
const leaves = (v: unknown, prefix = ""): [string, unknown][] =>
  v && typeof v === "object" && !Array.isArray(v)
    ? Object.entries(v as Obj).flatMap(([k, x]) =>
        leaves(x, prefix ? `${prefix}.${k}` : k),
      )
    : [[prefix, v]];

/** What changes between two drafts: {"attributes.rank": {from, to}, …}. */
const diffOf = (before: unknown, after: unknown) => {
  const a = new Map(leaves(trimmed(before)));
  const b = new Map(leaves(trimmed(after)));
  const keys = [...new Set([...a.keys(), ...b.keys()])].sort();
  return Object.fromEntries(
    keys
      .filter((k) => stableJson(a.get(k)) !== stableJson(b.get(k)))
      .map((k) => [k, { from: a.get(k) ?? null, to: b.get(k) ?? null }]),
  );
};

type PlaceById = {
  place: Obj & {
    id: string;
    title: string;
    collectionId: string;
    photoIds: string[];
    attributes: Attrs;
  };
  fields: { key: string }[];
};

/**
 * Propose an edit: `patch` merged onto the place's current state. With
 * `dryRun`, returns the diff instead. Photos are uploaded once; the write
 * itself is retried, and recomputing the merge makes a retry after a write
 * that did land come back "unchanged" rather than apply twice.
 */
const editPlace = async (
  placeId: string,
  given: Obj,
  note: string | null,
  opts: { dryRun?: boolean } = {},
): Promise<Obj> => {
  const first = (await query("place.byId", { placeId })) as PlaceById;
  const patch =
    given.parent === undefined
      ? given
      : resolveParent(given, await poolOf(first.place.collectionId));
  const known = new Set(first.fields.map((f) => f.key));
  const unknown = Object.keys(
    (patch.attributes as Attrs | undefined) ?? {},
  ).filter((k) => !known.has(k));
  if (unknown.length)
    throw new CliError(
      `Not fields of this map: ${unknown.join(", ")} (see \`dc map <slug>\` → fields)`,
      "BAD_JSON",
    );
  const added = opts.dryRun
    ? []
    : await uploadDraftPhotos(first.place.collectionId, patch.photos);
  const attempt = async (current: PlaceById): Promise<Obj> => {
    // Values of fields the map no longer defines are dropped, not resent.
    const known = new Set(current.fields.map((f) => f.key));
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
        ...new Set([
          ...((patch.photoIds as string[] | undefined) ??
            current.place.photoIds),
          ...added,
        ]),
      ],
    };
    const before = { ...EMPTY_DRAFT, ...pickDraft(current.place) };
    // The server trims text, so a file's trailing newline isn't a change.
    if (stableJson(trimmed(before)) === stableJson(trimmed(draft)))
      return { status: "unchanged", placeId };
    if (opts.dryRun)
      return {
        status: "would-update",
        placeId,
        title: current.place.title,
        diff: diffOf(before, draft),
      };
    return (await mutate("proposal.create", {
      kind: "edit",
      placeId,
      draft,
      note,
    })) as Obj;
  };
  let current = first;
  return withRetries(
    () => attempt(current),
    async () => {
      current = (await query("place.byId", { placeId })) as PlaceById;
      return undefined;
    },
  );
};

const OVERRIDE_KEYS = ["attributes", "category", "revert", "reset"];

/**
 * Propose a view map's own values for one place: `{attributes?, category?,
 * revert?, reset?}` merged onto the view's current override (attributes per
 * key, null: no value on this map; category null or revert: back to the
 * home value). With `dryRun`, the diff of what the view shows.
 */
const overridePlace = async (
  view: { id: string; slug: string },
  placeId: string,
  given: Obj,
  note: string | null,
  opts: { dryRun?: boolean } = {},
): Promise<Obj> => {
  const bad = Object.keys(given).filter((k) => !OVERRIDE_KEYS.includes(k));
  if (bad.length)
    throw new CliError(
      `Unknown override keys: ${bad.join(", ")} (expected ${OVERRIDE_KEYS.join(", ")}; texts, location and photos: dc update)`,
      "BAD_JSON",
    );
  if (
    given.attributes !== undefined &&
    (typeof given.attributes !== "object" ||
      given.attributes === null ||
      Array.isArray(given.attributes))
  )
    throw new CliError('"attributes" must be an object', "BAD_JSON");
  const input = {
    collectionId: view.id,
    placeId,
    ...given,
    note,
  };
  // Safe to retry: the same patch again comes back "unchanged".
  if (!opts.dryRun)
    return withRetries(
      async () => (await mutate("proposal.createOverride", input)) as Obj,
    );
  const [res, shown] = await Promise.all([
    mutate("proposal.createOverride", { ...input, dryRun: true }) as Promise<
      Obj & { override: { attributes: Attrs; category: string | null } }
    >,
    query("place.byId", { placeId, map: view.slug }) as Promise<{
      place: { title: string; attributes: Attrs; category: string };
      base: { attributes: Attrs; category: string };
    }>,
  ]);
  const after = {
    attributes: Object.fromEntries(
      Object.entries({
        ...shown.base.attributes,
        ...res.override.attributes,
      }).filter(([, v]) => v !== null),
    ),
    category: res.override.category ?? shown.base.category,
  };
  const before = {
    attributes: shown.place.attributes,
    category: shown.place.category,
  };
  return res.status === "unchanged"
    ? res
    : {
        ...res,
        title: shown.place.title,
        diff: diffOf(before, after),
      };
};

/** Propose removing a place (retried; a retry finds it already gone). */
const archivePlace = async (
  placeId: string,
  note: string,
  opts: { dryRun?: boolean } = {},
): Promise<Obj> => {
  const { place } = (await query("place.byId", { placeId })) as PlaceById;
  if (place.status !== "published")
    return { status: "unchanged", placeId, reason: "not on the map" };
  if (opts.dryRun)
    return { status: "would-archive", placeId, title: place.title };
  return withRetries(
    async () =>
      (await mutate("proposal.create", {
        kind: "archive",
        placeId,
        note,
      })) as Obj,
    async () => {
      const again = (await query("place.byId", { placeId })) as PlaceById;
      return again.place.status === "published"
        ? undefined
        : { status: "approved", placeId };
    },
  );
};

/** A JSON array from a file path, inline text or - (stdin). */
const readJsonArray = (arg: string): unknown[] => {
  const text =
    arg === "-"
      ? readFileSync(0, "utf8")
      : arg.trim().startsWith("[")
        ? arg
        : readFileSync(arg, "utf8");
  const v: unknown = JSON.parse(text);
  if (!Array.isArray(v))
    throw new CliError("Expected a JSON array", "BAD_JSON");
  return v;
};

const messageOf = (err: unknown) =>
  err instanceof Error ? err.message : String(err);

/** One word for what a write did, from the proposal's status. */
const outcomeOf = (res: Obj, done: "created" | "updated" | "archived") =>
  res.status === "approved"
    ? done
    : res.status === "pending"
      ? "pending-review"
      : String(res.status);

/**
 * Results with counts per outcome. Anything failed sets a non-zero exit
 * code (after the JSON is printed), so scripts can tell.
 */
const withSummary = (results: Obj[]) => {
  const summary: Record<string, number> = { total: results.length };
  for (const r of results) {
    const k = String(r.result);
    summary[k] = (summary[k] ?? 0) + 1;
  }
  if (summary.failed) process.exitCode = 1;
  return { summary, results };
};

/**
 * Propose a new place, retrying transient failures. Before a retry it looks
 * for the title on the map, so a create that did land isn't made twice.
 */
const createPlace = async (
  collectionId: string,
  draft: Obj,
  note: string | null,
): Promise<Obj> =>
  withRetries(
    async () =>
      (await mutate("proposal.create", {
        kind: "create",
        collectionId,
        draft,
        note,
      })) as Obj,
    async () => {
      const rows = await poolOf(collectionId);
      const title = String(draft.title).trim().toLowerCase();
      const hit = rows.find((p) => p.title.toLowerCase() === title);
      return hit ? { status: "approved", placeId: hit.id } : undefined;
    },
  );

const CLOSE_METRES = 25;

const metresBetween = (
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) => {
  const rad = Math.PI / 180;
  const x = (b.lng - a.lng) * rad * Math.cos(((a.lat + b.lat) / 2) * rad);
  const y = (b.lat - a.lat) * rad;
  return Math.sqrt(x * x + y * y) * 6_371_000;
};

type Neighbour = {
  map: string;
  id: string;
  title: string;
  lat: number;
  lng: number;
  attributes?: Attrs;
};

/** Published places on the city's other maps, to spot cross-map doubles. */
const otherMapPlaces = async (target: {
  id: string;
  city?: unknown;
}): Promise<Neighbour[]> => {
  const maps = (await query("collection.list")) as {
    id: string;
    slug: string;
    city: string;
  }[];
  const others = maps.filter(
    (m) => m.city === target.city && m.id !== target.id,
  );
  const lists = await Promise.all(
    others.map(async (m) =>
      (
        (await query("place.list", { collectionId: m.id })) as Omit<
          Neighbour,
          "map"
        >[]
      ).map((p) => ({ ...p, map: m.slug })),
    ),
  );
  return lists.flat();
};

/** Same title, same monument number or within 25 m, on another map. */
const crossMapMatches = (draft: Obj, neighbours: Neighbour[]) => {
  const title = String(draft.title ?? "").toLowerCase();
  const monument = (draft.attributes as Attrs | undefined)?.monument_number;
  const lat = Number(draft.lat);
  const lng = Number(draft.lng);
  return neighbours.flatMap((p) => {
    const why = [
      p.title.toLowerCase() === title && "same title",
      monument !== undefined &&
        monument !== "" &&
        String(p.attributes?.monument_number ?? "") === String(monument) &&
        "same monument number",
      Number.isFinite(lat) &&
        Number.isFinite(lng) &&
        metresBetween({ lat, lng }, p) < CLOSE_METRES &&
        `${Math.round(metresBetween({ lat, lng }, p))} m apart`,
    ].filter((w): w is string => typeof w === "string");
    return why.length
      ? [{ map: p.map, placeId: p.id, title: p.title, why: why.join(", ") }]
      : [];
  });
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
    (k) =>
      !(DRAFT_KEYS as readonly string[]).includes(k) &&
      k !== "photos" &&
      k !== "parent",
  );

type PoolPlace = { id: string; title: string };

/**
 * Every published place of a map's home (a view's source), at any detail:
 * what titles and parents are matched against.
 */
const poolOf = async (collectionId: string) =>
  (await query("place.list", { collectionId, pool: true })) as PoolPlace[];

/**
 * A draft's "parent" (a place id or exact title on the same home map; null
 * for none) turned into "parentId".
 */
const resolveParent = (input: Obj, pool: PoolPlace[]): Obj => {
  if (input.parent === undefined) return input;
  const { parent, ...rest } = input;
  if (parent === null) return { ...rest, parentId: null };
  if (typeof parent !== "string" || !parent.trim())
    throw new CliError(
      '"parent" must be a place id, an exact title, or null',
      "BAD_JSON",
    );
  const want = parent.trim();
  const byId = pool.find((p) => p.id === want);
  if (byId) return { ...rest, parentId: byId.id };
  const exact = pool.filter((p) => p.title === want);
  const hits = exact.length
    ? exact
    : pool.filter((p) => p.title.toLowerCase() === want.toLowerCase());
  const [hit, ...more] = hits;
  if (!hit)
    throw new CliError(
      `No place "${want}" on the home map to be part of`,
      "BAD_JSON",
    );
  if (more.length)
    throw new CliError(
      `"${want}" matches ${hits.length} places: give the parent's id (${hits.map((h) => h.id).join(", ")})`,
      "BAD_JSON",
    );
  return { ...rest, parentId: hit.id };
};

/** A view map can't take places itself: name its source. */
const refuseView = async (
  c: { slug: string; view: { source: string } | null },
  what: string,
) => {
  if (!c.view) return;
  const maps = (await query("collection.list")) as {
    id: string;
    slug: string;
  }[];
  const source = maps.find((m) => m.id === c.view?.source)?.slug ?? "?";
  throw new CliError(
    `${c.slug} is a view of ${source}: it has no places of its own. ${what} into ${source} instead (with "detail": "district" for places only full-detail views show)`,
    "VIEW_MAP",
  );
};

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
    process.stdout.write(HELP + MAP_HELP + DOC_HELP);
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
      pool: flags.all === "true",
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

  place: ([placeId], flags) =>
    query("place.byId", {
      placeId: need(placeId, "<placeId>"),
      map: flags.map,
    }),

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
    const resolved =
      input.parent === undefined
        ? input
        : resolveParent(input, await poolOf(collection.id));
    const added = await uploadDraftPhotos(collection.id, input.photos);
    const draft = {
      ...EMPTY_DRAFT,
      ...pickDraft(resolved),
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
    try {
      return await editPlace(
        need(placeId, "<placeId>"),
        patch,
        flags.note ?? null,
        { dryRun: flags["dry-run"] === "true" },
      );
    } catch (err) {
      // `dc update <viewSlug> …`: per-map values are overrides.
      const map = await collectionOf(placeId ?? "").catch(() => null);
      if (map?.collection.view)
        throw new CliError(
          `dc update takes a place id and edits the place itself (on its home map). For values that apply only on the view ${map.collection.slug} (fields, category), use: dc override ${map.collection.slug} <placeId> '{"attributes": {...}}'`,
          "VIEW_MAP",
        );
      throw err;
    }
  },

  /** Many edits, one note: [{"id", "patch", "note"?}] or [{"id", ...patch}]. */
  "update-many": async ([arg], flags) => {
    const items = readJsonArray(need(arg, "<file.json>"));
    const results: Obj[] = [];
    for (const raw of items) {
      const { id, patch, note, ...rest } = raw as Obj;
      const body = (patch ?? rest) as Obj;
      const placeId = typeof id === "string" ? id : "";
      try {
        if (!placeId) throw new CliError('Each item needs an "id"', "BAD_JSON");
        if (typeof body !== "object" || body === null || Array.isArray(body))
          throw new CliError('"patch" must be an object', "BAD_JSON");
        const bad = unknownKeys(body);
        if (bad.length)
          throw new CliError(`Unknown fields: ${bad.join(", ")}`, "BAD_JSON");
        const res = await editPlace(
          placeId,
          body,
          typeof note === "string" ? note : (flags.note ?? null),
          { dryRun: flags["dry-run"] === "true" },
        );
        results.push({ placeId, result: outcomeOf(res, "updated"), ...res });
      } catch (err) {
        results.push({ placeId, result: "failed", error: messageOf(err) });
      }
    }
    return withSummary(results);
  },

  /** A view map's own values for one place (fields, category). */
  override: async ([slug, placeId, arg], flags) => {
    const { collection: c } = await collectionOf(need(slug, "<viewSlug>"));
    if (!c.view)
      throw new CliError(
        `${c.slug} is not a view: edit its places with dc update`,
        "NOT_A_VIEW",
      );
    return overridePlace(
      c,
      need(placeId, "<placeId>"),
      readJsonArg(need(arg, "<patch>")),
      flags.note ?? null,
      { dryRun: flags["dry-run"] === "true" },
    );
  },

  /** Many overrides on one view: [{"id", "attributes"?, "category"?, …}]. */
  "override-many": async ([slug, arg], flags) => {
    const { collection: c } = await collectionOf(need(slug, "<viewSlug>"));
    if (!c.view)
      throw new CliError(
        `${c.slug} is not a view: edit its places with dc update-many`,
        "NOT_A_VIEW",
      );
    const items = readJsonArray(need(arg, "<file.json>"));
    const results: Obj[] = [];
    for (const raw of items) {
      const { id, note, ...patch } = (raw ?? {}) as Obj;
      const placeId = typeof id === "string" ? id : "";
      try {
        if (!placeId) throw new CliError('Each item needs an "id"', "BAD_JSON");
        const res = await overridePlace(
          c,
          placeId,
          patch,
          typeof note === "string" ? note : (flags.note ?? null),
          { dryRun: flags["dry-run"] === "true" },
        );
        results.push({ placeId, result: outcomeOf(res, "updated"), ...res });
      } catch (err) {
        results.push({ placeId, result: "failed", error: messageOf(err) });
      }
    }
    return withSummary(results);
  },

  /**
   * Replace a map's own custom place fields (admins). On a view: the fields
   * it adds to its source's (keys must differ from the source's).
   */
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
    const { collection: c } = await collectionOf(need(slug, "<slug>"));
    return mutate("collection.setFields", { collectionId: c.id, fields });
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
    archivePlace(need(placeId, "<placeId>"), need(flags.note, "--note"), {
      dryRun: flags["dry-run"] === "true",
    }),

  /** Remove many places: ["id", …] or [{"id", "note"?}]. */
  "archive-many": async ([arg], flags) => {
    const items = readJsonArray(need(arg, "<file.json>"));
    const results: Obj[] = [];
    for (const raw of items) {
      const item = (typeof raw === "string" ? { id: raw } : raw) as Obj;
      const placeId = typeof item.id === "string" ? item.id : "";
      try {
        if (!placeId) throw new CliError('Each item needs an "id"', "BAD_JSON");
        const note =
          typeof item.note === "string"
            ? item.note
            : need(flags.note, "--note");
        const res = await archivePlace(placeId, note, {
          dryRun: flags["dry-run"] === "true",
        });
        results.push({ placeId, result: outcomeOf(res, "archived"), ...res });
      } catch (err) {
        results.push({ placeId, result: "failed", error: messageOf(err) });
      }
    }
    return withSummary(results);
  },

  /**
   * Copy places to another map, with their photos and translations. The
   * history note records where each came from.
   */
  copy: async ([slug, ...args], flags) => {
    const target = await collectionOf(need(slug, "<slug>"));
    const placeIds = args.flatMap((a) => a.split(/[\s,]+/)).filter(Boolean);
    if (placeIds.length === 0)
      throw new CliError("Missing <placeId>. See `dc help`.", "USAGE");
    const t = target.collection as unknown as Obj & {
      id: string;
      slug: string;
      language: string;
      languages: string[];
      fields: { key: string; type: string; options?: string[] }[];
      categories: { key: string }[];
    };
    const maps = (await query("collection.list")) as {
      id: string;
      slug: string;
    }[];
    const existing = (await query("place.list", {
      collectionId: t.id,
    })) as { id: string; title: string }[];
    const byTitle = new Map(existing.map((p) => [p.title.toLowerCase(), p.id]));
    const fieldByKey = new Map(t.fields.map((f) => [f.key, f]));
    const fits = (key: string, value: unknown) => {
      const f = fieldByKey.get(key);
      return (
        f !== undefined &&
        (f.type !== "select" || (f.options ?? []).includes(String(value)))
      );
    };
    const results: Obj[] = [];
    for (const placeId of placeIds) {
      try {
        const { place: src } = (await query("place.byId", {
          placeId,
        })) as PlaceById;
        const from = maps.find((m) => m.id === src.collectionId)?.slug ?? "?";
        const there = byTitle.get(src.title.toLowerCase());
        if (there) {
          results.push({
            placeId,
            title: src.title,
            result: "skipped",
            reason: "title exists on the target map",
            existingId: there,
          });
          continue;
        }
        const category = flags.category ?? (src.category as string);
        if (!t.categories.some((c) => c.key === category))
          throw new CliError(
            `Category "${category}" isn't on ${t.slug} (${t.categories.map((c) => c.key).join(", ")}); pass --category`,
            "BAD_JSON",
          );
        const attrs = Object.entries(src.attributes ?? {});
        const dropped = attrs.filter(([k, v]) => !fits(k, v)).map(([k]) => k);
        const offered = new Set(t.languages);
        const translations = Object.fromEntries(
          Object.entries((src.translations ?? {}) as Record<string, Obj>)
            .filter(([lang]) => offered.has(lang))
            .map(([lang, tr]) => [
              lang,
              tr.attributes
                ? {
                    ...tr,
                    attributes: Object.fromEntries(
                      Object.entries(tr.attributes as Obj).filter(([k]) =>
                        fieldByKey.has(k),
                      ),
                    ),
                  }
                : tr,
            ]),
        );
        const droppedLangs = Object.keys(
          (src.translations ?? {}) as Obj,
        ).filter((l) => !offered.has(l));
        // Parent and detail belong to the source map's pool.
        const {
          parentId: _parent,
          detail: _detail,
          ...copied
        } = pickDraft(src);
        const draft = {
          ...EMPTY_DRAFT,
          ...copied,
          category,
          attributes: Object.fromEntries(attrs.filter(([k, v]) => fits(k, v))),
          translations,
          photoIds: [] as string[],
        };
        const report = {
          title: src.title,
          copiedFrom: `${from}/${placeId}`,
          ...(dropped.length ? { droppedAttributes: dropped } : {}),
          ...(droppedLangs.length ? { droppedLanguages: droppedLangs } : {}),
        };
        if (flags["dry-run"] === "true") {
          results.push({ ...report, result: "would-create" });
          continue;
        }
        if (src.photoIds.length > 0)
          draft.photoIds = (
            (await withRetries(() =>
              mutate("photo.copy", {
                collectionId: t.id,
                photoIds: src.photoIds,
              }),
            )) as { ids: string[] }
          ).ids;
        const note = [`Copied from ${from}/${placeId}`, flags.note]
          .filter(Boolean)
          .join(". ");
        const res = await createPlace(t.id, draft, note);
        results.push({ ...report, result: outcomeOf(res, "created"), ...res });
      } catch (err) {
        results.push({ placeId, result: "failed", error: messageOf(err) });
      }
    }
    return withSummary(results);
  },

  /** Every published place in full: all translations, attributes, photo ids. */
  export: async ([slug], flags) => {
    const { collection } = await collectionOf(need(slug, "<slug>"));
    const places = await query("place.export", {
      collectionId: collection.id,
      pool: flags.all === "true",
    });
    return {
      map: slug,
      url: config.url,
      exportedAt: new Date().toISOString(),
      places,
    };
  },

  /**
   * Bulk create; skips titles already on the map (or updates them with
   * --upsert), retries transient failures, continues past the rest. New
   * places that look like ones on the city's other maps get "alsoOn".
   */
  import: async ([slug, arg], flags) => {
    const items = readJsonArray(need(arg, "<file.json>"));
    const { collection } = await collectionOf(need(slug, "<slug>"));
    await refuseView(collection, "Import");
    const dryRun = flags["dry-run"] === "true";
    // Titles match every place of the map, at any detail.
    const [existing, neighbours] = await Promise.all([
      query("place.list", {
        collectionId: collection.id,
        pool: true,
      }) as Promise<
        { id: string; title: string; coverPhotoId: string | null }[]
      >,
      flags["no-cross-check"] === "true"
        ? Promise.resolve([])
        : otherMapPlaces(collection),
    ]);
    const byTitle = new Map(existing.map((p) => [p.title.toLowerCase(), p.id]));
    const withPhotos = new Set(
      existing.filter((p) => p.coverPhotoId).map((p) => p.id),
    );
    // Parents may be places earlier in the same file.
    const pool: PoolPlace[] = existing.map((p) => ({
      id: p.id,
      title: p.title,
    }));
    const results: Obj[] = [];
    for (const raw of items as Obj[]) {
      const { note, ...given } = raw;
      const title = String(given.title ?? "");
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
      const bad = unknownKeys(given);
      if (bad.length) {
        results.push({
          title,
          result: "failed",
          error: `Unknown fields: ${bad.join(", ")}`,
        });
        continue;
      }
      let input: Obj;
      try {
        input = resolveParent(given, pool);
      } catch (err) {
        results.push({ title, result: "failed", error: messageOf(err) });
        continue;
      }
      const itemNote = typeof note === "string" ? note : (flags.note ?? null);
      if (existingId) {
        try {
          // Re-running an import must not re-upload photos a place already has.
          const patch = withPhotos.has(existingId)
            ? { ...input, photos: undefined }
            : input;
          const res = await editPlace(existingId, patch, itemNote, { dryRun });
          results.push({ title, result: outcomeOf(res, "updated"), ...res });
        } catch (err) {
          results.push({
            title,
            result: "failed",
            placeId: existingId,
            error: messageOf(err),
          });
        }
        continue;
      }
      const alsoOn = crossMapMatches(input, neighbours);
      const warn = alsoOn.length ? { alsoOn } : {};
      if (dryRun) {
        results.push({ title, result: "would-create", ...warn });
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
        const res = await createPlace(collection.id, draft, itemNote);
        if (typeof res.placeId === "string")
          pool.push({ id: res.placeId, title });
        results.push({
          title,
          result: outcomeOf(res, "created"),
          ...warn,
          ...res,
        });
      } catch (err) {
        results.push({
          title,
          result: "failed",
          ...warn,
          error: messageOf(err),
        });
      }
    }
    const out = withSummary(results);
    const flagged = results.filter((r) => r.alsoOn).length;
    return flagged
      ? { ...out, summary: { ...out.summary, alsoOnOtherMaps: flagged } }
      : out;
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

  ...makeMapCommands({
    query,
    mutate,
    readJson: readJsonArg,
    need,
    fail: (message, code) => {
      throw new CliError(message, code);
    },
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
      draft:
        p.subject === "route"
          ? p.routeDraft
          : p.subject === "override"
            ? p.overrideDraft
            : p.draft,
      // Override proposals: the view's override for the place as it is now.
      ...(p.subject === "override" ? { current: p.currentOverride } : {}),
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
  if (flags.retries !== undefined) {
    const n = Number(flags.retries);
    if (!Number.isInteger(n) || n < 0 || n > 10)
      throw new CliError("--retries expects a whole number 0–10", "USAGE");
    attempts = n + 1;
  }
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
