import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { CursorGlow } from "@/components/CursorGlow";
import { FlipStat } from "@/components/FlipStat";
import { ADMISSIONS_EMAIL, CONTACTS } from "@/data/content";
import { waLink, telLink } from "@/lib/utils";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

const WAITLIST_CONTACT = CONTACTS.find((c) => c.name === "Ankita Ben") ?? CONTACTS[0];

export function Waitlist() {
  useDocumentTitle("Join the Waiting List");
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parentName = String(data.get("parentName") ?? "");
    const childName = String(data.get("childName") ?? "");
    const childAge = String(data.get("childAge") ?? "");
    const phone = String(data.get("phone") ?? "");

    const waMessage = `Hi Ankita Ben, I'm ${parentName}, and I'd like to add my child ${childName} (age ${childAge}) to Gurukulam's waiting list. You can reach me at ${phone}.`;
    const whatsappUrl = waLink(WAITLIST_CONTACT.phone, waMessage);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setWaUrl(whatsappUrl);
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            High demand
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">
            Join the waiting list
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Gurukulam has outgrown the space it has. Right now, 30–35 waiting
            students can't be admitted simply because there isn't room —
            adding your child here holds their place while a seat opens up,
            or while{" "}
            <Link
              to="/admissions#support"
              className="font-medium text-ink underline decoration-brass-500/50 underline-offset-2 transition hover:text-camel-600 dark:hover:text-brass-300"
            >
              our search for a larger campus
            </Link>{" "}
            continues.
          </p>
        </Reveal>
      </CursorGlow>

      <Reveal delay={0.06} className="mx-auto mt-10 max-w-xs">
        <FlipStat value={35} prefix="Up to " label="students on our waiting list" />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <TiltCard strength={5} className="relative overflow-hidden rounded-sm border border-ink/10 bg-parchment-2/40 p-6 shadow-card sm:p-8">
          <span role="status" aria-live="polite" className="sr-only">
            {submitted ? "WhatsApp opened in a new tab with your waiting-list request ready to send." : ""}
          </span>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.15 }}
                >
                  <CheckCircle2 className="text-forest-500" size={48} />
                </motion.div>
                <h2 className="mt-4 font-display text-xl font-medium text-ink">
                  One more step
                </h2>
                <p className="mx-auto mt-1 max-w-sm text-sm text-ink-soft">
                  WhatsApp should have opened in a new tab with this request
                  already typed out for{" "}
                  <strong className="font-semibold text-ink">{WAITLIST_CONTACT.name}</strong>.
                  If it didn't, use the button below.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-sm bg-camel-600 px-6 py-3 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700"
                >
                  Open WhatsApp
                </a>
                <p className="mx-auto mt-4 max-w-sm text-xs text-ink-soft">
                  Or reach us directly:{" "}
                  <a href={telLink(WAITLIST_CONTACT.phone)} className="font-medium text-ink hover:text-camel-600 dark:hover:text-brass-300">
                    {WAITLIST_CONTACT.phone}
                  </a>{" "}
                  ·{" "}
                  <a href={`mailto:${ADMISSIONS_EMAIL}`} className="font-medium text-ink hover:text-camel-600 dark:hover:text-brass-300">
                    {ADMISSIONS_EMAIL}
                  </a>
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-sm border border-ink/15 px-5 py-2 text-sm font-medium text-ink transition hover:border-brass-500 hover:text-camel-700"
                >
                  Add another child
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <Field label="Your name" name="parentName" placeholder="Parent or guardian's name" autoComplete="name" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Child's name" name="childName" placeholder="Your child's name" required />
                  <Field label="Child's age" name="childAge" placeholder="e.g. 5" required />
                </div>
                <Field label="Phone number" name="phone" type="tel" placeholder="For us to reach you back" autoComplete="tel" required />
                <Magnetic strength={8} className="inline-block w-full sm:w-auto">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-camel-600 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700 sm:w-auto"
                  >
                    <Send size={15} />
                    Join via WhatsApp
                  </motion.button>
                </Magnetic>
              </motion.form>
            )}
          </AnimatePresence>
        </TiltCard>
      </Reveal>

      <Reveal delay={0.14} className="mt-8 text-center text-sm text-ink-soft">
        Want the full admission process first?{" "}
        <Link
          to="/admissions"
          className="font-medium text-ink underline decoration-brass-500/50 underline-offset-2 transition hover:text-camel-600 dark:hover:text-brass-300"
        >
          See how admissions works
        </Link>
        .
      </Reveal>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span aria-hidden="true" className="text-camel-600 dark:text-brass-300">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink outline-none transition focus:border-brass-500"
      />
    </div>
  );
}
