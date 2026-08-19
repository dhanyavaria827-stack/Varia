import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { SwapTabs } from "@/components/SwapTabs";
import { Gallery } from "@/components/Gallery";
import { CursorGlow } from "@/components/CursorGlow";
import { TiltCard } from "@/components/TiltCard";
import { ARTS, FESTIVALS, DAILY_RHYTHM, SOCIAL } from "@/data/content";
import { slugify } from "@/lib/utils";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import photoSandTracing from "@/assets/gallery-sand-tracing.jpg";
import photoSand from "@/assets/gallery-sand.jpg";
import photoChalk from "@/assets/gallery-chalk.jpg";
import photoHandprints from "@/assets/gallery-handprints.jpg";

const MotionLink = motion.create(Link);

const PHOTOS = [
  { src: photoChalk, caption: "Desi games, played barefoot", rotate: 2 },
  { src: photoHandprints, caption: "Colour on the hands after art class", rotate: -2 },
  { src: photoSandTracing, caption: "Guided, one letter at a time", rotate: -3 },
  { src: photoSand, caption: "First letters, traced in sand", rotate: 2 },
];

export function Life() {
  useDocumentTitle("Life & Arts");
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Life & arts
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            Every afternoon, a different craft
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Kalavatsav 2.0, Gurukulam's cultural showcase at Sanjeevkumar
            Auditorium, drew wide praise — a glimpse of what fills the
            afternoons here.
          </p>
        </Reveal>
      </CursorGlow>

      {/* Glimpses */}
      <div className="mt-14">
        <Gallery photos={PHOTOS} />
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-ink-soft">
          <InstagramIcon size={14} className="text-camel-600 dark:text-brass-300" />
          More moments on Instagram —{" "}
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="font-medium text-ink transition hover:text-camel-600 dark:hover:text-brass-300">
            {SOCIAL.instagramLabel}
          </a>{" "}
          and, for Bal Vibhag,{" "}
          <a href={SOCIAL.instagramBalmandir} target="_blank" rel="noreferrer" className="font-medium text-ink transition hover:text-camel-600 dark:hover:text-brass-300">
            {SOCIAL.instagramBalmandirLabel}
          </a>
        </p>
      </div>

      {/* Arts swap tabs */}
      <div id="arts" className="mt-20 scroll-mt-24">
        <SwapTabs
          tabs={ARTS.map((a) => ({
            id: a.id,
            label: a.name,
            content: (
              <div className="rounded-sm border border-ink/10 bg-parchment-2/40 p-8">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                  className="flex flex-wrap justify-center gap-2.5"
                >
                  {a.items.map((item) => (
                    <MotionLink
                      key={item}
                      to={`/skills/${slugify(item)}`}
                      variants={staggerItem}
                      whileHover={{ scale: 1.08, borderColor: "var(--color-brass-500)" }}
                      whileTap={{ scale: 0.96 }}
                      className="rounded-full border border-camel-500/30 bg-parchment px-4 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {item}
                    </MotionLink>
                  ))}
                </motion.div>
              </div>
            ),
          }))}
        />
      </div>

      {/* Daily rhythm recap */}
      <div className="mt-24">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Structure
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            The shape of a day
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAILY_RHYTHM.map((r) => (
            <motion.div
              key={r.time}
              variants={staggerItem}
              className="rounded-sm border border-ink/10 bg-parchment p-5 text-center shadow-card"
            >
              <div className="font-display text-lg font-medium text-camel-700 dark:text-brass-300">
                {r.time}
              </div>
              <div className="mt-1 text-sm font-medium text-ink">{r.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{r.desc}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>

      {/* Festivals */}
      <div className="mt-24">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Observed together
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            Festivals & holidays
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 [perspective:1200px] sm:grid-cols-3">
          {FESTIVALS.map((f) => (
            <TiltCard
              key={f.name}
              variants={staggerItem}
              strength={6}
              className="group rounded-sm border border-ink/10 bg-parchment-2/40 p-6 text-center"
            >
              <motion.div whileHover={{ rotate: 12, scale: 1.15 }} className="inline-block">
                <CalendarHeart className="mx-auto text-camel-600 dark:text-brass-300" size={20} />
              </motion.div>
              <h3 className="mt-3 font-display text-lg font-medium text-ink">{f.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
            </TiltCard>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
}
