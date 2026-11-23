# Oost round 4, slice ijburg (notes)

3 new places in `places/r4-ijburg.yaml`. One pointer added in `places/r2-ijburg.yaml` ("RI-Oost silos and Rialto Silo", title unchanged): a Look for line in both languages for the two sludge pumping stations, and Arcam in its `sources`. No link or photo added there. No monument numbers (none of the three is listed). Grepped all `places/*.yaml` for every name and address: no duplicates. All pins point-checked with `scripts/areas.py`: borough Oost, gebied IJburg, Zeeburgereiland. Both files validate with 0 errors.

## Items

| Item | Result | Rank | Category |
|---|---|---|---|
| 319 De Witte Kaap | own place, "De Witte Kaap" | Okay | housing |
| 320 Baggerbeest | own place, "Baggerbeest, the Sluisbuurt broedplaats" | Okay | civic |
| 321 Vondice | own place, "Vondice and the sludge pumping stations", with its twin (the Espressofabriek, Roepie Kruizestraat 2) as part of the story and a Look for line; pointer from the silos place | Okay | industrial |

No `check`, `status` or `outlook` set on any of them.

## Site checks and status

- **320 pin**: settled. The scout's pin (52.3713, 4.9597) was about 200 m south of the site. New pin is the PDOK address point Rudi van Dantzigstraat 1, which matches OSM's "Baggerbeest" bar node and sits among the four 2023 BAG footprints. No `check: Location`. Open and active: the website lists events for November and December 2026, Facebook and Instagram an open day on 14 November 2026.
- **320 future**: Urban Resort and the Baggerbeest site speak of "the ten years of its existence"; Het Parool (15 March 2024, snippet) says it may stay "at least ten years". The body says "permission to stay for at least ten years". No Outlook set, as no end date or plan to close is known; if wanted, `Leaving or closing` with `outlook_when: around 2033` would fit later.
- **320 dates**: Urban Resort says "opened in 2023" (tenants from summer 2023); NH Nieuws reports the official opening on 1 March 2024. Text gives both. NH says 5,500 homes for the Sluisbuurt; Baggerbeest's own page says more than 11,000 residents; text uses residents only.
- **321 still there**: yes. vondice.com (© 2026) takes bookings; booking.com lists 2027 prices. It was for sale in 2024 (Funda, 950,000 euros in April, 875,000 in August per indebuurt, article updated January 2026), possibly for use as a home after talks with the city. Whether it sold is unknown; the site's team page now names new "keepers of the experience". Body says it was put up for sale in 2024 and still takes guests. No Outlook set (no decided change); the user may want `Major change ahead` if it is still on the market.
- **321 opening year**: Arcam says the hotel opened in 2020; Entree Magazine reported the opening on 4 August 2021 and the Leeuwarder Courant (2022) calls it "opened in 2021". Text: 2021; the `built` field says "converted c. 2020–2021".
- **321 function**: vondice.com's history blurb says the building kept Amsterdam's drinking water clean; that is wrong (it was part of the sewage works). Arcam, Man Man and the site's own longer history call it a sludge (return) pumping station at the end of the treatment process; text follows Arcam.
- **319**: the scout's "youth and neighbourhood centre in the plinth" is not in gebouwdin or Arcam (they list business units, senior homes and a car park); left out.

## Source conflicts

- **319 storeys**: Arcam: three in the middle, up to eight at the ends; gebouwdin: two in the middle, up to eight; Archiweb (English Arcam text): three to seven. Text follows the current Arcam guide (three to eight).
- **319 Parool**: the "handsomest block" quote (Ronald Hooft, Het Parool 3 July 2010) is known only through the Archiweb/Arcam text; the Parool archive is behind a privacy wall. The Flatiron comparison comes from a local blog citing Het Parool; it is used only as a Look for image, not attributed.
- **319 jury**: the Zuiderkerkprijs 2011 jury report (gebouwdin page 356) is critical inside and praising outside; it is unclear whether the Witte Kaap was nominated for that prize. Arcam lists a nomination for the Amsterdam Architectuurprijs 2011. Text says only what the jury wrote.

## Writing

All Dutch written fresh from Dutch sources (gebouwdin, Arcam, the Baggerbeest and Urban Resort pages, NH Nieuws, Entree, indebuurt, Man Man), not pasted and not translated from the English. Same facts in both languages.

## Photos

- De Witte Kaap: `commons:File:Witte Kaap Haveneiland Schemering.jpg` (CC BY-SA 4.0, 2020, the prow head-on).
- **No photo**: Baggerbeest and Vondice (nothing on Commons; the 2018 Commons photo of the Roepie Kruizestraat shows houses, not the pumping stations).

## Route idea

Zeeburgereiland, "from sewage to studios": Baggerbeest, Skatepark Zeeburgereiland and An outcast sanctuary, RI-Oost silos and Rialto Silo, Vondice and the sludge pumping stations, Enneüs Heermabrug.

## Not done

- `scripts/data/amsterdam-c-list-ranks.json` not edited (outside this slice's files); ranks are in the YAML.
