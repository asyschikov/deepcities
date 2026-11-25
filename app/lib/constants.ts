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

/**
 * How fine-grained a place is: `city` places show on their home (citywide)
 * map; `district` places only in views that ask for full detail; `theme`
 * places only in list views that include them (e.g. an A-list place a
 * theme map needs but the general maps leave out).
 */
export const PLACE_DETAILS = ["city", "district", "theme"] as const;
export type PlaceDetail = (typeof PLACE_DETAILS)[number];

/**
 * What a view map shows of its source: `city` its city-level places, `full`
 * every place except cluster parents (the leaves at full detail).
 */
export const VIEW_DETAILS = ["city", "full"] as const;
export type ViewDetail = (typeof VIEW_DETAILS)[number];

/**
 * What a proposal changes: a place, a route, a view map's own values for
 * one of its places (`place_override`), or whether a list view includes a
 * place (`collection_place`; kind `create` adds, `archive` removes).
 */
export const PROPOSAL_SUBJECTS = [
  "place",
  "route",
  "override",
  "membership",
] as const;
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
/**
 * A route's main mode: what it is (a walk or a ride). Its legs may still use
 * other transport (a ferry across the IJ, a tram back).
 */
export const ROUTE_MODES = ["walk", "bike"] as const;
export type RouteMode = (typeof ROUTE_MODES)[number];

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

/**
 * Levels of a city's official area hierarchy, coarse to fine. Named like the
 * place fields; in Amsterdam: gemeente / stadsdeel / gebied / wijk.
 */
/** Place pin sizes on the map; medium is the default. */
export const PIN_SIZES = ["large", "medium", "small"] as const;
export const DEFAULT_PIN_SIZE: PinSize = "medium";
export type PinSize = (typeof PIN_SIZES)[number];
/** Pin width in px for each size. */
export const PIN_PX: Record<PinSize, number> = {
  large: 26,
  medium: 18,
  small: 12,
};

export const AREA_LEVELS = [
  "municipality",
  "borough",
  "neighbourhood",
  "subNeighbourhood",
] as const;
export type AreaLevel = (typeof AREA_LEVELS)[number];

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

/**
 * Key of a map's extra description: a longtext field whose value is shown as
 * part of the place's description (after the body), not as a field row. A
 * theme map adds topical text to shared places with it, through overrides,
 * without rewriting their description.
 */
export const EXTRA_DESCRIPTION_KEY = "extra_description";

/**
 * A visitor's verdict on a place, the same scale as the map's own rank:
 * worth going out of your way, worth a stop if you're near, a footnote,
 * or not worth it. Words, not stars: star averages all end up at 4.5.
 */
export const VERDICTS = ["amazing", "nice", "okay", "skip"] as const;
export type Verdict = (typeof VERDICTS)[number];

/**
 * Check-in photos: of the place (offered to it), or a selfie (kept with the
 * visit and the place, never shown on the map; private if you choose).
 */
export const CHECKIN_PHOTO_KINDS = ["selfie", "place"] as const;
export type CheckinPhotoKind = (typeof CHECKIN_PHOTO_KINDS)[number];
export const MAX_PHOTOS_PER_CHECKIN = 6;

/**
 * A check-in counts only on the spot: within this many metres of the place
 * (more when the phone's own accuracy is worse, up to VISIT_MAX_SLACK_M).
 */
export const VISIT_REACH_M = 100;
export const VISIT_MAX_SLACK_M = 150;

/**
 * Quick corrections a visitor can send from a place: it's there, it's
 * gone, they couldn't find it, the pin is off, it's closed or not
 * accessible, or it looks different from the description. Each goes to the
 * map's moderators.
 */
export const REPORT_KINDS = [
  "there",
  "gone",
  "not_found",
  "wrong_location",
  "closed",
  "changed",
] as const;
export type ReportKind = (typeof REPORT_KINDS)[number];

/**
 * Explorer points. One score for now; every kind of exploring counts,
 * weighted to what you bring back (photos, verdicts) over just being there.
 * Each award has a key so it is paid at most once (see `lib/score.ts`).
 */
export const SCORE_POINTS = {
  /** A check-in on the spot (one per place, ever). */
  checkin: 2,
  /** The first check-in anyone ever made at the place. */
  first_visit: 3,
  /** A verdict on a place (once per place). */
  verdict: 5,
  /** A quick correction, on the spot (once per place). */
  report_here: 3,
  /** A photo of the place, and when it is accepted onto the place. */
  place_photo: 10,
  photo_accepted: 10,
  selfie: 2,
} as const;
export type ScoreKind = keyof typeof SCORE_POINTS;
export const SCORE_KINDS = Object.keys(SCORE_POINTS) as [
  ScoreKind,
  ...ScoreKind[],
];
/**
 * Everything a visitor does while exploring, paid or not, kept so points
 * can be recalculated under new rules (see `explorer_action`).
 */
export const EXPLORER_ACTIONS = [
  "checkin",
  "verdict",
  "report",
  "report_withdrawn",
  "photo",
  "photo_accepted",
] as const;
export type ExplorerAction = (typeof EXPLORER_ACTIONS)[number];

/**
 * The licence visitors agree to for the photos they share (once, before
 * their first public photo): open and free to reuse with credit, the same
 * as Wikimedia Commons, where most of the map's photos come from.
 */
export const PHOTO_LICENSE = "CC BY-SA 4.0";
export const PHOTO_LICENSE_URL =
  "https://creativecommons.org/licenses/by-sa/4.0/deed.en";

/** Photos per check-in that earn points. */
export const SCORED_PHOTOS_PER_CHECKIN = 3;

export const MAX_PHOTOS_PER_PLACE = 8;
export const MAX_LINKS_PER_PLACE = 6;
export const MAX_PHOTO_BYTES = 4 * 1024 * 1024;
/** Portraits are cropped to AVATAR_SIZE px square in the browser. */
export const AVATAR_SIZE = 512;
export const MAX_AVATAR_BYTES = 1024 * 1024;

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

// ─── Documents (long-form markdown + pictures attached to map objects) ─

export const DOCUMENT_STATUSES = ["published", "archived"] as const;
export type DocumentStatus = (typeof DOCUMENT_STATUSES)[number];

/**
 * What a document can be attached to. `collection` is the map as a whole
 * (shown on the map's front panel); the subject id is then the collection id.
 */
export const DOCUMENT_SUBJECTS = ["collection", "place", "route"] as const;
export type DocumentSubject = (typeof DOCUMENT_SUBJECTS)[number];

export const MAX_DOCUMENT_BODY = 60_000;
export const MAX_PHOTOS_PER_DOCUMENT = 40;
export const MAX_ATTACHMENTS_PER_DOCUMENT = 200;
export const DOCUMENT_ACTIONS = ["created", "edited", "archived"] as const;
export type DocumentAction = (typeof DOCUMENT_ACTIONS)[number];
