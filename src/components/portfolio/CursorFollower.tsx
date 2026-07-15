import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorFollower() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 25, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="fixed top-0 left-0 z-[99] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 2.2 : 1, opacity: hover ? 0.7 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[99] pointer-events-none"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B600A8]" />
      </motion.div>
    </>
  );
}