import { useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CoverPhoto } from "~/components/CoverPhoto";
import { PhotoCredit, type PhotoMeta } from "~/components/PhotoCredit";
import { PhotoViewer } from "~/components/PhotoViewer";
import { cn, photoUrl, THUMB_WIDTH } from "~/lib/utils";

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
  // (Read loosely: the gallery is on map pages and on places' own pages.)
  const { photo: index = 0 } = useSearch({ strict: false });
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [viewing, setViewing] = useState(false);
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
  const meta = photos.find((p) => p.id === current);
  return (
    <div className="space-y-2">
      <CoverPhoto
        id={current}
        alt={title}
        width={meta?.width}
        height={meta?.height}
        onOpen={() => setViewing(true)}
        openLabel={t("photo_open")}
      />
      <PhotoViewer
        photoIds={photoIds}
        photos={photos}
        index={photoIds.indexOf(current)}
        onIndexChange={setIndex}
        open={viewing}
        onOpenChange={setViewing}
        title={title}
      />
      <PhotoCredit photo={meta} />
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
                src={photoUrl(id, THUMB_WIDTH)}
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
