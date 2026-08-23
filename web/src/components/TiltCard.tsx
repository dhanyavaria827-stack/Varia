import { useState, type ReactNode } from "react";
import { motion, useMotionTemplate, type HTMLMotionProps } from "framer-motion";
import { useTilt } from "@/lib/useTilt";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  strength?: number;
  lift?: number;
  /** Cursor-tracked spotlight glow + glare sweep, in the spirit of Motion
   * Primitives' card-spotlight pattern. On by default; set false for cards
   * where the extra shine would be too much (e.g. photo frames). */
  glow?: boolean;
  children?: ReactNode;
}

export function TiltCard({
  strength = 8,
  lift = 18,
  glow = true,
  className,
  style,
  children,
  ...rest
}: TiltCardProps) {
  const { ref, rotateX, rotateY, spotX, spotY, onMouseMove, onMouseLeave } = useTilt(strength);
  const [hovered, setHovered] = useState(false);
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${spotX}px ${spotY}px, rgba(92,26,27,0.16), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
      whileHover={{ z: lift, transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.9 } }}
      style={{ rotateX, rotateY, transformPerspective: 900, ...style }}
      className={`relative ${className ?? ""}`}
      {...rest}
    >
      {children}
      {glow && (
        <>
          <motion.div
            aria-hidden="true"
            style={{ background: spotlight }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
          />
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={hovered ? { x: "160%", opacity: [0, 0.5, 0] } : { x: "-60%", opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-y-0 left-[-60%] w-1/3 -skew-x-12 rounded-[inherit] bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        </>
      )}
    </motion.div>
  );
}
