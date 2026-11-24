import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

export const loadMaps = createServerFn({ method: "GET" }).handler(async () => {
  const caller = await createCaller();
  return caller.collection.list();
});

type MapSummary = Awaited<ReturnType<typeof loadMaps>>[number];

/** The maps of one city (the city page; the home page while there is one). */
export const CityHome = ({
  city,
  initial,
}: {
  city: string;
  initial: MapSummary[];
}) => {
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
            <li key={m.id}>
              <Link
                to="/$city/$slug"
                params={{ city: m.citySlug, slug: m.slug }}
                className={cn(
                  "group flex h-full flex-col rounded-xl border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg",
                  // The city's own map stands out, gently.
                  m.cityDefault && "border-brick/40 bg-brick/5 shadow-sm",
                )}
              >
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
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("home_open_map")}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {maps.length === 0 && (
          <p className="text-muted-foreground">{t("home_no_maps")}</p>
        )}
      </section>

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
    </main>
  );
};
