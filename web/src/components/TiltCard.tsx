import { motion, type HTMLMotionProps } from "framer-motion";
import { useTilt } from "@/lib/useTilt";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  strength?: number;
  lift?: number;
}

export function TiltCard({ strength = 8, lift = 18, style, children, ...rest }: TiltCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(strength);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ z: lift, transition: { type: "spring", stiffness: 120, damping: 18, mass: 0.9 } }}
      style={{ rotateX, rotateY, transformPerspective: 900, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
