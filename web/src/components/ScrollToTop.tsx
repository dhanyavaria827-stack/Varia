import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    // The target page may still be mid page-transition, so the anchor
    // might not exist in the DOM yet — poll a few frames until it does.
    // Once found, its entrance animation (page transform + its own reveal)
    // is still moving it into place, so scrolling immediately lands on a
    // stale mid-animation position. Wait for its rect to stop changing
    // between frames before scrolling, so we land on its final resting spot.
    const id = hash.slice(1);
    let attempts = 0;
    let raf = 0;
    let lastTop: number | null = null;
    let stableFrames = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (lastTop !== null && Math.abs(top - lastTop) < 0.5) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }
        lastTop = top;
        if (stableFrames >= 4) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      attempts += 1;
      if (attempts < 120) raf = window.requestAnimationFrame(tryScroll);
    };
    raf = window.requestAnimationFrame(tryScroll);
    return () => window.cancelAnimationFrame(raf);
  }, [pathname, hash]);

  return null;
}
