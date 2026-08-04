import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// A defensive <img> that retries a couple of times on a failed load
// (helps with transient mobile network drops) before falling back to a
// plain block instead of the browser's broken-image icon. Fades and
// settles into place on load instead of popping in, matching the easing
// used for every other reveal on the site.
export function Photo({ src, alt, className, style, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function handleError() {
    if (attempt < 2) {
      window.setTimeout(() => setAttempt((a) => a + 1), 700);
    } else {
      setFailed(true);
    }
  }

  if (failed) {
    return <div className={className} style={style} aria-hidden="true" />;
  }

  return (
    <img
      key={attempt}
      src={attempt > 0 ? `${src}?retry=${attempt}` : src}
      alt={alt}
      className={cn(
        "transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        loaded ? "opacity-100 scale-100 blur-none" : "opacity-0 scale-[1.03] blur-sm",
        className
      )}
      style={style}
      onError={handleError}
      onLoad={() => setLoaded(true)}
      {...rest}
    />
  );
}
