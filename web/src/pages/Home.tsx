import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Languages, Calculator, BookHeart, Palette } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { FlipStat } from "@/components/FlipStat";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { SwapTabs } from "@/components/SwapTabs";
import { OrnamentRing } from "@/components/OrnamentRing";
import {
  STATS,
  DIVISIONS,
  DAILY_RHYTHM,
  QUOTES,
  ALUMNI_PATHS,
  PHILOSOPHY,
} from "@/data/content";

const PILLARS = [
  {
    icon: Languages,
    name: "Languages",
    to: "/academics#languages",
    desc: "Sanskrit, Gujarati and an English fluent enough to out-debate English-medium peers.",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    to: "/academics#mathematics",
    desc: "Calculator-free mental arithmetic, calendars and puzzles, taught to real speed.",
  },
  {
    icon: BookHeart,
    name: "Sanskar",
    to: "/about#philosophy",
    desc: "The 80 and 54 codes of Rushabhdev, lived daily — not memorised for a test.",
  },
  {
    icon: Palette,
    name: "Classical Arts",
    to: "/life#arts",
    desc: "Bharatanatyam, Kathak, nine instruments, and crafts practised every afternoon.",
  },
];

export function Home() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <Reveal>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-5 pb-16 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s) => (
            <FlipStat key={s.label} value={s.value} prefix={"prefix" in s ? s.prefix : undefined} suffix={"suffix" in s ? s.suffix : undefined} label={s.label} />
          ))}
        </div>
      </Reveal>

      {/* Philosophy strip */}
      <section className="mx-auto max-w-4xl px-5 pb-20 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Our foundation
          </span>
          <h2 className="mt-3 text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            An education built on the {PHILOSOPHY.eighty} codes of conduct for men and{" "}
            {PHILOSOPHY.fiftyFour} for women, set down by {PHILOSOPHY.founder}.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Gurukulam began in 2004 with five children and a simple belief:
            that bhantar — education — means little without ghadtar,
            character built through daily practice.
          </p>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="bg-parchment-2/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
              What is taught
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">
              Four pillars, every day
            </h2>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <motion.div key={p.name} variants={staggerItem}>
                <Link
                  to={p.to}
                  className="group block h-full rounded-sm border border-ink/10 bg-parchment p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="inline-grid h-11 w-11 place-items-center rounded-full border border-brass-500/50 text-camel-700 transition-transform group-hover:scale-110 dark:text-brass-300">
                    <p.icon size={19} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-camel-600 dark:text-brass-300">
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Two divisions swap tabs */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Two divisions
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            From first steps to Std. 10
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <SwapTabs
            tabs={DIVISIONS.map((d) => ({
              id: d.id,
              label: d.name,
              content: (
                <div className="rounded-sm border border-ink/10 bg-parchment-2/40 p-8 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-camel-600 dark:text-brass-300">
                    {d.subtitle}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">{d.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-ink-soft">
                    <span>Age {d.age}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>{d.hours}</span>
                  </div>
                  <p className="mx-auto mt-4 max-w-lg text-ink-soft">{d.desc}</p>
                </div>
              ),
            }))}
          />
        </Reveal>
      </section>

      {/* Daily rhythm */}
      <section className="bg-parchment-2/50 py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
              A day at Gurukulam
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">The daily rhythm</h2>
          </Reveal>

          <div className="relative mt-12 space-y-8 border-l border-brass-500/40 pl-8">
            {DAILY_RHYTHM.map((r, i) => (
              <Reveal key={r.time} delay={i * 0.06} className="relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-brass-500 bg-parchment" />
                <span className="font-display text-lg font-medium text-camel-700 dark:text-brass-300">
                  {r.time}
                </span>
                <h3 className="mt-1 font-medium text-ink">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote carousel */}
      <section className="px-5 py-24">
        <Reveal>
          <QuoteCarousel quotes={QUOTES} />
        </Reveal>
      </section>

      {/* Alumni marquee */}
      <section className="border-y border-ink/10 bg-parchment-2/50 py-10">
        <Reveal className="mx-auto mb-6 max-w-2xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Where our students go
          </span>
        </Reveal>
        <Marquee items={ALUMNI_PATHS} />
      </section>

      {/* Campus appeal CTA */}
      <section id="support" className="px-5 py-24">
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-brass-500/30 bg-gradient-to-br from-camel-700 via-camel-600 to-camel-700 px-8 py-14 text-center shadow-soft">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-300">
            Outgrowing our home
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-camel-50 sm:text-4xl">
            30–35 children are waiting for a seat
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-camel-50/85">
            Our current premises can't clear a fire-safety NOC to expand, and
            we've outgrown the space we have. We're searching for a new home
            for Gurukulam — and would welcome your support.
          </p>
          <Link
            to="/admissions#support"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brass-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-700 shadow-soft transition hover:bg-brass-300 active:scale-95"
          >
            See how to help
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function Marquee({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4 px-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-camel-500/30 px-5 py-2 text-sm font-medium text-ink-soft"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-camel-600 dark:text-brass-500/70">
        <OrnamentRing className="h-[560px] w-[560px] opacity-40 sm:h-[720px] sm:w-[720px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grain opacity-[0.035] text-ink" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-7 grid h-16 w-16 place-items-center rounded-full border border-brass-500/60"
        >
          <span className="font-display text-2xl text-camel-700 dark:text-brass-300">ॐ</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-camel-600 dark:text-brass-300"
        >
          Surat, Gujarat · Established 2004
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-6xl"
        >
          Gurukulam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-5 font-display text-xl italic text-camel-700 dark:text-brass-300 sm:text-2xl"
        >
          {PHILOSOPHY.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="text-sm uppercase tracking-[0.14em] text-ink-soft"
        >
          {PHILOSOPHY.taglineTranslation}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft"
        >
          A gurukul-style school where 225 students learn Sanskrit,
          mathematics and the classical arts alongside sanskar — guided by
          gurujans who call themselves, simply, the Gurukulam Parivar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            to="/admissions"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-camel-600 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700 active:scale-95"
          >
            Enquire about admission
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink/15 bg-parchment/60 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-ink backdrop-blur transition hover:border-brass-500 hover:text-camel-700 active:scale-95"
          >
            Our story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
