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
// index.html as a template, with just the <title>/description/canonical/
// OG/Twitter tags swapped for that route. GitHub Pages resolves a request
// for "/about" to "about.html" directly, so these routes now return a
// genuine 200 with route-specific metadata baked in — the app still boots
// and renders normally from the same empty #root once the bundle loads.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const SITE_URL = "https://dhanyavaria827-stack.github.io/Varia";
const SITE_NAME = "Gurukulam, Surat";

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

  for (const route of STATIC_ROUTES) {
    const html = renderPage(template, {
      routePath: route.path,
      title: route.title,
      description: route.description,
    });
    fs.writeFileSync(path.join(distDir, `${route.path}.html`), html);
  }

  const skills = await loadSkillHistory();
  const skillsDir = path.join(distDir, "skills");
  fs.mkdirSync(skillsDir, { recursive: true });
  for (const entry of skills) {
    const html = renderPage(template, {
      routePath: `skills/${entry.slug}`,
      title: entry.name,
      description: truncate(entry.history[0]),
    });
    fs.writeFileSync(path.join(skillsDir, `${entry.slug}.html`), html);
  }

  writeSitemap(skills);

  console.log(
    `prerender: wrote ${STATIC_ROUTES.length} route pages and ${skills.length} skill pages with route-specific metadata.`
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
