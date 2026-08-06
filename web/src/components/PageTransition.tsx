import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
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
