import { describe, expect, it } from "vitest";
import {
  areaColor,
  bboxOf,
  containsPoint,
  labelPoint,
  simplifyGeometry,
} from "./areas";
import type { AreaGeometry } from "./db/schema";

const square: AreaGeometry = {
  type: "Polygon",
  coordinates: [
    [
      [0, 0],
      [10, 0],
      [10, 10],
      [0, 10],
      [0, 0],
    ],
    [
      [4, 4],
      [6, 4],
      [6, 6],
      [4, 6],
      [4, 4],
    ],
  ],
};

describe("areas", () => {
  it("finds points inside, outside and in holes", () => {
    expect(containsPoint(square, [1, 1])).toBe(true);
    expect(containsPoint(square, [11, 1])).toBe(false);
    expect(containsPoint(square, [5, 5])).toBe(false);
  });

  it("handles multipolygons", () => {
    const multi: AreaGeometry = {
      type: "MultiPolygon",
      coordinates: [
        square.coordinates,
        [
          [
            [20, 20],
            [30, 20],
            [30, 30],
            [20, 20],
          ],
        ],
      ],
    };
    expect(containsPoint(multi, [28, 22])).toBe(true);
    expect(bboxOf(multi)).toEqual([0, 0, 30, 30]);
  });

  it("drops collinear points but keeps the shape", () => {
    const g: AreaGeometry = {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [5, 0.000001],
          [10, 0],
          [10, 10],
          [0, 10],
          [0, 0],
        ],
      ],
    };
    const s = simplifyGeometry(g);
    expect(s.type === "Polygon" && s.coordinates[0]?.length).toBe(5);
    expect(containsPoint(s, [9, 9])).toBe(true);
  });

  it("puts the label inside, away from holes", () => {
    const p = labelPoint(square);
    expect(containsPoint(square, p)).toBe(true);
    const l: AreaGeometry = {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [10, 0],
          [10, 2],
          [2, 2],
          [2, 10],
          [0, 10],
          [0, 0],
        ],
      ],
    };
    expect(containsPoint(l, labelPoint(l))).toBe(true);
  });

  it("gives an area the same colour every time, and varies across areas", () => {
    expect(areaColor("borough", "E")).toBe(areaColor("borough", "E"));
    const colours = new Set(
      ["A", "B", "E", "F", "K", "M", "N", "T"].map((c) =>
        areaColor("borough", c),
      ),
    );
    expect(colours.size).toBeGreaterThan(3);
  });
});
