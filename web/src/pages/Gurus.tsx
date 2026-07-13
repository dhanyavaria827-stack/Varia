import { motion } from "framer-motion";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";

const GURUS = [
  {
    name: "Acharya Devendra Sharma",
    role: "Head of Vedic Studies",
    focus: "Vedic recitation & scripture",
    initials: "DS",
    tone: "from-saffron-500 to-saffron-700",
  },
  {
    name: "Guruji Ananya Rao",
    role: "Yoga & Meditation",
    focus: "Hatha yoga, pranayama",
    initials: "AR",
    tone: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Acharya Meera Iyer",
    role: "Sanskrit & Grammar",
    focus: "Panini grammar, poetry",
    initials: "MI",
    tone: "from-rose-500 to-rose-700",
  },
  {
    name: "Guruji Kiran Patel",
    role: "Classical Arts",
    focus: "Vocal music, dance",
    initials: "KP",
    tone: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Acharya Ramesh Nair",
    role: "Value Education",
    focus: "Ethics, storytelling",
    initials: "RN",
    tone: "from-amber-500 to-amber-700",
  },
  {
    name: "Vaidya Lakshmi Menon",
    role: "Ayurveda & Wellness",
    focus: "Natural living, herbal science",
    initials: "LM",
    tone: "from-teal-500 to-teal-700",
  },
];

export function Gurus() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
          Our teachers
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink dark:text-white">
          Meet the Gurus
        </h1>
        <p className="mx-auto mt-4 text-ink-soft dark:text-indigo-200">
          Each guru lives on campus alongside the students they teach, guiding
          practice as much through example as instruction.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GURUS.map((g) => (
          <motion.div
            key={g.name}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-ink/10 bg-white/70 p-6 text-center shadow-card transition-shadow hover:shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <div
              className={`mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br ${g.tone} font-serif text-xl font-semibold text-white shadow-soft transition-transform group-hover:scale-105`}
            >
              {g.initials}
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-white">
              {g.name}
            </h3>
            <p className="text-sm font-medium text-saffron-600 dark:text-saffron-300">
              {g.role}
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-indigo-200">{g.focus}</p>
          </motion.div>
        ))}
      </RevealStagger>
    </div>
  );
}
