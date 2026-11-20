// Every enum lives here; schema, routers and UI import from this file.

/** Site-wide role on `profile`. Collection roles are separate (see below). */
export const GLOBAL_ROLES = ["user", "super_admin"] as const;
export type GlobalRole = (typeof GLOBAL_ROLES)[number];

/** Roles stored on `collection_member`. `banned` blocks contributing. */
export const MEMBER_ROLES = [
  "admin",
  "moderator",
  "contributor",
  "banned",
] as const;
export type MemberRole = (typeof MEMBER_ROLES)[number];

/** Who may propose changes without being explicitly made a contributor. */
export const CONTRIBUTION_POLICIES = ["open", "members"] as const;
export type ContributionPolicy = (typeof CONTRIBUTION_POLICIES)[number];

export const PLACE_STATUSES = ["published", "archived"] as const;
export type PlaceStatus = (typeof PLACE_STATUSES)[number];

export const PROPOSAL_KINDS = ["create", "edit", "archive"] as const;
export type ProposalKind = (typeof PROPOSAL_KINDS)[number];

export const PROPOSAL_STATUSES = [
  "pending",
  "approved",
  "rejected",
  "withdrawn",
] as const;
export type ProposalStatus = (typeof PROPOSAL_STATUSES)[number];

/** Value types a map's custom place fields can have (see `FieldDef`). */
export const FIELD_TYPES = [
  "text",
  "longtext",
  "number",
  "url",
  "select",
  "boolean",
] as const;
export type FieldType = (typeof FIELD_TYPES)[number];
export const MAX_FIELDS_PER_MAP = 30;

export const MAX_PHOTOS_PER_PLACE = 8;
export const MAX_LINKS_PER_PLACE = 6;
export const MAX_PHOTO_BYTES = 4 * 1024 * 1024;

export const SESSION_COOKIE = "dc_session";
export const SESSION_TTL_DAYS = 60;
export const LOGIN_TOKEN_TTL_MINUTES = 30;
/** Magic links one email address may request per hour. */
export const LOGIN_LINKS_PER_HOUR = 5;

/** Default marker palette offered when admins add categories. */
export const CATEGORY_COLORS = [
  "#0f766e",
  "#b45309",
  "#be123c",
  "#4338ca",
  "#15803d",
  "#a21caf",
  "#0369a1",
  "#57534e",
] as const;
