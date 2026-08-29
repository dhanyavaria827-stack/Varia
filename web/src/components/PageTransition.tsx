import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  // MotionConfig reducedMotion="user" at the app root drops transforms but not
  // filters, so the route-change blur would still play. Fall back to a plain
  // cross-fade when reduced motion is requested.
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <motion.main
        id="main-content"
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
      >
        {children}
      </motion.main>
    );
  }

  return (
    <motion.main
      id="main-content"
      tabIndex={-1}
      initial={{ opacity: 0, y: 22, scale: 0.985, filter: "blur(8px)" }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      }}
      exit={{
        opacity: 0,
        y: -12,
        scale: 0.99,
        filter: "blur(4px)",
        transition: { duration: 0.35, ease: "easeIn" },
      }}
    >
      {children}
    </motion.main>
  );
}
