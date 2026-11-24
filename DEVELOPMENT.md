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
  approving a proposal). `mode` is its main mode, `walk` or `bike` (what it is, what
  the list shows and filters on; inferred from the legs when a draft leaves it out).
  `loop` marks a route that ends where it starts (inferred when the last stop is the
  first place or within 150 m of it; editors can override); a loop's finish counts
  once in its stops. `stops`: ordered places (`placeId`) or ad-hoc points
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
- `photo`, `collection_member` (role per map).
- `verdict` — one visitor's word on a place: amazing / nice / okay / skip (the same
  scale as the map's rank; no stars). Places show the tally per word.
- `checkin` — "I was here": a visit, private to the visitor, repeatable, with where they
  were when the phone knew. `checkin_photo` holds its photos: a selfie stays private
  (served only to its owner at `/media/checkins/<id>`); a photo of the place is also a
  `photo` offered to the place through an edit proposal. Checking in and verdicts need
  only a signed-in account (`can.visit`: anyone not banned from the map).
- `gone_report` — a visitor's "it's gone, or I couldn't find it" (one per person per
  place, optional note). Places show the tally as a warning; moderators act on it in
  Review → Reported gone: mark gone (sets the map's select field that offers "Gone",
  see `app/lib/gone.ts`), remove from the map, or dismiss ("still there").
- Explore and Edit modes (`app/lib/app-mode.ts`): the same pages, with the explorer's
  tools first (near me, following a route, check-ins, visits) or the editor's
  (suggest, review, manage, history). Defaults by device, remembered per browser.
  Location is only started by the reader (`app/lib/geolocation.ts`).
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
  `pnpm dc areas-import`. Geometry is simplified (~2 m) on import. On the map, the
  "boundaries" dropdown (`?areas=<level>`, kept across the map's pages) draws every
  area of one level with its name (`area.layer`; names placed by `labelPoint` and kept
  from overlapping by MapLibre). Display only: places are not linked to or filtered by
  areas, and the place `borough`/`neighbourhood` text fields are separate.
- **Phones**: the map fills the screen; the panel (`#map-panel`) is a full-screen sheet
  over it, toggled by a floating List/Details ⇄ Map button. Opening a place, route or form
  shows it; picking a spot on the map hides it. Open/closed is layout, not URL state.
- **Pin size** (`?pins=large|small`, a dropdown next to grouped pins; medium when absent):
  `PIN_PX` sets `--pin` on the map, and pins, their borders and the highlight scale with it.
- **Grouped pins** (`?cluster=true`, a dropdown next to boundaries): nearby place
  pins merge into counted discs (`supercluster`, regrouped as you zoom; the ring shows
  each category's share). Tapping a disc zooms in until it splits. Faded pins are left
  out and the open or hovered place always shows on its own.

## URLs and navigation

- **Maps live under their city**: `/<city>/<map>` (`/amsterdam/sights`), with places,
  routes and documents below (`/amsterdam/sights/p/<id>`). The city segment is derived
  from `collection.city` (`citySlug`, `app/lib/cities.ts`); `/<city>` lists that city's
  maps and `/` redirects to `/amsterdam` while there is one city. Map slugs are still
  unique site-wide. The header shows where you are: `Deep Cities / Amsterdam / <map>`,
  without the map segment for the city's own map (`collection.cityDefault`, e.g. Deep
  Amsterdam), which the city page also lists first. There are no old-address redirects or slug aliases: renaming a
  map changes its address outright (fine while the site is unpublished).

- **State lives in the URL.** Anything a reader can see or choose on a map page is a
  search param (`app/lib/map-search.ts`): language, boundaries, pin grouping, tab,
  search, category, field filters, route filters (`?mode=bike&loop=true`), map position (`?map=zoom/lat/lng`), the selected route stop/leg, the
  gallery photo and expanded sections. Map-wide ones are kept across the map's pages
  (`MAP_RETAINED_PARAMS`). Form drafts, dialogs and hover are not.
- **Changing a view replaces the history entry; going to another page pushes one** —
  except between peers: place → place (a map pin, a link in the text) or document →
  document replaces too (`useIsPeerOf`), so Back skips the hops.
  Back returns to the previous page exactly as it was (filters, selected stop,
  list scroll — the side panel is restored via `data-scroll-restoration-id`).
- **Back links go back.** `<BackLink>` returns to the previous page of this visit and
  names it ("Back to Post-war schools and a mill"); its `fallback` parent link is used
  only when there is no history (a shared link, a reload).
- **Saving a form doesn't leave it in history:** `useLeaveForm` goes back to the page
  it was opened from, or replaces the form's entry.

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
pnpm dc places sights --sub-neighbourhood Landlust --field heritage_status="National monument"
pnpm dc create sights draft.json --note "why"
pnpm dc update <placeId> '{"summary":"…"}'
pnpm dc photo sights ./photo.jpg --credit "Jane Doe" --license "CC BY 4.0"
pnpm dc fields sights scripts/data/amsterdam-fields.json   # map schema
pnpm dc import sights scripts/data/bos-en-lommer-monuments.json [--upsert]
```

Maps: `dc map-create map.json [--from <slug>]` (super admins; `--from` copies
another map's categories, fields and languages), `dc map-export <slug>` (the whole
configuration in the same shape), `dc settings`, `dc fields`, `dc languages` to
change one, `dc city-default <slug> on|off` (the city's own map), and
`dc members <slug>` / `dc member <slug> <email> <role|none>` for roles.

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

Live: https://deepcities.org, the only address (Cloudflare Registrar; the Worker
serves it and www.deepcities.org as custom domains, and www redirects to it,
`app/lib/redirects.server.ts`). There is no workers.dev address (`workers_dev: false`);
the CLI and API use https://deepcities.org too.

Stored data has every field: when a field is added, a migration fills it in for
existing rows and drafts (e.g. `0012_complete_drafts.sql`) rather than code defaulting
it when reading.

Email: sign-in links are sent from `hello@deepcities.org` through Cloudflare Email
Service (deepcities.org is onboarded under Email Sending, which added its SPF/DKIM/DMARC
records). Email Routing forwards mail to hello@deepcities.org to the owner, so replies
reach a person.

## Not done yet

- Rate limiting per IP on `auth.requestLink` (today: 5 links per email per hour).
- Changing a custom field's type doesn't migrate existing values (they fail validation
  on the next edit until fixed). Truly deleting a field is not supported yet.
- Routes: GPX export, audio narration, custom route fields, importing routes in bulk.
- Orphaned photo cleanup (uploads never referenced by an approved proposal).
