import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: true,
    // The map pages' side panel scrolls on its own (desktop).
    scrollToTopSelectors: ["#map-panel"],
  });

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
  interface HistoryState {
    /** Phones, on a map's own page: whether the panel (list) was showing. */
    mapPanel?: boolean;
  }
}
