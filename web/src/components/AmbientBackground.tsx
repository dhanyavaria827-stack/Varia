import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { OrnamentRing } from "@/components/OrnamentRing";

// A single brass ring, mounted once at the app level, that drifts slowly
// down the full height of whichever page is open as you scroll — a
// constant, ambient presence rather than a per-section decoration.
export function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 30, mass: 1 });

  const y = useTransform(smoothProgress, [0, 1], ["-8vh", "85vh"]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.7]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.42, 0.22, 0.08]);

  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-[10vh] -z-10 flex justify-center text-camel-600 opacity-[0.12] dark:text-brass-500/70"
      >
        <OrnamentRing className="h-[640px] w-[640px] sm:h-[880px] sm:w-[880px]" />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      style={{ y, scale, opacity }}
      className="pointer-events-none fixed inset-x-0 top-0 -z-10 flex justify-center text-camel-600 dark:text-brass-500/70"
    >
      <OrnamentRing className="h-[640px] w-[640px] sm:h-[880px] sm:w-[880px]" />
    </motion.div>
  );
}
