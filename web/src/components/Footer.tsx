import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { RevealStagger, staggerItem } from "@/components/Reveal";
import logo from "@/assets/logo-icon.jpg";
import { ADMISSIONS_EMAIL, CONTACTS, SOCIAL, LOCATION } from "@/data/content";
import { telLink } from "@/lib/utils";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-parchment-2/60">
      <RevealStagger
        className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.14}
      >
        <motion.div variants={staggerItem}>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-brass-500/40 bg-parchment-2/60">
              <img src={logo} alt="Gurukulam" className="h-full w-full rounded-full object-cover" />
            </span>
            <span className="font-display text-base font-medium text-ink">
              Gurukulam
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            "Today's child, tomorrow's guardian" — a gurukul-style school in
            Surat, teaching bhantar (education) with ghadtar (character),
            since 2004.
          </p>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/" className="transition hover:text-camel-600 dark:hover:text-brass-300">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-camel-600 dark:hover:text-brass-300">About</Link></li>
            <li><Link to="/academics" className="transition hover:text-camel-600 dark:hover:text-brass-300">Academics</Link></li>
            <li><Link to="/life" className="transition hover:text-camel-600 dark:hover:text-brass-300">Life & Arts</Link></li>
          </ul>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Gurukulam</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/admissions" className="transition hover:text-camel-600 dark:hover:text-brass-300">Admissions</Link></li>
            <li><Link to="/admissions#support" className="transition hover:text-camel-600 dark:hover:text-brass-300">Support a new campus</Link></li>
            <li><Link to="/contact" className="transition hover:text-camel-600 dark:hover:text-brass-300">Contact</Link></li>
          </ul>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Get in touch</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href={`mailto:${ADMISSIONS_EMAIL}`} className="transition hover:text-camel-600 dark:hover:text-brass-300">
                {ADMISSIONS_EMAIL}
              </a>
            </li>
            {CONTACTS.map((c) => (
              <li key={c.name} className="flex items-center gap-2">
                <Phone size={15} />
                <a href={telLink(c.phone)} className="transition hover:text-camel-600 dark:hover:text-brass-300">
                  {c.phone} <span className="text-xs">({c.role})</span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-camel-600 dark:hover:text-brass-300"
              >
                {LOCATION.address}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Gurukulam on Instagram"
              title="Gurukulam on Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-brass-500/50 text-camel-700 transition hover:border-brass-500 hover:text-camel-600 dark:hover:text-brass-300 dark:text-brass-300"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={SOCIAL.instagramBalmandir}
              target="_blank"
              rel="noreferrer"
              aria-label="Balmandir Gurukulam on Instagram"
              title="Balmandir Gurukulam on Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-brass-500/50 text-camel-700 transition hover:border-brass-500 hover:text-camel-600 dark:hover:text-brass-300 dark:text-brass-300"
            >
              <InstagramIcon size={15} />
            </a>
          </div>
        </motion.div>
      </RevealStagger>

      <div className="rule-brass mx-5" />

      <div className="flex flex-col items-center gap-2 py-5 text-center text-xs uppercase tracking-[0.12em] text-ink-soft sm:flex-row sm:justify-center sm:gap-4">
        <span>© {new Date().getFullYear()} Gurukulam, Surat</span>
        <span className="hidden sm:inline">·</span>
        <Link to="/privacy" className="transition hover:text-camel-600 dark:hover:text-brass-300">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
