import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <motion.span
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-7xl font-semibold text-saffron-500"
      >
        404
      </motion.span>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink dark:text-white">
        This page wandered off the path.
      </h1>
      <p className="mt-2 text-ink-soft dark:text-indigo-200">
        Let's get you back to solid ground.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-500"
      >
        <ArrowLeft size={15} />
        Back to home
      </Link>
    </div>
  );
}
