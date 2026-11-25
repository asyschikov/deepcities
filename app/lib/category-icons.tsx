import {
  Church,
  Drama,
  Factory,
  House,
  Landmark,
  type LucideIcon,
  Palette,
  ScrollText,
  Sparkles,
  Trees,
  Utensils,
  Waves,
} from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

/**
 * Experimental (`?icons=true`): an icon per category key, so a pin's
 * category doesn't rest on colour alone. Keys without one show no icon.
 */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  housing: House,
  civic: Landmark,
  religious: Church,
  industrial: Factory,
  infrastructure: Waves,
  "hidden-history": ScrollText,
  "street-art": Palette,
  curiosities: Sparkles,
  culture: Drama,
  "food-drink": Utensils,
  green: Trees,
};

export const categoryIcon = (key: string): LucideIcon | undefined =>
  CATEGORY_ICONS[key];

const svgCache = new Map<string, string>();

/** The icon as SVG markup (white strokes), for map pins drawn outside React. */
export const categoryIconSvg = (key: string): string | undefined => {
  const Icon = CATEGORY_ICONS[key];
  if (!Icon) return undefined;
  const cached = svgCache.get(key);
  if (cached) return cached;
  const svg = renderToStaticMarkup(
    <Icon color="white" strokeWidth={2.5} aria-hidden="true" />,
  );
  svgCache.set(key, svg);
  return svg;
};
