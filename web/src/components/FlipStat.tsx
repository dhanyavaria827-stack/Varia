import { useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTilt } from "@/lib/useTilt";

const PLACEHOLDER = "–";
const REVEAL_INTERVAL = 420;

function FlipDigit({ char }: { char: string }) {
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
  const [revealedCount, setRevealedCount] = useState(0);
  const finalDigits = String(value).split("");

  useEffect(() => {
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
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ z: 14, transition: { type: "spring", stiffness: 120, damping: 18 } }}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      className="rounded-sm border border-camel-500/25 bg-parchment-2/50 px-4 py-6 text-center shadow-card"
    >
      <div className="flap-digit flex items-baseline justify-center text-3xl font-medium text-camel-700 dark:text-brass-300 sm:text-4xl">
        {prefix && <span className="mr-0.5">{prefix}</span>}
        {finalDigits.map((d, i) => (
          <FlipDigit key={i} char={i < revealedCount ? d : PLACEHOLDER} />
        ))}
        {suffix && <span className="ml-0.5">{suffix}</span>}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
        {label}
      </div>
    </motion.div>
  );
}
