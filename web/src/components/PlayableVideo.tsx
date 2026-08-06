import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

// A longer video with real spoken audio — unlike LazyVideo's silent ambient
// loop, this waits for a deliberate click before it loads or plays anything,
// then hands off to native controls so the visitor is in charge of sound.
export function PlayableVideo({
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
  const [started, setStarted] = useState(false);

  function start() {
    setStarted(true);
    requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      el.load();
      el.play().catch(() => {});
    });
  }

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        poster={poster}
        controls={started}
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      >
        {started && sources.map((s) => <source key={s.src} src={s.src} type={s.type} />)}
      </video>
      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            onClick={start}
            aria-label={`Play: ${label}`}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="group absolute inset-0 flex items-center justify-center bg-ink/15 transition-colors hover:bg-ink/25"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-parchment/95 text-camel-700 shadow-soft"
            >
              <Play size={26} className="ml-1" fill="currentColor" />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
