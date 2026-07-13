import { motion } from "framer-motion";

// A slow-rotating brass sundial/compass ring — an ambient, continuous
// "swap" of position rather than a one-shot entrance animation.
export function OrnamentRing({ className }: { className?: string }) {
  const ticks = Array.from({ length: 36 }, (_, i) => i);

  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {ticks.map((i) => {
        const angle = (i / ticks.length) * Math.PI * 2;
        const long = i % 3 === 0;
        const r1 = 188;
        const r2 = long ? 172 : 180;
        const x1 = 200 + r1 * Math.cos(angle);
        const y1 = 200 + r1 * Math.sin(angle);
        const x2 = 200 + r2 * Math.cos(angle);
        const y2 = 200 + r2 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        );
      })}
    </motion.svg>
  );
}
