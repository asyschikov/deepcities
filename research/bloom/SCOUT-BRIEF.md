# Scout brief: Amsterdam in Bloom

A new theme map of every place in Greater Amsterdam (Amsterdam, plus Amstelveen's Amsterdamse Bos,
Diemen and Duivendrecht) where you can enjoy flowers in their season: **flowering trees above all**
(cherry, magnolia, crab apple, hawthorn, horse chestnut, wisteria...), and flowers on the ground
(gardens, rose gardens, bulbs, wildflower meadows, façade gardens, hollyhock streets, markets).
Many spots are ordinary streets that are nothing special most of the year but spectacular for a
week or two. The aim is completeness.

Already known from the city's tree register (`research/bloom/register-spots.json`, 276 clusters of
municipal flowering trees by street): you do not need to find "a street with cherry trees" that is
in there. Look for what the register can't show: named and loved spots, private or semi-public
gardens open to visitors, non-municipal land (Amsterdamse Bos, Hortus, cemeteries, allotment parks
open to the public, housing-association courtyards, hofjes), flowers on the ground, climbers on
houses (wisteria / blauwe regen, roses), events (Tulpenfestival, Hanami in the Bloesempark),
and what locals say about the register's streets ("the pink street in X").

## Sources

Use the BrowserOS neo browser (name your session; close your tabs when done). Search in Dutch and
English: local papers (Het Parool, AT5, NH Nieuws, De Westkrant, Echo, district papers), blogs,
neighbourhood sites, garden and nature organisations (IVN, Natuurmonumenten, Groene Hart, heemtuin
sites, the gardens' own sites), the city's own pages (amsterdam.nl), Wikipedia. Not iamsterdam.
Facebook: official pages only. A site that refuses robots: read targeted pages, paced, facts only.
Header for any curl: `User-Agent: deep-cities-research/0.1`.

## For each spot, one line

`name | address or exact spot | what flowers (species if known) | when (months, approx) |
access (public / opening hours / season) | why it's special (hook) | still there? (latest
evidence, year) | source links`

Group by kind. Mark doubts plainly. Never invent; if unsure, say so. No em dashes.

Write only your own file `research/bloom/scouts/SCOUT-<slice>.md`. Do not write to the live site,
do not commit.
