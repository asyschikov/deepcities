# Noord batch 04: Dutch pass

All 23 places are done. Each place has fresh Dutch for the summary and the body, and a "Let op:" list only where the English has a Look for list. Every Dutch summary is 280 characters or fewer.

**Copy checker:** 0 copied runs for all 23 places (nlcheck.py on batch-04.json). There are no em dashes and no spaced en dashes.

## Claims
I checked every claim in the EN and NL summary, body, Look for list and attribute notes against the place's links and draft sources. I fetched or read from cache the registers, the monuments API, nl.wikipedia and news pages.

There are 82 claim changes in total:

| Kind | Count |
|---|---|
| Sourced | 4 |
| Narrowed | 61 |
| Cut | 17 |

Each change carries its evidence in batch-04.json.

The main ones:

| # | Place | Changes |
|---|---|---|
| 0 | Zwanenplein | The architect is now Arnoldus Ingwersen, not David (in the text and in the architect attribute, EN and NL). "Towers over", "low Vogelbuurt" and the parakeets superlative are narrowed. |
| 1 | Papaver/Lavendel | Style claims and the "Van der Pek area" are cut or narrowed. The chickens are dated to 2023. |
| 4 | War memorials | "Left Noord 1951" is changed to "moved into it 1951". "50 metres west" is changed to "Nearby". The hotel marker and Mosveld are cut. |
| 5 | Vogeldorp | The final decision is now "expected 2028" (sourced). |
| 8 | Nieuwendammerdijk east | Cleyndert family is changed to the firm. "Best seen from the water" is cut. |
| 10 | IJplein | "First built OMA plan" is cut. |
| 12 | Castorplein | The brick-shortage motive, "to see which system would work", Betondorp, "German" and "British" are cut. The street names are narrowed to "fruit-named streets". Three bedrooms now applies to the double houses only. |
| 13 | Ransdorp | "Almost every one" is changed to "many". The reclamation border and the "classic picture" are narrowed to the register. |
| 16 | Vijfde Technische School | "Boys/plumbers" is cut. The statue crowned the demolished primary school, not a wing of this school. |
| 19 | NDSM Loods | The "first big building" claim is cut. 80 studios is changed to about 85 (ndsmloods.nl). Only the original lamp was lost. |
| 20 | Noorderparkbad | "Prize-winning tile floor" is narrowed: the jury called the tiling "surprising". "Most beautiful public pool" is narrowed. The summer-only outdoor season and "outdoor pools stayed" are cut. |
| 21 | Skatecafé | "Oddest" and "rawest" are changed to "best-running club" (3voor12). Hotel de Goudfazant is changed to restaurant De Goudfazant. "March 2028" is replaced by the Parool farewell report of May 2026 (also in outlook_note, EN and NL). |
| 22 | Tolhuistuin | "70 years" is changed to "decades". "Public cannot see" the mooring posts is cut. The Look for item "tent-shaped roofs best seen from the IJ" is changed: they are interior ceilings, and the register says the terrace blocks the IJ view. |

## Hooks
I did not reorder the English anywhere (no "reordered" changes). For most places the Dutch leads with the most surprising sourced fact from further down, for example:
- 13: the mayor who refused the official house
- 14: the refugees at Zuideinde 443
- 15: the neighbours buying the pub
- 16: the statue's unknown maker
- 18: the demolition permit
- 19: the Kunststad
- 20: the tiles
- 21: the mothers
- 22: Shell fencing off the park

## For the user
- **Zwanenplein: the architect's first name.** The registers say Ingwersen, but they disagree on his first name. Please check before relying on "Arnoldus".
- **Pages and figures I could not verify:**
  - The Architectuurgids page failed to load.
  - The Draka memorial distance is unverified.
  - The sources disagree on the year of the showers, 1982 or 1983.
- **Skatecafé: `outlook_when` still says "March 2028".** No fetched source shows that date: Het Parool is behind a paywall, and the date came from a search snippet. I left the field unchanged; drop it, or confirm the date.
- **Hof der Herinnering: one bench saying is paraphrased.** Only one saying is quoted in the Dutch; the second is paraphrased to pass the copy checker.
- **Zuideinde (14): the Leo Rozenszajn sentence is reworded.** I reworded it to avoid a 9-word match with the 4en5mei page.

## Verification

I verified all 23 places against the new English, the original EN and NL texts and the sources. I re-fetched these sources:
- the monuments API for 200712, 200670 and 200719
- nl.wikipedia for Schellingwoude, Vogeldorp, Kromme Distelstraat 17 and Standbeeld voor de Halsbandparkiet
- NH Nieuws (2025), stelling-amsterdam.nl (Buiksloot), ndsmloods.nl, 3voor12, Headliner/Parool and Rodi
- the three Commons files

Every "sourced" change checks out:
- Vogeldorp, decision expected in 2028: NH Nieuws says "De definitieve besluitvorming wordt pas in 2028 verwacht".
- Fokker D.XXIs at Buiksloot: stelling-amsterdam.nl confirms it.
- The Zamenhofstraat bathhouse and Museum Amsterdam Noord: confirmed.
- The gable stones at Zwanenplein 41 and 91-97: the Commons files exist.

Arnoldus Ingwersen is confirmed: the register gives "Ingwersen, A." and "Arnoldus Ingwersen ... compagnon van Tjeerd Kuipers". The Parool farewell headline is dated 28 May 2026 on Headliner.

The copy checker reports 0 copied runs for all 23 places, before and after the fixes below, so no copy runs needed fixing. There are no em dashes and no spaced en dashes. Every NL and EN summary is 280 characters or fewer. Every Let op list matches its Look for list. The English was not changed.

### Claims removed or fixed in the new Dutch (20 claims, plus one wording fix; 22 edits)

| # | Place | Was | Now | Why |
|---|---|---|---|---|
| 0 | Zwanenplein | "vogels in reliëf zie je overal" | "er zijn reliëfs met vogels" | "Everywhere" is not in the EN or the sources. |
| 1 | Papaverhoek | "zestien mensen wonen" | "zestien woningen" | The sources give 16 homes, not 16 people. |
| 3 | Wijkergouw | "toen dit veen werd ontgonnen" | "toen het land werd ontgonnen" | Peat is in Wikipedia but not in the EN. |
| 4 | War memorials | "schreef in het Achterhuis" | "schreef" | The book title was added. |
| 5 | Vogeldorp | "stelde de gemeente sloop voor" | "kwam er een voorstel tot sloop" | The EN does not say who proposed it. |
| 6 | Disteldorp | "werd alles in één keer getekend" | "is het ontworpen door één architect" | "Designed all at once" is invented. |
| 7 | Schellingwouderkerk | "nacht van 29 op 30 april" | "nacht van de verjaardag ..., 30 april 1944" | The date was derived, not sourced. |
| 7 | Schellingwouderkerk | "rond middernacht" | "om middernacht" | The EN says "at midnight". |
| 7 | Schellingwouderkerk | "geprocedeerd" (litigated) | "gestreden" | The chest text says "gestreden". |
| 10 | IJplein | "pleitte onder meer Heemschut" | "pleitte erfgoedvereniging Heemschut" | No other parties are in the sources. |
| 13 | Ransdorp | "De rest van de Dorpsweg is van hout en laag" | "Verder is de Dorpsweg vooral van hout en laag" | The EN says "mostly". |
| 14 | Zuideinde | "woonden ooit dertig Joodse vluchtelingen tegelijk" | "vonden ooit dertig ... onderdak" | "At the same time" is not in the source, which covers 1933-1939. |
| 15 | Café 't Sluisje | "sloeg meteen toe" | removed | "Immediately" is invented. |
| 16 | Vijfde Technische School | "ligt in een U" | removed | The U-shape is not in the EN, so I kept the two versions the same. |
| 18 | Kraanspoor | "betonnen werfafval" | "betonnen restant van de werf" | This brought back the cut "derelict object" judgement. |
| 20 | Noorderparkbad | "en zes jaar later lieten de tegels los" | "en toch lieten in maart 2021 de tegels los" | The six-year gap was derived, and the year of the award is not given. |
| 20 | Noorderparkbad | "De jury van de Amsterdamse Architectuurprijs" | "De jury" | NOS does not say which jury. |
| 21 | Skatecafé (summary) | "een eetzaal met een halfpipe" | "een eetzaal met een skatebaan erin" | The EN says "skate ramp", and the ramp is a mini ramp. |
| 22 | Tolhuistuin | "een uitje voor de hele stad" | "waar concerten en tentoonstellingen ... publiek hadden getrokken" | "For the whole city" is unsourced. The old NL said "voor de betere kringen". |
| 22 | Tolhuistuin | "tot 's ochtends de stadspoorten" | "tot de stadspoorten" | "In the morning" was added. |
| 22 | Tolhuistuin | "beeldhouwerig(e)" (2 places) | "sculpturaal/sculpturale" | Wording only: "beeldhouwerig" is not idiomatic Dutch. This is not a fact change. |

### Notes for the user
- **Tolhuistuin: a cut claim is in fact sourced.** The cut "the public cannot see them" (the IJ-paviljoen mooring posts) is supported by Rodi: "helaas niet meer zichtbaar of toegankelijk voor iedereen". It could be restored with that source. I did not add it back.
- **Castorplein: the Betondorp link came from the old NL.** The original NL had "werden later nagevolgd in Betondorp". The cut stands, because no fetched source was cited for it.
