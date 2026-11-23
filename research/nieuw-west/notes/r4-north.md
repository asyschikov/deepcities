# Nieuw-West round C, slice `north` (notes)

Items from `SCOUT-4.md`: new 307, 309, 310; merges 306, 311, 317, 319, 320, 321, 325, 326 and the Rembrandtpark pointer. New places in `places/r4-north.yaml`; merges in `history.yaml`, `geuzenveld.yaml`, `sloterhof.yaml`, `slotervaart.yaml`, `slotermeer.yaml`, `r3-slotervaart.yaml` (titles unchanged). All seven files validate with 0 errors.

## New places (3)

| Title | Item | Category | Rank | Flags |
|---|---|---|---|---|
| Fruittuin van Moerkerken (Cascoland) | 307 | green | Okay | outlook: Under threat (city's possible new build, announced June 2026) |
| 't Landje, the hut-building island (Rembrandtpark) | 309 | curiosities | Nice | none |
| Westbeat and the dancers' Super Space (Lelylaan) | 310 | housing | Okay | none |

Pins point-checked with `scripts/areas.py`: Slotermeer-West, Overtoomse Veld, Westlandgracht (all borough Nieuw-West). New ranks are not in `scripts/data/amsterdam-c-list-ranks.json` (outside this slice).

## Site and source checks

- **307 still there?** Settled without a flag: Rodi, 6 Oct 2026, describes the garden, greenhouses, orchard, chicken coop and bread digester as running ("six years"), and the Van Deysselkrant of May 2026 lists weekly activities in the greenhouses. The new finding is the threat: in early June 2026 the city announced possible new building on the site; undecided whether only the gardens go. Set `outlook: Under threat` (no `outlook_when`). The project name in the Van Deysselkrant is "Nieuw-Westland"; the title keeps the iamsterdam name plus Cascoland. cascoland.com is hacked (casino spam pages), so it is not linked.
- **309 pin**: OSM has the island as `leisure=playground` "het Landje" (way 254470549); pinned at its centre (52.364886, 4.846256), 40 m from the PDOK point of Staalmeesterslaan 197A. No `check` (a park island pinned on a sensible point). Founding year: Geheugen van West 2010 calls it "bijna veertigjarig" and De Bake the founder, so "early 1970s". The scout's "mayor for 43 years until 2016" was not found in any source: left out; the text says "for decades". The "best playground" line is Het Parool 2009 ("leukste speeltuin van de stad") as quoted by Geheugen van West. Hours and pony club from kidsproof (undated listing, matches search snippets from go-kids and iamsterdam).
- **310**: completion 2020 (archilovers/ArchDaily snippets); ICK in the building since Sept 2021 (Artstalk snippet; five years celebrated 11 Sept 2026, Cultureel Persbureau). The "Gouden AAP" left out as the scout said.
- **306 The Light Kite (Look for line in Sloterplas)**: made for the 4th Amsterdam Light Festival (2015–2016; nl.wikipedia list says 2016). Placement: the nl.wikipedia list says "since 2019", but Geheugen van West (Oct 2018) saw it past the Sloterparkbad on 10 Oct 2018. Written as "here since about 2018". Commons photos 2020.

## Merges

- **306, 311 into "Sloterplas: the lake dug for sand"** (`history.yaml`): a paragraph on polder level and the locks, the Varkensbaai and Sloterstrand, and the 1963 ice; Look for lines for the Sloterstrand, The Light Kite, the labyrinth and the Cramergracht lock; three links (now 6).
  - Corrected from the scout: the Cramergracht lock is **not** the only boat link. Geheugen van West 11462 lists three locks (Cramergracht and Heemstedestraat to city level, Akersluis to the Ringvaart). The "Van Tienhovengracht dead-ends at Plein '40-'45 because of it" claim had no source and is left out.
  - Corrected: the scout's "renamed Sloterstrand in May 2017" is not sourced. Rodi (Jun 2025) says the small beach was replaced in 2015 by a bigger raised beach, the Sloterstrand; Geheugen van West 2020 confirms "Sloterstrand (de vroegere Varkensbaai)". Text uses 2015.
  - Labyrinth: opened 11-11-2011 (Geheugen van West 15391); latest sign of it a komoot tip of Aug 2022. The scout's "seven-circuit" is not in a source: left out. Pin not needed (Look for line only).
  - 1963 ice walk: one memoir (GvW 22128); kept as a single sentence.
- **317 into "De 1800 Roeden"** (`geuzenveld.yaml`): settled without a `check`. Two sources agree the sheds were part of Sectorpark Sloten after the liberation: Geheugen van West 15892 (the Kruithuis sheds at Haarlemmerweg 711, now De 1800 Roeden; Sectorpark total in Nov 1945: 231 women, 1,022 men) and TracesOfWar ("Kamp Kruithuis Halfweg", about 500 political prisoners, same 1800-rods roof). Both figures given, attributed to the right level.
- **319 into "Lelylaan viaduct (Brug 705)"** (`sloterhof.yaml`): tram 17 from 9 Sep 1962, own track, three stairs-only stops. The scout's "first in the country" is wrong: nl.wikipedia (Tramlijn 17, Cornelis Lelylaan) says first *sneltram* in Amsterdam and second in the Netherlands after The Hague's line 11 (1927). Geheugen van West says "eerste van Nederland"; the text follows Wikipedia.
- **320 into "Former Pascal Lyceum (Broedplaats LELY)"** (`slotervaart.yaml`): paragraph on Joop van den Broek's lost facade work (finished 1968, birds, removed late 1970s to 1988, skip) and a Look for line for the empty frame. Set `check: Still there?` with note (both languages): the frame was on the wall in 2014 (Geheugen van West 21144); not confirmed since the LELY conversion. Which facade the frame is on is not stated in the source.
- **321 into "De Hoeksteen and ULO school (Zanstra)"** (`slotermeer.yaml`): settled from Delpher. Corrected the scout's date: the occupation was New Year's Eve **1971 into 1972** (NRC 21 Dec 1971: centre liquidated per 31 Dec 1971; NRC 3 Jan 1972: cleared 30 Dec, retaken New Year's night, police with batons at 1:45; a 7 Jan 1972 paper: about a hundred young people, street fight, windows broken incl. the minister's house; NRC 10 Jan 1972: reopening without the staff). The Geheugen van West memoir cites "Volkskrant 6 and 8 January 1971", which must be 1972. The staff member named in the papers is not named in the text. The Wikidata link was swapped for the NRC article (6-link cap); Wikidata stays in `sources`.
- **325 into "Westereindflat"** (`geuzenveld.yaml`): one sentence on "de hunkerbunker", attributed as a first buyer's recollection (Hans van Mourik, GvW 17099, moved in 30 Apr 1958; he says "I think" the nickname arose then).
- **326 into "Vrijheidscarillon"** (`geuzenveld.yaml`): the bell names were already there; added "(Flevoland, the twelfth, came only in 1986)" and the 2008 stallholder's line that it rang every half hour beside his stall but "was there first, so it can stay" (GvW 6164). The scout's "can play for hours on a Saturday" is not in either source: left out.
- **Pointer from "Rembrandtpark (western half)"** (`r3-slotervaart.yaml`) to 't Landje: one Look for line in both languages.

## Items left out

- 309: "mayor for 43 years until 2016" (no source found).
- 311: "only boat link" and the Van Tienhovengracht dead end (contradicted / unsourced); "renamed May 2017" (replaced by 2015); labyrinth "seven-circuit".
- 319: "first fast tram in the country" (contradicted).
- 326: "plays for hours on a Saturday" (not in the sources).

## Places without photos

- Fruittuin van Moerkerken (Cascoland): nothing on Commons.
- 't Landje: nothing on Commons (geosearch 120 m empty).
- (Westbeat has two CC0 Commons photos from 2023.)

## Other

- `geuzenveld.yaml` has three pre-existing spaced en dashes in link labels ("Wikipedia (nl) – Geuzenveld", "– Burgemeester De Vlugtlaan", "– Sape Kuiper"), not in places this slice was asked to touch; left as they are.

## Route idea

"Green and wild in Slotervaart": Rembrandtpark (western half), 't Landje, De KasKantine, Westbeat and the dancers' Super Space, Former Pascal Lyceum (Broedplaats LELY), Lelylaan viaduct (Brug 705).
