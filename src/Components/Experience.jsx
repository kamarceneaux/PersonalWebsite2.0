import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionTitle, Sparkle } from "./Decor";
import { experiences } from "../data";

const tilts = [-1, 0.8, -0.6, 1.1];

export default function Experience() {
  return (
    <div className="relative">
      <SectionTitle label="02 / where I've worked" title="WORK" seed={23}>
        <Sparkle spin size={40} color="var(--color-lime)" className="absolute top-6 right-4 sm:right-24 drop-shadow-[2px_2px_0_var(--color-ink)]" />
      </SectionTitle>

      <ol className="mt-14 space-y-14 sm:space-y-16">
        {experiences.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[index % tilts.length] }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className={`sheet relative p-6 sm:p-9 ${index % 2 ? "md:ml-16" : "md:mr-16"}`}
          >
            <div className={`tape -top-3 ${index % 2 ? "right-12 rotate-3" : "left-12 -rotate-3"}`} />

            {/* metric sticker */}
            <div className="absolute -top-7 right-4 sm:-right-6 rotate-[8deg] z-10">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-lime border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] grid place-items-center text-center p-3">
                <div>
                  <p className="font-display text-2xl sm:text-3xl text-forest leading-none">{exp.stat.value}</p>
                  <p className="mt-1 font-mono text-[0.6rem] sm:text-[0.65rem] font-bold uppercase leading-tight text-forest">
                    {exp.stat.label}
                  </p>
                </div>
              </div>
            </div>

            <div className="pr-24 sm:pr-28">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block font-display text-3xl sm:text-4xl text-leaf border-[3px] border-leaf rounded-lg px-3 py-0.5 -rotate-2 mix-blend-multiply">
                  {exp.company}
                </span>
                {exp.tag && <span className="font-hand text-2xl text-forest rotate-[-4deg]">← {exp.tag}!</span>}
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold">{exp.role}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-ink/70">
                <span>{exp.period}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {exp.location}
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3 leading-relaxed text-ink/85">
                  <Sparkle size={12} color="var(--color-leaf)" className="mt-[0.45rem] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={skill} className="dymo" style={{ transform: `rotate(${(i % 3) - 1}deg)` }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
