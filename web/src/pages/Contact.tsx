import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Reveal className="text-center">
        <h1 className="font-serif text-4xl font-semibold text-ink dark:text-white">
          Get in touch
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft dark:text-indigo-200">
          Questions about admissions, our programs, or visiting the campus? We'd
          love to hear from you.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="h-full space-y-5 rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-card dark:border-white/10 dark:bg-white/5">
            <ContactRow icon={Mail} label="Email" value="hello@gurukulam.app" />
            <ContactRow icon={Phone} label="Phone" value="+91 98765 43210" />
            <ContactRow icon={MapPin} label="Location" value="Gujarat, India" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-card dark:border-white/10 dark:bg-white/5 sm:p-8">
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
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                  >
                    <CheckCircle2 className="text-emerald-500" size={48} />
                  </motion.div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-ink dark:text-white">
                    Message sent!
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft dark:text-indigo-200">
                    Thanks for reaching out — we'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-ink/15 px-5 py-2 text-sm font-medium text-ink transition hover:border-saffron-500 hover:text-saffron-700 dark:border-white/15 dark:text-white"
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
                    <label className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-ink/15 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-saffron-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-500 disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                      />
                    ) : (
                      <Send size={15} />
                    )}
                    {submitting ? "Sending..." : "Send message"}
                  </motion.button>
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
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-saffron-100 text-saffron-700 dark:bg-white/10 dark:text-saffron-300">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-ink-soft dark:text-indigo-300">
          {label}
        </div>
        <div className="text-sm font-medium text-ink dark:text-white">{value}</div>
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/15 bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-saffron-500 dark:border-white/15 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}
