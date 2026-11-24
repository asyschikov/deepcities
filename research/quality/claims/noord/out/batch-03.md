# Claims check: Noord, batch 03

22 places checked; 18 changed, 4 unchanged (Noorderpark station; Norderney, Radio Veronica's ship; Republica, Papaverhof; Timber towers of Buiksloterham).

## Counts

- Claims checked: about 500 (EN summary, body, Look for lines and attributes, by sentence; the NL text was checked against the same claims)
- Sourced: 4 (text unchanged, source added)
- Narrowed: 35
- Cut: 4
- 80 change rows in all, counting EN and NL separately
- Copied Dutch: `copied.runs` was empty for all 22 places; nlcheck.py on the out file gives 0 for every changed place, and no new Dutch sentence shares an 8-word run with any source fetched in this pass.

## Changes (EN; the NL text changed the same way)

- Molenwijk: summary "often called the little Bijlmer, with the oddest art in Noord" became "known as the little Bijlmer, with some very odd art" (narrowed: Kunstwacht 369 says "Bijlmer in het klein" with no "often"; the superlative has no source)
- Molenwijk: "so popular with thieves that none survive" became "thieves liked them, and a renovation ... saw off the rest" (narrowed, nl.wikipedia Molenwijk)
- Molenwijk: "self-described bored housewife fed up with grey, identical playgrounds" became a quote of the Kunstroute's words, plus her own "almost all look the same" (narrowed, Kunstwacht 371)
- Molenwijk: Kasimir "disowned" the work became his quote "this is not my work any more" after the red-orange paint (narrowed, Kunstwacht 343; he still identifies with the concept)
- Molenwijk: check_note "July 2021 ... mural not seen since 2019" became "summer 2021 ... no recent photo found of the mural" (narrowed)
- NoordOogst: "Noord's biggest nature playground" (cut)
- NoordOogst: "crowdfunded by neighbours" became "paid for partly by crowdfunding among neighbours and local firms" (narrowed)
- NoordOogst: "native butterflies" became "butterflies" (narrowed)
- Noorderklankpark: "two petrol stations that lost their trade ... turned both into neighbourhood culture spaces" became "the pink one fell out of use when the road was lowered; Valla converted both" (narrowed, Architectenweb 2013; De Gele Pomp is a cafe)
- Noorderparkkamer: "children's operas" (cut; the 2017 press release names choirs, brass bands and weddings)
- Plan Van Gool: "wanted anonymity, not community" became "above all he wanted to express anonymity" (narrowed, Van Gool's quote in the TU Delft report)
- Plan Van Gool: "Critics in 1972 were let down" became "one early critic, A. Schimmel, objected" (narrowed; one critic, article dated 1970)
- Players and Supporters: the group "nods to that football past" became "is about football too, which he sees as an icon of mass culture" (narrowed, Art@Site; no source ties it to Ajax)
- Pontje Holysloot: "Every road ... is a dead end" became "The road ... dead-ends at the water" (narrowed, Rodi)
- Pontje Holysloot: family "ran it for a century" became "with a long break, over a century" (narrowed; Staatsbosbeheer ran it from the late 1960s to 1985)
- Pontje Holysloot: "a broad old creek" became "an old creek" (narrowed)
- Kadoelen: "Groene Ridderhof recalls De Groene Ridder" became two separate facts (narrowed; no source links the lane name to the inn)
- Self-build houses: "the 2008 crash" became "the building crisis" (narrowed)
- Self-build houses: "each by its own owner and architect, in brick, timber, steel and glass" became "each built for its own owner" (narrowed)
- Ship murals: "bursting out of a wave" became "out of a drop of water", and "ring of water" became "wavy drop of water"; "under full sail" dropped (narrowed, nl.wikipedia Klipperstraat and SAMA)
- Ship murals: Stadgenoot moved from "both murals" to the Klipperstraat one only (narrowed)
- Sint-Rosaschool: "hardly anyone has noticed" became "has drawn little attention" (narrowed, Arcam/Heemschut)
- Sint-Rosaschool: "one of the leading Dutch structuralists" became "worked in the structuralist way, with geometric forms and spaces meant to bring people together" (narrowed)
- Sint-Rosaschool: "The building is closed" (cut)
- Tajiri: "an American child of Japanese immigrants who went through the Second World War" became "a child of Japanese immigrants who lived through parts of" it (narrowed, Stadscuratorium)
- Tajiri: "too dangerous for children" became "unfriendly to children" (narrowed, "kindonvriendelijk"; EN only, the NL already said this)
- Tajiri: "a relic of the ideals of the welfare state" became "a symbol of lost ideals" (narrowed, Stadscuratorium)
- Tajiri: "went up in 1976" (sourced: architectuurgids.nl prj 387 dates it 1971-1976)
- Termieterweg: "north of Zunderdorp" became "north-west of Zunderdorp" (narrowed, OSM coordinates)
- The Dutch Windmill: "in the 1950s he was sentenced" became "he was once sentenced" (narrowed; no date in nl.wikipedia)
- Tuinpark Buitenzorg: "Most of Amsterdam's allotment parks have been moved ..." (cut); it is now only "never moved, the oldest still in its first place"
- Tuinpark Buitenzorg: "no waiting list" became "no long waiting list" (narrowed, "geen grote wachtlijst")
- Tuinpark Buitenzorg: silo fox and goose of 2025 (sourced: amsterdamsdagblad.nl, 3 September 2025)
- Tuinwijck: "not the only one pushed out. Most of the allotment belt ... is made of refugees" became "not the only park to arrive here from elsewhere" (narrowed; no source gives reasons for the De Molen and Rust en Vreugd moves)
- Tuinwijck: De Molen 1939, mill, 1980, 1981 Schaefer (sourced: web.archive.org copy of tuinparkdemolen.nl, 17 November 2024; the live site dropped that text)
- Van der Pekbuurt: "Between 1919 and 1926" became "By 1926", and the built attribute "1919–1926" became "completed 1926" (narrowed; no start year in any source)
- Van der Pekbuurt: "nearest the ferry" became "the first you see coming from the city" (narrowed, NUL20)
- Wandelparkje: "1970s high-rise of Buikslotermeer" became "high-rise of Noord" (narrowed; Kunstwacht puts it in Nieuwendam Noordwest and gives no date)
- Wandelparkje: "the city's holiest place" became "drew pilgrims", and "most sacred building ... in a 1970s estate" became "pilgrimage chapel ... among the high-rise of Noord" (narrowed)
- Wandelparkje: the miracle of the host found unburnt in the fire (sourced: nl.wikipedia Mirakel van Amsterdam)

## For the user

- **Not re-verified, kept as drafted:**
  - Kadoelen: TracesOfWar now sits behind a JavaScript challenge, so these claims rest on the earlier read: fence, jetty and narrow-gauge track, Marechaussee in 1940, casemate parts in the 1930s, magazine gone in the 1980s.
  - NoordOogst: the Parool article is paywalled (5 ha, TOB left in 2013, about twenty enterprises). The nochateau.nl page "ontdek-de-wijngaard" behind "takes most of it home" now returns nothing.
  - Noorderklankpark: the Samenscholers initiative rests on a YouTube snippet.
- **Sources disagree:**
  - Molenwijk: nl.wikipedia Molenwijk dates Holstein's signs to 1972, but nl.wikipedia Spinnekop says 1975. The text keeps 1972.
  - Termieterweg: nl.wikipedia says Zunderdorp lies 500 m east of the old stop, but OSM puts the village node about 1.2 km east. Left as is.
- Sint-Rosaschool: the claim that Van Stigt's Groenhoven and Gouden Leeuw are protected comes from our own research/zuidoost/places/housing.yaml, not from an outside source in this place's draft.

## Verification

18 changed places checked: old against new text, EN and NL, attributes, sources re-fetched.

- Fix: Pontje Holysloot, NL summary had dropped "over a century" that the EN keeps (and pontjeholysloot.nl/geschiedenis supports: "Al meer dan 100 jaar heeft Holysloot een veerverbinding"). Restored: "Vier generaties van één familie voeren het veer, met een lange onderbreking, ruim een eeuw lang;" (270 characters). Change row updated.
- No new unsourced claims found. New wording checked against sources: Molenwijk renovation of the flats (nl.wikipedia: "renovatie ... waarbij de flats uitwendig een andere aanblik kregen"), "Dutch playgrounds" and Kasimir's quote (Kunstwacht API, 371 and 343); Noorderklankpark pink station and lowered road (Architectenweb); Wandelparkje "for centuries drew pilgrims" (nl.wikipedia Mirakel: "eeuwen bedevaarten"); Klipperstraat Stadgenoot commission and wavy drop (nl.wikipedia Klipperstraat); Plan Van Gool anonymity quote and Schimmel's north or west galleries (TU Delft report).
- Sourced changes confirmed: architectuurgids.nl prj 387 ("Ontmoetingsplaats, Breedveld, 1971-1976"); amsterdamsdagblad.nl 3 September 2025 (fox, goose, kingfisher on the silos); web.archive.org tuinparkdemolen.nl (1939, Oostelijke Ringdijk, 1980, 1981 Schaefer); nl.wikipedia Mirakel van Amsterdam (host unburnt in the ashes).
- Cuts and narrowings spot-checked, none restored: NoordOogst "biggest" (not on noordoogst.org), Noorderparkkamer children's operas (press release names choirs, brass bands, weddings only), Buitenzorg "most parks moved" (site says only "oudste, niet verplaatste"), Sint-Rosaschool "closed" (Arcam silent), Tajiri "American" and "welfare state" (Stadscuratorium), Bep van Klaveren "1950s" (no date in nl.wikipedia), Van der Pekbuurt 1919 start (nl.wikipedia gives only 1926 completion; Van der Pek died 1919 during building). Plan Van Gool: the TU Delft report's own reading ("expressing anonymity and not creating a social elevated street") is close to the old "not community", but the summary attributes words to the architect, so the narrowed quote stays.
- Self-build houses: EN summary changed and NL did not; the NL already said "de crisis", so both match.
- EN and NL match on facts; changed attributes (Molenwijk check_note, Van der Pekbuurt built) are mirrored under translations.nl.attributes; no `listed` changes. No em dash or spaced en dash; all summaries at most 280 characters; titles unchanged.
- nlcheck.py: 0 copied runs for every place.
