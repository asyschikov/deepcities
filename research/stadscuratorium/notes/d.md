# Stadscuratorium slice d: notes

## Item ledger

| # | Work | Outcome |
|---|------|---------|
| 32 | De 'kruisraketten' (Jansen / Van Dam) | New place: "The "cruise missiles" of Geerdinkhof", Nice |
| 33 | City Cells (Karin van Dam) | New place: "City Cells, the spiked seed pods of Hoekenrode", Nice |
| 34 | Atomos (Jamahl Richters) | New place: "Atomos, a hug made of rings in the Brasapark", Okay. It is a fixed sculpture (OSM node, Commons photo of July 2025). Mentioned in passing in live place `j1dd3utagdycmgtsoh00zdoi` "Iron Lady of the Bijlmer", but it stands about 1.1 km east of the Iron Lady, so it cannot be a Look-for there (see Conflicts) |
| 35 | Het geheim en het bewijs (Wendela Gevers Deynoot) | New place: "Het geheim en het bewijs, Anna Blaman's split face", Nice |
| 36 | Yellow Wings (Loes van der Horst, Mick Eekhout) | New place: "Yellow Wings, the Bijlmobiel's second life", Nice |
| 37 | De Gelaagde Stad (Datema/Kocken) | Dropped: not a physical object. It is a printed and online walking map ("wandelend herdenken in Amsterdam") of the city's 200 war memorials, made by Corine Datema on top of Gert Jan Kocken's *Depictions of Amsterdam 1940-1945*, issued as a Parool supplement on 1 May 2021 with 26 linked podcasts, for the Amsterdams 4 en 5 mei comité. Nothing on the ground to pin |
| 38 | A Pregnant Man's Dream (Ramon Martins) | New place: "A Pregnant Man's Dream, Ramon Martins on Haag en Veld", Nice |

No duplicates: searches of the live map (kruisraket, Geerdinkhof, City Cells, Hoekenrode, Atomos, Brasa, Richters, Blaman, Gevers, Yellow Wings, Bijlmobiel, Van der Horst, Gelaagde, Kocken, Pregnant, Ramon Martins, Haag en Veld) and of `research/*/places/` found none of these works told as a place. The "Near" places (Nelson Mandelapark, Kwaku, De Kandelaar, Bijlmermeer, Bijlmer Parktheater, Anton de Kom monument) do not mention them.

## Merge proposals

None. One small correction to a live place is proposed instead:

### Fix for `j1dd3utagdycmgtsoh00zdoi` "Iron Lady of the Bijlmer"

Its body says Atomos is "also in the park" and its Look-for list has "Atomos, the second sculpture unveiled the same day". Both works are in the Brasapark, but Atomos stands near the Langbroekdreef, about 1.1 km east of the Iron Lady (OSM nodes 12149643577 and 12149643587), so it is not visible from there. Suggest dropping the Look-for line (EN and NL) and, if wanted, changing the body sentence to:

- EN: "It was unveiled in the summer of 2024 together with Jamahl Richters's *Atomos*, which stands further east in the same park."
- NL: "Het werd in de zomer van 2024 onthuld, samen met *Atomos* van Jamahl Richters, dat verderop in hetzelfde park staat."

Once the new Atomos place is live, the two can cross-refer.

## Pins

All six are in Amsterdam, stadsdeel Zuidoost (areas.locate run on every pin).

- **Kruisraketten** 52.323208, 4.980737 (Bijlmer-Oost, Geerdinkhof/Kantershof): midpoint of the two OSM nodes tagged "zonder titel, Matthijs van Dam, Peter Jansen" (7788806368 at 52.323332, 4.980793 and 7788806402 at 52.323084, 4.980680), one per needle, 28 m apart. Buitenkunst gives 52.323132, 4.980631 and nl.wikipedia 52.323261, 4.980514; all within 20 m of the pin.
- **City Cells** 52.312860, 4.949250 (Bijlmer-Centrum, Amsterdamse Poort e.o.): from the city panorama of 1 September 2025 taken at 52.312760, 4.948942, which shows the clusters on the pillars of the passage about 25 m to the north-east. Buitenkunst gives 52.312818, 4.948903, which is the square in front of the passage rather than the work.
- **Atomos** 52.310334, 4.977505 (Bijlmer-Oost, K-buurt): OSM node 12149643577 ("Atomos", Jamahl Richters). Consistent with nl.wikipedia's list (Langbroekdreef). Not cross-checked on a panorama (the park is off-road).
- **Het geheim en het bewijs** 52.317262, 4.948745 (Bijlmer-Centrum, Venserpolder): OSM node 10783727604; buitenkunst 52.317294, 4.948740 and nl.wikipedia 52.317306, 4.948706 agree within 5 m; confirmed on the city panorama of 1 September 2025.
- **Yellow Wings** 52.323060, 4.963890 (Bijlmer-Oost, Ganzenhoef e.o.): OSM node 2671166705 and nl.wikipedia (52.323058, 4.963889) agree; buitenkunst 52.323046, 4.963811. The work stands in the middle of the pond.
- **A Pregnant Man's Dream** 52.310935, 4.957200 (Bijlmer-Centrum, H-buurt): middle of the east-facing end wall of the western Haag en Veld block, from the BAG pand polygon 0363100012129958 (end-wall corners about 52.310990, 4.957153 and 52.310885, 4.957249). The wall was identified on the city panorama of 1 September 2025 taken at 52.310941, 4.957542 in the car park between the two blocks: the Martins mural is due west, with the block running away to the south-west. Street Art Cities pins it at the address Hogevecht 3 (52.310078, 4.957757), which is a geocoded address, not the wall.

## Conflicts and uncertainties

- **Kruisraketten date.** The Stadscuratorium title gives 1984, but its text says Bijlmer residents asked Van Dam and Jansen "in 1991". nl.wikipedia, the Commons description and the list of statues in Zuidoost all give 1984; 1991 is the year of Van Dam's quote and an Artotheek Zuidoost exhibition about the work. Used 1984, gave no year for the request beyond that. Stadscuratorium also frames the request through the AFK; nl.wikipedia says the residents went to the artists directly. Left the AFK out.
- **Kruisraketten removal.** Per Het Parool (July 2026, via nl.wikipedia), when the embankment was dug away in the 1990s "buurtbewoners wilden het beeld teruggeplaatst zien", implying it was taken down and put back. The text says only that residents wanted it back in place. The Parool article itself is paywalled and was not read directly.
- **Haag en Veld: which wall.** R.U.A.'s archived page says Derlon painted "the east side" of Haag en Veld in 2012 and Martins "the west side", and lists Derlon at Haag en Veld 191. Address 191 is at the east end of the western block, which is where the panorama shows Martins's mural. Most likely "east side / west side" refers to the two blocks (Derlon on the eastern block, Martins on the western one) and the 191 address is loose. The pin follows what the 2025 panorama shows. Not flagged `check: Location`, since the panorama is clear, but worth a glance on site.
- **A Pregnant Man's Dream status.** Rimon Guimarães's mural on Hogevecht Oost, from the same R.U.A. round, was painted white in 2024 (nl.wikipedia, Commons photo of December 2025), with no reason given. Martins's mural was intact on the 1 September 2025 city panorama, and Street Art Cities records a sighting on 29 August 2026. No renovation plan for Haag en Veld found, so no Outlook set.
- **A Pregnant Man's Dream text sources.** The story of the title (empathy with his pregnant girlfriend, mural as giving birth, water) comes only from the Blocal travel blog, written by a street-art guide; R.U.A.'s own text is English. No Dutch source covers this beyond the Stadscuratorium page, so the Dutch text was written from these English sources; noted per the brief. Blocal also says the tallest central figure is "an African queen"; left out as uncheckable.
- **Atomos.** Single substantive source (the Stadscuratorium page, which reproduces municipal text). The unveiling year 2024 comes from the Stadscuratorium date and the nl.wikipedia list; the 6 June date from Stadscuratorium. "Brasa" is glossed only as "a hug", as the source does; the Sranan origin of the word is not stated in any source read, so it is not mentioned. Ranked Okay.
- **Het geheim en het bewijs.** nl.wikipedia says it won the "Amsterdamse Straatkunstprijs"; no second source found, left out. Last dated photos on Commons are from 2020; presence confirmed on the city panorama of 1 September 2025.
- **City Cells year.** buitenkunst has no completion year; Stadscuratorium and nl.wikipedia both give 2015.
- **Yellow Wings.** Bijlmobiel conceived March 1974 (buitenkunst; Van der Horst's Wikipedia article says "made in 1974"), built 1976 (Stadscuratorium, buitenkunst). Used 1976. The tightrope anecdote from her Wikipedia biography was left out as off-topic.
- **Brasapark sports fields.** NH Nieuws reports a plan for sports fields in the Brasapark despite residents' objections; not checked whether it affects Atomos, so no Outlook set.

## Missing photos

- **A Pregnant Man's Dream**: no photo of this mural on Wikimedia Commons (the Commons "Mural Haag en Veld" photo of 2022 shows Derlon's wall, not this one). Candidates for the user: the R.U.A. site's photos (licence unknown) or a new photo on site.
- All other places have 1 to 3 Commons photos.
