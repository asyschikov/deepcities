---
name: manage-content
description: Research, add, update, translate, review and archive places (POIs), routes (walks/rides through places), photos, custom fields and map content languages on Deep Cities maps through the `pnpm dc` CLI. Use when asked to add places or sights to a map, research a neighbourhood, import a list (monuments, schools, churches…), create a walking or cycling route or tour, fix or enrich place data, upload or attribute photos, change a map's custom fields, translate content into another language, or work through the moderation queue.
---

# Managing Deep Cities content

All content goes through `pnpm dc` (`scripts/dc.ts`), a JSON-in/JSON-out client of the
public API. Never write to D1 directly for content: the CLI goes through proposals, so
every change is validated, recorded in the place's history, and attributed to the token
owner.

## Before you start

1. `pnpm dc whoami` shows which site you are on (`url`) and as whom.
   - The default site is **live** (https://deep-cities.bookverse-app.workers.dev).
   - With a moderator/admin token, writes **publish immediately**.
   - To work locally: `pnpm dev`, then `DC_URL=http://localhost:5173 DC_TOKEN=$(pnpm -s mint-token superadmin@deepcities.local --name agent | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).token))')`.
   - Not logged in: ask the user for a token from `<site>/me` → API tokens (`pnpm dc login <token>`), or mint one with `pnpm mint-token <email> --remote` if they ask you to.
2. `pnpm dc help` and `pnpm dc schema` are the reference. Read them rather than guessing field names.
3. `pnpm dc map <slug>` gives the map's `categories` (valid `category` keys) and `fields` (custom fields for `attributes`, with types and options). `pnpm dc maps` lists slugs.
4. `pnpm dc places <slug> [--q TEXT] [--sub-neighbourhood X] [--field key=value]` shows what is already there. Check before adding, to avoid duplicates.

Tell the user which site you are about to write to before bulk changes on live.

## Workflow for adding places

1. **Research** (see Sources below). Collect facts with their sources; don't write from memory.
2. **Write a data file** in `scripts/data/<area>-<topic>.json`: a JSON array of drafts.
   Commit-worthy: it is the reproducible record of what was imported and why.
3. **Dry run**: `pnpm dc import <slug> scripts/data/<file>.json --dry-run`.
4. **Import**: `pnpm dc import <slug> scripts/data/<file>.json --note "Source: …"`.
   - Existing titles (case-insensitive) are skipped.
   - With `--upsert`, existing titles are updated instead. No-op edits are skipped, and photos aren't re-uploaded for places that already have some. Safe to re-run after editing the file.
   - It keeps going past failures. Read `summary` and every `failed` result, fix, and re-run.
5. **Verify**: `pnpm dc places …` / `pnpm dc place <id>`, and open a place page if a browser is available.
6. Report to the user:
   - what was added and from which sources;
   - anything uncertain (conflicting dates, weak sources, borderline inclusions);
   - which places lack photos.

Single changes:
- `pnpm dc create <slug> '<json>'`
- `pnpm dc update <placeId> '<patch>'`: the patch is merged. Arrays replace wholesale; `attributes` merge per key, and `null` deletes a key.
- `pnpm dc archive <placeId> --note "why"`: removes the place from the map; it stays in history. Archive rather than recreate when correcting duplicates.

Pass JSON as a file path or `-` (stdin), not inline: `pnpm` re-parses arguments through
a shell, so inline JSON with apostrophes or parentheses breaks.

## Draft conventions

```json
{
  "title": "Opstandingskerk (Kolenkit)",
  "summary": "One or two sentences, ≤280 chars: what it is and why it's worth a look.",
  "body": "Markdown. History, then what to look for on site…",
  "category": "religious",
  "lat": 52.377672, "lng": 4.842943,
  "address": "Street 1",
  "municipality": "Amsterdam", "borough": "West",
  "neighbourhood": "Bos en Lommer", "subNeighbourhood": "De Kolenkit",
  "links": [{ "label": "Wikipedia (nl)", "url": "https://nl.wikipedia.org/wiki/…" }],
  "attributes": { "heritage_status": "National monument", "built": "1955–1956" },
  "photos": ["commons:File:Some_file.jpg"],
  "note": "Imported from …"
}
```

- **Language**: English, plain and concrete. Keep Dutch names, with an English gloss on first use (*kolenkit* (coal scuttle)).
- **Title**: the name people use. Add a disambiguator in brackets when useful. Titles are the import key, so keep them stable.
- **Summary**: the hook. No "This building is…" filler.
- **Body**: a few short paragraphs.
  - Who built it, when and why, and what's notable.
  - Then a "look for" bulleted list of things visible from the street.
  - Mention the current use if it differs (a church that is now a theatre).
  - Don't repeat values that are already in `attributes`.
- **Location**: the building's own point (the official register point, or the entrance), not the street centroid. Use 6 decimals.
- **Area hierarchy**, coarse to fine. In Amsterdam this is gemeente / stadsdeel / gebied / wijk:
  - Derive it from official boundaries; don't guess.
  - The data file uses the long-established names. Check other places on the map with `dc places` and match their spelling exactly.
- **Category**: one of the map's keys. If nothing fits, tell the user rather than misfiling. Adding categories is a map setting, done in the UI.
- **Attributes**: only keys from `dc map` → `fields`, with the right types (`number` must be a JSON number; `select` must exactly match an option). Leave a key out when the value is unknown.
- **Links**: ≤6. Prefer official registers, then Wikipedia and Wikidata. Give each a distinct label; if two would share a label, add the number.
- **Photos**: ≤8, the first is the cover.
  - Prefer Wikimedia Commons: the CLI fills in author, licence and source automatically.
  - Use other photos only with a known licence; pass `--credit`, `--license` and `--source-url`.
  - Never use photos with an unclear licence.

## Routes

A route is an ordered list of **stops** joined by **legs**. Routes are hidden on the
map until someone opens the Routes tab or a route.

- `pnpm dc routes <slug>` lists routes; `pnpm dc route <id>` shows one in full.
- Create from a file:

  ```json
  {
    "title": "Post-war schools of Landlust",
    "summary": "One or two sentences: what the walk is about and why do it.",
    "body": "Markdown intro: where to start, length, best time, accessibility.",
    "stops": [
      { "place": "Prinses Beatrixschool (Multatulischool)", "narration": "What to look at here, in the context of this route." },
      { "place": "<placeId or exact title>" },
      { "name": "Bench by the canal", "lat": 52.3838, "lng": 4.8566, "narration": "…" }
    ],
    "legs": [
      { "directions": "Walk round the school field and turn left." },
      { "mode": "tram", "directions": "Tram 7 towards Azartplein, 3 stops." }
    ]
  }
  ```

  `pnpm dc route-create <slug> route.json --note "why"`.
- **Stops** should be places on the map, given by id or exact title. If a stop is worth visiting but missing, add it as a place first (`dc create`), then reference it. Use an ad-hoc point (`name` + `lat` + `lng`) only for things that aren't worth a place: a viewpoint, a corner, the start at a station exit.
- **Narration** on a stop is route-specific: what to look at *from here*, and how it connects to the route's theme. Don't repeat the place's own description, which readers can open.
- **Legs**: one per gap, in order. Leave one out and it defaults to a walk. Walk and bike legs follow streets automatically. Add `via` waypoints (`[lng, lat]` or `{"lat","lng"}`) to force a particular street or path. Give `directions` where the way isn't obvious. Use transit modes with directions naming the line and stop.
- `dc route-update <id> patch.json` merges onto the route. `stops` and `legs` replace wholesale; legs between unchanged stops keep their paths, and changed ones are redrawn.
- Output may include `warnings` when street routing failed and a leg fell back to straight lines. Retry later, or add waypoints.
- Check the result on the map: a route that zig-zags or doubles back usually needs waypoints, or its stops reordered.

## Translations (content languages)

A map's content is written in its own language (`dc map` → `collection.language`, usually `en`). `collection.languages` lists the other languages readers can switch to. Anything not translated shows the original, field by field.

- **Offer a language** (admins): `pnpm dc languages <slug> langs.json` with `{"languages": ["nl"], "translations": {"nl": {"title", "tagline", "description", "categories": {"<key>": "label"}, "fields": {"<key>": {"label", "help", "options": {"<base value>": "label"}}}}}}`. Select *values* stay in the base language; only their labels are translated.
- **Places**: `"translations": {"nl": {"title", "summary", "body", "attributes": {"<text/longtext field key>": "…"}}}` in a draft or a `dc update` patch. Patches merge per language and field; `null` deletes a field, and `"nl": null` deletes the whole language.
- **Routes**: `"translations": {"nl": {"title", "summary", "body"}}` on the route, `{"translations": {"nl": {"narration"}}}` on stops and `{"translations": {"nl": {"directions"}}}` on legs. Route-level translations merge on `route-update`; stops and legs replace wholesale, so resend their translations with them.
- The server rejects languages the map doesn't offer. Translations into the map's own language are dropped.
- **Writing translations**: translate meaning, not word for word. Keep proper names and Dutch terms as they are in the original. Write as a native would for a curious local reader. Keep markdown structure. Don't add facts that aren't in the original; if the original is wrong, fix it first.
- Machine translation is fine as a draft. Tell the user it is machine-made, so a native speaker can review it.

## Custom fields (map schema)

- `pnpm dc fields <slug> <defs.json>` replaces the map's field list. Admin only. Keep the definitions in `scripts/data/<city>-fields.json`.
- Keys are permanent. Fields **cannot be deleted**: to retire one, set `"hidden": true` (its values are kept). The server rejects a list that drops an existing key.
- Changing a field's type doesn't convert stored values; check existing values first.
- Values are stored and displayed in the language of the map (English).

## Moderation queue

- `pnpm dc queue <slug>` lists pending proposals with full drafts.
- `pnpm dc approve <id> [--note]` and `pnpm dc reject <id> --note "reason"` decide them.
- Before approving, compare each draft with `dc place <placeId>`. Check facts you can verify. Reject vandalism, spam and unsourced claims, with a short, polite reason.

## Sources (Amsterdam)

- **Monuments**: `https://api.data.amsterdam.nl/v1/monumenten/monumenten/`.
  - Send the header `Accept-Crs: EPSG:4326` to get lat/lng.
  - Useful fields: `monumentnummer`, `status` (Rijksmonument / Gemeentelijk monument), `architectOntwerp`, `jaarBeginVan`/`jaarBeginTot`, `datumAanwijzing`, `oorspronkelijkeFunctie`, `redengevendeOmschrijvingPubliek` (the official reasons text: the best source for bodies), `puntCoordinaten`.
  - Complexes are linked by `ligtInMonumentenComplexId`. Merge church + parsonage and similar pairs into one place.
  - Use `curl -g` when the URL has `[]` filters.
- **Areas**: `https://api.data.amsterdam.nl/v1/gebieden/` has `stadsdelen`, `ggwgebieden`, `wijken` and `buurten`, each with geometry. Assign areas by point-in-polygon of the place's coordinates. Don't trust addresses for this; boundaries cut through streets.
- **National register**: `https://monumentenregister.cultureelerfgoed.nl/monumenten/<number>`.
- **Wikidata SPARQL** (`https://query.wikidata.org/sparql`):
  - P359 is the rijksmonument ID, P1435 the heritage designation, P18 the image (gives a Commons file), P625 the coordinates.
  - Also gives Wikipedia sitelinks.
- **Wikimedia/Commons**: rate-limited. Send a User-Agent with contact info (the CLI already does) and back off on 429. Don't hammer it in loops.
- Put downloaded raw data in the session scratchpad, not the repo. Commit only the curated data file.

Discrepancies between sources are common (build dates, years). Prefer the official register and mention conflicts to the user. Note them in the body when they matter.
