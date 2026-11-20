import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useTRPC } from "~/trpc/client";

/** Create, list and revoke personal API tokens for the `dc` CLI. */
export const ApiTokens = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const tokens = useQuery(trpc.auth.tokens.queryOptions());
  const [name, setName] = useState("");
  const [fresh, setFresh] = useState<string | null>(null);
  const refresh = () =>
    queryClient.invalidateQueries({ queryKey: trpc.auth.tokens.queryKey() });
  const create = useMutation(
    trpc.auth.createToken.mutationOptions({
      onSuccess: (res) => {
        setFresh(res.token);
        setName("");
        return refresh();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const revoke = useMutation(
    trpc.auth.revokeToken.mutationOptions({
      onSuccess: refresh,
      onError: (err) => toast.error(err.message),
    }),
  );

  return (
    <section className="max-w-xl space-y-3">
      <h2 className="text-lg font-semibold">{t("tokens_title")}</h2>
      <p className="text-sm text-muted-foreground">{t("tokens_hint")}</p>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim()) create.mutate({ name: name.trim() });
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("tokens_name_placeholder")}
          aria-label={t("tokens_name_placeholder")}
        />
        <Button type="submit" disabled={create.isPending || !name.trim()}>
          {t("tokens_create")}
        </Button>
      </form>
      {fresh && (
        <div className="space-y-1 rounded-md border border-primary/40 bg-primary/5 p-3 text-sm">
          <p>{t("tokens_copy_now")}</p>
          <code className="block break-all rounded bg-background p-2 font-mono text-xs">
            {fresh}
          </code>
        </div>
      )}
      <ul className="divide-y rounded-md border text-sm">
        {(tokens.data ?? []).map((tok) => (
          <li
            key={tok.publicId}
            className="flex items-center justify-between gap-3 p-3"
          >
            <div>
              <div className="font-medium">{tok.name}</div>
              <div className="text-xs text-muted-foreground">
                {tok.lastUsedAt
                  ? t("tokens_last_used", {
                      when: formatDistanceToNow(tok.lastUsedAt, {
                        addSuffix: true,
                      }),
                    })
                  : t("tokens_never_used")}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={revoke.isPending}
              onClick={() => revoke.mutate({ publicId: tok.publicId })}
            >
              {t("tokens_revoke")}
            </Button>
          </li>
        ))}
        {tokens.data?.length === 0 && (
          <li className="p-3 text-muted-foreground">{t("tokens_none")}</li>
        )}
      </ul>
    </section>
  );
};
