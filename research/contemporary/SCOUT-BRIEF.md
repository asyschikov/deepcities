# Scout brief: Contemporary Architecture (a theme map), one area per agent

The user wants a new theme map, **Contemporary Architecture**: notable buildings completed in
**2000 or later**, plus older buildings **remodelled or significantly redone since 2000** (a
new wing, a conversion, a transformation that is itself recognised architecture). Area:
**Greater Amsterdam** (Amsterdam incl. Weesp, plus Amstelveen, Diemen, Duivendrecht/Ouder-
Amstel, Zaanstad (Zaandam), Haarlemmermeer near Schiphol, Amstelland). Bar: **notable
buildings**: architectural recognition (prizes, architecture guides and press), striking or
debated. Not every new block. Expect the whole map to land around 150 to 250 places.

This is a shortlist only: nothing is drafted yet, the user picks. Never write to the live
site, never commit, never use em dashes (use a colon, comma or parentheses).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.
Write only `research/contemporary/scouts/SCOUT-$AREA.md`.

## Sources (use several; independent evidence beats one list)

- Arcam's architecture guide and news (arcam.nl), Architectuur.nl, Architectenweb, de
  Architect, ArchDaily, Dezeen, Divisare, the architects' own project pages.
- Prizes: Amsterdamse Architectuur Prijs (AAP) winners and nominees, Gouden Piramide, Abe
  Bonnema Prijs, ARC Awards, BNA Kubus / Beste Gebouw van het Jaar, Mies van der Rohe Award
  nominations, Dutch Design Awards (architecture), Amstelveen's and Zaanstad's own prizes.
- Guides: "Amsterdam Architecture: A Guide" (Guus Kemme), Arcam's "Architectuurgids", Open
  Monumentendag / Dag van de Architectuur routes, municipal welstand and project pages.
- nl/en Wikipedia lists (cross-check only), Het Parool and AT5 for debate and status.
- Fetch with curl and `User-Agent: deep-cities-research/0.1`; use the BrowserOS neo browser
  only when curl can't read a page, in your own tab, closed when done. Social media only
  from official pages. Don't use iamsterdam.com.

## Check what we already have

Run `env -u DC_URL -u DC_TOKEN pnpm -s dc places sights --all --q <word>` (from the repo
root; `--all` includes Centrum's detailed places and theme-only places) for every candidate.
Many qualify already (e.g. Eye, OBA Oosterdok, Muziekgebouw, the Stedelijk extension, the
Rijksmuseum renovation, Pontsteiger, Schoonschip). Mark each candidate:
- **(E) existing**: give the exact live title and id; it would be added to the theme map's list.
- **(N) new**: not on the map.

## Output: `research/contemporary/scouts/SCOUT-$AREA.md`

A numbered list ordered by strength, one item per building:
`N. **Name** (year completed; architect) (E: "title", id | N): one-line hook (what's
striking, odd or debated). Evidence: prizes / guides / press, with one lead link. Type:
new | remodel (what was redone). Caveats: private, not visible, under construction (only
completed buildings count), demolished.`

Then "Borderline" (one line each, why) and "Checked and dropped" (one line each).
Include public space, bridges, landscape and infrastructure only when it is recognised as
architecture (e.g. a prize-winning bridge or station). Exact addresses help the pins later.

## Areas

- `centrum-ij`: Centrum, the IJ banks (Oostelijke Handelskade, Westerdokseiland, Oosterdok),
  Houthavens.
- `noord`: Amsterdam-Noord (Overhoeks, NDSM, Buiksloterham, Hamerkwartier) and Westpoort.
- `zuid-zuidas`: Zuid, the Zuidas, Buitenveldert, Amstelveen.
- `oost-ijburg`: Oost, the Eastern Docklands (Java, KNSM, Borneo-Sporenburg), IJburg,
  Zeeburgereiland, Science Park, Diemen.
- `west-nieuw-west`: West, Nieuw-West, Sloterdijk, the Houthavens' west edge, Zaanstad.
- `zuidoost-weesp`: Zuidoost (Arena area, Bijlmer renewal), Duivendrecht/Ouder-Amstel,
  Weesp, Amstelland, Schiphol area.

Report briefly: counts of (E) and (N), the top ten, and anything odd.

## Tip: Arcam's guide as a full sweep

Arcam's map loads a JSON feed per district:
`https://arcam.nl/wp-content/themes/arcam/map-ajax.php?districts=<ID>&architects=alles&years=alles&typologies=&characteristics=&menu_screen=3&publicly_accessible=false`
(`markers`: `latlon` is [lng, lat], plus `id` and `slug`). District IDs: Centrum 81, Oost 82,
West 83, Zuid 84, Zuidoost 85, Noord 86, Nieuw-West 87, Haven 88, Westpoort 851. Architect and
year: the line under the title on `https://arcam.nl/architectuur-gids/<slug>/`. Fetch politely
(curl, the User-Agent above, a pause between pages). Arcam covers only Amsterdam: use other
sources for Amstelveen, Diemen, Zaanstad and so on.
