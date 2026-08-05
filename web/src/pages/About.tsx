import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Timeline } from "@/components/Timeline";
import { CursorGlow } from "@/components/CursorGlow";
import { Photo } from "@/components/Photo";
import { TIMELINE, UNIQUENESS, DRESS_CODE, PHILOSOPHY } from "@/data/content";
import { useDocumentTitle } from "@/lib/useDocumentTitle";
import photoMealtime from "@/assets/gallery-mealtime.jpg";

export function About() {
  useDocumentTitle("About");
  return (
    <div className="px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Our story
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            Nine students, and a shared conviction
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A handful of thoughtful parents in Surat believed their children
            needed more than a syllabus — they needed sanskar. In 2004, that
            conviction became Gurukulam.
          </p>
        </Reveal>
      </CursorGlow>

      {/* Timeline */}
      <div className="mx-auto mt-16 max-w-3xl">
        <Timeline className="relative space-y-10 pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05} className="relative">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-brass-500 bg-parchment" />
              <span className="text-sm font-semibold uppercase tracking-wide text-camel-600 dark:text-brass-300">
                {t.year}
              </span>
              <h3 className="mt-1 font-display text-lg font-medium text-ink">{t.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">{t.desc}</p>
            </Reveal>
          ))}
        </Timeline>
      </div>

      {/* Philosophy */}
      <div
        id="philosophy"
        className="mx-auto mt-24 max-w-5xl scroll-mt-24 overflow-hidden rounded-sm border border-brass-500/30 bg-parchment-2/50 [perspective:1600px] sm:grid sm:grid-cols-5"
      >
        <Reveal className="sm:col-span-2">
          <TiltCard strength={6} className="h-full">
            <Photo
              src={photoMealtime}
              alt="A gurujan feeding a young student at Gurukulam"
              className="h-64 w-full object-cover sm:h-full"
            />
          </TiltCard>
        </Reveal>
        <Reveal delay={0.08} className="p-8 text-center sm:col-span-3 sm:p-10 sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            The foundation
          </span>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
            {PHILOSOPHY.menCodes} codes for men, {PHILOSOPHY.womenCodes} for women
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft sm:mx-0">
            Gurukulam's curriculum is grounded in the codes of conduct laid
            down by {PHILOSOPHY.founder} — covering how one speaks, acts and
            carries oneself, not only what one knows. Bhantar, education, and
            ghadtar, character-building, are taught as one and the same
            thing.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft sm:mx-0">
            Every gurujan at Gurukulam cooks, cleans and cares for the
            children as their own — which is why the school calls itself,
            without ceremony, the <em className="font-display not-italic text-ink">Gurukulam Parivar</em>.
          </p>
        </Reveal>
      </div>

      {/* Uniqueness */}
      <div className="mx-auto mt-20 max-w-4xl">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            What makes it different
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink">
            Taught at each child's own pace
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 [perspective:1200px] sm:grid-cols-2">
          {UNIQUENESS.map((u) => (
            <TiltCard
              key={u}
              variants={staggerItem}
              strength={6}
              className="flex items-start gap-3 rounded-sm border border-ink/10 bg-parchment p-5 shadow-card"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-camel-600 dark:text-brass-300" />
              <p className="text-sm leading-relaxed text-ink-soft">{u}</p>
            </TiltCard>
          ))}
        </RevealStagger>
      </div>

      {/* Dress code */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Traditional attire
          </span>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink">
            Dressed as we teach
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Footwear is left at the door, and gurujans and students alike
            dress according to Aryan tradition — seated cross-legged, below
            the guru, for every period.
          </p>
        </Reveal>

        <RevealStagger className="mt-8 grid gap-4 [perspective:1200px] sm:grid-cols-3">
          {DRESS_CODE.map((d) => (
            <TiltCard
              key={d.group}
              variants={staggerItem}
              strength={6}
              className="rounded-sm border border-ink/10 bg-parchment-2/40 p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-camel-600 dark:text-brass-300">
                {d.group}
              </div>
              <div className="mt-2 font-display text-lg text-ink">{d.attire}</div>
            </TiltCard>
          ))}
        </RevealStagger>
      </div>
    </div>
  );
}
