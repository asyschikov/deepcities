# Scout brief: Alternative Amsterdam (a theme map), one theme slice per agent

The user wants a new theme map, **Alternative Amsterdam**: the city's iconic alternative and
underground places. In the user's words: "iconic alternative and underground places (some
current ones like OT301, some like Paradiso are alternative legends of the past but now a
relatively normie place). Make sure to include dive bars like Soundgarden. Include key LGBTQ
places. Do a good research please."

So, both:
- **living places**: squats and ex-squats turned cultural centres, underground venues, DIY
  spaces, dive bars with a cult following, record shops, alternative markets;
- **legends**: places that made alternative history (Provo, the squatters' movement, punk,
  hippie Amsterdam, early house and techno, coffeeshop history), even if they are now
  mainstream, changed use or gone. A gone place qualifies only if something related stands
  there today, the site tells its story, or its impact lasted.

Area: the Amsterdam municipality (incl. Noord, Westpoort, Nieuw-West, Zuidoost, Weesp).
Ruigoord counts (Westpoort). Expect the whole map to land around 100 to 180 places.

This is a shortlist only: nothing is drafted, the user picks. Never write to the live site
(no `dc` write commands), never commit, never use an em dash (use a colon, comma or
parentheses).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Write only `research/alternative/scouts/SCOUT-$SLICE.md`.

## Sources (use several; independent evidence beats one list)

- **BrowserOS neo is a primary tool here**, not only a fallback: open one tab of your own
  (`mcp__browseros-neo__tabs` action "new", then `mcp__browseros-neo__run`), search Google
  from it, and read Het Parool, AT5, NH Nieuws, Folia, Vice NL, Volkskrant, NRC and Trouw
  through the signed-in browser (paywalls and cookie walls are fine there). Close your tab
  when done. Load the tools with ToolSearch "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs".
- Local and scene sources: Het Parool's nightlife and squat coverage, AT5, the IISG / Staatsarchief
  (squatters' movement archive), Archief Amsterdam, Amsterdam Museum, the venues' own
  history pages, Gonzo (circus), Subbacultcha, OOR, 3voor12 (VPRO), Mixmag/RA for clubs,
  the "Kraakbeweging" literature (Eric Duivenvoorden "Een voet tussen de deur"), Provo
  literature, IHLIA and Atria for LGBTQ+ and women's places.
- nl/en Wikipedia: cross-check and leads only.
- Facebook/Instagram only from a venue's official page. Don't use iamsterdam.com, and
  don't rely on one hobby or listings site for a fact.
- Facts must be mainstream and authoritative: if only one hobby site says it, mark it weak.

## Check what we already have

For every candidate run `env -u DC_URL -u DC_TOKEN pnpm -s dc places sights --all --q <word>`
from the repo root (`--all` includes detailed and theme-only places). Many are already on
Deep Amsterdam (Paradiso, Melkweg, Homomonument, Café 't Mandje, Saarein, the ADM squat,
NDSM, Vrankrijk?, the squatters' Nieuwmarkt, Odeon/DOK, the Amstel's gay corner, the
Reguliersdwarsstraat...). Mark each candidate:
- **(E) existing**: the exact live title and id; it would be list-added to the theme map.
- **(N) new**: not on any map.

## Output: `research/alternative/scouts/SCOUT-$SLICE.md`

A numbered list ordered by strength, one item per place:
`N. **Name** (address; years active) (E: "title", id | N): one-line hook (why it is
alternative or underground, and what it is today). Status: open / changed (now X) / gone.
Evidence: two or three sources with links (at least one news or archive source). Caveats.`

Then "Borderline" (one line each, why) and "Checked and dropped" (one line each, why).
Report briefly at the end: counts of (E) and (N), your top ten, and anything odd.

## Slices

- `music-clubs`: venues and clubs, past and present. Paradiso, Melkweg, OCCII, the Bimhuis's
  roots, Winston Kingdom, Bitterzoet, Cruquius, De Nieuwe Anita, Garage Noord, Radion, De
  School (gone), Trouw (gone), Shelter, Doka, the Marktkantine, RoXY and iT (gone; iT is on
  the map), Mazzo, Akhnaton, the Milky Way's roots, Fantasio/Kosmos, punk at the Emma and the
  Rijkshemelvaart... plus record shops with history (Concerto, Boudisque, Rush Hour, Red
  Light Records) and free festivals' homes.
- `squats-freezones`: the squatters' movement and its places, and today's free zones and
  breeding grounds. OT301, Vrankrijk, OCCII (only as a squat; the music side is the other
  slice's), ADM, Ruigoord, the Groote Keyser, the Kalenderpanden, the Spuistraat squats, the
  Binnenpret, De Vondelbunker, Joe's Garage, the Plantage Doklaan, Kinetisch Noord, De
  Ceuvel, NDSM's Kunststad, the Tabakspanden, the Lucky Luyk, the 1980 coronation riots'
  sites, the Wijers, Het Blauwe Theehuis, the Vondelpark sleep-in, Provo's Spui happenings
  at Het Lieverdje, the Kabouters, the first coffeeshops (Mellow Yellow, The Bulldog).
- `dive-bars`: dive bars and cult cafés with a real reputation (not just "good bars").
  Soundgarden, Café de Koe, Café Weber, Lux, Café Pakhuis, The Waterhole, Café Cut Throat?,
  Café Hesp?, De Duivel (hip-hop), Café Belgique, Café De Engelbewaarder, Café 't Mandje
  (E), Café Gollem, Hesp, the bruine kroegen only if they are a scene's home. Bars of
  punks, musicians, writers, students, artists. Long-running, with press coverage. The
  bar is "an institution with a scene", not "a nice bar".
- `lgbtq-women`: the key LGBTQ+ places city-wide (Centrum is already done and on the map:
  the COC founding, De Schakel, the Empire, the Reguliersdwarsstraat, the Amstel corner,
  Saarein, Homomonument, 't Mandje, Vivelavie, iT, Odeon/DOK, Ons Huis). Add places outside
  Centrum: De Trut (Bilderdijkstraat), Club Church?, the Vrankrijk queer nights?, Flexbar?,
  the Vrouwenhuis, Pink Point, the gay beach in Zandvoort is out of area... plus key women's
  movement and feminist places (Dolle Mina actions, Vrouwenhuis, Cinemien) where they are
  part of the alternative story.
