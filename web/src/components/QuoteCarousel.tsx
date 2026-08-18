import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

interface QuoteItem {
  text: string;
  attribution: string;
}

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

export function QuoteCarousel({ quotes }: { quotes: readonly QuoteItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % quotes.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [quotes.length]);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + quotes.length) % quotes.length);
  }

  const current = quotes[index];

  return (
    <div className="mx-auto max-w-3xl text-center" role="group" aria-roledescription="carousel" aria-label="Quotes from the Gurukulam Parivar">
      <QuoteIcon aria-hidden="true" className="mx-auto mb-5 text-brass-500" size={28} />
      <div className="relative" aria-live="off">
        {/* mode="wait" (not "popLayout") so only one quote is ever in the DOM —
            a screen reader landing mid-transition can't pick up the outgoing
            one. That also means the two never overlap, so this can safely
            size to whichever quote is current instead of a fixed min-height
            that would clip the longer ones. */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-xl italic leading-snug text-ink sm:text-2xl">
              "{current.text}"
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-camel-600 dark:text-brass-300">
              {current.attribution}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            aria-label={`Show quote ${i + 1}`}
            onClick={() => go(i)}
            className="relative h-1.5 rounded-full bg-camel-500/25 transition-all"
            style={{ width: i === index ? 22 : 8 }}
          >
            {i === index && (
              <motion.span
                layoutId="quote-dot"
                className="absolute inset-0 rounded-full bg-camel-600 dark:bg-brass-400"
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
