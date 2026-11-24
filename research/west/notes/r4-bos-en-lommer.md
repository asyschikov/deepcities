# West round 4, slice bos-en-lommer

Draft: `research/west/places/r4-bos-en-lommer.yaml` (18 entries, validates clean). Edited: "Erasmuspark" in `bos-en-lommer.yaml` (Look for lines in EN and NL, sources).

## New places (11)

| # | Title | Rank | Category | Flags |
|---|---|---|---|---|
| 409 | Bible stories on the Kolenkit doorways | Nice | curiosities | |
| 411 | Oude en jonge arbeider (Han Wezelaar) | Okay | curiosities | |
| 412 | Wederopbouw art of the Sara Burgerhartstraat | Okay | curiosities | |
| 414 | Joop Westerweel's plaque, Blauw-Wit sports hall | Nice | hidden-history | check: Still there? (latest description 2009, which entrance) |
| 419 | Anna van Saksenbrug: abutments for a tram that never came | Okay | infrastructure | |
| 421 | Station De Vlugtlaan ghost platforms | Okay | infrastructure | check: Still there? (platform stubs, visibility) |
| 430 | I can change the world with my two hands (neighbourhood garden) | Nice | green | |
| 431 | Bos en Lommerplein, the evacuated square | Nice | hidden-history | |
| 432 | WOW Amsterdam: technical school, asylum centre, art house | Nice | civic | |
| 433 | Laan van Spartaan: a neighbourhood built round a football club | Okay | housing | check: Still there? (Ittmann's Hordeloopster) |
| 434 | Augustanakerk, a Lutheran church turned hofje | Okay | religious | check: Still there? (is the stiltetuin open) |

412's third element (Reijers and Braat's tree with birds, Gulden Winckelstraat 1) is 400 m away; it went in as a Look for line in 431.

## Merges

- 420 farm gable stones -> "Koningsvrouwen van Landlust" (both stones are on the Versteeg complex).
- Erasmuspark (edited in bos-en-lommer.yaml): Hettema bronze (moved from the Gulden Winckelplantsoen in 2001), Van Boven's dog on the Erasmusgracht quay (not moved, contrary to the scout), Wachterliedplantsoen, Wil de Graaffbrug. Île Flottante left out (removed). Scent garden left out (not confirmed).
- Opstandingskerk (Kolenkit): Blaisse's Waterbuffel on the Ernest Staesplein.
- Former ULO school, Erik de Roodestraat 18: Bolhuis's Stoere Bloemen (2023), with photo.
- Keesmanblokken and Gibraltarbadje: play objects named Zeeleeuw en Monster.
- Pniëlkerk: glass artist corrected from "Johan" to Joop van den Broek; one of the two windows survives (De Opstanding, 1954, in the porch). The scout's Kunstwacht source does not exist; wall-art register record 38 used.
- Kolenkit (Nannoplein): Cascoland, the king's 2018 visit to the BuurtMoesBinnenTuin, De Houten Leeuw (2024, first CLT social housing in Amsterdam). Henhouses left out (not confirmed).
- Hendrick de Keyserschool: outlook Major change ahead (gym to go for about 120 homes, Entreegebied Gulden Winckel; school stays a business building until 2035). "Beton en Lommer" protest left out (not confirmed).

## Full entries written for targets with no draft (7)

All seven were live-only, copied from `scripts/data/amsterdam-west-live-only-2026-11-24.json` with the same titles and the merge added. The Dutch for each merge was written fresh: Opstandingskerk (Kolenkit); Former ULO school, Erik de Roodestraat 18; Keesmanblokken and Gibraltarbadje; Pniëlkerk ('het Theelichtje'); Kolenkit, "worst neighbourhood in the Netherlands" (Nannoplein); Hendrick de Keyserschool; Koningsvrouwen van Landlust.

Fixes along the way:
- Kolenkit: removed the spaced en dash from the EN summary. The live Parool and AT5 links were dropped to keep six links; both URLs are in sources. The broken AT5 label goes with them.
- Keesmanblokken: made the link labels distinct.

Anything in `research/west/rewrite/in` touching these seven titles may conflict with these full entries.

## Left out

- 410 N.L.I. (Vaissier): the register puts it on the Cornelis Troostplein, which is in Zuid. Kunstwacht pins it on the Leeuwendalersweg, but no OSM node or photo confirms it, and one figure is already lost. Needs a decision or an on-site check.
- Westermoskee merge: the target is in `baarsjes.yaml` (oud-west slice), not this slice.

## No photos

414 (Westerweel plaque), 430 (neighbourhood garden), 431 (Bos en Lommerplein).

## Other

- `bos-en-lommer.yaml` still has older spaced en dashes in other entries (lines 145, 149, 153, 183, 190, 194, 219, 235, 237, 268). They are not part of this round.
- Ranks for live-only targets are unchanged; `scripts/data/amsterdam-c-list-ranks.json` was not touched.
- 421 pin sits on the West/Nieuw-West line by metro De Vlugtlaan; not point-checked.

## Fact check

Scope: all 11 new places in full, plus the merged or rewritten text in the 7 live-only targets and the Erasmuspark additions in `bos-en-lommer.yaml`. Text copied unchanged from the live site was not rechecked. Sources were fetched fresh with curl: nl.wikipedia API, Kunstwacht API (api-v3.kunstwacht.nl), the WANDKUNST register (maps.amsterdam.nl open_geodata), the Gebouwd in Amsterdam API, the Stadsarchief/Memorix records, Commons and the cited web pages. Both files validate with 0 errors. The NL was checked for 8-word runs from the Dutch sources; only the plaque quote and street names match. Both files contain no em dashes.

Changes (EN and NL changed together unless the line says otherwise):

**Bible stories on the Kolenkit doorways**
- "in what was then a largely Catholic neighbourhood" -> "in what was originally a Catholic neighbourhood" (WANDKUNST 109: "van oorsprong Rooms-katholieke buurt"). Narrowed.
- "restored the fronts, capitals included" -> "restored the front facades" (Gebouwd in 95 does not mention the capitals). Narrowed.
- "The two blocks came through the years when much of the Kolenkit was pulled down": kept, now sourced. nl.wikipedia Kolenkitbuurt was added to links and sources (large part demolished, some buildings renovated).
- Look for "Eve and the Creation on the corner at Leeuwendalersweg 31" -> "at Leeuwendalersweg 31" (the register gives no corner). Narrowed.
- Look for "Mary chapel ... in the shared garden behind Leeuwendalersweg 31" -> "at Leeuwendalersweg 31" (Commons gives the address only). Narrowed.

**Oude en jonge arbeider**
- "an old one with a riveting hammer and a young one with his coat" (summary and body) -> "one with a riveting hammer and the other with his coat" (neither nl.wikipedia nor Kunstwacht 2138 says which man carries what). Narrowed.
- "from Dutch sculptors" -> "from various artists" (nl.wikipedia: "bij diverse kunstenaars"). Narrowed.
- "Het Parool noted at the time ... stocky heroic labourers" -> "Het Parool noted ... stocky, tough labourers" (nl.wikipedia gives no date; "gedrongen arbeiders (stoere werker)"). Narrowed.

**Wederopbouw art of the Sara Burgerhartstraat**
- "except that the association used the early 'percentage for art' to say something about itself" -> "except for the art set into its front" (no source mentions the percentage rule). Narrowed.
- "Reicher, a German-born sculptor" -> "a German-Dutch sculptor trained in Berlin" (WANDKUNST 111: "Duits-Nederlandse beeldhouwer", Hochschule in Berlin). Narrowed.

**Joop Westerweel's plaque**
- "one of the best-known Dutch resisters" -> "a resistance leader who won international recognition" (4en5mei 3286: "verwierf internationale erkenning"; nl.wikipedia: "belangrijke leider"). Narrowed.
- "next to the Erasmuspark, and can be seen from outside" -> cut (not in any source).

**Anna van Saksenbrug**
- "where its fenced-off track cut the new district in two" -> "where its fenced-off track was, in the city's eyes, a big obstacle" (nl.wikipedia Anna van Saksenbrug). Narrowed.
- Look for "best seen from the Westelijk Marktkanaal quay" -> cut (no source for the viewpoint).

**Station De Vlugtlaan**
- Summary "For fourteen years intercity trains to Groningen and Berlin connections stopped at a full-size station here" -> "For fourteen years a full-size station stood here, where for a while intercity trains from Groningen and Leeuwarden stopped" (nl.wikipedia: the intercity stops ended around 1996/97, not 2000). Narrowed.

**I can change the world with my two hands**
- "dry paddling pool" / "empty children's pool" -> "paddling pool" / "children's pool" (amsterdamalternative: "a children's swimming pool"). Narrowed.
- "a compost scheme now copied across the city" (NL "dat de hele stad overneemt") -> "now used at ten other spots in the city" (opentuinenwest: "10 andere buurtgroen locaties"). Narrowed.
- "Natascha Hagenbeek" -> "Natascha". The surname came only from the scout; no fetched source has it, including the garden's own site. Cut.

**Bos en Lommerplein**
- "emptied overnight" (NL "halsoverkop") -> "emptied at short notice" ("met spoed" / "op stel en sprong"). Narrowed.
- "and the plan fell apart. Around 2000 the borough started over" -> "and the design was changed, leaving the square without much coherence. Around 2000 big rebuilding plans started" (nl.wikipedia). Narrowed.
- "the owners of all 96 flats" -> "the residents of all 96 owner-occupied flats" (Binnenlands Bestuur: "bewoners van alle 96 koopappartementen"). Narrowed.
- "the chairman of the owners' association" -> "a former chairman" (Binnenlands Bestuur: the quote is from Douwe van Riet, Tunc's predecessor). Corrected.
- "Today there is nothing to see ..." -> "By 2008 there was nothing to see of it, except for a trained eye ..." (the source is from 2008). Narrowed.
- "The daily market, once a fixture here, was closed down in 2023" -> "The market, held almost daily on the square until 2020, was abolished in 2023" (nl.wikipedia). Narrowed.

**WOW Amsterdam**
- "In 2013 and 2014" and built "converted 2013-2014" -> "In 2013" and "converted 2013" (Gebouwd in 1081 gives 2013; no source for 2014). Narrowed.
- "The hill in front is the neighbourhood's sculpture garden" -> "Two sculptures stand on the hill in front". Narrowed.
- "a joke about a country without big rocks and an invitation to sit down" -> "a playful reflection on the absence of such big rocks in the Netherlands and a place for neighbours to meet" (Kunstwacht 2685). Narrowed.
- "The hostel and its lobby are open to anyone; the studios are private." -> cut (not in any source).

**Laan van Spartaan**
- "DP6's sports hall block next to it" -> "on the corner of the Jan van Galenstraat and the Rinus Michelslaan" (Gebouwd in 1014; no source says it is next to the Studioninedots tower). Narrowed.
- "cycling coach Peter Post" -> "cycling team manager" (De Westkrant: "ploegleider"). EN only. Narrowed.

**Augustanakerk**
- "meeting place for the neighbourhood" -> "for the community" (Gebouwd in 1417: "ontmoetingsruimte voor de gemeenschap"). Narrowed.
- "Part of the building costs, about 600,000 guilders, came from Lutherans in the US" -> "The building costs of about 600,000 guilders were partly paid by Lutherans in the United States" (nl.wikipedia; the old wording read as though 600,000 was the American share). Corrected.
- "Piet Kok, artist and Lutheran minister" -> "artist and minister" (WANDKUNST 72: "dominee"). Narrowed.
- Look for "the Wachterliedplantsoen and the Erasmuspark across the water" -> "the Wachterliedplantsoen next door and the Erasmuspark across the water" (nl.wikipedia: the church stands by the plantsoen, opposite the park). Corrected.

**Opstandingskerk (merge)**
- "made another herd of three for Buitenveldert" -> "also made three water buffaloes that stand in Buitenveldert" (Kunstwacht 1874). Narrowed.

**Keesmanblokken and Gibraltarbadje (merge)**
- "there to be climbed on" (NL "om op te klimmen") -> "with a little slide" (nl.wikipedia Gibraltarbadje: "octopus (met glijbaantje)"). Narrowed.

**Pniëlkerk (merge, NL only)**
- "Aan de buitenkant is niets veranderd" -> "De buitenkant bleef behouden" (the live text says "intact gelaten en waar nodig hersteld"; the EN already said "The exterior was kept"). Narrowed.

**Koningsvrouwen van Landlust (merge)**
- "The modern rows still remember what was here before. ... this was farmland of the municipality of Sloten, and two stone reliefs ... show it: a carter with his heavy horse" -> "this land belonged to the municipality of Sloten, and a path ran here through market gardens. Two stone reliefs ... show working animals: a draught horse with its driver" (nl.wikipedia Willem de Zwijgerlaan: Slatuinenpad "dwars door warmoezenierstuinen"; Memorix: "trekpaard met menner"). The link between the stones and the farmland past was cut.
- "Their maker is not recorded" -> "The city archive's photos of them do not name a maker" (Memorix records 708dcc66, 708dca04). Narrowed.

**Erasmuspark (bos-en-lommer.yaml)**
- Wachterliedplantsoen "named after the songs of medieval night watchmen" -> "after the wachterlied, a late-medieval love song in which a watchman warns a pair of lovers" (nl.wikipedia Wachterliedplantsoen). Corrected.
- "Wil de Graaffbrug (1970)" -> "(1970, rebuilt about 2000)" (nl.wikipedia Wil de Graaffbrug; the 1970 bridge was replaced). Narrowed.
- "a communist house painter" -> "a communist, a painter by trade" (nl.wikipedia: "van huis uit schilder"). Narrowed.

Reworded to avoid source runs (NL only, facts unchanged): Westerweel ("De plaquette hangt bij de ingang van de"), Anna van Saksenbrug (Beltbrug sentence), De Vlugtlaan ("Bij de start van de"), Bos en Lommerplein (evacuation sentence, Binnenlands Bestuur), WOW (Chedi/Van Ruyven), Laan van Spartaan (VVA/Spartaan return; DP6 corner).

Checked and left as written: all other claims, including Reijers, Teeuwisse and Meefout, Het Oosten's 40th anniversary, 11-12-1950 and the Top grade (WANDKUNST 109/112/114/133), NVV and 2 May 1960, Reicher's teaching and Schaller's Van Gogh (WANDKUNST 111/140), the Westerweel facts (4en5mei, nl.wikipedia), the club still at Joos Banckersweg 18A (akcblauwwit.nl/contact, November 2026 home matches), the tram plan, 80,000 guilders and the 2006 naming, the De Vlugtlaan facts, the garden facts, the Bos en Lommerplein inquiry, 400 points, 25 million and the 40,000 euro tax claim, the WOW conversion and both sculptures, the Laan van Spartaan figures, the Augustanahof facts, Stoere Bloemen, Waterbuffel, Hettema and Van Boven, Joop van den Broek's windows (WANDKUNST 38), Cascoland, the king's 2018 visit, De Houten Leeuw, and the Gulden Winckel figures and dates (Stadgenoot, De Westkrant).
