import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

// 60 frames of the school mark (notebook, pencil, hand) coming apart, sampled
// at 10fps from a ~6s source clip. Loaded lazily — only once this section is
// close to the viewport — and scrubbed frame-by-frame against scroll
// position rather than played as a video, so there's no autoplay cost and no
// decode work until someone actually scrolls here.
const frameModules = import.meta.glob("@/assets/explode-frames/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const FRAME_URLS = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key]);
const FRAME_COUNT = FRAME_URLS.length;
const LAST_FRAME = FRAME_COUNT - 1;

// The flat backdrop the frames were generated on — sampled directly from the
// source video (RGB 208,208,208). Matching this exactly behind the canvas is
// what makes the object read as floating rather than a photo with an edge.
const FRAME_BG = "#d0d0d0";

export function ExplodedEmblem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, LAST_FRAME]);

  function draw(index: number) {
    const canvas = canvasRef.current;
    const img = imagesRef.current[Math.round(index)];
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = FRAME_BG;
    ctx.fillRect(0, 0, w, h);

    const imgAspect = img.width / img.height;
    const boxAspect = w / h;
    let dw: number, dh: number, dx: number, dy: number;
    if (imgAspect > boxAspect) {
      dw = w;
      dh = w / imgAspect;
      dx = 0;
      dy = (h - dh) / 2;
    } else {
      dh = h;
      dw = h * imgAspect;
      dy = 0;
      dx = (w - dw) / 2;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let cancelled = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || cancelled) return;
        io.disconnect();

        let loaded = 0;
        FRAME_URLS.forEach((src, i) => {
          const img = new Image();
          img.decoding = "async";
          img.onload = () => {
            if (cancelled) return;
            imagesRef.current[i] = img;
            loaded++;
            if (i === 0) draw(prefersReducedMotion ? LAST_FRAME : 0);
            if (loaded === FRAME_COUNT) setReady(true);
          };
          img.src = src;
        });
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMotionValueEvent(frameIndex, "change", (v) => {
    if (!prefersReducedMotion) draw(v);
  });

  useEffect(() => {
    if (ready && prefersReducedMotion) draw(LAST_FRAME);
  }, [ready, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: prefersReducedMotion ? "auto" : "220vh" }}
    >
      <div
        className="sticky top-0 flex h-[85vh] flex-col items-center justify-center gap-6 overflow-hidden px-5 sm:h-screen"
        style={{ background: FRAME_BG }}
      >
        {/* This section keeps a fixed light backdrop matching the generated
            frames regardless of site theme, so text colors are hardcoded
            here rather than using the theme-aware ink tokens (which flip to
            a light color in dark mode and would vanish against this gray). */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6b5842]/80">
            Bhantar, taken apart
          </span>
          <h2 className="mt-2 font-display text-2xl font-medium text-[#241a10] sm:text-3xl">
            One page, one pencil, one hand
          </h2>
        </motion.div>

        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="aspect-video w-full max-w-2xl"
        />
      </div>
    </section>
  );
}
