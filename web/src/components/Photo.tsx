import { useState, type ImgHTMLAttributes } from "react";

// A defensive <img> that retries a couple of times on a failed load
// (helps with transient mobile network drops) before falling back to a
// plain block instead of the browser's broken-image icon.
export function Photo({ src, alt, className, style, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);

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
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  );
}
