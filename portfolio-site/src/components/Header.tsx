"use client";


import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Background change based on scroll position
    setIsScrolled(scrollY > 50);
    
    // Calculate scroll progress for the progress bar
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    
    // Update active section based on scroll position - optimized
    const sections = ['contact', 'projects', 'skills', 'about', 'hero'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);
  
  // Handle navbar background change on scroll and calculate scroll progress
  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;
    
    const throttledScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update if scroll changed significantly (> 5px)
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        handleScroll();
        lastScrollY = currentScrollY;
      }
      rafId = 0;
    };
    
    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(throttledScroll);
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);
  
  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);
  
  // Handle theme switching
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  // Navigation items
  const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/#projects' },
  { name: 'All Projects', href: '/projects' },
  { name: 'Contact', href: '/#contact' },
];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo with animated elements */}
        <motion.div 
          className="text-2xl font-bold relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#hero" className="gradient-text flex items-center">
            <span className="relative">
              Portfolio
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </span>
            <motion.span 
              className="ml-1  bg-primary text-white px-2 py-0.5 rounded-md"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              LogiNest
            </motion.span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation with active indicators */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={item.href}
                  className={`font-medium transition-colors duration-300 px-3 py-2 rounded-lg flex items-center
                    ${activeSection === item.href.substring(1) 
                      ? 'text-primary dark:text-primary bg-primary/5' 
                      : 'hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800/60'}`
                  }
                >
                  <span>{item.name}</span>
                  {item.isExternal && (
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </Link>
                {activeSection === item.href.substring(1) && !item.isExternal && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary mx-3 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle (Reusable) */}
          <DarkModeToggle />
          {/* Mobile menu button with animated hamburger */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 focus:outline-none"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"
              animate={{ 
                rotateZ: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 4 : 0
              }}
            />
            <motion.div
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1"
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            />
            <motion.div
              className="w-5 h-0.5 bg-gray-600 dark:bg-gray-300"
              animate={{ 
                rotateZ: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -4 : 0
              }}
            />
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation with AnimatePresence for smooth entry/exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4">
              {navItems.map((item) => (
                <motion.li 
                  key={item.name}
                  className={`mx-4 my-2 rounded-lg overflow-hidden ${
                    activeSection === item.href.substring(1) && !item.isExternal ? 'bg-primary/10' : ''
                  }`}
                  whileHover={{ backgroundColor: 'rgba(107, 33, 168, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={item.href}
                    className="py-3 px-6 font-medium flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.isExternal && (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                    {activeSection === item.href.substring(1) && !item.isExternal && (
                      <motion.span
                        layoutId="mobileActiveIndicator"
                        className="ml-auto w-1.5 h-6 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
