
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Currently Building</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real projects will be added as they are completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : project.status === 'In Progress'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-slate-50 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-50 text-slate-500 border border-slate-100 text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status === 'Completed' && (
                  <div className="flex flex-nowrap gap-3 mt-auto pt-4 border-t border-slate-100">
                    <a
                      href={project.liveDemo}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 shrink-0" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors whitespace-nowrap"
                    >
                      <CodeBracketIcon className="w-4 h-4 shrink-0" />
                      Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
