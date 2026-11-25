import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import { formatDistanceToNow } from "date-fns";
import {
  AlertTriangle,
  Archive,
  Check,
  MapPin,
  SearchX,
  X,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod/v4";
import { MapView } from "~/components/MapView";
import { PageShell } from "~/components/PageShell";
import { PlaceAttributes } from "~/components/PlaceAttributes";
import { RouteProposalBody } from "~/components/RouteReview";
import { UserAvatar } from "~/components/UserAvatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import type { ProposalStatus } from "~/lib/constants";
import { languageName } from "~/lib/content-lang";
import { diffDrafts, distanceMeters, type FieldChange } from "~/lib/diff";
import { extraDescription } from "~/lib/fields";
import { goneField } from "~/lib/gone";
import { loadCollection } from "~/lib/loaders";
import { NO_OVERRIDE, withOverride } from "~/lib/overrides";
import { cn, photoUrl } from "~/lib/utils";
import {
  draftOfPlace,
  draftOfRoute,
  type FieldDef,
  type PlaceDraft,
} from "~/lib/validation";
import { useTRPC } from "~/trpc/client";
import type { RouterOutputs } from "~/trpc/router";

type QueueItem = RouterOutputs["proposal"]["queue"][number];

/** The i18n key naming what a proposal does. */
const kindKey = (p: Pick<QueueItem, "subject" | "kind">): string =>
  p.subject === "route"
    ? `kind_route_${p.kind}`
    : p.subject === "override"
      ? "kind_override"
      : p.subject === "membership"
        ? `kind_membership_${p.kind}`
        : `kind_${p.kind}`;
type CollectionView = RouterOutputs["collection"]["bySlug"];

const STATUS_STYLE: Record<ProposalStatus, string> = {
  pending: "bg-warning/20 text-foreground",
  approved: "bg-success/15 text-success",
  rejected: "bg-destructive/10 text-destructive",
  withdrawn: "bg-muted text-muted-foreground",
};

const StatusBadge = ({ status }: { status: ProposalStatus }) => {
  const { t } = useTranslation();
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-xs font-medium",
        STATUS_STYLE[status],
      )}
    >
      {t(`status_${status}`)}
    </span>
  );
};

const LocationPreview = ({
  draft,
  before,
}: {
  draft: PlaceDraft;
  before?: PlaceDraft;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
        <MapPin /> {t("review_show_on_map")}
      </Button>
    );
  }
  return (
    <div className="h-56 overflow-hidden rounded-md border">
      <MapView
        center={draft}
        zoom={16}
        markers={[
          ...(before
            ? [
                {
                  id: "before",
                  lat: before.lat,
                  lng: before.lng,
                  color: "#a8a29e",
                  title: t("review_before"),
                },
              ]
            : []),
          {
            id: "after",
            lat: draft.lat,
            lng: draft.lng,
            color: "#c2410c",
            title: draft.title,
          },
        ]}
      />
    </div>
  );
};

const DraftPreview = ({
  draft,
  view,
}: {
  draft: PlaceDraft;
  view: CollectionView;
}) => {
  const cat = view.collection.categories.find((c) => c.key === draft.category);
  const extra = extraDescription(view.collection.fields, draft.attributes);
  return (
    <div className="space-y-2 text-sm">
      <div className="font-semibold">{draft.title}</div>
      <div className="text-xs" style={{ color: cat?.color }}>
        {cat?.label ?? draft.category}
      </div>
      <p>{draft.summary}</p>
      <PlaceAttributes
        fields={view.collection.fields}
        attributes={draft.attributes}
      />
      {draft.body && (
        <p className="whitespace-pre-line text-muted-foreground">
          {draft.body}
        </p>
      )}
      {extra && (
        <p className="whitespace-pre-line border-t pt-2 text-muted-foreground">
          {extra}
        </p>
      )}
      {draft.address && (
        <p className="text-muted-foreground">{draft.address}</p>
      )}
      {draft.links.map((l) => (
        <div key={l.url} className="text-xs">
          {l.label}: <span className="break-all text-primary">{l.url}</span>
        </div>
      ))}
      {draft.photoIds.length > 0 && (
        <div className="flex gap-1.5">
          {draft.photoIds.map((id) => (
            <img
              key={id}
              src={photoUrl(id)}
              alt=""
              className="size-16 rounded object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const EditDiff = ({
  before,
  after,
  fields,
}: {
  before: PlaceDraft;
  after: PlaceDraft;
  fields: FieldDef[];
}) => {
  const { t } = useTranslation();
  const labelOf = (c: FieldChange) => {
    const label =
      c.field === "attribute"
        ? (fields.find((f) => f.key === c.key)?.label ?? c.key)
        : t(`field_${c.field}`);
    return c.lang ? `${label} · ${languageName(c.lang)}` : label;
  };
  const changes = diffDrafts(before, after);
  if (changes.length === 0)
    return (
      <p className="text-sm text-muted-foreground">{t("review_no_changes")}</p>
    );
  return (
    <dl className="space-y-3 text-sm">
      {changes.map((c) => (
        <div key={`${c.lang ?? ""}:${c.field}:${c.key ?? ""}`}>
          <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {labelOf(c)}
          </dt>
          {c.field === "photoIds" ? (
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {after.photoIds.map((id) => (
                <img
                  key={id}
                  src={photoUrl(id)}
                  alt=""
                  className={cn(
                    "size-14 rounded object-cover",
                    !before.photoIds.includes(id) && "ring-2 ring-success",
                  )}
                />
              ))}
              {before.photoIds
                .filter((id) => !after.photoIds.includes(id))
                .map((id) => (
                  <img
                    key={id}
                    src={photoUrl(id)}
                    alt=""
                    className="size-14 rounded object-cover opacity-40 ring-2 ring-destructive"
                  />
                ))}
            </dd>
          ) : c.field === "location" ? (
            <dd className="mt-1">
              {t("review_moved", {
                m: Math.round(distanceMeters(before, after)),
              })}
            </dd>
          ) : (
            <dd className="mt-1 space-y-1">
              {c.before && (
                <div className="rounded bg-destructive/10 px-2 py-1 whitespace-pre-line line-through decoration-destructive/40">
                  {c.before}
                </div>
              )}
              <div className="rounded bg-success/10 px-2 py-1 whitespace-pre-line">
                {c.after || "—"}
              </div>
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
};

const placeAsDraft = (p: NonNullable<QueueItem["place"]>): PlaceDraft =>
  draftOfPlace(p);

const ProposalCard = ({
  item,
  view,
  reviewable,
}: {
  item: QueueItem;
  view: CollectionView;
  reviewable: boolean;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");
  const review = useMutation(
    trpc.proposal.review.mutationOptions({
      onSuccess: async (res) => {
        await queryClient.invalidateQueries();
        toast.success(
          res.status === "approved"
            ? t("review_approved_toast")
            : t("review_rejected_toast"),
        );
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const isRoute = item.subject === "route";
  const isOverride = item.subject === "override";
  const isMembership = item.subject === "membership";
  const home = item.place ? placeAsDraft(item.place) : null;
  // Override proposals: the place as this map shows it now, and as it would.
  const current =
    home && isOverride
      ? { ...home, ...withOverride(home, item.currentOverride ?? NO_OVERRIDE) }
      : home;
  const proposedValues =
    home && isOverride && item.overrideDraft
      ? { ...home, ...withOverride(home, item.overrideDraft) }
      : null;
  const currentRoute = item.route ? draftOfRoute(item.route) : null;
  const target = isRoute ? item.route : item.place;
  const stale =
    item.kind !== "create" &&
    target &&
    item.baseRevision !== null &&
    target.revision !== item.baseRevision;

  return (
    <li className="space-y-4 rounded-xl border bg-card p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{t(kindKey(item))}</Badge>
        <span className="font-semibold">
          {isRoute
            ? (item.routeDraft?.title ?? item.route?.title)
            : (item.draft?.title ?? item.place?.title)}
        </span>
        <StatusBadge status={item.status} />
        <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <UserAvatar
            name={item.author?.name ?? "?"}
            avatarId={item.author?.avatarId}
            className="size-5 text-[10px]"
          />
          {t("review_by", { name: item.author?.name ?? t("someone") })} ·{" "}
          {formatDistanceToNow(item.createdAt, { addSuffix: true })}
        </span>
      </div>
      {item.note && (
        <blockquote className="border-l-2 pl-3 text-sm text-muted-foreground italic">
          {item.note}
        </blockquote>
      )}
      {stale && (
        <div className="flex items-center gap-2 rounded-md bg-warning/15 p-2 text-xs">
          <AlertTriangle className="size-4" /> {t("review_stale")}
        </div>
      )}

      {isRoute && (
        <RouteProposalBody
          kind={item.kind}
          draft={item.routeDraft}
          current={currentRoute}
        />
      )}
      {item.kind === "create" && item.draft && (
        <DraftPreview draft={item.draft} view={view} />
      )}
      {item.kind === "edit" && item.draft && current && (
        <EditDiff
          before={current}
          after={item.draft}
          fields={view.collection.fields}
        />
      )}
      {proposedValues && current && (
        <EditDiff
          before={current}
          after={proposedValues}
          fields={view.collection.fields}
        />
      )}
      {isMembership && current && (
        <p className="text-sm">
          {t(`review_membership_${item.kind}_explainer`, {
            title: current.title,
          })}
        </p>
      )}
      {!isMembership && item.kind === "archive" && current && (
        <p className="text-sm">
          {t("review_archive_explainer", { title: current.title })}
        </p>
      )}
      {!isRoute && !isOverride && !isMembership && (item.draft ?? current) && (
        <LocationPreview
          draft={item.draft ?? (current as PlaceDraft)}
          before={item.kind === "edit" ? (current ?? undefined) : undefined}
        />
      )}

      {item.reviewNote && (
        <p className="text-sm">
          <span className="font-medium">
            {t("review_note_from", {
              name: item.reviewer?.name ?? t("someone"),
            })}
          </span>{" "}
          {item.reviewNote}
        </p>
      )}

      {reviewable && item.status === "pending" && (
        <div className="space-y-2 border-t pt-4">
          <Textarea
            rows={2}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={t("review_note_placeholder")}
            aria-label={t("review_note_placeholder")}
          />
          <div className="flex gap-2">
            <Button
              size="sm"
              disabled={review.isPending}
              onClick={() =>
                review.mutate({
                  proposalId: item.id,
                  decision: "approve",
                  note: note.trim() || null,
                })
              }
            >
              <Check /> {t("review_approve")}
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={review.isPending}
              onClick={() =>
                review.mutate({
                  proposalId: item.id,
                  decision: "reject",
                  note: note.trim() || null,
                })
              }
            >
              <X /> {t("review_reject")}
            </Button>
          </div>
        </div>
      )}
    </li>
  );
};

/** Places visitors reported gone or couldn't find, with what to do. */
const GoneList = ({ view }: { view: CollectionView }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data: items = [], isLoading } = useQuery(
    trpc.gone.list.queryOptions({ collectionId: view.collection.id }),
  );
  const resolve = useMutation(
    trpc.gone.resolve.mutationOptions({
      onSuccess: async (_res, input) => {
        toast.success(t(`gone_resolved_${input.action}`));
        await queryClient.invalidateQueries();
      },
      onError: (err) => toast.error(err.message),
    }),
  );
  const canMark = goneField(view.collection.fields) !== undefined;
  const { citySlug: city, slug } = view.collection;

  if (isLoading) return null;
  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
        {t("gone_review_empty")}
      </p>
    );
  }
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.placeId} className="space-y-3 rounded-xl border p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <Link
              to="/$city/$slug/p/$placeId"
              params={{ city, slug, placeId: item.placeId }}
              className="font-semibold hover:underline"
            >
              {item.title}
            </Link>
            <span className="flex items-center gap-1 text-xs text-warning">
              <SearchX className="size-3.5" />
              {t("report_count", { count: item.reports.length })}
            </span>
          </div>
          <ul className="space-y-1.5 text-sm">
            {item.reports.map((r) => (
              <li key={`${r.name}-${r.createdAt.toISOString()}`}>
                <span className="font-medium">{r.name}</span>:{" "}
                <span>{t(`report_${r.kind}`)}</span>
                <span className="text-xs text-muted-foreground">
                  {" "}
                  · {formatDistanceToNow(r.createdAt, { addSuffix: true })}
                </span>
                {r.note && <div className="italic">“{r.note}”</div>}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {canMark && !item.archived && (
              <Button
                size="sm"
                disabled={resolve.isPending}
                onClick={() =>
                  resolve.mutate({ placeId: item.placeId, action: "mark" })
                }
              >
                <SearchX /> {t("gone_mark")}
              </Button>
            )}
            {!item.archived && (
              <Button
                size="sm"
                variant="outline"
                disabled={resolve.isPending}
                onClick={() =>
                  resolve.mutate({ placeId: item.placeId, action: "archive" })
                }
              >
                <Archive /> {t("gone_archive")}
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              disabled={resolve.isPending}
              onClick={() =>
                resolve.mutate({ placeId: item.placeId, action: "dismiss" })
              }
            >
              <Check /> {t("gone_dismiss")}
            </Button>
          </div>
          {canMark && (
            <p className="text-xs text-muted-foreground">
              {t("gone_mark_hint")}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

const MineList = ({ view }: { view: CollectionView }) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data = [] } = useQuery(
    trpc.proposal.mine.queryOptions({ collectionId: view.collection.id }),
  );
  const withdraw = useMutation(
    trpc.proposal.withdraw.mutationOptions({
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: trpc.proposal.pathKey() }),
    }),
  );
  if (data.length === 0)
    return (
      <p className="text-sm text-muted-foreground">{t("review_mine_empty")}</p>
    );
  return (
    <ul className="divide-y rounded-xl border bg-card">
      {data.map((p) => (
        <li key={p.id} className="space-y-1 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{t(kindKey(p))}</Badge>
            {p.subject === "route" ? (
              p.status === "approved" && p.route ? (
                <Link
                  to="/$city/$slug/r/$routeId"
                  params={{
                    city: view.collection.citySlug,
                    slug: view.collection.slug,
                    routeId: p.route.id,
                  }}
                  className="font-medium hover:underline"
                >
                  {p.routeDraft?.title ?? p.route.title}
                </Link>
              ) : (
                <span className="font-medium">
                  {p.routeDraft?.title ?? p.route?.title}
                </span>
              )
            ) : p.status === "approved" && p.place ? (
              <Link
                to="/$city/$slug/p/$placeId"
                params={{
                  city: view.collection.citySlug,
                  slug: view.collection.slug,
                  placeId: p.place.id,
                }}
                className="font-medium hover:underline"
              >
                {p.draft?.title ?? p.place.title}
              </Link>
            ) : (
              <span className="font-medium">
                {p.draft?.title ?? p.place?.title}
              </span>
            )}
            <StatusBadge status={p.status} />
            <span className="ml-auto text-xs text-muted-foreground">
              {formatDistanceToNow(p.createdAt, { addSuffix: true })}
            </span>
          </div>
          {p.reviewNote && (
            <p className="text-sm text-muted-foreground">
              {t("review_note_from", {
                name: p.reviewer?.name ?? t("someone"),
              })}{" "}
              “{p.reviewNote}”
            </p>
          )}
          {p.status === "pending" && (
            <Button
              size="sm"
              variant="ghost"
              className="-ml-2 text-muted-foreground"
              onClick={() => withdraw.mutate({ proposalId: p.id })}
            >
              {t("review_withdraw")}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};

const TABS = ["queue", "gone", "reviewed", "mine"] as const;

const ReviewPage = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate({ from: Route.fullPath });
  const { city, slug } = Route.useParams();
  const { tab } = Route.useSearch();
  const initial = Route.useLoaderData();
  const { data: view } = useQuery({
    ...trpc.collection.bySlug.queryOptions({ slug }),
    initialData: initial,
  });
  const canReview = view.can.review;
  const activeTab = canReview ? tab : "mine";
  const statuses: ProposalStatus[] =
    activeTab === "queue" ? ["pending"] : ["approved", "rejected"];
  const { data: items = [], isLoading } = useQuery({
    ...trpc.proposal.queue.queryOptions({
      collectionId: view.collection.id,
      statuses,
    }),
    enabled: canReview && activeTab !== "mine" && activeTab !== "gone",
  });

  return (
    <PageShell
      back={{
        to: "/$city/$slug",
        params: { city, slug },
        label: view.collection.title,
      }}
      title={canReview ? t("review_title") : t("review_mine_title")}
      subtitle={canReview ? t("review_subtitle") : t("review_mine_subtitle")}
    >
      {canReview && (
        <Tabs
          value={activeTab}
          onValueChange={(v) =>
            navigate({ search: { tab: v as (typeof TABS)[number] } })
          }
        >
          <TabsList>
            <TabsTrigger value="queue">
              {t("review_tab_queue")}
              {view.pendingCount > 0 && (
                <Badge className="ml-1 h-5 bg-brick px-1.5">
                  {view.pendingCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="gone">
              {t("review_tab_gone")}
              {view.goneCount > 0 && (
                <Badge className="ml-1 h-5 bg-warning px-1.5">
                  {view.goneCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="reviewed">
              {t("review_tab_reviewed")}
            </TabsTrigger>
            <TabsTrigger value="mine">{t("review_tab_mine")}</TabsTrigger>
          </TabsList>
        </Tabs>
      )}
      {activeTab === "mine" ? (
        <MineList view={view} />
      ) : activeTab === "gone" ? (
        <GoneList view={view} />
      ) : isLoading ? null : items.length === 0 ? (
        <p className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
          {activeTab === "queue"
            ? t("review_empty")
            : t("review_reviewed_empty")}
        </p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <ProposalCard
              key={item.id}
              item={item}
              view={view}
              reviewable={activeTab === "queue"}
            />
          ))}
        </ul>
      )}
    </PageShell>
  );
};

export const Route = createFileRoute("/$city/$slug_/review")({
  validateSearch: z.object({ tab: z.enum(TABS).default("queue") }),
  loader: async ({ params }) => {
    const view = await loadCollection({ data: params.slug });
    if (!view) throw notFound();
    return view;
  },
  head: () => ({ meta: [{ title: "Review · Deep Cities" }] }),
  component: ReviewPage,
});
