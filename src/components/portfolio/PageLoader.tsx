import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  const letters = "MUDAVATH KUMAR".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.87, 0, 0.13, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "#0C0C0C" }}
        >
          <div className="flex overflow-hidden">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="hero-heading font-black uppercase leading-none"
                style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #B600A8, transparent)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}