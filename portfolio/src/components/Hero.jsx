
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section className="pt-16 pb-10 sm:pt-20 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <motion.div
        className="flex-1 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          OPEN TO OPPORTUNITIES
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Hi, I'm <span className="text-blue-600">Parth</span>.
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg">
         Building websites, exploring AI, and learning through real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#0047FF] hover:bg-blue-700 shadow-sm transition-all hover:shadow-md"
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
      <motion.div
        className="flex-1 w-full max-w-2xl lg:max-w-none"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-lg">
          <img
            src={profileImg}
            alt="Alex"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
