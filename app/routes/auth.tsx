import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { MailCheck } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod/v4";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useTRPC } from "~/trpc/client";

const AuthPage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { next } = Route.useSearch();
  const [email, setEmail] = useState("");
  const request = useMutation(trpc.auth.requestLink.mutationOptions());

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <Card className="w-full max-w-sm">
        {request.isSuccess ? (
          <CardHeader className="text-center">
            <MailCheck className="mx-auto mb-2 size-10 text-primary" />
            <CardTitle className="text-2xl">{t("auth_check_title")}</CardTitle>
            <CardDescription>{t("auth_check_body", { email })}</CardDescription>
            {request.data.devLink && (
              <div className="mt-4 space-y-2 rounded-md border border-dashed p-3 text-left">
                <p className="text-xs text-muted-foreground">
                  {t("auth_dev_note")}
                </p>
                <Button asChild size="sm" className="w-full">
                  <a href={request.data.devLink}>{t("auth_dev_open")}</a>
                </Button>
              </div>
            )}
            <Button variant="link" size="sm" onClick={() => request.reset()}>
              {t("auth_use_other")}
            </Button>
          </CardHeader>
        ) : (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("auth_title")}</CardTitle>
              <CardDescription>{t("auth_subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  request.mutate({ email: email.trim(), next });
                }}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="email">{t("auth_email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
                {request.error && (
                  <p className="text-sm text-destructive">
                    {request.error.message}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={request.isPending}
                >
                  {t("auth_send_link")}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  {t("auth_no_password")}
                </p>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </main>
  );
};

export const Route = createFileRoute("/auth")({
  validateSearch: z.object({ next: z.string().default("/") }),
  head: () => ({ meta: [{ title: "Sign in · Deep Cities" }] }),
  component: AuthPage,
});
