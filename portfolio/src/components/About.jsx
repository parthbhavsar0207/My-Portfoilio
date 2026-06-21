
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I am a first-year Computer Science and Engineering student. I have a strong interest in learning web development and creating beautiful, responsive websites. I enjoy taking ideas and turning them into real, working applications. Constantly exploring new technologies, my current focus is on mastering React and modern CSS frameworks like Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
