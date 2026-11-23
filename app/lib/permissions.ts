import type { ContributionPolicy, GlobalRole, MemberRole } from "./constants";

/**
 * The single role a viewer has within one collection, after combining their
 * site-wide role, explicit membership and the collection's policy.
 */
export const EFFECTIVE_ROLES = [
  "viewer",
  "contributor",
  "moderator",
  "admin",
  "super_admin",
] as const;
export type EffectiveRole = (typeof EFFECTIVE_ROLES)[number];

const rank = (role: EffectiveRole): number => EFFECTIVE_ROLES.indexOf(role);

export const atLeast = (role: EffectiveRole, min: EffectiveRole): boolean =>
  rank(role) >= rank(min);

export const resolveRole = ({
  globalRole,
  memberRole,
  policy,
}: {
  /** null when signed out. */
  globalRole: GlobalRole | null;
  memberRole: MemberRole | null;
  policy: ContributionPolicy;
}): EffectiveRole => {
  if (globalRole === "super_admin") return "super_admin";
  if (globalRole === null || memberRole === "banned") return "viewer";
  if (memberRole) return memberRole;
  return policy === "open" ? "contributor" : "viewer";
};

export interface Capabilities {
  /** Propose new places / edits / removals and upload photos. */
  propose: boolean;
  /**
   * Explore for yourself: check in, add your photos, give verdicts. Any
   * signed-in reader who isn't banned from the map, whatever their role.
   */
  visit: boolean;
  /** Approve or reject others' proposals; own proposals publish instantly. */
  review: boolean;
  /** Assign moderators/contributors, ban, edit map settings. */
  manage: boolean;
  /** Create admins. */
  assignAdmins: boolean;
}

export const capabilitiesOf = (
  role: EffectiveRole,
  { signedIn = role !== "viewer", banned = false } = {},
): Capabilities => ({
  propose: atLeast(role, "contributor"),
  visit: signedIn && !banned,
  review: atLeast(role, "moderator"),
  manage: atLeast(role, "admin"),
  assignAdmins: role === "super_admin",
});

/**
 * Whether `actor` may set `target`'s membership to `nextRole` (null = remove).
 * Admins manage moderators, contributors and bans, but cannot touch other
 * admins or create new ones. Super admins can do anything.
 */
export const canAssignRole = ({
  actor,
  targetCurrent,
  nextRole,
}: {
  actor: EffectiveRole;
  targetCurrent: MemberRole | null;
  nextRole: MemberRole | null;
}): boolean => {
  if (actor === "super_admin") return true;
  if (actor !== "admin") return false;
  return targetCurrent !== "admin" && nextRole !== "admin";
};
