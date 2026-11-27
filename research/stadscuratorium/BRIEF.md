# Research brief: Stadscuratorium works missing from Deep Amsterdam (one slice per agent)

The Stadscuratorium (stadscuratorium.nl) is the city's advisory body for art in public space,
and its online collection lists 147 works. Of these, 44 are not yet on the map **Deep Amsterdam**
(slug `sights`). The user wants all of them added. You draft one slice of them.

Output: one YAML file of new place drafts and one notes file. Never write to the live site,
never touch app code, never commit.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`
(paths below are relative to it). Other agents work in this checkout at the same time, so
touch only `research/stadscuratorium/places/$SLICE.yaml` and
`research/stadscuratorium/notes/$SLICE.md`.

## Read first

1. `.claude/skills/c-list-sights/SKILL.md`, "Rules that matter most". This is current and
   overrides anything older.
2. `research/west/BRIEF.md`, "Output 1": the YAML format and the bilingual rule. These works
   are not monuments, so leave out the heritage fields unless the thing itself is listed.
3. `research/stadscuratorium/map.yaml`: the category keys and attribute fields. Most items are
   `street-art` (murals, sculptures, art in public space). Use `hidden-history` for memorials
   whose story matters more than the object.
4. Your items, in `research/stadscuratorium/ITEMS.md` under "Slice $SLICE". Each Stadscuratorium
   page is a lead and a source, but the facts must come from you.

## What to do per item

- **Open the Stadscuratorium page and the other sources yourself**: buitenkunstamsterdam.nl,
  the artist's site, amsterdam.nl / the stadsdeel, Mondriaan Fonds and CBK, local news
  (Parool, AT5/NH Nieuws, district papers), Wikipedia, and the commissioner's page
  (housing corporation, school, metro).
- **Status**: find the latest evidence that the work is still there, from 2024 to 2026 if
  possible. Temporary works (for example Het verloop van auto's on the NDSM wharf) must be
  settled. If a work is gone, keep it only when the story is good, and then mark it:
  `(gone)` in the title plus `attributes: {status: Gone}`. Otherwise drop it and say why.
- **Pin the object itself**, to 6 decimals, never a street centroid. Use the coordinates in
  buitenkunstamsterdam, Commons photo coordinates, PDOK or BAG for addresses, and say in notes
  how you fixed each pin.
- **Not a fixed object?** Some entries may be an event, a series or a text with no place
  (Parlement van de Bomen, Ze komen eraan!, Atomos, De Gelaagde Stad). Find out what is
  physically there. If something can be pinned (a permanent piece, a marker), write it.
  If not, drop it and say why.
- **Duplicates and merges**: the "Near" titles in ITEMS.md are live places that mention the
  location. First check whether the work is already told in one of them, with
  `env -u DC_URL -u DC_TOKEN pnpm -s dc places sights --all --q "<word>"` and then
  `env -u DC_URL -u DC_TOKEN pnpm -s dc place <id>` (read only; never use any other dc
  command). Also run `grep -ril "<keyword>" research/*/places/`.
  - If the work is the subject of a live place already, it is a duplicate: drop it, and give
    the place id.
  - If it is mentioned in passing, or is too thin for a place of its own (no story beyond
    "a sculpture by X"), do not write a new place. Write a **merge proposal** in your notes
    instead: the live place's id and title, then an English sentence or short paragraph plus a
    "Look for:" line, then the same in Dutch (from Dutch sources), then an optional link. The
    coordinator applies it.
  - Otherwise, write a new place.
- **Text**: an English body of 150 to 250 words: the hook first, then the story (artist,
  commission, meaning, any fuss), how to see it, and a "Look for:" list. Write the Dutch
  natively from the Dutch sources (the Stadscuratorium NL text, buitenkunst, local news),
  never translated from your English and never pasted, ending with "Let op:". Put the artist
  in `attributes.artist` and the year in `attributes.built`.
- **Rank** is required: `Amazing` (about 1 in 20), `Nice` or `Okay`.
- **Links** (at most 6, with distinct labels): the Stadscuratorium page first, labelled
  "Stadscuratorium", then buitenkunst, the artist and news.
- **Photos**: 1 to 3 from Wikimedia Commons where a correct one exists (Dutch freedom of
  panorama covers permanent public art). A wrong photo is worse than none.
- **Area check**: check every pin with
  `AMS_RAW=/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/raw python3 -B -c "import sys; sys.path.insert(0,'research/stadscuratorium/scripts'); import areas; print(areas.locate(LAT, LNG))"`.
  Works outside Amsterdam (the Amstelveen side of the Amsterdamse Bos, Amstelveen,
  Ouderkerk) are fine: name the municipality in your notes.
- **Style**: never an em dash, and never a spaced en dash used as one. Never mention the
  research process. Treat sensitive history (memorials, apartheid, slavery, war) factually,
  neither sensational nor evasive.

## Tools

- **curl** first, with `-H "User-Agent: deep-cities-research/0.1"`: Wikipedia raw wikitext,
  the Commons API, PDOK, plain pages. Web search and the Wikimedia APIs rate-limit hard, so
  pace yourself and back off on 429.
- **BrowserOS neo**: load `mcp__browseros-neo__*` via ToolSearch and use `run`. Use it for any
  page curl can't get, and before dropping anything because a page would not load. **Open
  your own tabs only, leave all others alone, and close every tab you opened before you
  report.**
- **Scratch**: write downloads to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/sc-$SLICE/`.
  Run Python with `-B`.

## Output

1. `research/stadscuratorium/places/$SLICE.yaml`. Validate it with
   `python3 -B research/stadscuratorium/scripts/validate.py research/stadscuratorium/places/$SLICE.yaml`
   until there are 0 errors. Then run `grep -n "—\| – "` on it; it must find nothing.
2. `research/stadscuratorium/notes/$SLICE.md`, with these sections:
   - **Item ledger**: every item number, with its outcome: a new place (title and rank), a
     merge proposal, a duplicate (place id) or dropped (and why).
   - **Merge proposals**: the full English and Dutch text for each.
   - **Pins**: how each pin was fixed, plus any municipality outside Amsterdam.
   - **Conflicts and uncertainties**.
   - **Missing photos**.

Finish with a short report: the places written with their ranks, the merges, the drops and
why, and anything that needs a decision.
