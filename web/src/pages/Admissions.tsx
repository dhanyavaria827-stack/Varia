import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageCircle, Users, CheckCircle2, Home } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { FlipStat } from "@/components/FlipStat";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { CursorGlow } from "@/components/CursorGlow";
import { Photo } from "@/components/Photo";
import { DIVISIONS } from "@/data/content";
import photoPortrait from "@/assets/gallery-portrait.jpg";

const STEPS = [
  {
    icon: FileText,
    title: "Share a little about your child",
    desc: "Send us their age and a few words about your family through the contact form.",
  },
  {
    icon: MessageCircle,
    title: "Speak with a gurujan",
    desc: "A gurujan calls to understand your child's needs and answer your questions.",
  },
  {
    icon: Home,
    title: "Visit Gurukulam",
    desc: "See a Bal Vibhag or Primary Vibhag day in progress before you decide.",
  },
  {
    icon: Users,
    title: "Join the Parivar",
    desc: "Places are limited — we'll confirm a seat, or add your child to the waiting list.",
  },
];

export function Admissions() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Join us
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">Admissions</h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            225 students already learn at Gurukulam, with more families on our
            waiting list than we currently have room to seat.
          </p>
        </Reveal>
      </CursorGlow>

      {/* Photo */}
      <Reveal delay={0.08} className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-sm border border-brass-500/30 [perspective:1400px]">
        <TiltCard strength={6}>
          <Photo
            src={photoPortrait}
            alt="A young student at Gurukulam"
            className="max-h-80 w-full object-cover"
          />
          <p className="bg-parchment-2/50 px-5 py-3 text-center font-display text-sm italic text-ink-soft">
            Curious, and ready to begin
          </p>
        </TiltCard>
      </Reveal>

      {/* Divisions */}
      <div className="mt-12 grid gap-5 [perspective:1200px] sm:grid-cols-2">
        {DIVISIONS.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.06}>
            <TiltCard strength={6} className="h-full rounded-sm border border-ink/10 bg-parchment-2/40 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-camel-600 dark:text-brass-300">
                {d.subtitle}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-ink">{d.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">
                Age {d.age} · {d.hours}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-5 [perspective:1200px] sm:grid-cols-2">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <TiltCard strength={6} className="relative h-full rounded-sm border border-ink/10 bg-parchment p-6 shadow-card">
              <motion.span
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 + 0.2 }}
                className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full bg-camel-600 text-xs font-semibold text-camel-50 shadow-soft"
              >
                {i + 1}
              </motion.span>
              <div className="grid h-11 w-11 place-items-center rounded-full border border-brass-500/50 text-camel-700 dark:text-brass-300">
                <s.icon size={19} />
              </div>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Eligibility */}
      <Reveal className="mt-16 rounded-sm border border-ink/10 bg-parchment-2/40 p-8 sm:p-10">
        <h2 className="font-display text-2xl font-medium text-ink">Before you apply</h2>
        <RevealStagger className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Children are admitted to Bal Vibhag (3–7) or Primary Vibhag (7–15)",
            "Footwear is left at the door; traditional attire is worn to class",
            "Families are asked to support the daily sanskar practices at home too",
            "Because of high demand, admission may begin on a waiting list",
          ].map((e) => (
            <motion.div
              key={e}
              variants={staggerItem}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft"
            >
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-camel-600 dark:text-brass-300" />
              {e}
            </motion.div>
          ))}
        </RevealStagger>
      </Reveal>

      {/* Campus appeal */}
      <Reveal id="support" className="mt-20 scroll-mt-24 [perspective:1400px]">
        <TiltCard strength={5} className="rounded-sm border border-brass-500/30 bg-parchment-2/50 p-8 sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            A space to grow into
          </span>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
            We're looking for a new home
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
            Gurukulam has outgrown the space it has. Right now, 30–35 waiting
            students can't be admitted simply because there isn't room. If you
            know of a suitable space in Surat, or would like to support the
            search for one, we'd be glad to hear from you.
          </p>
          <div className="mx-auto mt-8 max-w-xs">
            <FlipStat value={35} prefix="Up to " label="students on our waiting list" />
          </div>
        </TiltCard>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-16 overflow-hidden rounded-sm bg-gradient-to-br from-camel-700 via-camel-600 to-camel-700 px-8 py-12 text-center shadow-soft">
        <h2 className="font-display text-2xl font-medium text-camel-50 sm:text-3xl">
          Ready to take the first step?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-camel-50/85">
          Reach out and a gurujan will follow up to arrange a conversation.
        </p>
        <Magnetic strength={12} className="mt-7 inline-block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-brass-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-700 shadow-soft transition hover:bg-brass-300 active:scale-95"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </Magnetic>
      </Reveal>
    </div>
  );
}
