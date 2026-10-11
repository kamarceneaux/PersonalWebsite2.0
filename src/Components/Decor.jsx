import { useId } from "react";
import { motion } from "framer-motion";

// Deterministic jitter so the cut-out letters look hand-placed but never shift between renders.
const jitter = (i, seed = 0) => {
  const x = Math.sin((i + 1) * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * Letters that look clipped out of magazines and glued down one by one.
 * `chips` puts every Nth letter on a paper scrap for a ransom-note feel.
 */
export function CutoutText({ text, className = "", seed = 1, chips = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  let n = 0;
  return (
    <Tag className={`font-display leading-[0.95] ${className}`} aria-label={text}>
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0" aria-hidden="true">
          {[...word].map((ch) => {
            const i = n++;
            const r = (jitter(i, seed) - 0.5) * 18;
            const y = (jitter(i, seed + 3) - 0.5) * 0.12;
            const s = 0.88 + jitter(i, seed + 5) * 0.24;
            const chip = chips && i % chips === chips - 1;
            return (
              <span
                key={i}
                className={`inline-block ${chip ? "bg-ink text-lime px-[0.08em] mx-[0.03em] shadow-[2px_2px_0_rgb(0_0_0/0.25)]" : "[text-shadow:0.03em_0.04em_0_rgb(28_33_27/0.18)]"}`}
                style={{ transform: `translateY(${y}em) rotate(${r}deg) scale(${s})` }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/** Four-point Y2K sparkle */
export function Sparkle({ className = "", size = 28, color = "currentColor", spin = false, delay = 0 }) {
  const svg = (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={spin ? "" : className}>
      <path
        d="M12 0c.6 6.4 5 11 12 12-7 1-11.4 5.6-12 12-.6-6.4-5-11-12-12C7 11 11.4 6.4 12 0z"
        fill={color}
      />
    </svg>
  );
  if (!spin) return svg;
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{ rotate: [0, 90, 0], scale: [1, 0.75, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden="true"
    >
      {svg}
    </motion.span>
  );
}

export function Paperclip({ className = "" }) {
  return (
    <svg viewBox="0 0 28 72" className={className} aria-hidden="true">
      <path
        d="M20 22v30a8 8 0 0 1-16 0V12a6 6 0 0 1 12 0v38a2.5 2.5 0 0 1-5 0V20"
        fill="none"
        stroke="#8e958c"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M20 22v30a8 8 0 0 1-16 0V12a6 6 0 0 1 12 0v38"
        fill="none"
        stroke="#e5e8e2"
        strokeWidth="0.9"
        strokeLinecap="round"
        transform="translate(-0.6 -0.6)"
      />
    </svg>
  );
}

/** Round sticker with text running around the rim */
export function SpinBadge({ text, className = "", children }) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={`relative rounded-full bg-lime border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={`badge-${id}`} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="font-mono" fontSize="9.5" fontWeight="700" letterSpacing="1.5" fill="var(--color-forest)">
          <textPath href={`#badge-${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

/** Section heading: a typewritten label plus a big cut-out title */
export function SectionTitle({ label, title, seed, className = "", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-forest/70 mb-3">
        {label}
      </p>
      <CutoutText as="h2" text={title} seed={seed} chips={5} className="text-5xl sm:text-7xl md:text-8xl text-leaf" />
      {children}
    </motion.div>
  );
}
