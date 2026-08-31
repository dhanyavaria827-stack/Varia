import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Wraps a primary call-to-action with two restrained premium touches:
// a soft ambient glow that blooms behind it, and a diagonal light sweep
// across its face — both driven off one hover state, both off by default.
// Reserved for the handful of buttons that actually drive a conversion
// (enquire, admissions, start a conversation) — applying this everywhere
// would cheapen it.
export function PremiumCTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-block ${className}`}
    >
      <motion.span
        aria-hidden="true"
        variants={{ rest: { opacity: 0, scale: 0.85 }, hover: { opacity: 0.55, scale: 1.18 } }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-brass-500 blur-xl"
      />
      <span className="relative block overflow-hidden rounded-sm">
        {children}
        <motion.span
          aria-hidden="true"
          variants={{ rest: { x: "-130%" }, hover: { x: "130%" } }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
      </span>
    </motion.div>
  );
}
