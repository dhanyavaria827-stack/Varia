import { motion } from "framer-motion";

// A hand-drawn-feeling accent that traces itself in with a real SVG path
// animation (stroke-dashoffset via Framer Motion's pathLength), rather than
// a CSS width transition — reads as a deliberate flourish under a heading
// or eyebrow instead of a mechanical bar.
export function DrawUnderline({
  className = "",
  width = 56,
  delay = 0,
}: {
  className?: string;
  width?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox={`0 0 ${width} 8`}
      width={width}
      height={8}
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={`M2,5 Q${width / 2},1 ${width - 2},5`}
        fill="none"
        stroke="var(--color-brass-500)"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ pathLength: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3, delay } }}
      />
    </motion.svg>
  );
}
