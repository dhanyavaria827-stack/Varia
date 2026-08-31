import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./lib/theme.tsx";
import { ErrorBoundary } from "./components/ErrorBoundary.tsx";

// A standalone build (opened directly via file://, e.g. a double-clicked
// export) has no server to resolve real paths against, so it needs
// hash-based routing (#/about) instead of the History API.
const isStandalone = import.meta.env.VITE_STANDALONE === "true";
const Router = isStandalone ? HashRouter : BrowserRouter;

// BASE_URL is only a real router prefix when it's root-relative (e.g. "/Varia/"
// for a GitHub Pages project site). Builds that use a relative base (e.g. "./",
// as with a portable single-file export) must fall back to "/" — React Router's
// basename has to match how the browser's URL bar actually resolves paths.
const base = import.meta.env.BASE_URL;
const basename = base.startsWith("/") ? base.replace(/\/$/, "") || "/" : "/";

// The static build bakes real prerendered markup into #root for crawlers
// and no-JS visitors (see scripts/prerender.mjs). createRoot() doesn't
// treat that as hydration — it silently layers its own tree on top
// without discarding the old one, which left the prerendered copy's
// elements in the DOM with no real React event handlers attached (e.g.
// tab clicks doing nothing). Clearing it first forces a genuinely fresh
// mount, same as when #root was always empty.
const rootEl = document.getElementById("root")!;
rootEl.innerHTML = "";

createRoot(rootEl).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Router basename={isStandalone ? undefined : basename}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Router>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>
);
