import { useNavigate, useSearch } from "@tanstack/react-router";
import { PhotoCredit, type PhotoMeta } from "~/components/PhotoCredit";
import { cn, photoUrl } from "~/lib/utils";

export type { PhotoMeta };

/** Main photo with attribution and thumbnails. */
export const Gallery = ({
  photoIds,
  photos,
  title,
}: {
  photoIds: string[];
  photos: PhotoMeta[];
  title: string;
}) => {
  // The shown photo is in the URL (`?photo=2`), so links share it.
  const { photo: index = 0 } = useSearch({ from: "/m/$slug" });
  const navigate = useNavigate();
  const setIndex = (i: number) =>
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        photo: i === 0 ? undefined : i,
      }),
      replace: true,
      resetScroll: false,
    });
  const current = photoIds[index] ?? photoIds[0];
  if (!current) return null;
  return (
    <div className="space-y-2">
      <img
        src={photoUrl(current)}
        alt={title}
        className="aspect-[4/3] w-full rounded-lg bg-muted object-cover"
      />
      <PhotoCredit photo={photos.find((p) => p.id === current)} />
      {photoIds.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto">
          {photoIds.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "size-14 shrink-0 overflow-hidden rounded border-2",
                i === index
                  ? "border-primary"
                  : "border-transparent opacity-70",
              )}
            >
              <img
                src={photoUrl(id)}
                alt=""
                className="size-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
