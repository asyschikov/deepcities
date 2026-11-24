# Research brief: Deep Amsterdam, Zuid, round 1: monuments (one slice per agent)

You draft one slice of Amsterdam-Zuid for the map **Deep Amsterdam** (slug `sights`): Amsterdam
off the A-list, for a curious resident or an adventurous visitor. Your output is one YAML file
of place drafts and one notes file. You never write to the live site, never touch app code and
never commit.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Other agents work in this checkout at the same time: create and edit **only your own files**,
`research/zuid/places/$SLICE.yaml` and `research/zuid/notes/$SLICE.md`.

## Read first

1. `.claude/skills/c-list-sights/SKILL.md`, the section "Rules that matter most". Those rules
   are current and win over anything older.
2. `research/west/BRIEF.md`, only for the **draft format** (the YAML example under "Output 1")
   and the photo rules. Its Dutch rule ("take their sentences") is **withdrawn**: see below.
3. `research/zuid/map.yaml`: valid `category` keys and `attributes` fields with their options.
4. Style models: `research/oost/places/r4-oud.yaml` (a single place done well) and
   `research/weesp/places/streets-a.yaml` (street ensembles).
5. `research/zuid/A-LIST.md`: what stays off the map in Zuid.

## Input

`research/zuid/slices/$SLICE.json`: every listed monument in your slice, sorted by address. Per
record: `monnr`, `city_id`, `name`, `address`, `type`, `status`, `architect`, `client`,
`year_from`/`year_to`, `use`, `listed`, `lat`/`lng` (register point), `wijk`, `complex` (shared by
parts of one complex), `text` (city register text), and for national monuments `rce_text` and
`rce_function` (national register) and `wikidata` (`qid`, `name`, `images` = Commons file
names, `nlwiki`, `enwiki`).

## Zuid is dense: the rules that differ

Zuid has 596 listed monuments, far more than any district done so far, and whole streets of
listed villas. **The bar for a place does not drop because the building is listed.**

- **Every record ends up in exactly one of three things**: its own place, an ensemble place, or
  a line in your notes saying where it went (A-list parked, or part of an existing place).
- **Own place only with a hook**: a story a visitor would retell (who lived or hid there, a
  fight, a first, a scandal, a strange use, an architect's experiment, something you can see
  and would otherwise miss). Read the whole register text, the nl.wikipedia article to the
  end, and search the address and the name. If all you have is a description of the front,
  it is not an own place.
- **Ensembles** for the rest: one place per street, scheme or architect's group (a row of
  villas, the four blocks of one crossing, the gates and bridges of one park), rank `Okay`
  (or `Nice` when the ensemble as a whole is worth a detour), all monument numbers in
  `monument_number` (comma-separated, max 200 characters; split by stretch of street if
  needed), pinned on the most characteristic building (say which). The body tells the story
  of the street or scheme (who built here, for whom, what it replaced) and ends with a
  "Look for:" list naming the best 5 to 10 details by house number. Never a register summary
  per house.
- Expect roughly one place per three records in villa streets, more where buildings are
  public (churches, schools, bridges, baths, institutes).
- **A-list** (see `A-LIST.md`): records that belong to an A-list sight get **no draft**. List
  them in your notes under "A-list, parked" with their numbers. A separately listed thing
  beside an A-list sight that most visitors walk past (a director's villa, a garden of
  building fragments, a drawing school) may be its own place if it has a hook, pitched on
  that and not on the famous neighbour.
- **Vondelpark is already on the map** (places "Vondelpark", "Vondelpark Pavilion" and
  "Vondelpark manure sheds", made in the West round). The park itself, its gates, bridges,
  bandstand, gardener's house and the Vondel monument get no new place: list them in notes
  under "Belongs to existing place Vondelpark", with one fact each worth adding to that
  place. The Blauwe Theehuis (504760) does get its own place.
- **No extras.** Don't draft places that are not in your slice file: murals, memorials and
  curiosities are being scouted separately. Put anything good you come across in your notes
  under "Leads" (what, where, source link), also when it sits inside one of your monuments.

## Writing

- English `body` of about 150 to 250 words: hook first, then the story, then how to see it,
  ending with a "Look for:" list. Dutch under `nl` the same, ending with "Let op:".
- **Dutch: write, don't paste.** Use Dutch sources for facts and terms, then write it
  yourself as a person would. No sentences lifted from the register, Wikipedia or any site,
  no register jargon. Never translate the English. Same facts in both languages.
- **Only what a visitor can see.** Say what is visible from the street, the current use, and
  the way in if there is one (opening hours, services, concerts). Don't describe private
  interiors unless you say they are closed.
- **Current status.** Check that the building stands and what it is now. Confirmed facts
  only. If something can be settled on site, use `check` and `check_note`; if a change is
  coming, `outlook`, `outlook_when`, `outlook_note` (see the skill).
- **Rank** (required): `Amazing` (worth going out of your way; about 1 in 20), `Nice` (worth a
  stop if you're near), `Okay` (a footnote).
- Heritage: `National monument`, `Municipal monument` or `National + municipal monument`
  exactly as in `map.yaml`; `listed` is a number.
- Sensitive history (the Jewish Rivierenbuurt and Zuid, the occupation offices on the
  Euterpestraat and Apollolaan, the Silbertanne murders, collaboration, deportations):
  factual, neither sensational nor evasive. Private people who are not public figures are
  not named.
- **Never an em dash** (the long dash), nor a spaced en dash standing in for one. Use a colon,
  comma or brackets. En dashes in year ranges (1921–1923) are fine.
- Never mention the research process.
- Links: up to 6, registers first
  (`https://monumentenregister.cultureelerfgoed.nl/monumenten/<monnr>`,
  `https://data.amsterdam.nl/monumenten/<city_id>`),
  distinct labels without dashes, quote labels that contain a comma.
- Photos: 1 to 3 per place from Wikimedia Commons (`commons:File:Name.jpg`), taken from the
  `wikidata.images` in the slice or from the Commons API (`Category:Rijksmonument <nr>`, or a
  search on the address). Check the photo shows this building. A wrong photo is worse than
  none. Commons: at most 1 request per second, back off on 429.
- YAML: quote any value with `: ` in it, and summaries that start with a quote mark.

## Tools

- **curl only** (`-H "User-Agent: deep-cities-research/0.1"`): nl/en Wikipedia through the API,
  the registers, Commons, Wikidata, PDOK locatieserver for addresses, plain web pages.
  **Do not use any browser tool**: the browser is reserved for other agents this round. If a
  page can't be fetched with curl, use another source and note it.
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad/zuid-$SLICE/`, never the repo.
- Run Python with `-B`.

## Output

1. `research/zuid/places/$SLICE.yaml`. Validate until 0 errors:
   `python3 -B research/zuid/scripts/validate.py research/zuid/places/$SLICE.yaml`
   Then `grep -n "—\| – " research/zuid/places/$SLICE.yaml` must find nothing.
2. `research/zuid/notes/$SLICE.md` with these headings:
   - **Record ledger**: a table of every `monnr` in the slice and where it went (place title,
     "A-list, parked", or "existing place Vondelpark"). Every number must appear once.
   - **A-list, parked**
   - **Belongs to an existing place**
   - **Conflicts and uncertainties** (what you corrected, what you left out and why)
   - **Leads** (non-monument finds for the scouts)
   - **Missing photos**
   - **Route ideas**

Finish with a short report: places written (own and ensembles), ranks, records parked, and
anything that needs a decision.
