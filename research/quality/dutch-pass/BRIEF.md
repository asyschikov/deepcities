# Dutch pass: fresh Dutch, checked claims (one batch per agent)

Why: a measurement (2026-11-25) found that 31% of the map's Dutch sentences share a run of 8+
words with a source (nl.wikipedia, the monument registers, Kunstwacht). That is a licence
problem (Wikipedia is CC BY-SA) and it reads like an encyclopedia. Zuid, written fresh, is at
2% and reads best. The user does not read Dutch well and leaves the Dutch to us; their rules,
in order: **never make anything up**, fidelity, then interesting and exciting.

Input: `research/quality/dutch-pass/$AREA/in/batch-$N.json`: each place's live EN and NL text,
attributes, links, the draft's full `sources:` list, and `copied` (the copied runs found).
Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/documents-b8db62f6`.

For each place:
1. **Check the claims first** (EN and NL: summary, body, Look for, notes fields): every claim
   must be in a source from `links` or `sources` (fetch with curl, `User-Agent:
   deep-cities-research/0.1`; nl.wikipedia via its API; monuments API
   `https://api.data.amsterdam.nl/v1/monumenten/monumenten/?monumentnummer=N`). Strict on
   quotes, superlatives, "first/only/almost every/mostly", numbers, dates, motives. An
   unsupported claim is sourced (give URL and evidence), narrowed to the source, or cut, in
   both languages. Never add a new fact.
2. **Write the Dutch summary and body fresh**: hook first (the most surprising sourced fact),
   plain, concrete, a little wry, native Dutch (not a translation of the English), about
   150–250 words, ending with "Let op:" and the same Look for items as the English. Same facts
   as the English, no more, no fewer. No run of 8+ words from any source (names, titles,
   addresses and marked quotes of inscriptions excepted). No em dashes or spaced en dashes.
3. Touch the English only to fix claims (step 1), or to move a buried hook up if the Dutch
   now leads with it (reorder only, same facts).
4. Check your Dutch with the copy checker:
   `python3 -B /private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/7a116976-676c-45d3-a727-63149166d721/scratchpad/copycheck/code/nlcheck.py <your out json>`
   (it prints any copied runs per place); rewrite until it reports 0 copied for every place.

Write `research/quality/dutch-pass/$AREA/out/batch-$N.json`: one object per place:
`{"id", "title", "changes": [{"field", "old", "new", "kind": "sourced|narrowed|cut|reordered", "source", "evidence"}],
"patch": {"translations": {"nl": {"summary", "body"}}, "summary"?, "body"?, "attributes"?}, "sources_add": [...]}`
(`patch` holds the full new text of each changed field; the NL summary and body are always
there; `changes` lists claim changes only, not the Dutch rewrite itself). Also write
`.../out/batch-$N.md`: claims checked, sourced/narrowed/cut, places whose hook changed, anything
for the user. Edit nothing else; never write to the live site, never commit.
