import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { type ReactNode, useState } from "react";
import superjson from "superjson";
import { SiteHeader } from "~/components/SiteHeader";
import { Toaster } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";
import "~/lib/i18n";
import appCss from "~/styles/app.css?url";
import { createCaller } from "~/trpc/caller";
import { TRPCProvider } from "~/trpc/client";
import type { AppRouter } from "~/trpc/router";

const loadViewer = createServerFn({ method: "GET" }).handler(async () => {
  const caller = await createCaller();
  return caller.auth.me();
});

const RootComponent = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, staleTime: 30_000 },
        },
      }),
  );
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [httpBatchLink({ url: "/api/trpc", transformer: superjson })],
    }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <RootDocument>
          <TooltipProvider>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader />
              <Outlet />
            </div>
          </TooltipProvider>
          <Toaster />
        </RootDocument>
      </TRPCProvider>
    </QueryClientProvider>
  );
};

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <HeadContent />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

export const Route = createRootRoute({
  loader: async () => ({ viewer: await loadViewer() }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Deep Cities" },
      {
        name: "description",
        content:
          "Collaborative maps of the places guidebooks skip, made by the people who live there.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: RootComponent,
});
