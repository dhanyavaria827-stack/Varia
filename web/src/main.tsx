import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./lib/theme.tsx";

// BASE_URL is only a real router prefix when it's root-relative (e.g. "/Varia/"
// for a GitHub Pages project site). Builds that use a relative base (e.g. "./",
// as with a portable single-file export) must fall back to "/" — React Router's
// basename has to match how the browser's URL bar actually resolves paths.
const base = import.meta.env.BASE_URL;
const basename = base.startsWith("/") ? base.replace(/\/$/, "") || "/" : "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
