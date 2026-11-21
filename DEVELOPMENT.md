# Deep Cities — development

## Quick start

```bash
pnpm install
pnpm re-seed     # local D1: migrations + test users + Amsterdam map; imports places if dev is running
pnpm dev         # http://localhost:5173
```

Sign in at `/auth` with any email. Locally no email is sent: the page shows the
magic link directly. Seeded accounts (one per role on the Amsterdam map):

| Email                          | Role                                            |
| ------------------------------ | ----------------------------------------------- |
| `superadmin@deepcities.local`  | super admin (site-wide)                         |
| `admin@deepcities.local`       | map admin                                       |
| `mod@deepcities.local`         | map moderator                                   |
| `contributor@deepcities.local` | explicit contributor                            |
| `newbie@deepcities.local`      | no role (contributes because the map is "open") |

To make your own account super admin: sign in once, then `pnpm set-role you@example.com super_admin`.

## Stack

Same as bookverse: TanStack Start on Cloudflare Workers, D1 + Drizzle, tRPC +
TanStack Query, shadcn/Tailwind 4, react-i18next, Biome, Vitest. Differences:

- **Auth** — passwordless email magic links, self-hosted (`app/lib/auth.server.ts`).
  Token and session ids are stored only as SHA-256 hashes. The emailed link opens
  a confirm page that POSTs the token, so mail scanners can't burn it. Email goes
  through Cloudflare Email Service (`send_email` binding `EMAIL`); the sender
  domain must be onboarded in the dashboard (Compute → Email Service → Email Sending).
- **Maps** — MapLibre GL + OpenFreeMap vector tiles (no API key). The MapLibre worker
  is imported with `?url` and passed to `setWorkerUrl()` (`MapView.tsx`); its built-in
  lookup breaks once Vite bundles the library.
- **Photos** — resized client-side to ≤1600px WebP, stored in R2, served by the
  worker at `/media/photos/:id` (`app/server.ts`).

## Domain model

- `collection` — one collaborative map (title, city, centre, categories, contribution
  policy, and `fields`: the map's own place schema).
- `place` — the published state of a POI. Never edited directly. Standard fields
  (title, summary, body, category, location, address, links, photos) plus an area
  hierarchy, coarse to fine: `municipality` / `borough` / `neighbourhood` /
  `subNeighbourhood` (Amsterdam: gemeente / stadsdeel / gebied / wijk, e.g.
  Amsterdam / West / Bos en Lommer / Landlust). Map-specific values live in
  `attributes` (`{ key: value }`), checked against `collection.fields`
  (`app/lib/fields.ts`).
- Custom fields (`FieldDef`): key, label, type (`text`, `longtext`, `number`, `url`,
  `select`, `boolean`), options, required, help, hidden. Admins edit them under
  Manage → Place fields or with `pnpm dc fields`. Keys are permanent and fields are
  never deleted, only hidden (values kept); the server rejects removals.
- `route` — a walk or ride through the map, stored like a place (only written by
  approving a proposal). `stops`: ordered places (`placeId`) or ad-hoc points
  (`placeId: null`, allowed but discouraged in the UI); place stops keep a name/position
  snapshot so a route survives a place being archived. `legs`: one per gap, with
  `mode` (walk, bike, tram, bus, metro, ferry, train), `via` waypoints, the drawn
  `path` (`[lng, lat]`), `snap` and `directions`. Walk/bike legs can follow streets:
  `route.snap` proxies the FOSSGIS OSRM servers (routing.openstreetmap.de, foot/bike
  profiles), only while editing. The resulting path is stored, so viewing needs no
  router. Distance/time are computed (`app/lib/routes.ts`). Routes are not drawn on
  the map until you open the Routes tab or a route.
- **Content languages** (not UI i18n). `collection.language` is the language the
  map's content is written in; `collection.languages` lists the other languages
  readers can switch to (the switcher on the map, `?lang=nl`, kept on links by
  `retainSearchParams`). Places, routes, route stops and legs carry `translations`
  (`{ nl: { title?, summary?, body? } }`; place `attributes` for text fields;
  `narration` / `directions` on stops / legs). Map texts and labels live in
  `collection.translations` (title, tagline, description, category labels, field
  labels, help and select-option labels; option _values_ stay in the base
  language). Anything untranslated falls back to the original, per field.
  `app/lib/content-lang.ts` (`localize`, `localizePlace`, `localizeRoute`,
  `localizeCollection`) resolves this on the client; the map layout provides
  `lang` / `translateTo` via `useMapPage()`. Translations are part of drafts, so
  they go through proposals, history and review diffs like any other edit. The
  server drops translations into the base language, and rejects languages the map
  doesn't offer unless the object already had them.
- `proposal` — a suggested change (`create` / `edit` / `archive`) carrying a full
  draft snapshot (`subject` "place" → `placeId`/`draft`, "route" →
  `routeId`/`routeDraft`). Approving copies the draft onto `place` and bumps `place.revision`.
  Approved proposals are the place's history. Proposals record `baseRevision`, so
  reviewers are warned when the place changed after an edit was suggested.
- `photo`, `rating` (1–5, one per user per place), `collection_member` (role per map).
- `document` — long-form markdown with pictures (essays, biographies, background) that
  belongs to a map. `document_attachment` shows it on subjects: the map itself
  (`collection`), places and routes (`subject_type` + `subject_id`, no foreign key, so
  new subject types need no migration). Moderators+ write documents directly; every save
  is a `document_revision` snapshot (the history). Pictures are ordinary `photo` rows:
  inline as `![caption](photo:<id>)`, the rest of `photoIds` forms the cover and gallery.
  Links inside any markdown may target `place:<id>` and `doc:<id>`. The dialect is
  parsed in `app/lib/markdown.ts` (unit-tested) and rendered by `MarkdownView`.
- `area` — a city's official divisions, shared by every map whose `collection.city`
  matches (case-insensitive). Hierarchical through `parent_id`; levels are
  `municipality` → `borough` → `neighbourhood` → `subNeighbourhood` (Amsterdam:
  gemeente → stadsdeel → gebied → wijk; a few wijken outside any gebied hang straight
  under their stadsdeel). Reference data, not proposals: super admins replace it with
  `pnpm dc areas-import`. Geometry is simplified (~2 m) on import. Places are **not**
  linked to areas: the map computes membership with point-in-polygon
  (`app/lib/areas.ts`), so the area picker filters places, outlines the chosen area and
  its sub-areas, and zooms to it. The place `borough`/`neighbourhood` text fields are
  separate and unchanged.

## Roles

Resolved per map by `resolveRole()` in `app/lib/permissions.ts` (unit-tested):

| Capability                                                      | contributor | moderator | admin | super admin |
| --------------------------------------------------------------- | :---------: | :-------: | :---: | :---------: |
| Suggest places / edits / removals, upload photos, rate          |      ✓      |     ✓     |   ✓   |      ✓      |
| Approve / reject; own changes publish instantly                 |             |     ✓     |   ✓   |      ✓      |
| Manage people (moderators, contributors, bans) and map settings |             |           |   ✓   |      ✓      |
| Appoint map admins, create maps, site roles                     |             |           |       |      ✓      |

On an **open** map every signed-in user is a contributor; on a **members** map only
listed contributors are. Banned users are read-only.

## Scripts

| Script                                                 |                                                |
| ------------------------------------------------------ | ---------------------------------------------- |
| `pnpm dev`                                             | Dev server (Vite + local Workers runtime)      |
| `pnpm re-seed`                                         | Reset local D1 and load `scripts/seed.ts` data |
| `pnpm db:generate`                                     | New migration from schema changes (commit it)  |
| `pnpm db:migrate`                                      | Apply migrations to local D1                   |
| `pnpm set-role <email> <user\|super_admin> [--remote]` | Change a site role                             |
| `pnpm mint-token <email> [--remote] [--name N]`        | Mint an API token directly in D1 (bootstrap)   |
| `pnpm dc <command>`                                    | Content CLI, see below                         |
| `pnpm check` / `pnpm typecheck` / `pnpm test`          | Biome / tsc / Vitest                           |

## Content CLI (`pnpm dc`)

Agents: the `manage-content` skill (`.claude/skills/manage-content/SKILL.md`) is the
playbook for researching and importing content with this CLI.

A JSON-in/JSON-out client for the public API, meant for scripts and LLM agents.
`pnpm dc help` documents every command; `pnpm dc schema` prints the draft fields.
It authenticates with a personal API token (`/me` → API tokens, or
`pnpm mint-token`), so it has exactly its owner's permissions: contributor
changes go to review, moderator+ changes publish immediately and show in history.

```bash
pnpm dc login dc_… [--url http://localhost:5173]   # or env DC_TOKEN / DC_URL
pnpm dc places amsterdam-c-list --sub-neighbourhood Landlust --field heritage_status="National monument"
pnpm dc create amsterdam-c-list draft.json --note "why"
pnpm dc update <placeId> '{"summary":"…"}'
pnpm dc photo amsterdam-c-list ./photo.jpg --credit "Jane Doe" --license "CC BY 4.0"
pnpm dc fields amsterdam-c-list scripts/data/amsterdam-fields.json   # map schema
pnpm dc import amsterdam-c-list scripts/data/bos-en-lommer-monuments.json [--upsert]
```

Languages: `dc languages <slug> langs.json` sets `language`, `languages` and the
map's `translations`. Place and route drafts take `translations`; `dc update` and
`route-update` merge them per language and field (`null` deletes).

Routes: `dc routes`, `dc route`, `dc route-create <slug> route.json`,
`dc route-update`, `dc route-archive`. Stops are given by place id or exact title;
the CLI computes leg paths (street routing for walk/bike).

Pass drafts as files or stdin: `pnpm` re-parses inline arguments through a shell, so
inline JSON with apostrophes or parentheses breaks.

Documents are Markdown files with YAML front matter (`title`, `summary`,
`attach: {map, places, routes}`, `photos`), imported by title:

```bash
pnpm dc doc-import amsterdamse-school research/ams-school/documents/   # dir or files
pnpm dc docs amsterdamse-school --map
```

Translations sit next to a file as `<name>.<lang>.md` (front matter: `title`, `summary`)
and are stored as the document's `translations`. Files are created in file order,
which is the order lists show, so number them (`01-introduction.md`).

Picture lines in the body may use any photo source (`![c](commons:File:…)`, a URL or a
local path) and `[text](place:)` / `[text](doc:)` links resolve by title; uploads are
cached in `~/.config/deep-cities/photo-cache.json`, so re-imports are no-ops.

`import --upsert` updates places whose title already exists (no-op edits are skipped,
so it is safe to re-run after editing the data file).

Photos can be local files, URLs or Wikimedia Commons files (`commons:File:…`, or a
Wikidata P18 URL); Commons author, licence and source link are filled in and shown
under the photo.

## Data sources

`scripts/data/bos-en-lommer-monuments.json`: the listed monuments (rijksmonumenten and
gemeentelijke monumenten) in Bos en Lommer, from the City of Amsterdam monuments API
(`api.data.amsterdam.nl/v1/monumenten`), filtered by the official Bos en Lommer area
boundary (`gebieden/ggwgebieden`, GE04), cross-referenced with Wikidata (photos,
Wikipedia links) and the national register (monumentenregister.cultureelerfgoed.nl).
`subNeighbourhood` is the wijk containing each point (`gebieden/wijken` geometry);
the `attributes` (status, numbers, build years, architect, year listed) come from the
same monuments API. `scripts/data/amsterdam-fields.json` is the map's field schema.

`scripts/data/amsterdam-areas.json`: Amsterdam's stadsdelen, gebieden and wijken
(current versions) from `api.data.amsterdam.nl/v1/gebieden/` (CC0). Refresh with
`node scripts/fetch-amsterdam-areas.ts`, then
`pnpm dc areas-import scripts/data/amsterdam-areas.json` (super admin; matched by
level + code, so ids survive re-imports, and areas gone from the file are removed).

## Licences

- **Code**: AGPL-3.0 ([LICENSE](LICENSE)).
- **Content**: place text and data (titles, summaries, descriptions, attributes),
  including `scripts/data/`, is CC BY-SA 4.0 ([LICENSE-CONTENT](LICENSE-CONTENT)).
- **Photos** are not covered by either: each keeps its own credit and licence,
  stored with the photo and shown under it.

## Deploying

One environment: the live site, configured at the top level of `wrangler.jsonc`
(worker `deep-cities`, D1 `deep-cities`, R2 `deep-cities`). Local dev runs the same
config against local storage; `.dev.vars` switches it to dev mode. A staging
environment can be added later as `env.alpha`.

```bash
pnpm ship        # build → apply D1 migrations (remote) → wrangler deploy
```

Live: https://deep-cities.bookverse-app.workers.dev

Temporary: emails are sent from `deepcities@bookver.se` until Deep Cities has its own
domain — change `EMAIL_FROM_ADDRESS` (and onboard the new domain) when it does.

## Not done yet

- Own domain (add a route/custom domain in `wrangler.jsonc`, update `SITE_ORIGIN`).
- Rate limiting per IP on `auth.requestLink` (today: 5 links per email per hour).
- Changing a custom field's type doesn't migrate existing values (they fail validation
  on the next edit until fixed). Truly deleting a field is not supported yet.
- Routes: GPX export, audio narration, custom route fields, importing routes in bulk.
- Orphaned photo cleanup (uploads never referenced by an approved proposal).
