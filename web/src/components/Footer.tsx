import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-2/60 dark:border-white/10 dark:bg-indigo-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-saffron-500 to-saffron-700 text-white">
              <GraduationCap size={17} />
            </span>
            <span className="font-serif text-base font-semibold text-ink">
              Gurukulam
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft dark:text-indigo-200">
            A residential school for Vedic studies, yoga and the classical arts —
            carrying the guru-shishya tradition into the present day.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink dark:text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft dark:text-indigo-200">
            <li><Link to="/" className="transition hover:text-saffron-600">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-saffron-600">About</Link></li>
            <li><Link to="/programs" className="transition hover:text-saffron-600">Programs</Link></li>
            <li><Link to="/gurus" className="transition hover:text-saffron-600">Gurus</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink dark:text-white">Programs</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft dark:text-indigo-200">
            <li><Link to="/programs#vedic-studies" className="transition hover:text-saffron-600">Vedic Studies</Link></li>
            <li><Link to="/programs#yoga-meditation" className="transition hover:text-saffron-600">Yoga & Meditation</Link></li>
            <li><Link to="/programs#classical-arts" className="transition hover:text-saffron-600">Classical Arts</Link></li>
            <li><Link to="/admissions" className="transition hover:text-saffron-600">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink dark:text-white">Get in touch</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-ink-soft dark:text-indigo-200">
            <li className="flex items-center gap-2"><Mail size={15} /> hello@gurukulam.app</li>
            <li className="flex items-center gap-2"><Phone size={15} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 py-5 text-center text-xs text-ink-soft dark:border-white/10 dark:text-indigo-300">
        © {new Date().getFullYear()} Gurukulam. All rights reserved.
      </div>
    </footer>
  );
}
