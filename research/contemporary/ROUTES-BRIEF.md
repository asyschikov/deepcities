# Brief: routes for the Contemporary Architecture map

The map (slug `contemporary`, a list view over the Deep Amsterdam pool) has about 200
buildings from 2000 onwards, or older ones remodelled since. Routes are walks and bike rides
through a handful of them, with narration at each stop. The user asked for both walks and
rides.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`. Write only
your own files, `research/contemporary/routes/<slug>.yaml`. Never write to the live site,
never commit.

## Fact base

- The live place as this map shows it: `env -u DC_URL -u DC_TOKEN pnpm -s dc place <id> --map contemporary`
  (text, the map's fields `designer`, `completed`, `work`, `access`, `recognition`, and
  `extra_description`, in English and `translations.nl`). Get ids and exact titles from
  `env -u DC_URL -u DC_TOKEN pnpm -s dc places contemporary`.
- `research/contemporary/places/*.yaml` and `notes/*.md`: drafts and their sources.
- **Never make anything up.** Every fact in a narration comes from these texts or their
  sources. No superlatives or "first/only" unless the place text has them, attributed. If
  unsure, leave it out. No em dashes or spaced en dashes anywhere (use a colon, comma or
  parentheses).

## File format

Exactly as in `research/ams-school/ROUTES-BRIEF.md` (read its "File format" and "Writing"
sections, and one example, `research/ams-school/routes/plan-west.yaml`). Stops use the exact
English live title. Validate with `python3 -B research/contemporary/scripts/routes.py check`
(it reads live titles; ignore problems reported for other agents' files).

## Writing

- **Narration is route-specific**: what to look at from this spot, and how it connects to the
  previous and next stops (contrasts in material, the same architect twice, old and new side by
  side, who the building is for). Don't paste the place description. 60 to 150 words a stop.
- **The body**: start, end (nearest station or ferry), distance and time (straight-line x 1.3;
  walking 4 km/h plus stops, cycling 12 km/h), which buildings you can go into (from `access`)
  and when, then a short paragraph on the theme.
- **Two languages, both native.** Dutch written from the Dutch place texts, not translated.
- Directions only where the way isn't obvious; name a street only if it's in a place's
  address or text. Order stops so the route doesn't double back. 8 to 16 stops.
- Mode: walk routes `mode: walk`; ride routes `mode: bike`; a ferry leg is `mode: ferry`
  with directions (the free GVB ferries from behind Centraal Station: F3 to Buiksloterweg,
  F4 to NDSM).

## Report

For each route: file, stops, distance and time, changes to the planned stops and why,
anything uncertain.
