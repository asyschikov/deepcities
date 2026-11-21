import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PhotoCredit, type PhotoMeta } from "~/components/PhotoCredit";
import {
  type Block,
  type Inline,
  parseBlocks,
  parseInline,
} from "~/lib/markdown";
import { type PageKind, useIsPeerOf } from "~/lib/nav-history";
import { photoUrl } from "~/lib/utils";

/**
 * Renders the markdown dialect of `~/lib/markdown` as React elements (no
 * dangerouslySetInnerHTML, so all text is escaped). `slug` enables
 * `place:`/`doc:` links; `photos` supplies credits for inline pictures.
 */
interface Context {
  slug?: string;
  photos?: Map<string, PhotoMeta>;
  /** Links to a page of the current page's kind replace it (no stacking). */
  peer?: (kind: PageKind) => boolean;
}

const renderInline = (
  text: string,
  keyPrefix: string,
  { slug, peer }: Context,
): ReactNode[] =>
  parseInline(text).map((part: Inline, idx) => {
    const key = `${keyPrefix}-${idx}`;
    switch (part.kind) {
      case "strong":
        return <strong key={key}>{part.text}</strong>;
      case "em":
        return <em key={key}>{part.text}</em>;
      case "text":
        return <span key={key}>{part.text}</span>;
      case "link": {
        const { target } = part;
        const cls = "text-primary underline-offset-2 hover:underline";
        if (target.kind === "external")
          return (
            <a
              key={key}
              href={target.url}
              target="_blank"
              rel="noreferrer nofollow ugc"
              className={cls}
            >
              {part.text}
            </a>
          );
        if (!slug) return <span key={key}>{part.text}</span>;
        return target.kind === "place" ? (
          <Link
            key={key}
            to="/m/$slug/p/$placeId"
            params={{ slug, placeId: target.id }}
            replace={peer?.("place")}
            className={cls}
          >
            {part.text}
          </Link>
        ) : (
          <Link
            key={key}
            to="/m/$slug/d/$docId"
            params={{ slug, docId: target.id }}
            replace={peer?.("doc")}
            className={cls}
          >
            {part.text}
          </Link>
        );
      }
    }
    return null;
  });

const HEADING_CLASSES: Record<1 | 2 | 3, string> = {
  1: "text-xl font-semibold tracking-tight",
  2: "text-lg font-semibold tracking-tight",
  3: "text-base font-semibold",
};

const MarkdownBlock = ({
  block,
  blockKey,
  ctx,
}: {
  block: Block;
  blockKey: string;
  ctx: Context;
}) => {
  const items = (list: string[]) =>
    list.map((item, idx) => {
      const key = `${blockKey}-${idx}-${item.slice(0, 20)}`;
      return <li key={key}>{renderInline(item, key, ctx)}</li>;
    });
  switch (block.kind) {
    case "heading": {
      const Tag = `h${block.level}` as const;
      return (
        <Tag className={HEADING_CLASSES[block.level]}>
          {renderInline(block.text, blockKey, ctx)}
        </Tag>
      );
    }
    case "ul":
      return <ul className="list-disc space-y-1 pl-5">{items(block.items)}</ul>;
    case "ol":
      return (
        <ol className="list-decimal space-y-1 pl-5">{items(block.items)}</ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-brick/60 pl-3 italic text-foreground/80">
          {renderInline(block.text, blockKey, ctx)}
        </blockquote>
      );
    case "hr":
      return <hr className="border-border" />;
    case "image": {
      const meta = ctx.photos?.get(block.photoId);
      return (
        <figure className="space-y-1">
          <img
            src={photoUrl(block.photoId)}
            alt={block.caption}
            loading="lazy"
            width={meta?.width}
            height={meta?.height}
            className="h-auto w-full rounded-md bg-muted"
          />
          {block.caption && (
            <figcaption className="text-xs text-muted-foreground">
              {renderInline(block.caption, blockKey, ctx)}
            </figcaption>
          )}
          <PhotoCredit photo={meta} />
        </figure>
      );
    }
    case "p":
      return <p>{renderInline(block.text, blockKey, ctx)}</p>;
  }
};

export const MarkdownView = ({
  content,
  slug,
  photos,
}: {
  content: string;
  slug?: string;
  photos?: PhotoMeta[];
}) => {
  const peer = useIsPeerOf();
  const ctx: Context = {
    slug,
    peer,
    photos: photos ? new Map(photos.map((p) => [p.id, p])) : undefined,
  };
  return (
    <div className="space-y-3 text-sm leading-relaxed">
      {parseBlocks(content).map((block, idx) => {
        const key = `${idx}-${block.kind}`;
        return (
          <MarkdownBlock key={key} block={block} blockKey={key} ctx={ctx} />
        );
      })}
    </div>
  );
};
