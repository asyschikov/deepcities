# Dutch pass: West, batch 10

All 19 places are done. Each has a new Dutch summary and body. The copy checker finds no copied 8-word runs in any of them (0 of 19 flagged). Every Dutch summary is 280 characters or fewer (the longest is 257), and every body ends with "Let op:" and the same Look for items as the English.

## Claims

I checked every claim in the English and the Dutch against these sources:

- the cached sources
- the monuments API
- a Raad van State ruling (ECLI:NL:RVS:2026:4855, from the rechtspraak open-data service)
- the city's wandkunst dataset
- nl.wikipedia (Hendrik Wijdeveld, Wendingen, A.L. van Gendt)
- Kas Keerweer's "over de kas" page
- BAG (PDOK)
- Michelin

66 claim changes, plus 2 paragraph reorders:

- **5 sourced**: a new source backs the claim, and the text stays as it was.
- **48 narrowed**: the claim now says only what the source says.
- **13 cut**.

Two places had no claim changes: Tetterode and AMVJ.

### Cuts
- **De Voortuinen**:
  - "the first building of Westerpark West".
  - "Bois & Lombre" in a slang dictionary (a web search found nothing).
  - The horse leaving the balcony in 2022.
- **Waterplein**:
  - "the braver jump off the jetty".
  - "deep water".
  - "no lifeguards".
- **Spaarndammerhart**: the jury calling it a *Gesamtkunstwerk*. Neither MOOI Noord-Holland page has the word; the jury report is an Issuu embed that could not be read.
- **Start of the Vondelstraat**: "the first street of the new villa district beyond the Singelgracht".
- **Kas Keerweer**:
  - The "1986 in the building register" passage. BAG has two non-residential buildings behind no. 19, from 1939 and from 1986, and the register does not say which one is the glasshouse.
  - The grapes being "used for jam and juice".
- **Wiegbrug**:
  - "Guests are warned about the trams" (summary).
  - Streetart Frankey's Zorro (2024).
- **Het Woeste Westen**: "51,000 visitors in 2013".
- **Sinking houses**: the October 2025 permit and "by August 2026 the steel frame reached the roof". No fetched source has either.

### Notable narrowings
- **Superlatives and absolutes**:
  - Waterplein: "West's busiest wild swimming spot" becomes "one of West's two busy wild swimming spots".
  - Het Woeste Westen: "A playground with no playground equipment" is wrong, because the site lists a raft ferry, a cableway, a group swing and a climbing course. It now says "the few play elements are only a warm-up".
  - Maria Austria: "one of the leading theatre and dance photographers" becomes "specialised in".
- **Dates**:
  - Start of the Vondelstraat: nos. 10-14 date from **1868–1869**, not 1866–1867 (register 224007). The `built` attribute is fixed to 1868–1882.
  - OT301: the Amsterdamprijs came at the end of 2006, not in 2007.
  - Kinkerbuurt: the "From 2012" hotel plan has no date now; the earliest plan in the ruling is from 2014.
  - Wolk: no commission year.
  - Van de Vijsel: no 2018–2019 dates.
  - De Voortuinen: no "January 2019".
- **Hoofdweg**:
  - "As everywhere in Plan West" is dropped.
  - The 1927 *Wendingen* issue on Amsterdam West is confirmed, but nothing says Wijdeveld published this scheme in it, so the English now says only that the issue existed.
- **Maria Austria**: her family was not all taken to Westerbork "in 1943". Her husband and sister were there earlier, and her mother and brother followed in November 1943. "Here she met Jonker" becomes "In this period".
- **De Voortuinen**:
  - "stripped to its concrete frame" becomes "took off its entire façade".
  - "black horse on a balcony" becomes "a horse in the building", as AT5 reports it.
  - The French metro map was of Amsterdam, not West.
- **Sinking houses**:
  - The marbles quote is from the upstairs neighbour, not the tenant who found the lock.
  - "Ten of twelve settled" becomes "two refused; eight others settled", as the sources say.
  - "risk of collapse" becomes "slid off their foundations".

## Hooks

The Dutch now opens with a different, sourced hook in 12 places:

- Hoofdweg (Wijdeveld only drew the façades)
- Maria Austria (forged papers behind an ordinary front)
- Jacoba van Tongeren (the code the Germans could not crack)
- Tetterode (the 1981 squat)
- De Voortuinen (the horse)
- Van de Vijsel (sheds wedged between the neighbours' walls)
- Spaarndammerhart (neighbours asked for the old street back)
- Wolk (the accidental title)
- AMVJ (early high-rise)
- Former double school (Lucebert)
- Vondelstraat 65-67 (Campert)
- Wiegbrug (the hidden figurehead)

Kinkerbuurt also opens with the framed hole.

In two places I moved English paragraphs so the English opens with the same hook: Tetterode and AMVJ. Each was a clean paragraph swap with the same text. Where a swap would have meant rewriting sentences, I left the English alone.

## For the user
- **Former double school (Lucebert)**: the sources conflict. The city register (200767) says a large Lucebert work, a St Cecilia with angels, "is in 1999 verplaatst naar een andere locatie" and belongs to the Stedelijk's Buitenbeelden collection (MA 0861). The wandkunst dataset says the 1947 mural is still in the building, incomplete, in a private flat. I kept the English and added the dataset as its source. These may be two different works; worth a check.
- **Some attributes are not in any source.** I left them as they are:
  - Vondelstraat 65-67, architect "N. Vos (attributed)". The monument API gives only "Laar, J.C. van", who was the client.
  - Wiegbrug, "1991 (Ankh)".
- **Van de Vijsel**: the gebouwdin.amsterdam.nl project page needs JavaScript, so I could not read it. It is the likely source for the dropped 2018–2019 date and the "solid-timber structure". It is worth checking by hand if you want those details back.
- **Lengths**: Dutch bodies are 166–391 words. A few go past 250 (Waterplein, Wiegbrug, Jacoba, Sinking houses, Kinkerbuurt) because the English carries that many facts.

## Verification

All 19 places checked: every claim in the new Dutch against the new English and the original texts, the Dutch against the English for fidelity, the Look for lists, lengths and dashes. The copy checker reports 0 copied runs for all 19, before and after the fixes below. Every NL and EN summary is 280 characters or fewer.

The 5 "sourced" changes were re-fetched and hold:
- Hoofdweg: nl.wikipedia Hendrik Wijdeveld ("hoofdredacteur en verzorger van de baanbrekende typografie van het tijdschrift Wendingen"); rijksmonument 531143 ("uit 1925-1926 ... het noordelijk deel van de \"stadspoort\" van Wijdeveld"). The narrowed Wendingen line also holds: the nl.wikipedia issue list has 1927, no. 6-7, "Amsterdam West".
- Start of the Vondelstraat: nl.wikipedia A.L. van Gendt lists the Concertgebouw. Register 224007 confirms 1868-1869, and also calls Redeker Bisdom Cuypers' "belangrijke partner", so the Dutch "partner" stays.
- Former double school: the wandkunst dataset (De Wittenstraat 29, Lucebert 1947) has "eerste monumentale opdracht", "het enige monumentale kunstwerk van Lucebert in Amsterdam. Het is niet compleet", "privé-appartement" and the Sint Franciscushuis chapel.
- Kinkerbuurt: ECLI:NL:RVS:2026:4855 has the 2009 and 2010 demolition, the 2009 permit for 21 homes, the 45-degree chamfered building line, the 10 July 2014 drawings and the De Hallen parking and compensation.

Dutch claims removed or fixed (not in the English or the sources):
- **Hoofdweg**, body: "De plattegronden lagen al klaar" (the plans were already finished) is not in any source; now "De plattegronden waren niet van hem". Summary: "mocht hier alleen de gevels tekenen" (was only allowed to) becomes "tekende hier alleen de gevels".
- **Maria Austria**, body hook: "werden in de oorlog valse papieren gemaakt" (forged papers were made in this house) overstated; the sources say she made the passport photos for them. Now "ontstonden in de oorlog pasfoto's voor valse papieren".
- **Jacoba van Tongeren**: "bracht ze vaak zelf rond" (delivered) becomes "vervoerde ze vaak zelf" (carried), as in the English.
- **De Voortuinen**: "de buurt had meteen een naam" (at once) loses "meteen".
- **Waterplein**: "Bewoners kozen in een enquête" (a survey) is not in any source, which says only that the square was made with the residents; now "De bewoners mochten meebeslissen".
- **Van de Vijsel**: "klemde de architect zijn hout er gewoon tussen" credited the architect; the register says only that the timber is clamped between the brickwork. Now passive: "werd het hout er gewoon tussen geklemd".
- **Spaarndammerhart**: "met Het Schip van De Klerk voorop" (foremost) becomes "waaronder" (among them), as in the English. "Martijn Sandberg metselde een tekst" (laid the bricks himself) becomes "liet ... een tekst inmetselen".
- **Wolk**: the hook "De titel is een vergissing" (a mistake) goes beyond the sources, which say the working title became the official one; now "De titel was nooit als titel bedoeld".
- **Sinking houses**: "kregen ieder apart een nieuwe" (each got a new foundation) becomes "lieten hun fundering een voor een herstellen" (repaired), as in the English. The Dutch had dropped that the two tenants went to court; it is back ("De twee stapten naar de rechter").

Dashes: two live English summaries (Hoofdweg, Spaarndammerhart) had spaced en dashes. They are now patched with a colon and with parentheses; the words are unchanged.

Totals: 19 places verified, 12 Dutch claims removed or fixed in 9 places, 0 copy runs fixed (none found).
