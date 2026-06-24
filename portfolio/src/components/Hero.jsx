
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          Hi, I'm <span className="text-indigo-600">Parth</span>.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mb-8">
          A first-year CSE student passionate about building clean, modern, and user-friendly web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all hover:shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all hover:shadow-sm"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
