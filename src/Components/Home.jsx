import { motion } from "framer-motion";
import { FileText, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CutoutText, Sparkle, Paperclip, SpinBadge } from "./Decor";
import { links } from "../data";

export default function Home() {
  return (
    <div className="relative min-h-[92vh] pt-28 pb-16 grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-center">
      {/* Left: the "I'm Kameron" page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative order-2 md:order-1"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-sm font-bold text-leaf">2026</span>
          <span className="h-[2px] w-10 bg-ink/30" />
          <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-forest/70">Portfolio</span>
        </div>

        <h1 className="relative">
          <CutoutText text="I'M" seed={2} className="block text-6xl sm:text-7xl md:text-8xl text-leaf" />
          <CutoutText text="KAMERON" seed={4} className="block text-[3.6rem] sm:text-8xl lg:text-[8.5rem] text-leaf -mt-1" />
          <Sparkle spin size={36} color="var(--color-lime)" className="absolute -top-4 left-28 sm:left-36 drop-shadow-[1px_1px_0_var(--color-ink)]" />
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
          I'm a software engineer studying <strong>Computer Science (Data Science &amp; Analytics)</strong> at{" "}
          <strong>LSU</strong> with a <strong>Robotics Engineering</strong> minor. I just wrapped my{" "}
          <mark className="bg-lime/70 px-1 rounded-sm">second summer at Chevron</mark>, and I build web apps for LSU ITS
          during the school year.
        </p>
        <p className="mt-3 font-hand text-2xl text-forest -rotate-1">
          I like building things that save people time. Robots count too.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="bubble focus-ring">
            <FileText size={18} /> Resume
          </a>
          <a href="#contact" className="bubble bubble-ghost focus-ring">
            Say hi ✦
          </a>
          <div className="flex gap-2 ml-1">
            <IconLink href={links.linkedin} label="LinkedIn">
              <FaLinkedin size={20} />
            </IconLink>
            <IconLink href={links.github} label="GitHub">
              <FaGithub size={20} />
            </IconLink>
          </div>
        </div>
      </motion.div>

      {/* Right: taped polaroid headshot */}
      <motion.div
        initial={{ opacity: 0, rotate: 8, y: 40 }}
        animate={{ opacity: 1, rotate: 3, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
        className="relative order-1 md:order-2 mx-auto w-[min(66vw,340px)]"
      >
        {/* sticky note behind the photo */}
        <div className="absolute -left-10 -top-8 w-40 h-36 bg-lime -rotate-12 shadow-md hidden sm:block" />

        <div className="sheet relative p-3 pb-14 bg-white rotate-0">
          <Paperclip className="absolute -top-8 right-8 w-7 h-[4.5rem] z-10 rotate-6" />
          <div className="aspect-[4/5] overflow-hidden bg-mint">
            <img
              src="/headshot.jpg"
              alt="Kameron Arceneaux smiling in a black suit and lavender tie"
              className="w-full h-full object-cover object-[50%_18%]"
              fetchPriority="high"
            />
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-3xl text-ink/80">
            hi, that's me!
          </p>
        </div>

        <div className="tape -bottom-3 -left-6 rotate-[-35deg]" />

        <SpinBadge
          text="SOFTWARE ✦ DATA ✦ ROBOTICS ✦ "
          className="absolute -bottom-10 -right-6 sm:-right-12 w-28 h-28 -rotate-6"
        >
          <span className="font-display text-2xl text-forest">LSU</span>
        </SpinBadge>

        <span className="absolute -top-5 -left-4 sm:left-auto sm:-right-6 dymo rotate-6 text-[0.7rem]">
          SWE Intern @ Chevron ×2
        </span>
        <Sparkle size={22} color="var(--color-leaf)" className="absolute top-1/3 -left-8" />
      </motion.div>

      <a
        href="#about"
        className="focus-ring hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase text-forest/70 hover:text-leaf"
      >
        <ArrowDown size={14} className="animate-bounce" /> scroll
      </a>
    </div>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="focus-ring grid place-items-center w-12 h-12 rounded-full bg-sheet border-2 border-ink shadow-[0_3px_0_var(--color-ink)] hover:-translate-y-0.5 hover:bg-lime transition-all"
    >
      {children}
    </a>
  );
}
