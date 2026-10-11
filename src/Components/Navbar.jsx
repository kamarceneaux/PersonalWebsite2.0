import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Work", id: "experience" },
  { name: "Leadership", id: "leadership" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 inset-x-0 z-50 px-4">
      <div
        className={`mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border-2 border-ink bg-sheet/95 backdrop-blur pl-2 pr-2 py-1.5 transition-shadow duration-300 ${
          scrolled ? "shadow-[4px_4px_0_var(--color-ink)]" : "shadow-[2px_2px_0_var(--color-ink)]"
        }`}
      >
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-full" onClick={() => setIsOpen(false)}>
          <span className="grid place-items-center w-10 h-10 rounded-full bg-leaf text-lime font-display text-lg -rotate-6 border-2 border-ink">
            KA
          </span>
          <span className="hidden sm:inline font-mono text-xs font-bold tracking-wider">kameron.exe</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="focus-ring px-4 py-2 rounded-full font-semibold text-sm hover:bg-lime transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus-ring md:hidden grid place-items-center w-10 h-10 rounded-full hover:bg-lime"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-5xl mt-2 win"
          >
            <div className="win-bar">
              <span>menu.txt</span>
              <span aria-hidden="true">_ □ ×</span>
            </div>
            <div className="p-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="focus-ring px-4 py-3 rounded-lg font-display text-2xl text-leaf hover:bg-lime"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
