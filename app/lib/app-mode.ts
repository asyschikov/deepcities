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
 */
export type AppMode = "explore" | "edit";

const KEY = "dc-mode";
const listeners = new Set<() => void>();

const deviceDefault = (): AppMode =>
  window.matchMedia("(pointer: coarse)").matches ? "explore" : "edit";

const read = (): AppMode => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "explore" || saved === "edit") return saved;
  } catch {
    // Storage blocked: fall back to the device's default.
  }
  return deviceDefault();
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
  return () => listeners.delete(listener);
};

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
