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

/** What a proposal changes. */
export const PROPOSAL_SUBJECTS = ["place", "route"] as const;
export type ProposalSubject = (typeof PROPOSAL_SUBJECTS)[number];

export const ROUTE_STATUSES = ["published", "archived"] as const;

/** How you get from one route stop to the next. */
export const TRANSPORT_MODES = [
  "walk",
  "bike",
  "tram",
  "bus",
  "metro",
  "ferry",
  "train",
] as const;
export type TransportMode = (typeof TRANSPORT_MODES)[number];
/** Modes the street router can snap to (OSM foot/bike profiles). */
export const SNAPPABLE_MODES: readonly TransportMode[] = ["walk", "bike"];
/** Rough average speeds (km/h) for time estimates, incl. waiting for transit. */
export const MODE_SPEED_KMH: Record<TransportMode, number> = {
  walk: 4.5,
  bike: 14,
  tram: 14,
  bus: 16,
  metro: 28,
  ferry: 10,
  train: 50,
};
/** Line colours per mode on the map. */
export const MODE_COLORS: Record<TransportMode, string> = {
  walk: "#c2410c",
  bike: "#15803d",
  tram: "#4338ca",
  bus: "#0369a1",
  metro: "#be123c",
  ferry: "#0e7490",
  train: "#57534e",
};
export const MAX_STOPS_PER_ROUTE = 30;
export const MAX_VIA_PER_LEG = 25;
export const MAX_PATH_POINTS_PER_LEG = 4000;

/**
 * Languages a map's content (places, routes, map texts) can be written in.
 * Not the UI language: that is i18n via `t()`. Names are in the language itself.
 */
export const CONTENT_LANGUAGES = [
  "en",
  "nl",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "pl",
  "uk",
  "tr",
  "zh",
  "ja",
] as const;
export type ContentLang = (typeof CONTENT_LANGUAGES)[number];
export const CONTENT_LANGUAGE_NAMES: Record<ContentLang, string> = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  pl: "Polski",
  uk: "Українська",
  tr: "Türkçe",
  zh: "中文",
  ja: "日本語",
};
export const DEFAULT_CONTENT_LANGUAGE: ContentLang = "en";

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
