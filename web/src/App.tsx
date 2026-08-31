import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Academics } from "@/pages/Academics";
import { Life } from "@/pages/Life";
import { SkillDetail } from "@/pages/SkillDetail";
import { Admissions } from "@/pages/Admissions";
import { Contact } from "@/pages/Contact";
import { Privacy } from "@/pages/Privacy";
import { NotFound } from "@/pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-camel-600 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-camel-50 focus:shadow-soft"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/life" element={<Life />} />
            <Route path="/skills/:slug" element={<SkillDetail />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
