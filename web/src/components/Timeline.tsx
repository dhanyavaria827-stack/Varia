import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function Timeline({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.3 });

  return (
    <div ref={ref} className={className}>
      <div className="absolute left-0 top-0 h-full w-px bg-brass-500/20" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-brass-500"
      />
      {children}
    </div>
  );
}
