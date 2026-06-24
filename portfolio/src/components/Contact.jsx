
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
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="relative w-full sm:w-auto flex justify-center">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center cursor-pointer"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span className="font-medium">{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
              {copied && (
                <div className="absolute -top-10 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap">
                  Email copied to clipboard!
                  <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md transition-all w-full sm:w-auto justify-center"
            >
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="#"
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
