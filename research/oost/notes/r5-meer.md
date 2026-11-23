# Oost round 5, Watergraafsmeer (notes)

3 new places in `places/r5-meer.yaml`. Merges: 4 items into 3 places in `places/frankendael.yaml`, 1 item into 1 place in `places/r4-meer.yaml` (titles unchanged, only those places touched). No monument numbers (none of the items is listed). All three files validate with 0 errors; no em dashes.

## Items

| Item | Result | Rank | Category |
|---|---|---|---|
| 401 Kruislaan flood doors | own place, "Kruislaan flood doors (Kruislaancompartimentering)", both 1961 newspaper accounts with titles and dates | Nice | infrastructure |
| 402 rooftop observatory | paragraph and Look for line in "CWI and the Science Park internet hub" (user's decision); UvA stargazing link added (now 6) | | |
| 403 Leeuwenburg | own place, "Leeuwenburg (Bruut), Weesperzijde 190", `outlook: Major change ahead`, around 2031 | Okay | civic |
| 404 thermometer streets | own place, "Thermometer streets of De Wetbuurt", with Tuindorp Amstelstation as a paragraph; Van Eyck "Iglo" left out | Okay | hidden-history |
| 405 Kijker | Look for line in "Bloementuin van Darwin (Darwinplantsoen)" (user's decision); still there in June 2025; Wikipedia link added (now 5) | | |
| 406 IKO in the gasworks | paragraph and Look for line in "CWI and the Science Park internet hub" | | |
| 407 Oetewalerbrug | Look for line in "Rechthuis Watergraafsmeer"; Wikipedia link added (now 6) | | |
| 408 Vrede (Reicher) | Look for line in "Piet Zanstra's flats on the Radioweg"; Wikipedia link added (now 3) | | |

Ranks are not yet in `scripts/data/amsterdam-c-list-ranks.json` (outside the files this round may touch): 401 Nice, 403 Okay, 404 Okay.

## Site checks and status

- **401**: Commons photos of 4 August 2024 (CC0) show both doors in place in recesses either side of the road and the cycle path, with a pillar between. **Mechanism**: no source says how the doors move (the bottom edge in the photos suggests rollers on a rail, but that is not written anywhere), nor whether they have ever been closed in earnest. The text says only that they stand ready to close the gap; the sliding steel shutter is mentioned only for the Molenwetering culvert, where Algemeen Handelsblad says so. No `check` set.
- **401 newspapers** (titles and dates from Delpher SRU metadata and the Delpher viewer): Algemeen Handelsblad, 15 July 1961, "Extra waterkering Watergraafsmeer. Spoordijk kan in toekomst worden afgesloten" (the Tuindorp Oostzaan explanation, three gaps, steel doors, sliding culvert shutter, Molukkenstraat dike); De Waarheid, 27 July 1961, "Voorzieningen in spoordijk" (the shifting explanations: "FOM polder" against bombs, then 40,000 residents after Tuindorp Oostzaan, then the province's 1955 decision under the war law). Both bear out the scout's account. The scout's "one in NRC" is the Algemeen Handelsblad (NRC's predecessor, KBNRC01 collection). De Waarheid speaks of "the FOM laboratory" by the viaduct, not of a nuclear lab; which FOM lab (IKO or Kistemaker's lab, later AMOLF) is not said, so the text says "the physics laboratory by the viaduct" and the 406 merge does not link the doors to IKO.
- **403**: state in late 2026 settled: permit irrevocable 20 April 2026, tower crane on the roof May 2026 (weesperzijde190.nl); façade dismantling in full swing, renamed Bruut, completion expected 2031 (oost-online, 9 November 2026). SOS Brutalism (updated 4 September 2026) says early 2030; text uses "around 2031" (newer). About 2,500 façade elements: from a Google summary of a paywalled Bouwwereld article (19 November 2026); only used as "some 2,500". Use after renovation: offices plus restaurant, bar, deli and meeting centre (oost-online); Arcam (2025) still spoke of an education centre, which is outdated. Photos are from 2019 and 2020, before the stripping.
- **404**: the scout's "homes for elderly people giving up big flats to families" (Tuindorp Amstelstation) is in neither nl.wikipedia nor the GvO pages: left out. The **Van Eyck "Iglo"** (OSM, about 52.344231, 4.921485) could not be confirmed by any source (web search, Van Eyck playground literature); Overpass was overloaded so the OSM tag itself was not re-read. Left out, per the brief. The sundial on Fahrenheitstraat 1 is a Look for line on the strength of the 2021 Commons photo used as cover; no story found for it.
- **405 Kijker**: Commons photos of 2 June 2025 (CC0) show it in place with its bridge, so no Still there? flag is needed in the merge. Whether the platform still turns is not documented; the line describes what it was built to do.
- **408 Vrede**: latest photo found is Commons, June 2018; no news of removal.

## Source conflicts and uncertainties

- **403 dates**: SOS Brutalism gives 1971–1977, the scout 1973–1977; finished 1977 everywhere. `built` uses 1971–1977.
- **406 gasworks**: Hazewindus et al. say IKO was housed in "an empty gasworks" in 1946; GvO (Jo Haen, 2015) says the works was demolished around 1930 and the gas master's house later became part of the lab. Both agree on the site; the text says IKO was housed in the old gasworks and that the gas master's house became part of the lab, without dating the demolition.
- **406 1949**: the first internal beam came in 1949 (Hazewindus); the inauguration was 10 or 11 November 1949 depending on the source (Physics Today, kernenergieinnederland.nl, via search summaries). Text says "inaugurated in November 1949". The scout's "largest in Western Europe" has one source only and is not used.
- **402 schedule**: evening stargazing runs from after the summer break to the end of March; the UvA agenda listed only a children's stargazing evening on 12 February 2027 when checked. Text states the season, not dates.

## Places without photos

- None among the new places. The merge target "Piet Zanstra's flats on the Radioweg" still has none (a Vrede photo would misrepresent the flats).
