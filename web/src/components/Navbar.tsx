import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, GraduationCap } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gurus", label: "Gurus" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,37,84,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 text-white shadow-soft"
          >
            <GraduationCap size={20} />
          </motion.span>
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            Gurukulam
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink dark:text-indigo-200 dark:hover:text-white"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-saffron-100 dark:bg-indigo-700/60"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle color theme"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink-soft transition hover:border-saffron-500 hover:text-saffron-600 dark:border-white/10 dark:text-indigo-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link
            to="/admissions"
            className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-500 active:scale-95 sm:inline-block"
          >
            Admissions
          </Link>

          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink dark:border-white/10 dark:text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md dark:border-white/10 dark:bg-indigo-900/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-base font-medium",
                      pathname === link.to
                        ? "bg-saffron-100 text-ink dark:bg-indigo-700/60 dark:text-white"
                        : "text-ink-soft dark:text-indigo-200"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: LINKS.length * 0.05 }}
              >
                <Link
                  to="/admissions"
                  className="mt-1 block rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-base font-semibold text-white"
                >
                  Admissions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
