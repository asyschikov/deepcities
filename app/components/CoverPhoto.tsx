import { useState } from "react";
import { cn, photoUrl } from "~/lib/utils";

/**
 * A photo in a 4:3 frame. Landscape photos fill it; tall ones (a statue, a
 * tower, a doorway) are shown whole over a blurred copy of themselves, since
 * cropping them to 4:3 cuts off the top and bottom.
 */
export const CoverPhoto = ({
  id,
  alt,
  width,
  height,
  className,
}: {
  id: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState<{ id: string; tall: boolean } | null>(
    null,
  );
  const tall =
    loaded?.id === id
      ? loaded.tall
      : width !== undefined && height !== undefined && height > width;
  const src = photoUrl(id);
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted",
        className,
      )}
    >
      {tall && (
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-xl"
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={(e) => {
          const img = e.currentTarget;
          setLoaded({ id, tall: img.naturalHeight > img.naturalWidth });
        }}
        className={cn(
          "relative size-full",
          tall ? "object-contain" : "object-cover",
        )}
      />
    </div>
  );
};
