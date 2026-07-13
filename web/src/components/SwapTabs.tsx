import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SwapTab {
  id: string;
  label: string;
  content: ReactNode;
}

export function SwapTabs({ tabs, className }: { tabs: SwapTab[]; className?: string }) {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <div className={className}>
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative rounded-sm px-5 py-2 text-sm font-medium uppercase tracking-[0.08em] transition-colors",
              active === tab.id ? "text-camel-50" : "text-ink-soft hover:text-ink"
            )}
          >
            {active === tab.id && (
              <motion.span
                layoutId="swap-tab-pill"
                className="absolute inset-0 rounded-sm bg-camel-600"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="relative mt-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
