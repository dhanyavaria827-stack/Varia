import { motion } from "framer-motion";
import { HeartHandshake, BookMarked, Users2, Compass, Sunrise, Leaf } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";

const VALUES = [
  {
    icon: BookMarked,
    title: "Guru-Shishya Parampara",
    desc: "Knowledge is transmitted directly from teacher to student — through presence, question and practice, not just textbooks.",
  },
  {
    icon: Compass,
    title: "Discipline as freedom",
    desc: "A structured daily rhythm — study, seva, meditation, rest — gives students the steadiness to grow.",
  },
  {
    icon: Users2,
    title: "Community living",
    desc: "Students and teachers share meals, chores and festivals, learning as much from each other as from any lesson.",
  },
  {
    icon: HeartHandshake,
    title: "Character before achievement",
    desc: "We ask not only what a student knows, but who they are becoming.",
  },
];

const TIMELINE = [
  {
    year: "1999",
    title: "A single room, a handful of students",
    desc: "Gurukulam began as a small daily gathering for Vedic chanting and Sanskrit study.",
  },
  {
    year: "2008",
    title: "The residential campus opens",
    desc: "A permanent campus allowed students to live and study full-time under resident gurus.",
  },
  {
    year: "2016",
    title: "Classical arts program added",
    desc: "Music, dance and traditional crafts joined the curriculum alongside scripture and yoga.",
  },
  {
    year: "Today",
    title: "A living tradition",
    desc: "Gurukulam continues to welcome students seeking an education rooted in wisdom and practice.",
  },
];

export function About() {
  return (
    <div className="px-5 py-16">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
          Our story
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink dark:text-white">
          A tradition older than any of us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-indigo-200">
          Gurukulam takes its name from the ancient Indian gurukul — a home where
          students lived alongside their teacher, learning not from a syllabus but
          from a life shared in common. We carry that same spirit forward today.
        </p>
      </Reveal>

      <RevealStagger className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
        {VALUES.map((v) => (
          <motion.div
            key={v.title}
            variants={staggerItem}
            className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-card dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-200">
              <v.icon size={19} />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-white">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </RevealStagger>

      {/* Timeline */}
      <div className="mx-auto mt-24 max-w-3xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-ink dark:text-white">
            Our journey
          </h2>
        </Reveal>

        <div className="relative mt-12 space-y-10 border-l-2 border-dashed border-saffron-300/60 pl-8 dark:border-indigo-500/40">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05} className="relative">
              <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-saffron-500 text-[10px] font-bold text-white shadow-soft">
                {i + 1}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-saffron-600 dark:text-saffron-300">
                {t.year}
              </span>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink dark:text-white">
                {t.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
                {t.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto mt-24 max-w-4xl rounded-3xl bg-gradient-to-br from-saffron-100 to-saffron-50 p-8 text-center dark:from-indigo-700/40 dark:to-indigo-800/40 sm:p-12">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white text-saffron-600 shadow-soft dark:bg-white/10 dark:text-saffron-300">
          <Sunrise size={20} />
        </div>
        <h2 className="mt-4 font-serif text-2xl font-semibold text-ink dark:text-white">
          A day at the Gurukulam
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink-soft dark:text-indigo-200">
          Mornings begin before sunrise with meditation and chanting, followed by
          study, communal chores, classes in the classical arts, and evening
          satsang. Every part of the day is treated as an opportunity to learn.
        </p>
        <div className="mx-auto mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
          <Leaf size={14} /> Simple living, deep learning
        </div>
      </Reveal>
    </div>
  );
}
