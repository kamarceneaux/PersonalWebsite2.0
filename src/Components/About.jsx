import { motion } from "framer-motion";
import { GraduationCap, Utensils, Lightbulb, Camera } from "lucide-react";
import { SectionTitle, Sparkle, Paperclip } from "./Decor";
import { education } from "../data";

function PaddleIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <ellipse cx="10" cy="9" rx="6.5" ry="7" transform="rotate(-35 10 9)" />
      <path d="M14.5 13.5l5 5" strokeWidth="3" />
      <circle cx="19.5" cy="5" r="2" />
    </svg>
  );
}

const interests = [
  {
    title: "Pickleball",
    note: "Probably on a court right now. Down for doubles anytime.",
    icon: <PaddleIcon />,
    color: "bg-lime",
    rotate: -3,
  },
  {
    title: "Eating",
    note: "A real foodie. Send me your best restaurant recs.",
    icon: <Utensils size={26} />,
    color: "bg-lilac",
    rotate: 2,
  },
  {
    title: "Learning",
    note: "Always picking up something new, whether it's a framework or a random hobby.",
    icon: <Lightbulb size={26} />,
    color: "bg-mint",
    rotate: -1.5,
  },
];

export default function About() {
  return (
    <div className="relative">
      <SectionTitle label="01 / about me" title="ABOUT" seed={11} />

      <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
        {/* Education: a report card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.2 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="sheet lined relative p-6 pl-14 sm:p-8 sm:pl-16"
        >
          <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-2" />
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest/70 flex items-center gap-2">
                <GraduationCap size={16} /> Education
              </p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl text-forest leading-tight">{education.school}</h3>
              <p className="mt-1 font-semibold">
                {education.degree} · {education.concentration}
              </p>
              <p className="text-ink/75">Minor in {education.minor}</p>
            </div>
            <div className="shrink-0 rotate-6 rounded-full border-[3px] border-leaf text-leaf w-24 h-24 grid place-items-center text-center font-mono font-bold leading-tight">
              <span>
                <span className="block text-[0.6rem] tracking-widest">GPA</span>
                <span className="block text-xl">{education.gpa}</span>
              </span>
            </div>
          </div>

          <p className="mt-5 font-hand text-2xl text-leaf">Graduating {education.grad} ✦</p>

          <div className="mt-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest/70 mb-2">Coursework</p>
            <ul className="space-y-1">
              {education.coursework.map((c) => (
                <li key={c} className="leading-8">
                  <span className="text-leaf font-bold mr-2">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-forest/70 mb-3">Orgs</p>
            <div className="flex flex-wrap gap-2">
              {education.orgs.map((o) => (
                <span key={o} className="dymo">
                  {o}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Off the clock */}
        <div className="relative">
          <h3 className="font-display text-4xl text-forest flex items-center gap-3">
            Off the clock <Sparkle spin size={26} color="var(--color-leaf)" />
          </h3>
          <p className="mt-2 text-ink/80 max-w-md">
            When I'm not writing code you'll find me cheering on the Pelicans, Saints, and LSU Tigers, or doing one of these:
          </p>

          <div className="mt-8 space-y-6">
            {interests.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ rotate: it.rotate }}
                className={`relative flex items-start gap-4 p-5 border-2 border-ink rounded-xl ${it.color} shadow-[5px_5px_0_var(--color-ink)] ${i % 2 ? "ml-6 sm:ml-12" : ""}`}
              >
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-full bg-sheet border-2 border-ink text-forest">
                  {it.icon}
                </span>
                <div>
                  <p className="font-display text-2xl text-ink">{it.title}</p>
                  <p className="text-ink/80 leading-snug">{it.note}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* teaser for the future photo section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-10 ml-auto w-fit max-w-xs sheet px-5 py-4 rotate-2"
          >
            <Paperclip className="absolute -top-6 left-6 w-6 h-16 -rotate-12" />
            <p className="font-hand text-2xl leading-tight text-ink/85 flex items-center gap-2">
              <Camera size={20} className="text-leaf shrink-0" />
              I also fly drones and shoot photos. Gallery coming soon™
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
