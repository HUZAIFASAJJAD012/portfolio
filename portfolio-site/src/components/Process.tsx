"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    title: "Understanding Your Needs",
    description: "We talk with you to learn about your business, goals, and what you want to build. We ask questions to fully understand your project."
  },
  {
    title: "Planning Everything",
    description: "We write down all the details and create a clear plan. This helps us stay on the same page throughout the project."
  },
  {
    title: "Design & Layout",
    description: "Our design team creates how your project will look. We focus on making it easy to use and matching your brand style."
  },
  {
    title: "Building Your Project",
    description: "We write the code and build your software using the latest technology. We follow best practices to make sure everything works perfectly."
  },
  {
    title: "Testing & Quality Check",
    description: "We carefully test everything to make sure it works smoothly. We fix any bugs and ensure the highest quality before launch."
  },
  {
    title: "Launch & Support (24/7)",
    description: "We help you launch your project and provide ongoing support. You can reach us anytime, and we're always here to help you succeed."
  }
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.span 
            className="inline-block py-2 px-4 mb-4 text-xs sm:text-sm font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full border border-primary/20"
            whileHover={{ scale: 1.05 }}
          >
            How We Work
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-poppins tracking-tight">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We work step by step to make sure your project is done right. Here's how we do it.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-left border border-gray-100 dark:border-gray-700 transition-all duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg sm:text-xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {idx + 1}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 sm:mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <motion.a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 33, 168, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
