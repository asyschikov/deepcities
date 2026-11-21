# Coordinator review

Decisions made across slices before import. Defaults chosen by the coordinator; the
map owner may overrule any of them.

## Merges (done)
- Surinameplein (Roodenburgh blocks): city monuments 200724 (north and east sides, in the
  oud-west-baarsjes slice) and 222009 (south side, oud-zuid) merged into one place in oud-zuid.yaml.
- Emmaplein villas: gained 505346 (Staal's 1911 triple villa, Emmalaan 10), found by the gap sweep.
- Tweede Openbare Handelsschool (Berlage Lyceum): the gap sweep's 527797/527798 schools
  already belong to it. Architect set to A.J. Westerman, per nl.wikipedia.

## Inclusion calls
Kept, with the reason written in the place text:
- Telegraaf building (Late)
- Olympic Stadium (Sober)
- Lloyd Hotel (no phase)
- Citroen jeweller's at Kalverstraat 1 (Wijdeveld, Precursor)
- De Nederlanden (Ouëndag, Precursor)
- Brug 117
- Pesthuysbrug
- Van Lennepschool
- Candida office building
- Heineken cold store

Dropped:
- Weesp municipal swimming baths: no source calls them Amsterdam School.

Left out, and mentioned in the essays instead:
- Grave monuments (Albert Hahn by Krop; De Nieuwe Ooster)
- Magere Brug (Kramer's rebuild was "in the old style")
- Linnaeushof (Kropholler, a traditionalist)
- Elthetokerk (demolished)

Borderline exclusions that remain excluded (each with its reason in the notes):
- Geuzenhof
- Wereldbibliotheek building (Zwiers)
- Hotel American
- De Bisschop
- Ceintuurtheater (art deco)
- Tugelaweg blocks
- Anne Frankschool

## Categories
- `public-works` relabelled "Public buildings & utilities" / "Openbare gebouwen en
  nutsvoorzieningen". It already held the Arbeidsbeurs, city hall extension, telephone
  exchange and police posts, so no separate civic category is needed.

## Links (done)
- 80 municipal links pointed at monumentenzoeker.amsterdam.nl, which no longer resolves,
  and 18 pointed at the city's general monument map. All 149 municipal links now use
  `https://data.amsterdam.nl/monumenten/<id>` (id from the city monuments API).
- Weesp monuments aren't in Amsterdam's register, so their generic links were removed.

## Photos
- 24 places gained photos: 23 from Wikidata P18 (via rijksmonument number) and one checked
  Commons file.
- Commons geosearch was tried and rejected: nearby files mostly show other buildings.
- Spot-checked: Niek Engelschmanbrug (the bridge, with the Westerkerk behind),
  Waagplein and Groeneweg (Weesp). All fine.
- 48 places still have no photo, mostly municipal monuments without a Wikidata item.
  A wrong photo is worse than none. Good candidates for own photography or a manual
  Commons pass.

## Still open
- Nieuwe Achtergracht 100: Public Works 1923 (GGD) vs Joodse Invalide (1925). Needs a
  check against the city archive. The place text follows the city register and says so.
- Missing monument numbers/status: Wingerdweg 28-34, Kromme Distelstraat 17,
  Vierwindstrekenbrug, Spaarndammerspoorbrug, Mercatorstraat pumping station, Brug 605.
- Unconfirmed: Van der Mey's Jan Evertsenstraat merge (national 527151/527152 with
  municipal 200727, about 100 m apart).

## Coverage
- The first national-register extract required the place name "Amsterdam" and a narrow
  phrase. A broader query found 63 unreviewed monuments. The gap sweep reviewed all of
  them: 8 places added, 3 merged into existing ones, 50 false positives.
