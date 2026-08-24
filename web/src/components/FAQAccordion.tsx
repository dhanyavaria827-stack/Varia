import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items, className }: { items: readonly FAQItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-ink/10", className)}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              id={`faq-question-${i}`}
              aria-expanded={open}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-display text-lg font-medium text-ink">{item.q}</span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brass-500/50 text-camel-700 dark:text-brass-300"
              >
                <Plus size={15} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 pr-12 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
