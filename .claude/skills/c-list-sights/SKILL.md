---
name: c-list-sights
description: Scout, research and add sights to the "Deep Amsterdam" map (slug sights; formerly "C-list sights of Amsterdam"): the unusual, debatable, standing-out places that don't make the guidebook. Use when asked to find, gather, scout or add C-list sights, curiosities, murals, hidden history, odd museums or green escapes for a neighbourhood or district, to do another research round for an area, or to fix or refresh an existing C-list or Deep Amsterdam place.
---

# Gathering C-list sights for Deep Amsterdam

The **Deep Amsterdam** map (`sights`, at deepcities.org/amsterdam/sights) is Amsterdam off the
A-list. It began as "C-list sights of Amsterdam", and "C-list" lives on as the in-joke for
what goes on it. It is for **a curious resident or
an adventurous visitor**: the places that don't make it into the guidebook. Unusual,
debatable, standing out, old or new. Listed monuments are the backbone. Beyond them:
murals and public art, hidden history, curiosities, odd museums and green escapes. Leave out
A-list sights.

**Food and drink: the bar is very high.** Only places of real historic or cultural significance
(a legend, an institution that shaped the city). Good food, a nice story, a young brewery, a
famous dish or "the oldest X restaurant" is not enough: those wait for a possible separate
restaurants map. When in doubt, leave it out.

**Exception: Amsterdam-Noord.** Noord has a different vibe, so there the bar is "an iconic local
place that is part of the neighbourhood's fabric, almost a cultural establishment" (e.g. De Ceuvel).
Ordinary good restaurants still don't qualify.

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
  - `pnpm -s dc places sights --q <word>` and `--sub-neighbourhood <wijk>`.
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

### The West standard: when a district is done

West is the gold standard (the user lives there and vouches for it). It got there through a
monument pass, then **themed sweeps**, each exhaustive against named sources, and themed loops
(routes) that exposed gaps. Every district gets the same sweeps, whatever its density. A sweep
is done when its sources were gone through completely for every *gebied*, not when it found
"enough". Keep `research/<area>/COVERAGE.md`: a table of sweep by gebied, with the sources
checked and the date, so it's clear what was swept and what wasn't.

1. **Monuments**: every listed monument, merged sensibly (city register + national register).
2. **Public art and walls**: the full buitenkunstamsterdam.nl (Kunstwacht) list for the
   district, the city's wall-art register (maps.amsterdam.nl/wandkunst), Street Art Cities,
   OSM `tourism=artwork`. Check each work's current status.
3. **War and memory**: 4en5mei.nl monument database, memorial plaques, OSM `historic=memorial`,
   Joods Monument addresses where a place tells the story (no lists of victims as places).
4. **Hidden history**: the district's history society and site, archief.amsterdam (beeldbank),
   amsterdamsloopt, nl.wikipedia street and neighbourhood articles, local papers. Gone things
   only under the high bar.
5. **Behind the gate**: hofjes, courtyard gardens, alleys, nursery villages, bunkers and
   shelters, things inside blocks a passer-by would miss. Say how to see them.
6. **Modern and contested**: post-1965 architecture that stands out (Arcam, architects' sites),
   squats and cultural free zones, renewal fights, renamings, disputes.
7. **Curiosities, green corners and odd museums**: Atlas Obscura, OSM, iamsterdam, the
   district's own "tips" pages, allotment parks, small museums.
8. **Loops**: 2–4 themed routes per district. A loop that needs a stop where there is none
   shows a gap; fill it.

Then a **blind quality check**: a fresh agent scores a random sample of the district's places
against an equal sample from West (story, accuracy, pin, photo, Dutch), without knowing which
is which. Fix what scores lower.

## 2. Research

Work in `research/<area>/` (e.g. `research/west/`):

- `map.yaml`: a snapshot of the live map's categories and fields. Refresh it from `pnpm -s dc map sights`.
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
header `User-Agent: deep-cities-research/0.1`. Tell each agent to **close every tab it opened
before it reports back** (the user doesn't want hundreds of research tabs left open), and close
your own when you're done. Review what comes back; don't trust it blindly.

### Rules that matter most

- **Two languages, both native.** Build the Dutch (`nl:`) out of the original Dutch wording of Dutch sources: register texts, nl.wikipedia, local news and history sites. Never translate the English.
  - Write the English natively. Gloss Dutch terms on first use.
  - The facts must agree between the two. The emphasis may differ.
- **Current status, checked recently.** Art gets removed, shops close, horses leave balconies. For each item, find the latest news and say plainly whether it is still there.
  - **Gone things: high bar.** This is a guide, not a history textbook. A gone thing goes on (or stays) only if at least one holds: something related to it is there today (a memorial, a trace, a successor, a name); the current state gives context for what happened; or it had a lasting impact. A gone bridge, artwork or factory with only a good story doesn't count. Otherwise fold one sentence into a nearby place or leave it out.
  - If it's gone but the story is good, pin the site and say clearly that it's gone. Put it in the title too, e.g. `(gone)`, and **always set `attributes: {status: Gone}`** (the map's Status field; the user wants gone things marked there).
  - Never leave the reader guessing ("we could not confirm whether…"). Never invite readers to report things ("spot it and tell us").
  - If you can't settle it, leave the claim out and note it for the user.
- **Needs checking** (fields `check` and `check_note`). The body states only what is confirmed. When something can be settled on site, flag it instead of hedging in the text: `check: Location` (pin approximate), `Still there?` (no recent evidence it exists) or `Facts` (sources disagree on something that matters), and `check_note`: one line saying what exactly, also in `nl.attributes.check_note`. Readers can filter on it and go and look. One value per place: the biggest doubt goes in `check`, the note covers the rest. Don't flag parks or long walls pinned on a sensible point, or gone things. Clear both fields (`null`) once checked.
- **Exact location.** Pin the object itself: the mural's wall, the statue, the entrance. Never a street centroid. Use 6 decimals.
- **Rank.** Set `attributes.rank`: `Amazing` (worth going out of your way; rare, about 1 in 20), `Nice` (worth a stop if you're near), or `Okay` (a footnote for completists: plain listed fronts, small plaques, gone things without a strong story). Add new ranks to `scripts/data/amsterdam-c-list-ranks.json`.
- **Visiting.** Say whether and how it can be seen: from the street, opening hours, seasonal (e.g. "on the pond mid-April to end October"), private.
- **Tone.** Plain, concrete and a little wry. Lead with what's odd or disputed. End the body with a "Look for:" / "Let op:" list. Never use em dashes (use a colon, comma or parentheses); tell research agents the same.
  - Never mention the research process ("our notes", "the coordinator", "this brief").
- **Sources.** Every fact needs a source. Put the sources in `links` (up to 6, registers first, distinct labels) and `sources:` (for reviewers; stripped before import).
  - Sensitive history (WWII, persecution, stereotypes in art, contested urban renewal): be factual and neither sensational nor evasive.
- **YAML pitfalls.** Quote any value containing `: ` or a comma inside `{ … }` flow mappings, or it splits silently. Quote summaries that start with a quote mark.

## 3. Import

These steps write to the live site, https://deepcities.org. Say so before importing.

```bash
python3 -B research/<area>/scripts/validate.py research/<area>/places/<slice>.yaml   # until 0 errors
AMS_RAW=<scratchpad>/raw python3 -B research/<area>/scripts/assemble.py > scripts/data/amsterdam-<area>-<round>.json
pnpm -s dc import sights scripts/data/amsterdam-<area>-<round>.json --dry-run
pnpm -s dc import sights scripts/data/amsterdam-<area>-<round>.json --upsert --note "Source: research/<area> (<round>)"
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
