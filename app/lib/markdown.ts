/**
 * The small markdown dialect used for place bodies and documents. Parsing is
 * pure (and unit-tested); `MarkdownView` renders the result as React elements,
 * so text is always escaped and no raw HTML is ever emitted.
 *
 * Blocks: `#`–`###` headings, `-` lists, `1.` lists, `>` quotes, `---` rules,
 * picture lines and paragraphs (consecutive lines, blank-line separated).
 * Inline: `**bold**`, `*italic*`, `[text](target)`.
 *
 * Targets: `https://…` (external), `place:<id>` and `doc:<id>` (same map).
 * Pictures are a line of their own: `![caption](photo:<photoId>)`; only
 * uploaded photos are allowed, so every picture carries its credit.
 */

export type LinkTarget =
  | { kind: "external"; url: string }
  | { kind: "place"; id: string }
  | { kind: "doc"; id: string };

export type Inline =
  | { kind: "text"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "em"; text: string }
  | { kind: "link"; text: string; target: LinkTarget };

export type Block =
  | { kind: "heading"; level: 1 | 2 | 3; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "hr" }
  | { kind: "image"; photoId: string; caption: string }
  | { kind: "p"; text: string };

const HEADING = /^(#{1,3})\s+(.*)$/;
const BULLET = /^[-*]\s+/;
const ORDERED = /^\d+\.\s+/;
const QUOTE = /^>\s?/;
const RULE = /^(-{3,}|\*{3,})$/;
const IMAGE = /^!\[([^\]]*)\]\(photo:([A-Za-z0-9_-]{1,40})\)$/;
const ID = /^[A-Za-z0-9_-]{1,40}$/;
const INLINE = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

const isBlockStart = (line: string): boolean =>
  HEADING.test(line) ||
  BULLET.test(line) ||
  ORDERED.test(line) ||
  QUOTE.test(line) ||
  RULE.test(line) ||
  IMAGE.test(line);

/** Consume consecutive lines matching `rx`, stripped of the prefix. */
const takeWhile = (
  lines: string[],
  start: number,
  rx: RegExp,
): { items: string[]; next: number } => {
  const items: string[] = [];
  let i = start;
  while (i < lines.length && rx.test(lines[i] ?? "")) {
    items.push((lines[i] ?? "").replace(rx, ""));
    i++;
  }
  return { items, next: i };
};

export const parseBlocks = (content: string): Block[] => {
  const lines = content.split(/\r?\n/).map((l) => l.trim());
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] ?? "";
    if (!line) {
      i++;
      continue;
    }
    const heading = HEADING.exec(line);
    if (heading?.[1] && heading[2] !== undefined) {
      const level = heading[1].length as 1 | 2 | 3;
      blocks.push({ kind: "heading", level, text: heading[2] });
      i++;
      continue;
    }
    const image = IMAGE.exec(line);
    if (image?.[2]) {
      blocks.push({
        kind: "image",
        photoId: image[2],
        caption: image[1] ?? "",
      });
      i++;
      continue;
    }
    if (RULE.test(line)) {
      blocks.push({ kind: "hr" });
      i++;
      continue;
    }
    const lists = [
      [BULLET, "ul"],
      [ORDERED, "ol"],
    ] as const;
    const list = lists.find(([rx]) => rx.test(line));
    if (list) {
      const { items, next } = takeWhile(lines, i, list[0]);
      blocks.push({ kind: list[1], items });
      i = next;
      continue;
    }
    if (QUOTE.test(line)) {
      const { items, next } = takeWhile(lines, i, QUOTE);
      blocks.push({ kind: "quote", text: items.join(" ").trim() });
      i = next;
      continue;
    }
    const para: string[] = [];
    while (i < lines.length) {
      const current = lines[i] ?? "";
      if (!current || isBlockStart(current)) break;
      para.push(current);
      i++;
    }
    blocks.push({ kind: "p", text: para.join(" ") });
  }
  return blocks;
};

export const parseTarget = (raw: string): LinkTarget | null => {
  if (/^https?:\/\/\S+$/i.test(raw)) return { kind: "external", url: raw };
  const [scheme, id] = raw.split(":", 2);
  if (id === undefined || !ID.test(id)) return null;
  if (scheme === "place") return { kind: "place", id };
  if (scheme === "doc") return { kind: "doc", id };
  return null;
};

export const parseInline = (text: string): Inline[] =>
  text
    .split(INLINE)
    .filter((part) => part !== "")
    .map((part): Inline => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
        return { kind: "strong", text: part.slice(2, -2) };
      const link = LINK.exec(part);
      if (link?.[1] && link[2]) {
        const target = parseTarget(link[2]);
        return target
          ? { kind: "link", text: link[1], target }
          : { kind: "text", text: link[1] };
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
        return { kind: "em", text: part.slice(1, -1) };
      return { kind: "text", text: part };
    });

/** Ids of the photos a markdown text shows inline, in order of appearance. */
export const inlinePhotoIds = (content: string): string[] => [
  ...new Set(
    parseBlocks(content).flatMap((b) =>
      b.kind === "image" ? [b.photoId] : [],
    ),
  ),
];

/** Ids of places and documents a markdown text links to. */
export const linkedIds = (
  content: string,
): { places: string[]; docs: string[] } => {
  const texts = parseBlocks(content).flatMap((b) => {
    if (b.kind === "ul" || b.kind === "ol") return b.items;
    if (b.kind === "hr" || b.kind === "image") return [];
    return [b.text];
  });
  const targets = texts
    .flatMap(parseInline)
    .flatMap((i) => (i.kind === "link" ? [i.target] : []));
  const ids = (kind: "place" | "doc") => [
    ...new Set(targets.flatMap((t) => (t.kind === kind ? [t.id] : []))),
  ];
  return { places: ids("place"), docs: ids("doc") };
};
