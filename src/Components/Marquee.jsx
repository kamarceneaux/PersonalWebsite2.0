import { Sparkle } from "./Decor";

const words = ["Software Engineering", "Data Pipelines", "Robotics", "Full-Stack", "Cloud", "AI Agents", "Pickleball", "Good Food", "Always Learning"];

export default function Marquee({ tilt = "-rotate-2" }) {
  const row = [...words, ...words];
  return (
    <div className={`relative -mx-4 sm:-mx-8 my-6 ${tilt}`} aria-hidden="true">
      <div className="overflow-hidden border-y-2 border-ink bg-leaf py-3 shadow-[0_6px_0_rgb(28_33_27/0.15)]">
        <div className="flex w-max animate-marquee">
          {row.map((w, i) => (
            <span key={i} className="flex items-center gap-5 pr-5 font-display text-2xl sm:text-3xl text-sheet whitespace-nowrap">
              {w}
              <Sparkle size={20} color="var(--color-lime)" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
