import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Sparkle } from "./Decor";
import { skills } from "../data";

const palettes = ["bg-lime", "bg-mint", "bg-sheet", "bg-lilac/70"];

export default function Skills() {
  let n = 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="win relative"
    >
      <div className="win-bar">
        <span>toolbox.zip</span>
        <span aria-hidden="true">_ □ ×</span>
      </div>
      <div className="sheet shadow-none p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl text-leaf">sticker sheet</h2>
          <span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-forest border-2 border-forest rounded-full px-3 py-1 rotate-2">
            <BadgeCheck size={16} /> AZ-900 Certified
          </span>
        </div>

        <div className="mt-8 space-y-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-forest/70 mb-3 flex items-center gap-2">
                <Sparkle size={12} color="var(--color-leaf)" /> {group}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {items.map((s) => {
                  const i = n++;
                  return (
                    <motion.span
                      key={s}
                      whileHover={{ rotate: 0, scale: 1.08, y: -3 }}
                      style={{ rotate: ((i * 37) % 7) - 3 }}
                      className={`cursor-default px-3.5 py-1.5 rounded-full border-2 border-ink font-semibold text-sm shadow-[2px_2px_0_var(--color-ink)] ${palettes[i % palettes.length]}`}
                    >
                      {s}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
