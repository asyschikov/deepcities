# Claims check: westpoort batch 01

Places checked: 3. Places changed: 3.
Claims checked: about 85 (EN and NL, summary, body, Look for, check_note, attributes).
Sourced: 1. Narrowed: 15 (3 of them full fresh NL rewrites). Cut: 6.
Copy checker (nlcheck.py): 0 copied sentences in all three places. Also checked by hand against the port NL route page, Parool, De Gierzwaluw, De Orkaan, TTM, Arcam and De Westkrant: no 8-word runs.

## Changes

Ceres Paragon terminal and its indented berth
- summary: "a 400-metre slip cut into the quay in 2001" -> "a slip cut into the quay around 2000" (narrowed: nl.wikipedia Amerikahaven gives 540 m and ready in 2000; Loadstar "turn of the millennium"; De Orkaan "in 2000 opgeleverd")
- body: dropped "635 metres" and "400-metre" (narrowed: they rest only on an academia.edu search snippet I could not reach; nl.wikipedia gives 615 m and 540 m)
- body: "425,000 containers" -> "425,000 TEU (twenty-foot container units)" (narrowed: Loadstar "425,000teu")
- body: added "the city put 280 million guilders into the project" (sourced: De Orkaan, nl.wikipedia; it was already in live NL, so EN and NL now match)
- NL: cut "stak 95 miljoen in de containerkranen" (nl.wikipedia: the 95 million was Ceres's own share)
- NL: cut "Het duurde een jaar voor het eerste schip..." (only in NHD; nl.wikipedia says one test ship came in three years)
- NL summary and body rewritten fresh to mirror EN (live NL copied Parool word for word, e.g. "Eind 2012 werden vier van de negen oranje havenkranen verkocht"; Parool was missing from the checker cache). The NHD line "symbool voor verkeerde investeringen" went; the Loadstar "witte olifant" covers it.

Bank swallow wall, Hemweg
- summary: "every natural bank has been paved" -> "a port of paved quays" (narrowed: the port's page says Afrikahaven banks are kept steep for martins)
- body: cut "the smallest European swallows" (no source)
- body: "sand containing about 15 percent loam" -> "ideally with 15 percent loam" (narrowed: Gierzwaluw "bij voorkeur 15% leem")
- body: "played recordings" -> "planned to play recordings" (narrowed: Gierzwaluw says "gaan we ... experimenteren", a plan)
- Look for: "between April and August" -> "in spring and summer" (narrowed: no source gives August)
- NL body rewritten fresh (it copied the port's NL route page nearly sentence by sentence; that page was missing from the checker cache)

Houtveemloods
- summary: "as the most modern wood store in the world" -> "billed at its opening as the most modern in the world" (narrowed: a description given at the time)
- body: "For centuries ... handled twice ... floated to rows of low drying sheds" -> late sixteenth century, small barges, low sheds open on two sides (narrowed)
- body: cut "a canal dug for the purpose" and "A railway siding completed the set" (not in any source I could reach)
- body: "one of the big post-war rebuilding projects, alongside Schiphol and the Hemweg power station" -> "a symbol of post-war rebuilding" (narrowed: Arcam; Schiphol and Hemweg had no source)
- body: "among the largest sheds in Amsterdam, with room for 50,000 m3" -> "up to 50,000 m3 could pass through it" (narrowed: NL "doorgevoerd" means throughput; "largest" had no source)
- body: "newspapers of the 1950s loved the smells..." -> "the strong smells caught people's imagination, as did the chain marks" (narrowed: no source names newspapers)
- body: cut "partly clad" (no source); the shed served as "a terminal and general store"
- NL summary: cut "Een van de meest indrukwekkende loodsen" (superlative, no source); rewritten to match EN
- NL body rewritten fresh (it had a copied Arcam run, "gebruikt voor de opslag van bijvoorbeeld cacao en pallets", and otherwise tracks the city page closely)

## For the user

- Sources I could not reach without a browser: amsterdam.nl Erfgoed van de Week (403 bot block, not in the Wayback Machine), Noordhollands Dagblad 2015 (Cloudflare block, not archived), academia.edu (403). Port of Amsterdam, Parool and Liftech were read from the Wayback Machine.
- Kept, but only from those unreachable sources (the westpoort research notes say they were read): Ceres "some 80 metres tall", "three for Tenerife and two for Gdańsk", "cranes once dominated the skyline"; Houtveemloods "6 July 1950 by Queen Juliana", "7 million guilders", "11-metre-deep", the crane counts and 7.5 t, "100 by 150 metres", "50,000 m3", "more than 500 kinds of timber", the elephants and smells, "not open to the public".
- Conflict: Houtveemloods size. The city page gives 100 by 150 m (per notes); Arcam and De Westkrant both give 160 by 160 m. I kept the city figure; worth a look in a browser.
- "Westpoort's only listed monument" rests on the scout's register query (research/westpoort/SCOUT.md), not a cited page. Kept.
- Draft additions: nl.wikipedia Amerikahaven; Liftech via web.archive.org (the live Liftech URL now redirects to a generic page).

## Verification

Checked all 3 changed places, EN and NL, against fresh fetches: nl.wikipedia Amerikahaven (raw), De Orkaan, The Loadstar, TTM, Parool and Port of Amsterdam EN/NL route pages (Wayback), Liftech (Wayback), De Gierzwaluw PDF, Arcam, De Westkrant, the monuments API. amsterdam.nl and NHD are still blocked and not archived.

- Confirmed the one "sourced" change: De Orkaan "de gemeente Amsterdam investeerde 280 miljoen gulden in het project"; nl.wikipedia "bereid 280 miljoen gulden te investeren".
- Confirmed the narrowings: nl.wikipedia 540 m slip, 615 m conventional berths, "Het aandeel van Ceres zou 95 miljoen gulden bedragen", ready in 2000, one test ship in three years; Loadstar "425,000teu in 2008"; Gierzwaluw "bij voorkeur 15% leem" and "gaan we ... experimenteren met geluiden"; port page on the Afrikahaven banks; Arcam "vertegenwoordigt de wederopbouw".
- Cuts spot-checked, none restored: no reachable source supports "smallest European swallows", "April to August", 635 m / 400 m, "a year before the first ship", Schiphol and Hemweg power station, "dug for the purpose", the railway siding, "among the largest", "partly clad", 1950s newspapers.
- No new unsourced claim found in the new EN or NL text.
- Fix (Hemweg, EN and NL body): "the journal reported the wall as new in 2001, when the port handed it to the club" -> the journal (August 2002) says Amsterdam has had it since 2001 and that the port gave it to the club. The journal is from 2002 and gives no date for the gift.
- Fix (Houtveemloods, NL body): "kettingsporen op de stammen" said where the marks were, which no source says; reworded to "de kettingsporen: met kettingen hadden olifanten de stammen uit het oerwoud getrokken". A first rewording copied 8+ words from the city text (via the old NL), so it was redone.
- Fix (Houtveemloods, NL summary): "het enige monument in Westpoort" -> "het enige beschermde monument in Westpoort", to match EN "only listed monument".
- nlcheck.py: 0 copied runs in all three. I also checked by hand against the fetched Parool, port NL page, De Orkaan, Arcam, De Westkrant, De Gierzwaluw, nl.wikipedia and TTM, and against the old live NL as a proxy for the blocked city page: no 8-word runs except the map's own Look for lines.
- No em dashes or spaced en dashes. Summaries are at most 271 characters. Titles are unchanged. No attributes changed.
