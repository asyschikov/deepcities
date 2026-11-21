---
name: c-list-sights
description: Scout, research and add sights to the "C-list sights of Amsterdam" map (slug amsterdam-c-list) — the unusual, debatable, standing-out places that don't make the guidebook. Use when asked to find, gather, scout or add C-list sights, curiosities, murals, hidden history, odd museums or green escapes for a neighbourhood or district, to do another research round for an area, or to fix or refresh an existing C-list place.
---

# Gathering C-list sights

The **C-list sights of Amsterdam** map (`amsterdam-c-list`) is for **a curious resident or
an adventurous visitor**: the places that don't make it into the guidebook. Unusual,
debatable, standing out, old or new. Listed monuments are the backbone. Beyond them:
murals and public art, hidden history, curiosities, odd museums, green escapes, and food
and drink institutions with a history. Leave out ordinary cafés and A-list sights.

This skill covers the C-list workflow. The general rules for `pnpm dc`, draft conventions,
photos and areas are in [manage-content](../manage-content/SKILL.md). Read that first.

## The workflow

1. **Scout and build a shortlist.** The user picks; nothing is written yet.
2. **Research** the picked items into bilingual YAML drafts, in parallel slices if there are many.
3. **Validate, assemble and import** to the map, then verify.
4. **Report** what was added and what is uncertain.

Don't skip step 1. The user wants to choose before anything is written or imported.

## 1. Scout

- **Check the map first.**
  - `pnpm -s dc places amsterdam-c-list --q <word>` and `--sub-neighbourhood <wijk>`.
  - `research/*/places/*.yaml`.
  - Don't propose anything that is already there.
- **Monuments.** For an area that isn't covered yet, every listed monument goes on the map, merged sensibly. Get them from the city register API, filtered to the area's wijken. See `research/west/scripts/prepare.py` for building candidate clusters, and "Sources" in manage-content.
- **Beyond monuments.** Search in **both Dutch and English**. Dutch sources find far more.
  - Public art: stadscuratorium.nl, buitenkunstamsterdam.nl, artatsite.com, the stadsdeel's kunstwacht routes, and the artists' own sites.
  - Local news: NH Nieuws / AT5, Het Parool, De Westkrant and other district papers, Rodi.
  - Local history: archief.amsterdam (beeldbank), district history sites, amsterdamsloopt, Arcam.
  - Also amsterdam.nl, iamsterdam.com, Wikipedia (nl/en) and Atlas Obscura.
  - Odd stories: bunkers and shelters, vanished things, disputes, renamings, things that sank, burned or were stolen.
- **Present a numbered shortlist.** For each item give:
  - a one-line hook;
  - why it fits the C-list;
  - a lead source link;
  - caveats (gone? not locatable? private? disputed?).

  Group the items by category. Then let the user pick, cut or add.

## 2. Research

Work in `research/<area>/` (e.g. `research/west/`):

- `map.yaml`: a snapshot of the live map's categories and fields. Refresh it from `pnpm -s dc map amsterdam-c-list`.
- `scripts/`: copy `validate.py`, `assemble.py` and `areas.py` from `research/west/scripts/`. They resolve `map.yaml` and `places/` relative to themselves.
- `places/<slice>.yaml`: the drafts. One file per slice or round, e.g. `extra-a.yaml`.
- `notes/<slice>.md`: merges, conflicts, dropped items, missing photos and route ideas.

**The draft format, the bilingual rule and the photo rules are in `research/west/BRIEF.md`.**
It is the model brief: reuse it for new areas and rounds. For a list of scouted items rather
than monuments, write a short round brief: "same rules as BRIEF.md", then the numbered items
with their lead sources, split into slices.

**Many items** (more than about 8): split them into slices of 8–10 and give each slice to an
agent. Use the brief, and tell each agent to write only its own files and never write to
the live site. Use the BrowserOS neo browser for web pages and curl for APIs, with the
header `User-Agent: deep-cities-research/0.1`. Review what comes back; don't trust it blindly.

### Rules that matter most

- **Two languages, both native.** Build the Dutch (`nl:`) out of the original Dutch wording of Dutch sources: register texts, nl.wikipedia, local news and history sites. Never translate the English.
  - Write the English natively. Gloss Dutch terms on first use.
  - The facts must agree between the two. The emphasis may differ.
- **Current status, checked recently.** Art gets removed, shops close, horses leave balconies. For each item, find the latest news and say plainly whether it is still there.
  - If it's gone but the story is good, pin the site and say clearly that it's gone. Put it in the title too, e.g. `(gone)`.
  - Never leave the reader guessing ("we could not confirm whether…"). Never invite readers to report things ("spot it and tell us").
  - If you can't settle it, leave the claim out and note it for the user.
- **Exact location.** Pin the object itself: the mural's wall, the statue, the entrance. Never a street centroid. Use 6 decimals.
- **Visiting.** Say whether and how it can be seen: from the street, opening hours, seasonal (e.g. "on the pond mid-April to end October"), private.
- **Tone.** Plain, concrete and a little wry. Lead with what's odd or disputed. End the body with a "Look for:" / "Let op:" list.
  - Never mention the research process ("our notes", "the coordinator", "this brief").
- **Sources.** Every fact needs a source. Put the sources in `links` (up to 6, registers first, distinct labels) and `sources:` (for reviewers; stripped before import).
  - Sensitive history (WWII, persecution, stereotypes in art, contested urban renewal): be factual and neither sensational nor evasive.
- **YAML pitfalls.** Quote any value containing `: ` or a comma inside `{ … }` flow mappings, or it splits silently. Quote summaries that start with a quote mark.

## 3. Import

These steps write to the live site, https://deep-cities.bookverse-app.workers.dev. Say so before importing.

```bash
python3 -B research/<area>/scripts/validate.py research/<area>/places/<slice>.yaml   # until 0 errors
AMS_RAW=<scratchpad>/raw python3 -B research/<area>/scripts/assemble.py > scripts/data/amsterdam-<area>-<round>.json
pnpm -s dc import amsterdam-c-list scripts/data/amsterdam-<area>-<round>.json --dry-run
pnpm -s dc import amsterdam-c-list scripts/data/amsterdam-<area>-<round>.json --upsert --note "Source: research/<area> (<round>)"
```

- `assemble.py` does three things:
  - moves `nl` to `translations.nl` and strips `sources`;
  - sets the official area hierarchy by point-in-polygon;
  - warns about likely duplicates (same monument number, or less than 25 m apart).

  Resolve every duplicate warning.
- `assemble.py` reads **every** file in `places/`. If you want to import only this round, trim the output to the new titles first.
- Titles are the import key. Keep them stable, and rename only with `dc update`.
- Read `summary` and every `failed` result, fix, and re-run. `--upsert` is safe to repeat.
- Verify a few places with `pnpm -s dc place <id>`, in English and in Dutch.
- Commit the research folder and the `scripts/data` file. Run Python with `-B` so no `__pycache__` gets committed.

## Fixing an existing place

When the user corrects a fact (e.g. "the horse is long gone"):

1. Save the current place: `pnpm -s dc place <id> > <scratchpad>/x.json`.
2. Patch `summary`, `body` and `translations.nl.body` (and the titles, if needed) **in both languages**.
   - Remove every sentence that the correction makes wrong, including the "Look for" items.
3. Run `pnpm -s dc update <id> <patch.json> --note "<what and why>"`, then check the result.
4. If the place came from a YAML file in `research/`, update that file too, so the next `--upsert` doesn't bring the old text back.

## 4. Report

Tell the user:

- the number of places added, by category, with the monuments counted separately;
- the main sources, in both languages;
- items dropped, and why;
- anything uncertain: conflicting dates, unverified status, approximate locations;
- places without photos;
- ideas for routes through the new places (routes are covered in manage-content).
