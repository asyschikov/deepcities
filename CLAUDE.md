# Deep Cities — Claude Code instructions

Geo-wiki of collaborative city maps. First map: "Deep Amsterdam" (`/amsterdam/deep`), the city's off-the-A-list sights; it began as "C-list sights of Amsterdam".
Read [DEVELOPMENT.md](DEVELOPMENT.md) for setup, architecture, roles and conventions.

Conventions are inherited from bookverse:

- Arrow functions, map/filter over loops, no `any`, no non-null `!`.
- Enums live in `app/lib/constants.ts`; DB schema in `app/lib/db/schema.ts` (singular snake_case tables, unix-second timestamps, CUID2 text ids).
- All data access goes through tRPC routers in `app/trpc/routers/`; every procedure checks permissions first via `requireCap()` (`app/trpc/access.ts`).
- Every user-facing string goes through `t()`; add keys to `messages/en.json` (`node scripts/check-i18n.ts` verifies).
- `app/components/ui/` is shadcn-managed — don't hand-edit.
- After adding/renaming routes, run `pnpm dev` once so `app/routeTree.gen.ts` regenerates, and commit it.
- Before finishing: `pnpm check && pnpm typecheck && pnpm test`.
