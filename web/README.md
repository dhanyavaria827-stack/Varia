# Gurukulam — website

The site for Gurukulam, a gurukul-style school in Surat, Gujarat.
Live at <https://dhanyavaria827-stack.github.io/Varia/>.

React 19 + TypeScript + Vite, styled with Tailwind CSS v4 and animated with
Framer Motion.

## Requirements

Node.js `^20.19.0 || >=22.12.0` (matching the Vite version in the lockfile).

## Getting started

```bash
cd web
npm install     # first time only
npm run dev     # local dev server with hot reload
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, build to `dist/`, then prerender every route |
| `npm run preview` | Serve the built `dist/` locally, as it will be deployed |
| `npm run lint` | Oxlint over the project |

## Deployment

Pushing to `main` (or the active feature branch) triggers
`.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and
publishes `dist/` to GitHub Pages.

Because the site is served from a project path rather than a domain root, the
workflow sets `BASE_PATH=/Varia/` for the build. Leave `BASE_PATH` unset
locally — `vite.config.ts` falls back to `/`, which is what `npm run preview`
expects. If a custom domain is ever attached, drop `BASE_PATH` from the
workflow so the site builds at the root again.

## Prerendering

`npm run build` ends with `scripts/prerender.mjs`, which renders each route
with `renderToStaticMarkup` and writes a real HTML file per route (plus a
generated `sitemap.xml`). That way crawlers, link previews and visitors
without JavaScript get real content and per-route metadata instead of an empty
`<div id="root">`.

Two consequences worth knowing when editing components:

- The browser does **not** hydrate this markup. `src/main.tsx` clears `#root`
  and mounts a fresh tree, so a client/server mismatch is harmless.
- Anything animated in on scroll must still render **visible** on the server.
  There is no scroll or IntersectionObserver during prerendering, so a
  component left in its hidden state ships as `opacity: 0` in the static HTML.
  See `src/components/Reveal.tsx` for how this is handled.

## Content

Almost all copy and data lives in `src/data/content.ts` (stats, divisions,
subjects, arts, quotes, timeline, FAQs, contact details). Prefer editing that
over hardcoding strings into components.
