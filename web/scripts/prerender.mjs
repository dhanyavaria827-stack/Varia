// Runs after `vite build`. This is a client-rendered SPA hosted on GitHub
// Pages with no server, so every deep link (e.g. /about) has always relied
// on the 404.html -> index.html redirect trick to work in a browser. That
// trick means the *first* response for those URLs is a real HTTP 404 —
// invisible to a person clicking a link, but visible to crawlers and link
// unfurlers that check the status code before running any JavaScript, and
// to anyone sharing an /admissions or /contact link whose preview card
// falls back to the homepage's title/description.
//
// This script writes a real static HTML file per route (about.html,
// admissions.html, skills/<slug>.html, ...) using the same built
// index.html as a template, with the <title>/description/canonical/
// OG/Twitter tags swapped for that route, AND with the actual rendered
// page content baked into #root (see renderRouteContents below) — so a
// crawler or reader that never runs JavaScript still gets the real page,
// not an empty <div id="root"></div>. The app still boots and re-renders
// itself from scratch on top of this once the bundle loads for anyone
// with JS enabled, so this is purely additive.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const SITE_URL = "https://dhanyavaria827-stack.github.io/Varia";
const SITE_NAME = "Gurukulam, Surat";
// Matches main.tsx's own basename logic, for the same BASE_PATH the real
// client build used (set by CI; defaults to "/" for local builds).
const BASE_PATH = process.env.BASE_PATH || "/";
const basename = BASE_PATH.startsWith("/") ? BASE_PATH.replace(/\/$/, "") || "/" : "/";

const STATIC_ROUTES = [
  {
    path: "about",
    title: "About",
    description:
      "The story of Gurukulam, Surat — founded in 2004 with nine students, grounded in the 64 and 72 codes of conduct, and the philosophy of bhantar with ghadtar.",
  },
  {
    path: "academics",
    title: "Academics",
    description:
      "Academics at Gurukulam, Surat — Sanskrit, Gujarati, English, mental mathematics and dharmic knowledge, taught from Bal Vibhag through Std. 12.",
  },
  {
    path: "life",
    title: "Life & Arts",
    description:
      "Life & arts at Gurukulam, Surat — classical dance, music, crafts and festivals that fill the afternoons alongside daily academics.",
  },
  {
    path: "admissions",
    title: "Admissions",
    description:
      "Admissions to Gurukulam, Surat — Bal Vibhag and Primary Vibhag, the steps to enrol, and how to support our search for a larger campus.",
  },
  {
    path: "waitlist",
    title: "Join the Waiting List",
    description:
      "Join Gurukulam, Surat's admission waiting list — 30–35 waiting students can't yet be seated as we search for a larger campus.",
  },
  {
    path: "contact",
    title: "Contact",
    description:
      "Contact Gurukulam, Surat — reach us by phone, WhatsApp, email or in person for questions about admissions or a visit.",
  },
  {
    path: "privacy",
    title: "Privacy",
    description:
      "What happens with your information on the Gurukulam, Surat website, in plain language.",
  },
];

// The skill-history data is plain TypeScript with no imports of its own, so
// it's transpiled in memory (via the `typescript` devDependency already in
// the project) and loaded through a data: URL — no temp files, no need for
// a Node version new enough to strip TS types natively.
async function loadSkillHistory() {
  const src = fs.readFileSync(path.join(root, "src/data/skillHistory.ts"), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
  const mod = await import(dataUrl);
  return mod.SKILL_HISTORY;
}

function truncate(text, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}…`;
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: expected tag not found in template (pattern: ${pattern})`);
  }
  return html.replace(pattern, replacement);
}

// Vite's own SSR module loader (ssrLoadModule) transforms TS/JSX exactly
// like the real app, using the real vite.config.ts aliases — but it always
// resolves imported assets to their raw dev-server path (e.g.
// "/src/assets/logo-icon.jpg"), since it has no idea a production build
// with hashed filenames already happened in the same process. This maps
// those dev paths to the real hashed ones already sitting in dist/assets,
// by reversing Vite's own "name-HASH.ext" naming convention.
function buildAssetPathMap() {
  const assetsDir = path.join(distDir, "assets");
  const map = new Map();
  if (!fs.existsSync(assetsDir)) return map;
  for (const file of fs.readdirSync(assetsDir)) {
    const match = file.match(/^(.+)-([A-Za-z0-9_-]{8})\.([a-zA-Z0-9]+)$/);
    if (!match) continue;
    const [, base, , ext] = match;
    map.set(`/src/assets/${base}.${ext}`, `${BASE_PATH}assets/${file}`.replace(/\/{2,}/g, "/"));
  }
  return map;
}

function rewriteAssetPaths(html, assetMap) {
  let out = html;
  for (const [devPath, prodPath] of assetMap) {
    out = out.split(devPath).join(prodPath);
  }
  return out;
}

// Renders the real component tree for every route up front (one Vite SSR
// server, reused across routes), returning routePath -> inner HTML for
// #root. Throws if anything fails — a broken prerender should fail the
// build loudly, not silently ship an empty page.
async function renderRouteContents(routePaths) {
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
    base: "/",
    logLevel: "error",
    resolve: {
      // Vite's default resolution for this package's "node" export
      // condition picks a CJS build that Vite's own SSR module runner
      // can't evaluate ("module is not defined") — pointing straight at
      // the real ESM build sidesteps that entirely.
      alias: {
        "react-router-dom": path.resolve(root, "node_modules/react-router-dom/dist/index.mjs"),
      },
    },
  });

  try {
    const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
    const { ThemeProvider } = await vite.ssrLoadModule("/src/lib/theme.tsx");
    const { StaticRouter } = await vite.ssrLoadModule("react-router-dom");
    const { MotionConfig } = await vite.ssrLoadModule("framer-motion");
    const assetMap = buildAssetPathMap();

    const contents = new Map();
    for (const routePath of routePaths) {
      // StaticRouter's `location` is matched against the full URL path
      // (basename included) and only then has the basename stripped
      // internally — unlike the routePath keys used elsewhere in this
      // script, which are always basename-relative.
      const location = basename === "/" ? routePath : `${basename}${routePath}`;
      const el = React.createElement(
        MotionConfig,
        { reducedMotion: "user" },
        React.createElement(
          ThemeProvider,
          null,
          React.createElement(StaticRouter, { location, basename }, React.createElement(App))
        )
      );
      const html = rewriteAssetPaths(renderToStaticMarkup(el), assetMap);
      contents.set(routePath, html);
    }
    return contents;
  } finally {
    await vite.close();
  }
}

function injectRootContent(html, rootHtml) {
  return replaceTag(html, /<div id="root"><\/div>/, `<div id="root">${rootHtml}</div>`);
}

function renderPage(template, { routePath, title, description }) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}/${routePath}`;
  const safeTitle = escapeHtml(fullTitle);
  const safeDesc = escapeHtml(description);

  let html = template;
  html = replaceTag(html, /<title>.*?<\/title>/, `<title>${safeTitle}</title>`);
  html = replaceTag(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${safeDesc}" />`
  );
  html = replaceTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = replaceTag(
    html,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  return html;
}

async function main() {
  if (!fs.existsSync(distDir)) {
    console.error("prerender: dist/ not found — run `vite build` first.");
    process.exit(1);
  }
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
  const skills = await loadSkillHistory();

  const allRoutePaths = [
    "/",
    ...STATIC_ROUTES.map((r) => `/${r.path}`),
    ...skills.map((s) => `/skills/${s.slug}`),
  ];
  const rootContents = await renderRouteContents(allRoutePaths);

  fs.writeFileSync(path.join(distDir, "index.html"), injectRootContent(template, rootContents.get("/")));

  for (const route of STATIC_ROUTES) {
    const html = renderPage(template, {
      routePath: route.path,
      title: route.title,
      description: route.description,
    });
    fs.writeFileSync(
      path.join(distDir, `${route.path}.html`),
      injectRootContent(html, rootContents.get(`/${route.path}`))
    );
  }

  const skillsDir = path.join(distDir, "skills");
  fs.mkdirSync(skillsDir, { recursive: true });
  for (const entry of skills) {
    const html = renderPage(template, {
      routePath: `skills/${entry.slug}`,
      title: entry.name,
      description: truncate(entry.history[0]),
    });
    fs.writeFileSync(
      path.join(skillsDir, `${entry.slug}.html`),
      injectRootContent(html, rootContents.get(`/skills/${entry.slug}`))
    );
  }

  writeSitemap(skills);

  console.log(
    `prerender: wrote ${STATIC_ROUTES.length} route pages and ${skills.length} skill pages with route-specific metadata and real rendered content.`
  );
}

// The static sitemap.xml in public/ only ever listed the top-level routes —
// the 36 skill pages generated above (which now return a real 200, not a
// 404-redirect) were invisible to it. Generate the whole thing here instead,
// from the same route lists this script already has, so it can't drift.
function writeSitemap(skills) {
  const urls = [
    { loc: `${SITE_URL}/`, priority: "1.0" },
    ...STATIC_ROUTES.map((r) => ({
      loc: `${SITE_URL}/${r.path}`,
      priority:
        r.path === "admissions"
          ? "0.9"
          : r.path === "about" || r.path === "academics"
            ? "0.8"
            : r.path === "life"
              ? "0.7"
              : r.path === "privacy"
                ? "0.2"
                : "0.6",
    })),
    ...skills.map((s) => ({ loc: `${SITE_URL}/skills/${s.slug}`, priority: "0.5" })),
  ];
  const body = urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml);
}

main();
