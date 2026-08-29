import { motion, useReducedMotion } from "framer-motion";

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  // MotionConfig reducedMotion="user" at the app root strips transforms but
  // not filters, so the per-character blur would still run. Fade the whole
  // heading in flat instead of animating each character in 3D.
  const reduceMotion = useReducedMotion();

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: "0.7em", rotateX: 55, filter: "blur(8px)" }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              }
              transition={{
                duration: reduceMotion ? 0.2 : 0.9,
                delay: reduceMotion
                  ? 0
                  : delay + (words.slice(0, wi).join("").length + ci) * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
