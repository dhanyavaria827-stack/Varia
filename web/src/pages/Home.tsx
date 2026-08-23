import { Link } from "react-router-dom";
import { useState, lazy, Suspense, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Languages, Calculator, BookHeart, Palette } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { FlipStat } from "@/components/FlipStat";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { SwapTabs } from "@/components/SwapTabs";
import { OrnamentRing } from "@/components/OrnamentRing";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { SplitText } from "@/components/SplitText";
import { TextShimmer } from "@/components/TextShimmer";
import { Photo } from "@/components/Photo";
import { PremiumCTA } from "@/components/PremiumCTA";
import { LazyVideo } from "@/components/LazyVideo";

const HeroParticles = lazy(() =>
  import("@/components/HeroParticles").then((m) => ({ default: m.HeroParticles }))
);
import { Timeline } from "@/components/Timeline";
import {
  STATS,
  DIVISIONS,
  DAILY_RHYTHM,
  QUOTES,
  ALUMNI_PATHS,
  PHILOSOPHY,
} from "@/data/content";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import photoRitual from "@/assets/gallery-ritual.jpg";
import videoRitualOm from "@/assets/ritual-om.mp4";
import videoRitualOmWebm from "@/assets/ritual-om.webm";
import videoRitualOmPoster from "@/assets/ritual-om-poster.jpg";

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
    desc: "The 64 and 72 codes of Rushabhdev, lived daily — not memorised for a test.",
  },
  {
    icon: Palette,
    name: "Classical Arts",
    to: "/life#arts",
    desc: "Bharatanatyam, Kathak, nine instruments, and crafts practised every afternoon.",
  },
];

export function Home() {
  useDocumentTitle("Gurukulam, Surat — Bhantar with Ghadtar");
  return (
    <>
      <Hero />

      {/* Stats */}
      <RevealStagger className="mx-auto grid max-w-4xl grid-cols-2 gap-3 px-5 pb-16 sm:grid-cols-4 sm:gap-4" staggerDelay={0.18}>
        {STATS.map((s) => (
          <motion.div key={s.label} variants={staggerItem}>
            <FlipStat value={s.value} prefix={"prefix" in s ? s.prefix : undefined} suffix={"suffix" in s ? s.suffix : undefined} label={s.label} />
          </motion.div>
        ))}
      </RevealStagger>

      {/* Philosophy strip */}
      <section className="mx-auto max-w-4xl px-5 pb-20 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Our foundation
          </span>
          <h2 className="mt-3 text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            An education built on the {PHILOSOPHY.menCodes} codes of conduct for men and{" "}
            {PHILOSOPHY.womenCodes} for women, set down by {PHILOSOPHY.founder}.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Gurukulam began in 2004 with nine students and a simple belief:
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

          <RevealStagger className="mt-12 grid gap-5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <TiltCard key={p.name} variants={staggerItem} strength={7} className="h-full">
                <Link
                  to={p.to}
                  className="group block h-full rounded-sm border border-ink/10 bg-parchment p-6 shadow-card transition-shadow hover:shadow-soft"
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
              </TiltCard>
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
            From first steps to Std. 12
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

      {/* A family, gathered */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <Reveal className="order-2 sm:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
              The Gurukulam Parivar
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">
              A family, not just a school
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Ceremonies, rituals and festivals are lived together — students
              and gurujans alike — the same daily closeness that gives the
              Gurukulam Parivar its name.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 [perspective:1400px] sm:order-2">
            <TiltCard
              strength={6}
              className="overflow-hidden rounded-sm border border-brass-500/40 shadow-[0_28px_60px_-22px_rgba(46,46,46,0.4)]"
            >
              <Photo
                src={photoRitual}
                alt="A ritual observance at Gurukulam, with children taking part"
                className="h-80 w-full object-cover sm:h-96"
                style={{ filter: "saturate(1.18) contrast(1.08) brightness(1.03)" }}
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Ritual moment */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <LazyVideo
          sources={[
            { src: videoRitualOmWebm, type: "video/webm" },
            { src: videoRitualOm, type: "video/mp4" },
          ]}
          poster={videoRitualOmPoster}
          label="An Om drawn on paper, resting on a puja thali with rice and rose petals"
          className="absolute inset-0 -z-20 h-full w-full object-cover saturate-[1.2] contrast-[1.08] brightness-[1.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-parchment) 0%, color-mix(in srgb, var(--color-parchment) 55%, transparent) 28%, color-mix(in srgb, var(--color-parchment) 55%, transparent) 62%, color-mix(in srgb, var(--color-parchment) 50%, var(--color-parchment-2) 50%) 100%)",
          }}
        />
        <Reveal className="mx-auto max-w-2xl px-5 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Lived, not taught
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium text-ink sm:text-4xl">
            Every ceremony begins the same quiet way
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ink-soft">
            Rice, rose petals, a thali, and a single Om — the same small
            ritual that opens festivals and ceremonies at Gurukulam, year
            after year.
          </p>
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

          <Timeline className="relative mt-12 space-y-8 pl-8">
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
          </Timeline>
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
      <section id="campus-appeal" className="px-5 py-24 [perspective:1400px]">
        <Reveal className="mx-auto max-w-4xl">
          <TiltCard
            strength={5}
            className="overflow-hidden rounded-sm border border-brass-500/30 bg-gradient-to-br from-camel-700 via-camel-600 to-camel-700 px-8 py-14 text-center shadow-soft"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-300">
              Outgrowing our home
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-camel-50 sm:text-4xl">
              30–35 children are waiting for a seat
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-camel-50/85">
              We've outgrown the premises we have and are searching for a
              new home for Gurukulam — and would welcome your support.
            </p>
            <Magnetic strength={12} className="mt-8 inline-block">
              <PremiumCTA>
                <Link
                  to="/admissions#support"
                  className="inline-flex items-center gap-2 rounded-sm bg-brass-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-[#241a10] shadow-soft transition hover:bg-brass-300 active:scale-95"
                >
                  See how to help
                  <ArrowRight size={16} />
                </Link>
              </PremiumCTA>
            </Magnetic>
          </TiltCard>
        </Reveal>
      </section>
    </>
  );
}

function Marquee({ items }: { items: readonly string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="group overflow-hidden">
      <div className="animate-marquee flex w-max gap-4 px-5 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.08 }}
            className="whitespace-nowrap rounded-full border border-camel-500/30 px-5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brass-500 hover:text-ink"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const ringY = useTransform(scrollY, [0, 600], [0, 220]);
  const ringScale = useTransform(scrollY, [0, 600], [1, 1.3]);
  const ringRotate = useTransform(scrollY, [0, 600], [0, 55]);

  // Skip the WebGL particle field on narrow viewports entirely — not just
  // visually hidden, since mounting it would still open a GL context and run
  // its animation loop for nothing on the phones most parents will browse on.
  const [showParticles] = useState(() => typeof window !== "undefined" && window.innerWidth >= 640);

  const [glowActive, setGlowActive] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 55, damping: 20, mass: 0.6 });
  const mouseY = useSpring(rawY, { stiffness: 55, damping: 20, mass: 0.6 });
  const glow = useMotionTemplate`radial-gradient(480px circle at ${mouseX}px ${mouseY}px, rgba(186,110,119,0.16), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
    if (!glowActive) setGlowActive(true);
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={{ background: glow }}
        animate={{ opacity: glowActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 -z-30"
      />
      {showParticles && (
        <Suspense fallback={null}>
          <HeroParticles className="pointer-events-none absolute inset-0 -z-[25]" />
        </Suspense>
      )}
      <motion.div
        style={{ y: ringY, scale: ringScale, rotate: ringRotate }}
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center text-camel-600 dark:text-brass-500/70"
      >
        <OrnamentRing className="h-[560px] w-[560px] opacity-40 sm:h-[720px] sm:w-[720px]" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-grain opacity-[0.035] text-ink" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-camel-600 dark:text-brass-300"
        >
          Surat, Gujarat · Established 2004
        </motion.p>

        <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink [perspective:600px] sm:text-6xl">
          <SplitText text="Gurukulam" delay={0.5} stagger={0.09} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-display text-xl italic text-camel-700 dark:text-brass-300 sm:text-2xl"
        >
          <TextShimmer delay={2.6}>{PHILOSOPHY.tagline}</TextShimmer>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft"
        >
          A gurukul-style school where 225 students learn Sanskrit,
          mathematics and the classical arts alongside sanskar — guided by
          gurujans who call themselves, simply, the Gurukulam Parivar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Magnetic strength={12}>
            <PremiumCTA>
              <Link
                to="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-camel-600 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700 active:scale-95"
              >
                Enquire about admission
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </PremiumCTA>
          </Magnetic>
          <Magnetic strength={12}>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ink/15 bg-parchment/60 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-ink backdrop-blur transition hover:border-brass-500 hover:text-camel-700 active:scale-95"
            >
              Our story
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
