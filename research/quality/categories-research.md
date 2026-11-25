# Categories for Deep Cities: what the field says

Research for the design decision on Deep Amsterdam's 13 single-choice categories. Compiled 2026-11-25. Every claim carries a URL; each is marked **[evidence]** (study, standard, official product documentation) or **[opinion]** (practitioner blog, guideline without published data). Pages that could not be loaded are listed at the end.

## Summary: what the field agrees on

1. **Every big POI system uses one primary category plus several secondary ones, not one exclusive category.** Google Business Profile, Apple Business and the Google Places API all store a single primary type plus several additional ones; Foursquare and OSM allow several categories per place. The primary one drives the pin icon (Apple says so explicitly).
2. **The pin colour carries a small number of top-level groups (about 8), not the detailed categories.** Google Maps colour-codes eight groups while its Places API has 19 top-level type groups and hundreds of types. Icons (shape) carry the detail.
3. **Colour alone stops working past about 5 to 7 hues.** Healey's 1996 experiments found five colours searchable at a glance and some colours slowing down at seven and nine. ColorBrewer's qualitative palettes stop at 8 to 12. Practitioners (Datawrapper, Tableau's colour lead) say 5 to 7. WCAG says colour must never be the only cue.
4. **Classification standards allow an item under more than one parent (polyhierarchy), but advise restraint and one canonical home.** ANSI/NISO Z39.19 explicitly allows polyhierarchy; NN/g finds it helps findability when users genuinely disagree on where something goes, but recommends a canonical path and few parents, and facets when overlap is large.
5. **"What it is" and "why go" are different dimensions and belong in different fields.** Standards call these facets (Z39.19, Getty AAT, Hedden); mixing them in one list is what IA texts call a hybrid scheme, which is legitimate but ambiguous. Heritage registers record the building function as its own field (with original vs current function), and travel guides (Wikivoyage) classify by visitor activity (See, Do, Eat, Drink).
6. **"Too many choices" is not a reliable law.** Meta-analyses find the choice-overload effect averages near zero, but appears when options are complex, hard to compare and preferences are vague. That is exactly the casual-browsing map visitor, so few, clearly distinct top-level filters are the safe default; detail belongs one click deeper.

## 1. How established products and standards categorise places

### Commercial map products

- **Google Business Profile** [evidence]: "Select a primary category that best describes your business", choose a specific one, and use "a few" additional categories for departments or services; "Do not select a category for every product or service." Example: a grocery store with "Grocery store" primary and bakery and deli as additional. https://support.google.com/business/answer/7249669?hl=en
- **Google Places API** [evidence]: "A place can have a single primary type ... A place can have multiple type values." The filterable types (Table A) sit in 19 groups: Automotive, Business, Culture, Education, Entertainment and Recreation, Facilities, Finance, Food and Drink, Geographical Areas, Government, Health and Wellness, Housing, Lodging, Natural Features, Places of Worship, Services, Shopping, Sports, Transportation. https://developers.google.com/maps/documentation/places/web-service/place-types
- **Google Maps pin colours** [evidence, product announcement plus press]: the 2017 redesign gave places "a designated color and icon"; orange is "the color for Food & Drink spots" (https://blog.google/products/maps/google-maps-gets-new-look/). Press coverage lists eight colour groups: Food & Drink, Shopping, Health, Entertainment/Leisure, Services, Civil Services/Worship, Outdoor, Transport; "Icons in those categories will adopt the respective color" (https://9to5google.com/2017/11/15/google-maps-icon-color-system-refersh-interest-highlight/). So: 8 colours for groups, icons for the specific type.
- **Apple Business (Apple Maps)** [evidence]: one primary category that "should describe the main function", plus "up to 19 additional categories"; changing the primary category "Does impact map pin icons". https://support.apple.com/en-ca/guide/business/abcb5add1f54/web
- **Foursquare** [evidence]: "proprietary taxonomy of 1K+ categories"; the Category IDs field holds "the most granular category (or categories)", i.e. several per place. https://docs.foursquare.com/developer/docs/categories . Esri, which resells it, confirms "A single location can have multiple category codes." https://doc.esri.com/en/arcgis-data/latest/arcgis-places/foursquare.html . (Ten top-level groups such as Arts and Entertainment, Dining and Drinking, Landmarks and Outdoors: seen only in search snippets, page not loaded.)
- **OpenStreetMap** [evidence, community standard]: tags are combinable, e.g. "a building that is a museum could be tagged as building=yes and tourism=museum" (https://wiki.openstreetmap.org/wiki/Key:tourism). When a feature fits two top-level values, mappers pick one, use semicolon multi-values (`shop=wine;cheese`) or split the feature; splitting breaks "one feature, one OSM element" (https://wiki.openstreetmap.org/wiki/Dual_tagging). OSM is effectively faceted: `historic=*`, `tourism=*`, `amenity=*`, `building=*` are independent dimensions on one object.

### Travel guides

- **Wikivoyage** [evidence, community manual of style]: listings are typed See, Do, Buy, Eat, Drink, Sleep, Go, plus a generic Listing (https://en.wikivoyage.org/wiki/Wikivoyage:Listings). This is a "why go" / visitor-task scheme. Each listing goes in one section; the placement guide resolves overlaps by the visitor's purpose: a church goes in See for sightseeing but Cope for services, concert halls in Do, a bar-and-grill in "Eat or Drink, but not both", brewery tours in Do but tastings in Drink, easy lookouts in See but ones needing a hike in Do. https://en.wikivoyage.org/wiki/Wikivoyage:Where_you_can_stick_it
- **Michelin Green Guide**: rates sights on a star scale (three stars "worth a special journey", two "worth a detour", one variously "interesting"/"worth a visit"), i.e. its main organising device is a rank, not a type. Seen only via secondary sources (e.g. https://clickondetroit.com/news/local/2024/12/12/detroits-first-ever-michelin-green-guide-highlights-5-attractions-as-top-picks); Michelin's own page not loaded. [secondary]

### Heritage registers and vocabularies

- **Rijksmonumentenregister** [evidence, official register]: each monument has a function table with columns Hoofdfunctie, Hoofdcategorie, Subcategorie, Functie; example "Ja | Boerderijen, molens en bedrijven | Boerderij (M)", under the heading "Oorspronkelijke functies". So the register records building function as a two-level field, can hold several functions with one flagged as main, and distinguishes original from current function. https://monumentenregister.cultureelerfgoed.nl/monumenten/14240 . CBS publishes counts per hoofdcategorie (e.g. "Religieuze gebouwen", "Woningen en woningbouwcomplexen", "Cultuur, gezondheid en wetenschap"): https://www.cbs.nl/nl-nl/cijfers/detail/85970NED (about 14 main categories per a search summary; table not machine-readable to me).
- **Getty AAT** [evidence, but from secondary summary]: organised into independent facets (Objects, Activities, Agents, Styles and Periods, Materials, Physical Attributes, Associated Concepts). https://msi.dublincore.org/standards/aat . The point for us: "what kind of object", "what activity", "which period" are separate axes in the reference vocabulary for architecture.
- **Europeana**: organises by curated thematic collections (art, music, newspapers, WW1, etc.) over a common pool rather than a single type scheme (https://www.europeana.eu/en/collections; policy: https://pro.europeana.eu/index.php/post/policy-for-europeana-thematic-collections). Only lightly checked. This is the same pattern as Deep Cities theme maps.

**Count of top-level categories in the wild:** Google colour groups 8; Google API groups 19; Foursquare 10 groups (unverified) over 1,000+ leaves; Wikivoyage 7 sections; Rijksmonumenten about 14 hoofdcategorieën. Those with more than about 8 at the top do not map each to a colour.

## 2. Single vs multiple classification

- **Polyhierarchy is standard practice** [evidence, standard]: ANSI/NISO Z39.19-2005 §8.3.4: "Some concepts belong, on logical grounds, to more than one category. They are then said to possess polyhierarchical relationships"; example: pianos is a narrower term of both stringed and percussion instruments. https://groups.niso.org/higherlogic/ws/public/download/6484/Guidelines%20for%20the%20Construction,%20Format,%20and%20Management%20of%20Monolingual%20Controlled%20Vocabularies.pdf
- **Facets for multi-perspective content** [evidence, standard]: the same standard (§5.3.4) says facet analysis is "particularly useful for ... interdisciplinary areas where there is more than one perspective on how to look at a content object" and for "vocabularies where multiple hierarchies are required but can be inadequate due to difficulty in defining their clear boundaries". Same URL.
- **NN/g on polyhierarchy** [practitioner research]: add an item to two categories when "different users tend to place that item in two different categories" (test with card sorting or tree testing); but "too many parents for any given node increase cognitive load", avoid "exhaustively crossreferencing every single place"; show one canonical path; with heavy overlap prefer facets and search. Laubheimer, 2018. https://www.nngroup.com/articles/polyhierarchy/
- **NN/g on facets** [practitioner]: faceted navigation "provides multiple filters, one for each different aspect of the content" and helps users "understand the content space", but is "significantly more expensive to create and maintain", so confirm users need it. https://www.nngroup.com/articles/filters-vs-facets/
- **Rosenfeld and Morville** [authoritative textbook, opinion-based]: "Exact schemes are best for known-item searching"; "Ambiguous schemes [topic, task, audience] are best for browsing and associative learning, when users have a vaguely defined information need"; "Whenever possible, use both types of schemes"; but mixing must be deliberate: "Just because you like mushrooms and pancakes doesn't mean they will go well together." https://files.znu.edu.ua/files/comp.books/books/information_architecture_for_WWW/infoarch/ch03_03.htm (1st-edition text). Our 13 categories are a hybrid: building types (exact-ish) mixed with angles (ambiguous), in one exclusive list.
- **Heather Hedden** [practitioner, taxonomy expert]: facets are "distinct, mutually exclusive sets of terms" combined in tagging and filtering; with "a well-designed set of facets, the addition of hierarchy may no longer be needed". https://accidental-taxonomist.blogspot.com/2020/06/when-taxonomy-should-not-be-hierarchical.html
- **Card sorting** [practitioner research]: reveals users' grouping; open sort for discovery, closed sort "sometimes used for validation"; at least 15 participants qualitative, 30 to 50 quantitative. https://www.nngroup.com/articles/card-sorting-definition/
- **Abby Covert**: her book frames classification as a choice made for a purpose and audience; I could not verify specific wording online, so not cited as a claim.

## 3. Few bold categories vs many narrow ones

### Choice overload (filters)

- **Meta-analysis 1** [evidence]: 63 conditions, 50 experiments, N=5,036: "a mean effect size of virtually zero but considerable variance between studies"; no sufficient conditions found. Scheibehenne, Greifeneder and Todd 2010, J. Consumer Research. https://edoc.unibas.ch/48789 (PDF: https://abcwest.cogs.indiana.edu/pmwiki/pdf/scheibehenne.options.2010.pdf)
- **Meta-analysis 2** [evidence]: 99 observations, N=7,202: overload is real once moderators are included: choice set complexity, decision task difficulty, preference uncertainty, and an effort-minimising goal all increase it. Chernev, Böckenholt and Goodman 2015, J. Consumer Psychology. https://www.kellogg.northwestern.edu/faculty/research/detail/2015/when-product-assortment-leads-to-choice-overload-a-conceptual
- Implication: a phone visitor scanning a legend has vague preferences and wants low effort, the conditions where overload does appear. A curator with a clear goal (laptop, edit mode) is not affected.

### Colours on a map legend

- **Healey 1996** [evidence, perception experiment]: with 3 and 5 colours, target search was fast and roughly independent of how many items were on screen ("even when using five different colours, the visual system can search for any one of the colours in parallel"); with 7 and 9 colours, "Target identification became significantly more difficult for certain colours" (green and green-yellow became serial search). He also quotes the older guideline of "no more than five to seven colours at a time". https://www.cs.ubc.ca/tr/1996/tr-96-10
- **ColorBrewer** [evidence, cartographic tool by Brewer]: qualitative schemes use hue for nominal classes; palettes top out at 8, 9 or 12 classes (Set1 9, Set3 12, Paired 12): https://search.r-project.org/CRAN/refmans/RColorBrewer/html/ColorBrewer.html and https://colorbrewer2.org/learnmore/schemes_full.html . GeoTools' Brewer FAQ: you can make "a pretty map with more than 12 colors; but you should not be surprised if that is too complicated for people to understand" https://docs.geotools.org/latest/userguide/extension/brewer/faq.html
- **Datawrapper** [opinion, practitioner]: "If you need more than seven colors in a chart, consider using another chart type or to group categories together." https://www.datawrapper.de/blog/colors
- **PolicyViz roundup** [opinion, quoting experts]: Maureen Stone (Tableau's colour lead): "we circle to around 5 to 7 colors" for distinct, memorable colours; Tamara Munzner: "a good rule of thumb is 6-12 colors". https://policyviz.com/2023/05/31/why-are-six-colors-common-in-color-palettes-for-data-visualization/
- **Cartographic visual variables** [textbook]: hue and shape both encode nominal categories; hue lets the eye select a group at once, shape is best for distinguishing individual point symbols. https://courses.ems.psu.edu/geog486/book/export/html/637 ; https://en.wikipedia.org/wiki/Visual_variable
- **Accessibility** [evidence, W3C standard]: WCAG 1.4.1: "Color is not used as the only visual means of conveying information"; for images, use colour plus pattern or labels. https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html

**Reading for Deep Amsterdam:** 13 colours is past every guideline (12 is the hard ceiling, 7 the comfortable one). 8 or 9 is what Google ships; to be safe, add an icon per category so colour is not the only cue.

## 4. Patterns for places that belong to several categories

| Pattern | Who uses it | How it handles a concert church |
|---|---|---|
| One primary + several secondary categories; primary sets the pin | Google Business, Google Places API, Apple Business | primary Church, secondary Venue; pin is a church; a Venue filter still finds it |
| Several equal categories | Foursquare, OSM semicolon values | both; renderer has to pick one anyway |
| Single section chosen by visitor purpose, with a rule book | Wikivoyage | Do (concerts) or See (sightseeing), not both; rules decide |
| Independent facets (type, function, period, activity) | Rijksmonumenten (function field), Getty AAT, Z39.19, OSM keys | type = church; use = concert venue; period = 17th c. |
| Polyhierarchy with a canonical home | NN/g, Z39.19 | listed under both, breadcrumb/pin shows one |
| Curated collections over one pool | Europeana thematic collections | appears in a "Music" collection |
| Colour for group + icon for type | Google Maps 2017 | colour = culture group, icon = church |

Sources as in sections 1 to 3.

## 5. Three candidate designs for Deep Cities

### Design A: "Why go" angles only (7 colours) + building-type field

- **Categories (7):** Architecture; Hidden history; Curiosities; Street & public art; Museums & collections; Food & drink; Green escapes.
- **Multi-category places:** single choice by the main reason to visit (Wikivoyage rule-book style); a written tie-break list (memorial in housing block: Hidden history; museum in canal house: Museums).
- **Fields:** new required `building_type` select (church, school, housing, civic, theatre/cinema, industrial, bridge/infrastructure, other) as a filter; existing rank, status, era, architect.
- **Pros:** within Healey's and Datawrapper's comfortable range; every colour means a reason to go, matching the curation theme; building types stay filterable.
- **Cons:** "Architecture" would swallow most of the 2,500 places (most pins one colour, so colour stops discriminating); still forces a single choice for genuine doubles; big remap.

### Design B: keep 13 "what it is" categories, add an "angles" multi-select

- **Categories (13):** current list, tidied so all are building/object types (Hidden history and Curiosities become angles; add e.g. "Memorials & monuments").
- **Multi-category places:** category = physical type (exact scheme, like Rijksmonumenten hoofdcategorie); a multi-select `angles` field (hidden history, curiosity, music venue, war memory...) holds the why-go.
- **Fields:** angles multi-select; current vs original function as two fields (register practice).
- **Pros:** least ambiguity for editors (type is usually objective); minimal remap.
- **Cons:** 13 colours breaks every colour guideline; the legend speaks curator language, not visitor language; the headline "why go" sits in a secondary filter.

### Design C (recommended): 9 grouped categories, primary + up to 2 secondary, type as a field

- **Categories (9), each a colour plus an icon:**
  1. Places of worship (churches, synagogues, mosques, chapels)
  2. Homes & neighbourhoods (housing, hofjes, garden villages)
  3. Public & working buildings (civic, schools, industrial heritage)
  4. Bridges, water & infrastructure
  5. Museums & stages (museums, theatres, cinemas, concert venues)
  6. Hidden history (memorials, plaques, vanished places)
  7. Curiosities
  8. Street & public art
  9. Food & drink
  (Green escapes either as a 10th or folded into 4 as "Water & green"; check counts.)
- **Multi-category places:** one primary (sets pin colour and icon, as at Apple and Google), up to 2 secondary categories. Filters match primary OR secondary (polyhierarchy), the pin and the place page show the primary as the canonical home (NN/g). Example: concert church: primary Places of worship, secondary Museums & stages. War memorial in a housing block: primary Hidden history, secondary Homes. Museum in a canal house: primary Museums & stages, secondary Homes.
- **Fields:** `building_type` / function (fine-grained, Rijksmonumenten-like, with current vs original where they differ) as a filter; rank stays the Michelin-style "worth a detour" axis; era, architect, status as now. Theme maps stay as collections over the pool (Europeana pattern).
- **Pros:** 9 colours matches Google's 8-group practice and Brewer's limits, with icons covering Healey's slowdown at 7 to 9 and WCAG; doubles stop forcing moves like the ones in `culture-category.json`; the 13 current types survive as icons/field values, so the remap is mostly mechanical; reversible.
- **Cons:** secondary categories need editorial discipline (cap at 2; rule "secondary only if a visitor would reasonably filter for it"); filter counts no longer sum to the total; schema and UI work (secondary field, filter OR-logic, icon set).

### Recommendation

Go with **Design C**. It follows the one pattern every major POI product shares (one primary that drives the pin, a few secondary for findability), keeps the legend within the colour range perception research supports, and moves "what it is" into a field where Dutch heritage practice already puts it. Before committing, (1) count places per proposed category so no colour exceeds roughly a third of pins (Design A fails this), and (2) run a closed card sort with about 15 people on 40 to 60 typical places (NN/g) to settle the borderline groups, especially where Green escapes goes and whether Bridges merits its own colour.

## Gaps and caveats

- Not loaded (403/JS): Atlas Obscura place pages (tags not verified), Tableau's palette design post, Search Engine Land, CBS StatLine table, Getty AAT guideline page (AAT facets taken from Dublin Core summary), ISO 25964 full text (paywalled; Z39.19 used instead), Lonely Planet sight types (not researched further), Michelin's own Green Guide page.
- Healey's colour counts are for visual search on screen, not map legends specifically; map clutter likely makes things worse, not better.
- Choice-overload studies are mostly about products, not map filters; the moderators transfer by reasoning, not direct evidence.
