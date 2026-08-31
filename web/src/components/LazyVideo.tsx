import { useEffect, useRef, useState } from "react";

// A muted, looping clip that only starts loading/playing once it's actually
// scrolled near the viewport — same restraint as the site's 3D components,
// just for video instead of WebGL. Shows the poster frame immediately so
// there's never an empty box while it's off-screen or still downloading.
export function LazyVideo({
  sources,
  poster,
  label,
  className = "",
}: {
  sources: { src: string; type: string }[];
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (inView && !reduceMotion) {
      // <source> children were just added to the DOM this render — the
      // element needs an explicit load() to notice them and start fetching.
      el.load();
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={className}
    >
      {inView && sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
    </video>
  );
}
