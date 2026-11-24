# Research brief: Deep Amsterdam, Zuid, round 2: scouted places (one slice per agent)

You draft one slice of scouted, non-monument places in Amsterdam-Zuid for the map **Deep
Amsterdam** (slug `sights`). Output: one YAML file of new place drafts, small edits to
existing drafts where an item is a merge, and one notes file. You never write to the live
site, never touch app code and never commit.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Other agents work in this checkout at the same time. Touch only: your own
`research/zuid/places/$SLICE.yaml` and `research/zuid/notes/$SLICE.md`, and, for merges only,
the single place entry named in your task inside an existing `research/zuid/places/*.yaml`.

## Read first

1. `.claude/skills/c-list-sights/SKILL.md`, "Rules that matter most". Current, and wins.
2. `research/zuid/BRIEF.md`: sections "Writing", "Output" (validate, dash grep) and the YAML
   format it points to (`research/west/BRIEF.md`, "Output 1"). Same rules here, except: these
   are not monuments (omit heritage fields unless the thing is listed), and the browser rule
   below replaces its "curl only".
3. `research/zuid/map.yaml`: category keys and attribute fields. Pick the category that fits
   (`street-art`, `hidden-history`, `curiosities`, `green`, `odd-museums`, `food-drink`, ...).
4. `research/zuid/A-LIST.md`.
5. Your items in `research/zuid/SCOUT-A.md` (items 101 to 166), `SCOUT-B.md` (201 to 257) or
   `SCOUT-C.md` (301 on): the scout's paragraph is your starting point, not your source.
   Also read that file's "Look for lines" for anything that belongs to your places.

## What to do per item

- **New place**: verify the scout's facts against the sources yourself (open them), find the
  latest evidence that the thing is still there (2024 to 2026 if possible), fix the pin on the
  object itself (6 decimals), and write the place: English body of about 150 to 250 words
  (hook first, the story, how to see it, "Look for:" list), Dutch written natively from
  Dutch sources (never translated, never pasted), ending with "Let op:".
- **Verify first** items: the scout or coordinator doubts existence, status or the story.
  Settle it. If it does not hold up or is gone without a strong story, **drop it** and say
  why in your notes. Dropping is a good outcome.
- **The bar is the same for every item.** Zuid is dense: when you find, on research, that an
  item is thin (a sculpture with no story, a plaque with one fact), don't write a place.
  Either make it a "Look for" line in a neighbouring place of yours or of round 1, or drop it,
  and note which. Expect to drop or fold a few.
- **Merge** items: open the named existing place in `research/zuid/places/`, check whether
  the story is already told there. If not, add it in both languages (a sentence or a short
  paragraph, plus a "Look for"/"Let op" line, plus a link if it adds a source), keeping the
  body within about 280 words. Don't change the title. List every edited place in notes.
- Before writing a new place, `grep -ril "<keyword>" research/zuid/places/` to make sure
  round 1 hasn't already told it; if it has, treat the item as a merge.
- Gone things: title ends with `(gone)` and `attributes: {status: Gone}`. Rank is required.
  Ranks: `Amazing` about 1 in 20, `Nice`, `Okay`.
- Sensitive history: factual, neither sensational nor evasive. No living private people; war
  victims who are not public figures are named only when a public memorial names them.
- Photos: 1 to 3 from Wikimedia Commons where a correct one exists (Dutch freedom of panorama
  covers permanent public art). A wrong photo is worse than none.
- Point-check every pin: `AMS_RAW=<scratchpad>/raw python3 -B -c "import sys;
  sys.path.insert(0,'research/zuid/scripts'); import areas; print(areas.locate(LAT, LNG))"`
  must say borough Zuid (scratchpad below).
- Never an em dash, nor a spaced en dash as one. Never mention the research process.

## Tools

- curl first (`-H "User-Agent: deep-cities-research/0.1"`): Wikipedia raw wikitext
  (`https://nl.wikipedia.org/w/index.php?title=X&action=raw`), Wikidata, Commons API, PDOK,
  buitenkunstamsterdam.nl, 4en5mei.nl, amsterdamopdekaart.nl, plain pages. Web search and
  Wikimedia APIs rate-limit hard: pace yourself, back off on 429.
- BrowserOS neo (load `mcp__browseros-neo__*` via ToolSearch) only for pages curl can't get.
  **One tab of your own, leave all others alone, close your tab before you report.**
- Scratch: `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad/zuid-$SLICE/`
  (boundary cache: `AMS_RAW=.../scratchpad/raw`). Run Python with `-B`.

## Output

1. `research/zuid/places/$SLICE.yaml`: validate until 0 errors with
   `python3 -B research/zuid/scripts/validate.py research/zuid/places/$SLICE.yaml`, and also
   validate every existing file you edited. `grep -n "—\| – "` on each must find nothing.
2. `research/zuid/notes/$SLICE.md`: **Item ledger** (every item number: new place with
   title, merged into which place, folded as a Look for line, or dropped and why),
   **Conflicts and uncertainties**, **Leads**, **Missing photos**, **Route ideas**.

Finish with a short report: places written with ranks, merges, drops and why, anything that
needs a decision.

## Slices

"v" = verify first. "+n" = fold item n into the same place.

- **r2-museum**: new 101, 102, 103, 104, 147, 148 (+201: same address, Van Eeghenstraat 78;
  if round 1 already covers that villa, merge both there instead), 149, 150, 203, 252.
  Merge 202 into the fire station place in `museum-b.yaml` (check `museum-c.yaml` too).
- **r2-apollo**: new 108, 109, 111v, 113, 114v, 115, 116, 151, 152 (+155 as Look for, also in
  153), 153, 154, 205, 206, 208, 211v. Merge 110 into the Burgerweeshuis place, 112 into the
  Minervalaan place, 204 into the St Ignatius place, 209 into the Jacob Marisplein place
  (`apollo-a/b`, `stadion`, `schinkel`).
- **r2-pijp-a**: new 118v, 119 (+216), 120, 121, 124, 156, 157 (a detail on an A-list
  building: pitch it on the stone, not the brewery), 255. Merge 123 into the Sarphatipark
  place (`oudepijp.yaml`).
- **r2-pijp-b**: new 213, 214, 215, 217v, 218, 220, 221, 253, 254v.
- **r2-rivieren-a**: new 125 (+131 as Look for), 126, 127, 128, 129, 158. Merge 130 and 160
  into the Wolkenkrabber / Merwedeplein / Victorieplein place, 132 into the RAI place, 159
  into the Jekerschool place (`rivieren-noord`, `rijnbuurt`, `buitenveldert`).
- **r2-rivieren-b**: new 229v, 230, 231, 232, 233, 234, 236, 237, 256.
- **r2-south**: new 133, 134, 137, 141, 144, 145, 146, 163, 164, 165v, 166, 244, 245,
  246 (+257). Merge 135 into the Gijsbrecht van Aemstelpark place, 136 into the Amstelpark
  place, 138 into the Dirk Schäferstraat flats place, 142 and 143 into the Beatrixpark place;
  check 139 and 140 are told in the Thomaskerk and Spinoza Lyceum places and add if not
  (`buitenveldert.yaml`).

### Scout C slices

Scout C's "Look for lines" are part of these slices: apply each line that names a live place
in your areas to that place's draft (both languages, one line, only if verified and not
already there), and list them in notes. Status updates there (museum tram start point,
Circus Odesa, the Signaal clock) must be settled before you change anything.

- **r2-c-north** (areas 1 to 4; do not touch `buitenveldert.yaml`): new 301, 302v (ownership
  and the state of the squat today; public facts only), 303, 304v, 305, 306v (is there
  anything to see beyond a car-park ramp? if not, fold into a neighbouring place), 307, 308,
  309, 317 (own place if the field and the skull can be pinned; also add one Look for line
  to the Zorgvlied place).
- **r2-c-south** (areas 5 and 6): new 310, 311, 312, 313v, 315, 318, 321, 322v; 319 and 320
  as one place or as Look for lines in the Amstelpark place, whichever reads better; 314 as
  its own place only if the stair can be seen from the street and the story has two sources,
  else fold into a Zuidas place; merge 316 into the RAI place; 323 is temporary: a Look for
  line in the courthouse place at most.
