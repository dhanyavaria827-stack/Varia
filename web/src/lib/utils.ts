import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Builds a wa.me click-to-chat link from a display phone number like "+91 98249 82352". */
export function waLink(phone: string, text?: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${digits}${query}`;
}

/** Builds a tel: link from a display phone number. */
export function telLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Converts a display name like "Fashion design" into a URL slug "fashion-design". */
export function slugify(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * True while rendering on the server. scripts/prerender.mjs runs the app
 * through renderToStaticMarkup, where effects never run and there is no
 * scroll or IntersectionObserver — so any component that starts in a hidden
 * or placeholder state would ship that state as the static HTML crawlers and
 * no-JS visitors actually see. Components use this to render their settled
 * state on the server. Safe because main.tsx clears #root and mounts a fresh
 * tree, so this markup is never hydrated.
 */
export const isServer = typeof window === "undefined";
