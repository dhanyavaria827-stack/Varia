import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  BookOpenText,
  Flower2,
  Music4,
  Feather,
  HeartHandshake,
  Sparkles,
  Quote,
  Sunrise,
} from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";

const PROGRAMS = [
  {
    name: "Vedic Studies",
    to: "/programs#vedic-studies",
    icon: BookOpenText,
    tone: "from-saffron-500 to-saffron-700",
    desc: "Study of the Vedas, Upanishads and Sanskrit scripture under guided recitation.",
  },
  {
    name: "Yoga & Meditation",
    to: "/programs#yoga-meditation",
    icon: Flower2,
    tone: "from-indigo-500 to-indigo-700",
    desc: "Asana, pranayama and dhyana practice woven into the daily rhythm.",
  },
  {
    name: "Classical Arts",
    to: "/programs#classical-arts",
    icon: Music4,
    tone: "from-emerald-500 to-emerald-700",
    desc: "Classical music, dance and traditional crafts passed down through practice.",
  },
  {
    name: "Sanskrit & Grammar",
    to: "/programs#sanskrit",
    icon: Feather,
    tone: "from-rose-500 to-rose-700",
    desc: "Language as a living discipline — grammar, poetry and everyday conversation.",
  },
];

const PHILOSOPHY = [
  {
    icon: Sunrise,
    title: "Guru-Shishya Parampara",
    desc: "Learning transmitted directly, teacher to student, in the oldest tradition of Indian education.",
  },
  {
    icon: HeartHandshake,
    title: "Life as the classroom",
    desc: "Seva, discipline and community living are taught alongside every subject.",
  },
  {
    icon: Sparkles,
    title: "Knowledge with character",
    desc: "We measure growth in wisdom and conduct, not only in marks.",
  },
];

const STATS = [
  { value: "25+", label: "Years of tradition" },
  { value: "12", label: "Resident gurus" },
  { value: "300+", label: "Students guided" },
  { value: "6", label: "Core disciplines" },
];

export function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-5 pb-16 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink/10 bg-white/60 px-4 py-5 text-center shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="font-serif text-2xl font-semibold text-indigo-600 dark:text-saffron-300 sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium text-ink-soft dark:text-indigo-200 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Philosophy */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
            Our philosophy
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink dark:text-white">
            An ancient way of learning, still alive
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {PHILOSOPHY.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6 text-center shadow-card dark:border-white/10 dark:bg-white/5"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-saffron-100 text-saffron-700 dark:bg-white/10 dark:text-saffron-300">
                <p.icon size={20} />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </section>

      {/* Programs */}
      <section className="bg-cream-2/60 py-20 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600 dark:text-saffron-300">
                What we teach
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink dark:text-white">
                Programs at the Gurukulam
              </h2>
            </div>
            <Link
              to="/programs"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-saffron-500 hover:text-saffron-700 dark:border-white/15 dark:text-white"
            >
              View all programs <ArrowRight size={14} />
            </Link>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((p) => (
              <motion.div key={p.name} variants={staggerItem}>
                <Link
                  to={p.to}
                  className="group block h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-card transition hover:-translate-y-1.5 hover:shadow-soft dark:border-white/10 dark:bg-indigo-900/60"
                >
                  <div
                    className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.tone} text-white transition-transform group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <p.icon size={22} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink dark:text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron-600 dark:text-saffron-300">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Reveal>
          <Quote className="mx-auto mb-4 text-saffron-500" size={30} />
          <p className="font-serif text-2xl italic leading-snug text-ink dark:text-white sm:text-3xl">
            "Education is the manifestation of the perfection already in one."
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-widest text-ink-soft dark:text-indigo-300">
            Swami Vivekananda
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 px-8 py-14 text-center shadow-soft">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Begin your journey at the Gurukulam
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-indigo-100">
            Admissions are open for the next residential term. Come learn under
            the guidance of our gurus.
          </p>
          <Link
            to="/admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-saffron-400 active:scale-95"
          >
            Apply for admission
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(mx, { stiffness: 60, damping: 20 });
  const ry = useSpring(my, { stiffness: 60, damping: 20 });
  const orb1X = useTransform(rx, [-1, 1], [-24, 24]);
  const orb1Y = useTransform(ry, [-1, 1], [-16, 16]);
  const orb2X = useTransform(rx, [-1, 1], [18, -18]);
  const orb2Y = useTransform(ry, [-1, 1], [14, -14]);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(nx);
      my.set(ny);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-saffron-300/30 blur-3xl animate-float-slow"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl animate-float-slower dark:bg-indigo-600/20"
        />
        <div className="absolute inset-0 bg-grain opacity-[0.03] text-ink dark:text-white" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-16 text-center sm:pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-saffron-500/30 bg-saffron-50 px-4 py-1.5 text-sm font-medium text-saffron-700 dark:border-saffron-300/20 dark:bg-white/5 dark:text-saffron-300"
        >
          <Sparkles size={14} />
          Admissions open for the new residential term
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink dark:text-white sm:text-6xl"
        >
          Where wisdom
          <br />
          <span className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-indigo-600 bg-clip-text text-transparent">
            is lived, not just taught.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft dark:text-indigo-200"
        >
          Gurukulam is a residential school for Vedic studies, yoga and the
          classical arts — carrying the guru-shishya tradition into the present
          day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/admissions"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-500 active:scale-95"
          >
            Apply for admission
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition hover:border-saffron-500 hover:text-saffron-700 active:scale-95 dark:border-white/15 dark:bg-white/5 dark:text-white"
          >
            Our story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
