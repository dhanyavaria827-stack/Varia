import { motion } from "framer-motion";

interface Photo {
  src: string;
  caption: string;
  rotate: number;
}

export function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-10">
      {photos.map((p, i) => (
        <motion.figure
          key={p.src}
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="w-40 shrink-0 border-8 border-parchment bg-parchment p-0 shadow-soft sm:w-48"
          style={{ boxShadow: "0 10px 30px -10px rgba(36,26,16,0.35)" }}
        >
          <div className="overflow-hidden">
            <img
              src={p.src}
              alt={p.caption}
              className="aspect-square w-full object-cover"
              style={{ filter: "sepia(0.35) saturate(1.05) contrast(1.03)" }}
            />
          </div>
          <figcaption className="mt-2 pb-1 text-center font-display text-sm italic text-ink-soft">
            {p.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
