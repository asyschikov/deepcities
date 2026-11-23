import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { ApiTokens } from "~/components/ApiTokens";
import { PageShell } from "~/components/PageShell";
import { UserAvatar } from "~/components/UserAvatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { AVATAR_SIZE } from "~/lib/constants";
import { resizeImage } from "~/lib/resize-image";
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

/** Your portrait: shown in the header and next to your edits. */
const AvatarEditor = ({
  name,
  avatarId,
}: {
  name: string;
  avatarId: string | null;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const input = useRef<HTMLInputElement>(null);
  const [preparing, setPreparing] = useState(false);
  const refresh = () =>
    queryClient.invalidateQueries({ queryKey: trpc.auth.me.queryKey() });
  const upload = useMutation(
    trpc.auth.setAvatar.mutationOptions({
      onSuccess: async () => {
        toast.success(t("me_avatar_saved"));
        await refresh();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const remove = useMutation(
    trpc.auth.removeAvatar.mutationOptions({
      onSuccess: refresh,
      onError: (err) => toast.error(err.message),
    }),
  );
  const busy = preparing || upload.isPending || remove.isPending;

  const pick = async (file: File | undefined) => {
    if (!file) return;
    setPreparing(true);
    try {
      const img = await resizeImage(file, { square: AVATAR_SIZE });
      URL.revokeObjectURL(img.previewUrl);
      upload.mutate({ base64: img.base64, contentType: img.contentType });
    } catch {
      toast.error(t("me_avatar_unreadable"));
    } finally {
      setPreparing(false);
      if (input.current) input.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-4">
      <UserAvatar
        name={name}
        avatarId={avatarId}
        className="size-20 text-2xl"
      />
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={busy}
            onClick={() => input.current?.click()}
          >
            <Camera /> {t(avatarId ? "me_avatar_change" : "me_avatar_add")}
          </Button>
          {avatarId && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              disabled={busy}
              onClick={() => remove.mutate()}
            >
              <Trash2 /> {t("me_avatar_remove")}
            </Button>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{t("me_avatar_hint")}</p>
        <input
          ref={input}
          type="file"
          accept="image/*"
          className="hidden"
          aria-label={t("me_avatar_add")}
          onChange={(e) => pick(e.target.files?.[0])}
        />
      </div>
    </div>
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
        <div className="space-y-6">
          <AvatarEditor name={viewer.name} avatarId={viewer.avatarId} />
          <ProfileForm name={viewer.name} />
        </div>
        <ApiTokens />
      </div>
    </PageShell>
  );
};

export const Route = createFileRoute("/me")({ component: MePage });
