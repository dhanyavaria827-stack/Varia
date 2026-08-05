import { useEffect } from "react";

const SITE_NAME = "Gurukulam, Surat";

/**
 * Sets the browser tab title for the current page, restoring the previous
 * title on unmount. Pass a full title (containing the site name already) to
 * use it verbatim — otherwise it's suffixed with " — Gurukulam, Surat".
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
