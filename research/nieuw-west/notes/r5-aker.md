# Nieuw-West round D (De Aker, Sloten, Nieuw-Sloten): notes

2 new places in `places/r5-aker.yaml`; 6 merges into `places/r2-sloten.yaml`, `places/r4-south.yaml`, `places/green.yaml` and `places/sloten.yaml` (titles unchanged). All five files validate with 0 errors. New pins point-checked with `scripts/areas.py`: both in borough Nieuw-West, gebied De Aker, Sloten, Nieuw-Sloten.

## New places

| Scout | Title | Category | Rank | Flags / outlook | Pin |
|---|---|---|---|---|---|
| 401 | The Valutabuurt: streets named after money that vanished | curiosities | Okay | `check: Still there?` (Boezem's discs, latest photo Sep 2018) | the Kubuspoort, Kunstwacht 618 (De Aker) |
| 402 | Velodrome Amsterdam, Sportpark Sloten | civic | Okay | `check: Still there?` (Ongenae's Betonplastiek, latest photos Jul 2018); `outlook: Major change ahead` (2026 sports-park plan, no dates) | the hall (Sloten/Nieuw-Sloten) |

Ranks not yet added to `scripts/data/amsterdam-c-list-ranks.json` (outside this round's files): 401 Okay, 402 Okay.

- 401 pin: moved from the Tectona Grandis discs (scout) to the Kubuspoort, 35 m away, because the gate is confirmed on Google Street View (Nov 2022 and May 2026) and the discs only by Commons photos of 2 Sep 2018.
- 401 John Blake's light box (and his coloured ceiling panels) in the Dukaat walkway: no evidence after the 2013 Kunstwacht screenshot, so left out, as the brief asked.
- 401 Zorro "hydro power plant" (nl.wikipedia): no second source, left out.
- 401 "most of them gone": the euro replaced the ECU (1999) and in 2002 the guilder, mark, French and Belgian franc, lira, peseta, drachma, escudo and schilling; litas 2015. Pound, Swiss franc (Frankenstraat names France, Belgium, Luxembourg and Switzerland), zloty, rouble, forint, the Scandinavian crowns survive. The text says so.
- 401 naming in March 1997: nl.wikipedia Ecuplein (1997) and Lirabrug (March 1997); the register dates are administrative 2014 entries.
- 402 Six Days: settled. nl.wikipedia "Zesdaagse van Amsterdam": yearly 2001 to 2014, none in 2015 (no sponsor), one last edition in 2016 by Madison Sports Group. "Sportpark Sloten" (2001-2014) is the run without 2016. Text says "until 2016".
- 402 circuit length: not settled (2.5 km nl.wikipedia, "five kilometres" the city's project leader in 2026). Left out of the text.
- 402 the NH Nieuws article does not mention the wood type, the lifting section or the LED pacer; those come from nl.wikipedia. The 500 souvenir planks come from NH Nieuws. Opening date 27 May 1972 and alderman Harry Verhey from the Anefo photo (Nationaal Archief, CC0).
- 402 visiting: no fixed public sessions found; text says the public gets in for races and events.
- 402 category: `civic` (a city-run sports hall); the user may prefer `curiosities`.

## Merges

- 403 "Verzetsheldenbuurt memorial, Joop Woortmanplein" (r2-sloten.yaml): paragraph and Look for line, EN and NL, on the anti-dictatorship street names to the west (Gandhi, Jara, Letelier, Romero, García Villas, Mondlane, First, Bonhoeffer, Anielewicz, Seifert, Baldwin) and the five bridges (Wijsmuller, Brandsma, Welter, Meelhuysen, Moeder Alacoque), all from the city street-name register. Actual street names: Jarasingel, Letelierstraat, Romerostraat, Marianellastraat, Mondlanestraat, Firststraat, Bonhoeffersingel, Anielewiczsingel, Seifertplein, Baldwinstraat. The Welterbrug spans the Rudi Bloemgartensingel, not the Ernst Cahnsingel, so the Look for line names both canals. Link to nl.wikipedia Truus Wijsmullerbrug added (6 links).
- 404 "Noorderakerweg and Zuiderakerweg, the polder roads De Aker kept" (r4-south.yaml): paragraph and Look for line on Noorderakerweg 21 and 23 and Jeroen Wielaert's novella; the events are told as what the novella tells, and both languages say it is fact filled out with the author's imagination. "Crashed in the polder" (scout) is not in the source; dropped.
- 405 "Molen van Sloten" (green.yaml):
  - **Rembrandt op zolder is gone.** The mill's own Facebook post of March 2025 (during the refit): "De audiovisuele Rembrandt voorstelling boven op zolder maakt plaats voor interessante items die bij het molenaarsleven van vroeger passen. De zolder is inmiddels leeggehaald." Summary and body fixed in both languages (no more wax Rembrandts); the photo `Rembrandt in the Attic.jpg` removed. The mill's site still has an old page (2022) about the Rembrandtzolder and its technical page (2020) lists it; both predate the refit.
  - glass ceiling (March 2025) and renewed display; the screw under the mill is a *vijzel* (Archimedean screw), written as such, not a scoop wheel as in the scout.
  - Stadsschouwburg handrails (11 Sep 2026) and Juliana's opening on 11 Sep 1991.
  - `outlook: Major change ahead` with a paragraph on Midvast's sketch for about 140 homes (July 2026); no `outlook_when` (owners say it can take years).
- 406 "De Oeverlanden" (green.yaml): the ferry line now says mid-April to mid-October (the old text said weekends, April to October, not in the sources) and that its future after 2026 is uncertain. `outlook: Under threat`, `outlook_when: from the 2027 season`. A search found no news after 11 Nov 2026 on a budget motion. If the ferry stops, drop the Look for line and clear the outlook.
- 407 "IBM headquarters, Johan Huizingalaan" (sloten.yaml): Look for line on the economists' street names and the Karl Marxpad. The Schinkelkwartier caveat is left out of the text (no source that these streets will change).
- 408 "Sloterweg village houses" (sloten.yaml): Look for line on the Huizinga bakery window at no. 1236 (opposite Osdorperweg 1). No invitation to send photos.

Side note, not changed: the Dutch body of "De Oeverlanden" and "Molen van Sloten" (paragraphs 1 and 2) reads close to nl.wikipedia and oeverlanden.nl wording; a later pass could rewrite them under "write, don't paste".

## Photos

- 401: Kubuspoort (Sep 2017, public domain), Zorro tower (Sep 2020), one Tectona disc (Sep 2018).
- 402: the track (Nov 2015, Branko Collin, CC BY 4.0, before the 2021 resurfacing), the 1972 opening (Anefo, CC0), the Betonplastiek (Jul 2018).
- No new place is without photos. Merges added no photos; one removed from "Molen van Sloten" (see above).

## Browser

One BrowserOS tab used (Google search, Facebook, Street View), closed. Tripadvisor blocked by a bot check.
