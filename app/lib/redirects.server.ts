import type { ServerEnv } from "./server-env";

/**
 * The site has one address: requests to any other host the Worker serves
 * (www.deepcities.org) move to `SITE_ORIGIN`, path and query kept.
 */
export const redirectFor = (
  request: Request,
  env: ServerEnv,
): Response | null => {
  const url = new URL(request.url);
  const origin = new URL(env.SITE_ORIGIN);
  if (env.APP_ENV !== "live" || url.host === origin.host) return null;
  return Response.redirect(
    new URL(url.pathname + url.search, origin).toString(),
    301,
  );
};
