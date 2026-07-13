import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-parchment-2/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 overflow-hidden rounded-full border border-brass-500/60">
              <img src={logo} alt="Gurukulam" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-base font-medium text-ink">
              Gurukulam
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            આજનો બાળ, કાલનો રખેવાળ — a gurukul-style school in Surat, teaching
            bhantar (education) with ghadtar (character), since 2004.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/" className="transition hover:text-camel-600">Home</Link></li>
            <li><Link to="/about" className="transition hover:text-camel-600">About</Link></li>
            <li><Link to="/academics" className="transition hover:text-camel-600">Academics</Link></li>
            <li><Link to="/life" className="transition hover:text-camel-600">Life & Arts</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Gurukulam</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/admissions" className="transition hover:text-camel-600">Admissions</Link></li>
            <li><Link to="/admissions#support" className="transition hover:text-camel-600">Support a new campus</Link></li>
            <li><Link to="/contact" className="transition hover:text-camel-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">Get in touch</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
            <li className="flex items-center gap-2"><Mail size={15} /> hello@gurukulam.app</li>
            <li className="flex items-center gap-2"><Phone size={15} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Surat, Gujarat, India</li>
          </ul>
        </div>
      </div>

      <div className="rule-brass mx-5" />

      <div className="py-5 text-center text-xs uppercase tracking-[0.12em] text-ink-soft">
        © {new Date().getFullYear()} Gurukulam, Surat
      </div>
    </footer>
  );
}
