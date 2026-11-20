import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { useTRPC } from "~/trpc/client";

const rootApi = getRouteApi("__root__");

/** The signed-in user (or null). SSR-seeded from the root loader. */
export const useViewer = () => {
  const trpc = useTRPC();
  const { viewer } = rootApi.useLoaderData();
  const { data } = useQuery({
    ...trpc.auth.me.queryOptions(),
    initialData: viewer,
  });
  return data ?? null;
};
