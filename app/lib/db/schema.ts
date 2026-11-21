import { relations } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import {
  CONTRIBUTION_POLICIES,
  type ContentLang,
  DOCUMENT_ACTIONS,
  DOCUMENT_STATUSES,
  DOCUMENT_SUBJECTS,
  GLOBAL_ROLES,
  MEMBER_ROLES,
  PLACE_STATUSES,
  PROPOSAL_KINDS,
  PROPOSAL_STATUSES,
  PROPOSAL_SUBJECTS,
  ROUTE_STATUSES,
} from "~/lib/constants";
import type {
  Attributes,
  CategoryDef,
  CollectionTranslations,
  DocumentDraft,
  FieldDef,
  PlaceDraft,
  PlaceTranslations,
  RouteDraft,
  RouteLeg,
  RouteStop,
} from "~/lib/validation";

const createdAt = () => integer("created_at", { mode: "timestamp" }).notNull();

// ─── Users & auth ──────────────────────────────────────────────────

export const profile = sqliteTable(
  "profile",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    name: text("name").notNull(),
    bio: text("bio"),
    role: text("role", { enum: GLOBAL_ROLES }).notNull().default("user"),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("profile_email_idx").on(t.email)],
);

/** Single-use magic-link tokens. Only the SHA-256 hash is stored. */
export const loginToken = sqliteTable(
  "login_token",
  {
    tokenHash: text("token_hash").primaryKey(),
    email: text("email").notNull(),
    next: text("next").notNull().default("/"),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    usedAt: integer("used_at", { mode: "timestamp" }),
    createdAt: createdAt(),
  },
  (t) => [index("login_token_email_idx").on(t.email, t.createdAt)],
);

/** Browser sessions. The cookie carries the raw id; we store its hash. */
export const session = sqliteTable(
  "session",
  {
    idHash: text("id_hash").primaryKey(),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
    createdAt: createdAt(),
  },
  (t) => [index("session_profile_idx").on(t.profileId)],
);

/**
 * Personal API tokens for scripts and the `dc` CLI (Authorization: Bearer).
 * Only the SHA-256 hash is stored; the raw token is shown once.
 */
export const apiToken = sqliteTable(
  "api_token",
  {
    idHash: text("id_hash").primaryKey(),
    /** Public handle used to list/revoke ("tok_…"); not a secret. */
    publicId: text("public_id").notNull(),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
    createdAt: createdAt(),
  },
  (t) => [
    uniqueIndex("api_token_public_idx").on(t.publicId),
    index("api_token_profile_idx").on(t.profileId),
  ],
);

// ─── Collections (one collaborative map, e.g. "C-list sights") ─────

export const collection = sqliteTable("collection", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  tagline: text("tagline"),
  description: text("description"),
  city: text("city").notNull(),
  centerLat: real("center_lat").notNull(),
  centerLng: real("center_lng").notNull(),
  zoom: real("zoom").notNull().default(13),
  categories: text("categories", { mode: "json" })
    .$type<CategoryDef[]>()
    .notNull(),
  /** Custom place fields this map defines (its schema), in display order. */
  fields: text("fields", { mode: "json" })
    .$type<FieldDef[]>()
    .notNull()
    .default([]),
  /** The language the map's content is written in (the fallback). */
  language: text("language").$type<ContentLang>().notNull().default("en"),
  /** Further languages readers can switch the map's content to. */
  languages: text("languages", { mode: "json" })
    .$type<ContentLang[]>()
    .notNull()
    .default([]),
  /** The map's own texts and labels in `languages`. */
  translations: text("translations", { mode: "json" })
    .$type<CollectionTranslations>()
    .notNull()
    .default({}),
  contributionPolicy: text("contribution_policy", {
    enum: CONTRIBUTION_POLICIES,
  })
    .notNull()
    .default("open"),
  createdBy: text("created_by").references(() => profile.id, {
    onDelete: "set null",
  }),
  createdAt: createdAt(),
});

export const collectionMember = sqliteTable(
  "collection_member",
  {
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    role: text("role", { enum: MEMBER_ROLES }).notNull(),
    assignedBy: text("assigned_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.collectionId, t.profileId] })],
);

// ─── Places (POIs) ──────────────────────────────────────────────────

/**
 * The published state of a POI. Never written directly by users: every change
 * goes through a `proposal`, and approving one copies its draft here.
 */
export const place = sqliteTable(
  "place",
  {
    id: text("id").primaryKey(),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    status: text("status", { enum: PLACE_STATUSES })
      .notNull()
      .default("published"),
    /** Incremented on every approved proposal; proposals record their base. */
    revision: integer("revision").notNull().default(1),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    body: text("body").notNull().default(""),
    category: text("category").notNull(),
    lat: real("lat").notNull(),
    lng: real("lng").notNull(),
    address: text("address"),
    /**
     * Administrative location, coarse to fine, e.g. "Amsterdam" / "West" /
     * "Bos en Lommer" / "Landlust".
     */
    municipality: text("municipality"),
    borough: text("borough"),
    neighbourhood: text("neighbourhood"),
    subNeighbourhood: text("sub_neighbourhood"),
    links: text("links", { mode: "json" })
      .$type<PlaceDraft["links"]>()
      .notNull(),
    photoIds: text("photo_ids", { mode: "json" }).$type<string[]>().notNull(),
    /** Values of the map's custom fields (`collection.fields`). */
    attributes: text("attributes", { mode: "json" })
      .$type<Attributes>()
      .notNull()
      .default({}),
    /** Title/summary/body in other languages (`PlaceDraft.translations`). */
    translations: text("translations", { mode: "json" })
      .$type<PlaceTranslations>()
      .notNull()
      .default({}),
    createdBy: text("created_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("place_collection_idx").on(t.collectionId, t.status)],
);

/**
 * A route through the map: ordered stops (places or ad-hoc points) joined by
 * legs (transport mode + drawn path + directions). Like places, only ever
 * written by approving a `proposal`.
 */
export const route = sqliteTable(
  "route",
  {
    id: text("id").primaryKey(),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    status: text("status", { enum: ROUTE_STATUSES })
      .notNull()
      .default("published"),
    revision: integer("revision").notNull().default(1),
    title: text("title").notNull(),
    summary: text("summary").notNull(),
    body: text("body").notNull().default(""),
    stops: text("stops", { mode: "json" }).$type<RouteStop[]>().notNull(),
    legs: text("legs", { mode: "json" }).$type<RouteLeg[]>().notNull(),
    photoIds: text("photo_ids", { mode: "json" }).$type<string[]>().notNull(),
    translations: text("translations", { mode: "json" })
      .$type<RouteDraft["translations"]>()
      .notNull()
      .default({}),
    createdBy: text("created_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("route_collection_idx").on(t.collectionId, t.status)],
);

/**
 * A suggested change. Approved proposals double as the place's revision
 * history (ordered by `reviewedAt`), so there is no separate revision table.
 */
export const proposal = sqliteTable(
  "proposal",
  {
    id: text("id").primaryKey(),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    /** Place proposals use placeId/draft; route proposals routeId/routeDraft. */
    subject: text("subject", { enum: PROPOSAL_SUBJECTS })
      .notNull()
      .default("place"),
    placeId: text("place_id").references(() => place.id, {
      onDelete: "cascade",
    }),
    routeId: text("route_id").references(() => route.id, {
      onDelete: "cascade",
    }),
    kind: text("kind", { enum: PROPOSAL_KINDS }).notNull(),
    status: text("status", { enum: PROPOSAL_STATUSES })
      .notNull()
      .default("pending"),
    /** Full snapshot of the proposed place (null for `archive`). */
    draft: text("draft", { mode: "json" }).$type<PlaceDraft>(),
    /** Full snapshot of the proposed route (route proposals, not archive). */
    routeDraft: text("route_draft", { mode: "json" }).$type<RouteDraft>(),
    /** Contributor's note to moderators ("why this change"). */
    note: text("note"),
    baseRevision: integer("base_revision"),
    proposedBy: text("proposed_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    reviewedBy: text("reviewed_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    reviewNote: text("review_note"),
    createdAt: createdAt(),
    reviewedAt: integer("reviewed_at", { mode: "timestamp" }),
  },
  (t) => [
    index("proposal_queue_idx").on(t.collectionId, t.status, t.createdAt),
    index("proposal_place_idx").on(t.placeId, t.status),
    index("proposal_route_idx").on(t.routeId, t.status),
    index("proposal_author_idx").on(t.proposedBy, t.createdAt),
  ],
);

/** Uploaded image file. Referenced from drafts/places via `photoIds`. */
export const photo = sqliteTable("photo", {
  id: text("id").primaryKey(),
  collectionId: text("collection_id")
    .notNull()
    .references(() => collection.id, { onDelete: "cascade" }),
  /** R2 object key. */
  objectKey: text("object_key").notNull(),
  width: integer("width").notNull(),
  height: integer("height").notNull(),
  /** Attribution for photos the uploader didn't take (e.g. Wikimedia Commons). */
  credit: text("credit"),
  license: text("license"),
  sourceUrl: text("source_url"),
  uploadedBy: text("uploaded_by").references(() => profile.id, {
    onDelete: "set null",
  }),
  createdAt: createdAt(),
});

export const rating = sqliteTable(
  "rating",
  {
    placeId: text("place_id")
      .notNull()
      .references(() => place.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    score: integer("score").notNull(),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.placeId, t.profileId] })],
);

// ─── Relations ──────────────────────────────────────────────────────

export const collectionRelations = relations(collection, ({ many }) => ({
  members: many(collectionMember),
  places: many(place),
  routes: many(route),
}));

export const collectionMemberRelations = relations(
  collectionMember,
  ({ one }) => ({
    collection: one(collection, {
      fields: [collectionMember.collectionId],
      references: [collection.id],
    }),
    profile: one(profile, {
      fields: [collectionMember.profileId],
      references: [profile.id],
    }),
  }),
);

export const placeRelations = relations(place, ({ one, many }) => ({
  collection: one(collection, {
    fields: [place.collectionId],
    references: [collection.id],
  }),
  author: one(profile, { fields: [place.createdBy], references: [profile.id] }),
  proposals: many(proposal),
}));

export const routeRelations = relations(route, ({ one, many }) => ({
  collection: one(collection, {
    fields: [route.collectionId],
    references: [collection.id],
  }),
  author: one(profile, { fields: [route.createdBy], references: [profile.id] }),
  proposals: many(proposal),
}));

export const proposalRelations = relations(proposal, ({ one }) => ({
  place: one(place, { fields: [proposal.placeId], references: [place.id] }),
  route: one(route, { fields: [proposal.routeId], references: [route.id] }),
  author: one(profile, {
    fields: [proposal.proposedBy],
    references: [profile.id],
    relationName: "proposal_author",
  }),
  reviewer: one(profile, {
    fields: [proposal.reviewedBy],
    references: [profile.id],
    relationName: "proposal_reviewer",
  }),
}));

// ─── Documents ──────────────────────────────────────────────────────

/**
 * Long-form markdown with pictures (essays, biographies, background) that
 * belongs to a map and can be attached to the map itself, its places and
 * routes. Moderators+ edit documents directly; every save is kept in
 * `document_revision`.
 */
export const document = sqliteTable(
  "document",
  {
    id: text("id").primaryKey(),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    status: text("status", { enum: DOCUMENT_STATUSES })
      .notNull()
      .default("published"),
    revision: integer("revision").notNull().default(1),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    body: text("body").notNull().default(""),
    photoIds: text("photo_ids", { mode: "json" }).$type<string[]>().notNull(),
    translations: text("translations", { mode: "json" })
      .$type<DocumentDraft["translations"]>()
      .notNull()
      .default({}),
    createdBy: text("created_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    updatedBy: text("updated_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [index("document_collection_idx").on(t.collectionId, t.status)],
);

/**
 * Where a document is shown. Polymorphic (`subjectType` + `subjectId`), so
 * there is no foreign key to the subject; deleting a subject leaves a dangling
 * row that readers ignore.
 */
export const documentAttachment = sqliteTable(
  "document_attachment",
  {
    documentId: text("document_id")
      .notNull()
      .references(() => document.id, { onDelete: "cascade" }),
    subjectType: text("subject_type", { enum: DOCUMENT_SUBJECTS }).notNull(),
    subjectId: text("subject_id").notNull(),
    /** Order of the subject within the document's attachment list. */
    position: integer("position").notNull().default(0),
  },
  (t) => [
    primaryKey({ columns: [t.documentId, t.subjectType, t.subjectId] }),
    index("document_attachment_subject_idx").on(t.subjectType, t.subjectId),
  ],
);

/** Snapshot of a document after each save (its history). */
export const documentRevision = sqliteTable(
  "document_revision",
  {
    id: text("id").primaryKey(),
    documentId: text("document_id")
      .notNull()
      .references(() => document.id, { onDelete: "cascade" }),
    revision: integer("revision").notNull(),
    /** What happened: created, edited or archived. */
    action: text("action", { enum: DOCUMENT_ACTIONS }).notNull(),
    draft: text("draft", { mode: "json" }).$type<DocumentDraft>().notNull(),
    note: text("note"),
    editedBy: text("edited_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
  },
  (t) => [index("document_revision_doc_idx").on(t.documentId, t.revision)],
);

export const documentRelations = relations(document, ({ one, many }) => ({
  collection: one(collection, {
    fields: [document.collectionId],
    references: [collection.id],
  }),
  attachments: many(documentAttachment),
  revisions: many(documentRevision),
}));

export const documentAttachmentRelations = relations(
  documentAttachment,
  ({ one }) => ({
    document: one(document, {
      fields: [documentAttachment.documentId],
      references: [document.id],
    }),
  }),
);

export const documentRevisionRelations = relations(
  documentRevision,
  ({ one }) => ({
    document: one(document, {
      fields: [documentRevision.documentId],
      references: [document.id],
    }),
    editor: one(profile, {
      fields: [documentRevision.editedBy],
      references: [profile.id],
    }),
  }),
);
