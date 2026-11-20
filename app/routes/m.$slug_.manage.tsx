import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { CategoriesEditor } from "~/components/CategoriesEditor";
import { FieldsEditor } from "~/components/FieldsEditor";
import { PageShell } from "~/components/PageShell";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import {
  CONTRIBUTION_POLICIES,
  type ContributionPolicy,
  MEMBER_ROLES,
  type MemberRole,
} from "~/lib/constants";
import { loadCollection } from "~/lib/loaders";
import { useTRPC } from "~/trpc/client";
import type { RouterOutputs } from "~/trpc/router";

type CollectionView = RouterOutputs["collection"]["bySlug"];

const REMOVE = "__remove";

const Members = ({ view }: { view: CollectionView }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const collectionId = view.collection.id;
  const { data: members = [] } = useQuery(
    trpc.collection.members.queryOptions({ collectionId }),
  );
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<MemberRole>("moderator");
  const assignable = MEMBER_ROLES.filter(
    (r) => r !== "admin" || view.can.assignAdmins,
  );

  const setMember = useMutation(
    trpc.collection.setMember.mutationOptions({
      onSuccess: () => {
        toast.success(t("manage_member_saved"));
        setEmail("");
        return queryClient.invalidateQueries({
          queryKey: trpc.collection.members.queryKey({ collectionId }),
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          {t("manage_members")}
        </CardTitle>
        <CardDescription>
          {view.collection.contributionPolicy === "open"
            ? t("manage_members_desc_open")
            : t("manage_members_desc_members")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="divide-y rounded-md border">
          {members.map((m) => {
            const locked = m.role === "admin" && !view.can.assignAdmins;
            return (
              <li key={m.profileId} className="flex items-center gap-3 p-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{m.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {m.email}
                  </div>
                </div>
                <Select
                  value={m.role}
                  disabled={locked || setMember.isPending}
                  onValueChange={(v) =>
                    setMember.mutate({
                      collectionId,
                      email: m.email,
                      role: v === REMOVE ? null : (v as MemberRole),
                    })
                  }
                >
                  <SelectTrigger className="w-36" aria-label={t("manage_role")}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(locked ? MEMBER_ROLES : assignable).map((r) => (
                      <SelectItem key={r} value={r}>
                        {t(`role_${r}`)}
                      </SelectItem>
                    ))}
                    <SelectItem value={REMOVE}>{t("manage_remove")}</SelectItem>
                  </SelectContent>
                </Select>
              </li>
            );
          })}
          {members.length === 0 && (
            <li className="p-3 text-sm text-muted-foreground">
              {t("manage_no_members")}
            </li>
          )}
        </ul>
        <form
          className="flex flex-wrap gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setMember.mutate({ collectionId, email: email.trim(), role });
          }}
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("manage_member_email")}
            aria-label={t("manage_member_email")}
            className="min-w-56 flex-1"
          />
          <Select value={role} onValueChange={(v) => setRole(v as MemberRole)}>
            <SelectTrigger className="w-36" aria-label={t("manage_role")}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {assignable.map((r) => (
                <SelectItem key={r} value={r}>
                  {t(`role_${r}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={setMember.isPending}>
            {t("manage_member_add")}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          {t("manage_member_hint")}
        </p>
      </CardContent>
    </Card>
  );
};

const Settings = ({ view }: { view: CollectionView }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const c = view.collection;
  const [form, setForm] = useState({
    title: c.title,
    tagline: c.tagline ?? "",
    description: c.description ?? "",
    city: c.city,
    centerLat: String(c.centerLat),
    centerLng: String(c.centerLng),
    zoom: String(c.zoom),
    categories: c.categories,
    fields: c.fields,
    contributionPolicy: c.contributionPolicy,
  });
  const save = useMutation(
    trpc.collection.updateSettings.mutationOptions({
      onSuccess: () => {
        toast.success(t("manage_saved"));
        return queryClient.invalidateQueries({
          queryKey: trpc.collection.pathKey(),
        });
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const text = (
    key: "title" | "tagline" | "city" | "centerLat" | "centerLng" | "zoom",
  ) => ({
    id: key,
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          {t("manage_settings")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            save.mutate({
              collectionId: c.id,
              title: form.title,
              tagline: form.tagline.trim() || null,
              description: form.description.trim() || null,
              city: form.city,
              centerLat: Number(form.centerLat),
              centerLng: Number(form.centerLng),
              zoom: Number(form.zoom),
              categories: form.categories,
              fields: form.fields,
              contributionPolicy: form.contributionPolicy,
            });
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="title">{t("manage_field_title")}</Label>
            <Input {...text("title")} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="tagline">{t("manage_field_tagline")}</Label>
            <Input {...text("tagline")} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="description">{t("manage_field_description")}</Label>
            <Textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm((f) => ({ ...f, description: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="col-span-2 space-y-1.5 sm:col-span-1">
              <Label htmlFor="city">{t("manage_field_city")}</Label>
              <Input {...text("city")} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="centerLat">{t("manage_field_lat")}</Label>
              <Input inputMode="decimal" {...text("centerLat")} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="centerLng">{t("manage_field_lng")}</Label>
              <Input inputMode="decimal" {...text("centerLng")} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="zoom">{t("manage_field_zoom")}</Label>
              <Input inputMode="decimal" {...text("zoom")} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="policy">{t("manage_field_policy")}</Label>
            <Select
              value={form.contributionPolicy}
              onValueChange={(v) =>
                setForm((f) => ({
                  ...f,
                  contributionPolicy: v as ContributionPolicy,
                }))
              }
            >
              <SelectTrigger id="policy" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CONTRIBUTION_POLICIES.map((p) => (
                  <SelectItem key={p} value={p}>
                    {t(`policy_${p}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>{t("manage_field_categories")}</Label>
            <CategoriesEditor
              value={form.categories}
              onChange={(categories) => setForm((f) => ({ ...f, categories }))}
            />
          </div>
          <div className="space-y-1.5">
            <Label>{t("manage_field_fields")}</Label>
            <FieldsEditor
              value={form.fields}
              onChange={(fields) => setForm((f) => ({ ...f, fields }))}
            />
          </div>
          <Button type="submit" disabled={save.isPending}>
            {t("manage_save")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const ManagePage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const { slug } = Route.useParams();
  const initial = Route.useLoaderData();
  const { data: view } = useQuery({
    ...trpc.collection.bySlug.queryOptions({ slug }),
    initialData: initial,
  });

  return (
    <PageShell
      back={{ to: "/m/$slug", params: { slug }, label: view.collection.title }}
      title={t("manage_title")}
      subtitle={t("manage_subtitle")}
    >
      {view.can.manage ? (
        <>
          <Members view={view} />
          <Settings view={view} />
        </>
      ) : (
        <p className="rounded-md bg-muted p-4 text-sm">
          {t("manage_forbidden")}
        </p>
      )}
    </PageShell>
  );
};

export const Route = createFileRoute("/m/$slug_/manage")({
  loader: async ({ params }) => {
    const view = await loadCollection({ data: params.slug });
    if (!view) throw notFound();
    return view;
  },
  head: () => ({ meta: [{ title: "Manage map · Deep Cities" }] }),
  component: ManagePage,
});
