import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/Magnetic";
import logo from "@/assets/logo-icon.png";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/life", label: "Life & Arts" },
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

  function handleThemeToggle(e: MouseEvent<HTMLButtonElement>) {
    const { clientX, clientY } = e;
    document.documentElement.style.setProperty("--theme-x", `${clientX}px`);
    document.documentElement.style.setProperty("--theme-y", `${clientY}px`);

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    if (doc.startViewTransition) {
      doc.startViewTransition(() => toggle());
    } else {
      toggle();
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-parchment/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(36,26,16,0.1)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="h-10 w-10 overflow-hidden rounded-full border border-brass-500/60"
          >
            <img src={logo} alt="Gurukulam" className="h-full w-full object-cover" />
          </motion.span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-medium tracking-tight text-ink">
              Gurukulam
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-camel-600 dark:text-brass-300">
              Surat · Est. 2004
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-[0.06em] text-ink-soft transition-colors hover:text-ink"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] bg-brass-500"
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
            onClick={handleThemeToggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink-soft transition hover:border-brass-500 hover:text-camel-600 dark:border-white/10"
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

          <Magnetic strength={10} className="hidden sm:inline-block">
            <Link
              to="/admissions"
              className="inline-block rounded-sm bg-camel-600 px-5 py-2.5 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700 active:scale-95"
            >
              Admissions
            </Link>
          </Magnetic>

          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink dark:border-white/10 md:hidden"
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
            className="overflow-hidden border-t border-ink/10 bg-parchment/95 backdrop-blur-md dark:border-white/10 md:hidden"
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
                      "block rounded-sm px-3 py-2.5 text-base font-medium",
                      pathname === link.to
                        ? "bg-camel-100 text-ink"
                        : "text-ink-soft"
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
                  className="mt-1 block rounded-sm bg-camel-600 px-3 py-2.5 text-center text-base font-medium uppercase tracking-wide text-camel-50"
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
