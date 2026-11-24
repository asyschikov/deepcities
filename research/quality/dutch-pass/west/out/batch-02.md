# Dutch pass: West, batch 02

27 places done. Each one has a new Dutch summary and body, and the copy checker finds no copied 8-word runs in any of them (0 of 27 flagged). Every Dutch summary is 280 characters or fewer, and every body ends with "Let op:".

## Claims

I checked every claim in the English and Dutch text against the cached sources, and fetched more sources where needed: the monuments API, the RCE complex 526720, nl.wikipedia, the Kunstwacht API, Iwaarden and buurtboerderij.nl. 57 claims changed:

- **10 sourced**: a new source backs the claim, and the text stays as it was.
- **42 narrowed**: the claim now says only what the source says.
- **5 cut**.

The English was changed only to fix claims. In 9 places the English text has no claim changes.

Cuts:
- Les dames et la licorne: the link from the title to the Paris *Lady and the Unicorn* tapestries (no source makes it).
- Theo Nieuwenhuis room: "a leading designer of Dutch Art Nouveau".
- Zaandammerplein: "Rutgers' blocks on the Hembrugstraat" (the register only says "een andere architectuureenheid").
- Derde Helmersstraat: the Nieuwer-Amstel remark.
- Zeeslagenkaart: "fitting a district whose main roads honour admirals".

Notable narrowings:
- Superlatives and "first/only/every" claims:
  - Boekel: "the last" house, "rare".
  - Unity in Diversity: "one of the most experienced muralists in the city".
  - Zuiver: "one of the dullest objects".
  - Zaandammerplein: "round windows on every staircase".
  - Ons Genoegen: "unusually smart for a working farm".
  - Van der Tas: "unusually intact".
- Numbers:
  - Zaandammerplein: about 575 or "nearly 600" homes becomes about 570. The complex register says 569.
  - Edelstenen: "the seven metals of alchemy" becomes six metals, because the source lists six.
- Dates:
  - Zen Mast: "arrived end of October 2023" becomes "in place by early November 2023" (De Westkrant, 3 Nov 2023).
  - Zen Mast: "A century ago" becomes "Old photographs show".
  - Reinaert: "In 2019" becomes "Around 2019".
- Kostwinner:
  - "his mother" becomes "a grandmother".
  - "now calls" becomes "called in 2020".
  - "survey of its alumni's works" becomes the project name *Rijksakademie op de kaart*.
  - "literally above" is cut.
- Reinaert: "Amsterdam illustrator", "three storeys high", the medieval epic title, and "flooded the local paper" (the source only says residents reported it en masse).
- Zoals ze is: Nicklas "taught" them becomes "helped them" (De Westkrant: "terzijde gestaan").
- Les dames: "companion to their A10 tiles", "deer surrounded by birds", and "the same trick as under the A10".
- Surinameplein: "pupil of De Bazel" becomes "had worked for De Bazel".

## Hook changes (the Dutch leads with a different fact than the English)

| Place | The Dutch now opens with |
|---|---|
| Samen bij De Boeg | the rollator |
| (Zoals) ze is | Amsterdam had no artwork of a woman in a headscarf until that day |
| Boekel | ferries named IJ-tunnel some 30 years before the tunnel |
| Unity in Diversity | letters hidden in the colour fields |
| Zen Mast | it sways but never falls |
| Theo Nieuwenhuis room | a Nieuwenhuis interior still where it was made |
| Zaandammerplein | the stairs up to the dike |
| Zuiver | you can never see the whole fish at once |
| Repelius | Mondriaan's ceilings |
| Ons Genoegen | 1880 laid in the roof tiles |
| Van der Tas | every house looks different, but one man designed them all |
| Edelstenen | the rain chemistry |
| Toverbos | 9,750 sponged dots |
| Het Veem | the only mime stage in the Netherlands |
| Huize Johanna | the sgraffito |
| Kostwinner | the pose of the man, grandmother and daughter |
| Surinameplein | nearly 30 years to finish |
| Zeeslagenkaart | read the street names on the map |
| Prinses Margrietschool | the marl stone running from outside into the hall |

I did not reorder the English.

## For the user

- **Boerderij Ons Genoegen**: buurtboerderij.nl says a large fire in August 2024 closed the farm, and it has since been fully renovated and reopened. I narrowed the interior claims to "when it was listed in 2004". Someone should check on site that the "1880" roof tiles, the louvred shutters and the wall anchors survived the fire before these stay as Look for items.
- **Zen Mast**: Kunstwacht lists the material as "Hardhout", but Wikipedia and De Westkrant say "naaldhout". The text keeps softwood (two sources against one).
- **Zaandammerplein**: the Spitsbergenschool register places the school "in de Zaanhof", but its address and the complex register put it on the Zaandammerplein. I left this as it was.
- **Spaced en dashes**: the live English text still contains " – " in these places, which I left alone because no claim in them changed. They break the no-dash rule:
  - Samen bij De Boeg (summary and body)
  - Zuiver (summary)
  - Het Toverbos (summary and body)
  - Kostwinner (body)
  - Surinameplein (summary)
  - Zeeslagenkaart (summary)
- **Dead links**:
  - The Lobke Alkemade link on Zeeslagenkaart now leads to a spam site. It should be removed.
  - buitenbeeldinbeeld (Kostwinner) and the Buitenkunst route page (Vrouwen van West) failed to fetch.

## Verification

All 27 places checked: every claim in the new Dutch compared with the new English and the originals, the Look for lists compared item by item (all match; Sint-Josephkerk and Prinses Margrietschool have no English list, and the Dutch "Let op:" items come from the English prose), and summaries measured (all 280 characters or fewer in both languages). No unsupported claims needed removing. The copy checker reports 0 copied runs before and after the fixes.

Sourced changes, fetched again and confirmed:
- Boekel: monuments API 200394, Gemeentelijk monument, aangewezen 1995-11-21, jaarBeginVan 1893.
- Zen Mast: nl.wikipedia Jeroen_Doorenweerd, "Terneuzen, 15 juli 1962".
- Zaandammerplein: nl.wikipedia Karel_de_Bazel, office building for the Nederlandsche Handel-Maatschappij.
- Zuiver: nl.wikipedia Zuiver_(muurschildering), infobox "jaar = 2021".
- Ons Genoegen: buurtboerderij.nl, "Buurtboerderij 'Ons Genoegen' Westerpark", closed after a fire in August 2024, fully renovated, reopening.
- Da Costastraat: monuments API 224034, 1888, "Koolhaas, B.; Burg, C. van der".
- Edelstenen: Kunstwacht API object 2168, streetName "Kinkerstraat", district Oud West.
- Het Veem: nl.wikipedia Veem_House_for_Performance, squat action and open day on 7 November 1981.
- Huize Johanna: monuments API 224021, 1899, "Arkel, G. van".
- Reinaert de Vos: Iwaarden project page, "in samenwerking met Kallenbach Gallery ... ontwerp van illustrator Stefan Glerum".

Dutch fixed, so it says no more than the English:
- (Zoals) ze is: "het eerste kunstwerk" / "geen enkel kunstwerk" now say "openbaar" (the English claim is "first public artwork").
- Wilhelmina Gasthuis: "dat erin en eromheen haakt" becomes "dat erop aanhaakt" (English: "hooks into it").
- Spitsbergenschool: "schooltje" (implies small) becomes "lagere school" (English: primary school).
- Zuiver: the hook "Je kunt deze vis nooit in één keer zien" becomes "Deze vis zie je pas helemaal als je om het huisje heen loopt" (English: only complete if you walk around it). "op het helofytenfilter staat" becomes "vanaf het helofytenfilter kijkt".
- Betsy Repelius: "haar mooiste kamers" becomes "de belangrijkste kamers" (English: main rooms).
- Ons Genoegen: "aan alle kanten door sloten omringd" becomes "door sloten omringd".
- Surinameplein: Roodenburgh "bouwde" the Ajax stadium becomes "tekende" (English: designed).
- Zen Mast: "lag er" becomes "stond er" (English: was in place, and it stands upright).
- Het Toverbos: the summary now says the mural was made to be veiled and revealed by the alder, as the English does.

Spaced en dashes removed from the English (punctuation only, same words). These places now carry an English `summary` or `body` in their patch:
- Samen bij De Boeg (summary, body), Zuiver (summary), Het Toverbos (summary, body), Kostwinner (body), Surinameplein (summary), Zeeslagenkaart (summary).
