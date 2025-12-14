import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Susiki",
    year: "2024",
    shortDesc: "Academic assistant and planning app for students.",
    fullDesc: "Susiki is an academic assistant and planning app created by me. It offers features like task and exam management, and organizes events based on enrolled classes. It aims to simplify academic planning for students seeking a more cohesive tool.",
    story: "As I finished my first year of college, I sometimes struggled with ways to manage my academic workload at times. Constantly switching from app to app just to find one that I felt met my needs. This inspired me to make my own version of an app, that I felt like I would use and maybe others would too. I’ve called this app “Susiki” and it’s designed to be an academic assistant app, with features such as task and exam management and able to organize events based enrolled classes. This was a successful personal project, that required many months of planning and technical work. The tech stack used was React (TypeScript) and Spring Boot (Java), built on top of a MySQL database. I also gained cloud experience with AWS for the deployment of the backend, frontend, web certificates and domain management. https://susiki.com (retired the domain in September 2025)",
    skills: ["React", "Spring Boot", "AWS", "Figma", "Java", "TypeScript"],
    video: "https://www.youtube.com/embed/wi1DtOC0xzs?si=-lKp5E8DFGGZVsmx",
    links: [
      { name: "Live Demo", url: "https://susiki.com" }
    ]
  },
  {
    id: 2,
    title: "InPocket",
    year: "2021",
    shortDesc: "Personal finance tracker desktop application.",
    fullDesc: "InPocket is a personal finance tracker that helps users manage their expenses. It allows users to input their expenses and income, providing a visual representation of their financial status.",
    story: "A desktop application that allows users to manage finances using a digital money log. Features include transaction logging, graphs, and statistics. This project was awarded best app in The Congressional App Challenge for district LA-06 in 2021.",
    skills: ["Python", "SQLite", "Tkinter"],
    video: "https://www.youtube.com/embed/zKJH-ljp5fQ?si=ukvtDj7DUjllzAN-",
    links: [
      { name: "GitHub", url: "https://github.com/kamarceneaux/InPocket" },
      { name: "InPocket In the News 👀", url: "https://www.brproud.com/news/local-news/denham-springs-high-school-student-wins-2021-congressional-app-challenge/" }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedProject(project)}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-green-50 group"
            whileHover={{ y: -5 }}
            style={{padding: "32px"}}
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4 relative">
               {/* Thumbnail overlay to prevent iframe interaction in card view */}
               <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
               <iframe
                src={project.video}
                title={project.title}
                className="w-full h-full pointer-events-none"
                frameBorder="0"
              />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-600 line-clamp-2">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.slice(0, 3).map(skill => (
                  <span key={skill} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-md" style={{padding: "6px"}}>
                    {skill}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded-md" style={{padding: "6px"}}>
                    +{project.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{padding: "32px"}}
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                    <p className="text-green-600">{selectedProject.year}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <iframe
                    src={selectedProject.video}
                    title={selectedProject.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">About</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.fullDesc}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">The Story</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.story}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                        style={{padding: "6px"}}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-4">
                  {selectedProject.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                      style={{padding: "6px", marginTop: "8px"}}
                    >
                      {link.name.includes("GitHub") ? <FaGithub size={18} /> : <ExternalLink size={18} />}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
