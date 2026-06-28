
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <div className="w-12 h-1 bg-blue-600 mt-4"></div>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
           I am a first-year Computer Science student with a strong interest in web development and AI. I enjoy building clean, practical websites and learning by shipping real projects rather than just watching tutorials. Right now, I am focused on strengthening my frontend skills, exploring modern tools, and turning ideas into useful digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
