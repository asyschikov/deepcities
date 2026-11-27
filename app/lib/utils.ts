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
 * (`/cdn-cgi/image/…`, enabled for the deepcities.org zone); they don't
 * exist in local dev, which gets the original.
 */
// Off: the free Cloudflare plan allows 5,000 resizes a month, and the site
// went past it (error 9422 broke every photo). Originals until resizing is
// paid for or done once at upload.
const RESIZE = false;

/**
 * Public URL of an uploaded photo (served by the worker from R2), with
 * `width`: scaled down to at most that many pixels, in WebP/AVIF where the
 * browser takes it.
 */
export const photoUrl = (photoId: string, width?: number): string => {
  const src = `/media/photos/${photoId}`;
  return width && RESIZE
    ? `/cdn-cgi/image/width=${width},fit=scale-down,format=auto,quality=80${src}`
    : src;
};

/** A `srcSet` of the photo at `widths`. */
export const photoSrcSet = (photoId: string, widths: number[]): string =>
  widths.map((w) => `${photoUrl(photoId, w)} ${w}w`).join(", ");

/** Widths for a photo shown across a page or panel. */
export const PHOTO_WIDTHS = [480, 800, 1200, 1600];
/** A list thumbnail (shown at 48–64 px; 2x screens double it). */
export const THUMB_WIDTH = 160;
export const avatarUrl = (id: string): string => `/media/avatars/${id}`;
export const checkinPhotoUrl = (id: string): string => `/media/checkins/${id}`;
