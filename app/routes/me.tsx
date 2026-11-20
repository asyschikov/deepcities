import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ApiTokens } from "~/components/ApiTokens";
import { PageShell } from "~/components/PageShell";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useViewer } from "~/lib/use-viewer";
import { useTRPC } from "~/trpc/client";

const ProfileForm = ({ name: initialName }: { name: string }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [name, setName] = useState(initialName);
  const save = useMutation(
    trpc.auth.updateProfile.mutationOptions({
      onSuccess: () => {
        toast.success(t("me_saved"));
        return queryClient.invalidateQueries({
          queryKey: trpc.auth.me.queryKey(),
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  return (
    <form
      className="max-w-md space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        save.mutate({ name, bio: null });
      }}
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">{t("me_name")}</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-xs text-muted-foreground">{t("me_name_hint")}</p>
      </div>
      <Button type="submit" disabled={save.isPending}>
        {t("me_save")}
      </Button>
    </form>
  );
};

const MePage = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  if (!viewer) {
    return (
      <PageShell title={t("me_title")}>
        <Link
          to="/auth"
          search={{ next: "/me" }}
          className="text-primary underline"
        >
          {t("header_sign_in")}
        </Link>
      </PageShell>
    );
  }
  return (
    <PageShell title={t("me_title")} subtitle={viewer.email}>
      <div className="space-y-10">
        <ProfileForm name={viewer.name} />
        <ApiTokens />
      </div>
    </PageShell>
  );
};

export const Route = createFileRoute("/me")({ component: MePage });
