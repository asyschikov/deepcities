# Where things stand (paused 2026-11-25)

Nothing below has been written to the live site yet. Partial outputs are committed as is.

## Status (2026-11-25, evening)

- **Done and live:** Zuid claims check (301 places changed), Oost Dutch pass (174 places).
  Drafts synced (`research/quality/dutch-pass/tools/sync.py`), patches applied with a
  staleness guard (`tools/apply2.py <dir> <note>`; summaries must be at most 280 characters).
- **Running:** West Dutch pass, 262 places (`research/quality/dutch-pass/west/`); round 4 places
  were left out (already written fresh and fact-checked). 65 West places have no draft: after
  applying, add drafts for them or refresh `scripts/data/amsterdam-west-live-only-*.json`.
- **Next:** Noord (114), Nieuw-West (103), Weesp (79), Zuidoost (26), Westpoort (16): same
  brief, export with the snippet in this session's history (flagged bands from
  `research/quality/copycheck/results-2026-11-25.json`), rewrite+verify pipeline, apply, sync.

## Decided today

- Never make anything up is rule 1; every round gets a separate fact-check before import.
- Blind checks: like-for-like samples, anchored rubric (`research/quality/rubric.md`), two reviewers.
- Saturation: fewer than 5 new, under 10%, no Amazing. Loops parked. Zuid read-only checks allowed;
  Zuid claims check approved by the user.
- Sweep each district's own neighbourhood paper and local blogs (skill, sweep 4).

## Later (unchanged)

Zuidoost rounds A and B; Weesp and Westpoort one round each; Diemen and Duivendrecht; FOLLOW-UPS.
