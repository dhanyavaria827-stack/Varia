import { useRef, type MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // Raw pixel position within the card, for a cursor-tracked spotlight/glare —
  // kept separate from px/py (normalized -0.5..0.5, used for the tilt rotation)
  // since the spotlight wants an untransformed 1:1 position, no spring lag.
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spring = { stiffness: 140, damping: 20, mass: 1 };

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [strength, -strength]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-strength, strength]), spring);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    px.set(x / rect.width - 0.5);
    py.set(y / rect.height - 0.5);
    spotX.set(x);
    spotY.set(y);
  }

  function onMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return { ref, rotateX, rotateY, spotX, spotY, onMouseMove, onMouseLeave };
}
