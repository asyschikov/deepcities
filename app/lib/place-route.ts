/**
 * Shared by the routes of a place's own page (one per language prefix):
 * load it, and move any outdated or misspelt URL to the current one.
 */
import { notFound, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { z } from "zod/v4";
import { createCaller } from "~/trpc/caller";
import { placeIdOf } from "./cities";
import type { ContentLang } from "./constants";
import { areaLangPath, placeLangPath } from "./place-page";

const loadPlacePage = createServerFn({ method: "GET" })
  .validator((p: { placeId: string; lang?: ContentLang }) => p)
  .handler(async ({ data }) => {
    const caller = await createCaller();
    try {
      return await caller.place.page(data);
    } catch (err) {
      if (
        err instanceof TRPCError &&
        (err.code === "NOT_FOUND" || err.code === "BAD_REQUEST")
      )
        return null;
      throw err;
    }
  });

/** `?photo=2`: the gallery's shown photo. */
export const placePageSearch = z.object({
  photo: z.number().int().min(0).max(99).optional().catch(undefined),
});

export const loadPlacePageFor = async (
  params: { city: string; place: string },
  lang: ContentLang | undefined,
) => {
  const data = await loadPlacePage({
    data: { placeId: placeIdOf(params.place), lang },
  });
  if (!data) throw notFound();
  const asked = `${lang ? `/${lang}` : ""}/${params.city}/p/${params.place}`;
  const current = placeLangPath(data, data.lang);
  if (asked !== current) throw redirect({ href: current, statusCode: 301 });
  return data;
};

const loadAreaPage = createServerFn({ method: "GET" })
  .validator((p: { city: string; areas: string[]; lang?: ContentLang }) => p)
  .handler(async ({ data }) => {
    const caller = await createCaller();
    try {
      return await caller.place.areaPage(data);
    } catch (err) {
      if (
        err instanceof TRPCError &&
        (err.code === "NOT_FOUND" || err.code === "BAD_REQUEST")
      )
        return null;
      throw err;
    }
  });

/** `/<city>/places/<borough>/<neighbourhood>/<sub>` (the splat: areas). */
export const loadAreaPageFor = async (
  params: { city: string; _splat?: string },
  lang: ContentLang | undefined,
) => {
  const areas = (params._splat ?? "").split("/").filter(Boolean);
  if (areas.length > 3) throw notFound();
  const data = await loadAreaPage({ data: { city: params.city, areas, lang } });
  if (!data) throw notFound();
  if (lang && data.lang !== lang)
    throw redirect({ href: areaLangPath(data, data.lang), statusCode: 301 });
  return data;
};
