"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const shouldReduceMotion = useReducedMotion();

  // Throttle mouse movement for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    });
  }, []);

  // Handle mouse movement for the interactive cursor effect
  useEffect(() => {
    // Only add cursor tracking on desktop devices
    if (window.innerWidth < 768) return;
    
    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);
  
  // Custom cursor variants - memoized for performance
  const variants = useMemo(() => ({
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 150,
        damping: 15
      }
    },
    hover: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      backgroundColor: "rgba(107, 33, 168, 0.5)",
      mixBlendMode: "difference" as any,
      transition: {
        type: 'spring',
        mass: 0.3,
        stiffness: 150,
        damping: 15
      }
    }
  }), [mousePosition]);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Custom animated cursor - a unique interactive element - only on desktop */}
      {!shouldReduceMotion && (
        <motion.div
          className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference will-change-transform"
          variants={variants}
          animate={cursorVariant}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        />
      )}
      
      {/* Simplified background - removed heavy animations */}
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
        {/* Optimized background blobs with CSS animations instead of JS */}
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary to-violet-400 rounded-full opacity-20 filter blur-3xl animate-float"
          style={{ animationDuration: '15s' }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-secondary to-purple-500 rounded-full opacity-20 filter blur-3xl animate-float"
          style={{ animationDuration: '18s', animationDelay: '2s' }}
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
           
            
            <motion.h1
              className="text-5xl sm:text-7xl font-bold mb-6 font-poppins tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We build
              <div className="h-20 mt-2 overflow-hidden relative">
                {!shouldReduceMotion ? (
                  <motion.div
                    animate={{ y: [0, -80, -160, -240, 0] }}
                    transition={{ 
                      duration: 12, 
                      ease: "easeInOut", 
                      times: [0, 0.25, 0.5, 0.75, 1],
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Custom Software</span>
                    <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-secondary">Smart Solutions</span>
                    <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-400">Web & Mobile Apps</span>
                    <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">Your Success</span>
                  </motion.div>
                ) : (
                  <span className="block h-20 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Custom Software</span>
                )}
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-semibold text-primary">Welcome to LogiNest.</span> We turn your ideas into real software solutions. Whether you need a website, mobile app, or business software, we build it with care and quality. Our team works closely with you to create exactly what you need.
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
                <span className="relative z-10">Explore Our Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="relative px-8 py-4 rounded-lg bg-transparent border border-secondary text-secondary font-semibold hover:text-white tracking-wide text-center overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-700 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween" }}
                ></motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Simple clean company visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <div className="relative w-full max-w-lg">
              
              {/* Main gradient card - using theme colors */}
              <motion.div 
                className="relative bg-gradient-to-br from-primary via-secondary to-purple-700 rounded-3xl p-20 shadow-2xl overflow-hidden"
                animate={{ 
                  boxShadow: [
                    '0 20px 60px rgba(0, 112, 243, 0.3)',
                    '0 30px 80px rgba(107, 33, 168, 0.4)',
                    '0 20px 60px rgba(0, 112, 243, 0.3)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Subtle background blobs */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      x: [0, 20, 0],
                      y: [0, -20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      x: [0, -15, 0],
                      y: [0, 15, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                </div>

                {/* Clean content */}
                <div className="relative z-10 text-center text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                   
                    <p className="text-2xl font-light mb-8">
                      Software House
                    </p>
                    <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
                      Building powerful software solutions for businesses worldwide
                    </p>
                  </motion.div>
                </div>

                {/* Simple geometric shapes */}
                <motion.div
                  className="absolute top-10 right-10 w-20 h-20 border-4 border-white/30 rounded-lg"
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white/20"
                  animate={{ 
                    rotate: [0, -180, -360],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <motion.div
                  className="absolute bottom-20 right-16 w-8 h-8 bg-white/20 transform rotate-45"
                  animate={{ 
                    rotate: [45, 225, 45],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 7, repeat: Infinity }}
                />
              </motion.div>

              {/* Decorative accent shapes - using theme colors */}
              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-2xl -z-10"
                animate={{ 
                  rotate: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary to-purple-700 rounded-full -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -15, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.div
                className="absolute top-1/3 -right-16 w-24 h-24 bg-gradient-to-br from-primary/60 to-secondary rounded-lg -z-10 opacity-60"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
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
              >60+</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Delivered</span>
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
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Global Clients</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.6 }}
              >90%</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Client Satisfaction</span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-700 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <motion.span 
                className="text-3xl font-bold gradient-text"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.9 }}
              >24/7</motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">Support Available</span>
            </div>
          </div>
        </motion.div>

     
        
        {/* Unique scroll down indicator with animation */}
        <motion.div 
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2"
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
