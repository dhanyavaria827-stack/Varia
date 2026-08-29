import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { isServer } from "@/lib/utils";

// scripts/prerender.mjs renders these components through renderToStaticMarkup
// to bake real content into every route for crawlers and no-JS visitors. On
// the server there is no scroll and no IntersectionObserver, so whileInView
// never fires — anything left in its "hidden" variant stays at opacity 0 in
// the shipped HTML. That was silently hiding the whole footer on every page
// (and the arts lists on Life & Arts). Rendering the visible state on the
// server fixes it with no client cost: main.tsx clears #root and mounts a
// fresh tree, so the browser never reuses this markup and the entrance
// animation still plays normally for real visitors.
/**
 * Pass to a motion component's `initial` in place of `"hidden"`. Identical on
 * the client; on the server it renders the element visible so prerendered
 * markup isn't shipped stuck at opacity 0. Use for any staggered group whose
 * children carry {@link staggerItem}.
 */
export const initialHidden = isServer ? false : "hidden";

const variants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

// Framer Motion's MotionConfig reducedMotion="user" (set at the app root in
// main.tsx) drops transforms, but it does not drop filters — a blur still
// animates. These variants therefore need their own reduced-motion path.
const variantsReduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      id={id}
      className={className}
      variants={reduceMotion ? variantsReduced : variants}
      initial={isServer ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0.2 : 1.1, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  staggerDelay = 0.14,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={isServer ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: reduceMotion
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: staggerDelay, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};
