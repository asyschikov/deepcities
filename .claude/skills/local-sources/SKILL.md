---
name: local-sources
description: Scout the informal sources for Deep Cities maps (neighbourhood papers, residents' and history-society sites, small blogs, local news, forums, archives) rather than Wikipedia and official registers, to find what locals know, love and fight about. Use when scouting or researching a neighbourhood or district for local voice, when a brief asks for local papers or blogs, when checking whether a place still exists or what it is used for now, or when registers and Wikipedia have run dry.
---

# Scouting informal sources

Registers and Wikipedia say what a building *is*. Local sources say what it *means*: the
nickname, the fight to save it, the neighbour who cleans the statue every Monday, the café
that closed last spring. Deep Cities maps need both. This skill is about the second kind.

It complements [c-list-sights](../c-list-sights/SKILL.md) (what goes on the map) and
[manage-content](../manage-content/SKILL.md) (how it gets there). The examples are from
Amsterdam; the method works for any city.

## What counts as a source

**Use**, in roughly this order of value:

1. **Neighbourhood papers** (*wijkkranten*, *buurtkranten*): written by residents, decades
   of archives, often as PDFs. The richest single source of local voice.
2. **Residents' organisations and wijkcentra**: news archives, campaigns, petitions.
3. **Local history societies and heritage trusts**: their magazines, house pages, walks.
4. **Local news**: city papers and regional TV sites (dated, named sources; good for status).
5. **Small blogs** in both the local language and English: a resident's photo blog, a
   historian's WordPress, an expat who walks every street.
6. **Newspaper archives** (Delpher in NL): for old events a local paper only mentions.
7. **Forums** (Reddit and the like): **leads only**, never a source for a fact.

**Don't use as sources**: official tourism portals (iamsterdam and the like), hotel and tour
operator blogs, TripAdvisor-type lists, listicles, AI-written "hidden gems" pages. They
repeat each other and the guidebook. At most they are a lead to verify elsewhere.

## Finding them

- **Start from the neighbourhood, not the topic.** List every paper, residents' group,
  wijkcentrum, history society and church or school that covers the area, then exhaust each
  one. Search for `wijkkrant <buurt>`, `buurtkrant`, `bewonersorganisatie`, `wijkcentrum`,
  `historische vereniging`, `oud-<buurt>`. Every source you find usually links two more.
- **Search in the local language first**, then English.
- **Go to the archive, not the search results.** Most local sites have a sitemap
  (`/sitemap.xml`, `/wp-sitemap.xml`), a WordPress API (`/wp-json/wp/v2/posts?per_page=100`),
  a "kranten" or "archief" page with every issue as a PDF, or numbered article URLs. List
  every title first, screen the titles, then read the hits.
- **One area, many papers.** Boundaries of papers rarely match official districts; note
  which paper covers which wijk (Amsterdam Centrum: Wijkkrant Jordaan & Gouden Reael,
  Buurtkrant Zeven, De Binnenkrant, d'Oude Binnenstad, OpNieuw, 1018 Magazine and
  buurtorganisatie1018.nl, the VVAB magazine Binnenstad; Burgwallen-Nieuwe Zijde has none).
- **Follow the people.** A name that recurs (a local historian, a campaigner, a columnist)
  usually has a blog, a book or a column series worth reading whole.

## Reading them at scale

- **PDF archives**: download all issues, extract text (`pdftotext`), grep for street names,
  house numbers and keywords, then read around each hit. Scanned issues need OCR first;
  note which years were only scanned.
- **Keep a coverage log** per source: what exists, what you read in full, what you only
  screened, how far back, what failed. "All 123 issues, 2005 to 2026, headlines of every
  issue, 40 articles in full" is a useful line; "read the Wijkkrant" is not.
- **Write as you go.** Save the scout file after every source.

## Tools and access

- **curl** for APIs, sitemaps and plain pages, with a neutral User-Agent
  (`deep-cities-research/0.1`). Never put the user's name or email in requests.
- **The BrowserOS neo browser** for everything else: JavaScript sites, bot walls, search
  engines, logged-in pages. One tab of your own, closed at the end. At most two or three
  browsing agents at once.
- **Search engines block heavy use** (Google, DuckDuckGo, Bing, Mojeek all did, on one day).
  Search sparingly, then go straight to the sites and follow their own archives and links.
  A shared WebSearch budget can also run out mid-round; plan for it.
- **Bot walls and timeouts**: try the Wayback Machine (`web.archive.org/web/2024*/<url>`);
  pace it, it rate-limits too.
- **Wikimedia APIs** rate-limit per IP: one caller at a time, honour `Retry-After`.
- **Paywalls** (Het Parool and the like): headlines and teasers are leads; use the facts only
  when another source confirms them, or when a free page quotes the article.
- **Sites whose robots.txt refuses automated readers** (Ons Amsterdam does): no curl, no
  crawling. In the browser, read specific articles on your topic at human pace, one page at a
  time, take facts only, write your own words and link the article. Never bulk-download.

## What to take from them

- **Local voice**: nicknames (quote them), what residents are fond of or fight about,
  campaigns and their outcome, rituals with a fixed spot, who keeps a thing going. One line
  of local voice per item, with its source.
- **Current status**: these are often the only dated evidence that a shop, mural, bench or
  statue is still there. Record the date of the latest evidence.
- **Corrections**: local sources catch register errors, wrong dates and myths. Keep them.
- **Things no register lists**: a bench, a tree, a shop sign, a neighbour's museum, a
  painted wall, a pavement marking, a ghost sign.

## Checking it

- **Two sources for every fact**, at least one checkable. A single neighbourhood-paper
  piece is a lead, not a fact; say "second source needed" until you have one.
- **Watch for jokes and myths**: April Fools' pieces in local papers (one Centrum "monument
  to the unknown dog" never existed), legends retold as fact (servant's house, bloodstains).
  Tell a legend as a legend.
- **Date everything**: "still there (photo, March 2025)" beats "still there".
- **Private people**: don't name residents who are not public figures, even when the local
  paper does.
- **Never copy text.** Facts in your own words, in each language, with the source linked.

## Output

In the scout file, per source: a header line with coverage (above). Per item: the hook, the
local voice with its source, the lead and second source, the latest dated evidence of its
status, and caveats. Keep a "Checked and dropped" table and a "Not read" list with the
reason (paywall, robots, offline, bot wall), so the next scout starts where you stopped.
