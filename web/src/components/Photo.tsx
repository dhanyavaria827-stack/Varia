import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

// A defensive <img> that retries a couple of times on a failed load
// (helps with transient mobile network drops) before falling back to a
// plain block instead of the browser's broken-image icon. Fades and
// settles into place on load instead of popping in, matching the easing
// used for every other reveal on the site.
export function Photo({ src, alt, className, style, loading = "lazy", ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const retryTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(retryTimeout.current), []);

  function handleError() {
    if (attempt < 2) {
      retryTimeout.current = window.setTimeout(() => setAttempt((a) => a + 1), 700);
    } else {
      setFailed(true);
    }
  }

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-1.5 bg-parchment-2/60 p-4 text-ink-soft",
          className
        )}
        style={style}
        role="img"
        aria-label={typeof alt === "string" && alt ? alt : "Image failed to load"}
      >
        <ImageOff size={22} aria-hidden="true" />
        {typeof alt === "string" && alt && (
          <span className="max-w-[85%] text-center text-xs leading-snug">{alt}</span>
        )}
      </div>
    );
  }

  return (
    <img
      key={attempt}
      // Cache-bust a failed load without producing a second "?" on a src that
      // already carries a query string, which would make the retry 404 for good.
      src={attempt > 0 && src ? `${src}${src.includes("?") ? "&" : "?"}retry=${attempt}` : src}
      alt={alt}
      className={cn(
        "transition-[filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        loaded ? "scale-100 blur-none" : "photo-skeleton scale-[1.03] blur-sm",
        className
      )}
      style={style}
      loading={loading}
      onError={handleError}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
}
