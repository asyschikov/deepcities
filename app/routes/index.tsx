import { createFileRoute, redirect } from "@tanstack/react-router";

/** One city for now: the home page is Amsterdam's. */
export const HOME_CITY = "amsterdam";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({
      to: "/$city",
      params: { city: HOME_CITY },
      statusCode: 302,
    });
  },
});
