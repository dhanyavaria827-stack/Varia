import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      id="main-content"
      tabIndex={-1}
      initial={{ opacity: 0, y: 22, scale: 0.985 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      }}
      exit={{
        opacity: 0,
        y: -12,
        scale: 0.99,
        transition: { duration: 0.35, ease: "easeIn" },
      }}
    >
      {children}
    </motion.main>
  );
}
