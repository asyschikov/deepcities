# Spec: list views (theme maps whose places are picked one by one)

2026-11-24. First use: a **Hofjes of Amsterdam** map. Builds on map views (`collection.view`,
`place.detail`, `place.parentId`) and per-map overrides (`place_override`, view-own fields).
Read VIEWS-SPEC.md and OVERRIDES-SPEC.md in research/centrum/ and DEVELOPMENT.md (views,
overrides).

## Model

- `collection.view` gains a list mode: `{source, list: true}`. A list view shows exactly the
  places in a new table `collection_place` (`collectionId`, `placeId`, `addedAt`, `addedBy`;
  PK both; cascade on delete) whose place belongs to the source and is not archived, at any
  `detail`. `where` and `detail` are ignored for list views (validate: not both).
- `place.detail` gains a third value, `theme`: the place is shown only by list views that
  include it (not on the home map, not in `detail: full` views). Use for places a theme map
  needs but the general maps leave out (e.g. the Begijnhof, A-list, on a hofjes map).
- Overrides and view-own fields work on list views exactly as on other views.

## Behaviour

- Adding a place while on a list view: creates it in the source with `detail: theme` and adds
  it to the list (both in the same proposal; on approval both apply).
- Adding or removing an existing pool place to/from the list: a proposal on the view
  (subject `membership`, moderators+ publish immediately), shown in history of the view.
  UI: on a list view's manage page, a simple search-and-add over the source pool and a remove
  button per place. Keep it minimal.
- Place page of a theme place opened under the home map: 404 like any place the map doesn't
  show; links to it prefer a view that shows it.

## CLI

- `dc map-view <slug> '{"source":"sights","list":true}'` (source by slug or id, as today).
- `dc list-add <view> <placeId|title>...` / `dc list-remove <view> ...` (`--dry-run`,
  `--note`); also from a file (`-`/path with an array).
- `dc import <listView> <file>`: allowed for list views: titles that exist in the source are
  added to the list (and with `--upsert` updated); new ones are created in the source with
  `detail` from the draft, default `theme`, and added. A draft may carry `override:
  {attributes, category}` for the view, applied after creation. Report per item.
- `dc places/export <listView>` as for views. `dc help`/`dc schema` documented.

## Rules

Same as the earlier specs: CLAUDE.md conventions, `requireCap()`, `t()`, migration via
`pnpm db:generate` (committed), tests against the in-memory test DB (list resolution, theme
detail excluded from home and full views, import into list view, membership proposals).
`pnpm typecheck && pnpm test` must pass.
