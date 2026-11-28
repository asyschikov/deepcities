/**
 * Document commands for the `dc` CLI (see scripts/dc.ts). Documents are
 * authored as Markdown files with YAML front matter:
 *
 *   ---
 *   title: Michel de Klerk (1884–1923)
 *   summary: One or two sentences.
 *   kind: list                        # optional: a list (description +
 *                                     # its places, in order); default text
 *   attach:
 *     map: true                       # show on the map's front panel
 *     places: [Het Schip, Hillehuis]  # place titles or ids
 *     routes: [Kramer's bridges]      # route titles or ids
 *   photos:                           # gallery (cover = first)
 *     - commons:File:Het Schip.jpg
 *     - { source: ./portrait.jpg, credit: …, license: …, sourceUrl: … }
 *   ---
 *   Markdown body. Pictures on their own line may use any photo source:
 *   ![Caption](commons:File:X.jpg) / ![](https://…) / ![](./local.jpg)
 *   Links to places and other documents may use titles:
 *   [Het Schip](place:)  [the tower](place:Het_Schip)  [essay](doc:)
 *
 * Other languages live next to it as `<name>.<lang>.md` (e.g. essay.nl.md),
 * with only `title` and `summary` in the front matter and the translated
 * body; they are stored as the document's `translations`.
 *
 * Uploads are cached per site/map/source in ~/.config/deep-cities/, so
 * re-importing an unchanged file is a no-op.
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, isAbsolute, join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";

type Obj = Record<string, unknown>;

interface PhotoSpec {
  source: string;
  credit?: string;
  license?: string;
  sourceUrl?: string;
}

interface Attachment {
  subjectType: "collection" | "place" | "route";
  subjectId: string;
}

interface TextVersion {
  title?: string;
  summary?: string;
  body?: string;
}

interface Draft {
  kind: "text" | "list";
  title: string;
  summary: string;
  body: string;
  photoIds: string[];
  attachments: Attachment[];
  translations: Record<string, TextVersion>;
}

export interface DocDeps {
  url: string;
  query: (path: string, input?: unknown) => Promise<unknown>;
  mutate: (path: string, input: unknown) => Promise<unknown>;
  collectionOf: (
    slug: string,
  ) => Promise<{ collection: { id: string }; can: Record<string, boolean> }>;
  uploadPhoto: (
    collectionId: string,
    source: string,
    meta: Omit<PhotoSpec, "source">,
  ) => Promise<{ id: string }>;
  fail: (message: string, code: string) => never;
}

interface DocFile {
  path: string;
  kind: "text" | "list";
  title: string;
  summary: string;
  map: boolean;
  places: string[];
  routes: string[];
  photos: PhotoSpec[];
  body: string;
  /** From sibling files `<name>.<lang>.md` (front matter: title, summary). */
  translations: Record<string, TextVersion>;
}

/** `essay.nl.md` → ["essay", "nl"]; a plain `essay.md` → null. */
const LANG_FILE = /^(.*)\.([a-z]{2})\.md$/;

const FRONT = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
/** A picture line; the source runs to the last ")" (file names may contain brackets). */
const IMAGE_LINE = /^!\[([^\]]*)\]\((.+)\)[ \t]*$/gm;
// Targets may contain spaces and one level of balanced parentheses, so
// `[het blok](place:Rutgers block (Apollolaan))` resolves by title.
const REF = /\[([^\]]+)\]\((place|doc):((?:[^()\n]|\([^()\n]*\))*)\)/g;

const strings = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : v == null ? [] : [String(v)];

const photoSpecs = (v: unknown, baseDir: string): PhotoSpec[] =>
  (Array.isArray(v) ? v : []).map((p) => {
    const spec: PhotoSpec =
      typeof p === "string" ? { source: p } : { ...(p as PhotoSpec) };
    return { ...spec, source: localize(spec.source, baseDir) };
  });

/** Relative file paths are relative to the document file. */
const localize = (source: string, baseDir: string) =>
  /^(https?:|commons:|photo:)/.test(source) || isAbsolute(source)
    ? source
    : resolve(baseDir, source);

export const parseDocFile = (path: string, fail: DocDeps["fail"]): DocFile => {
  const text = readFileSync(path, "utf8");
  const m = FRONT.exec(text);
  if (!m?.[1])
    fail(`${path}: missing YAML front matter (--- … ---)`, "BAD_DOC");
  const front = (parseYaml(m?.[1] ?? "") ?? {}) as Obj;
  const attach = (front.attach ?? {}) as Obj;
  const title = String(front.title ?? "").trim();
  if (title.length < 2) fail(`${path}: "title" is required`, "BAD_DOC");
  const kind = front.kind ?? "text";
  if (kind !== "text" && kind !== "list")
    fail(`${path}: "kind" must be text or list`, "BAD_DOC");
  return {
    path,
    kind: kind === "list" ? "list" : "text",
    title,
    summary: String(front.summary ?? "").trim(),
    map: attach.map === true,
    places: strings(attach.places),
    routes: strings(attach.routes),
    photos: photoSpecs(front.photos, dirname(path)),
    body: text.slice(m?.[0].length ?? 0).trim(),
    translations: Object.fromEntries(
      readdirSync(dirname(path)).flatMap((f) => {
        const lm = LANG_FILE.exec(f);
        if (!lm || `${lm[1]}.md` !== basename(path)) return [];
        const t = readFileSync(join(dirname(path), f), "utf8");
        const tm = FRONT.exec(t);
        const tf = (parseYaml(tm?.[1] ?? "") ?? {}) as Obj;
        const version: TextVersion = {
          title: String(tf.title ?? "").trim() || undefined,
          summary: String(tf.summary ?? "").trim() || undefined,
          body: t.slice(tm?.[0].length ?? 0).trim() || undefined,
        };
        return [[lm[2] ?? "", version]];
      }),
    ),
  };
};

const docFiles = (paths: string[]): string[] =>
  paths.flatMap((p) =>
    statSync(p).isDirectory()
      ? readdirSync(p)
          .filter(
            (f) =>
              f.endsWith(".md") && !f.startsWith("_") && !LANG_FILE.test(f),
          )
          .sort()
          .map((f) => join(p, f))
      : [p],
  );

// ─── photo upload cache ──────────────────────────────────────────────

const CACHE_PATH = join(
  homedir(),
  ".config",
  "deep-cities",
  "photo-cache.json",
);
const loadCache = (): Record<string, string> =>
  existsSync(CACHE_PATH) ? JSON.parse(readFileSync(CACHE_PATH, "utf8")) : {};
const saveCache = (cache: Record<string, string>) => {
  mkdirSync(dirname(CACHE_PATH), { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 1));
};

/** Translations without empty fields, in a stable key order. */
const canonical = (t: Record<string, TextVersion> | undefined) =>
  Object.entries(t ?? {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([lang, v]) => [lang, v.title ?? "", v.summary ?? "", v.body ?? ""]);

const sameDraft = (a: Draft, b: Draft) =>
  JSON.stringify([
    a.kind,
    a.title,
    a.summary,
    a.body,
    a.photoIds,
    a.attachments,
    canonical(a.translations),
  ]) ===
  JSON.stringify([
    b.kind,
    b.title,
    b.summary,
    b.body,
    b.photoIds,
    b.attachments,
    canonical(b.translations),
  ]);

const norm = (s: string) =>
  decodeURIComponent(s).replace(/_/g, " ").trim().toLowerCase();

export const makeDocCommands = (deps: DocDeps) => {
  const { query, mutate, collectionOf, fail } = deps;

  const allDocs = async (collectionId: string) =>
    (await query("document.list", { collectionId })) as {
      id: string;
      title: string;
    }[];

  const allPlaces = async (collectionId: string) =>
    (await query("place.list", { collectionId })) as {
      id: string;
      title: string;
    }[];

  return {
    docs: async ([slug]: string[], flags: Record<string, string>) => {
      const { collection } = await collectionOf(
        slug ?? fail("<slug>", "USAGE"),
      );
      const subject = flags.place
        ? { subjectType: "place", subjectId: flags.place }
        : flags.route
          ? { subjectType: "route", subjectId: flags.route }
          : flags.map !== undefined
            ? { subjectType: "collection", subjectId: collection.id }
            : undefined;
      return query("document.list", { collectionId: collection.id, subject });
    },

    doc: ([id]: string[]) =>
      query("document.byId", { documentId: id ?? fail("<docId>", "USAGE") }),

    "doc-archive": async ([id]: string[], flags: Record<string, string>) =>
      mutate("document.archive", {
        documentId: id ?? fail("<docId>", "USAGE"),
        note: flags.note ?? fail("--note is required", "USAGE"),
      }),

    "doc-import": async (
      [slug, ...paths]: string[],
      flags: Record<string, string>,
    ) => {
      if (!slug || paths.length === 0)
        fail("usage: dc doc-import <slug> <file.md|dir>...", "USAGE");
      const { collection } = await collectionOf(slug ?? "");
      const collectionId = collection.id;
      const dry = flags["dry-run"] !== undefined;
      const files = docFiles(paths).map((p) => parseDocFile(p, fail));
      const [places, existing, routes] = await Promise.all([
        allPlaces(collectionId),
        allDocs(collectionId),
        query("route.list", { collectionId }) as Promise<
          { id: string; title: string }[]
        >,
      ]);
      const routeIds = new Set(routes.map((r) => r.id));
      const routeByTitle = new Map(routes.map((r) => [norm(r.title), r.id]));
      const placeIds = new Set(places.map((p) => p.id));
      const placeByTitle = new Map(places.map((p) => [norm(p.title), p.id]));
      const docByTitle = new Map(existing.map((d) => [norm(d.title), d.id]));
      const docIds = new Set(existing.map((d) => d.id));
      const errors: string[] = [];

      const resolvePlace = (ref: string, text: string, file: string) => {
        if (placeIds.has(ref)) return ref;
        const id = placeByTitle.get(norm(ref || text));
        if (!id) errors.push(`${file}: no place titled "${ref || text}" `);
        return id ?? ref;
      };
      const resolveRoute = (ref: string, file: string) => {
        if (routeIds.has(ref)) return ref;
        const id = routeByTitle.get(norm(ref));
        if (!id) errors.push(`${file}: no route titled "${ref}"`);
        return id ?? ref;
      };
      const resolveDoc = (ref: string, text: string, file: string) => {
        if (docIds.has(ref)) return ref;
        const id = docByTitle.get(norm(ref || text));
        if (!id && !dry)
          errors.push(`${file}: no document titled "${ref || text}"`);
        return id ?? ref;
      };

      // All new documents are created first (title only), in file order:
      // every doc: link can then be resolved, and lists (ordered by creation)
      // follow the file order, e.g. 01-introduction.md first.
      const stubs = files.filter((f) => !docByTitle.has(norm(f.title)));
      const stubbed = new Set(stubs.map((f) => norm(f.title)));
      for (const f of stubs) {
        if (dry) {
          docByTitle.set(norm(f.title), `(new:${f.title})`);
          continue;
        }
        const res = (await mutate("document.save", {
          collectionId,
          draft: {
            kind: f.kind,
            title: f.title,
            summary: f.summary,
            body: "",
            photoIds: [],
            attachments: [],
          },
          note: "Created by dc doc-import",
        })) as { id: string };
        docByTitle.set(norm(f.title), res.id);
        docIds.add(res.id);
      }

      const cache = loadCache();
      const upload = async (spec: PhotoSpec): Promise<string> => {
        if (spec.source.startsWith("photo:")) return spec.source.slice(6);
        const key = `${deps.url}|${collectionId}|${spec.source}`;
        const hit = cache[key];
        // A cached id may be gone (database reset, photo deleted): check it.
        // GET, not HEAD: the photo route only answers GET.
        if (hit) {
          const res = await fetch(`${deps.url}/media/photos/${hit}`).catch(
            () => null,
          );
          await res?.body?.cancel();
          if (res?.ok) return hit;
        }
        if (dry) return `(upload:${spec.source})`;
        const { source, ...meta } = spec;
        const { id } = await deps.uploadPhoto(collectionId, source, meta);
        cache[key] = id;
        saveCache(cache);
        return id;
      };

      const results: Obj[] = [];
      for (const f of files) {
        const file = f.path;
        try {
          // Upload pictures and resolve place:/doc: links by title.
          const prepare = async (text: string) => {
            let out = text;
            for (const m of [...out.matchAll(IMAGE_LINE)]) {
              const [line, caption = "", src = ""] = m;
              if (/^photo:[A-Za-z0-9_-]+$/.test(src)) continue;
              const id = await upload({
                source: localize(src.trim(), dirname(file)),
              });
              out = out.replace(line, `![${caption}](photo:${id})`);
            }
            return out.replace(
              REF,
              (_all, label: string, kind: string, ref: string) => {
                const id =
                  kind === "place"
                    ? resolvePlace(ref, label, file)
                    : resolveDoc(ref, label, file);
                return `[${label}](${kind}:${id})`;
              },
            );
          };
          const body = await prepare(f.body);
          const translations: Record<string, TextVersion> = {};
          for (const [lang, v] of Object.entries(f.translations))
            translations[lang] = {
              ...v,
              body: v.body ? await prepare(v.body) : undefined,
            };
          const gallery: string[] = [];
          for (const p of f.photos) gallery.push(await upload(p));
          const attachments: Attachment[] = [
            ...(f.map
              ? [
                  {
                    subjectType: "collection" as const,
                    subjectId: collectionId,
                  },
                ]
              : []),
            ...f.places.map((p) => ({
              subjectType: "place" as const,
              subjectId: resolvePlace(p, p, file),
            })),
            ...f.routes.map((r) => ({
              subjectType: "route" as const,
              subjectId: resolveRoute(r, file),
            })),
          ];
          const draft: Draft = {
            kind: f.kind,
            title: f.title,
            summary: f.summary,
            body,
            photoIds: [...new Set(gallery)],
            attachments,
            translations,
          };
          if (errors.length > 0) throw new Error(errors.splice(0).join("; "));
          const id = docByTitle.get(norm(f.title));
          if (dry) {
            results.push({
              file,
              title: f.title,
              action: id ? "update" : "create",
              draft,
            });
            continue;
          }
          if (id) {
            const cur = (await query("document.byId", { documentId: id })) as {
              document: Draft & { revision: number };
              attachments: Attachment[];
            };
            const current: Draft = {
              ...cur.document,
              attachments: cur.attachments.map(
                ({ subjectType, subjectId }) => ({
                  subjectType,
                  subjectId,
                }),
              ),
            };
            // The server appends inline pictures to photoIds; compare like with like.
            const inline = [
              body,
              ...Object.values(translations).map((v) => v.body ?? ""),
            ]
              .flatMap((b) => [...b.matchAll(/\(photo:([A-Za-z0-9_-]+)\)/g)])
              .map((x) => x[1] ?? "");
            const expected = {
              ...draft,
              photoIds: [...new Set([...draft.photoIds, ...inline])],
            };
            if (sameDraft(expected, current)) {
              results.push({ file, title: f.title, id, action: "unchanged" });
              continue;
            }
            const res = await mutate("document.save", {
              collectionId,
              documentId: id,
              baseRevision: cur.document.revision,
              draft,
              note: flags.note ?? null,
            });
            results.push({
              file,
              title: f.title,
              action: stubbed.has(norm(f.title)) ? "created" : "updated",
              ...(res as Obj),
            });
          } else {
            const res = (await mutate("document.save", {
              collectionId,
              draft,
              note: flags.note ?? null,
            })) as { id: string };
            docByTitle.set(norm(f.title), res.id);
            results.push({ file, title: f.title, action: "created", ...res });
          }
        } catch (err) {
          // A title-only stub this run created for the file would stay
          // published, empty: archive it (kept in history).
          const stubId = stubbed.has(norm(f.title))
            ? docByTitle.get(norm(f.title))
            : undefined;
          const stubArchived =
            !dry && stubId
              ? await mutate("document.archive", {
                  documentId: stubId,
                  note: "dc doc-import failed for this file",
                }).then(
                  () => true,
                  () => false,
                )
              : undefined;
          results.push({
            file,
            title: f.title,
            action: "failed",
            error: err instanceof Error ? err.message : String(err),
            ...(stubArchived === undefined ? {} : { stubId, stubArchived }),
          });
        }
      }
      const count = (a: string) => results.filter((r) => r.action === a).length;
      if (count("failed") > 0) process.exitCode = 1;
      return {
        summary: {
          files: files.length,
          created: count("created"),
          updated: count("updated"),
          unchanged: count("unchanged"),
          failed: count("failed"),
          dryRun: dry,
        },
        results,
      };
    },
  };
};

export const DOC_HELP = `
DOCUMENTS  (long-form markdown + pictures; moderators+ write, published immediately)
  dc docs <slug> [--map | --place ID | --route ID]
                                           documents of a map, or attached to one subject
  dc doc <docId>                           full document: body, photos, attachments, history
  dc doc-import <slug> <file.md|dir>... [--dry-run] [--note TEXT]
                                           create/update documents from Markdown files with
                                           YAML front matter (title is the key; see
                                           scripts/dc-docs.ts for the format). Pictures in the
                                           body (![c](commons:File:…|https://…|./x.jpg)) and
                                           front-matter photos are uploaded once and cached;
                                           [text](place:) / [text](doc:) links resolve by title
                                           other languages: <name>.<lang>.md next to the file
  dc doc-archive <docId> --note TEXT       hide a document (kept in history)
`;
