# Scout brief: Magic of Summer (a seasonal theme map), one slice per agent

The user wants a new theme map about **summer in Amsterdam**. In their words: "extensive research
on the best SUMMER spots. Mostly outdoors, but could be some buildings as well. Keyword: summer
fun. Research local blogs, newspapers. Before, we did universal places, ones unrelated to the
seasons. This is purely seasonal: outdoors, water fun, terraces, shade, hangout spots. Go knock
your socks off."

So the test for every candidate is: **is this one of the places that makes an Amsterdam summer?**
Where locals actually go on a hot day or a long light evening, and would tell a friend to go.
Not "a nice park", but "the lawn by the Sloterplas where half of Nieuw-West swims at 8 pm".
A place earns its spot by what it's like in summer, not by its history (Deep Amsterdam does
history). Fewer, better: a weak candidate is worth less than none.

Area: the Amsterdam municipality, plus a few spots just over the line that Amsterdammers treat
as their own summer places, a short bike or transit ride away (e.g. Het Twiske, the
Amstelveen side of the Amsterdamse Bos, Ouderkerk aan de Amstel, the Diemerpark/Diemerbos
edge, Spaarnwoude's beach). Say "outside Amsterdam (municipality X)" for those.
Expect the whole map to land around 120 to 200 places across all slices.

This is a shortlist only: nothing is drafted yet. Never write to the live site (no `dc` write
commands), never commit, never use an em dash (use a colon, comma or parentheses).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Write only `research/summer/scouts/SCOUT-$SLICE.md`.

## Sources (local voices first; independent evidence beats one list)

- **BrowserOS neo is a primary tool**: open ONE tab of your own (load with ToolSearch
  "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs,mcp__browseros-neo__navigate,mcp__browseros-neo__read,mcp__browseros-neo__grep"),
  search Google from it (Bing or DuckDuckGo if Google captchas), pace yourself (other agents share
  the browser), and **close your tab when done**.
- Newspapers and local media: Het Parool (zomer, zwemplekken, terrassen lists and its
  "PS" section), AT5, NH Nieuws, Echo, De Westkrant, Dichtbij/neighbourhood papers, NRC,
  Volkskrant, Trouw, Time Out Amsterdam.
- Local blogs and guides by people who live here: Your Little Black Book, Amsterdam &Meer,
  Mapped Amsterdam, Spotted by Locals, Amsterdamfoodie, Ilovefood?, Unfold Amsterdam,
  Gewoon Amsterdam, neighbourhood blogs, Reddit r/Amsterdam threads (leads only).
- Official facts: the municipality (amsterdam.nl: official swim locations, swim bans,
  parks), **zwemwater.nl / the province's list of designated bathing waters** (water quality
  and the official season), Waternet, the venues' own sites and official socials.
- Never iamsterdam.com. Wikipedia only as a lead.
- Facts must be mainstream and checked. A place needs **at least two independent sources**
  that rate it as a summer spot (two newspaper/blog lists, or one plus the official listing).

## Safety and honesty (the user's rules)

- **Never recommend swimming where it is banned or unsafe** (the busy IJ and its shipping
  lanes, the Stenen Hoofd: swimming banned with fines since 2023; canals with boat traffic
  outside official events). For water spots, say whether it is an official bathing location
  (zwemwater.nl), and note blue-green algae or swimmer's itch warnings that recur.
- Current status matters: check it still exists and is open (2025/2026 news, its own site).
  Pop-up summer places change every year: prefer ones that come back season after season, and
  say since when.
- No opening hours, no prices.

## Check what we already have

For every candidate run `pnpm -s dc places sights --all --q <word>` from the repo root
(`--all` includes detailed and theme-only places). Many parks and some terraces are already on
Deep Amsterdam (Vondelpark pavilion, Westerpark, Sloterplas, Brouwerij 't IJ, Hannekes Boom?,
the Stenen Hoofd, Fruittuin van West, Cantina of Het Rijk van de Keizer, Stenen Hoofd...).
Mark each candidate:
- **(E) existing**: the exact live title and id; it would be list-added, with a summer text added.
- **(N) new**: not on any map.

## Output: `research/summer/scouts/SCOUT-$SLICE.md`

A numbered list ordered by strength (best first), one item per place:
`N. **Name** (address or location; outside Amsterdam?) (E: "title", id | N): the summer hook in
one line (what you do there on a summer day and why locals love it). Kind: one of Swim spot,
Beach, Waterside terrace, Park and shade, Hangout and sunset, On the water, Open-air culture,
Play and splash. Status: open / seasonal (months) / check. Evidence: two or three links (at
least one newspaper or local blog). Caveats (crowds, algae, bans, wheelchair access).`

Then "Borderline" (one line each, why) and "Checked and dropped" (one line each, why).
End with: counts of (E) and (N), your top ten, and anything odd.

## Slices

- `swim`: everything for swimming and beaches. Official open-water bathing spots (Sloterplas,
  Nieuwe Meer, Gaasperplas, Het Twiske, the Bosbaan? check, Blijburg/IJburg beaches,
  Sloterplas beach, Strand Zuid?, Amsterdam Noord's spots), city swim spots in the IJ that are
  officially allowed (Marineterrein, Sluishuis? check, De Plantage?), outdoor and summer pools
  (Flevoparkbad, Brediusbad, De Mirandabad's outdoor part, Florabad?, Jan van Galenbad?,
  Sportplaza Mercator?), wild-swimming spots locals love that are legal, swimming events'
  homes (Amsterdam City Swim, check). Also sandy city beaches without swimming.
- `terraces`: the summer terraces: waterside terraces, beach bars, summer-only pavilions and
  garden cafés, terraces in parks, rooftop terraces open to anyone, terraces famous for the
  evening sun. Hannekes Boom, Pllek, Brouwerij 't IJ, De Ysbreeker, Café de Jaren's water
  terrace, Waterkant, Hotel de Goudfazant?, Roest?, the Vondelpark's Groot Melkhuis, Het
  Blauwe Theehuis, Café-Restaurant Amsterdam's garden, Mediamatic?, Ouderkerk's Amstel
  terraces, the Amstel's Hollandsche Manege? Only ones locals rate highly AS a summer place.
  Ice cream: only a parlour with real standing (decades, a queue in every summer story).
- `green-hangout`: parks and shade, picnic lawns, hangout and sunset spots, wild green places.
  The Amsterdamse Bos (its many summer spots: the Grote Vijver, the Bosbaan, the
  Speelweide...), Vondelpark lawns, Westerpark, Noorderpark, Flevopark, Frankendael,
  Rembrandtpark, Erasmuspark, Diemerpark, Sloterpark, Gaasperpark, the Oeverlanden at the Nieuwe
  Meer, the Hortus? (summer), shady woods (Vliegenbos), sunset spots (NDSM pier, the back of
  Centraal, Silodam, Stenen Hoofd, the IJ ferry decks, Sluishuis), hangout spots (Westergas
  lawns, the Stenen Hoofd, De Ceuvel), fruit picking and city farms in summer.
- `water-openair`: on the water and open-air culture. Boat, canoe, SUP and pedal-boat hire
  (Sloepdelen, Amsterdamse Bos canoes, Nieuwe Meer), free ferry rides as a summer outing,
  rowing and sailing spots, the Amstel by boat, canal swims? (only official events), open-air
  cinemas and theatres (Vondelpark Openluchttheater, Amsterdamse Bos Openluchttheater, Pluk de
  Nacht, Westergas open-air films, Rialto? check), summer festivals' homes that are public places
  (Over het IJ at NDSM, Kwaku, Roots Open Air?), splash pads, fountains and water playgrounds for
  kids, summer markets and night markets.
