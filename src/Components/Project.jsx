import { PROJECTS } from "./data.js";
import { motion } from "framer-motion";

function Project() {
  return (
    <div
      id="Project"
      className="border-b border-neutral-900/20 bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center pb-16 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-16">
       {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="group relative rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 overflow-hidden flex flex-col h-full"
        >
          <div className="flex flex-col lg:flex-row h-full">
            <motion.div className="lg:w-5/12 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-bold pb-4 text-white group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              <p className="pb-6 text-neutral-300 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-neutral-800/50 rounded-full text-sm font-medium text-neutral-300 hover:bg-neutral-700/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-colors"
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 text-neutral-300 rounded-lg hover:bg-neutral-700/50 transition-colors"
                  >
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700"
                  >
                    Show Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
