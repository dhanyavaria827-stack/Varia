import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote as QuoteIcon } from "lucide-react";

interface QuoteItem {
  text: string;
  attribution: string;
  initial?: string;
}

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

// Depth-stack styling for each badge, keyed by its distance behind the
// active one (0 = front). Mirrors the "stacked photo deck" feel of an
// animated-testimonials pattern, minus the photos — see the badge-stack
// comment below for why.
const STACK_STEPS = [
  { scale: 1, opacity: 1, y: 0, rotate: 0 },
  { scale: 0.93, opacity: 0.55, y: 14, rotate: -6 },
  { scale: 0.86, opacity: 0.3, y: 26, rotate: 6 },
  { scale: 0.8, opacity: 0, y: 34, rotate: 0 },
];

export function QuoteCarousel({ quotes }: { quotes: readonly QuoteItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

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
    <div
      className="mx-auto grid max-w-3xl items-center gap-8 sm:grid-cols-[128px_1fr] sm:gap-10"
      role="group"
      aria-roledescription="carousel"
      aria-label="Quotes from the Gurukulam Parivar"
    >
      {/* Badge stack. A real "animated testimonials" pattern rotates through
          each person's photo — but doing that here would mean either a
          fabricated photo of a real, named person (Yamini Paras Sanghvi,
          Ankita Ben) or a made-up likeness for an institutional/traditional
          source, both dishonest. A monogram badge gets the same layered,
          cycling depth effect without inventing anyone's face. */}
      <div aria-hidden="true" className="relative mx-auto h-32 w-32">
        {quotes.map((q, i) => {
          const depth = (i - index + quotes.length) % quotes.length;
          const step = STACK_STEPS[Math.min(depth, STACK_STEPS.length - 1)];
          return (
            <motion.div
              key={i}
              animate={{
                scale: step.scale,
                opacity: step.opacity,
                y: step.y,
                rotate: reduceMotion ? 0 : step.rotate,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 500, damping: 34 }
              }
              style={{ zIndex: quotes.length - depth }}
              className="absolute inset-0 grid place-items-center rounded-full border border-brass-500/40 bg-parchment-2/70 shadow-card"
            >
              {q.initial ? (
                <span className="font-display text-4xl font-medium text-camel-700 dark:text-brass-300">
                  {q.initial}
                </span>
              ) : (
                <QuoteIcon aria-hidden="true" className="text-camel-600 dark:text-brass-300" size={30} />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="text-center sm:text-left">
        <div className="relative" aria-live="off">
          {/* mode="wait" (not "popLayout") so only one quote is ever in the
              DOM — a screen reader landing mid-transition can't pick up the
              outgoing one. That also means the two never overlap, so this
              can safely size to whichever quote is current instead of a
              fixed min-height that would clip the longer ones. */}
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
              }
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

        <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={() => go(index - 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink-soft transition hover:border-brass-500 hover:text-camel-600 dark:border-white/10 dark:hover:text-brass-300"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                aria-label={`Show quote ${i + 1}`}
                onClick={() => go(i)}
                className="grid h-6 w-6 place-items-center"
              >
                <span
                  className="relative block h-1.5 rounded-full bg-camel-500/25 transition-all"
                  style={{ width: i === index ? 22 : 8 }}
                >
                  {i === index && (
                    <motion.span
                      layoutId="quote-dot"
                      className="absolute inset-0 rounded-full bg-camel-600 dark:bg-brass-400"
                      transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next quote"
            onClick={() => go(index + 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink-soft transition hover:border-brass-500 hover:text-camel-600 dark:border-white/10 dark:hover:text-brass-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
