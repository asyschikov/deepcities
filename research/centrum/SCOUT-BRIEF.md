# Scout brief: Deep Amsterdam, Centrum (one theme and one zone per scout)

You scout candidates for the map **Deep Amsterdam** (slug `sights`): Amsterdam off the A-list,
for a curious resident or an adventurous visitor. You write one scout file and nothing else:
no drafts, no live site, no app code, no commits.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Scratch root (`$S`): `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/2d3e2f8a-59ac-4676-8702-33a1ea71adbe/scratchpad`.

## Read first

- `.claude/skills/c-list-sights/SKILL.md`: what the map is, "The West standard" (the sweeps
  are numbered there) and "Rules that matter most".
- `research/centrum/A-LIST.md`: what stays off the map in Centrum. Read it twice.
- `research/zuid/SCOUT-C.md`: the format and level of a good scout file.

## Zones

Stadsdeel **Centrum** only, in three zones (wijken):

- **West**: Jordaan, Haarlemmerbuurt (with the Western Islands), Grachtengordel-West.
- **Core**: Burgwallen-Nieuwe Zijde, Burgwallen-Oude Zijde, Nieuwmarkt/Lastage.
- **East-South**: Grachtengordel-Zuid, De Weteringschans, Weesperbuurt/Plantage,
  Oostelijke Eilanden/Kadijken.

**Point-check every candidate**: `AMS_RAW=$S/raw python3 -B -c "import sys;
sys.path.insert(0,'research/centrum/scripts'); import areas; print(areas.locate(LAT, LNG))"`
must say borough Centrum and one of your wijken. Track coverage per wijk.

## What is already known

- Nothing in Centrum is on the map yet.
- Centrum has **7,904 listed monuments** (7,088 of them houses). They are being screened
  separately: a listed building gets a place only when it has a story. So **do** propose a
  listed building when you find its story (say "listed" and give the address); don't
  propose one for being listed, old or pretty.
- Other scouts work the other themes and zones at the same time. Stay in your theme and
  zone; put good finds from outside it under "Leads for other scouts".

## Centrum needs care

- **Density.** This is the densest district of the country in stories per metre. Exhaust
  your sources, then be strict. The test for a place: *would a curious Amsterdammer who
  walks here every week say "I never knew that", and is there something to look at?*
  Everything that fails goes in "Checked and dropped" with a reason, so nobody digs it up
  again. A small thing with one fact (a plaque, a gable stone, a statue with no story) is a
  "Look for" line for a neighbouring place: list those under "Look for lines".
- **Group small things that belong together** instead of proposing ten pins on one block:
  the gable stones of one street, the stumbling stones and memorial of one house, the
  sculptures of one bridge. Say what the group is and where its pin goes.
- **A-list.** Follow `A-LIST.md`. Nothing on it gets proposed. What you may propose is the
  overlooked thing beside it, pitched on itself. If you meet another sight you think is
  A-list, put it under "A-list candidates".
- **Tourist-trade things** (souvenir museums, "experiences", themed bars, coffeeshops, sex
  shops): out, unless there is real history a local would vouch for.
- **Food and drink: very high bar.** Centrum has hundreds of old cafés. Only institutions
  with real historic or cultural weight (a brown café of the 17th century with its interior
  intact and a story, a distillery tasting room, a shop that shaped the city). List the few
  you think pass under "Food and drink, borderline", with the case for and against.
- **Gone things: high bar** (see the skill). Centrum is full of vanished things; only those
  with a strong story *and* a trace or exact spot to stand on.
- **Homes of famous people**: only when there is something to see or a real story at that
  address; never living private people.
- **Local voice** (the user's explicit wish): for each shortlisted item, note in a few
  words what locals say, argue about or are fond of, when a local source says it (a
  neighbourhood paper, a residents' blog, a campaign, a nickname). Quote the nickname.

## Output: `research/centrum/scouts/SCOUT-<code>.md`

Write the file early and save after every source, so nothing is lost if you are cut off.

- Header: date, sources gone through **completely** (with counts), sources only sampled,
  what that leaves open.
- **Coverage table**: your sweeps by your wijken, each cell "done" or "partial: what is
  missing".
- **Shortlist**, grouped by sweep and then by wijk. Number items `<code>-01`, `<code>-02`,
  and so on. Per item one compact paragraph: title; exact pin (lat, lng to 6 decimals, the
  object itself) and address; the hook in one or two sentences; local voice if any; lead
  source URL (plus a second where the first is weak); current status with the date of the
  latest evidence; caveats (gone? private? disputed? pin approximate? listed?); suggested
  rank (Amazing about 1 in 10: the "start here" picks; Nice; Okay); and "new place" or
  "group with <item>".
- **Look for lines**, **Food and drink, borderline**, **A-list candidates**, **Checked and
  dropped** (table: what, why), **Leads for other scouts**.

Aim: everything that passes, however many that is. For orientation only: a themed scout in
one Centrum zone should expect something like 30 to 70 shortlisted items and a dropped
table at least as long.

## Tools

- curl with `-H "User-Agent: deep-cities-research/0.1"` for APIs and plain pages (Overpass,
  Wikipedia raw wikitext `https://nl.wikipedia.org/w/index.php?title=X&action=raw`,
  Wikidata, PDOK locatieserver for geocoding). Web search and Wikimedia APIs rate-limit
  hard: pace requests, back off on 429.
- **BrowserOS neo browser is your main tool** (load `mcp__browseros-neo__*` via ToolSearch
  in one call): it can open any website, including pages curl can't read, sites behind bot
  walls and search engines (Google, DuckDuckGo). Use it for breadth and depth: search,
  open, follow links, read whole archives. **One tab of your own, leave every other tab
  alone, close your tab before you report.**
- **Source preference (the user's explicit wish):** local newspapers, neighbourhood papers,
  residents' and history-society sites, small Dutch and English blogs and other
  non-mainstream sites. Mainstream tourist sites (iamsterdam, TripAdvisor-type lists,
  hotel and tour-operator blogs) are not sources: at most a lead to verify elsewhere.
- Sites whose robots.txt refuses automated readers (onsamsterdam.nl does): no curl, no
  crawling. Through the browser you may read **specific articles** on your topics at human
  pace (one page at a time, with pauses), take facts only, write your own words and link
  the article. Never download or crawl their archive.
- Raw downloads go to `$S/centrum-scout-<code>/`. Search in Dutch first, then English.
  Never use em dashes in what you write.

## Themes

- **A: public art and walls, war and memory** (sweeps 2 and 3). buitenkunstamsterdam.nl
  (Kunstwacht) for your wijken, maps.amsterdam.nl/wandkunst, stadscuratorium.nl, Street Art
  Cities, OSM `tourism=artwork`, nl.wikipedia "Lijst van beelden in Amsterdam-Centrum";
  gable stones (gevelstenen.net, Vereniging Vrienden van Amsterdamse Gevelstenen: pick the
  ones with a story, group by street). War and memory: 4en5mei.nl (every record in your
  wijken, detail pages read), OSM `historic=memorial`, Joods Monument and Joods Amsterdam
  where a place tells the story, the February Strike, resistance addresses, the Hunger
  Winter (stripped houses in the old Jewish quarter), colonial and slavery history
  (Mapping Slavery Amsterdam, the Black Heritage sources), queer history
  (Homomonument is second tier: allowed).
- **B: hidden history and behind the gate** (sweeps 4 and 5). nl.wikipedia categories for
  your wijken (crawl them all), Amsterdam op de kaart (amsterdamopdekaart.nl), Theo
  Bakker's Amsterdam (theobakker.net), Jordaanweb / jordaanmuseum, Geheugen van Centrum
  type sites, archief.amsterdam stories, amsterdamsloopt, onh.nl, stadsherstel.nl and
  hendrickdekeyser.nl (their houses and what is open). Behind the gate: hofjes (all of
  them: which are open, when, which are shut), hidden churches, inner courts and gardens
  open to the public, alleys and steegjes with a story, passages, tunnels, cellars,
  shelters, towers one can climb, rooftops, things under bridges.
- **C: modern and contested, curiosities, green and odd museums** (sweeps 6 and 7).
  Post-1965 architecture that stands out or caused a fight (Arcam's guide, the Nieuwmarkt
  metro riots and the buildings they produced, the Stopera, the Maupoleum (gone), Aldo van
  Eyck and Theo Bosch infill, the Bijenkorf garage, new bridges), squats and free spaces
  past and present (Vrankrijk, the Handelsblad complex, NRC, Tetterode is West), renewal
  and tourism fights, renamings and disputes. Curiosities: Atlas Obscura's full Amsterdam
  list, OSM `tourism=museum|attraction|viewpoint`, the narrowest houses, smallest things,
  odd street furniture, urinals (krullen), markets with a history, city wildlife and
  trees with a story, pocket parks and public roof gardens, small and odd museums (only
  those a local would send a friend to), houseboats with a story.
- **D: local papers and blogs, both languages** (the user's explicit wish: "so we get some
  local vibes"). You are not tied to a sweep: you mine what locals write. Dutch: Het Parool
  (city and neighbourhood pieces, "Ode aan", "Plekken", columns), AT5 and NH Nieuws, De
  Echo / Amsterdams Stadsblad, the wijkkranten and residents' sites of your wijken (for
  example Jordaan & Gouden Reael, d'Oude Binnenstad, Binnenk@nt, Plantage Weesperbuurt,
  Eilandenboulevard, Opnieuw! Nieuwmarkt, wijkcentra, buurtorganisaties, Vrienden van de
  Amsterdamse Binnenstad and its magazine Binnenstad), neighbourhood Facebook-turned-web
  history groups, Dutch city blogs. English: DutchNews and DutchReview city pieces, expat
  and resident blogs (Amsterdamian, Amsterdam Wanderlust type sites, Awesome Amsterdam,
  What's up with Amsterdam, long-running personal blogs), English-language walking-guide
  writers, Reddit r/Amsterdam "hidden gems" threads (for leads only, verify elsewhere).
  For each source say how far back you read. What you are after: the places residents are
  fond of or fight about and that no register lists (a bench, a tree, a shop sign, a
  neighbour's museum, a campaign, a nickname, a yearly ritual with a fixed spot).
  Every item needs a second, checkable source for its facts.

Finish with a short report: sources exhausted, number of candidates by wijk and rank, and
the three best finds.
