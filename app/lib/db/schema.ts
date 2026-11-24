import { relations } from "drizzle-orm";
import {
  type AnySQLiteColumn,
  index,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";
import {
  AREA_LEVELS,
  CHECKIN_PHOTO_KINDS,
  CONTRIBUTION_POLICIES,
  type ContentLang,
  DOCUMENT_ACTIONS,
  DOCUMENT_STATUSES,
  DOCUMENT_SUBJECTS,
  GLOBAL_ROLES,
  MEMBER_ROLES,
  PLACE_DETAILS,
  PLACE_STATUSES,
  PROPOSAL_KINDS,
  PROPOSAL_STATUSES,
  PROPOSAL_SUBJECTS,
  ROUTE_MODES,
  ROUTE_STATUSES,
  VERDICTS,
} from "~/lib/constants";
import type {
  Attributes,
  CategoryDef,
  CollectionTranslations,
  DocumentDraft,
  FieldDef,
  MapView,
  OverrideAttributes,
  OverrideDraft,
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
    /** Portrait in R2 at `avatars/<avatarId>`; a new id on every upload. */
    avatarId: text("avatar_id"),
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
  /**
   * The city's own map ("Deep Amsterdam"): breadcrumbs stop at the city,
   * and the city page lists it first.
   */
  cityDefault: integer("city_default", { mode: "boolean" })
    .notNull()
    .default(false),
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
  /**
   * Set on a view map: it has no places of its own and shows places of
   * `view.source` (see `MapView`, app/lib/views.ts). Null for a home map.
   */
  view: text("view", { mode: "json" }).$type<MapView | null>(),
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

// ─── Areas (a city's official divisions, shared by its maps) ──────────

/** GeoJSON (Multi)Polygon in WGS84, as [lng, lat]. */
export type AreaGeometry =
  | { type: "Polygon"; coordinates: [number, number][][] }
  | { type: "MultiPolygon"; coordinates: [number, number][][][] };

/**
 * One official area, e.g. Amsterdam → West → Bos en Lommer → Landlust.
 * Shared by every map whose `collection.city` matches; reference data that
 * only super admins replace (`dc areas-import`), so not proposal-based.
 */
export const area = sqliteTable(
  "area",
  {
    id: text("id").primaryKey(),
    city: text("city").notNull(),
    level: text("level", { enum: AREA_LEVELS }).notNull(),
    /** The official code within the city and level (e.g. stadsdeel "E"). */
    code: text("code").notNull(),
    name: text("name").notNull(),
    parentId: text("parent_id"),
    /** Null for the root (the whole city). Simplified for display. */
    geometry: text("geometry", { mode: "json" }).$type<AreaGeometry | null>(),
    /** [minLng, minLat, maxLng, maxLat]. */
    bbox: text("bbox", { mode: "json" }).$type<
      [number, number, number, number] | null
    >(),
    source: text("source"),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [
    uniqueIndex("area_city_level_code_idx").on(t.city, t.level, t.code),
    index("area_parent_idx").on(t.parentId),
  ],
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
    /**
     * The cluster this place belongs to (a place on the same home map). A
     * cluster is an ordinary place that has children.
     */
    parentId: text("parent_id").references((): AnySQLiteColumn => place.id, {
      onDelete: "set null",
    }),
    /** `city`: on the home map; `district`: only in full-detail views. */
    detail: text("detail", { enum: PLACE_DETAILS }).notNull().default("city"),
    createdBy: text("created_by").references(() => profile.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [
    index("place_collection_idx").on(t.collectionId, t.status),
    index("place_parent_idx").on(t.parentId),
  ],
);

/**
 * A view map's own values for one of its source's places (see
 * app/lib/overrides.ts): `attributes` holds only the overridden keys (null:
 * unset on this map), `category` replaces the place's when set. Only ever
 * written by approving an `override` proposal; no-op keys are not stored.
 */
export const placeOverride = sqliteTable(
  "place_override",
  {
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    placeId: text("place_id")
      .notNull()
      .references(() => place.id, { onDelete: "cascade" }),
    attributes: text("attributes", { mode: "json" })
      .$type<OverrideAttributes>()
      .notNull()
      .default({}),
    category: text("category"),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
    updatedBy: text("updated_by").references(() => profile.id, {
      onDelete: "set null",
    }),
  },
  (t) => [
    primaryKey({ columns: [t.collectionId, t.placeId] }),
    index("place_override_place_idx").on(t.placeId),
  ],
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
    /** Main mode: a walk or a ride (legs may use other transport). */
    mode: text("mode", { enum: ROUTE_MODES }).notNull().default("walk"),
    /** Ends where it starts. */
    loop: integer("loop", { mode: "boolean" }).notNull().default(false),
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
    /**
     * Place proposals use placeId/draft; route proposals routeId/routeDraft;
     * override proposals placeId/overrideDraft (on the view map).
     */
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
    /**
     * Override proposals: the view map's (`collectionId`) complete proposed
     * override for `placeId` (empty: back to the home values).
     */
    overrideDraft: text("override_draft", {
      mode: "json",
    }).$type<OverrideDraft>(),
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

/** One visitor's verdict on a place (amazing / nice / okay / skip). */
export const verdict = sqliteTable(
  "verdict",
  {
    placeId: text("place_id")
      .notNull()
      .references(() => place.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    verdict: text("verdict", { enum: VERDICTS }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  },
  (t) => [primaryKey({ columns: [t.placeId, t.profileId] })],
);

/**
 * "I was here": a visit to a place, private to the visitor. A place can be
 * checked in to again on later visits.
 */
export const checkin = sqliteTable(
  "checkin",
  {
    id: text("id").primaryKey(),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    placeId: text("place_id")
      .notNull()
      .references(() => place.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    /** Checked in while following this route. */
    routeId: text("route_id").references(() => route.id, {
      onDelete: "set null",
    }),
    /** Where the visitor was, when the phone knew (null: marked from afar). */
    lat: real("lat"),
    lng: real("lng"),
    accuracy: real("accuracy"),
    createdAt: createdAt(),
  },
  (t) => [
    index("checkin_profile_idx").on(t.profileId, t.createdAt),
    index("checkin_place_idx").on(t.placeId, t.profileId),
  ],
);

/**
 * A photo taken at a check-in. Private: only its owner can see it. A photo
 * of the place is also offered to the place (`photoId`, through a proposal).
 */
export const checkinPhoto = sqliteTable(
  "checkin_photo",
  {
    id: text("id").primaryKey(),
    checkinId: text("checkin_id")
      .notNull()
      .references(() => checkin.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    kind: text("kind", { enum: CHECKIN_PHOTO_KINDS }).notNull(),
    /** R2 object key. */
    objectKey: text("object_key").notNull(),
    width: integer("width").notNull(),
    height: integer("height").notNull(),
    /** The public photo offered to the place, for `kind: "place"`. */
    photoId: text("photo_id").references(() => photo.id, {
      onDelete: "set null",
    }),
    createdAt: createdAt(),
  },
  (t) => [index("checkin_photo_checkin_idx").on(t.checkinId)],
);

/**
 * "It's gone, or I couldn't find it": a visitor's report on a place, one per
 * person (reporting again refreshes it). Moderators act on reports (mark the
 * place gone, archive it) or dismiss them when it's still there.
 */
export const goneReport = sqliteTable(
  "gone_report",
  {
    placeId: text("place_id")
      .notNull()
      .references(() => place.id, { onDelete: "cascade" }),
    profileId: text("profile_id")
      .notNull()
      .references(() => profile.id, { onDelete: "cascade" }),
    collectionId: text("collection_id")
      .notNull()
      .references(() => collection.id, { onDelete: "cascade" }),
    note: text("note"),
    /** Where the reporter was, when the phone knew. */
    lat: real("lat"),
    lng: real("lng"),
    accuracy: real("accuracy"),
    createdAt: createdAt(),
  },
  (t) => [
    primaryKey({ columns: [t.placeId, t.profileId] }),
    index("gone_report_collection_idx").on(t.collectionId),
  ],
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

export const checkinRelations = relations(checkin, ({ one, many }) => ({
  place: one(place, { fields: [checkin.placeId], references: [place.id] }),
  collection: one(collection, {
    fields: [checkin.collectionId],
    references: [collection.id],
  }),
  photos: many(checkinPhoto),
}));

export const checkinPhotoRelations = relations(checkinPhoto, ({ one }) => ({
  checkin: one(checkin, {
    fields: [checkinPhoto.checkinId],
    references: [checkin.id],
  }),
}));

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
