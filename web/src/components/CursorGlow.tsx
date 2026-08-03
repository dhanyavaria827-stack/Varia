import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

export function CursorGlow({
  children,
  className,
  size = 420,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  const [active, setActive] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 60, damping: 20, mass: 0.6 };
  const mouseX = useSpring(rawX, spring);
  const mouseY = useSpring(rawY, spring);
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, rgba(184,145,47,0.13), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
    if (!active) setActive(true);
  }

  return (
    <div onMouseMove={handleMouseMove} className={`relative ${className ?? ""}`}>
      <motion.div
        aria-hidden="true"
        style={{ background }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 -z-10"
      />
      {children}
    </div>
  );
}
