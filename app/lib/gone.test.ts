import { describe, expect, it } from "vitest";
import { goneField, isMarkedGone } from "./gone";

const rank = { key: "rank", type: "select" as const, options: ["Nice"] };
const status = { key: "status", type: "select" as const, options: ["Gone"] };
const fields = [rank, status];

describe("gone", () => {
  it("finds the select field that offers Gone", () => {
    expect(goneField(fields)).toBe("status");
    expect(goneField([rank])).toBeUndefined();
  });
  it("tells whether a place is marked gone", () => {
    expect(isMarkedGone({ status: "Gone" }, fields)).toBe(true);
    expect(isMarkedGone({ rank: "Nice" }, fields)).toBe(false);
    expect(isMarkedGone({ status: "Gone" }, [])).toBe(false);
  });
});
