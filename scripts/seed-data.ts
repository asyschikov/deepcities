/**
 * The Amsterdam "C-list sights" map, shared by the dev and live-site seeds.
 * Places are not seeded: they're imported with the CLI, e.g.
 *   pnpm dc import amsterdam-c-list scripts/data/bos-en-lommer-monuments.json
 */

export const categories = [
  { key: "religious", label: "Churches", color: "#7c3aed" },
  { key: "schools", label: "Schools", color: "#2563eb" },
  { key: "housing", label: "Housing", color: "#b45309" },
  { key: "civic", label: "Civic buildings", color: "#0f766e" },
  { key: "industrial", label: "Industrial heritage", color: "#57534e" },
  {
    key: "infrastructure",
    label: "Bridges & infrastructure",
    color: "#0369a1",
  },
  { key: "hidden-history", label: "Hidden history", color: "#4338ca" },
  { key: "curiosities", label: "Curiosities", color: "#be185d" },
  { key: "odd-museums", label: "Odd museums", color: "#a21caf" },
  { key: "food-drink", label: "Food & drink", color: "#be123c" },
  { key: "green", label: "Green escapes", color: "#15803d" },
];

export const amsterdam = {
  id: "c_ams_clist",
  slug: "deep",
  title: "Deep Amsterdam",
  tagline: "Off the A-list: the places your guidebook skips.",
  description:
    "A collaborative map of Amsterdam's overlooked, odd and lovely spots. We're starting in Bos en Lommer with its listed monuments: post-war churches, schools and housing that hardly any visitor sees. Anyone signed in can suggest places; moderators review every change.",
  city: "Amsterdam",
  centerLat: 52.3792,
  centerLng: 4.8505,
  zoom: 14.5,
};
