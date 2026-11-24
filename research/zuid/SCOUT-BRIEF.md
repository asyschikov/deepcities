# Scout brief: Deep Amsterdam, Zuid (one theme per scout)

You scout candidates for the map **Deep Amsterdam** (slug `sights`): Amsterdam off the A-list,
for a curious resident or an adventurous visitor. You write one scout file and nothing else:
no drafts, no live site, no app code, no commits.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.

## Read first

- `.claude/skills/c-list-sights/SKILL.md`: what the map is, "1. Scout", "The West standard"
  (your sweeps are numbered there) and "Rules that matter most" (gone things, food and drink,
  bar for a place).
- `research/zuid/A-LIST.md`: what stays off the map in Zuid.
- `research/oost/SCOUT-3.md` or `SCOUT-4.md`: the format and level of a good scout file.

## Area

Stadsdeel **Zuid** only: Oud-Zuid (Hoofddorppleinbuurt, Schinkelbuurt, Willemspark,
Museumkwartier, Stadionbuurt, Apollobuurt), De Pijp and Rivierenbuurt (Oude Pijp, Nieuwe Pijp,
Zuid Pijp, Scheldebuurt, IJselbuurt, Rijnbuurt) and Buitenveldert and Zuidas (Prinses
Irenebuurt, Zuidas, Buitenveldert-West, Buitenveldert-Oost). The Amsterdamse Bos is in
Amstelveen: out. The Vondelpark north edge and Vondelstraat are West: out.

**Point-check every candidate**: `AMS_RAW=<your scratch dir> python3 -B -c "import sys;
sys.path.insert(0,'research/zuid/scripts'); import areas; print(areas.locate(LAT, LNG))"` must
say borough Zuid. Sources put things in the wrong district all the time.

Track coverage in six **areas**: (1) Museumkwartier and Willemspark, (2) Apollobuurt,
Stadionbuurt, Schinkelbuurt, Hoofddorppleinbuurt, (3) De Pijp (Oude, Nieuwe, Zuid),
(4) Rivierenbuurt (Schelde, IJsel, Rijn), (5) Buitenveldert, (6) Zuidas and Prinses
Irenebuurt.

## What is already known

- Nothing in Zuid is on the map yet. `pnpm -s dc places sights --q <word>` (read-only) shows
  the live map if you need to check a border case.
- **Listed monuments are being drafted separately** from `research/zuid/slices/*.json` (596
  records: `monnr`, `name`, `address`, `lat`, `lng`). Don't propose a monument as such. But if
  your find sits in or on a monument (a memorial on a listed school, a mural on a listed
  block, a story the register misses), list it and write "merge into monument <monnr>
  (<address>)" so it can be joined to that place. Search the slice files by address or
  coordinates before you call something new.

## Zuid needs care

- **Density.** Zuid has more candidates than any district so far. Exhaust your sources, then
  be strict: propose what passes the bar, and put the rest in a "Checked and dropped" table
  with a reason, so the next round doesn't dig it up again. A sculpture or plaque with no
  story of its own is a "Look for" line in a nearby place, not a place: list those under
  "Look for lines" with the place they belong to.
- **A-list.** Follow `A-LIST.md`. If you meet another sight you think is A-list, put it under
  "A-list candidates" with a reason, not in the shortlist. Off-list details beside A-list
  sights are welcome when they have a hook.
- **Food and drink: very high bar.** De Pijp will offer dozens. Only a place of real historic
  or cultural weight (an institution that shaped the city). List the few you think pass under
  "Food and drink, borderline", with the case for and against. Everything else: dropped.
- **Gone things: high bar** (see the skill).
- **Homes and private people.** Zuid is full of famous residents. A writer's or artist's house
  counts only when there is something to see or a real story at that address; never living
  private people.

## Output: `research/zuid/SCOUT-<letter>.md`

- A short header: date, sources gone through **completely** (with counts: "all 212 works in
  the Kunstwacht list for Zuid"), sources only sampled, and what that leaves open.
- A **coverage table**: your sweeps by the six areas, each cell "done" or "partial: what is
  missing".
- The **shortlist**, grouped by sweep and then by area. Number items from your block (given
  in your task). Per item, one compact paragraph:
  title; exact pin (lat, lng to 6 decimals, the object itself) and address; the hook in one
  or two sentences; why it fits; lead source URL (plus a second where the first is weak);
  current status with the date of the latest evidence; caveats (gone? private? disputed? pin
  approximate?); suggested rank (Amazing about 1 in 20, Nice, Okay); and "new place" or
  "merge into monument <monnr>" or "merge with item <n>".
- **Look for lines**, **Food and drink, borderline**, **A-list candidates**, **Checked and
  dropped** (table: what, why), and **Leads for other scouts** (things outside your sweeps).

## Tools

- curl with `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages (Overpass,
  Wikipedia API, Wikidata, PDOK locatieserver for geocoding).
- BrowserOS neo browser (load `mcp__browseros-neo__*` via ToolSearch) for pages that need
  one. **Use one tab of your own, leave every other tab alone, and close your tab before you
  report back.**
- Raw downloads go to
  `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad/zuid-scout-<letter>/`.
- Search in Dutch first, then English. Never use em dashes in what you write.

## The three scouts

- **Scout A, items 101 onward: sweeps 2 and 3.** Public art and walls: the full
  buitenkunstamsterdam.nl (Kunstwacht) list for Zuid, the city's wall-art register
  (maps.amsterdam.nl/wandkunst), stadscuratorium.nl, Street Art Cities, OSM
  `tourism=artwork`, nl.wikipedia "Lijst van beelden in Amsterdam-Zuid". War and memory: the
  4en5mei.nl monument database (every record in Zuid, detail pages read), OSM
  `historic=memorial`, tracesofwar, Joods Monument where a place tells the story (the
  Rivierenbuurt and the Apollobuurt were the heart of prewar Jewish Zuid; the occupation's
  offices sat on the Euterpestraat, now Gerrit van der Veenstraat, and the Apollolaan).
- **Scout B, items 201 onward: sweeps 4 and 5.** Hidden history: nl.wikipedia categories for
  Amsterdam-Zuid and its neighbourhoods (crawl them all), Geheugen van Plan Zuid
  (geheugenvanplanzuid.nl), Vrienden van de Pijp and De Pijp history sites, Buitenveldert
  history, Ons Amsterdam, archief.amsterdam, amsterdamsloopt, local papers (De Echo, Het
  Parool, AT5/NH). Behind the gate: hofjes and courtyards (the Harmoniehof, the Coöperatiehof
  and their kind are monuments, look for the unlisted ones), inner gardens open to the
  public, alleys, bunkers and shelters (Arcam's Cold War shelter route, OSM `military=*`),
  school gardens, things inside blocks.
- **Scout C, items 301 onward: sweeps 6 and 7.** Modern and contested: post-1965 architecture
  that stands out (Arcam, gebouwdin.amsterdam.nl for Zuid, the Zuidas, Buitenveldert's
  churches and the VU campus, Van Eyck's Burgerweeshuis is a monument), squats and free
  zones past and present, renewal fights (De Pijp's 1970s renewal, the Zuidas dock tunnel),
  renamings and disputes. Curiosities, green corners and odd museums: Atlas Obscura's full
  Amsterdam list, OSM `tourism=museum|attraction|viewpoint` and `landuse=allotments`,
  iamsterdam "hidden gems" pages, allotment parks and school gardens, small museums,
  the Amstelpark and Beatrixpark and Gijsbrecht van Aemstelpark beyond their listed parts
  (the Floriade 1972 leftovers), odd street furniture, markets with a history.

Finish with a short report: sources exhausted, number of candidates by area and rank, and
the three best finds.
