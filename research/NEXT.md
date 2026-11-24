# Where things stand (paused 2026-11-25)

Nothing below has been written to the live site yet. Partial outputs are committed as is.

## Status (2026-11-25, night)

- **Dutch pass and claims check done for the whole map, all live, drafts synced:**
  Zuid claims check (301 places), Dutch pass in Oost (174), West (262), Noord (114),
  Nieuw-West (103), Weesp (79), Zuidoost (26), Westpoort (16). Every batch had a rewriter
  and a separate verifier; reports with a Verification section in
  `research/quality/dutch-pass/<area>/out/*.md` and `research/zuid/claims/out/*.md`.
- Tools: `research/quality/dutch-pass/tools/apply2.py` (staleness guard, 280-char check),
  `tools/sync.py` (writes applied patches into drafts). Places that were only on the live
  site now have drafts in `research/<area>/places/live-only.yaml`.
- **Flags from the agents, worth a look later** (in the .md reports): source conflicts for the
  Deli warehouses' architect, the Stenen Silo listing year and the Volkskoffiehuis architect
  (West batch 03); Boerderij Ons Genoegen burned in 2024 (West 02); Kadoelenweg 306 dated 1890
  by the city register (Noord 02); a dead Lobke Alkemade link (West 02).
- **Next:** re-run the copy checker over the whole map to confirm; then the West short round,
  Zuidoost rounds A and B, Weesp and Westpoort rounds, Diemen and Duivendrecht.

## Decided today

- Never make anything up is rule 1; every round gets a separate fact-check before import.
- Blind checks: like-for-like samples, anchored rubric (`research/quality/rubric.md`), two reviewers.
- Saturation: fewer than 5 new, under 10%, no Amazing. Loops parked. Zuid read-only checks allowed;
  Zuid claims check approved by the user.
- Sweep each district's own neighbourhood paper and local blogs (skill, sweep 4).

## Later (unchanged)

Zuidoost rounds A and B; Weesp and Westpoort one round each; Diemen and Duivendrecht; FOLLOW-UPS.
