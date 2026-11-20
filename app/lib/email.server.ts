import { createLog } from "./logger";
import type { ServerEnv } from "./server-env";

const log = createLog("email");

/**
 * Send the sign-in email through Cloudflare Email Service (`send_email`
 * binding). Locally there is no binding: the link is only logged, and the UI
 * shows it in dev mode.
 */
export const sendLoginEmail = async (
  env: ServerEnv,
  { to, link }: { to: string; link: string },
): Promise<void> => {
  if (!env.EMAIL) {
    log.info({ msg: "login link (no EMAIL binding, not emailed)", to, link });
    return;
  }
  try {
    await env.EMAIL.send({
      from: { email: env.EMAIL_FROM_ADDRESS, name: "Deep Cities" },
      to,
      subject: "Your Deep Cities sign-in link",
      text: `Sign in to Deep Cities:\n\n${link}\n\nThe link works once and expires in 30 minutes. If you didn't ask for it, ignore this email.`,
      html: `<p>Sign in to <strong>Deep Cities</strong>:</p><p><a href="${link}">Sign in</a></p><p style="color:#666">The link works once and expires in 30 minutes. If you didn't ask for it, ignore this email.</p>`,
    });
  } catch (err) {
    const code = (err as { code?: string }).code;
    log.error({ msg: "email send failed", code, error: String(err) });
    throw new Error("Could not send email");
  }
};
