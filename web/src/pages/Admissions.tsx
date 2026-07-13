import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageCircle, Home, CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";

const STEPS = [
  {
    icon: FileText,
    title: "Submit your interest",
    desc: "Share a little about the student and family through our contact form.",
  },
  {
    icon: MessageCircle,
    title: "Conversation with a guru",
    desc: "A resident guru speaks with the family to understand goals and readiness.",
  },
  {
    icon: Home,
    title: "Campus visit",
    desc: "Spend a day observing classes, meals and the daily rhythm before deciding.",
  },
  {
    icon: CheckCircle2,
    title: "Welcome to the Gurukulam",
    desc: "Once accepted, students join at the start of the next term.",
  },
];

const ELIGIBILITY = [
  "Open to students ages 10 and above",
  "No prior Sanskrit or yoga experience required",
  "Willingness to live communally and follow the daily schedule",
  "A short family interview before the campus visit",
];

export function Admissions() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Reveal className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
          Join us
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink dark:text-white">
          Admissions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-soft dark:text-indigo-200">
          We admit a small group of students each term so every one of them gets
          real time with a guru.
        </p>
      </Reveal>

      {/* Steps */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="relative h-full rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-card dark:border-white/10 dark:bg-white/5">
              <span className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-soft">
                {i + 1}
              </span>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-saffron-100 text-saffron-700 dark:bg-white/10 dark:text-saffron-300">
                <s.icon size={19} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Eligibility */}
      <Reveal className="mt-16 rounded-3xl border border-ink/10 bg-cream-2/60 p-8 dark:border-white/10 dark:bg-white/5 sm:p-10">
        <h2 className="font-serif text-2xl font-semibold text-ink dark:text-white">
          Eligibility
        </h2>
        <RevealStagger className="mt-5 grid gap-3 sm:grid-cols-2">
          {ELIGIBILITY.map((e) => (
            <motion.div
              key={e}
              variants={staggerItem}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft dark:text-indigo-200"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              {e}
            </motion.div>
          ))}
        </RevealStagger>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 px-8 py-12 text-center shadow-soft">
        <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
          Ready to take the first step?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-indigo-100">
          Reach out and a guru will follow up to arrange a conversation.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-saffron-400 active:scale-95"
        >
          Start your application
          <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  );
}
