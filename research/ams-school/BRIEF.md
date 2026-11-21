# Research brief: Amsterdam School places (one geographic slice per agent)

You are researching one geographic slice of Amsterdam for a new collaborative map,
**Amsterdamse School** (the Dutch brick-expressionist architecture, c. 1911–1940), on
Deep Cities. Your output is a YAML file of place drafts plus a notes file. You do
**not** write to the live site and you do **not** touch app code.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`
(all paths below are relative to it). Another agent is editing app code in this
checkout at the same time: only create/edit **your own two output files**.

## Read first

- `research/ams-school/map.yaml` — categories (valid `category` keys) and custom fields
  (valid `attributes` keys, types, select options).
- `.claude/skills/manage-content/SKILL.md` — "Draft conventions" section: tone, title,
  summary, body, links, photos rules. Follow it.

## Input

`$SLICE_JSON` (path given in your prompt): candidate clusters from three sources,
already merged and filtered to your area. Each cluster = records within 60 m of each
other or sharing a monument number. Each record has `src`:

- `city` — City of Amsterdam monument register. `text` = the official reasons/description
  (Dutch; best source for bodies). `monnr`, `status`, `architect`, `client`, `year_from`,
  `year_to`, `use`, `listed` (designation year), `lat`/`lng` (register point).
- `rce` — national register (rijksmonument). `text` = official description (Dutch).
- `wikidata` — `qid`, `name`, `architect`, `images` (Commons `Special:FilePath` URLs),
  `nlwiki`/`enwiki`, `monnr` (rijksmonument number if known), `via` (`style` = tagged
  Amsterdam School; `architect` = by an AS architect but style not tagged).
- `area` — official stadsdeel / gebied / wijk (already computed; you don't need to set
  area fields).

## Curate — this is the real work

The candidates are noisy. Decide per record:

- **Include** genuine Amsterdam School works with something to see: designed in the
  style (incl. the sober "verstrakte" phase and clear precursors/late examples), or a
  significant AS addition (e.g. a notable AS shopfront or bridge rebuild) — judge by
  the register text and sources, not by the keyword match.
- **Exclude** false positives, e.g. text matched only because of the bibliography
  "Inventarisatie van Amsterdamse **school**gebouwen" (= Amsterdam *school buildings*),
  19th-century buildings that only got a small AS door/fanlight/interior, post-war
  buildings merely "next to" AS blocks, architects' biographies that mention the style.
  Exception: post-war or transitional works explicitly described as (late) AS can go in
  with `style_phase: Late`.
- **Merge** sub-units into one place: a housing block listed as 12 separate houses is one
  place; a garden village (tuindorp) with 60 listings becomes 1–3 places (e.g. the
  central square, a notable school/bathhouse). A church + parsonage = one place.
- **Split** clusters that merely happen to be close (a school next to a church = two places).
- **Add missing** important AS works in your slice that aren't in the candidates (e.g. a
  Piet Kramer bridge with a Wikipedia article, a known block from the literature) —
  only with a verifiable source and coordinates.

No quota: include everything that genuinely qualifies, merged sensibly. Expect roughly
15–45 places per slice depending on density.

## Research each place

Use the register texts first; then Wikipedia (nl/en), Wikidata, the national register page
`https://monumentenregister.cultureelerfgoed.nl/monumenten/<nr>`, Het Schip museum
(hetschip.nl), Amsterdam city archives (archief.amsterdam) and other solid sources.
Fetch with `curl` (send `-H "User-Agent: deep-cities-research/0.1"`) or WebFetch/WebSearch.
A BrowserOS neo browser is available via MCP if a page truly needs a real browser.
Don't write from memory alone; when sources conflict (dates are common), prefer the
official register and mention the conflict in your notes.

## Output 1: `research/ams-school/places/$SLICE.yaml`

A YAML list. Each item:

```yaml
- title: Het Schip                    # name people use; unique; stable (import key)
  summary: ≤280 chars hook, no "This building is…" filler
  body: |                             # Markdown, English, a few short paragraphs
    Who, when, why, what's notable. Dutch names with an English gloss on first use.

    Look for:
    - things visible from the street …
  category: housing                   # key from map.yaml
  lat: 52.390312                      # 6 decimals; register point / main entrance
  lng: 4.873089
  address: Oostzaanstraat 45          # main address(es), ≤200 chars
  links:                              # ≤6, distinct labels; registers first
    - { label: Rijksmonumentenregister (3961), url: "https://monumentenregister.cultureelerfgoed.nl/monumenten/3961" }
    - { label: Wikipedia (nl), url: "https://nl.wikipedia.org/wiki/Het_Schip" }
    - { label: Wikidata, url: "https://www.wikidata.org/wiki/Q1616115" }
  attributes:                         # only map.yaml keys; omit unknowns
    heritage_status: National monument   # exact option text
    monument_number: "3961"              # text
    built: 1917–1920
    architect: Michel de Klerk
    client: Woningbouwvereniging Eigen Haard
    artists: Hildo Krop
    style_phase: Expressive
    original_use: Social housing, post office, school
    listed: 1970                         # number (designation year)
  photos:                             # ≤8, first = cover; Wikimedia Commons only
    - commons:File:Het Schip Amsterdam.jpg
  sources:                            # stripped before import; for reviewers
    - city:… / rce:… / wd:… ids you used, plus URLs
```

- Don't repeat attribute values in the body.
- Municipal monuments: `heritage_status: Municipal monument`, number from the city record.
  National: the rijksmonument number. Both: "National + municipal monument".
- **Photos**: Commons only (licence auto-filled on import). Use the Wikidata `images`
  (convert `…/Special:FilePath/X.jpg` → `commons:File:X.jpg`, URL-decoded), and for
  rijksmonuments look in `Category:Rijksmonument <nr>` via the Commons API
  (`https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Rijksmonument_<nr>&cmtype=file&cmlimit=20&format=json`).
  Prefer clear exterior views; 1–3 per place. Commons is rate-limited: at most ~1
  request/second, back off on 429.
- Body length: typically 600–2000 characters. Concrete, plain English. Name the
  sculptors (Hildo Krop, John Rädecker, Joseph Mendes da Costa…) and housing
  associations when known.

Validate before finishing:
`python3 research/ams-school/scripts/validate.py research/ams-school/places/$SLICE.yaml`
— fix until 0 errors.

## Output 2: `research/ams-school/notes/$SLICE.md`

- Excluded candidates, one line each with the reason (cite record id).
- Source conflicts and uncertainties.
- Places missing photos.
- **Material for map-level documents** (the map will also carry essays): notable stories,
  architect facts, themes (e.g. Public Works schools, Kramer's bridges, housing
  associations, sculpture), with source URLs. A few bullet points is fine.

Finish with a short report: number of places, how many from which sources, what you added
beyond the candidates, and anything the coordinator should decide.

## Bilingual content: English **and** Dutch (added requirement)

Every place needs an English version (the top-level fields) **and** a Dutch version
under `nl`. The site will show both later; for now only English is imported.

```yaml
  nl:
    title: Het Schip                  # the Dutch name people use (often = English title)
    summary: ≤280 tekens, de haak
    body: |
      Markdown in natuurlijk Nederlands …

      Let op:
      - …
    attributes:                        # only text fields that need Dutch wording
      original_use: Sociale woningbouw, postkantoor, school
      client: Woningbouwvereniging Eigen Haard
    sources:                           # Dutch-language sources used for the Dutch text
      - https://nl.wikipedia.org/wiki/Het_Schip
```

- **Write each language natively from sources in that language — do not translate.**
  Dutch: build it from Dutch originals — the register texts (`redengevende omschrijving`,
  RCE `omschrijving`), nl.wikipedia, Het Schip museum, Amsterdam archives, Dutch
  literature — in your own natural Dutch wording (short quotes with attribution are fine;
  don't paste register text wholesale). English: draw on English-language sources where
  they exist (en.wikipedia, English publications/museum pages); where there are none,
  write it natively in English from the facts, not as a sentence-by-sentence
  rendering of the Dutch.
- The two versions may differ in emphasis and detail, but must not contradict each other
  on facts (dates, names, numbers).
- Keep Dutch terms un-glossed in the Dutch text (no "(coal scuttle)"-style glosses).
- Put the English-language sources in the top-level `sources` and the Dutch ones in
  `nl.sources`.
- `validate.py` now requires `nl` on every place.
