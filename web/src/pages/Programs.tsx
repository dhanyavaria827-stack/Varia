import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpenText,
  Flower2,
  Music4,
  Feather,
  ScrollText,
  Leaf,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    id: "vedic-studies",
    icon: BookOpenText,
    tone: "from-saffron-500 to-saffron-700",
    name: "Vedic Studies",
    tagline: "Chanting, recitation and the study of scripture.",
    duration: "3-year residential track",
    highlights: [
      "Guided recitation of the Vedas and Upanishads",
      "Study of meaning alongside pronunciation",
      "Daily group chanting practice",
    ],
  },
  {
    id: "yoga-meditation",
    icon: Flower2,
    tone: "from-indigo-500 to-indigo-700",
    name: "Yoga & Meditation",
    tagline: "Asana, breath and stillness as daily discipline.",
    duration: "Ongoing, all levels",
    highlights: [
      "Morning asana practice before sunrise",
      "Pranayama and breath-work instruction",
      "Silent meditation sits with a resident guru",
    ],
  },
  {
    id: "classical-arts",
    icon: Music4,
    tone: "from-emerald-500 to-emerald-700",
    name: "Classical Arts",
    tagline: "Music, dance and craft carried by hand and voice.",
    duration: "2-year track, open electives",
    highlights: [
      "Classical vocal and instrumental training",
      "Traditional dance forms and rhythm",
      "Handcraft and temple-art apprenticeships",
    ],
  },
  {
    id: "sanskrit",
    icon: Feather,
    tone: "from-rose-500 to-rose-700",
    name: "Sanskrit & Grammar",
    tagline: "Language as a living, spoken discipline.",
    duration: "1-year foundation, advanced electives",
    highlights: [
      "Panini grammar taught through conversation",
      "Sanskrit poetry composition and recitation",
      "Reading classical texts in the original",
    ],
  },
  {
    id: "value-education",
    icon: ScrollText,
    tone: "from-amber-500 to-amber-700",
    name: "Value Education",
    tagline: "Ethics, storytelling and everyday conduct.",
    duration: "Woven through every year",
    highlights: [
      "Stories from the Panchatantra and epics",
      "Guided reflection and journaling",
      "Community service and seva projects",
    ],
  },
  {
    id: "ayurveda",
    icon: Leaf,
    tone: "from-teal-500 to-teal-700",
    name: "Ayurveda & Natural Living",
    tagline: "Understanding the body through ancient science.",
    duration: "6-month introductory course",
    highlights: [
      "Principles of the three doshas",
      "Seasonal diet and daily routine (dinacharya)",
      "Herbal remedies and kitchen medicine",
    ],
  },
];

export function Programs() {
  const [open, setOpen] = useState<string | null>(PROGRAMS[0].id);

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Reveal className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
          What we teach
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink dark:text-white">
          Six disciplines, one path
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft dark:text-indigo-200">
          Every student moves through the same core disciplines, at a pace set by
          their guru rather than a fixed calendar.
        </p>
      </Reveal>

      <div className="mt-12 space-y-4">
        {PROGRAMS.map((p, i) => {
          const isOpen = open === p.id;
          return (
            <Reveal key={p.id} delay={i * 0.04}>
              <div
                id={p.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-card dark:border-white/10 dark:bg-white/5"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <div
                    className={cn(
                      "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white",
                      p.tone
                    )}
                  >
                    <p.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-ink dark:text-white">
                      {p.name}
                    </h3>
                    <p className="text-sm text-ink-soft dark:text-indigo-200">{p.tagline}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-ink-soft dark:text-indigo-200"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-ink/10 px-5 pb-6 pt-4 dark:border-white/10">
                        <span className="inline-block rounded-full bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700 dark:bg-white/10 dark:text-saffron-300">
                          {p.duration}
                        </span>
                        <ul className="mt-4 space-y-2">
                          {p.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft dark:text-indigo-200"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
