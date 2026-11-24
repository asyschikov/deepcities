# Brief: Jewish Heritage of Amsterdam, documents and walks

The map is live: deepcities.org/amsterdam/jewish (slug `jewish`), 202 places listed in
`research/jewish/map-places.json` (id, exact title, era, theme, status, area, pin, summary).
Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Read first: `research/jewish/SHORTLIST.md` (the documents and walks the user picked),
`research/jewish/scouts/SCOUT-D.md` (outlines, sources and walk plans), `research/jewish/SOURCES.md`
(the source library, per document and per neighbourhood), the "Documents" and "Routes" sections of
`.claude/skills/manage-content/SKILL.md` (file format and dialect), and `research/jewish/BRIEF.md`
(rules; read its final Update section twice). Place texts: `cd /Users/andrey/projects/deepcities/.claude/worktrees/agent-a3f2f45d176b45242 && pnpm -s dc place <id> --map jewish` (read only).

## Rules (all of them matter)

- **Mainstream, authoritative history only.** The user: "stick to mainstream history, and
  authoritative facts and stories; there is no shortage anyway." Every fact that matters rests on an
  authoritative source: museums and memorial institutions (JCK, Holocaust Museum, Anne Frank House,
  Joods Monument, 4en5mei), NIOD, Stadsarchief, registers, published histories (Presser, De Jong,
  Bregstein & Bloemgarten, Stigter's Atlas, Wallet et al., Hagoort, Ons Amsterdam, Amstelodamum,
  Studia Rosenthaliana), serious press. Wikipedia, joodsamsterdam.nl, blogs and tour sites may lead
  you but never carry a fact alone. Leave out anything you can't back; no exceptions for good stories.
  Where sources give different numbers, give the range or the institution's figure.
- **Tone**: plain, concrete, factual; neither sensational nor evasive. Name victims and perpetrators
  where sources do; never living private people. No graphic detail for effect. No hype.
- **Bilingual, both native**: English `NN-<slug>.md` and Dutch `NN-<slug>.nl.md` written from Dutch
  sources, not translated. Facts agree; emphasis may differ.
- **Never an em dash**, nor a spaced en dash used as one. Never mention the research process.
- **Links to places**: `[text](place:Exact title)` with titles copied exactly from map-places.json.
  Link generously, but only places on this map. `[text](doc:Exact title)` between documents.
- **Pictures**: Commons only with a clear licence (`![Caption](commons:File:X.jpg)`), on their own
  line; 1 to 4 per essay; historic public-domain photos from the Stadsarchief/Nationaal Archief sets
  on Commons are ideal. Verify each file exists (Commons API) before using it. None beats a wrong one.
- No live writes, no commits, no subagents. curl `User-Agent: deep-cities-research/0.1`.
  Browser: BrowserOS neo, one tab of your own, name your session, close it at the end.

## Documents (`research/jewish/docs/`)

Front matter: `title`, `summary` (≤400 chars), `attach: {map: true|false, places: [exact titles]}`,
`photos` (cover first). `map: true` only for 01 and a handful of the essential essays (01, 02, 09,
14, 16). Attach each document to the places it is mainly about (not every place it mentions).
Dutch files: front matter `title` and `summary` only.
Length: essays 900 to 1,600 words; biographies 600 to 1,000. Headings (`##`) every few paragraphs.
End each with a short `## Sources` list (authoritative works, with links where public).
Notes per document (sources per claim, what you left out and why) in
`research/jewish/notes/docs-<range>.md`.

## Walks (`research/jewish/routes/`)

One JSON file per walk in the `dc route-create` shape (manage-content "Routes"), with
`translations.nl` on the route, on each stop (`narration`) and each leg (`directions`). Stops are
places from map-places.json, by id; ad-hoc points only for a start (a station exit) or a viewpoint.
Narration: what to look at from here and how it fits the walk's story, 2 to 5 sentences; don't retell
the place's own text. Body: start, end, length, time, public transport, accessibility, Shabbat and
holiday closures where relevant. Check the order on a map (no doubling back). Same sourcing rules.
