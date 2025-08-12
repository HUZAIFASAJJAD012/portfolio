"use client";

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const controls = useAnimation();

  // Handle mouse movement for the interactive cursor effect
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  // Custom cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgba(107, 33, 168, 0.5)",
      mixBlendMode: "difference",
      transition: {
        type: 'spring',
        mass: 0.6
      }
    }
  };
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Custom animated cursor - a unique interactive element */}
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
      />
      
      {/* Dynamic interactive background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <svg className="hidden md:block absolute w-full h-full">
            <defs>
              <pattern 
                id="grid" 
                width="40" 
                height="40" 
                patternUnits="userSpaceOnUse"
              >
                <path 
                  d="M 40 0 L 0 0 0 40" 
                  fill="none" 
                  stroke="rgba(107, 33, 168, 0.15)" 
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-violet-400 rounded-full opacity-20 filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-secondary to-purple-500 rounded-full opacity-20 filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Innovative text content with rotating words */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <motion.div 
              className="inline-flex items-center py-2 px-4 mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Currently available for freelance work</span>
            </motion.div>
            
            <motion.h1
              className="text-5xl sm:text-7xl font-bold mb-6 font-poppins tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I create
              <div className="h-20 mt-2 overflow-hidden relative">
                <motion.div
                  animate={{ y: [0, -160, -320, -480, 0] }}
                  transition={{ 
                    duration: 8, 
                    ease: "easeInOut", 
                    times: [0, 0.2, 0.4, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Digital Experiences</span>
                  <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-secondary">Creative Solutions</span>
                  <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Interactive Apps</span>
                  <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Stunning Websites</span>
                </motion.div>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-semibold text-primary">Hi, I'm Your Name.</span> I specialize in crafting cutting-edge digital experiences that combine innovative design with flawless functionality. My work focuses on creating memorable interactions that keep users engaged and delighted.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="#projects" 
                className="relative group overflow-hidden px-8 py-4 rounded-lg bg-primary text-white font-semibold tracking-wide text-center shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="relative px-8 py-4 rounded-lg bg-transparent border border-secondary text-secondary font-semibold hover:text-white tracking-wide text-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-700 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween" }}
                ></motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Innovative 3D-style hero image with interactive elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="relative">
              {/* Animated background shapes */}
              <div className="absolute inset-0 -z-10">
                <motion.div 
                  className="absolute h-40 w-40 -left-20 -top-20 bg-primary rounded-full opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute h-40 w-40 -right-20 -bottom-20 bg-secondary rounded-full opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, -90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>
              
              {/* Animated code snippets background */}
              <motion.div 
                className="absolute inset-0 -z-10 opacity-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ delay: 1 }}
              >
                <pre className="text-[6px] sm:text-[8px] text-wrap overflow-hidden absolute inset-0 text-primary font-mono opacity-80">
                  {`function Portfolio() {
  const [skills, setSkills] = useState([
    'React', 'Next.js', 'TypeScript',
    'Tailwind CSS', 'Framer Motion'
  ]);
  
  const projects = useProjects();
  const animations = useAnimations();
  
  return (
    <div className="innovative-portfolio">
      <Header />
      <Hero 
        name="Your Name"
        title="Full Stack Developer" 
        animations={animations.hero}
      />
      <Projects data={projects} />
      <Contact />
    </div>
  );
}`}
                </pre>
              </motion.div>
              
              {/* Glowing frame with 3D effect */}
              <div className="relative z-0">
                {/* 3D-like layered frames */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-sm transform scale-105"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px 5px rgba(0, 112, 243, 0.3)', 
                      '0 0 40px 10px rgba(107, 33, 168, 0.3)', 
                      '0 0 20px 5px rgba(0, 112, 243, 0.3)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="w-72 h-72 sm:w-96 sm:h-96 border-4 border-white/30 dark:border-gray-800/30 bg-gray-100 dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Diagonal stripes background */}
                  <div className="absolute inset-0 bg-stripes opacity-5"></div>
                  
                  {/* Animated profile image */}
                  <motion.div
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src="/profile-pic.png" // You'll need to add this image to public folder
                      alt="Developer Profile"
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30 dark:to-secondary/40"
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        y: [0, 5, 0]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Tech stack badges */}
              <motion.div 
                className="absolute -top-6 -right-6 flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="flex items-center space-x-1 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  <span className="text-lg">⚛️</span>
                  <span>React</span>
                </span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <span className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  <span className="text-lg">▲</span>
                  <span>Next.js</span>
                </span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 -right-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <span className="flex items-center space-x-1 bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-lg">
                  <span className="text-lg">🔥</span>
                  <span>Framer Motion</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Stats/achievement indicators */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >5+</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.3 }}
              >50+</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.6 }}
              >30+</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Happy Clients</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-700 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.9 }}
              >10+</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</span>
            </div>
          </div>
        </motion.div>

     
        
        {/* Unique scroll down indicator with animation */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <a href="#about" className="group flex flex-col items-center">
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-2 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">Explore More</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
