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
  onOpen,
  openLabel,
}: {
  id: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Makes the photo a button, e.g. to open it full size. */
  onOpen?: () => void;
  openLabel?: string;
}) => {
  const [loaded, setLoaded] = useState<{ id: string; tall: boolean } | null>(
    null,
  );
  const tall =
    loaded?.id === id
      ? loaded.tall
      : width !== undefined && height !== undefined && height > width;
  const src = photoUrl(id);
  const Frame = onOpen ? "button" : "div";
  return (
    <Frame
      {...(onOpen
        ? { type: "button" as const, onClick: onOpen, "aria-label": openLabel }
        : {})}
      className={cn(
        "relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted",
        onOpen && "cursor-zoom-in",
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
    </Frame>
  );
};
