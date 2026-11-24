# Spec: one place pool per city, maps as views (Option A, first step)

Decided with the user on 2026-11-24. Goal: a place exists once; maps are views over a city's
pool. First concrete use: **Deep Centrum** (`centrum`) becomes a view of **Deep Amsterdam**
(`sights`) for borough Centrum at full detail, while Deep Amsterdam shows Centrum at a
coarser grain (standouts plus cluster places). Later uses (not in this step): theme maps
such as Jewish history as tag- or list-based views.

## Model

- `place.parentId` (text, nullable, FK place.id, on delete set null): the cluster this place
  belongs to. A **cluster** is an ordinary place that has children.
- `place.detail` (enum `city` | `district`, default `city`): `city` places show on the home
  (citywide) map; `district` places only show in views that ask for full detail. Every
  existing place stays `city`.
- `collection.view` (json, nullable): when set, the map has no places of its own and shows
  places of another map:
  `{ source: <collectionId>, where?: { borough?: string[], neighbourhood?: string[],
  subNeighbourhood?: string[], category?: string[] }, detail: "city" | "full" }`.
  - `detail: "city"`: the source's `city` places that match `where`.
  - `detail: "full"`: every matching place **except cluster parents** (places with
    published children), i.e. the leaves at full detail.
- The **home map** (a collection without `view`) lists its own places with `detail = city`.
  So Deep Amsterdam keeps showing what it shows today, plus Centrum standouts and clusters.

## Behaviour

- One helper resolves "which places does map M show" (`app/lib/` or the place router) and
  every query that today filters `eq(place.collectionId, …)` for display goes through it:
  `place.list`, `place.export`, verdict and gone counts, collection place counts
  (`collection.ts` ~61 and ~190), document attachments (`document.ts` ~91), proposal checks
  (`proposal.ts` ~137). Grep `place.collectionId` and `collectionId` to find them all.
- A place's **home** is still `place.collectionId`: edits, proposals, permissions, history,
  fields and categories come from the home map. A view map uses its source's categories
  and fields for display (Deep Centrum was created from sights, so they are identical).
- Place page under a view URL (`/$city/$slug/p/$placeId`) works when the place is in the
  view; it may show the home map's breadcrumb or the view's: keep the view's for context.
- Place page: if the place has a parent, show "Part of <parent title>" linking it (in the
  current map if visible there, else the home map). If it has children, show the list of
  its children (title, summary) linking into a view where they are visible (prefer a view
  of the same source with `detail: full` whose `where` matches; else the home map).
  All strings via `t()`, keys in `messages/en.json` (and nl if the app has it).
- Creating a place from a view map creates it in the source map (with `detail: district`
  when the view is `full`), so contributions keep working.
- The map page of a view shows its own title, tagline, description, center and zoom (all
  already per collection).

## API and CLI (`scripts/dc.ts`)

- `PlaceDraft` gains optional `parent` (place id or exact title in the same home map) and
  `detail`. They go through proposals like every other field (diff, history, validation).
- `dc import` into a view map is refused with a clear message (import into the source).
  `dc places <view>` lists what the view shows.
- `dc map-view <slug> <json>`: set or clear `collection.view` (super admin / map admin).
- `dc help` and `dc schema` document all of this.

## Migration of live data (separate, run only after the user says go)

A script (`scripts/migrate-centrum-view.ts` or a dc command) that:
1. moves every place and proposal of `centrum` into `sights` (`collectionId`), setting
   `detail = district`;
2. sets `centrum.view = {source: sights.id, where: {borough: ["Centrum"]}, detail: "full"}`;
3. is idempotent and prints what it did; has a `--dry-run`.
Then, from the research repo: import the cluster places into `sights` (detail city), set
members' `parent`, and set standouts' `detail = city`.

## Rules

Follow CLAUDE.md and DEVELOPMENT.md (arrow functions, no `any`, no `!`, enums in
`app/lib/constants.ts`, permission checks via `requireCap()`, i18n via `t()`, run
`pnpm dev` once if routes change). `pnpm db:generate` for the migration (commit it).
Tests for the view resolution helper and for the proposal path with `parent`/`detail`.
Before finishing: `pnpm check && pnpm typecheck && pnpm test`.
