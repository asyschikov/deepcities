import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/** Get initials from a name: "John Doe" → "JD", "John" → "J" */
export const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length > 1) {
    return `${parts.at(0)?.at(0) ?? ""}${parts.at(-1)?.at(0) ?? ""}`.toUpperCase();
  }
  return name.charAt(0).toUpperCase();
};

/**
 * Photos are resized at the edge by Cloudflare Image Transformations
 * (`/cdn-cgi/image/…`, enabled for the deepcities.org zone; they don't exist
 * in local dev, which gets the original). Each photo × size is a billed
 * "unique transformation" a month, so there are just two sizes, and anything
 * larger uses the original (already at most 1600 px from the uploader).
 * `onerror=redirect` falls back to the original if a resize ever fails.
 */
const RESIZE = !import.meta.env.DEV;

export const PHOTO_SIZES = {
  /** Lists, nearby places, gallery strip, blurred backdrops. */
  thumb: 320,
  /** The main photo on a page, photos in texts, share previews. */
  main: 1200,
} as const;
export type PhotoSize = keyof typeof PHOTO_SIZES;

/**
 * Public URL of an uploaded photo (served by the worker from R2): the
 * original, or with `size` scaled down to it, in WebP/AVIF where the
 * browser takes it.
 */
export const photoUrl = (photoId: string, size?: PhotoSize): string => {
  const src = `/media/photos/${photoId}`;
  return size && RESIZE
    ? `/cdn-cgi/image/width=${PHOTO_SIZES[size]},fit=scale-down,format=auto,quality=80,onerror=redirect${src}`
    : src;
};

/** The main size for most screens, the original for wide, sharp ones. */
export const photoSrcSet = (photoId: string): string =>
  `${photoUrl(photoId, "main")} ${PHOTO_SIZES.main}w, ${photoUrl(photoId)} 1600w`;
export const avatarUrl = (id: string): string => `/media/avatars/${id}`;
export const checkinPhotoUrl = (id: string): string => `/media/checkins/${id}`;
