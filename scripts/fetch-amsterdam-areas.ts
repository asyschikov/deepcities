/**
 * Fetch Amsterdam's official areas (stadsdelen, gebieden, wijken) from the
 * city's open data and write scripts/data/amsterdam-areas.json for
 * `pnpm dc areas-import Amsterdam scripts/data/amsterdam-areas.json`.
 *
 *   node scripts/fetch-amsterdam-areas.ts
 *
 * Source: https://api.data.amsterdam.nl/v1/gebieden/ (current versions only).
 * Coordinates are rounded to 6 decimals; the server simplifies on import.
 */
import { writeFileSync } from "node:fs";

type Pt = [number, number];
type AreaGeometry =
  | { type: "Polygon"; coordinates: Pt[][] }
  | { type: "MultiPolygon"; coordinates: Pt[][][] };
type Level = "municipality" | "borough" | "neighbourhood" | "subNeighbourhood";
interface AreaImport {
  level: Level;
  code: string;
  name: string;
  parent: { level: Level; code: string } | null;
  geometry: AreaGeometry | null;
}

/** Round to 6 decimals (~10 cm); the server simplifies on import. */
const r6 = (n: number) => Math.round(n * 1e6) / 1e6;
const roundRing = (ring: Pt[]): Pt[] => ring.map(([x, y]) => [r6(x), r6(y)]);
const simplifyGeometry = (g: AreaGeometry): AreaGeometry =>
  g.type === "Polygon"
    ? { type: "Polygon", coordinates: g.coordinates.map(roundRing) }
    : {
        type: "MultiPolygon",
        coordinates: g.coordinates.map((p) => p.map(roundRing)),
      };

const API = "https://api.data.amsterdam.nl/v1/gebieden";
const OUT = new URL("./data/amsterdam-areas.json", import.meta.url);

interface Row {
  identificatie: string;
  naam: string;
  code: string;
  eindGeldigheid: string | null;
  ligtInStadsdeelId?: string;
  ligtInGgwgebiedId?: string;
  geometrie: AreaGeometry;
}

const fetchAll = async (table: string): Promise<Row[]> => {
  const rows: Row[] = [];
  let url: string | null =
    `${API}/${table}/?_format=json&_pageSize=500&eindGeldigheid[isnull]=true`;
  while (url) {
    const res = await fetch(url, { headers: { "Accept-Crs": "EPSG:4326" } });
    if (!res.ok) throw new Error(`${table}: HTTP ${res.status}`);
    const body = (await res.json()) as {
      _embedded: Record<string, Row[]>;
      _links: { next?: { href: string | null } };
    };
    rows.push(...(Object.values(body._embedded)[0] ?? []));
    url = body._links.next?.href ?? null;
  }
  return rows.filter((r) => !r.eindGeldigheid);
};

const main = async () => {
  const [stadsdelen, gebieden, wijken] = await Promise.all([
    fetchAll("stadsdelen"),
    fetchAll("ggwgebieden"),
    fetchAll("wijken"),
  ]);
  const codeOf = (rows: Row[]) =>
    new Map(rows.map((r) => [r.identificatie, r.code]));
  const stadsdeelCode = codeOf(stadsdelen);
  const gebiedCode = codeOf(gebieden);
  const root = { level: "municipality" as const, code: "0363" };

  const areas: AreaImport[] = [
    { ...root, name: "Amsterdam", parent: null, geometry: null },
    ...stadsdelen.map((r) => ({
      level: "borough" as const,
      code: r.code,
      name: r.naam,
      parent: root,
      geometry: simplifyGeometry(r.geometrie),
    })),
    ...gebieden.map((r) => {
      const parent = r.ligtInStadsdeelId
        ? stadsdeelCode.get(r.ligtInStadsdeelId)
        : undefined;
      if (!parent) throw new Error(`gebied ${r.naam}: no stadsdeel`);
      return {
        level: "neighbourhood" as const,
        code: r.code,
        name: r.naam,
        parent: { level: "borough" as const, code: parent },
        geometry: simplifyGeometry(r.geometrie),
      };
    }),
    ...wijken.map((r) => {
      // A few wijken (e.g. the western port) lie in no gebied: hang them
      // directly under their stadsdeel.
      const gebied = r.ligtInGgwgebiedId
        ? gebiedCode.get(r.ligtInGgwgebiedId)
        : undefined;
      const stadsdeel = r.ligtInStadsdeelId
        ? stadsdeelCode.get(r.ligtInStadsdeelId)
        : undefined;
      const parent = gebied
        ? { level: "neighbourhood" as const, code: gebied }
        : stadsdeel
          ? { level: "borough" as const, code: stadsdeel }
          : null;
      if (!parent) throw new Error(`wijk ${r.naam}: no gebied or stadsdeel`);
      return {
        level: "subNeighbourhood" as const,
        code: r.code,
        name: r.naam,
        parent,
        geometry: simplifyGeometry(r.geometrie),
      };
    }),
  ];
  const file = {
    city: "Amsterdam",
    source:
      "Gemeente Amsterdam, gebieden (https://api.data.amsterdam.nl/v1/gebieden/), CC0",
    areas,
  };
  writeFileSync(OUT, `${JSON.stringify(file)}\n`);
  console.log(
    JSON.stringify({
      stadsdelen: stadsdelen.length,
      gebieden: gebieden.length,
      wijken: wijken.length,
      bytes: JSON.stringify(file).length,
    }),
  );
};

await main();
