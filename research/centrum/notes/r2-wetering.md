# Notes: Centrum round 2, slice r2-wetering

Places file: `research/centrum/places/r2-wetering.yaml` (17 places, validate 0 errors, dash grep clean, every pin in borough Centrum, sub-neighbourhood De Weteringschans).

## Ledger

| S-id | Scout ids | Outcome |
|---|---|---|
| S-162 | AE-13, DE-40 | New place "The wall in the middle of the school, Weteringschans 263". **Amazing**, hidden-history. Plaque 2005 plus the Kinderverzet play monument of 2024. |
| S-163 | DE-35 | New place "Speeltuin U.J. Klaren, the first public playground, named after the wrong man". **Nice** (the scout proposed Amazing; the story is strong but the site is mid-rebuild and mostly new). |
| S-164 | AE-14, AE-15, AE-38 | New place "Walraven van Hall's snapped tree and the Navalny memorial, Frederiksplein". Nice. AE-38 (the painted acacia, 1971) is a Look for line with `check: Still there?`. Category hidden-history rather than street-art. |
| S-165 | AE-16 | New place "Krop's angry man for the Spieghelschool fire, Marnixstraat". Nice, hidden-history. |
| S-166 | AE-18 | New place "'Tegen alle stromen in', the Peter R. de Vries monument, Leidseplein". Nice, street-art. |
| S-167 | AE-19 | New place "Zeelandbank, a thank-you bench from Schouwen-Duiveland". Nice, street-art, `check: Location` (moved in the 2026 redesign). |
| S-168 | AE-35 | New place "Diversity in Bureaucracy, the ballerina in a storm of forms". Nice, street-art. |
| S-169 | AE-37 | New place "Ramses Shaffy's face over the longest escalator, Vijzelgracht metro". Nice, street-art. |
| S-170 | BE-08, CE-07 | New place "Max Euweplein, a chess square in the yard of a wartime prison". Nice, hidden-history. |
| S-171 | CE-06 | New place "Amsterdam Pipe Museum, the world's smoking in a canal house of 1670". Nice, odd-museums. |
| S-172 | CE-08, AE-36, BE-11, BE-12, DE-44 | New place "De Nederlandsche Bank, the gold vault anyone can walk into". Nice, civic. Vault (CE-08), Zadkine (AE-36), Paleis voor Volksvlijt (BE-12) and garden (DE-44) in the body; Frederiksplein 10 (BE-11) as a Look for line. |
| S-173 | DE-36, GR-05 | New place "The pick-your-own herb garden and the champion leaning poplar, Weteringplantsoen". Nice, green. Fusillade monument (Bolhuis 1954) as a Look for line. |
| S-174 | DE-37, DE-38 | New place "Blauw Jan's forty lizards, Kleine-Gartmanplantsoen". Nice, street-art. De Kring (DE-38) folded as a Look for line (club centenary is thin on its own). |
| S-175 | CE-25 | New place "Melkweg, the milk factory that became a 'cosmic centre'". Nice, civic. Default was ASK (A-list?); see decisions. |
| S-176 | AE-43 | New place "Stadsherstel's thank-you gable stones". Okay, curiosities. The Anneke Schat stone (Spiegelgracht 20a) left out: not a Stadsherstel stone. |
| S-177 | BE-34 | Folded as a Look for line into S-180 (Lange Leidsedwarsstraat 144-146 and the inn Het Land der Belofte): one house row with one fact. |
| S-178 | CE-01 | New place "Grote Wetering squat, evicted with Sinterklaas on the roof (gone)". Okay, hidden-history, `status: Gone`. Story verified in five Delpher papers of 2 and 3 Dec 1980. |
| S-179 | CE-02 | Folded as a Look for line into S-169 (robot car park, poem cabins, filled-in canal). |
| S-180 | DE-39 | New place "Leidse Dwarstuin, a walled garden in the tourist strip". Okay, green, `check: Location`. Second source found (Binnenkrant 80, 81, 83 plus 106). |
| S-181 | GR-06 | Folded as a Look for line into S-162 (pagoda trees of the Falckstraat, 1900 and 1930). |
| enrich | AE-17 | Enriched "De Bont & Leyten's building, later the city's bathhouse department" in `wetering-2.yaml` (see below). |

## Enrich edits

- **De Bont & Leyten's building, later the city's bathhouse department** (`research/centrum/places/wetering-2.yaml`): added a Look for line (EN) and Let op line (NL) for the 1947 memorial stone by Hans Krieks at nos. 15-17, placed by colleagues for twelve staff of the baths department who died "als slachtoffers van de Duitse terreur"; added link and source https://www.4en5mei.nl/oorlogsmonumenten/zoeken/1609 in both languages. Title unchanged. Validated 0 errors, dash grep clean.

## Conflicts and uncertainties

- **Spieghelschool reprisal toll** (S-165): nl.wikipedia says five political prisoners and 20 officials were shot; 4en5mei says 26 including five resistance men. The text gives only what the inscription says (five Dutchmen on this spot) and avoids a total.
- **Wilhelmina Catharinaschool closing year** (S-162): 1950 (Amsterdam op de kaart) vs 1951 (4en5mei). Not in the text.
- **Van Hall monument fund** (S-164): EUR 250,000 (Wikipedia) vs about 270,000 (4en5mei); written as "about a quarter of a million euros".
- **Leaning poplar species** (S-173): city register says Populus nigra; the CBH tree advice of 2024 says Populus x canadensis 'Serotina'. Text follows CBH (Canadian poplar).
- **Huis van Bewaring remains** (S-170): a De Balie draft says the cell block was demolished in 1988; NH Nieuws (2025) says prison walls are kept inside the new construction. Text says parts of the walls survive inside the new buildings, per NH Nieuws.
- **Sinterklaas at the Grote Wetering** (S-178): Wikipedia says the riot police "engaged" Sinterklaas; the Leeuwarder Courant (2 Dec 1980) says it was two officers' own idea. Text follows Delpher. Police numbers: 2,000 (Volkskrant) vs 1,500 (Leeuwarder Courant); written as "some two thousand by one count".
- **Mural title** (S-168): Wikipedia "Diversity in bureaucracy", Kunstwacht "Bureaucracy in Diversity". Title uses "Diversity in Bureaucracy" (artist's CV form per Kunstwacht).
- **Languages on the De Vries monument** (S-166): "40 most-spoken languages" (Wikipedia) vs 41 (NOS, NH Nieuws); written as "about forty".
- **Navalny memorial** (S-164): informal, could be removed; latest evidence NH Nieuws 16 Feb 2026. The student who maintains it is not named.
- **Painted acacia** (S-164): latest evidence 2018, before the DNB rebuild; flagged `check: Still there?`.
- **Zeelandbank position** (S-167): moved "deeper into the park" in 2026 (Binnenkrant 2.0); pin is approximate, `check: Location`.
- **Leidse Dwarstuin pin** (S-180): scout pin was about 100 m off; pin now at the PDOK address of no. 152; `check: Location`. The scout's "mural redone 2024-25" was not confirmed and is not in the text.
- **Playground naming** (S-163): Ons Amsterdam calls naming it after Klaren an injustice to Tetterode; Binnenkrant 2.0 (2026) calls Klaren "founder of the playground association". Both views are in the text.
- **Weteringpark**: the official new name for the redesigned Tweede Weteringplantsoen (VijzelCourant 2026); outlook attribute set on S-163 (playground building due about December 2026).

## Decisions for the user

- **Melkweg (S-175)** was ASK because it might be A-list. It is not in A-LIST.md and is not a top-list sight in its own right (the Leidseplein and Stadsschouwburg are). Written as Nice, pitched on the sugar refinery / milk factory / 1970 story. Drop if you consider it A-list.
- **Playground rank (S-163)**: written as Nice, not the scout's Amazing. Raise if you want two Amazings in this slice.

## Missing photos

- S-162 school wall (plaque, Bolink play monument, pagoda trees)
- S-165 Krop's Spieghelschool monument (only a 1946 Anefo photo of the makeshift memorial known: `Geïmproviseerd oorlogsmonument aan de Spieghelschool, Marnixstraat 404. Foto door Anefo (Van Haren Noman), Afbeeldingsbestand ANWK00282000004.jpg`, left out as it shows the predecessor)
- S-168 Diversity in Bureaucracy mural
- S-173 herb garden and leaning poplar
- S-176 Stadsherstel stones
- S-180 Leidse Dwarstuin
- Possible extra: `Hagedissen Kleine-Gartmanplantsoen.jpg` (Wikipedia infobox for Blauw Jan, May 2021) for S-174; `UJ Klaren speeltuin, Tweede Weteringplantsoen.JPG` for S-163 (pre-2025 state).

## Route ideas

- **War and money on the Frederiksplein side** (about 1.5 km): De Nederlandsche Bank and its vault (S-172), Van Hall's tree and the Navalny memorial (S-164), the school wall and the Falckstraat play monument (S-162), Stadsherstel's stone at Prinsengracht 754 (S-176), then along the Weteringschans to the herb garden and the fusillade monument (S-173).
- **Weteringcircuit**: the first public playground (S-163), the Zeelandbank (S-167), Ramses Shaffy down the escalator (S-169).
- **Leidseplein, the back side** (about 1 km): Grote Wetering site (S-178), Max Euweplein and the prison yard (S-170), Blauw Jan's lizards and De Kring (S-174), the ballerina mural (S-168), Peter R. de Vries (S-166), Krop's angry man (S-165), Melkweg (S-175), then the Pipe Museum (S-171) and the Leidse Dwarstuin (S-180).
- **Resistance thread** across the slice: Van Hall (S-164), Huis van Bewaring (S-170), Spieghelschool fire (S-165), fusillade on the Weteringschans (S-173), school wall (S-162), WSBZ stone (wetering-2).
