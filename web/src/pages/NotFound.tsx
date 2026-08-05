import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/lib/useDocumentTitle";

export function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-7xl font-medium text-camel-600 dark:text-brass-400"
      >
        404
      </motion.span>
      <h1 className="mt-4 font-display text-2xl font-medium text-ink">
        This page wandered off the path.
      </h1>
      <p className="mt-2 text-ink-soft">Let's get you back to Gurukulam.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-camel-600 px-6 py-3 text-sm font-medium uppercase tracking-[0.06em] text-camel-50 shadow-soft transition hover:bg-camel-700"
      >
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  );
}
