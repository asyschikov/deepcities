import { useTranslation } from "react-i18next";

/** Attribution metadata of an uploaded photo. */
export interface PhotoMeta {
  id: string;
  width?: number;
  height?: number;
  credit: string | null;
  license: string | null;
  sourceUrl: string | null;
}

/** "Photo: Jane Doe, CC BY-SA 4.0" under a picture, linked to its source. */
export const PhotoCredit = ({ photo }: { photo: PhotoMeta | undefined }) => {
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
