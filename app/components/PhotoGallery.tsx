import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn, photoUrl } from "~/lib/utils";

/** Photo metadata as returned by place.byId / route.byId. */
export interface PhotoMeta {
  id: string;
  credit: string | null;
  license: string | null;
  sourceUrl: string | null;
}

const PhotoCredit = ({ photo }: { photo: PhotoMeta | undefined }) => {
  const { t } = useTranslation();
  if (!photo?.credit) return null;
  const text = [photo.credit, photo.license].filter(Boolean).join(", ");
  return (
    <p className="text-[11px] text-muted-foreground">
      {photo.sourceUrl ? (
        <a
          href={photo.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {t("photo_credit", { credit: text })}
        </a>
      ) : (
        t("photo_credit", { credit: text })
      )}
    </p>
  );
};

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
  const [index, setIndex] = useState(0);
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
