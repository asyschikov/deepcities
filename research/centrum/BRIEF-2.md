# Research brief: Deep Centrum, round 2: scouted places (one slice per agent)

You draft one slice of scouted, mostly non-monument places in Amsterdam-Centrum for the map
**Deep Centrum** (slug `centrum`, the full-detail Centrum map). Output: one YAML file of new
place drafts, small edits to existing drafts where your slice says "enrich", and one notes
file. You never write to the live site, never touch app code, never commit, never spawn
subagents.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Scratch (`$S`): `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad`.
Other agents work in this checkout at the same time. Touch only: `research/centrum/places/$SLICE.yaml`,
`research/centrum/notes/$SLICE.md`, and, for enrich items only, the single place named in
each enrich item inside the existing `research/centrum/places/<file>.yaml` it names.

## Read first

1. `.claude/skills/c-list-sights/SKILL.md`, "Rules that matter most". Current, and wins.
2. `.claude/skills/local-sources/SKILL.md`: how to use local papers, blogs and residents' sites.
3. `research/centrum/BRIEF.md`: "Writing", the YAML format, validate and dash grep, photos.
   Same rules here, except these are not monuments (omit heritage fields unless the thing
   is listed) and the tool rule below replaces "curl only".
4. `research/centrum/map.yaml` (categories and fields) and `research/centrum/A-LIST.md`.
5. Your slice: `research/centrum/slices-r2/$SLICE.json`. `entries` are new places (each with
   its scout item ids in `members`, a hook, pin, rank and category guess, `default` IN or
   ASK and the reason). `enrich` lists lines to add to existing drafts.
6. For every member id, read the scout's paragraph in `research/centrum/scouts/SCOUT-<prefix>.md`
   (e.g. DW-12 is in SCOUT-DW.md), plus that file's "Look for lines" for anything that
   belongs to your places. The scout's paragraph is your starting point, not your source.

## What to do per entry

- **IN entries**: verify the facts against the sources yourself (open them), find the latest
  evidence it is still there (2024 to 2026 if possible), pin the object itself (6 decimals),
  and write the place: English body of about 120 to 250 words (hook first, the story, how to
  see it, "Look for:" list), Dutch written natively from Dutch sources (never translated,
  never pasted), ending with "Let op:". Add local voice (a nickname, what residents say or
  fought about) when a local source gives it.
- **ASK entries ranked Okay with no other doubt**: write them, shorter is fine (80 to 150 words).
- **ASK entries with a doubt** (single source, unclear status, gone): settle it. If you find
  a second independent source or dated evidence of status, write the place. If not, **drop
  it** and say why in notes. Gone things only with a strong story and an exact spot; title
  ends `(gone)` and `attributes: {status: Gone}`.
- **The bar stays**: if research shows an entry is thin (a statue with no story, a plaque
  with one fact), make it a "Look for" line in a neighbouring place (yours or round 1's, via
  the enrich rule) or drop it. Dropping and folding are good outcomes.
- Before writing a new place, `grep -ril "<keyword>" research/centrum/places/` to make sure
  round 1 hasn't told it; if it has, treat the entry as enrich.
- **Enrich items**: open the named place, check whether it already says it. If not, add it
  in both languages (a sentence or a Look for / Let op line, plus a link if it adds a
  source), keeping the body within about 280 words. Never change titles. Verify before adding.
- Ranks: `Amazing` about 1 in 10, `Nice`, `Okay`. Categories: pick what fits (`street-art`,
  `green`, `odd-museums`, `curiosities` only for the genuinely odd, `hidden-history` when the
  story is hiding, crime, war or something vanished).
- Sensitive history: factual, neither sensational nor evasive. No living private people;
  war victims who are not public figures are named only when a public memorial names them.
- Photos: 1 to 3 from `commons:File:...` only when you already know a correct file (from a
  scout paragraph or Wikidata P18); do **not** call the Commons API (it rate-limits; a
  central photo pass follows). List missing photos in notes.
- Point-check every pin: `AMS_RAW=$S/raw python3 -B -c "import sys;
  sys.path.insert(0,'research/centrum/scripts'); import areas; print(areas.locate(LAT, LNG))"`
  must say borough Centrum.
- Never an em dash, nor a spaced en dash as one. Never mention the research process.

## Tools

- curl first (`-H "User-Agent: deep-cities-research/0.1"`): nl.wikipedia raw wikitext
  (`https://nl.wikipedia.org/w/index.php?title=X&action=raw`, pace it, back off on 429),
  PDOK, 4en5mei.nl, buitenkunstamsterdam.nl, amsterdamopdekaart.nl, local sites and PDFs.
  Scouts' raw downloads are under `$S/centrum-scout-*/`: reuse them.
- BrowserOS neo (load `mcp__browseros-neo__*` via ToolSearch) **only** for pages curl can't
  read, briefly. One tab of your own, leave others alone, close it before you report.
  Search engines block heavy use: search rarely, go to the sites directly.
- Sites whose robots.txt refuses automated readers (onsamsterdam.nl): browser only, specific
  articles at human pace, facts only, own words, link the article.

## Output

1. `research/centrum/places/$SLICE.yaml`: validate until 0 errors with
   `python3 -B research/centrum/scripts/validate.py research/centrum/places/$SLICE.yaml`, and
   validate every existing file you edited. `grep -n "—\| – "` on each must find nothing.
   Write the file early and save as you go.
2. `research/centrum/notes/$SLICE.md`: **Ledger** (every S-id and every scout id: new place
   with title, enriched into which place, folded as a Look for line, or dropped and why),
   **Enrich edits** (place, file, what), **Conflicts and uncertainties**, **Missing photos**,
   **Route ideas**.

Finish with a short report: places written with ranks, enrich edits, drops and why,
anything that needs a decision.
