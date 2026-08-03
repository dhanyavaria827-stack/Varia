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
