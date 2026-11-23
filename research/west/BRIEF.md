# Research brief: C-list sights of Amsterdam West (one slice per agent)

You are researching one slice of Amsterdam-West for the map **Deep Amsterdam**
(slug `sights`, formerly "C-list sights of Amsterdam") on Deep Cities: "the places that don't make it
into your guidebook". Your output is a YAML file of place drafts plus a notes file.
You do **not** write to the live site and you do **not** touch app code. Other agents
work in this checkout at the same time: only create/edit **your own output files**.

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`
(paths below are relative to it).

## Read first

- `research/west/map.yaml` — valid `category` keys and `attributes` fields (types, select options).
- `.claude/skills/manage-content/SKILL.md` — "Draft conventions": tone, title, summary,
  body, links, photos.
- `scripts/data/bos-en-lommer-monuments.json` — the 22 existing places on this map
  (Bos en Lommer). **Match their style, length and depth.** They are the model.
- `research/ams-school/places/oud-west-baarsjes.yaml` — a sibling map's places with
  English + Dutch versions (`nl:` block). It is the model for the bilingual format.
  Places that also appear there (Amsterdam School buildings in West) may belong on this
  map too — write your own text for this map, but you may use it as a source.
  Don't edit anything under `research/ams-school/`.

## Input

`research/west/slices/$SLICE.json`: candidate clusters from the City of Amsterdam
monument register, filtered to your wijken. Each cluster = records sharing a complex id
or within 40 m. Each record: `monnr`, `status`, `architect`, `year_from`/`year_to`,
`use`, `listed`, `lat`/`lng` (register point), `area` (official, already computed),
`text` (official Dutch reasons text — the best source), and for rijksmonuments
`wikidata` (`qid`, `name`, `images` as Commons `Special:FilePath` URLs, `nlwiki`, `enwiki`).
For rijksmonuments also read the national register page
`https://monumentenregister.cultureelerfgoed.nl/monumenten/<monnr>` (Dutch description).

## Part 1 — every monument

Every monument in your slice should end up on the map (that is how Bos en Lommer was
done), merged sensibly:

- **Merge** sub-units into one place: a housing block listed as 12 houses is one place;
  a church + parsonage = one; a row of listed villas on one street can be one place
  when they belong together (same architect/scheme); a park's gates, lodges and bridges
  can sit in the park's place unless one is notable enough to stand alone.
- **Split** clusters that just happen to be close (a school next to a church = two).
- Pick the title people use (`Het Schip`, `Westergasfabriek`, `Hollandsche Manege`);
  otherwise a descriptive one (`Former fire station, Hoofdweg`), with a disambiguator
  in brackets when useful.

## Part 2 — the C-list beyond monuments

Then look for things in your slice that are **not** listed monuments but fit the map's
other categories: `hidden-history` (WWII sites, vanished things, stories on a wall),
`curiosities` (odd objects, gable stones, unusual street furniture), `odd-museums`,
`green` (small gardens, hidden courtyards, city farms), `food-drink` (very high bar: only places of real historic or cultural significance; no restaurants, bars or breweries that are merely good or have a nice story), `street-art` (**murals and street art** — notable,
permanent, documented murals with a known artist). Aim for roughly 5–15 such places
per slice, each with solid sources. Quality over quantity; skip anything you can't
source or locate precisely.

## Research

Use the register texts first; then Wikipedia (nl/en), Wikidata, the national register,
Amsterdam city archives (archief.amsterdam, beeldbank), amsterdam.nl, Het Schip museum,
local history sites (e.g. westerparkhistorie, oud-west history groups), and for murals
street-art databases and the artists' own sites. Fetch APIs and plain pages with `curl`
(`-H "User-Agent: deep-cities-research/0.1"`). **For web pages, prefer the BrowserOS neo
browser** (MCP tools `mcp__browseros-neo__*`; load them via ToolSearch, open your own
tab, use `run`/`read`/`grep`) — the user set it up for agents. Don't write from memory
alone. When sources conflict, prefer the official register and note the conflict.
Put downloaded raw data in `/private/tmp/claude-501/-Users-andrey--paradev-worktrees-deepcities-5f7b6710-everything-from-here-current-b8db62f6/faa44ef5-6fd6-43fb-95b0-22698d0b2cb1/scratchpad/$SLICE/`, not the repo.

## Output 1: `research/west/places/$SLICE.yaml`

A YAML list. Each item:

```yaml
- title: Het Schip                    # unique, stable (import key)
  summary: ≤280 chars hook, no "This building is…" filler
  body: |                             # Markdown, English, a few short paragraphs
    Who, when, why, what's notable. Dutch names with an English gloss on first use.

    Look for:
    - things visible from the street …
  category: housing                   # key from research/west/map.yaml
  lat: 52.390312                      # 6 decimals; register point / main entrance / the mural itself
  lng: 4.873089
  address: Oostzaanstraat 45
  links:                              # ≤6, distinct labels; registers first
    - { label: Rijksmonumentenregister (3961), url: "https://monumentenregister.cultureelerfgoed.nl/monumenten/3961" }
    - { label: Monumentenregister Amsterdam, url: "https://data.amsterdam.nl/monumenten/<city id>" }
    - { label: Wikipedia (nl), url: "https://nl.wikipedia.org/wiki/Het_Schip" }
  attributes:                         # only map.yaml keys; omit unknowns
    heritage_status: National monument   # exact option text
    monument_number: "3961"              # text; comma-separated when merged
    built: 1917–1920
    architect: Michel de Klerk
    listed: 1970                         # number
    original_use: Social housing, post office, school
    artist: …                            # murals / artworks
  photos:                             # ≤8, first = cover
    - commons:File:Het Schip Amsterdam.jpg
  sources: [ … ]                      # stripped before import; for reviewers
  nl:
    title: Het Schip
    summary: ≤280 tekens
    body: |
      Markdown in natuurlijk Nederlands …

      Let op:
      - …
    attributes:                        # only text fields that need Dutch wording
      original_use: Sociale woningbouw, postkantoor, school
    sources: [ … ]                     # Dutch-language sources used
```

- Don't repeat attribute values in the body. Area fields are computed later — omit them.
- Municipal monuments: `heritage_status: Municipal monument`. National: rijksmonument
  number. Both: "National + municipal monument". Non-monuments: omit heritage fields.
- **Bilingual. Dutch is pulled from organic Dutch material** (user's explicit wish):
  build the `nl` text out of the original Dutch wording of the sources — the city
  register's `text` (redengevende omschrijving), the national register's omschrijving,
  nl.wikipedia, Dutch local-history sites, archives, artists'/housing corporations'
  Dutch pages. Take their sentences and phrasing, trim and splice them into a readable
  place text (cut jargon-heavy inventory lists, fix flow, add the "Let op:" list from
  their details). Don't rewrite Dutch sources into your own paraphrase, and never
  produce the Dutch by translating your English. Every source you pull text from must be
  in `links` (or `nl.sources` + `links` where it fits) for attribution — the registers
  are open data, nl.wikipedia is CC BY-SA, which matches the map's CC BY-SA licence; for
  other sites pull facts and short quotes only. Only where no Dutch material exists
  (rare; e.g. an English-only artist page) write the Dutch yourself, and say so in the notes.
  The English draws on English sources where they exist, otherwise is written natively
  in English from the facts. Versions may differ in emphasis but never in facts.
  No English glosses in the Dutch.
- **Photos**: Wikimedia Commons preferred (licence auto-filled). Use Wikidata images
  (`…/Special:FilePath/X.jpg` → `commons:File:X.jpg`, URL-decoded) and
  `Category:Rijksmonument <nr>` via the Commons API. For murals, search Commons
  (Dutch freedom of panorama covers permanent public art). Other photos only with a
  clear free licence, as `{source: https://…, credit: …, license: …, sourceUrl: …}`.
  Never unclear licences. 1–3 per place, clear exterior views. Commons: ≤1 request/s,
  back off on 429. A wrong photo is worse than none.
- Body length: typically 600–2000 characters.

Validate before finishing:
`python3 research/west/scripts/validate.py research/west/places/$SLICE.yaml` — fix until 0 errors.

## Output 2: `research/west/notes/$SLICE.md`

- Merges made (which monument numbers went where), and monuments deliberately left out (should be none or very few, with reasons).
- Source conflicts and uncertainties.
- Places missing photos.
- Ideas for walking routes through your slice (ordered list of place titles + theme).

Finish with a short report: number of places (monuments vs other), what you added
beyond the register, and anything the coordinator should decide.
