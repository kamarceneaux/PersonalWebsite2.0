import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Bot, BarChart3, CalendarCheck, Wallet, Play, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SectionTitle, Sparkle, Paperclip } from "./Decor";
import { projects } from "../data";

const icons = { bot: Bot, chart: BarChart3, calendar: CalendarCheck, wallet: Wallet };
const tilts = [-2, 1.5, -1, 2, -1.5];

function Cover({ project, large = false }) {
  if (project.video && !large) {
    return (
      <div className="relative aspect-video overflow-hidden bg-ink">
        <img
          src={`https://img.youtube.com/vi/${project.video}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover saturate-[0.85] contrast-105"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-lime border-2 border-ink shadow-[2px_2px_0_var(--color-ink)]">
            <Play size={22} className="text-forest translate-x-0.5" fill="currentColor" />
          </span>
        </span>
      </div>
    );
  }
  const Icon = icons[project.icon] ?? Bot;
  return (
    <div className="relative aspect-video halftone grid place-items-center overflow-hidden">
      <Sparkle size={26} color="var(--color-leaf)" className="absolute top-4 left-5" />
      <Sparkle size={16} color="var(--color-forest)" className="absolute bottom-5 right-8" />
      <span className="grid place-items-center w-24 h-24 rounded-2xl bg-sheet border-2 border-ink shadow-[4px_4px_0_var(--color-ink)] -rotate-6">
        <Icon size={46} className="text-leaf" strokeWidth={1.8} />
      </span>
      <span className="absolute bottom-3 left-4 font-mono text-[0.65rem] font-bold tracking-widest uppercase text-forest/70">
        {project.skills[0]} · {project.year}
      </span>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="relative">
      <SectionTitle label="04 / things I've built" title="PROJECTS" seed={37}>
        <p className="mt-4 font-hand text-2xl text-forest -rotate-1">click a polaroid for the full story →</p>
      </SectionTitle>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ rotate: tilts[i % tilts.length] }}
            className="focus-ring group relative text-left bg-white p-3 pb-5 shadow-[0_14px_28px_-14px_rgb(28_33_27/0.5),0_2px_6px_rgb(28_33_27/0.12)]"
          >
            {i % 2 === 0 ? (
              <Paperclip className="absolute -top-7 right-6 w-6 h-16 z-10 rotate-6" />
            ) : (
              <div className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2 w-24" />
            )}
            {project.award && (
              <span className="absolute -top-4 -left-3 z-10 dymo bg-leaf -rotate-6 flex items-center gap-1">
                <Trophy size={12} /> Award winner
              </span>
            )}

            <Cover project={project} />

            <div className="px-1 pt-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl leading-tight text-forest group-hover:text-leaf transition-colors">
                  {project.title}
                </h3>
                <span className="font-hand text-xl text-ink/60 shrink-0">'{project.year.slice(2)}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">{project.shortDesc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.skills.slice(0, 3).map((s) => (
                  <span key={s} className="font-mono text-[0.68rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-mint text-forest border border-forest/20">
                    {s}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span className="font-mono text-[0.68rem] font-bold px-2 py-0.5 text-ink/50">+{project.skills.length - 3}</span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-forest/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ scale: 0.85, y: 30, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="win w-full max-w-3xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="win-bar shrink-0">
                <span className="truncate">{selected.id}.exe</span>
                <button
                  onClick={() => setSelected(null)}
                  className="focus-ring grid place-items-center w-6 h-6 rounded bg-sheet text-ink border-2 border-ink leading-none hover:bg-lime"
                  aria-label="Close"
                  autoFocus
                >
                  ×
                </button>
              </div>

              <div className="sheet overflow-y-auto p-5 sm:p-8 shadow-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-bold tracking-widest uppercase text-forest/70">{selected.year}</p>
                    <h2 className="font-display text-4xl sm:text-5xl text-leaf leading-tight">{selected.title}</h2>
                    {selected.award && <p className="mt-1 font-hand text-2xl text-forest">🏆 {selected.award}</p>}
                  </div>
                </div>

                <div className="mt-6 border-2 border-ink rounded-lg overflow-hidden">
                  {selected.video ? (
                    <div className="aspect-video bg-ink">
                      <iframe
                        src={`https://www.youtube.com/embed/${selected.video}`}
                        title={selected.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <Cover project={selected} large />
                  )}
                </div>

                <h3 className="mt-8 font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest/70">About</h3>
                <p className="mt-2 leading-relaxed text-ink/85">{selected.fullDesc}</p>

                {selected.highlights && (
                  <>
                    <h3 className="mt-6 font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest/70">Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {selected.highlights.map((h) => (
                        <li key={h} className="flex gap-3 leading-relaxed text-ink/85">
                          <Sparkle size={12} color="var(--color-leaf)" className="mt-[0.45rem] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {selected.story && (
                  <>
                    <h3 className="mt-6 font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest/70">The story</h3>
                    <p className="mt-2 leading-relaxed text-ink/85">{selected.story}</p>
                  </>
                )}

                <h3 className="mt-6 font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest/70">Built with</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.skills.map((s) => (
                    <span key={s} className="dymo">
                      {s}
                    </span>
                  ))}
                </div>

                {selected.links.length > 0 && (
                  <div className="mt-8 pt-6 border-t-2 border-dashed border-ink/20 flex flex-wrap gap-3">
                    {selected.links.map((link) => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="bubble focus-ring text-sm">
                        {link.name === "GitHub" ? <FaGithub size={16} /> : <ExternalLink size={16} />}
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
