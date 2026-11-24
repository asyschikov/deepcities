# Dutch pass: West, batch 05

All 27 places are done. Each one has a new Dutch summary and body, written fresh rather than translated. Each Dutch text opens with the most surprising sourced fact and ends with "Let op:".

I checked every claim in the EN and NL summary, body and Look for text. The checks used the cached sources plus new fetches where a source was missing or blocked:
- Tableau Magazine, fetched with a browser user agent
- Parool and Waternet, from archived copies on web.archive.org
- the nl.wikipedia statue list, read as wikitext
- the monuments API record for 224016
- the Westkrant article date

## Totals

- Claim changes: 70
  - sourced: 4
  - narrowed: 55
  - cut: 11
  - reordered: 0
- Places with no claim changes: Former Wereldbibliotheek, Johannapark. Vondelstraat 72 has only a sourced change; its text is unchanged.
- Copy checker: 0 copied runs in all 27 places (8-word window).
- Dutch summaries are all at most 280 characters (longest: 259).
- No em dashes or spaced en dashes in any Dutch text, or in the English fields I patched.
- Sources added:
  - Pontsteiger: the archived Parool article
  - Gemaal Mercatorstraat: the archived Parool and Waternet articles
  - Vondelstraat 72: the monuments API record

## Main claim fixes

- **What will the neighbours say?**
  - The "carved columns" are cut, in the summary and the body.
  - The colour print is no longer dated 1989.
  - "Soon realised" is now "gradually realised".
  - The Look for item that says the statesmen gave the Staatsliedenbuurt its name is cut (unsourced).
  - Tableau, now readable, confirms that the naked figure is the artist himself.
- **Zevenlandenhuizen:**
  - The clients are now "probably J.H. van Eeghen and J.K. Huijsinga", as the register has it.
  - Only the Dutch house (no. 30) is described as converted to offices and a hotel.
- **Overtoomse Sluis:**
  - "Count" is now "County of Holland".
  - The bridge houses and ironwork in Look for are now just "Kramer's Amsterdam School bascule bridge".
- **Zaanstad:**
  - The Hilversum town hall mention is cut.
  - The claim that his earlier work was "more picturesque" is dropped.
- **Het Schip** (9 changes):
  - The tower "with no purpose but to point the way in" is cut.
  - The "older school" and the "post office at the pointed end, so residents needn't walk into town" are cut. The post office is now "something the poor had little access to" (en.wikipedia).
  - "Wildest" is now "most striking". The "leftover plot against the railway" is now "a roughly triangular courtyard".
  - The tower in Look for moves from the Zaanstraat to the Hembrugstraat side (caption of De Klerk's drawing).
  - The post office in Look for is no longer "rounded".
  - The scale-like roof tiles and ladder windows are cut.
  - The brick benches are now the street furniture in the former schoolyard.
- **Lijkenhuisje:**
  - "From the late 18th century" is now "for a century".
  - "Locals call it pesthuisje" is now "it is also called".
- **Pakhuis Koningin Emma:**
  - The concrete frame is now "relatively early".
  - The reason for the closure now matches the register.
  - The warehouse that stood against the blind east wall is now "probably".
- **Wilhelmina Gasthuis eye clinic:** the WG-plein position of the front is dropped. The 4th floor is "around the 1960s".
- **Women's clinic:** Treub's specialism and the street name are dropped.
- **Underground Tree:** "for decades", "locals nicknamed" and "at its foot" are dropped.
- **Bellamy Buurtmuseum:**
  - "Volunteer-run" is cut.
  - The Bellamystraat 80 / diamond works 89-93 Look for item is cut.
  - The Kinkerstraat is no longer named as the place to see the level drop.
- **Collectivism vs Individualism:**
  - "Dozens of people" is dropped.
  - The arson is "suspected", as De Westkrant has it.
  - The wall is no longer called the Lidl's wall.
  - The audio tour is now about "the fire", not "that night".
- **De Savornin Lohmanschool:** the schoolstrijd/1917 sentence is cut.
- **Gemaal Mercatorstraat:**
  - "Rescued by its neighbours" is now "restored with its neighbours involved". Per Parool, the restoration by Waternet and Liander was already planned; the residents' initiative was the surroundings.
  - "Neglected by the 2010s" is cut.
  - The St Andrew's crosses Look for item is cut.
- **Overtoom 411-421:** "rare in Amsterdam" is cut.
- **Overtoom 429-439:**
  - "Clumsy angels" is now "somewhat wooden-looking".
  - "Probably developer" is now "may have been".
- **Pontsteiger:**
  - The penthouse sale is now sourced (archived Parool).
  - The claim that the price earned the nickname is dropped. It is now "also known as".
  - "Free GVB" is dropped from the ferries.
- **Reiminger:**
  - The summary's "1914" is now "designed in 1913". The attribute built is now "1913 (design)".
  - Haust's "biscuit works" is now "factories".
- **Verloren Stad:**
  - It is the work, not the commission, that is dated 1989.
  - "Renewed Westerpark" is dropped.
  - "Nature is meant to win / pruned so the city stays in view" now follows the source: he lets nature have its way, and the reeds are pruned regularly.
- **Vindhek:**
  - The glove is dropped, and so are "dummies, hats" and "things hanging for weeks".
  - "No desk, no form, no attendant" is cut.
  - The 293 signatures were collected by Weber, not residents, by September 2023.
  - "Seen at any time" is cut.

## Places whose Dutch hook differs from the English opening

The Dutch hooks for these places lead with a fact that comes later in the English: Wereldbibliotheek, Overtoomse Sluis, Zaanstad, Eerste Helmersstraat, Frederik Hendrikstraat, Het Schip (the register quote), Johannapark, Lijkenhuisje, Volkswoningen (the tile panel), Koningin Emma, Wilhelmina eye clinic (sculptures), Women's clinic (parabolic window), Underground Tree (the tile), Bellamy (the level drop), Collectivism (the mosque), Gemaal, Overtoom 411-421, Overtoom 429-439, Pontsteiger (the penthouse), Reiminger (pianola rolls), Verloren Stad, Vindhek, Vondelstraat 72 (the ME driven off in ten minutes).

The English was not reordered. In each case the hook is already in the English summary or prominent enough in the body.

## For the user

- **No Look for list in the English:**
  - Former Wereldbibliotheek and Zaanstad have none. Their Dutch ends with "Let op:" anyway, but the items only repeat details already in the English body; no new facts. You may want to add the same items as a Look for list to the English, or drop them from the Dutch.
  - Zevenlandenhuizen has its Look for as one running sentence, not a list. The Dutch turns its two items into a "Let op:" list.
- **Wrong link on Overtoomse Sluis:** its data.amsterdam.nl link (5e707c75...) points to the register entry for the house at Overtoom 343, not to the lock or bridge.
- **Annexation date conflict, Reiminger:** its register entry says the annexation was in 1897. The text keeps 1896, which the Bellamybuurt page and the other registers give.
- **Tableau Magazine:** it returns 403 to the research user agent, but opens with a browser user agent.
- **Consent walls:** the Parool pages (Gemaal, Pontsteiger) sit behind a consent wall. Archived copies are added as sources.
- **Long bodies:** two Dutch bodies run a little over 250 words: What will the neighbours say? (about 300) and Underground Tree (about 270). They carry every fact in the English.
