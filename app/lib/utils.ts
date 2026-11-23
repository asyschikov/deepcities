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

/** Public URL of an uploaded photo (served by the worker from R2). */
export const photoUrl = (photoId: string): string => `/media/photos/${photoId}`;
export const checkinPhotoUrl = (id: string): string => `/media/checkins/${id}`;
