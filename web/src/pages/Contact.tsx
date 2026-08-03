import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Magnetic } from "@/components/Magnetic";
import { CursorGlow } from "@/components/CursorGlow";
import { CONTACTS, SOCIAL, LOCATION } from "@/data/content";
import { waLink, telLink } from "@/lib/utils";

const ADMISSIONS_EMAIL = "Gurukulam941@Gmail.com";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const mailSubject = `Gurukulam enquiry: ${subject}`;
    const mailBody = `Name: ${name}\nReply-to email: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:${ADMISSIONS_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    setSubmitting(true);
    window.location.href = mailtoUrl;
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <CursorGlow className="py-2">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-camel-600 dark:text-brass-300">
            Get in touch
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink">Contact Gurukulam</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Questions about admissions, a visit, or how to support our search
            for a larger campus? We'd love to hear from you.
          </p>
        </Reveal>
      </CursorGlow>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="[perspective:1400px] lg:col-span-2">
          <TiltCard strength={5} className="h-full space-y-5 rounded-sm border border-ink/10 bg-parchment-2/40 p-6 shadow-card">
            <ContactRow icon={Mail} label="Email" value={ADMISSIONS_EMAIL} href={`mailto:${ADMISSIONS_EMAIL}`} />
            <ContactRow icon={MapPin} label="Location" value={LOCATION.address} href={LOCATION.mapsUrl} external />

            <div className="rule-brass" />

            {CONTACTS.map((c) => (
              <div key={c.name} className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass-500/50 text-camel-700 dark:text-brass-300">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {c.name} · {c.role}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href={telLink(c.phone)} className="text-sm font-medium text-ink transition hover:text-camel-600">
                      {c.phone}
                    </a>
                    <a
                      href={waLink(c.phone, "Hello! I'd like to ask about admission to Gurukulam.")}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-forest-500 transition hover:text-forest-600"
                    >
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="rule-brass" />

            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass-500/50 text-camel-700 dark:text-brass-300">
                <InstagramIcon size={16} />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                  Follow us
                </div>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm font-medium text-ink transition hover:text-camel-600"
                >
                  {SOCIAL.instagramLabel}
                </a>
                <a
                  href={SOCIAL.instagramBalmandir}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm font-medium text-ink transition hover:text-camel-600"
                >
                  {SOCIAL.instagramBalmandirLabel} <span className="text-ink-soft">(Bal Vibhag)</span>
                </a>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-sm border border-ink/10 bg-parchment-2/40 p-6 shadow-card sm:p-8">
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
                  <h3 className="mt-4 font-display text-xl font-medium text-ink">
                    Almost there
                  </h3>
                  <p className="mx-auto mt-1 max-w-sm text-sm text-ink-soft">
                    Your email app should have opened with this enquiry
                    addressed to <strong className="font-semibold text-ink">{ADMISSIONS_EMAIL}</strong>.
                    Just hit send there to reach Gurukulam.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-sm border border-ink/15 px-5 py-2 text-sm font-medium text-ink transition hover:border-brass-500 hover:text-camel-700"
                  >
                    Send another message
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <Field label="Subject" name="subject" placeholder="What's this about?" required />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink outline-none transition focus:border-brass-500"
                    />
                  </div>
                  <Magnetic strength={8} className="inline-block w-full sm:w-auto">
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-camel-600 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700 disabled:opacity-70 sm:w-auto"
                    >
                      {submitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="h-4 w-4 rounded-full border-2 border-camel-50/40 border-t-camel-50"
                        />
                      ) : (
                        <Send size={15} />
                      )}
                      {submitting ? "Sending..." : "Send message"}
                    </motion.button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass-500/50 text-camel-700 dark:text-brass-300">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-ink-soft">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="text-sm font-medium text-ink transition hover:text-camel-600"
          >
            {value}
          </a>
        ) : (
          <div className="text-sm font-medium text-ink">{value}</div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-ink/15 bg-parchment px-4 py-3 text-sm text-ink outline-none transition focus:border-brass-500"
      />
    </div>
  );
}
