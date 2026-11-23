# Deep Amsterdam: follow-ups on live places

Things to check or update later. Each line: place title (area): what to do.

## Will date

Most of these are also set on the live map with the "Outlook" field (`outlook`, `outlook_when`, `outlook_note`; list in `scripts/data/amsterdam-outlook-flags.json`); filter on it to review. Clear it when the change has happened.

- Hoptille (Zuidoost): Ymere decided in April 2026 to demolish; residents move out in about 1.5–2 years. Mark Gone when it goes.
- Het Wapen van Holendrecht (Zuidoost): the square is demolished from early 2027; mark Gone or update if part of it is rebuilt.
- Nelson Mandelapark and Kwaku (Zuidoost): 2026 was the last Kwaku in its current form; update when the future is known.
- Groenhoven and Gouden Leeuw (Zuidoost): renovation from September 2026, about 18 months.
- Anton de Kom monument (Zuidoost): replacement debate (artist's piece in Het Parool, January 2026); update if a decision is made.
- Perfumed with Mint (Zuidoost): Rochdale insulates the side walls from autumn 2027 at the earliest; check the mural survives.
- Boerderij Langerlust (Zuidoost): night-shelter plan on hold; update when decided.
- Lutkemeerpolder (Nieuw-West): Raad van State appeal heard 13 Nov 2026; update with the ruling.
- Graphic Surgery lines on the ACTA building (Nieuw-West): RADION's last season is 2026–2027; mark Gone if the building goes.
- Airey houses of Slotermeer, Dekeukeleire double house (Nieuw-West): municipal listing in procedure; add heritage status when decided.
- Achtergracht 48 / Singelstraat 2 (Weesp): city register says mostly demolished in 2020; check what stands.
- Vogeldorp (Noord): De Key choosing renovation vs demolition and rebuilding; update when decided.
- De Ceuvel (Noord): must leave early 2028; Skatecafé agreements until March 2028; Pllek permit status after 2025 unknown.
- Sint-Augustinuskerk, Nieuwendam (Noord): empty since 2014, apartment plan stuck; update.
- Witte Kerkje, Holysloot (Noord): renovation Nov 2026 to Mar 2027; drop the note afterwards.
- Durgerdam (Noord): dike repair deferred to a 2032 check; update if the water board decides earlier.
- Kraaipanbuurt (Oost): municipal listing in procedure; add heritage status and numbers when listed.
- Kraan 2868 (Oost): undated listing offers it for sale; check.
- Zuidergasfabriek water tower (Oost): Stadsherstel owns it since March 2026 and seeks a business tenant; update when one moves in.
- RI-Oost silos and Rialto Silo (Oost): cinema open since 5 Nov 2026; gym and restaurant towers due early 2027.

## Pins to check on site or on aerial imagery

Most of these and of "Status to confirm" are also flagged on the live map with the "Needs checking" field (`check`, `check_note`; list in `scripts/data/amsterdam-check-flags.json`). Clear the field when a place is checked.

- Iron Lady of the Bijlmer (Zuidoost): two OSM points 22 m apart; the southern one is used.
- The Botanical Garden of the Bims (Zuidoost): pinned on the Haardstee garage, wall not confirmed.
- Nelson Mandelapark and Kwaku (Zuidoost): park centre.
- Tenerife monument (Nieuw-West): pinned at the cemetery buildings, not the monument.
- Graphic Surgery lines (Nieuw-West): could be about 40 m off.
- Marbon chemical plant (Westpoort): approximate site.
- 1918 Weesp train disaster site (Weesp): approximate.
- Mosveld floodlights, Players and Supporters, Volewijck gallows field, Fokker bombing memorial, NDSM Giants (Noord): approximate.
- Graft 1–5, Drijvende Tuinen, Muiderpoort deportation memorial, 101 Namen, Zeeburgerdorp plaque (Oost): approximate.
- Oost round 2, approximate: De Titaantjes (OSM puts it 120 m east), Domweg gelukkig, Karel Appel Was Hier, Kantoorgangers, Doe je ogen even dicht, If Walls Could Speak, Katsenarie, Stenen gedicht, Vrouwe Fortuna, Aart Roos's brick relief, The London Police mural, Harck, Skatepark Zeeburgereiland, Waterbuurt West, Krop's gable stones, Amstelglorie (park centre).

## Status to confirm

- IJplein (Noord): text says the ADM yard ran 1879 to 1980; Wikipedia says founded 1877, closed 1978, bankrupt 1985. Settle.

- Animaris Rhinoceros Transport (Nieuw-West): last dated evidence 2018.
- Eendenkooi Ruigoord, Bank swallow wall Hemweg (Westpoort): still kept up?
- Rona Batho (Zuidoost): was the face stolen in 2023 replaced?
- Big Bang sculpture in Gaasperpark (Zuidoost): survived the 2026 renovation?
- Laurentiuskerk genever still (Weesp): left out; add if still running.
- Oost round 2, weakest recent evidence: Airhead #2 on the Krugerplein (2021), Beursmannetje (2022), Vrijburcht fish wall and Nautilus (2020/2023).
- Karel Appel Was Hier (Oost): the family shop may have been at Dapperstraat 17, not 7.

## Parked (user, not imported yet)

- A-list places found by the sweeps, kept off the map until the user decides what to do with A-list sights: Muziekgebouw aan 't IJ and the Bimhuis (Oost, SCOUT-3 item 228).

## Coverage plan

- Done: West, Nieuw-West, Westpoort, Weesp, Zuidoost, Noord, Oost (round 1). Noord done. Zuid and Centrum: not now; the user will deal with them separately.
- Standard: every district gets the West-standard sweeps (see the c-list-sights skill): monuments, public art and walls, war and memory, hidden history, behind the gate, modern and contested, curiosities and green, loops, then a blind quality check against West. Track them in `research/<area>/COVERAGE.md`.
- Research queue (one batch at a time so BrowserOS isn't overloaded):
  1. Oost round 2 (public art and walls; items 101–157): done 2026-11-23, 41 new places.
  2. Oost round 3 (sweeps 3–7): done 2026-11-23, 19 new places. Still open: Geheugen van Oost pass, loops, blind check.
  3. Noord (184 places) and Oost (205 places) complete for research 2026-11-23 (see their COVERAGE.md); both still need loops and a blind quality check against West. Then Nieuw-West, Zuidoost: per district, round A (public art and walls, war and memory), round B (hidden history, behind the gate, modern and contested, curiosities), then loops.
  4. Weesp and Westpoort: one combined round each.
  5. West: fill in COVERAGE.md retrospectively and sweep any gap found.
- After Amsterdam proper is done: add **Diemen** and **Ouder-Amstel (Duivendrecht)** so the map covers "greater Amsterdam" (user, 2026-11-22). They are separate municipalities, so the area hierarchy and boundary data need extending first.
