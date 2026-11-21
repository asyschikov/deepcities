# Gap sweep — notes

Input: `rce-unreviewed.json`, 63 rijksmonuments (Amsterdam/Weesp) whose register text matched the broad
pattern but no slice reviewed. Each record was checked against all `places/*.yaml`: monument number, sources,
and distance under 150 m. `pijp-rivierenbuurt.yaml` was re-checked at the end, after it appeared.

Result: **8 places added** from 10 input records (plus rce:526940, which shares 524815's text). 3 records belong to an
existing place, and 50 are excluded. 10 + 3 + 50 = 63.

## Per-record review

### Included (8 places)
- rce:524815 + rce:526940 → **Wilhelmina Gasthuis surgical clinic**. A separate building from the Oud-West slice's
  X-ray building (524817) and pathology lab (524816), about 150–300 m away, so it is not a duplicate. The coordinator could merge
  the three into one WG place.
- rce:523289 + rce:523290 → **Lloyd Hotel and KHL office**. Borderline, see below.
- rce:512878 + rce:512880 → **Former municipal swimming baths, Weesp**. Main building and gate piers merged.
- rce:518364 → **De Nederlanden building (Dikker & Thijs)**, Prinsengracht 444. Precursor.
- rce:527811 → **Heineken brewery cold store (Heineken Experience)**. Sober phase.
- rce:518442 → **Candida office building** (Warners). Sober phase.
- rce:518382 → **Mariniersbrug (Brug 272)**. Sober phase.
- rce:518431 → **Citroen jeweller's shop (Kalverstraat 1)**, Wijdeveld. Precursor. The centrum-west slice excluded it "for strictness".

### Belongs to an existing place
- rce:527797, rce:527798 → belongs to *Tweede Openbare Handelsschool (Berlage Lyceum)* (pijp-rivierenbuurt.yaml).
  I had drafted it before that slice landed and dropped my version. Useful extras for the merge:
  - nl.wikipedia [Arend_Jan_Westerman](https://nl.wikipedia.org/wiki/Arend_Jan_Westerman) attributes both
    schools to Westerman. The Pijp notes say only Wikidata does.
  - The same page says the two buildings are the **1e Openbare HBS** and the **2e Openbare Handelsschool**, one each
    side of the P.L. Takstraat, completed 1924. Both RCE texts call themselves "Tweede Openbare Handelsschool",
    probably a copy-paste in the register.
  - The murals are Peter Alma's "de handel en haar transportmiddelen" (1930, no. 33) and Joop Sjollema's "de cyclus
    der seizoenen" (1929, no. 34).
- rce:505346 (Emmalaan 10, middle part of J.F. Staal's 1911 triple villa for I.L. Nienaber) → belongs to *Emmaplein
  villas* (oud-zuid.yaml). That place already describes Staal's Nienaber triple villa, but this monument number is not in its list.
  The style is rationalist, so the coordinator may simply add the number or leave it out.

### Excluded
- rce:528252 NDSM Lasloods (1952, Postma): "staal" = steel. Post-war industrial.
- rce:491879, 491886, 491894, 491901, 491909, 491917, 491924 Zevenlandenhuizen (Tj. Kuipers, 1894): matched on
  "staalkaart" and "Kuipers". 19th-century eclectic.
- rce:505884 Gabriël Metsustraat 7 school (Posthumus Meyjes, 1912): traditionalist. "Publieke Werken" only as the
  director's comment.
- rce:518268, 518269 Plantage Lepellaan villa and coach house (Springer 1874 / Staal & Haalmeijer 1907–08): pre-AS.
- rce:518299 De Utrecht, Damrak 28 (Kropholler & Staal, 1904–06), rce:518375 't Binnenhuis, Raadhuisstraat 46
  (1906–07), rce:518428 Kettner piano shop, Heiligeweg 21 (1906–07): early rationalism by the young Staal and
  Kropholler. Not AS, though De Utrecht could be mentioned in an essay on Staal's origins. 518428 is 19 m from
  *Langemeijer shopfront* (centrum-west), but it is a different building.
- rce:505278, 505287, 505294 Prins Hendriklaan 15–19 (Staal, 1912), rce:505301 Koningslaan 56 (Staal, 1911–12),
  rce:505354, 505360 Emmalaan 7/9 (Staal, 1911): the register calls them "rationalistisch", "in de trant van Berlage".
  Pre-AS Staal. The Emmaplein villas place already covers this phase of his work.
- rce:518452 De Rijnstroom / Hajenius, Rokin 92–96 (Gebr. van Gendt, 1914–15): "Um 1800-stijl". Matched only on the
  demolition firm Staal & Haalmeyer.
- rce:523314 Pakhuis Afrika (Joling, 1915): "staal" = steel.
- rce:526981 Aula De Nieuwe Ooster (Leupen, 1938–39): traditionalist.
- rce:526988 Amstelstation (Schelling, 1938–39): functionalist. Matched on Peter Alma's murals and Publieke Werken.
- rce:526974 **Albert Hahn grave monument** by Hildo Krop (1919), De Nieuwe Ooster: **borderline**. It is genuine
  Krop from the AS peak, a workers' family driven by a Genius on a lotus pedestal, paid for by "De arbeiders". But it is a
  grave monument, not a building, and no category fits. The coordinator could add it under `culture`. Otherwise it is good essay
  material.
- rce:518352 Blauwbrug (1883), rce:518397 Entrepotdoksluis (1903), rce:518406 Scharrebiersluis (1906),
  rce:518398 Peperbrug (1929): Public Works bridges in a deliberate late-19th-century manner. The register says so explicitly
  for 518397, 518398 and 518406.
- rce:518383 **Magere Brug**: rebuilt in 1934 to a design by P.L. Kramer, but "in oude stijl". It is a faithful
  reconstruction, not AS. Good anecdote for a Kramer essay: the AS bridge designer also restored the city's most traditional
  bridge.
- rce:518510 Amstelsluizen (1673): "staal" = steel.
- rce:523311 Krachtcentrale Oostelijke Handelskade (1885): eclectic.
- rce:524828 Lettergieterij Amsterdam factory, Bilderdijkstraat 163 (1902): "staalskelet".
- rce:518408 Brandweerkazerne De Ruijterkade (1889–90): eclectic.
- rce:518474 Politieposthuis, NZ Voorburgwal (1896): chalet style.
- rce:458911 Cineac (Duiker, 1934): Nieuwe Bouwen.
- rce:408905 Keizersgracht 455 "New York" / Metz (1891, Rietveld dome 1933): eclectic + functionalist.
- rce:518486 Bungehuis (Van Gendt with Klok, 1932–34): the register says functionalism.
- rce:518309 Binnengasthuis kitchen and nurses' home (1908–09): pre-AS.
- rce:531186 Opstandingskerk (Kolenkit) parsonage (Duintjer, 1956): post-war "shake-hands" modernism. The church
  is not on the map either.
- rce:531336, 531345 Uitermeer casemates, Weesp: "gietstalen" = cast steel.
- rce:518500 Marnixschool (1883), rce:518362 Agatha Dekenschool (1883–84): 19th-century Public Works schools.
- rce:498727 Sint Rosaklooster (Kropholler, 1926–27): traditionalist. Matched on Dom van der Mey murals.
- rce:518508 Centrale Oost machine hall (1903): eclectic.
- rce:505664 Dreesmannhuis (Kuyt, 1911–12): historicist.
- rce:518506 Rapenburgerstraat 109 seminary/synagogue (1881–83): "H-staal".
- rce:38608 Stadhuis Weesp (1770s): "staal" = sample.
- rce:495304 Hortus palm and fern house (1912, probably J.M. van der Mey for Public Works): a glasshouse with no AS
  character. Interesting only as an early Van der Mey attribution.

## Borderline calls (coordinator to decide)
- **Lloyd Hotel and KHL office.** The Oost slice excluded them ("register texts don't mention AS"). The register
  says "Duits georiënteerde expressionistische baksteenarchitectuur". nl.wikipedia says "eclectische stijl, met invloeden
  van de Amsterdamse School", and English Wikipedia says eclectic. I included them as a contemporary, related strand,
  because the hotel is well known, has a strong story, and its brickwork is linked to AS by Dutch sources. I left `style_phase`
  unset: it is not a precursor, since it was designed in 1918, and calling it "Expressive" would overclaim. Drop it if the map
  should stay strict.
- **Weesp swimming baths.** The register says "expressionistische bouwtrant". It is timber and thatch, with no
  architect known. It is AS-adjacent, in the line of the thatched AS villa parks, but no source says "Amsterdamse School".
- **De Nederlanden (Prinsengracht 444)** and **Heineken cold store**: the register says "zakelijk-expressionistisch",
  the same wording the Oud-West slice accepted for the WG pathology lab.
- **Candida**: "Kubistisch-Expressionistisch". It is close to the Nieuwe Bouwen, but Warners is otherwise well represented on the map.
- **Kalverstraat 1**: the register says Art Deco. nl.wikipedia notes AS stained glass and deep-set windows. I kept it
  as a precursor because of Wijdeveld (Wendingen).

## Source conflicts
- **Mariniersbrug architect**: the register says P.L. Kramer. nl.wikipedia says Jan Leupen (PW Buildings section), with
  H.G.J. Schelling (NS) involved in the overall railway ensemble. The attribute gives both.
- **Lloyd dates**: the register's description says hotel 1917–1920, but its waardering says 1915–1917. Wikipedia says designed
  1918 and opened 1 June 1921. I used built 1915–1921, with the office in 1915–1917.
- **Weesp baths**: the register says 1937. *Monumenten in Nederland. Noord-Holland* (2006) says "rond 1930" and calls
  it the rowing club's clubhouse.
- **Heineken**: the register names B.J. and W.B. Ouëndag. B.J. Ouëndag died in September 1932 (Wikipedia), so the
  1933–34 building is in practice the work of the son's office.
- **Kalverstraat 1 sculptor**: the register says "Thomas Rodriquez", nl.wikipedia says "Thomas Rodr". I used the latter.

## Photos
All 8 places have Commons photos, found by Commons search and Wikidata P18. `Category:Rijksmonument_<nr>` came back empty for
every number tried. Commons returned HTTP 429 twice, and I backed off.
Kalverstraat 1 has only one photo.

## Material for map-level essays
- **The register's vocabulary**: besides "Amsterdamse School", RCE texts use "zakelijk-expressionistisch"
  (WG clinic, Heineken, Prinsengracht 444), "kubistisch-expressionistisch" (Candida) and "Duits georiënteerde
  expressionistische baksteenarchitectuur" (Lloyd). A short essay on how to read these labels would help visitors.
- **Hospital architecture**: the WG campus has three AS-era Public Works buildings (X-ray 1925, pathology 1927–30, surgical
  clinic 1932–33 by E.P. Messer with Krop reliefs). https://nl.wikipedia.org/wiki/Wilhelmina_Gasthuis
- **Kramer and old bridges**: in 1934 Kramer rebuilt the Magere Brug "in oude stijl" (rce:518383). The modern
  Mariniersbrug (1935) copied Chicago bascules, but its pier is a Kramer-like bastion. https://nl.wikipedia.org/wiki/Mariniersbrug
- **Krop beyond buildings**: the Albert Hahn grave (1919) at De Nieuwe Ooster shows the SDAP world that commissioned AS
  housing. https://nl.wikipedia.org/wiki/Grafmonument_van_Albert_Hahn
- **Staal before the Amsterdam School**: rationalist villas in Willemspark (1911–12) and the De Utrecht offices with
  Kropholler (1904–07). These help explain his later Wolkenkrabber and De Telegraaf.
- **Wijdeveld's first building**: the Citroen shop opened in February 1917, a year before *Wendingen*.
  https://nl.wikipedia.org/wiki/Kalverstraat_1
- **Westerman at Public Works (1914–1922)**: Stadwijck pumping station, the Boerhaaveplein and Diamantstraat bathhouses, the
  Vierde Ambachtsschool and the P.L. Takstraat schools. https://nl.wikipedia.org/wiki/Arend_Jan_Westerman


## Coordinator
- Weesp municipal swimming baths (512878, 512880): dropped at review; no source calls them Amsterdam School (only "expressionistisch"; timber and thatch).
