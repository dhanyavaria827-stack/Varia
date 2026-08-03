import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, staggerItem } from "@/components/Reveal";
import { FlipStat } from "@/components/FlipStat";
import { TiltCard } from "@/components/TiltCard";
import { CursorGlow } from "@/components/CursorGlow";
import { Photo } from "@/components/Photo";
import { SUBJECTS, DIVISIONS } from "@/data/content";
import { cn, slugify } from "@/lib/utils";
import photoNotebook from "@/assets/gallery-notebook.jpg";

const MotionLink = motion.create(Link);

export function Academics() {
  const [open, setOpen] = useState<string | null>(SUBJECTS[0].id);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Academics
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            Bhantar, taught at speed
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            From Bal Vibhag through Std. 12, every subject is paced to the
            child — not the calendar.
          </p>
        </Reveal>
      </CursorGlow>

      {/* Photo: personal attention */}
      <Reveal delay={0.08} className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-sm border border-brass-500/30 [perspective:1400px]">
        <TiltCard strength={6}>
          <Photo
            src={photoNotebook}
            alt="Gurujans recording each student's progress by hand"
            className="max-h-96 w-full object-cover"
          />
          <p className="bg-parchment-2/50 px-5 py-3 text-center font-display text-sm italic text-ink-soft">
            Every child's progress, tracked by hand
          </p>
        </TiltCard>
      </Reveal>

      {/* Class ratio stats */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3">
          <FlipStat value={15} label="Std. 10 candidates, March 2026" />
          <FlipStat value={40} suffix="%" label="Scored above, on average" />
          <FlipStat value={15} label="Students, largest class size" />
        </div>
      </Reveal>

      {/* Subjects — morphing expand cards */}
      <div className="mt-16 space-y-4">
        {SUBJECTS.map((s, i) => {
          const isOpen = open === s.id;
          return (
            <Reveal key={s.id} delay={i * 0.05}>
              <motion.div
                layout
                id={s.id}
                className="scroll-mt-24 overflow-hidden rounded-sm border border-ink/10 bg-parchment-2/40"
              >
                <motion.button
                  layout
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <motion.div layout className="flex-1">
                    <h3 className="font-display text-lg font-medium text-ink">{s.name}</h3>
                    <p className="text-sm text-ink-soft">{s.desc}</p>
                  </motion.div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-ink-soft"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                        className="flex flex-wrap gap-2 border-t border-ink/10 px-5 pb-6 pt-4"
                      >
                        {s.items.map((item) => (
                          <MotionLink
                            key={item}
                            to={`/skills/${slugify(item)}`}
                            variants={staggerItem}
                            whileHover={{ scale: 1.08, borderColor: "var(--color-brass-500)" }}
                            whileTap={{ scale: 0.96 }}
                            className="rounded-full border border-camel-500/30 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
                          >
                            {item}
                          </MotionLink>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Divisions recap */}
      <div className="mt-20 grid gap-5 [perspective:1200px] sm:grid-cols-2">
        {DIVISIONS.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.06}>
            <TiltCard
              strength={6}
              className={cn(
                "h-full rounded-sm border p-6",
                "border-ink/10 bg-parchment"
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-camel-600 dark:text-brass-300">
                {d.subtitle}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-ink">{d.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">
                Age {d.age} · {d.hours}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{d.desc}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
