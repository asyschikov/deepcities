import { describe, expect, it } from "vitest";
import { canAssignRole, capabilitiesOf, resolveRole } from "./permissions";

describe("resolveRole", () => {
  it("signed-out visitors are viewers", () => {
    expect(
      resolveRole({ globalRole: null, memberRole: null, policy: "open" }),
    ).toBe("viewer");
  });

  it("any signed-in user contributes to an open map", () => {
    expect(
      resolveRole({ globalRole: "user", memberRole: null, policy: "open" }),
    ).toBe("contributor");
  });

  it("members-only maps need an explicit contributor role", () => {
    expect(
      resolveRole({ globalRole: "user", memberRole: null, policy: "members" }),
    ).toBe("viewer");
    expect(
      resolveRole({
        globalRole: "user",
        memberRole: "contributor",
        policy: "members",
      }),
    ).toBe("contributor");
  });

  it("banned users are viewers even on open maps", () => {
    expect(
      resolveRole({ globalRole: "user", memberRole: "banned", policy: "open" }),
    ).toBe("viewer");
  });

  it("super admin wins over everything", () => {
    expect(
      resolveRole({
        globalRole: "super_admin",
        memberRole: "banned",
        policy: "members",
      }),
    ).toBe("super_admin");
  });
});

describe("capabilitiesOf", () => {
  it("is cumulative up the ladder", () => {
    expect(capabilitiesOf("viewer").propose).toBe(false);
    expect(capabilitiesOf("contributor")).toMatchObject({
      propose: true,
      review: false,
    });
    expect(capabilitiesOf("moderator")).toMatchObject({
      review: true,
      manage: false,
    });
    expect(capabilitiesOf("admin")).toMatchObject({
      manage: true,
      assignAdmins: false,
    });
    expect(capabilitiesOf("super_admin").assignAdmins).toBe(true);
  });
  it("lets anyone signed in explore, unless banned", () => {
    expect(capabilitiesOf("viewer").visit).toBe(false);
    expect(capabilitiesOf("viewer", { signedIn: true }).visit).toBe(true);
    expect(
      capabilitiesOf("viewer", { signedIn: true, banned: true }).visit,
    ).toBe(false);
    expect(capabilitiesOf("contributor").visit).toBe(true);
  });
});

describe("canAssignRole", () => {
  it("admins can appoint moderators and ban", () => {
    expect(
      canAssignRole({
        actor: "admin",
        targetCurrent: null,
        nextRole: "moderator",
      }),
    ).toBe(true);
    expect(
      canAssignRole({
        actor: "admin",
        targetCurrent: "moderator",
        nextRole: "banned",
      }),
    ).toBe(true);
  });

  it("admins cannot create or demote admins", () => {
    expect(
      canAssignRole({ actor: "admin", targetCurrent: null, nextRole: "admin" }),
    ).toBe(false);
    expect(
      canAssignRole({ actor: "admin", targetCurrent: "admin", nextRole: null }),
    ).toBe(false);
  });

  it("moderators cannot assign roles", () => {
    expect(
      canAssignRole({
        actor: "moderator",
        targetCurrent: null,
        nextRole: "contributor",
      }),
    ).toBe(false);
  });

  it("super admins can appoint admins", () => {
    expect(
      canAssignRole({
        actor: "super_admin",
        targetCurrent: null,
        nextRole: "admin",
      }),
    ).toBe(true);
  });
});
