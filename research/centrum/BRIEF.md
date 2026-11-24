# Research brief: Deep Amsterdam, Centrum, round 1: screened monuments (one slice per agent)

You draft one slice of Amsterdam-Centrum for the map **Deep Amsterdam** (slug `sights`):
Amsterdam off the A-list, for a curious resident or an adventurous visitor. Your output is
one YAML file of place drafts and one notes file. You never write to the live site, never
touch app code and never commit.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Scratch root (`$S`): `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad`.
Other agents work in this checkout at the same time: create and edit **only your own files**,
`research/centrum/places/$SLICE.yaml` and `research/centrum/notes/$SLICE.md`.

## Read first

1. `.claude/skills/c-list-sights/SKILL.md`, section "Rules that matter most". Current, wins.
2. `research/west/BRIEF.md`, only for the **draft format** (the YAML example under
   "Output 1") and the photo rules. Its Dutch rule ("take their sentences") is withdrawn.
3. `research/centrum/map.yaml`: valid `category` keys and `attributes` fields with options.
4. Style models: `research/zuid/places/r2-museum.yaml` and `research/zuid/places/oudepijp.yaml`.
5. `research/centrum/A-LIST.md`: what stays off the map in Centrum.

## Input

`research/centrum/slices/$SLICE.json`: the listed monuments of your slice that passed a
screen, sorted by street. Per record: `monnr`, `city_id`, `why` (why it passed: `function` =
not a plain house, `wiki` = has a Wikipedia article, `named` = carries a name, `text` = has
a written city register text, `rce` = long national register text), `name`, `address`,
`status`, `architect`, `client`, `year_from`/`year_to`, `use`, `listed`, `lat`/`lng`
(register point), `wijk`, `complex`, `text` (city register text), `rce_text` and
`rce_function` (national register) and `wikidata` (`qid`, `name`, `images` = Commons file
names, `nlwiki`, `enwiki`).

## Centrum is the densest district: the rules

Centrum has 7,904 listed monuments. Your slice holds only the roughly one in four that
passed the screen, and **passing the screen is not a ticket to the map**. The map is for a
curious Amsterdammer who has walked these streets for years.

- **The test for a place**: would that person say "I never knew that", *and* is there
  something to look at or go into? A story a visitor would retell: who lived, hid, traded,
  preached, printed, brewed, was locked up or shot here; a fight, a first, a fraud, a
  strange use, a survival against the odds, a detail you would otherwise walk past.
- **Every record ends up in exactly one of four things**, and your notes say which:
  1. **its own place** (it passes the test);
  2. **a group place**: several records that tell one story together (a hofje and its
     gate, a row of warehouses of one company, the houses of one builder's scheme, a
     church with its hidden neighbours, the listed fronts of one alley with a story).
     All monument numbers go in `monument_number` (comma-separated, max 200 characters),
     pinned on the most telling building (say which in the notes, not in the text);
  3. **A-list, parked** (it belongs to a sight in `A-LIST.md`): no draft;
  4. **no story found**: no draft. This is a normal, frequent outcome here: a well
     described house front of 1880 is not a place. Don't pad the map with it and don't
     hide it in a vague "street ensemble". Expect half or more of a slice to end here.
- **No ensembles for their own sake.** Unlike other districts, a street of listed fronts
  does not get a place just to hold the numbers. A stretch becomes a group place only when
  the stretch itself has a story.
- **Research each record that might pass**: read the whole register texts, the nl.wikipedia
  article to the end (raw wikitext), then search the address and the name: Amsterdam op de
  kaart (amsterdamopdekaart.nl), stadsherstel.nl, hendrickdekeyser.nl, theobakker.net,
  onh.nl, local papers. A house with a thin register text may still have a famous story;
  one search per record is the minimum before you file it under "no story found".
- **A-list** (see `A-LIST.md`): no drafts for those. A separately listed thing beside an
  A-list sight that most people walk past may be a place if it has its own hook and is
  pitched on that.
- **No extras.** Don't draft places that are not in your slice file: art, memorials,
  curiosities and local favourites are scouted separately. Put good finds in your notes
  under "Leads" (what, where, source link).

## Writing

- English `body` of **150 to 250 words including the Look for list**: hook first, then the
  story, then how to see it, ending with "Look for:". Dutch under `nl` the same, ending
  with "Let op:". Shorter is fine; longer is not.
- **Dutch: write, don't paste.** Use Dutch sources for facts and terms, then write it
  yourself as a person would. No sentences lifted from the register, Wikipedia or any site,
  no register jargon. Never translate the English. Same facts in both languages.
- **Only what a visitor can see.** Say what is visible from the street, the current use,
  and the way in if there is one (opening hours, services, concerts, open days). Don't
  describe private interiors unless you say they are closed.
- **Current status.** Check that the building stands and what it is now. Confirmed facts
  only: a claim resting on one weak source is left out. If something can only be settled
  on site use `check` and `check_note`; if a change is coming, `outlook`, `outlook_when`,
  `outlook_note` (see the skill).
- **Rank** (required): `Amazing` (a "start here" pick: about 1 in 10), `Nice` (worth a stop
  if you're near), `Okay` (a footnote for completists).
- Heritage: `National monument`, `Municipal monument` or `National + municipal monument`
  exactly as in `map.yaml`; `listed` is a number.
- Category: file the place under what its story is, not under what the building is. A
  warehouse whose point is a wartime hiding place is `hidden-history`; a house whose point
  is a carved joke is `curiosities`.
- Sensitive history (the Jewish quarter and the deportations, slavery and colonial trade,
  prostitution, addiction and the heroin years, squatting riots): factual, neither
  sensational nor evasive. Private people who are not public figures are not named.
- **Never an em dash**, nor a spaced en dash standing in for one. Use a colon, comma or
  brackets. En dashes in year ranges (1621–1623) are fine.
- Never mention the research process or the pin ("this place is pinned on...").
- Links: up to 6, registers first
  (`https://monumentenregister.cultureelerfgoed.nl/monumenten/<monnr>`,
  `https://data.amsterdam.nl/monumenten/<city_id>`), distinct labels without dashes, quote
  labels that contain a comma.
- Photos: 1 to 3 per place from Wikimedia Commons (`commons:File:Name.jpg`), from the
  `wikidata.images` in the slice or the Commons API (`Category:Rijksmonument <nr>`, or a
  search on the address). Open the file page and check it shows this building. A wrong
  photo is worse than none. Commons: at most 1 request per second, back off on 429.
- YAML: quote any value with `: ` in it, and summaries that start with a quote mark.

## Tools

- **curl only** (`-H "User-Agent: deep-cities-research/0.1"`): nl/en Wikipedia raw wikitext
  (`https://nl.wikipedia.org/w/index.php?title=X&action=raw`), the registers, Commons,
  Wikidata, PDOK locatieserver, plain web pages. **Do not use any browser tool**: the
  browser is reserved for the scouts. If a page can't be fetched with curl, use another
  source and note it. Respect robots.txt (onsamsterdam.nl refuses automated readers).
- Raw downloads go to `$S/centrum-$SLICE/`, never the repo. Run Python with `-B`.

## Output

1. `research/centrum/places/$SLICE.yaml`. Validate until 0 errors:
   `python3 -B research/centrum/scripts/validate.py research/centrum/places/$SLICE.yaml`
   Then `grep -n "—\| – " research/centrum/places/$SLICE.yaml` must find nothing.
   Point-check pins you moved: `AMS_RAW=$S/raw python3 -B -c "import sys;
   sys.path.insert(0,'research/centrum/scripts'); import areas; print(areas.locate(LAT,
   LNG))"` must say borough Centrum.
2. `research/centrum/notes/$SLICE.md` with these headings:
   - **Record ledger**: a table of every `monnr` in the slice: where it went (place title;
     "A-list, parked"; or "no story found" with three or four words on what it is and what
     you searched). Every number appears once.
   - **Conflicts and uncertainties** (what you corrected, what you left out and why)
   - **Leads** (non-monument finds for the scouts)
   - **Missing photos**
   - **Route ideas**

Write the YAML as you go (save after every few places), so nothing is lost if you are cut
off. Finish with a short report: places written (own and group) with ranks, records per
outcome, and anything that needs a decision.
