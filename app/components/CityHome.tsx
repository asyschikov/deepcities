import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ArrowRight, Info, Star } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn, photoUrl } from "~/lib/utils";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";
import type { PhotoMeta } from "./PhotoCredit";
import { Leaderboard } from "./Score";
import { SiteFooter } from "./SiteFooter";

export const loadMaps = createServerFn({ method: "GET" }).handler(async () => {
  const caller = await createCaller();
  return caller.collection.list();
});

type MapSummary = Awaited<ReturnType<typeof loadMaps>>[number];

/** The maps of one city (the city page; the home page while there is one). */
export const CityHome = ({
  city,
  initial,
  cards = "top",
}: {
  city: string;
  initial: MapSummary[];
  /** Where a map card's picture goes: a wide band on top, or a square at the side. */
  cards?: "top" | "side";
}) => {
  const side = cards === "side";
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { data: all } = useQuery({
    ...trpc.collection.list.queryOptions(),
    initialData: initial,
  });
  const maps = all.filter((m) => m.citySlug === city);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 48px)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-brick uppercase">
            {maps[0]?.city ?? t("home_kicker")}
          </p>
          <h1 className="max-w-3xl text-5xl leading-[1.05] font-semibold sm:text-6xl">
            {t("home_title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t("home_lede")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-semibold">{t("home_maps")}</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {maps.map((m) => (
            <li key={m.id} className="relative">
              <Link
                to="/$city/$slug"
                params={{ city: m.citySlug, slug: m.slug }}
                className={cn(
                  "group flex h-full overflow-hidden rounded-xl border bg-card transition hover:-translate-y-0.5 hover:shadow-lg",
                  side ? "flex-row items-start" : "flex-col",
                  // The city's own map stands out, gently.
                  m.cityDefault && "border-brick/40 bg-brick/5 shadow-sm",
                )}
              >
                {m.cover && (
                  <div
                    className={cn(
                      "relative overflow-hidden bg-muted",
                      side
                        ? "my-6 ml-6 size-28 shrink-0 rounded-lg sm:size-40"
                        : "aspect-[16/9]",
                    )}
                  >
                    <img
                      src={photoUrl(m.cover.id, "main")}
                      alt=""
                      loading="lazy"
                      className={cn(
                        "size-full object-cover transition duration-500 group-hover:scale-[1.03]",
                      )}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {m.city} · {t("home_place_count", { count: m.placeCount })}
                  </span>
                  <span className="mt-2 font-serif text-2xl leading-tight font-semibold">
                    {m.cityDefault && (
                      <Star
                        className="mr-2 inline size-5 -translate-y-0.5 fill-brick text-brick"
                        aria-label={t("home_city_map")}
                        role="img"
                      />
                    )}
                    {m.title}
                  </span>
                  {m.tagline && (
                    <span className="mt-2 text-muted-foreground">
                      {m.tagline}
                    </span>
                  )}
                  <span className="mt-auto inline-flex items-center pt-6 gap-1 text-sm font-medium text-primary">
                    {t("home_open_map")}
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
              {m.cover && <CoverCredit photo={m.cover} side={side} />}
            </li>
          ))}
        </ul>
        {maps.length === 0 && (
          <p className="text-muted-foreground">{t("home_no_maps")}</p>
        )}
        {maps.length > 0 && (
          <p className="mt-6 text-sm">
            <a
              href={`/${city}/places`}
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              {t("areas_browse")} <ArrowRight className="size-4" />
            </a>
          </p>
        )}
      </section>

      {maps[0] && <Leaderboard city={maps[0].city} />}

      <section className="border-t bg-muted/40">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-3">
          {(["propose", "review", "visit"] as const).map((k, i) => (
            <div key={k}>
              <div className="font-serif text-3xl text-brick">{i + 1}</div>
              <h3 className="mt-2 font-sans text-base font-semibold">
                {t(`home_how_${k}_title`)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(`home_how_${k}_body`)}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

/**
 * The card picture's credit, folded into an (i) in its corner like the map's
 * own attribution. It sits over the picture but outside the card's link, so
 * opening it doesn't open the map.
 */
const CoverCredit = ({ photo, side }: { photo: PhotoMeta; side: boolean }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  if (!photo.credit) return null;
  const text = t("photo_credit", {
    credit: [photo.credit, photo.license].filter(Boolean).join(", "),
  });
  return (
    <div
      className={cn(
        "pointer-events-none absolute overflow-hidden",
        side
          ? "top-6 left-6 size-28 rounded-lg sm:size-40"
          : "inset-x-0 top-0 aspect-[16/9] rounded-t-xl",
      )}
    >
      {open && (
        <p className="pointer-events-auto absolute inset-x-0 bottom-0 bg-black/65 py-1.5 pr-8 pl-2 text-[11px] leading-snug text-white">
          {photo.sourceUrl ? (
            <a
              href={photo.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {text}
            </a>
          ) : (
            text
          )}
        </p>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={t("home_photo_credit")}
        className="pointer-events-auto absolute right-1.5 bottom-1.5 grid size-5 place-items-center rounded-full bg-black/40 text-white/90 transition hover:bg-black/65"
      >
        <Info className="size-3.5" />
      </button>
    </div>
  );
};
