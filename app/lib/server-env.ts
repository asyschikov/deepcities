import { env } from "cloudflare:workers";

/** Worker bindings, vars and secrets (see wrangler.jsonc / .dev.vars). */
export interface ServerEnv {
  DB: D1Database;
  R2: R2Bucket;
  /** Database dumps and the media mirror (app/lib/backup.server.ts). */
  BACKUPS: R2Bucket;
  /** "dev" locally; anything else is a deployed environment. */
  APP_ENV: string;
  /** Canonical origin used in emailed links, e.g. https://deepcities.app */
  SITE_ORIGIN: string;
  /** Sender address; its domain must be onboarded to Cloudflare Email Service. */
  EMAIL_FROM_ADDRESS: string;
  /** Cloudflare Email Service binding; absent in local dev. */
  EMAIL?: SendEmail;
}

export const serverEnv = (): ServerEnv => env as unknown as ServerEnv;
