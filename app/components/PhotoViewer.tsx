import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PhotoCredit, type PhotoMeta } from "~/components/PhotoCredit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "~/components/ui/dialog";
import { photoUrl } from "~/lib/utils";

/** A photo at full size, with its credit; arrows step through the rest. */
export const PhotoViewer = ({
  photoIds,
  photos,
  index,
  onIndexChange,
  open,
  onOpenChange,
  title,
}: {
  photoIds: string[];
  photos: PhotoMeta[];
  index: number;
  onIndexChange: (i: number) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}) => {
  const { t } = useTranslation();
  const count = photoIds.length;
  const current = photoIds[index] ?? photoIds[0];
  const step = (by: number) => onIndexChange((index + by + count) % count);

  useEffect(() => {
    if (!open || count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, count, index, onIndexChange]);

  if (!current) return null;
  const arrow =
    "absolute top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70";
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[100dvh] w-fit gap-2 border-0 bg-black p-2 text-white sm:max-w-[min(92vw,1400px)] [&>button:last-child]:z-10 [&>button:last-child]:rounded-full [&>button:last-child]:bg-black/50 [&>button:last-child]:p-1.5 [&>button:last-child]:text-white [&>button:last-child]:opacity-100">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          {t("photo_viewer_desc", { n: index + 1, count })}
        </DialogDescription>
        <div className="relative flex items-center justify-center">
          <img
            src={photoUrl(current)}
            sizes="92vw"
            alt={title}
            className="max-h-[82dvh] w-auto max-w-[min(calc(100vw-3rem),1400px)] min-w-64 object-contain"
          />
          {count > 1 && (
            <>
              <button
                type="button"
                className={`${arrow} left-2`}
                aria-label={t("photo_prev")}
                onClick={() => step(-1)}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className={`${arrow} right-2`}
                aria-label={t("photo_next")}
                onClick={() => step(1)}
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
        <div className="flex items-baseline justify-between gap-3 px-1 text-white/70 [&_a]:text-white/70 [&_p]:text-white/70">
          <PhotoCredit photo={photos.find((p) => p.id === current)} />
          {count > 1 && (
            <span className="shrink-0 text-xs tabular-nums">
              {index + 1} / {count}
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
