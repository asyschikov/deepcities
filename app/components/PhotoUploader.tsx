import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, ImagePlus, Loader2, X } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { MAX_PHOTOS_PER_PLACE } from "~/lib/constants";
import { resizeImage } from "~/lib/resize-image";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** Ordered photo list; the first photo is the cover. */
export const PhotoUploader = ({
  collectionId,
  value,
  onChange,
}: {
  collectionId: string;
  value: string[];
  onChange: (ids: string[]) => void;
}) => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(0);
  const upload = useMutation(trpc.photo.upload.mutationOptions());

  const addFiles = async (files: File[]) => {
    const room = MAX_PHOTOS_PER_PLACE - value.length;
    const picked = files.slice(0, room);
    if (files.length > room)
      toast.warning(t("photos_limit", { max: MAX_PHOTOS_PER_PLACE }));
    setBusy((b) => b + picked.length);
    const ids = await Promise.all(
      picked.map(async (file) => {
        try {
          const img = await resizeImage(file);
          const { id } = await upload.mutateAsync({
            collectionId,
            base64: img.base64,
            contentType: img.contentType,
            width: img.width,
            height: img.height,
          });
          setPreviews((p) => ({ ...p, [id]: img.previewUrl }));
          return id;
        } catch {
          toast.error(t("photos_upload_failed", { name: file.name }));
          return null;
        } finally {
          setBusy((b) => b - 1);
        }
      }),
    );
    onChange([...value, ...ids.filter((id): id is string => id !== null)]);
  };

  const move = (i: number) => {
    const next = [...value];
    const [item] = next.splice(i, 1);
    if (item) next.splice(i - 1, 0, item);
    onChange(next);
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        {value.map((id, i) => (
          <div
            key={id}
            className="group relative aspect-[4/3] overflow-hidden rounded-md bg-muted"
          >
            <img
              src={previews[id] ?? photoUrl(id)}
              alt=""
              className="size-full object-cover"
            />
            {i === 0 && (
              <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 text-[10px] font-medium text-white">
                {t("photos_cover")}
              </span>
            )}
            <div className="absolute top-1 right-1 flex gap-1 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
              {i > 0 && (
                <button
                  type="button"
                  onClick={() => move(i)}
                  className="rounded bg-black/60 p-1 text-white"
                  aria-label={t("photos_move_left")}
                >
                  <ArrowLeft className="size-3" />
                </button>
              )}
              <button
                type="button"
                onClick={() => onChange(value.filter((v) => v !== id))}
                className="rounded bg-black/60 p-1 text-white"
                aria-label={t("photos_remove")}
              >
                <X className="size-3" />
              </button>
            </div>
          </div>
        ))}
        {Array.from({ length: busy }, (_, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: transient placeholders
            key={`busy-${i}`}
            className="flex aspect-[4/3] items-center justify-center rounded-md bg-muted"
          >
            <Loader2 className="size-5 animate-spin text-muted-foreground" />
          </div>
        ))}
        {value.length + busy < MAX_PHOTOS_PER_PLACE && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-md border border-dashed text-xs text-muted-foreground hover:bg-muted"
          >
            <ImagePlus className="size-5" />
            {t("photos_add")}
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          const files = [...(e.target.files ?? [])];
          e.target.value = "";
          if (files.length) void addFiles(files);
        }}
      />
    </div>
  );
};
