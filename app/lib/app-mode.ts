import { useSyncExternalStore } from "react";

/**
 * Two ways to use a map, built for different moments:
 * - explore: out on foot with a phone. Your own experience: what's near,
 *   following a route, checking in, your verdicts and visits. Anyone
 *   signed in can do all of it.
 * - edit: at a laptop. Suggesting and reviewing places, documents,
 *   managing the map, history.
 * Same pages and data; each mode puts its own tools first and keeps the
 * other's out of the way. Defaults by device, remembered per browser.
 * Explore exists only on phone-sized screens: on a desktop it is always
 * edit (a UI choice, not a permission: the server doesn't care).
 */
export type AppMode = "explore" | "edit";

const KEY = "dc-mode";
const listeners = new Set<() => void>();

/** Phone-sized: narrow, or a touch screen no wider than a phone in landscape. */
const PHONE_QUERY =
  "(max-width: 767px), (pointer: coarse) and (max-width: 1024px)";

const isPhone = (): boolean => window.matchMedia(PHONE_QUERY).matches;

const read = (): AppMode => {
  if (!isPhone()) return "edit";
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "explore" || saved === "edit") return saved;
  } catch {
    // Storage blocked: fall back to the device's default.
  }
  return "explore";
};

export const setAppMode = (mode: AppMode) => {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    // Storage blocked: the choice lasts until the page reloads.
  }
  current = mode;
  for (const l of listeners) l();
};

let current: AppMode | null = null;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  // Rotating or resizing across the phone line switches modes.
  const media = window.matchMedia(PHONE_QUERY);
  const onChange = () => {
    current = read();
    listener();
  };
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onChange);
  };
};

const phoneListeners = (listener: () => void) => {
  const media = window.matchMedia(PHONE_QUERY);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
};

/** On a phone-sized screen (false while rendering on the server). */
export const usePhone = (): boolean =>
  useSyncExternalStore(phoneListeners, isPhone, () => false);

/** The current mode ("edit" while rendering on the server). */
export const useAppMode = (): AppMode =>
  useSyncExternalStore(
    subscribe,
    () => {
      current ??= read();
      return current;
    },
    () => "edit",
  );
