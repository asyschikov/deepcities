# Spec: per-map field overrides for view maps

Decided with the user on 2026-11-24 ("maps must be able to override fields"). Builds on map
views (`collection.view`, `place.parentId`, `place.detail`; see VIEWS-SPEC.md and
`app/lib/views.ts`, `app/trpc/map-places.ts`).

## Why

A place exists once (its home map). A view map shows it, but sometimes needs its own value:
the first case is rank. Deep Amsterdam (home) ranks a Centrum standout Nice citywide; Deep
Centrum (a view) ranks the same place Amazing. Theme maps (later) need fields of their own.

## Model

- New table `place_override`: `collectionId` (the view map), `placeId`, `attributes` (json,
  only overridden keys), `category` (nullable), `updatedAt`, `updatedBy`; primary key
  (collectionId, placeId); cascade on delete of either.
- A **view** may define **extra fields** of its own: `collection.fields` on a view is now
  "fields added by this view" (today a view displays its source's fields). Displayed field
  list of a view = source fields followed by the view's own fields (own keys must not clash
  with source keys). Its own categories stay the source's (category override must be one of
  the source's category keys).
- Only views have overrides. A home map edits its places directly (through proposals, as now).

## Behaviour

- Effective place in map M = home place with M's override merged on top: attribute keys
  replace per key (null in an override means "unset on this map"), category replaces.
- Everything that shows places of a map uses the effective values: `place.list`,
  `place.export`, `place.byId` when opened under that map, filters on fields and category
  (map filtering is client side over `place.list`, check), counts by category.
- Editing an override: on a view map, the place page's edit flow for **fields and category**
  writes an override for that map; text, location, photos, parent and detail still edit the
  home place. Overrides go through the same proposal and moderation flow, but in the view
  map's queue and with the view map's permissions (`requireCap` on the view). Add a proposal
  subject (e.g. `override`) rather than overloading place drafts; history shows them.
- When an override equals the home value, drop that key (no-op overrides are not stored).

## API and CLI

- tRPC: override read in `place.list`/`byId`/`export` for the view; a procedure to propose
  or set an override (moderators+ publish immediately, like place edits).
- `dc override <viewSlug> <placeId> <patch|->` with `{attributes?, category?}`; `dc
  override-many <viewSlug> <file|->` `[{id, attributes?, category?}]`, both with `--dry-run`.
- `dc update` / `dc update-many` against a view slug with only attributes/category in the
  patch could route to overrides; simpler: keep it explicit with the override commands and
  make `dc update` print a hint when used with a view slug. Choose the simplest sound option.
- `dc places <view>` and `dc export <view>` show effective values, and mark which keys are
  overridden (e.g. `overridden: ["rank"]`).
- `dc fields <viewSlug>` sets the view's own extra fields (validated against source keys).
- `dc help` and `dc schema` document all of it; DEVELOPMENT.md gets a short section.

## Rules

Follow CLAUDE.md and DEVELOPMENT.md (arrow functions, no `any`, no `!`, enums in
`app/lib/constants.ts`, `requireCap()`, i18n via `t()`). `pnpm db:generate` for the
migration (commit it). Tests for the merge rule, the list/byId paths and the override
proposal path, against the in-memory test DB used by `app/trpc/views.test.ts`.
`pnpm typecheck && pnpm test` must pass (`pnpm check` has pre-existing failures in
`scripts/data/*.json` formatting; leave those files alone).
