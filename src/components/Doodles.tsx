// Hand-drawn SVG accents. Stroke uses currentColor so they can be tinted with text-* classes.
type P = { className?: string };

export const Logo = ({ className }: P) => (
  <span className={`font-display font-extrabold tracking-tight ${className ?? ""}`}>
    the<span className="text-orange">/</span>bench
  </span>
);

export const CurlyArrow = ({ className }: P) => (
  <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden>
    <path d="M8 60C30 20 80 10 108 34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M94 31L108 34L103 20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Squiggle = ({ className }: P) => (
  <svg viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
    <path d="M2 10c16-8 24 8 40 0s24-8 40 0 24 8 40 0 24-8 40 0 24 8 34 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const Circle = ({ className }: P) => (
  <svg viewBox="0 0 220 90" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
    <path d="M30 20C80 0 200 6 212 40c10 30-90 46-150 40C8 74-2 40 40 20 70 6 140 6 170 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Star = ({ className }: P) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
    <path d="M20 3v34M3 20h34M8 8l24 24M32 8L8 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Bench = ({ className }: P) => (
  <svg viewBox="0 0 160 70" fill="none" className={className} aria-hidden>
    <path d="M10 22c45-3 95-3 140 1M8 38c48-2 98-2 144 1" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <path d="M28 40l-4 26M132 40l4 26M30 22l-1 16M130 22l1 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
