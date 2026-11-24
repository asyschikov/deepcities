# Where things stand (paused 2026-11-25)

Nothing below has been written to the live site yet. Partial outputs are committed as is.

## In progress (paused mid-run)

1. **Zuid claims check** (all 331 live Zuid places). Brief: `research/zuid/claims/BRIEF.md`.
   Inputs `research/zuid/claims/in/batch-01..10.json`; outputs (partial) in `research/zuid/claims/out/`.
   Each batch: a checker writes `batch-NN.json` (patches) and `.md`, then a verifier appends
   "Verification". A batch is done only when its `.md` has a Verification section.
   Resume: re-run the workflow script (same session: `resumeFromRunId wf_ff0c1192-4ed`), or launch
   checker+verifier only for batches without a verified `.md`.
2. **Dutch pass, Oost pilot** (174 places with copied Dutch). Brief: `research/quality/dutch-pass/BRIEF.md`.
   Inputs `research/quality/dutch-pass/oost/in/batch-01..06.json`; outputs (partial) in `.../oost/out/`.
   Same done-rule (Verification section). Same session: `resumeFromRunId wf_45b8e104-183`.
   The copy checker `nlcheck.py` and its source cache live in the session scratchpad; the code is
   also in `research/quality/copycheck/` (the cache would need re-fetching in a new session:
   `fetch.py`, `plan.py`, `score.py`).

## After those finish

- **Apply** verified patches with `dc update <id> <patch> --note ...` (text only; ranks untouched),
  then copy the same text into the place's draft YAML so a later upsert doesn't revert it.
- **Show the user** a before/after for a few Oost places (Gerardus Majellakerk first) before
  applying the Dutch pass; if approved, run it for West (300), Noord (114), Nieuw-West (103),
  Weesp (79), Zuidoost (26), Westpoort (16). Bands in `research/quality/copycheck/results-2026-11-25.json`.
- **West:** one more short round to judge saturation (test 2); drafts can be behind live text
  (see FOLLOW-UPS "West drafts behind the live text"): never upsert all of `research/west/places/`.

## Decided today

- Never make anything up is rule 1; every round gets a separate fact-check before import.
- Blind checks: like-for-like samples, anchored rubric (`research/quality/rubric.md`), two reviewers.
- Saturation: fewer than 5 new, under 10%, no Amazing. Loops parked. Zuid read-only checks allowed;
  Zuid claims check approved by the user.
- Sweep each district's own neighbourhood paper and local blogs (skill, sweep 4).

## Later (unchanged)

Zuidoost rounds A and B; Weesp and Westpoort one round each; Diemen and Duivendrecht; FOLLOW-UPS.
