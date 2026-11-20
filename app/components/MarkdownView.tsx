import type { ReactNode } from "react";

/**
 * Minimal markdown renderer for trusted, admin-authored content
 * (e.g. discussion guides). Supports #/##/### headings, **bold**,
 * *italic*, "-" bullet lists, "1." ordered lists, and blank-line
 * separated paragraphs.
 *
 * Builds React elements directly (no dangerouslySetInnerHTML), so all
 * text content is inherently escaped by React.
 */

type Block =
  | { kind: "heading"; level: 1 | 2 | 3; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "p"; text: string };

const HEADING = /^(#{1,3})\s+(.*)$/;
const BULLET = /^-\s+/;
const ORDERED = /^\d+\.\s+/;
const BOLD_OR_ITALIC = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

const isBlockStart = (line: string): boolean =>
  HEADING.test(line) || BULLET.test(line) || ORDERED.test(line);

const parseBlocks = (content: string): Block[] => {
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
      blocks.push({
        kind: "heading",
        level: heading[1].length as 1 | 2 | 3,
        text: heading[2],
      });
      i++;
      continue;
    }

    if (BULLET.test(line)) {
      const items: string[] = [];
      while (i < lines.length && BULLET.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(BULLET, ""));
        i++;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }

    if (ORDERED.test(line)) {
      const items: string[] = [];
      while (i < lines.length && ORDERED.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(ORDERED, ""));
        i++;
      }
      blocks.push({ kind: "ol", items });
      continue;
    }

    // Paragraph: consecutive plain lines joined with spaces
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

/** Render **bold** and *italic* spans within a line of text. */
const renderInline = (text: string, keyPrefix: string): ReactNode[] =>
  text
    .split(BOLD_OR_ITALIC)
    .filter((part) => part !== "")
    .map((part, idx) => {
      const key = `${keyPrefix}-${idx}`;
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return <strong key={key}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return <em key={key}>{part.slice(1, -1)}</em>;
      }
      return <span key={key}>{part}</span>;
    });

const HEADING_CLASSES: Record<1 | 2 | 3, string> = {
  1: "text-xl font-semibold tracking-tight",
  2: "text-lg font-semibold tracking-tight",
  3: "text-base font-semibold",
};

const renderListItems = (items: string[], blockKey: string): ReactNode[] =>
  items.map((item, idx) => {
    const key = `${blockKey}-${idx}-${item.slice(0, 20)}`;
    return <li key={key}>{renderInline(item, key)}</li>;
  });

const MarkdownBlock = ({
  block,
  blockKey,
}: {
  block: Block;
  blockKey: string;
}) => {
  switch (block.kind) {
    case "heading": {
      const Tag = `h${block.level}` as const;
      return (
        <Tag className={HEADING_CLASSES[block.level]}>
          {renderInline(block.text, blockKey)}
        </Tag>
      );
    }
    case "ul":
      return (
        <ul className="list-disc space-y-1 pl-5">
          {renderListItems(block.items, blockKey)}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-1 pl-5">
          {renderListItems(block.items, blockKey)}
        </ol>
      );
    case "p":
      return <p>{renderInline(block.text, blockKey)}</p>;
  }
};

export const MarkdownView = ({ content }: { content: string }) => (
  <div className="space-y-3 text-sm leading-relaxed">
    {parseBlocks(content).map((block, idx) => {
      const key = `${idx}-${block.kind}`;
      return <MarkdownBlock key={key} block={block} blockKey={key} />;
    })}
  </div>
);
