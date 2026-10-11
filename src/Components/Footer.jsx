import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CutoutText, Sparkle, SpinBadge } from "./Decor";
import { links } from "../data";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-leaf border-2 border-ink rounded-2xl p-8 sm:p-14 shadow-[8px_8px_0_var(--color-ink)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "var(--crumple)", backgroundSize: "700px" }} />
      <Sparkle spin size={34} color="var(--color-lime)" className="absolute top-6 right-8" />
      <Sparkle spin size={18} color="var(--color-lime)" className="absolute bottom-10 left-1/2" delay={1.2} />

      <div className="relative grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-lime">05 / contact</p>
          <CutoutText as="h2" text="SAY HI!" seed={51} chips={4} className="mt-3 block text-6xl sm:text-8xl text-sheet" />
          <p className="mt-5 max-w-lg text-lg text-sheet/90">
            Want to talk software, data, robots, or where to eat next? My inbox is always open.
          </p>
          <a
            href={`mailto:${links.email}`}
            className="focus-ring mt-6 inline-block font-mono font-bold text-base sm:text-xl text-lime underline decoration-wavy decoration-2 underline-offset-[6px] break-all hover:text-sheet"
          >
            {links.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${links.email}`} className="bubble focus-ring">
              <Mail size={18} /> Email me
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="bubble bubble-ghost focus-ring">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="bubble bubble-ghost focus-ring">
              <FaGithub size={18} /> GitHub
            </a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer" className="bubble bubble-ghost focus-ring">
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        <SpinBadge text="BUILD ✦ LEARN ✦ EAT ✦ REPEAT ✦ " className="hidden md:block w-40 h-40 rotate-12">
          <span className="text-4xl" aria-hidden="true">☺</span>
        </SpinBadge>
      </div>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink/60">
      <p>© {new Date().getFullYear()} Kameron Arceneaux · made with paper, glue &amp; React</p>
      <p className="flex items-center gap-2">
        <span className="inline-block bg-ink text-lime px-2 py-1 rounded tracking-widest">LAST UPDATED 10.2026</span>
      </p>
    </footer>
  );
}
