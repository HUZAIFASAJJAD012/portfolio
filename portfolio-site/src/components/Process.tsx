"use client";

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Requirement Gathering",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed discussions and questionnaires."
  },
  {
    title: "Documentation",
    description: "All requirements and expectations are documented clearly to ensure alignment and transparency throughout the project."
  },
  {
    title: "UI/UX Design",
    description: "Our design team creates wireframes and high-fidelity mockups, focusing on user experience and your brand identity."
  },
  {
    title: "Implementation",
    description: "We develop the solution using modern technologies, following best coding practices and agile methodologies."
  },
  {
    title: "Parallel Meetings with Client (24/7)",
    description: "We maintain open communication with regular meetings and instant support, ensuring you are always up-to-date and involved."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            How We Do Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins tracking-tight">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We follow a transparent, collaborative, and client-focused approach to deliver successful projects every time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-left"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl mr-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-0">{step.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
