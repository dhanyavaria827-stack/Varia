import { useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 140, damping: 20, mass: 1 };

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [strength, -strength]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-strength, strength]), spring);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
