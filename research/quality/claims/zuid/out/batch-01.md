# Claims check: zuid batch 01

Places checked: 2. Places changed: 2.
Claims checked: about 58 (EN and NL text, Look for lines, check_note, built, architect, listed, original_use).
Unsupported claims: 5 (sourced 0, narrowed 3, cut 2). Copied Dutch runs fixed: 6 (3 per place).
Copy checker (nlcheck.py on out/batch-01.json): 0 copied sentences in both places.

## Henrick de Keijserplein, the playground the neighbours built (w73h1joyrjeppuz69r5mm46y)
- narrowed: "Since 2016 neighbours run the clubhouse as a community house" became "In 2016 neighbours started organising activities in the clubhouse again; today it is a community house" (Pijp Krant 2017: activities again since last year by residents; Pijp Krant 2025: former clubhouse is now a community house). NL to match.
- copy fix: the quoted association name (NL copied it word for word) is now given as its aim, in EN and NL: "an association whose name stated its aim: to obtain a children's playground in District V".
- copy fix (NL only): swings/seesaw/sandpit sentence and the 1963 ice rink sentence rewritten.

## Electricity substation with the director's flat, Jacob Obrechtplein (mxpgpm642n8abzfnudl2kvro)
- narrowed: "built by the city's Public Works department" became "built ... to a design by" (amsterdamopdekaart: "Ontwerp: Publieke Werken"). NL to match.
- narrowed: director lived "around the corner" became "close by" (source: "vlakbij"). NL "om de hoek" became "dichtbij".
- cut: first name "Floor" of alderman Wibaut (no listed source gives it).
- cut: "it is not open" / "je kunt er niet in" (no source; check_note already flags present use as unconfirmed).
- copy fix (NL only): the service building sentence, the showroom sentence and Wibaut's answer rewritten.

## For the user
- Everything else in both places traced to the listed sources (Pijp Krant 2025 and 2017, nl.wikipedia, amsterdamopdekaart, monuments API: listed 2013-03-26, Publieke Werken, 1923 to 1925).
- "Hunger Winter of 1944–1945": the source says only "hongerwinter"; the years are the standard dates for it and were left in.
- Monuments API gives the commissioning party for 222016 as "Christelijke School Vereeniging Aeneas Mackay" and original function "wonen", which looks like a register error for this substation; not used.

## Verification
- Places verified: 2. Fixes needed: none; batch-01.json left unchanged.
- New text against old, EN and NL: no claim added beyond the old text except the narrowed clubhouse line, which the sources back (Pijp Krant March 2017: "sinds vorig jaar worden er weer activiteiten georganiseerd door een aantal enthousiaste buurtbewoners"; Pijp Krant 2025: "Het voormalig clubhuis is nu een gezellig buurthuis").
- Narrowings confirmed against amsterdamopdekaart (fetched): "Ontwerp: Publieke Werken"; "hij woonde immers al vlakbij".
- Cuts spot-checked: amsterdamopdekaart names only "Wethouder Wibaut" (no first name), and no listed source says whether the building is open; nothing to restore.
- EN and NL state the same facts; no attributes changed.
- nlcheck.py: 0 copied sentences in both places. No em dashes or spaced en dashes; summaries unchanged (max 254 characters); titles unchanged.
