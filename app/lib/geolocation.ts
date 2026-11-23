import { useCallback, useEffect, useRef, useState } from "react";
import { distanceMeters } from "./diff";

/**
 * The reader's own position, from the phone's (or browser's) location
 * service. Only ever started by the reader (a tap), never on page load,
 * unless they had it on last time and already granted permission.
 */
export type GeoStatus = "off" | "locating" | "on" | "denied" | "unavailable";

export interface GeoFix {
  lat: number;
  lng: number;
  /** Radius of uncertainty in metres. */
  accuracy: number;
  /** Direction of travel in degrees from north, when moving. */
  heading: number | null;
  /** When the fix was taken (ms since epoch). */
  at: number;
}

export interface Geolocation {
  status: GeoStatus;
  fix: GeoFix | null;
  start: () => void;
  stop: () => void;
}

/** Remembered (per browser) so location comes back on after a reload. */
const REMEMBER_KEY = "dc-location";
const remember = (on: boolean) => {
  try {
    if (on) localStorage.setItem(REMEMBER_KEY, "on");
    else localStorage.removeItem(REMEMBER_KEY);
  } catch {
    // Storage blocked: it just won't come back on by itself.
  }
};
const remembered = (): boolean => {
  try {
    return localStorage.getItem(REMEMBER_KEY) === "on";
  } catch {
    return false;
  }
};

export const useGeolocation = (): Geolocation => {
  const [status, setStatus] = useState<GeoStatus>("off");
  const [fix, setFix] = useState<GeoFix | null>(null);
  const watchId = useRef<number | null>(null);

  const clear = useCallback(() => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clear();
    remember(false);
    setStatus("off");
    setFix(null);
  }, [clear]);

  const start = useCallback(() => {
    if (watchId.current !== null) return;
    if (!("geolocation" in navigator)) {
      setStatus("unavailable");
      return;
    }
    setStatus("locating");
    watchId.current = navigator.geolocation.watchPosition(
      (p) => {
        remember(true);
        setStatus("on");
        setFix({
          lat: p.coords.latitude,
          lng: p.coords.longitude,
          accuracy: p.coords.accuracy,
          heading:
            p.coords.heading === null || Number.isNaN(p.coords.heading)
              ? null
              : p.coords.heading,
          at: p.timestamp,
        });
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          clear();
          remember(false);
          setStatus("denied");
          setFix(null);
          return;
        }
        // Timeouts and lost signal: keep watching, keep the last fix.
        setStatus((s) => (s === "locating" ? "unavailable" : s));
      },
      { enableHighAccuracy: true, maximumAge: 5_000, timeout: 30_000 },
    );
  }, [clear]);

  // On last time and still allowed: come back on without asking again.
  useEffect(() => {
    if (!remembered() || !navigator.permissions) return;
    let cancelled = false;
    navigator.permissions
      .query({ name: "geolocation" })
      .then((p) => {
        if (!cancelled && p.state === "granted") start();
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [start]);

  useEffect(() => clear, [clear]);

  return { status, fix, start, stop };
};

/**
 * `fix`, but only updated once it has moved `meters` from the last value
 * returned: for lists sorted by distance that shouldn't reshuffle with
 * every step or GPS jitter.
 */
export const useSettledFix = (
  fix: GeoFix | null,
  meters = 25,
): GeoFix | null => {
  const [settled, setSettled] = useState(fix);
  useEffect(() => {
    setSettled((prev) =>
      !fix || !prev || distanceMeters(prev, fix) >= meters ? fix : prev,
    );
  }, [fix, meters]);
  return settled;
};

/** Within reach of a point: close enough to count as being there. */
export const isAt = (
  fix: GeoFix,
  point: { lat: number; lng: number },
  reach = 35,
): boolean =>
  distanceMeters(fix, point) <= Math.max(reach, Math.min(fix.accuracy, 75));

/** Keep the screen on while `on` (e.g. following a route). */
export const useWakeLock = (on: boolean) => {
  useEffect(() => {
    if (!on || !("wakeLock" in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    let cancelled = false;
    const acquire = () => {
      if (document.visibilityState !== "visible") return;
      navigator.wakeLock
        .request("screen")
        .then((l) => {
          if (cancelled) l.release().catch(() => {});
          else lock = l;
        })
        .catch(() => {});
    };
    acquire();
    // The lock is dropped when the tab is hidden; take it again on return.
    document.addEventListener("visibilitychange", acquire);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", acquire);
      lock?.release().catch(() => {});
    };
  }, [on]);
};
