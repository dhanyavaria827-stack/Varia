import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// A persistent enquiry CTA for phones, where the nav's own "Admissions"
// button has long scrolled out of reach. Hidden on the pages that are
// already the destination, so it never competes with itself.
const HIDDEN_ON = ["/admissions", "/contact"];

export function StickyMobileCTA() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 480);
  });

  if (HIDDEN_ON.includes(location.pathname)) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-brass-500/30 bg-parchment/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_28px_-20px_rgba(44,40,37,0.35)] backdrop-blur-md md:hidden"
        >
          <Link
            to="/admissions"
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-camel-600 py-3 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition active:scale-[0.98]"
          >
            Enquire about admission
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
