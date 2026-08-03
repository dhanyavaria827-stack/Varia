import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CursorGlow } from "@/components/CursorGlow";
import { findSkillHistory } from "@/data/skillHistory";

export function SkillDetail() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? findSkillHistory(slug) : undefined;

  if (!entry) return <Navigate to="/life" replace />;

  const backTo = entry.section === "academics" ? "/academics" : "/life#arts";
  const backLabel = entry.section === "academics" ? "Back to Academics" : "Back to Life & Arts";
  const exploreLabel = entry.section === "academics" ? "Explore other subjects" : "Explore other arts";
  const taughtIn = entry.section === "academics" ? "Academics" : "Gurukulam's afternoon Vividh Kalao";

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Reveal>
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition hover:text-camel-600"
        >
          <ArrowLeft size={15} />
          {backLabel}
        </Link>
      </Reveal>

      <CursorGlow className="mt-8 py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            {entry.category} · History
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">{entry.name}</h1>
        </Reveal>
      </CursorGlow>

      <div className="mx-auto mt-10 max-w-2xl space-y-5">
        {entry.history.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-lg leading-relaxed text-ink-soft">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-14 text-center">
        <p className="text-sm text-ink-soft">
          {entry.name} is one of the skills taught in {taughtIn}.
        </p>
        <Link
          to={backTo}
          className="mt-5 inline-flex items-center gap-2 rounded-sm border border-ink/15 bg-parchment/60 px-6 py-3 text-sm font-medium uppercase tracking-[0.06em] text-ink backdrop-blur transition hover:border-brass-500 hover:text-camel-700"
        >
          {exploreLabel}
        </Link>
      </Reveal>
    </div>
  );
}
