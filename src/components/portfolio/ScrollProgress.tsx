import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg, #B600A8 0%, #7621B0 50%, #BE4C00 100%)",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none"
    />
  );
}