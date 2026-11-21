# Brief: map-level documents for the Amsterdamse School map

The map has 282 places. Documents add the stories that don't fit a single place:
essays, biographies and guides, shown on the map's front panel ("Read about this map")
and under "Further reading" on every place they're attached to. Opening a document
highlights its places on the map.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Only create your own files in `research/ams-school/documents/`. Don't touch app code
or other research files.

## Read first

- `research/ams-school/notes/*.md`: the slice agents' notes. Each has a "material for
  map-level documents" section with stories, themes and source URLs. This is your
  starting material, but verify claims against the sources before using them.
- `research/ams-school/places-index.yaml`: every place (English title, Dutch title,
  category, built, architect, artists, first photo). Link and attach places using
  these **exact English titles**.
- `research/ams-school/places/*.yaml` for detail on specific places, when needed.

## Two languages, both native

Each document is a pair of files:

- `documents/<slug>.md`: English, with front matter (format below).
- `documents/<slug>.nl.md`: Dutch, with front matter containing only `title` and `summary`.

**Write each language natively from sources in that language. Do not translate.**
- Dutch: draw on Dutch originals. Good sources include nl.wikipedia, the register texts,
  Het Schip museum (hetschip.nl), the Amsterdam city archives (archief.amsterdam), the
  RKD, Dutch architecture literature and newspapers via Delpher where reachable.
- English: draw on English-language sources where they exist: en.wikipedia, English
  museum pages, and English-language publications on the Amsterdam School and
  Wendingen.
- The two versions may differ in emphasis, examples and length. They must not
  contradict each other on facts.
- Same structure is fine; parallel sentences are not the goal.
- Dutch text: no English glosses. English text: Dutch terms glossed on first use.

## File format (English file)

```markdown
---
title: Michel de Klerk (1884–1923)
summary: One or two sentences, ≤400 characters.
attach:
  map: true                        # true for all map-level essays
  places: [Het Schip, De Dageraad]  # exact English place titles (≤200)
photos:                            # optional cover/gallery; first is the cover
  - commons:File:Some file.jpg
---
Markdown body.
```

The Dutch file:

```markdown
---
title: Michel de Klerk (1884–1923)
summary: Een of twee zinnen.
---
Nederlandse tekst.
```

## Markdown dialect (both languages)

- Headings use `##` and `###`.
- Supported: `**bold**`, `*italic*`, `-` and `1.` lists, `>` quotes and `---` rules.
- External links: `[text](https://…)`. Cite sources this way at the end, under a
  `## Sources` / `## Bronnen` heading.
- Place links: `[Het Schip](place:)` (empty target = the link text is the exact place title),
  or `[the third block](place:Het Schip)` (target = exact **English** place title; spaces
  and brackets are fine, e.g. `[het badhuis](place:Badhuis Boerhaaveplein (Badhuistheater))`).
  In Dutch files, use natural Dutch link text with the English title as target.
- Links to other documents: `[text](doc:Exact English document title)`, in both languages.
- Pictures go **on a line of their own**: `![Caption](commons:File:Exact name.jpg)`.
  Wikimedia Commons only, and verify the file exists. Use 1–4 per document. Commons
  rate-limits: keep requests ≤1 per 2 s and back off on HTTP 429. Prefer files already
  in `places-index.yaml` (`photo`), which are known to exist.
- No HTML and no tables.

## Style

- Plain, concrete and readable for a curious visitor on foot.
- About 600–1,500 words per language. Use short paragraphs and subheadings.
- Link places generously, whenever a place on the map is mentioned.
- Facts must come from sources (no writing from memory alone). When sources conflict,
  say so briefly.
- Treat sensitive history with care: the persecution of Amsterdam's Jews, and the
  ethnic stereotypes in some sculpture (e.g. Vierwindstrekenbrug). Be factual and
  neither sensational nor evasive.

## Validate

For each `<slug>.md` file, check:
- Its `<slug>.nl.md` sibling exists.
- Every `place:` link and every `attach.places` entry is an exact title in `places-index.yaml`.
- Every `commons:File:` exists.

A quick script is fine. Report any titles you couldn't match.

## Report

Finish with a short report:
- Documents written (slug, both titles, word counts).
- Places attached.
- Main sources per language.
- Anything uncertain.
