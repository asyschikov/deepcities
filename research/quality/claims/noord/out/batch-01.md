# Claims check: Noord, batch 01

24 places checked, 23 changed (Bezinningsmonument unchanged: its only copied run is the inscription). About 230 factual claims checked across EN and NL text and the built, architect, listed and original_use attributes.

- Sourced: 2 (EN 2)
- Narrowed: 75 (EN 48; EN and NL edits counted separately)
- Cut: 32 (EN 18)
- Copied Dutch rewritten: 26
- nlcheck.py: 0 copied sentences on 22 of 23 places; the one remaining run (Arms with shopping bags) is the marked inscription on the bag, "Mag het iets meer zijn? Vriendschap weegt niet", allowed by the brief.
- All summaries at most 280 characters; no em dashes or spaced en dashes; titles unchanged.

## Changes

### Iets / Niets neon (Henk Schut)
- summary [narrowed]: "a small white neon keeps" -> "a white neon keeps" ('Het witte neonlicht knippert'; 'small' in no source)
- body [narrowed]: "Henk Schut has worked from the NDSM since the artists first moved in, and much of his work responds to the wharf's sounds, emptiness and his..." -> "Henk Schut, one of the NDSM's artists from the start, has worked from the wharf for more than twenty years, and his work there includes piec..." ('NDSM kunstenaar van het eerste uur'; 'een kunstenaar die al meer dan 20 jaar opereert vanaf de NDSM-werf'; IN TUNE breaks the silence since the last launch of 1979; 'much of his work responds to ... emptiness' unsourced)
- body [narrowed]: "hangs high against the riveted steel beams" -> "hangs high against the monumental steel beams" ('hangt hoog tegen de monumentale stalen balken'; 'riveted' unsourced)
- body [narrowed]: "It is a small white neon that flickers" -> "It is a white neon that flickers" ('Het witte neonlicht knippert'; 'small' unsourced)
- body [narrowed]: "The idea is the contradiction of the hall itself: a vast space that was built to be filled with ships and now seems almost empty, yet is ful..." -> "The idea is the contradiction of the hall's vast, empty-looking space: what is something, and what is nothing? In a space this size the ligh..." (NL text (from the NDSM Facebook post, not machine-readable) says 'gaat in op de tegenstrijdigheid van de grote lege ruimte in de loods. Wat is iets en wat is niets?'; 'built to be filled with ships ... full of studios' and 'part of the point' unsourced)
- nl.summary [narrowed]: "hangt een klein wit neonwerk" -> "hangt een wit neonwerk" (same as EN)
- nl.body [copy]: "Zijn werk *Untitled (iets/niets)* hangt hoog tegen de monumentale stalen balken in de Noordstrook, achterin de Scheepsbouwloods. Het witte n..." -> "Zijn werk *Untitled (iets/niets)* zit in de Noordstrook, achterin de Scheepsbouwloods, hoog tussen de monumentale stalen balken. Het is een ..." (copied runs from ndsmloods.nl rewritten; same facts)

### Noorderlicht
- summary [cut]: "went bankrupt in December 2025 and reopened under new owners in 2026." -> "went bankrupt in December 2025 and restarted in 2026." ('new owners' in no source (Krijn van Santen still named as owner in March 2026))
- body [narrowed]: "When Noorderlicht started in 2004, the NDSM was a half-abandoned shipyard with a few squatted sheds and artists' studios." -> "When Noorderlicht started in the spring of 2004, the NDSM was still bare ground where a big shipyard had once flourished." ('in de lente van 2004 ... op het nog kale terrein waar ooit een scheepswerf met vijfduizend werknemers floreerde'; squatted sheds and studios unsourced)
- body [cut]: "grew into a meeting place for the artists of the wharf, the neighbourhood and, increasingly, the rest of the city," -> "grew into a meeting place for artists and the neighbourhood," ('een ontmoetingsplek voor de buurt'; 'meeting place for artists'; 'increasingly the rest of the city' unsourced)
- body [sourced]: "For two decades it worked on temporary permits and repeated uncertainty, and its success helped lay the ground for the wharf's later transfo..." kept (https://www.amsterdamnow.com/uitgaan/noorderlicht-cafe-ndsm-werf-noord/: 'Met een tijdelijke vergunning en een flinke dosis lef groeide het café uit tot een pionier die de basis legde voor de transformatie van de NDSM-werf')
- body [sourced]: "In March 2024 it finally got permission to stay for good, first in a temporary pavilion and then in a new building." kept (https://www.rodi.nl/oostzaan/nieuws/386669/restaurant-noorderlicht-keert-in-volle-glorie-terug-op-ndsm-t: 23 March 2024: 'heeft de gemeente Amsterdam haar jawoord ... gegeven'; 'volgende maand op dezelfde plek een tijdelijk restaurant'; phased new build from January 2025)
- body [narrowed]: "A restart was announced in early 2026 and the café reopened that spring. It still trades as Noorderlicht, with exhibitions, concerts and dan..." -> "A restart was announced in early 2026, with a reopening planned for that spring. Its website still uses the name Noorderlicht and lists musi..." (Parool 2 March 2026: 'opent, onder een nieuwe naam, deze lente weer de deuren' (a plan, and a new name); noorderlichtcafe.nl (2026) still says Noorderlicht and 'muziek, poëzie, beeldende kunst', 'een nacht vol dans')
- nl.body [copy]: "Noorderlicht begon als tijdelijk paviljoen op de NDSM-werf, een voormalige scheepswerf aan het IJ die langzaam veranderde in een van de mees..." -> "Noorderlicht begon in het voorjaar van 2004 als tijdelijk paviljoen op de NDSM-werf, toen nog een kaal terrein waar ooit een grote scheepswe..." (copied runs (amsterdamnow.com, noorderlichtcafe.nl) rewritten; same EN fixes (bare ground, spring 2004))
- nl.body [copy]: "Mede-eigenaar Krijn van Santen noemde als oorzaak "problemen in de interne structuren, na jarenlang te hebben moeten ondernemen in grote onz..." -> "Mede-eigenaar Krijn van Santen wees naar problemen in de interne structuren, na jaren van ondernemen in grote onzekerheid. Begin 2026 werd e..." (copied quote turned into indirect speech; reopening narrowed as in EN)

### Durgerdammerdijk, east end (nos. 133–206)
- summary [cut]: "Durgerdam's eastern row, once the shipyard end of the village, runs out toward the Kinselmeer." -> "Durgerdam's eastern row runs out toward the Kinselmeer." (the one yard on the Oosteinde in the sources lay in front of the Kapel (no. 101), west of nos. 133-206)
- summary [narrowed]: "a 17th-century frame behind a 1920s front." -> "a 17th-century frame behind an early 20th-century front." (no. 175: 'Voorgevel uit eerste kwart 20e eeuw' (not the 1920s))
- body [cut]: "The eastern part of the village, where shipyards once had their slipways along the dike, stretches furthest along the dike." -> "The eastern part of the village stretches furthest along the dike." (HCAN photo: 'De in 1687 gebouwde kapel (101) voor de werf van Cornelis Kleijn met een lange helling'; no yard at nos. 133-206 in any source)
- body [narrowed]: "- no. 175: a partly decorated 17th-century frame behind a front of the 1920s" -> "- no. 175: a partly decorated 17th-century frame behind a front from the first quarter of the 20th century" ('Voorgevel uit eerste kwart 20e eeuw')
- nl.summary [cut]: "De oostelijke rij van Durgerdam, waar vroeger de werven lagen, loopt uit richting het Kinselmeer." -> "De oostelijke rij van Durgerdam loopt uit richting het Kinselmeer." (same as EN)
- nl.summary [narrowed]: "een gevel uit de jaren 1920." -> "een gevel uit het begin van de 20e eeuw." (same as EN)
- nl.body [cut]: "Aan het Oosteinde lagen vroeger werven met hun hellingen langs de dijk. De houten huizen" -> "De houten huizen" (same as EN)
- nl.body [copy]: "De speld staat bij nummer 137: houten huis met 17e-eeuws skelet, uit- en ingezwenkt voorschot (19e eeuw), goede pui, empire deur en bovenlic..." -> "De speld staat bij nummer 137, een houten huis op een 17e-eeuws skelet. Het voorschot zwenkt uit en weer in (vroeg 19e-eeuws), de pui is goe..." (copied register run rewritten; same facts (XIXa = early 19th century))
- nl.body [copy]: "- nr. 175: ten dele versierd 17e-eeuws houtskelet, voorgevel uit het eerste kwart van de 20e eeuw" -> "- nr. 175: een deels versierd houtskelet uit de 17e eeuw achter een voorgevel uit het begin van de 20e eeuw" (copied register run rewritten)

### NDSM Giants
- body [cut]: "Since 2020 the foundation that runs the NDSM's open ground has worked with 3X3 Unites," -> "The foundation that runs the NDSM's open ground has worked with 3X3 Unites," ('Stichting NDSM-werf and 3X3 Unites had run a popular street basketball program on the site'; no start year in any source)
- nl.body [copy]: "De reuzen zitten als het ware gevangen in een beweging, tussen stilstand en dynamiek, tussen figuratie en abstractie. "De reuzen markeren de..." -> "Het zijn reuzen die midden in een beweging lijken te zijn stilgezet, ergens tussen stilstaan en bewegen, tussen herkenbare figuur en abstrac..." (copied run and long copied quote rewritten as indirect speech; same facts)

### Poort van Nieuwendam
- summary [narrowed]: "Noord never had a city gate, so in 1999 Marcel Smink made one out of 100 metres of the abandoned 1930s Zuiderzeeweg, its paving curling up i..." -> "Around 1999 Marcel Smink curled 100 metres of the abandoned 1930s Zuiderzeeweg up into a twisted 6 m arch where the road simply stops. Only ..." (the gate reading 'is een uitleg die later ... is toegevoegd'; his idea was about traffic; 'wel de eerste poort van Amsterdam Noord'; wiki: commission 'rond 1999')
- body [narrowed]: "Noord, which grew up only in the 20th century, never had a real one." -> "Noord, a relatively young part of the city, never had a real one." ('Het stadsdeel Amsterdam-Noord is relatief jong en kent daarom geen stadspoorten')
- attributes.built [narrowed]: "1999; moved about 2011" -> "about 1999; moved about 2011" ('haalde rond 1999 de opdracht binnen')
- nl.attributes.built [narrowed]: "1999; verplaatst ca. 2011" -> "ca. 1999; verplaatst ca. 2011" (same as EN)
- nl.summary [narrowed]: "Noord heeft nooit een stadspoort gehad, dus maakte Marcel Smink er in 1999 een van honderd meter oude Zuiderzeeweg uit de jaren dertig, die ..." -> "Rond 1999 liet Marcel Smink honderd meter oude Zuiderzeeweg uit de jaren dertig opkrullen tot een gedraaide poort van zes meter waar de weg ..." (same as EN)
- nl.body [copy]: "Smink was bezig met de invloed van het verkeer op de openbare ruimte;" -> "Smink dacht in die tijd veel na over hoe het verkeer de openbare ruimte bepaalt;" (copied run rewritten)
- nl.body [copy]: "Buurtbewoners van Markengouw en Werengouw zagen het beeld eerst niet zitten, maar na de onthulling verdwenen bijna alle tegenstemmen." -> "Buurtbewoners van Markengouw en Werengouw waren er eerst niet blij mee, maar toen het eenmaal stond, verstomde bijna alle kritiek." (copied run rewritten)
- nl.body [narrowed]: "Noord, dat pas in de 20e eeuw volgebouwd werd, heeft nooit een echte gehad." -> "Noord, een relatief jong stadsdeel, heeft nooit een echte gehad." (same as EN)

### Café Modern
- summary [narrowed]: "An early pioneer of Noord's revival, opened in 2012 in the 1931 branch of the Twentsche Bank, where the old basement vault, robbed of 40,000..." -> "A Noord fixture since 2012, in the 1931 branch of the Twentsche Bank. The bank was robbed of 40,000 guilders in 1987; its old basement vault..." ('sindsdien stevig verankerd in de wijk'; 'early pioneer' unsourced; Amsterdam op de kaart: the branch was robbed (not the vault))
- body [cut]: "In 2012, when Noord was not yet a place Amsterdammers crossed the IJ to eat, Café Modern opened here," -> "In 2012 Café Modern opened here," (no source says Noord was not yet a dining destination in 2012)
- body [narrowed]: "and since 2019 the vault has been a room for private dinners." -> "and the vault is now a wine cellar and a room for private dinners." ('In de oude kluis van de bank bevindt zich een bijzondere wijnkelder, die tevens ruimte biedt aan onze private dining'; 2019 only from a Parool search snippet, not readable)
- nl.summary [narrowed]: "Een vroege pionier van het nieuwe Noord, sinds 2012 in het bijkantoor van de Twentsche Bank uit 1931. De oude kluis in de kelder, in 1987 no..." -> "Sinds 2012 een vaste waarde in Noord, in het bijkantoor van de Twentsche Bank uit 1931. De bank werd in 1987 overvallen; de oude kluis in de..." (same as EN)
- nl.body [copy]: "Ook na de fusie tot Algemene Bank Nederland in 1964 bleef het filiaal in gebruik; in 1987 werd het overvallen." -> "Na de fusie van 1964, waaruit de Algemene Bank Nederland ontstond, bleef de bank hier open; in 1987 volgde een overval." (copied run rewritten)
- nl.body [cut]: "In 2012 opende hier Café Modern, toen Noord nog geen bestemming was om voor uit eten te gaan." -> "In 2012 opende hier Café Modern." (same as EN)
- nl.body [narrowed]: "en sinds 2019 is de kluis een ruimte voor besloten diners." -> "en de kluis is nu een wijnkelder en een ruimte voor besloten diners." (same as EN)

### Flood monument, Zonneplein (1960)
- summary [narrowed]: "On 14 January 1960, in a snowstorm, the dike" -> "On a snowy 14 January 1960 the dike" ('De besneeuwde dijk'; 'striemende natte sneeuwbuien'; no source says snowstorm)
- body [narrowed]: "For the 30th anniversary, in 1990," -> "Thirty years on, in 1990," ('In 1990 werd op het Zonneplein een monument geplaatst'; anniversary motive unsourced)
- body [narrowed]: "Locals call it the Zonnewijzer (sundial)." -> "It is known as the Zonnewijzer (sundial)." ('een monument ... genaamd de Zonnewijzer')
- nl.summary [narrowed]: "brak in een sneeuwstorm de dijk" -> "brak in de sneeuw de dijk" (same as EN)
- nl.body [copy]: "zagen twee militairen op patrouille een zwart gat in de besneeuwde dijk langs zijkanaal H, een zijarm van het Noordzeekanaal." -> "ontdekten twee militairen op patrouille een zwart gat in de dijk langs zijkanaal H, die onder de sneeuw lag; het kanaal is een zijarm van he..." (copied run rewritten)
- nl.body [copy]: "zo ruim dat in het dorp het spotgebed rondging: 'Heer geef ons heden ons dagelijks brood en elk jaar een watersnood.'" -> "zo ruim dat in het dorp een spotgebed rondging over het dagelijks brood, met als slot: 'en elk jaar een watersnood.'" (copied rhyme shortened to its punch line)
- nl.body [narrowed]: "In de buurt heet het de Zonnewijzer." -> "Het staat bekend als de Zonnewijzer." (same as EN)

### Gentiaanbuurt, the shipping line's garden village
- summary [narrowed]: "Its homes interlock like a puzzle, which is what made the 2019–2023 renovation so hard." -> "Its homes interlock like a puzzle, and the fire risk that came with it was one reason for the 2018–2023 renovation." ('De brandonveiligheid die dit met zich meebrengt was mede de aanleiding om de woningen te renoveren'; 'so hard' unsourced; block 5 was 2018/2019)
- body [cut]: "Most people walk past it on the way to the better-known Van der Pekbuurt. The Gentiaanbuurt is" -> "The Gentiaanbuurt is" (no source says people walk past it)
- body [cut]: "for the Stoomvaartmaatschappij Nederland, the Amsterdam shipping line to the Dutch East Indies (block 5 is dated 1928)" -> "for the shipping company Stoomvaartmaatschappij Nederland (block 5 is dated 1928)" (sources name the company only; 'line to the Dutch East Indies' in no source)
- body [narrowed]: "Both teams call their part the first gas-free block in Amsterdam's existing housing, and most tenants moved back in." -> "The project descriptions claim firsts: block 5 as the first gas-free block in existing housing, blocks 6 to 10 as Amsterdam's first gas-free..." (block 5: 'het eerste aardgasvrije blok in de bestaande bouw' (no 'Amsterdam'); blocks 6-10: 'de eerste aardgasvrije wijk in de bestaande bouw in Amsterdam')
- nl.summary [narrowed]: "De woningen grijpen als een puzzel in elkaar, en dat maakte de renovatie van 2019–2023 zo lastig." -> "De woningen grijpen als een puzzel in elkaar; mede door het brandgevaar volgde in 2018–2023 een renovatie." (same as EN)
- nl.body [cut]: "De meeste mensen lopen erlangs op weg naar de bekendere Van der Pekbuurt. De Gentiaanbuurt bestaat" -> "De Gentiaanbuurt bestaat" (same as EN)
- nl.body [cut]: "De zes zuidelijke blokken zijn ontworpen door A.D.N. van Gendt en G.H. Kleinhout voor de Stoomvaartmaatschappij Nederland, de Amsterdamse re..." -> "De zes zuidelijke blokken zijn van A.D.N. van Gendt en G.H. Kleinhout, getekend voor de rederij Stoomvaartmaatschappij Nederland (blok 5 is ..." (same as EN; copied run 'zijn ontworpen door A.D.N. van Gendt en G.H.' rewritten)
- nl.body [narrowed]: "Beide ontwerpteams noemen hun deel het eerste aardgasvrije blok in de bestaande bouw van Amsterdam, en de meeste huurders zijn teruggekomen." -> "De projectbeschrijvingen claimen elk een primeur: blok 5 als eerste blok zonder aardgas binnen de bestaande woningvoorraad, blok 6 tot en me..." (same as EN; copied run rewritten)

### Durgerdammerdijk, east of the Kapel (nos. 105–129)
- summary [narrowed]: "and a back house rebuilt right after the fire of 1687." -> "and a late 17th-century back house from after the village fire." (no. 105: 'Oorspronkelijk een laat 17e eeuws (van na brand van 1685) dwars achterhuis'; not 'rebuilt', not 'right after'; the register says 1685, other sources date the village fire 1687)
- body [narrowed]: "This is where you see the fire of 1687 most directly. No. 105 was originally a late 17th-century back house, built just after the fire," -> "No. 105 was originally a late 17th-century back house from after the village fire," ('laat 17e eeuws (van na brand van 1685) dwars achterhuis'; 'most directly' and 'just after' unsourced)
- body [narrowed]: "Others are 18th-century in construction with a 19th-century face." -> "Others probably date from the 18th century and mostly show a 19th-century face." (register: '(constructie 18e eeuws?)', 'Uitwendig aspect ... voornamelijk 19e eeuws')
- body [narrowed]: "- no. 105: the late 17th-century back house, rebuilt after the fire" -> "- no. 105: the late 17th-century back house from after the fire" (not rebuilt)
- nl.summary [narrowed]: "en een dwars achterhuis van na de brand van 1687." -> "en een laat 17e-eeuws dwars achterhuis van na de dorpsbrand." (same as EN)
- nl.body [copy]: "Nummer 105 is een pand met rechthoekige plattegrond onder zadeldak, thans met een 19e-eeuws uiterlijk, maar oorspronkelijk een laat 17e-eeuw..." -> "Nummer 105 ziet er nu 19e-eeuws uit, maar begon na de dorpsbrand als dwars achterhuis uit de late 17e eeuw; binnen zitten nog zwanehals-korb..." (register wording rewritten; same facts)
- nl.body [copy]: "De speld staat bij nummer 117 (116–117): houten huis met zeventiende-eeuws skelet, puntvormig voorschot, goede pui en puilijst, goede roeden..." -> "De speld staat bij nummer 117 (116–117), een houten huis dat op een 17e-eeuws skelet rust. Het heeft een puntvormig voorschot, een goed bewa..." (copied register run rewritten)

### De Durgerdam, inn since 1664
- summary [narrowed]: "There has been an inn on this spot on the dike since 1664." -> "The owners date an inn here on the dike to 1664." (Aedes: 'Since 1664 there has been an inn at Durgerdam'; Dezeen: 'Constructed in 1664'; claim is the owners')
- body [narrowed]: "For a village of fishermen and skippers on the Zuiderzee, the inn was the meeting point with the outside world. The owners date an inn at th..." -> "The inn served the sailors and fishermen of a village on the Zuiderzee. The owners date an inn at this spot to 1664; the village itself burn..." ('originally served as an inn for sailors and fishermen'; Aedes: 'There is no house in Durgerdam that dates before 1687'; 'meeting point with the outside world' and 'older than every house' in no source)
- nl.summary [narrowed]: "Sinds 1664 staat er een herberg op deze plek aan de dijk." -> "Volgens de eigenaar stond hier aan de dijk al in 1664 een herberg." (same as EN)
- nl.body [narrowed]: "Voor een dorp van vissers en schippers aan de Zuiderzee was de herberg het contactpunt met de buitenwereld. Volgens de eigenaar staat hier s..." -> "De herberg bediende de zeelui en vissers van een dorp aan de Zuiderzee. Volgens de eigenaar staat hier sinds 1664 een herberg; het dorp zelf..." (same as EN)
- nl.body [copy]: "- het houten huis met 17e-eeuws houtskelet, waarvan de voorste helft in de 19e eeuw met een verdieping is verhoogd, met puntvormig voorschot" -> "- het houten huis op een 17e-eeuws skelet; in de 19e eeuw kreeg de voorste helft er een verdieping bij, onder een puntvormig voorschot" (copied register run rewritten)

### Statue for the Rose-ringed Parakeet
- summary [cut]: "chosen by residents and unveiled in 2026: an ode to "all strange birds", and to the most divisive bird in the Netherlands." -> "set up in 2026: an ode to "all strange birds", and to a bird that splits opinion." (resident vote only from a scout lead (draft: 'unverified'); AT5 (17 July 2026) has it standing and the unveiling still to come; 'most divisive bird in the Netherlands' unsourced)
- body [narrowed]: "The first rose-ringed parakeets were spotted in Amsterdam in the 1970s; now there are thousands, and few birds split opinion like them." -> "The first rose-ringed parakeet was spotted in Amsterdam in the 1970s; now there are thousands, and they split opinion." ('In de jaren 70 werd de eerste gespot in de stad en inmiddels zijn het er duizenden'; 'few birds ... like them' unsourced)
- body [cut]: " Residents of Overhoeks voted for this monument in 2023." -> "" (resident vote of 2023 unverified (draft cites only a scout lead))
- body [narrowed]: "and was officially unveiled on 28 August 2026." -> "and was to be officially unveiled on 28 August 2026." ('wordt 28 augustus officieel onthuld' (article of 17 July 2026))
- body [narrowed]: "Castelein calls it "an ode to all strange birds": to the outsider, and to a city people come to in order to become who they are, or flee to...." -> "Castelein calls it "an ode to all strange birds", and to Amsterdam as a city people come to in order to become who they need to be, or flee ..." ('Amsterdam is een stad waar veel mensen naartoe komen om te worden wie ze moeten zijn, of naartoe vluchten'; 'the outsider' and 'which is rather the point' unsourced)
- body [narrowed]: "made with the Stichting ter Verfraaiing van de Wereld" -> "co-initiated by the Stichting ter Verfraaiing van de Wereld" ('werd mede geïnitieerd door de Stichting ter verfraaiing van de wereld')
- nl.summary [cut]: "in 2026 onthuld: een ode aan alle vreemde vogels, en aan de meest omstreden vogel van Nederland." -> "in 2026 geplaatst: een ode aan alle vreemde vogels, en aan een vogel die de meningen verdeelt." (same as EN)
- nl.body [cut]: " Bewoners van Overhoeks kozen in 2023 voor dit monument." -> "" (same as EN)
- nl.body [narrowed]: "en werd op 28 augustus 2026 officieel onthuld." -> "en zou op 28 augustus 2026 officieel worden onthuld." (same as EN)
- nl.body [copy]: ""Dit is een ode aan alle vreemde vogels", zegt Castelein: aan Amsterdam als stad waar mensen naartoe komen om te worden wie ze moeten zijn, ..." -> "Castelein ziet het als een ode aan "alle vreemde vogels", en aan Amsterdam als plek waar mensen heen trekken om zichzelf te worden, of om te..." (copied quote run rewritten as indirect speech; 'precies de bedoeling' cut as in EN)

### Arms with shopping bags, Van der Pekstraat
- body [narrowed]: "planned by architect J.E. van der Pek with civil servant Arie Keppler to rehouse workers from the Jordaan slums." -> "planned by architect J.E. van der Pek, troubled by the decay of the Jordaan, with civil servant Arie Keppler as good housing for workers." ('Van der Pek, een idealist die zich zorgen maakte over de verkrotting van de Jordaan, ontwierp samen met ambtenaar ... Arie Keppler een plan om mooie woningen te bouwen voor arbeiders'; rehousing Jordaan workers unsourced)
- body [cut]: "When the neighbourhood and its street were being renewed, nine copper-coloured arms appeared on the facades of houses and shops in 2011." -> "In 2011 nine copper-coloured arms appeared on the facades of houses and shops." (sources give 2011 and a renovation now under way, but do not link the two)
- nl.body [narrowed]: "Architect J.E. van der Pek bedacht de buurt samen met ambtenaar Arie Keppler, om arbeiders uit de verkrotte Jordaan een goed huis te geven." -> "Architect J.E. van der Pek zag de Jordaan verkrotten en bedacht samen met ambtenaar Arie Keppler een buurt met goede woningen voor arbeiders..." (same as EN)
- nl.body [cut]: "Toen de buurt en de straat werden opgeknapt, verschenen in 2011 negen koperkleurige armen aan de gevels van huizen en winkels." -> "In 2011 verschenen negen koperkleurige armen aan de gevels van huizen en winkels." (same as EN)

### Observatorium (Marinus Boezem)
- body [narrowed]: "climbs to the top of a man-made hill" -> "climbs to the top of a hill" ('acht meter boven parkniveau'; 'man-made' in no source)
- body [narrowed]: "the father of the modern architecture that shaped this 1960s estate." -> "the founder of the modern architecture that inspired this estate." ('in een wijk die geïnspireerd is op de moderne architectuur, waar Le Corbusier de grondlegger van was'; '1960s' unsourced)
- body [cut]: "The hill is a fixed landmark on the walking routes from metro station Noord, and the view from the top takes in the flats of Buikslotermeer ..." -> "The hill is a landmark on all three walking routes from metro station Noord." ('Een markante plek in alle drie de routes is het Observatorium'; the view from the top is in no source)
- body [cut]: "
- the view north over the Waterland polders" -> "" (view from the top unsourced)
- nl.body [narrowed]: "naar de top van een aangelegde heuvel" -> "naar de top van een heuvel" (same as EN)
- nl.body [narrowed]: "waarop deze wijk uit de jaren zestig is geïnspireerd." -> "waarop deze wijk is geïnspireerd." (same as EN)
- nl.body [copy]: "Marinus Boezem (1934) geldt samen met Jan Dibbets en Ger van Elk als grondlegger van de conceptuele kunst in Nederland." -> "Marinus Boezem (1934) wordt met Jan Dibbets en Ger van Elk gezien als een van de kunstenaars die de conceptuele kunst in Nederland op gang b..." (copied run rewritten)
- nl.body [cut]: "De heuvel is een vast punt op de wandelroutes vanaf metrostation Noord, en vanaf de top kijk je over de flats van de Buikslotermeer en de op..." -> "De heuvel is een herkenningspunt op alle drie de wandelroutes vanaf metrostation Noord." (same as EN)
- nl.body [cut]: "
- het uitzicht naar het noorden over de Waterlandse polders" -> "" (same as EN)

### Schellingwouderpark's pull ferries and the Noorder IJdijk
- body [cut]: "the rare northern vole" -> "the northern vole" ('de Noordse woelmuis'; 'rare' unsourced)
- body [narrowed]: "the Oranjesluizen (around 1870)" -> "the Oranjesluizen (locks built around 1870)" ('omstreeks 1870 de Oranjesluizen aangelegd'; no source dates the houses)
- body [cut]: "The park is open to walkers at all times;" -> "The park is open to walkers;" ('at all times' unsourced)
- attributes.built [narrowed]: "park 2010; Noorder IJdijk houses for the Oranjesluizen (around 1870)" -> "park 2010; Noorder IJdijk houses for the staff of the Oranjesluizen (locks built around 1870)" (date belongs to the locks, not the houses)
- nl.attributes.built [narrowed]: "park 2010; woningen Noorder IJdijk voor de Oranjesluizen (rond 1870)" -> "park 2010; woningen Noorder IJdijk voor het personeel van de Oranjesluizen (sluizen van rond 1870)" (same as EN)
- nl.body [copy]: "er zijn ijsvogelwanden aangelegd en overwinteringsplekken voor de ringslang, de Noordse woelmuis en libellen." -> "langs het water kwamen wanden voor ijsvogels, en er zijn plekken gemaakt waar ringslangen, Noordse woelmuizen en libellen kunnen overwintere..." (copied run rewritten)
- nl.body [cut]: "Het park is altijd open voor wandelaars;" -> "Het park is open voor wandelaars;" (same as EN)

### Bethlehemkerk, Zwanenplein
- nl.body [copy]: "de verkondiging aan de herders en de wijzen uit het oosten." -> "de wijzen uit het oosten en de verkondiging aan de herders." (copied run (window subjects) reordered)

### De Jakoba, Overhoeks
- body [narrowed]: "Overhoeks, on the old Shell grounds, is mostly upmarket towers in a campus-like layout that its own architects call rather un-Amsterdam." -> "Overhoeks is a district of towers in a campus-like layout that De Jakoba's architects call rather un-Amsterdam." (Studioninedots: 'the Overhoeks area - which with its campus-like setting is rather un-Amsterdam'; Shell grounds and 'upmarket' in none of this place's sources)
- body [narrowed]: "Not everyone loves the colour." -> "One resident told the local paper he was less keen on the colour." ('Bewoner René vindt de kleur minder geslaagd')
- nl.body [narrowed]: "Overhoeks, op het oude Shell-terrein, is vooral een wijk van dure torens in een campusachtige opzet, die de architecten zelf 'nogal on-Amste..." -> "Overhoeks is een wijk van torens in een campusachtige opzet, die de architecten van De Jakoba 'nogal on-Amsterdams' noemen." (same as EN)
- nl.body [copy]: "werd de gevel gemaakt van prefab beton, op natuurlijke wijze gekleurd met zand en grind en deels gepolijst," -> "kwam er een gevel van prefab betonelementen, die hun kleur danken aan zand en grind en deels zijn gepolijst," (copied run rewritten)
- nl.body [narrowed]: "Niet iedere bewoner is fan van de kleur." -> "Een bewoner vertelde de buurtkrant dat hij de kleur minder geslaagd vindt." (same as EN)

### Hyperion Lyceum
- body [cut]: "designed by Ector Hoogstad Architecten, for about 850 pupils." -> "designed by Ector Hoogstad Architecten." (850 pupils in no readable source (wiki: room for at most 135 new pupils a year))
- body [cut]: "the party piece is a slide two storeys high in the atrium, added in October 2018." -> "the party piece is a slide two storeys high in the atrium." ('The party piece is the two-storey slide in the atrium'; October 2018 date no longer on the Pieters page)
- body [narrowed]: "painted a "shopping list" of the 46,753 tonnes of building materials that the new district had consumed, from sand to lime." -> "painted an alternative "shopping list" of the building materials behind the new district: 46,753 tonnes, from soil to lime." ('een alternatief boodschappenlijstje waarmee ze de stedenbouw concretiseerde ... 46.753 ton aan bouwmaterialen ... van grnd (19.436 ton) tot kalk'; soil, not sand; 'consumed' unsourced)
- nl.body [copy]: "Het Hyperion Lyceum begon in 2011 in een noodgebouw aan de Tolhuiskade, dat in een half jaar was ontworpen en gebouwd." -> "Het Hyperion Lyceum begon in 2011 aan de Tolhuiskade, in een tijdelijk gebouw dat binnen zes maanden was ontworpen en neergezet." (copied run rewritten)
- nl.body [cut]: "van Ector Hoogstad Architecten, met zo'n 850 leerlingen." -> "van Ector Hoogstad Architecten." (same as EN)
- nl.body [cut]: "het paradepaardje is een glijbaan van twee verdiepingen in het atrium, die er in oktober 2018 bij kwam." -> "het paradepaardje is een glijbaan van twee verdiepingen in het atrium." (same as EN)
- nl.body [narrowed]: "een 'boodschappenlijstje' van de 46.753 ton bouwmaterialen die de nieuwe wijk had opgeslokt, van grond tot kalk." -> "een alternatief 'boodschappenlijstje' van de bouwmaterialen achter de nieuwe wijk: 46.753 ton, van grond tot kalk." (same as EN)

### KiMu, the children's art museum
- summary [narrowed]: "A museum where the art on show is made by children." -> "A museum about children's own art-making." (the opening show pairs about 70 children with 3 artists ('70 kinderen en 3 kunstenaars'), so not only children's art is on show)
- nl.summary [narrowed]: "Een museum waar de kunst door kinderen gemaakt is." -> "Een museum over het eigen maakproces van kinderen." (same as EN)
- nl.body [copy]: "het werk van bijna zeventig kinderen van 4 tot 15 jaar naast" -> "het werk van bijna zeventig kinderen, 4 tot 15 jaar oud, naast" (copied run rewritten)

### Spanjemonument
- body [narrowed]: "went to fight Franco in the Spanish Civil War (1936–1939), most in the International Brigades, many as nurses." -> "went to fight Franco in the Spanish Civil War (1936–1939) in the International Brigades, among them many nurses." ('Ook 700 Nederlandse vrijwilligers namen deel aan de Internationale Brigades. Onder deze Spanjestrijders waren naast militairen ook veel verpleegsters'; 'most' unsourced)
- body [narrowed]: "originally in red, yellow and purple, the colours of the Spanish Republic." -> "originally in red, yellow and purple, the colours of the flag of the International Brigades." ('origineel in de kleuren rood, geel en paars (de kleuren van de vlag van de Internationale Brigades)')
- body [narrowed]: "- the three brick posts with the text in Dutch and Spanish, ending in "No pasarán"" -> "- the three brick posts with the text in Dutch and Spanish, and "No pasarán"" (the inscription opens with '1936-1939 NO PASARAN', it does not end with it)
- nl.body [narrowed]: "de meesten in de Internationale Brigades en veel vrouwen als verpleegster." -> "in de Internationale Brigades, onder wie veel verpleegsters." (same as EN)
- nl.body [narrowed]: "oorspronkelijk rood, geel en paars, de kleuren van de Spaanse Republiek." -> "aanvankelijk in rood, geel en paars, zoals de vlag van de Internationale Brigades." (same as EN; copied run rewritten)

### Gemaal Kadoelen and the Concertgemaal
- summary [narrowed]: "an 1875 brick one that once drained all of Waterland with paddle wheels" -> "an 1875 brick one that once pumped out Waterland's water with paddle wheels" (built at the same time as gemaal Rijpersluis in Holysloot, which also drained Waterland; 'all of Waterland' unsourced)
- body [narrowed]: "by then two men could run what had needed a crew of stokers." -> "by then two men could run what had needed many hands under steam." ('Voor het stoomgemaal was veel mankracht nodig ... in 1924 toen het elektrisch werd, had men genoeg aan twee man'; 'stokers' unsourced)
- body [narrowed]: "the first stage for that music in Noord," -> "at the time the first stage for that music in Noord," ('toentertijd het eerste podium voor klassieke muziek in Noord')
- nl.summary [narrowed]: "dat met schepraderen heel Waterland droog hield" -> "dat met schepraderen water uit Waterland wegpompte" (same as EN)
- nl.body [copy]: "daarna op zuiggas dat in het gemaal zelf werd gemaakt," -> "daarna op zuiggas, ter plekke in het gebouw opgewekt," (copied run rewritten)
- nl.body [narrowed]: "waar eerst een ploeg stokers werkte." -> "waar de stoommachine veel meer handen had gevraagd." (same as EN)

### Goudriaankanaal, the king's unfinished ship canal
- nl.body [copy]: "dat de Zuiderzee bij de kanaalmond ten oosten van Marken maar 3,30 meter diep was, even ondiep als bij Pampus." -> "dat het water bij de geplande monding, ten oosten van Marken, maar 3,30 meter diep was, niet dieper dan bij Pampus." (copied run rewritten)

### Hotel de Goudfazant
- body [narrowed]: "rented a 1,400 m² shed there that had housed a car garage and a scenery-building business, and turned it into a restaurant in a few weeks." -> "took a 1,400 m² shed there that had housed a car garage and a scenery-building business, and quickly converted it into a restaurant." ('na een snelle verbouwing van de 1.400 vierkante meter grote loods'; 'rented' and 'a few weeks' unsourced)
- body [narrowed]: "is a joke: there are no rooms." -> "is misleading: there are no rooms." ('De naam is enigszins misleidend want het gaat niet om een hotel maar om een restaurant')
- body [narrowed]: "years before the area became a nightlife quarter." -> "and it helped pave the way for the restaurants and cafés that followed in Noord." ('plaveiden ze de weg voor de andere restaurants en cafés die nu in Noord zitten'; 'nightlife quarter' unsourced)
- body [narrowed]: "During the coronavirus lockdown the restaurant briefly turned itself into a shop." -> "During the second coronavirus closure, in late 2020, the restaurant turned itself into a small supermarket." (10 Dec 2020: 'Toen het restaurant voor de tweede keer moest sluiten ... Ze verbouwden het restaurant om tot een heuse vendejo (supermarkt)'; 'briefly' unsourced)
- nl.body [copy]: "In 2006 hadden vier vrienden het idee om in een oude garage, op een onguur industrieterrein in Amsterdam-Noord, een restaurant te beginnen. ..." -> "In 2006 zochten vier vrienden uit de horeca en van school een plek voor een restaurant en kwamen uit bij een vroegere garage, op een industr..." (copied runs and quote (hethamerkwartier.nl, gebouwdin) rewritten; same facts)
- nl.body [copy]: "Het pand is nog voor een groot deel in zijn oude staat. Wel is de stenen voorpui vervangen door glazen roldeuren en is een gedeelte van een ..." -> "Grotendeels is het pand gebleven zoals ze het aantroffen. De bakstenen pui maakte plaats voor glazen roldeuren, en een deel van een tussenmu..." (gebouwdin wording rewritten; EN additions (pave the way, 2020 supermarket) mirrored)

### Paard van Noord
- body [cut]: "It is one of the last pieces of working industry on view in Noord. The biggest is under two kilometres west, on the IJ: Damen Shiprepair," -> "Under two kilometres west, on the IJ, heavy industry is still at work: Damen Shiprepair," (Damen yard still operating per NH Nieuws and marineschepen.nl; 'one of the last pieces' and 'the biggest' in no source)
- nl.body [cut]: "Het is een van de laatste stukken werkende industrie die in Noord nog te zien zijn. Het grootste ligt nog geen twee kilometer westelijker aa..." -> "Nog geen twee kilometer westelijker, aan het IJ, wordt nog volop gewerkt: Damen Shiprepair," (same as EN)
- nl.body [copy]: "kraandrijver Gerrit Agterhof noemde hem zijn werkpaard; zijn collega's hadden het over 'het paard van Gerrit'." -> "kraandrijver Gerrit Agterhof sprak van zijn werkpaard, en onder collega's heette de kraan 'het paard van Gerrit'." (copied run rewritten)

## For the user

- Iets / Niets: the title "Untitled (iets/niets)" and the something/nothing reading rest only on an NDSM Facebook post that could not be fetched (ndsmloods.nl carries the same text). henkschut.nl says IN TUNE ran "till December 2023", so the sound work may no longer be on show.
- Noorderlicht: Parool (2 March 2026) said it would reopen "onder een nieuwe naam"; its website still says Noorderlicht. Text now says the website uses the name; check the current name and whether it actually reopened.
- Durgerdammerdijk 105: the RCE register dates the village fire 1685; other sources (Aedes, HCAN) say 1687. Text now avoids the year for no. 105.
- Parakeet statue: AT5 (17 July 2026) said it would be unveiled on 28 August 2026; text now says 'was to be'. The 2023 resident vote rested only on a scout lead and was cut. Confirm the unveiling happened.
- Hotel de Goudfazant: Vice says the shed was Stork's, later a theatre scenery workshop; 'car garage' rests on hethamerkwartier.nl and trackandtrees. Kept as is.
- Hyperion Lyceum: the October 2018 slide date and 850 pupils came from a Pieters page that no longer has them; cut.
- Bethlehemkerk: listed 1997 is the designation date (amsmon datumAanwijzing); the RCE register entry is 1998. Kept 1997.
- Some sources could not be fetched (Facebook, Parool, Michelin); nothing was kept on them alone.

## Verification

23 changed places checked against the input: every new claim in EN and NL traced to the old text or to a listed source (fetched: gebouwdin, hethamerkwartier, Vice, De Buik, Rodi, Amsterdam Now, faillissementsdossier, modernamsterdam.nl, AT5, Stadsherstel, wandelnetwerknoordholland, makersaanhetij, ndsm.nl, kimu.nl, HCAN beeldarchief, nl.wikipedia, Kunstwacht). Both "sourced" changes (Noorderlicht) confirmed on amsterdamnow.com and rodi.nl. New wording confirmed in sources: Poort "the first in Noord" (Kunstwacht: "de eerste poort van Amsterdam Noord"), Observatorium "all three walking routes", Café Modern "wine cellar" (modernamsterdam.nl), De Jakoba resident on the colour (Rodi), Spanjemonument International Brigades flag (nl.wikipedia), Gemaal "at the time the first" classical stage (Stadsherstel), Goudfazant "pave the way" (Vice) and late-2020 supermarket (De Buik, 10 Dec 2020), Hyperion "alternative" list (nl.wikipedia), Vreemde vogels "co-initiated" (nl.wikipedia), Arms "decay of the Jordaan" (makersaanhetij).

Fixes:
- Hyperion Lyceum: restored "with about 850 pupils" (EN) and "met zo'n 850 leerlingen" (NL); nl.wikipedia's infobox gives "Aantal leerlingen 850". The two cut entries removed from changes. (Supersedes the Hyperion note above on 850 pupils; the October 2018 slide date stays cut, no fetched source has it.)
- Durgerdammerdijk, east end: NL bullet for no. 175 "voorgevel uit het begin van de 20e eeuw" -> "uit het eerste kwart van de 20e eeuw", to match the EN "first quarter of the 20th century" (RCE 6687).
- Hotel de Goudfazant: added https://www.debuik.nl/amsterdam/nieuws/hotel-de-goudfazant-verandert-in-vendejo to sources_add (the late-2020 supermarket rests on it; it was not in the draft's sources).
- Spot-checked cuts held: Durgerdam shipyard (the HCAN yard lay at the Kapel, no. 101, not at nos. 133-206), NDSM Giants "since 2020" (3X3 Unites gives 2024 for the courts, no start year for the programme), Arms renewal link, Gentiaanbuurt East Indies line, Paard van Noord "last pieces", De Jakoba "Shell grounds" and "upmarket" (not in Dezeen or ArchDaily), Hyperion slide date.
- nlcheck.py after fixes: 0 copied runs except the marked bag inscription on Arms with shopping bags (allowed). No em dashes or spaced en dashes; all EN and NL summaries at most 280 characters; titles unchanged; changed attributes (Poort, Schellingwouderpark) also under translations.nl.attributes; no listed attribute changed.
- Not re-fetchable: noorderlichtcafe.nl (connection failed); the programme facts it backs were already in the old NL text.
