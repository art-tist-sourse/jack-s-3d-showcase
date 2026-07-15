import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { Magnet } from "./Magnet";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-6 right-6 z-[90]"
        >
          <Magnet padding={80} strength={4}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #18011F 7%, #B600A8 45%, #7621B0 80%, #BE4C00 100%)",
                outline: "2px solid white",
                outlineOffset: "-3px",
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </Magnet>
        </motion.div>
      )}
    </AnimatePresence>
  );
}