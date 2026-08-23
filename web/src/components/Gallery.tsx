import { motion } from "framer-motion";
import { useTilt } from "@/lib/useTilt";
import { Photo } from "@/components/Photo";

interface Photo {
  src: string;
  caption: string;
  rotate: number;
}

function GalleryPhoto({ photo, index }: { photo: Photo; index: number }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(14);

  return (
    <motion.figure
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 32, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{
        rotate: 0,
        scale: 1.06,
        z: 30,
        zIndex: 10,
        transition: { type: "spring", stiffness: 140, damping: 16 },
      }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="w-40 shrink-0 border-8 border-parchment bg-parchment p-0 shadow-soft sm:w-48"
      style={{
        boxShadow: "0 10px 30px -10px rgba(36,26,16,0.35)",
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
    >
      <div className="overflow-hidden">
        <Photo
          src={photo.src}
          alt={photo.caption}
          className="aspect-square w-full object-cover"
          style={{ filter: "sepia(0.08) saturate(1.2) contrast(1.03)" }}
        />
      </div>
      <figcaption className="mt-2 pb-1 text-center font-display text-sm italic text-ink-soft">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

export function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8 [perspective:1400px] sm:gap-10">
      {photos.map((p, i) => (
        <GalleryPhoto key={p.src} photo={p} index={i} />
      ))}
    </div>
  );
}
