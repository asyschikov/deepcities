# Scout brief: City of Arrivals (a theme map), one slice per agent

The user wants a theme map about **the history of immigration and immigrants in Amsterdam
through all eras**, with a little romance in it but plainly about immigration. It is live as
a list view over the Deep Amsterdam pool: **City of Arrivals** (slug `arrivals`), tagline
"Immigration in Amsterdam through the ages: four centuries of newcomers and the places they
left their mark."

We want the places where newcomers arrived, settled, prayed, worked, traded, organised,
were welcomed or turned away, and remembered: churches, synagogues, mosques and temples they
built or took over; streets and neighbourhoods they made their own; shops, markets, bakeries,
restaurants, clubs and associations with a real history; boarding houses for guest workers;
monuments and memorials; houses of famous newcomers (Spinoza's family, Rembrandt's Jewish
neighbours, Descartes and Locke as refugees...); and the institutions that dealt with them.
A gone place qualifies if the site tells its story or something related stands there.
Forced migration counts (enslaved people brought through Amsterdam's trade, the Slavery
Monument), and so does emigration where it is part of the same story. Treat all groups
with the same seriousness and respect; no stereotypes, no politics.

Area: the Amsterdam municipality (incl. Noord, Nieuw-West, Zuidoost, Weesp). Ouderkerk's
Beth Haim and Amstelveen are outside: mention in Borderline only.

This is a shortlist only. Never write to the live site (no `dc` write commands), never
commit, never use an em dash (use a colon, comma or parentheses).

Repo root: `/Users/andrey/.paradev/worktrees/deepcities-5f7b6710/everything-from-here-current-b8db62f6`.
Write only `research/arrivals/scouts/SCOUT-$SLICE.md`.

## Sources (several; independent evidence beats one list)

- **BrowserOS neo is a primary tool**, alongside WebSearch: open one tab of your own
  (ToolSearch "select:mcp__browseros-neo__run,mcp__browseros-neo__tabs", then tabs
  action "new"), search from it (Google; switch to Bing or DuckDuckGo on a captcha), read
  Het Parool, AT5, NH Nieuws, Trouw, Volkskrant, NRC through it. Pace yourself: other agents
  share the browser. Close your tab when done.
- Authoritative: Archief Amsterdam (Stadsarchief), Amsterdam Museum, IISG, the Canon van
  Amsterdam and Canon van Nederland, Huygens ING / Resources, the "Geschiedenis van
  Amsterdam" volumes, Jewish Cultural Quarter (for Jewish places), NiNsee (slavery
  history), the Rijksmonumentenregister and city monuments API, Ons Amsterdam magazine,
  local history societies, community organisations' own history pages.
- nl/en Wikipedia: leads and cross-checks only. Facebook/Instagram only from official pages.
  Never iamsterdam.com. A fact only one hobby site has is weak: mark it so.

## Check what we already have

For every candidate run `pnpm -s dc places sights --all --q <word>` from the repo root
(`--all` includes district and theme-only places, e.g. the Jewish Heritage and Deep
Centrum ones). Many places already exist (the Portuguese Synagogue, the Waalse Kerk,
the Slavery Monument, the Zeedijk's Chinese temple?...). Mark each candidate:
- **(E)**: exact live title and id: it would be list-added, with an extra paragraph telling
  its immigration story if the existing text lacks it.
- **(N)**: not on any map.
The Jewish Heritage map already covers Jewish Amsterdam in depth: in the Jewish slices pick
only the places that tell the *arrival* story (first settlers, synagogues they founded,
neighbourhoods they formed, the 1930s refugees), not every Jewish site.

## Output: `research/arrivals/scouts/SCOUT-$SLICE.md`

A numbered list ordered by strength, one item per place:
`N. **Name** (address; years) (E: "title", id | N): one-line hook (who arrived, what the
place was to them, what it is today). Who: <community>. Era: <era>. Status: open / changed
(now X) / gone. Evidence: two or three sources with links (at least one authoritative).
Caveats.`
Aim for 25 to 45 strong items. Then "Borderline" and "Checked and dropped" (one line each,
why). Report briefly at the end: counts of (E) and (N), your top ten, anything odd.

## Slices

- `early-modern` (1580 to 1800, all groups except Jews): refugees from the Southern
  Netherlands after 1585 (Flemish and Brabant merchants, the Walloons and their Waalse Kerk),
  Huguenots after 1685 (French churches, the Maison Descartes?, hofjes), German Lutherans
  (the Lutheran churches, the Ronde Lutherse Kerk), Scandinavian and German sailors and the
  VOC's foreign crews, the English and Scottish churches (Begijnhof English Reformed Church),
  the Armenians (Armenian church on the Kromboomsloot), seasonal German workers
  (hannekemaaiers), famous refugee thinkers (Descartes, Locke, Comenius's grave? (Naarden,
  outside)), printers who fled censorship.
- `jewish-arrivals`: the Sephardic arrivals from Portugal and Spain (first synagogues,
  Portuguese Synagogue, Ets Haim, Spinoza's birthplace and family), the Ashkenazi arrivals
  from Germany and Poland (the Great Synagogue, the Jodenbuurt), Eastern European arrivals
  around 1900, the German and Austrian refugees of the 1930s (the Rivierenbuurt, Anne Frank's
  family as refugees, refugee committees, the Lloyd Hotel as an emigrants' hotel 1921 onward
  (Eastern European emigrants to the Americas)). Coordinate: places, not every Jewish site.
- `1800-1945`: German entrepreneurs (C&A, Vroom & Dreesmann, Peek & Cloppenburg, Hulshoff,
  bakers and shopkeepers from Westphalia), Italian terrazzo workers, ice-cream makers and
  organ builders, the first Chinese seamen and boarding houses (Binnen Bantammerstraat,
  1910s), Belgian refugees of 1914, the colonial connection (the Tropenmuseum / Koloniaal
  Instituut, Indonesian students and the Perhimpunan Indonesia, early Surinamese and
  Antilleans such as Anton de Kom), the emigrants' side (the Lloyd Hotel, the Holland
  America Line? (Rotterdam: borderline)).
- `postwar-colonial` (1945 to now, from the former colonies): Indische Nederlanders,
  Moluccans, Chinese-Indonesians, Surinamese (the 1975 independence wave, the Bijlmer,
  Kwaku, Surinamese churches, shops and roti places with history, the Albert Cuyp's
  Surinamese stalls?), Antilleans and Arubans, the Chinese in the Zeedijk (Fo Guang Shan He
  Hua Temple), Keti Koti and the Slavery Monument (Oosterpark), NiNsee, memorials.
- `guestworkers-and-new` (1960 to now): Spanish, Italian, Portuguese, Yugoslav, Turkish and
  Moroccan guest workers (boarding houses, the first mosques in old churches or garages:
  the Fatih mosque on the Rozengracht, the Westermoskee, the Blue Mosque in Nieuw-West,
  Moroccan and Turkish associations, coffeehouses, bakeries, the Dappermarkt), the 1970s
  family reunification, Ghanaian and West African churches in Zuidoost, refugees (the
  Vluchtkerk, We Are Here, the Bijlmerbajes as an asylum centre, the Wenckebachweg), Eastern
  Europeans, expats and the Zuidas, the Indian and Brazilian communities, and monuments to
  guest workers (if any).
