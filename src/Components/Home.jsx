import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h2 className="text-green-600 font-semibold text-lg tracking-wide">
          Software Engineer | Aspiring Perception Engineer
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900" style={{marginBottom: "12px"}}>
          Hi, I'm <span className="text-green-600">Kameron Arceneaux</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          I am a Computer Science student at Louisiana State University specializing in Data Science and Analytics with a minor in Robotics Engineering. 
          Currently, I work part-time as a <span className="font-semibold text-green-700">Student Software Developer at LSU ITS </span>   
           and I am joining <span className="font-semibold text-green-700">Chevron in Summer 2026</span> as a Software Engineering Intern.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          I love building new solutions with technology and have a passion for lifelong learning. 
          Outside of coding, I enjoy watching sports (Pelicans, Saints, LSU Tigers), playing video games, 
          and spending time outdoors.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start p-6">
          <SocialLink href="https://www.linkedin.com/in/kamarceneaux/" icon={<FaLinkedin size={24} />} label="LinkedIn" />
          <SocialLink href="https://github.com/kamarceneaux" icon={<FaGithub size={24} />} label="GitHub" />
          <SocialLink href="mailto:kameron.arceneaux@outlook.com" icon={<Mail size={24} />} label="Email" />
          <a 
            href="https://kameronpublicwebsite.blob.core.windows.net/public/ArceneauxKameron_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1 font-medium"
            style={{padding: "8px"}}
          >
            <FileText size={22} /> View My Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-green-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <img 
            src="https://kameronpublicwebsite.blob.core.windows.net/public/HeadshotUpdate.png" 
            alt="Kameron Arceneaux" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-white text-gray-700 rounded-full shadow-md hover:text-green-600 hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center"
      aria-label={label}
      style={{padding: "8px"}}
    >
      {icon}
    </a>
  );
}
