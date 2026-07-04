# Varia

A Vite + React + TypeScript + Tailwind v4 project with a real component
library, not a generic scaffold. Read this before doing any web/UI work here.

## Stack

- Vite, React 18, TypeScript
- Tailwind CSS v4 (theme tokens + dark mode via `.dark` class in `src/index.css`)
- Radix UI primitives (`@radix-ui/react-*`)
- `motion` (the motion.dev / Framer Motion library) for animation
- `tw-animate-css` for `animate-in`/`animate-out` utility classes

Commands: `npm run dev`, `npm run build` (runs `tsc --noEmit` then `vite build`), `npm run preview`.

## Ground rules for any UI work in this repo

1. **Check `src/components/ruixen/` and `src/components/ui/` before building
   anything new.** There is already a real component library here — reuse or
   extend it instead of writing a new component from scratch.
2. **Never ship a static, motionless section if a component here (or in the
   Ruixen registry) already does it with real animation.** Use `motion`, not
   bare CSS transitions bolted onto a plain div.
3. **Avoid the generic "AI-generated Tailwind boilerplate" look**: no
   default shadcn-demo styling left untouched, no lorem-ipsum-flat cards, no
   sections that could belong to any SaaS template. Prefer the kind of
   detail already in these components — sliding accent indicators, spring
   physics, crossfades, staggered reveals.
4. **When a needed component doesn't exist yet**, pull it from Ruixen UI's
   open-source registry (see "Sourcing more components" below) rather than
   inventing a lower-quality equivalent.
5. Keep components self-contained. Don't introduce a UI framework
   (Next.js, etc.) — this is a Vite SPA, so `next/link` and other Next-only
   APIs must be swapped for plain `<a>` tags when porting components.

## Sourcing more components

21st.dev and ruixen.com are blocked by this environment's network policy
(hard 403 at the proxy — don't retry them). Their underlying source is on
GitHub and *is* reachable via `raw.githubusercontent.com`:

- Component source: `https://raw.githubusercontent.com/ruixenui/ruixen.com/main/registry/ruixenui/<name>.tsx`
- Base shadcn/Radix primitives: `https://raw.githubusercontent.com/ruixenui/ruixen.com/main/components/ui/<name>.tsx`
- Full catalog manifest (names, descriptions, deps): `https://raw.githubusercontent.com/ruixenui/ruixen.com/main/registry/registry-ui.ts`

When porting a new component from there:
- Replace `import Link from "next/link"` with plain `<a>` tags (careful with
  find/replace — `Link` is a substring of names like `FooterLink`/`bottomLinks`,
  so replace only the actual `<Link>`/`</Link>` JSX usages and the import,
  not every occurrence of the string).
- Replace hardcoded local image paths (e.g. `/avatar-images/avatar-01.jpg`)
  with inline SVG data URIs — see `portrait()`/`cardImage()`/`avatarDataUri()`
  helpers in `src/App.tsx` and `split-feature-showcase.tsx` for the pattern.
- Check the manifest entry for `dependencies` (npm packages) and
  `registryDependencies` (other primitives it needs from `components/ui/`)
  and make sure both exist before wiring it in.
- If it uses Tailwind classes referencing color tokens or animations not yet
  in `src/index.css` (e.g. `bg-card`, `animate-in`), add them to the theme
  rather than leaving them silently broken.
- Always verify in a real browser after porting (`npm run build`, `npm run
  preview`, screenshot or click through it) — don't assume a port compiles
  clean just because `tsc` passes.

## Current component inventory

`src/components/ruixen/`: accordion-editorial, accordion-indexed,
animated-theme-toggler, arc-reveal-hero, banner-announcement, card-stack,
feature-highlights, featured-portrait-testimonial, footer-pro, gooey-dock,
magnetic-tabs, navbar-floating, pricing-cards-tooltip,
split-feature-showcase, trusted-clients-showcase.

`src/components/ui/`: accordion, avatar, blurred-stagger-text, button,
tooltip (Radix-based shadcn primitives).

`src/components/SearchableAccordion.tsx`: live search/filter wrapper around
the indexed accordion.

`src/App.tsx` wires all of the above into one demo page — treat it as a
reference for how these components compose, not as fixed content.
