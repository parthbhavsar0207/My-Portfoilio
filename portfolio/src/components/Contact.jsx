
import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('parthb100922@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  return (
    <section id="contact" className="py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-8">
            Interested in collaborating, building projects, or discussing opportunities? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {/* <a
              href="mailto:parthb100922@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <EnvelopeIcon className="w-5 h-5" />
              <span className="font-medium">Email Me</span>
            </a> */}
            <button
  onClick={handleCopyEmail}
  className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center"
>
  <EnvelopeIcon className="w-5 h-5" />
  <span className="font-medium">{copied ? 'Copied!' : 'Copy Email'}</span>
</button>
            <a
              href="https://www.linkedin.com/in/parth-bhavsar-088822325/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/parthbhavsar0207" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
