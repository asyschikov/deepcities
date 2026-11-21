import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { CategoriesEditor } from "~/components/CategoriesEditor";
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
import { CATEGORY_COLORS } from "~/lib/constants";
import { useViewer } from "~/lib/use-viewer";
import type { CategoryDef } from "~/lib/validation";
import { useTRPC } from "~/trpc/client";

const CreateMap = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    slug: "",
    title: "",
    city: "",
    centerLat: "",
    centerLng: "",
    zoom: "13",
  });
  const [categories, setCategories] = useState<CategoryDef[]>([
    { key: "sights", label: "Sights", color: CATEGORY_COLORS[0] },
  ]);
  const create = useMutation(
    trpc.collection.create.mutationOptions({
      onSuccess: (res) =>
        navigate({
          to: "/$city/$slug/manage",
          params: { city: res.citySlug, slug: res.slug },
          replace: true,
        }),
      onError: (err) => toast.error(err.message),
    }),
  );
  const field = (
    key: keyof typeof form,
    label: string,
    extra?: React.ComponentProps<typeof Input>,
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={`new-${key}`}>{label}</Label>
      <Input
        id={`new-${key}`}
        required
        value={form[key]}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        {...extra}
      />
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-lg">
          {t("admin_create_map")}
        </CardTitle>
        <CardDescription>{t("admin_create_map_desc")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            create.mutate({
              slug: form.slug,
              title: form.title,
              city: form.city,
              tagline: null,
              description: null,
              centerLat: Number(form.centerLat),
              centerLng: Number(form.centerLng),
              zoom: Number(form.zoom),
              categories,
              contributionPolicy: "open",
            });
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {field("title", t("manage_field_title"), {
              placeholder: "C-list sights of Lisbon",
            })}
            {field("slug", t("admin_field_slug"), {
              placeholder: "lisbon-c-list",
              pattern: "[a-z0-9-]+",
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              {field("city", t("manage_field_city"))}
            </div>
            {field("centerLat", t("manage_field_lat"), {
              inputMode: "decimal",
            })}
            {field("centerLng", t("manage_field_lng"), {
              inputMode: "decimal",
            })}
            {field("zoom", t("manage_field_zoom"), { inputMode: "decimal" })}
          </div>
          <div className="space-y-1.5">
            <Label>{t("manage_field_categories")}</Label>
            <CategoriesEditor value={categories} onChange={setCategories} />
          </div>
          <Button type="submit" disabled={create.isPending}>
            {t("admin_create")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const Users = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const viewer = useViewer();
  const { data: users = [] } = useQuery(trpc.admin.users.queryOptions());
  const setRole = useMutation(
    trpc.admin.setGlobalRole.mutationOptions({
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: trpc.admin.users.queryKey(),
        }),
      onError: (err) => toast.error(err.message),
    }),
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-sans text-lg">{t("admin_users")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y rounded-md border">
          {users.map((u) => (
            <li key={u.id} className="flex items-center gap-3 p-3 text-sm">
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{u.name}</div>
                <div className="truncate text-xs text-muted-foreground">
                  {u.email}
                </div>
              </div>
              {u.role === "super_admin" && (
                <span className="rounded-full bg-brick px-2 py-0.5 text-[10px] font-semibold text-white">
                  {t("role_super_admin")}
                </span>
              )}
              {u.id !== viewer?.id && (
                <Button
                  size="sm"
                  variant="ghost"
                  disabled={setRole.isPending}
                  onClick={() =>
                    setRole.mutate({
                      profileId: u.id,
                      role: u.role === "super_admin" ? "user" : "super_admin",
                    })
                  }
                >
                  {u.role === "super_admin"
                    ? t("admin_revoke_super")
                    : t("admin_make_super")}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const AdminPage = () => {
  const { t } = useTranslation();
  const viewer = useViewer();
  if (viewer?.role !== "super_admin") {
    return (
      <PageShell title={t("admin_title")}>
        <p className="rounded-md bg-muted p-4 text-sm">
          {t("admin_forbidden")}{" "}
          <Link to="/" className="text-primary underline">
            {t("admin_go_home")}
          </Link>
        </p>
      </PageShell>
    );
  }
  return (
    <PageShell title={t("admin_title")} subtitle={t("admin_subtitle")}>
      <CreateMap />
      <Users />
    </PageShell>
  );
};

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Site admin · Deep Cities" }] }),
  component: AdminPage,
});
