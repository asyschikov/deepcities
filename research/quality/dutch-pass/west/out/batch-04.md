# Dutch pass: West, batch 04

I finished all 27 places. Each place has a new Dutch summary and body, written fresh rather than translated from the English. Each Dutch text opens with the most surprising fact that a source supports, and ends with "Let op:" and the same items as the English "Look for" list. All Dutch summaries are 280 characters or less. Some Dutch bodies run under 150 words (De dames en de muze, the war memorial, the Gashouder, Nassaukade 123, the Rombout Hogerbeetsstraat school, Damsko Strijder). Their English has few facts, and I added none.

The copy checker (nlcheck.py) finds 0 copied runs in all 27 places. No new text has an em dash or a spaced en dash. The only spaced en dashes in the output file are inside quoted `old` strings.

## Claim check: 69 changes

- 49 narrowed to what the source says
- 18 cut
- 2 sourced

Four places needed no change: Nassaukade 112-115, the Rombout Hogerbeetsstraat school, Chassékerk and Kinkerschool.

### Main points by place

- **Jeruzalemkerk:**
  - Cut: the claim that Jantzen designed the Westerwijk community house.
  - "Almost everything is symbolic" is now "symbolism runs through the design".
  - "Clear influences" is now "influences".
- **Widows' homes:**
  - "The Jordaan" is now "the Bloemgracht", as the source has it.
  - Religious charities are now "religious and other charitable bodies".
  - "The shopfronts were later remodelled" was wrong. Around 1925 the ground-floor homes became shops.
  - The built date is now 1880 instead of 1880–1883. No source gives 1883.
- **Damsko Strijder:**
  - Cut, because no source has them: "much-loved", "mayor from 2010", "October 2017", "died of" and "the line became a motto".
  - "Farewell letter" is now "a letter to all Amsterdammers shortly before his death".
- **Rochdale:**
  - The flats had no alcoves ("alkoofloos"), not no box-beds.
  - The Housing Act let municipalities ask the state for advances. It was not housing associations that borrowed.
  - Rochdale's founding in 1903 is sourced from city monument 200769, which is in `sources_add`.
  - Cut: "named after the English pioneers".
  - "Largely tram staff" is now "many tram workers among its founders".
- **De Stam:**
  - Cut: "red", because no source gives a colour, and the "information sign".
  - "Heart of the timber trade" and "Golden Age" are now the Stadscuratorium wording.
  - The park redesign is now dated "the 2010s". 2012–2015 is the artwork's date.
- **Dragers van verre:** Duinmeijer was "the first known victim of zinloos geweld" who became a symbol against racism. The sources do not say "a racist killing". The Vondelpark statue is called *Moeder Rots*, after the Antillean idea of Mama Baranka.
- **Gerard Reve memorial:**
  - Cut: the De Avonden gloss.
  - "Annoyed the arts fund" is now "the fund refused to pay".
  - "As a baby" is now the source's wording.
- **Horse-tram depot:**
  - Cut: the Concertgebouw.
  - The AOM reached the Overtoom "around 1877".
  - "Around 2003" was when the squatters left, not when the buildings were converted.
- **Kwakerspoel:**
  - "De Hallen, 1902" is now the source's sanitation complex and Tollensstraat depot.
  - The lake was filled in between 1886 and 1890.
- **Gashouder:**
  - Cut: "last surviving".
  - Concerts and fashion weeks belong to the Westergas site as a whole. Only the TV recordings are tied to this building.
  - Sourced: the pond on the site of the former gasholders, from an RCE photo caption on Commons (in `sources_add`).
- **Bruidsjurk:**
  - "Last survivor" is now "the one gown kept".
  - Cut, because no source has them:
    - "Amsterdam's favourite";
    - the parliament gloss;
    - "still there in 2026";
    - the Haarlemmerweg viewpoint;
    - the waterbirds item in Look for.
- **Westerpark West:**
  - Cut: Pinnacle, the 2014 masterplan date, "17th-century", the 2025 Nieuwbouwprijs nomination and the Kolenkit comparison. Both MVRDV links return no text, so nothing from them could be checked.
  - The Salt and Pepper location is cut.
- **War memorial:** The van attack had no date ("spring 1945" is the inscription's date for the executions). The liberation-relative timing is cut. The inscription was checked in the wikitext, because the cached page had dropped the quote.
- **Other narrowings:**
  - Senefelder: a granite canopy, not a niche, and the reason for the move.
  - Gijsbert Bakker: "ijkpunt" is a milestone, not a missing link.
  - Observatiehuis: De Bazel is a stylistic kinship, not an influence.
  - Roggeveen mural.
  - Nassaukade 123: "Reformed clients" restraint.
  - Spaarndammercarré: "outshone", "probably" and "1920s ring".
  - Volksbadhuis: the children's bath was added in 1919.
  - Slatuinen: opening hours; ponds and brush piles cut.
  - Dames en de muze: the Gulden Winckelplantsoen work, "further south" and "one per tile" cut.
  - Poolkleed: the 1596–1597 dates and the hut gloss cut.

## Places whose hook changed

The Dutch leads with a different fact than the English in most places, always one the English already has. Examples:

- Chassékerk: twice nearly demolished.
- Reve: the arts fund refused to pay.
- Poolkleed: "not a table for comfort".
- Westerpark West: Salt and Pepper.
- War memorial: the van turned out not to be an ammunition transport.
- Kinkerschool: more fees, a finer front.
- Volksbadhuis: almost nobody had a bathroom.
- Damsko Strijder: the portrait was scrubbed off once.

I did not reorder any English text.

## For the user

- **Damsko Strijder:** the Dutch now paraphrases the farewell line ("de oproep om goed te zorgen voor onze stad en voor elkaar") instead of quoting it whole. The full quote is an 8-word run from Wikipedia. The line itself is painted on the work, and it is still in the Look for list.
- **Spaarndammercarré:** "built up to 1921" is kept. It is supported by the city API's `jaarBeginTot` 1921, while the register text gives only "1916-1917".
- **Unchanged English text:** a few English texts I did not touch still have spaced en dashes: the Gijsbert Bakker summary and the Natuurtuin Slatuinen summary.
- **Bruidsjurk:** the Parool link sits behind a consent wall and could not be checked.

## Verification

I checked all 27 places. For each one, every claim in the new Dutch is in the new English or the original texts. The Dutch and English give the same facts, and the Let op lists match the Look for lists item for item. I fetched the sources for the two "sourced" changes, and both are confirmed:

- **Rochdale:** city monument 200769 (API) has the line about municipalities asking the Rijk for advances, more housing associations being founded, and Rochdale founded in 1903.
- **Gashouder:** the Commons file title (RCE 20536709) reads "Voormalige gashouders van de Westergasfabriek, thans vijver en relaxplek". The Westergas wikitext has "Er waren meerdere gashouders", and has De Nieuwste Show and Aria recorded in the gashouder.

I also spot-checked these against their sources:

- the seven Creation windows and the two corners of the Jeruzalemkerk (wiki, register);
- the war-memorial wikitext and inscription;
- the Slatuinen opening hours and advice on Thursdays;
- the NUL20 and Architectenweb texts for Westerpark West (no Nieuwbouwprijs nomination and no Pinnacle in either).

### Claims removed or narrowed in the Dutch (8)

- **War memorial:** the hook said the van "bleek geen munitietransport" and that the Langedijk group "had zich vergist". The source only says the group thought it had hit an ammunition transport. The new wording follows the source: the group thought it was hitting an ammunition transport; what they blew up was a German van, and five people died.
- **Volksbadhuis:** "Een badkamer had bijna niemand hier" overstated the English "most workers' homes had no bathroom". It is now "De meeste mensen hier hadden geen badkamer."
- **Horse-tram depot:** "een autoverhuurder die uitgroeide tot touringcarbedrijf" added the firm's growth, which is in the wiki but not in the English. It is now "een autoverhuur- en touringcarbedrijf".
- **Observatiehuis:** "De Duitse architectuur ... is er duidelijk in te zien" added "clearly", the same kind of claim the Jeruzalemkerk change cut. It is now "Er zit invloed van de Duitse architectuur van die tijd in".
- **Spaarndammercarré:** "Binnen is alles ... opnieuw verbouwd" ("everything inside") is now "De interieurs zijn ... opnieuw verbouwd", as the English has it.
- **Nassaukade 112-115:** "tot in de kleinste hoekjes versierd" overstated "rich in detail". It is now "rijk aan details".
- **Gijsbert Bakker hofje:** cut "ingetogen" (restrained), which is not in the English for this front.
- **Gerard Reve memorial:** "dan ook geen standbeeld" made Kemper's design sound like a consequence of the fund's refusal. "Namelijk" now makes it the reason the fund called the work too modest.

### Other fixes

- **Em and en dashes:** removed the spaced en dashes from two English summaries the batch had left alone, with no change to the facts. Gijsbert Bakker now reads "seed merchant: a "modern hofje"", and Natuurtuin Slatuinen now reads "Slatuinenweg: a former park and nursery". Both are now in `patch.summary`.
- **Copy runs:** nlcheck.py reported 0 copied runs in all 27 places before these edits and after them. No copy runs needed fixing.
- **Final checks:** no new text has an em dash or a spaced en dash. Every NL and EN summary is 280 characters or less (the longest is 251).
