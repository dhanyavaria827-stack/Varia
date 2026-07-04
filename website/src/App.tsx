import { motion, type Variants } from 'motion/react'

const NAV_LINKS = ['Features', 'Showcase', 'Pricing', 'Docs']

const FEATURES = [
  {
    title: 'Buttery animations',
    body: 'Spring-based transitions powered by Motion make every interaction feel physical, not scripted.',
  },
  {
    title: 'Copy-paste components',
    body: 'Drop in ready-made blocks and restyle them with Tailwind utility classes in seconds.',
  },
  {
    title: 'Built for speed',
    body: 'Vite + React + TypeScript gives you instant HMR and a production build that stays lean.',
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(170,59,255,0.25),transparent)]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight text-white">Varia</span>
        <nav className="hidden gap-8 text-sm text-white/70 sm:flex">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Get started
        </a>
      </header>

      <motion.main
        className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-32 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="mb-6 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-xs font-medium tracking-wide text-fuchsia-300"
        >
          Starter template
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          Build animated interfaces{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            without the busywork
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-white/60">
          A React + Tailwind + Motion starting point for UI/UX-heavy sites — smooth entrance
          animations, hover states, and layout transitions ready to customize.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Start building
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white"
          >
            View components
          </motion.a>
        </motion.div>
      </motion.main>

      <motion.section
        className="mx-auto grid max-w-6xl gap-6 px-6 pb-32 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {FEATURES.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur"
          >
            <h2 className="mb-2 text-lg font-medium text-white">{feature.title}</h2>
            <p className="text-sm leading-relaxed text-white/60">{feature.body}</p>
          </motion.div>
        ))}
      </motion.section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        Built with Vite, React, Tailwind CSS, and Motion.
      </footer>
    </div>
  )
}

export default App
