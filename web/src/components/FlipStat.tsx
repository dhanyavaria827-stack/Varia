import { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useTilt } from "@/lib/useTilt";
import { isServer } from "@/lib/utils";

const PLACEHOLDER = "–";
const REVEAL_INTERVAL = 420;

function FlipDigit({ char, reduceMotion }: { char: string; reduceMotion: boolean }) {
  if (reduceMotion) {
    return (
      <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden text-center">
        <span className="absolute inset-0 flex items-center justify-center">{char}</span>
      </span>
    );
  }

  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden text-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={char}
          initial={{ rotateX: 70, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -70, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function FlipStat({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(10);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const finalDigits = String(value).split("");
  // On the server there is no effect to run the reveal, so starting at 0
  // would bake "Est. – – – –" into the prerendered HTML instead of the real
  // figures. Render fully revealed there; the client still starts at 0 and
  // animates, since it mounts a fresh tree rather than hydrating this markup.
  const [revealedCount, setRevealedCount] = useState(() =>
    isServer || reduceMotion ? finalDigits.length : 0
  );

  useEffect(() => {
    // useReducedMotion() resolves to null on the first render and only then
    // reports the real preference, so the useState initializer above can't be
    // trusted for it: a reduced-motion visitor starts at 0 and, without this
    // branch, the early return below would leave every digit showing the "–"
    // placeholder forever. Snap to the final value instead of animating.
    if (reduceMotion) {
      setRevealedCount(finalDigits.length);
      return;
    }
    if (!inView) return;
    let count = 0;
    const id = window.setInterval(() => {
      count += 1;
      setRevealedCount(count);
      if (count >= finalDigits.length) window.clearInterval(id);
    }, REVEAL_INTERVAL);
    return () => window.clearInterval(id);
    // finalDigits is derived from `value`, which is stable per stat card.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ z: 14, transition: { type: "spring", stiffness: 120, damping: 18 } }}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      className="rounded-sm bg-parchment-2/50 px-4 py-6 text-center shadow-card"
    >
      <div className="flap-digit flex items-baseline justify-center text-3xl font-medium text-camel-700 dark:text-brass-300 sm:text-4xl">
        {prefix && <span className="mr-0.5">{prefix}</span>}
        {finalDigits.map((d, i) => (
          <FlipDigit key={i} char={i < revealedCount ? d : PLACEHOLDER} reduceMotion={!!reduceMotion} />
        ))}
        {suffix && <span className="ml-0.5">{suffix}</span>}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </div>
    </motion.div>
  );
}
