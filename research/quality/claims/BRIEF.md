# Claims check: remaining live places in every district (one batch per agent)

The user's first rule: **never make anything up.** Every claim on the map must trace to a source
the place's draft lists. Zuid has been checked; this covers the other districts' places that no pass has touched yet. A blind check of 10 Zuid places (`research/quality/blind-check-zuid-2026-11-25.md`)
found about 1.5 claims per place that no source supports: some only uncited, several embellished
(an invented quoted phrase, "almost every picture you know", "a novelty", "mostly bankers").

Input: `research/quality/claims/$AREA/in/batch-$N.json`: each live place (id, title, EN and NL summary,
body, attributes, links) and `draft` (its YAML file and full `sources:` list). Repo root:
`/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.

For every factual claim in the live text, EN and NL (summary, body, Look for lines, check_note
and outlook_note, and the attributes built, architect, listed, original_use): find it in a
source from `links` or the draft's `sources` (fetch with curl, `User-Agent: deep-cities-research/0.1`;
nl.wikipedia via its API; Amsterdam monuments API
`https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=N`; RCE register pages;
amsterdamopdekaart.nl and others as plain text). Cache fetches. No browser.

Be strict about: quotes and quoted phrases (must appear in a source), superlatives and
"first / only / almost every / mostly / a novelty / the man who", numbers, dates, heights,
denominations, motives, and words that state a fact ("secretly", "illegally", "overnight").
Wording and interpretation that a source supports is fine; don't flatten a good hook that is
sourced.

For each unsupported claim choose one: **sourced** (you found a real source: give the URL and
the supporting words), **narrowed** (reword to what the source says), or **cut**. Never add a
new fact. Change EN and NL together so they still say the same; write any new Dutch fresh (no
run of 8+ words from a source). No em dashes or spaced en dashes. Keep titles unchanged.

**Also fix copied Dutch.** Each place has `copied.runs`: runs of 8+ words its Dutch shares with a source. Rewrite those sentences fresh in Dutch (same facts, no new ones); marked quotes of inscriptions may stay. Run `python3 -B /private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/copycheck/code/nlcheck.py <your out json>` and get it to 0. **If you change an attribute** (built, architect, listed, original_use, outlook/check notes), change the Dutch one too: put it under `patch.translations.nl.attributes`. `listed` must be a number. Every summary at most 280 characters.

Write `research/quality/claims/$AREA/out/batch-$N.json`: a list with one object per place you changed:
`{"id", "title", "changes": [{"field", "old", "new", "kind": "sourced|narrowed|cut", "source", "evidence"}],
"patch": {"summary", "body", "translations": {"nl": {"summary", "body"}}, "attributes": {...only changed keys}}}`
where `patch` holds the full new text of each changed field (leave out fields you didn't change),
and `sources_add`: list of source URLs to add to the draft. Places with no change: leave them out.
Also write `research/quality/claims/$AREA/out/batch-$N.md`: counts (claims checked, sourced, narrowed,
cut), every change in one line, and anything for the user. Edit nothing else; never write to
the live site, never commit.
