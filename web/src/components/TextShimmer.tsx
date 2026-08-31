import { motion } from "framer-motion";
import type { ReactNode } from "react";

// A soft gold sheen that sweeps across text once on load — the same idea as
// Motion Primitives' text-shimmer. Implemented as the real text (normal,
// inherited color, always visible) plus an absolutely-positioned gradient
// copy clipped to the same glyphs: bg-clip-text needs the layer it's applied
// to be transparent, so that layer can't also *be* the visible text — it can
// only be a highlight laid on top of it.
export function TextShimmer({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="invisible">
        {children}
      </span>
      <span className="absolute inset-0">{children}</span>
      <motion.span
        aria-hidden="true"
        initial={{ backgroundPosition: "150% center" }}
        animate={{ backgroundPosition: "-50% center" }}
        transition={{ duration: 2.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-clip-text text-transparent mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 35%, var(--color-brass-300) 50%, transparent 65%)",
          backgroundSize: "250% 100%",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
