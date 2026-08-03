import { motion } from "framer-motion";

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

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, y: "0.6em", rotateX: 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: delay + (words.slice(0, wi).join("").length + ci) * stagger,
                ease: [0.22, 1, 0.36, 1],
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
