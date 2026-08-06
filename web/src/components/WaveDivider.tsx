// A soft, organic section transition — the kind of generated wave/blob
// divider Haikei is known for — instead of a hard rectangular section break.
export function WaveDivider({
  flip = false,
  className = "",
  color = "var(--color-parchment-2)",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none -mb-px w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
      >
        <path
          d="M0,32 C240,90 480,0 720,28 C960,56 1200,96 1440,40 L1440,110 L0,110 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
