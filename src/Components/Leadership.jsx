import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { SectionTitle, Sparkle } from "./Decor";
import { leadership } from "../data";

/** A conference-style ID badge swinging from a lanyard */
function Lanyard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.9 }}
      className="relative mx-auto w-[min(76vw,270px)]"
    >
      <motion.div
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 0%" }}
        className="flex flex-col items-center"
      >
        {/* strap */}
        <div className="relative w-28 h-24 sm:h-32" aria-hidden="true">
          <div className="absolute left-3 top-0 bottom-0 w-6 bg-leaf border-x-2 border-ink -skew-x-12 halftone-strap" />
          <div className="absolute right-3 top-0 bottom-0 w-6 bg-leaf border-x-2 border-ink skew-x-12 halftone-strap" />
        </div>
        {/* clip */}
        <div className="-mt-2 w-10 h-7 rounded-md bg-gradient-to-b from-white to-[#aeb4ab] border-2 border-ink z-10" aria-hidden="true" />
        <div className="-mt-1 w-4 h-4 rounded-full border-2 border-ink bg-paper z-10" aria-hidden="true" />

        {/* badge */}
        <div className="-mt-1 w-full win !shadow-[6px_6px_0_var(--color-ink)]">
          <div className="win-bar">
            <span>member_id.card</span>
            <span aria-hidden="true">● ● ●</span>
          </div>
          <div className="sheet shadow-none px-5 pt-5 pb-6 text-center">
            <div className="mx-auto w-14 h-3 rounded-full border-2 border-ink/30 bg-paper" aria-hidden="true" />
            <p className="mt-4 font-display text-6xl text-leaf leading-none">{leadership.org}</p>
            <p className="mt-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest/70">
              {leadership.orgFull}
            </p>
            <p className="mt-3 inline-block dymo">{leadership.chapter}</p>

            <div className="mt-5 border-t-2 border-dashed border-ink/20 pt-4">
              <p className="font-hand text-2xl text-ink/80 leading-none">Kameron Arceneaux</p>
              <p className="mt-2 font-display text-2xl text-forest">{leadership.current}</p>
            </div>

            <div className="mt-4 bg-lime border-2 border-ink rounded-md py-1.5 font-mono text-[0.68rem] font-bold tracking-[0.2em] text-forest">
              ✦ EXEC BOARD ✦
            </div>
            {/* fake barcode */}
            <div
              className="mt-4 h-8 mx-2 opacity-80"
              aria-hidden="true"
              style={{
                background:
                  "repeating-linear-gradient(90deg, var(--color-ink) 0 2px, transparent 2px 4px, var(--color-ink) 4px 5px, transparent 5px 8px, var(--color-ink) 8px 11px, transparent 11px 13px)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <div className="relative">
      <SectionTitle label="03 / giving back" title="LEADERSHIP" seed={29}>
        <Sparkle spin size={34} color="var(--color-lilac)" className="absolute top-4 right-6 sm:right-1/4 drop-shadow-[2px_2px_0_var(--color-ink)]" />
      </SectionTitle>

      <div className="mt-12 grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-12 items-start">
        <Lanyard />

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0.8 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="sheet lined relative p-6 pl-14 sm:p-9 sm:pl-16"
        >
          <div className="tape -top-3 right-14 rotate-3" />
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest/70 flex items-center gap-2">
            <Users size={16} /> NSBE · LSU Chapter
          </p>

          <ol className="mt-6 relative border-l-[3px] border-dashed border-leaf/50 ml-1 space-y-10">
            {leadership.roles.map((role) => (
              <li key={role.title} className="relative pl-7">
                <span
                  className={`absolute -left-[0.8rem] top-1.5 w-5 h-5 rounded-full border-2 border-ink ${
                    role.current ? "bg-lime" : "bg-sheet"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl text-forest leading-tight">{role.title}</h3>
                  {role.current && <span className="font-hand text-2xl text-leaf -rotate-3">← this year!</span>}
                </div>
                <p className="mt-1 font-mono text-sm text-ink/70">{role.period}</p>

                {role.firsts && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {role.firsts.map((f, i) => (
                      <span
                        key={f}
                        className={`px-3 py-1 rounded-full border-2 border-ink font-bold text-sm shadow-[2px_2px_0_var(--color-ink)] ${
                          i % 2 ? "bg-lilac -rotate-2" : "bg-lime rotate-2"
                        }`}
                      >
                        ★ {f}
                      </span>
                    ))}
                  </div>
                )}

                {role.description.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {role.description.map((d) => (
                      <li key={d} className="flex gap-3 leading-relaxed text-ink/85">
                        <Sparkle size={12} color="var(--color-leaf)" className="mt-[0.45rem] shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {role.skills && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.skills.map((s, i) => (
                      <span key={s} className="dymo" style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
