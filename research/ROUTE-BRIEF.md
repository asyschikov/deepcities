# Route brief (one batch of routes per agent)

You draft new routes for Deep Cities maps (deepcities.org) as JSON files. The coordinator
checks and creates them; you **never write to the live site** (no `dc route-create`,
`route-update`, `create`, `update`, `import`) and never commit.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read-only CLI from there: `pnpm -s dc places <slug>` (the map's places, with lat/lng,
areas, attributes; use `--q`), `pnpm -s dc place <id>` (full text), `pnpm -s dc routes
<slug>` (existing routes: don't repeat them), `pnpm -s dc route <id>` (a full existing route,
to see the style). Templates: `scripts/data/amsterdam-centrum-route-queer-history.json`
(walk) and `scripts/data/amsterdam-sights-route-along-the-ij.json` (ride). Read the
manage-content skill's "Routes" section in `.claude/skills/manage-content/SKILL.md`.

## What a good route is

- A clear theme or story that makes sense in order; a real walk or ride someone would do.
- **Great value or nothing.** Never write a route just to have one; dropping a thin idea is a good
  result (say why). Walks where places are dense; where they are sparse, prefer a ride.
  Walks 3 to 6 km, 10 to 18 stops; rides 15 to 35 km, 12 to 20 stops. Loop when it is
  natural (start and end at a station or tram/metro stop); otherwise A to B with transit
  at both ends.
- **Stops are places on that map** (`"place": "<placeId>"`), picked for the theme. Use an
  ad-hoc stop (`"name"`, `"lat"`, `"lng"`, `"narration"`) only for a start or end point or
  a viewpoint not worth a place. Every place stop must be on the map you are writing for
  (check with `dc places <slug>`).
- Order the stops geographically so the path doesn't double back. Compute the straight-line
  distance of each leg (haversine) and the total; no leg over 1.2 km on a walk or 5 km on a
  ride unless the theme demands it (then say so in `directions`). Report the totals.
- `narration` (2 to 5 sentences) is route-specific: what to look at from here and how it
  ties to the theme; don't repeat the place's own text. Facts in narration must come from the
  place's text or a source you read; never invent.
- `legs`: one per gap, exactly stops minus one, also for a `loop` (the server closes the loop
  itself; a leg back to the start is rejected), each with `mode` and short
  `directions` where the way isn't obvious; add `via` waypoints `[lng, lat]` only to force a
  street or bridge. For ferries use `"mode": "ferry"` with the line (F3, F4...).
- `title`: short, the area and a few words (about 5 at most, e.g. "Waterland: Amsterdam's countryside"); never a mini essay or a colon-list of stops, `summary` (≤280 chars), `body` (markdown: start and end with
  how to get there, distance, rough time, best time, accessibility, anything closed on
  certain days), `mode` (`walk` or `bike`), `loop`.
- Dutch: `translations.nl` with `title`, `summary`, `body` on the route; `translations.nl.narration`
  on every stop; `translations.nl.directions` on every leg that has directions. Natural
  Dutch, written fresh, not word for word.
- Style: plain, factual, a little wry. No hype ("iconic", "hidden gem", "vibrant"). **Never an
  em dash** (use a colon, comma or parentheses). No opening hours.

## Output

Write each route to `scripts/data/amsterdam-<slug>-route-<short-name>.json` (one route per
file, the template's shape). Validate: JSON parses; summary ≤280 in both languages; legs
count right; every `place` id is on the map; `grep -c "—"` is 0.
Reply with: file paths, and per route: stops, mode, loop, total km, longest leg, and anything
you were unsure about.
