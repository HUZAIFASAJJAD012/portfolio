"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Define project type
interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  technologies: string[];
  demoLink: string;
  codeLink: string;
  features: string[];
  completedAt: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // State management
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Optimized modal close handler
  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject, closeModal]);
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  // Project data with extended information for the modal view
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Zyra Auctions - Real-Time Bidding Platform",
      description: "NestJS real-time auction e-commerce website with Next.js frontend, payment integration, and multi-vendor support.",
      image: "/project/zyra.png",
      category: "fullstack",
      technologies: ["Next.js", "NestJS", "WebSocket", "Payment Gateway", "Multi-Vendor"],
      demoLink: "https://zyraauctions.com/auctions",
      codeLink: "#",
      longDescription: "A sophisticated real-time auction platform built with NestJS backend and Next.js frontend. The platform features live bidding functionality using WebSocket for real-time updates, secure payment integration, and comprehensive multi-vendor support allowing multiple sellers to manage their auction listings.",
      features: [
        "Real-time bidding with WebSocket",
        "Multi-vendor marketplace",
        "Secure payment integration",
        "NestJS backend for scalability",
        "Next.js frontend for performance",
        "Auction management system",
        "Live bid notifications",
        "Vendor dashboard"
      ],
      completedAt: "2024-10-15"
    },
    {
      id: 2,
      title: "LinksBuy - Affiliate E-commerce Platform",
      description: "Full-stack affiliate links e-commerce website with 7000+ products and 3000+ active users.",
      image: "/project/linksbuy.png",
      category: "fullstack",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "SEO", "TypeScript"],
      demoLink: "https://linksbuy.xyz/newproduct",
      codeLink: "#",
      longDescription: "A comprehensive affiliate e-commerce platform built with modern technologies. The platform features a powerful NestJS backend with PostgreSQL database managing 7000+ products uploaded by clients. The frontend is built with Next.js for optimal SEO performance, serving 3000+ active users with a seamless shopping experience.",
      features: [
        "7000+ products managed by clients",
        "3000+ active users",
        "NestJS backend with PostgreSQL",
        "Next.js frontend with SEO optimization",
        "Client product upload management",
        "Affiliate link system",
        "Admin dashboard for product management"
      ],
      completedAt: "2024-11-20"
    },
    {
      id: 3,
      title: "SFS - Financial Services B.V.",
      description: "Your trusted partner for Dutch bookkeeping, tax advisory, and business solutions in the Netherlands.",
      image: "/project/sfs.png",
      category: "frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "TypeScript"],
      demoLink: "https://sfs-website-3g5s.vercel.app/",
      codeLink: "#",
      longDescription: "A professional business website for Financial Services B.V. (SFS) providing comprehensive financial services to businesses in the Netherlands. Built with Next.js for optimal SEO and performance, the website showcases their services including Dutch bookkeeping, tax advisory, and business solutions, helping clients achieve compliance, growth, and peace of mind.",
      features: [
        "Professional service showcase",
        "Next.js for SEO optimization",
        "Responsive design for all devices",
        "Contact and inquiry forms",
        "Service details and pricing",
        "SEO optimized for Dutch market"
      ],
      completedAt: "2024-12-10"
    },
    {
      id: 4,
      title: "VanLock Security",
      description: "Your trusted partner for vehicle security solutions, offering advanced anti-theft systems and GPS tracking.",
      image: "/project/vanlock.png",
      category: "frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "SEO", "TypeScript"],
      demoLink: "https://van-lock-website.vercel.app/",
      codeLink: "#",
      longDescription: "A professional business website for VanLock Security, specializing in vehicle security solutions. The site is built with Next.js to ensure high performance and SEO optimization. It highlights their advanced anti-theft systems, GPS tracking services, and installation options, providing customers with reliable information and easy contact methods to enhance their vehicle security.",
      features: [
        "Professional service showcase",
        "Next.js for SEO optimization",
        "Responsive design for all devices",
        "Contact and inquiry forms",
        "SEO optimized for Dutch market"
      ],
      completedAt: "2025-01-10"
    },
    {
      id: 5,
      title: "Shirka Noura Al Otaibi",
      description: "Reliable Home Appliance Service, Maintenance, and Repair in Riyadh, Saudi Arabia.",
      image: "/project/shirka.png",
      category: "frontend",
      technologies: ["Next.js", "ShadCN", "Tailwind CSS", "SEO", "TypeScript"],
      demoLink: "https://www.shirka-noura.com/",
      codeLink: "#",
      longDescription: "A professional business website for Shirka Noura Al Otaibi, specializing in home appliance services. The site is built with Next.js to ensure high performance and SEO optimization. It highlights their reliable service, maintenance, and repair options for home appliances in Riyadh, Saudi Arabia.",
      features: [
        "Professional service showcase",
        "Next.js for SEO optimization",
        "Responsive design for all devices",
      ],
      completedAt: "2025-10-13"
    }
  ] as ProjectType[];

  // Filter categories
  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" }
  ];
  
  // Memoized filter and search projects - prevents recalculation on every render
  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => activeFilter === 'all' || project.category === activeFilter)
      .filter(project => 
        searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  }, [activeFilter, searchQuery]);
  
  // Open modal function
  const openModal = useCallback((project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }, []);
  
  // Animation variants - memoized
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }), []);
  
  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }), []);
  
  const modalVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }), []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="section-heading gradient-text" 
            variants={itemVariants}
          >
            Our Projects
          </motion.h2>
          
          <motion.p 
            className="text-center text-lg mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects. Each one was carefully crafted with attention to both design and functionality.
          </motion.p>
          
          {/* Search and filter controls */}
          <motion.div
            className="mb-10"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              {/* Search input */}
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              
              {/* View toggle */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
                <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                  <motion.button
                    className={`px-3 py-1 rounded-md text-sm ${isGridView ? 'bg-white dark:bg-gray-800 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                    onClick={() => setIsGridView(true)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                    </svg>
                  </motion.button>
                  <motion.button
                    className={`px-3 py-1 rounded-md text-sm ${!isGridView ? 'bg-white dark:bg-gray-800 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                    onClick={() => setIsGridView(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
            
            {/* Filter buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.value 
                      ? 'bg-primary text-white font-medium shadow-lg' 
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{filter.name}</span>
                  {activeFilter === filter.value && (
                    <motion.span
                      className="w-2 h-2 rounded-full bg-white"
                      layoutId="filterIndicator"
                      transition={{ type: "spring", bounce: 0.5 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Results count */}
          <motion.p 
            className="text-center text-sm text-gray-500 dark:text-gray-400 -mt-4 mb-8"
            variants={itemVariants}
          >
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </motion.p>
          
          {/* Projects grid or list view */}
          {isGridView ? (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card overflow-hidden cursor-pointer"
                  variants={itemVariants}
                  onClick={() => openModal(project)}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative overflow-hidden group h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-bold">{project.title}</h4>
                          <p className="text-gray-200 text-sm capitalize">
                            {project.category === "fullstack" ? "Full Stack" : project.category}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href={project.demoLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-medium py-1 px-2 rounded-full ${
                        project.category === 'frontend' ? 'bg-blue-500/90 text-white' :
                        project.category === 'backend' ? 'bg-green-500/90 text-white' :
                        'bg-purple-500/90 text-white'
                      }`}>
                        {project.category === "fullstack" ? "Full Stack" : project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Read more button */}
                    <button
                      className="mt-4 text-primary hover:text-primary-dark text-sm flex items-center transition-colors font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      View Details
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card overflow-hidden cursor-pointer"
                  variants={itemVariants}
                  onClick={() => openModal(project)}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-medium py-1 px-2 rounded-full ${
                          project.category === 'frontend' ? 'bg-blue-500/90 text-white' :
                          project.category === 'backend' ? 'bg-green-500/90 text-white' :
                          'bg-purple-500/90 text-white'
                        }`}>
                          {project.category === "fullstack" ? "Full Stack" : project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          className="text-primary hover:text-primary-dark text-sm flex items-center transition-colors font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(project);
                          }}
                        >
                          View Details
                          <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <div className="flex gap-2">
                          <a 
                            href={project.demoLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors p-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Show empty state if no projects match filter/search */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16"
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
              >
                Reset filters
              </button>
            </motion.div>
          )}
          
          {/* Show more button (if you have pagination) */}
          {filteredProjects.length > 0 && (
            <motion.div 
              className="text-center mt-16"
              variants={itemVariants}
            >
              <Link href="/projects">
                <motion.button
                  className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-10 text-white hover:bg-white/20 transition-colors"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              {/* Hero image */}
              <div className="w-full h-64 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-2">
                    <span className={`text-xs font-medium py-1 px-2 rounded-full ${
                      selectedProject.category === 'frontend' ? 'bg-blue-500/90 text-white' :
                      selectedProject.category === 'backend' ? 'bg-green-500/90 text-white' :
                      'bg-purple-500/90 text-white'
                    }`}>
                      {selectedProject.category === "fullstack" ? "Full Stack" : selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 text-xs font-medium bg-black/30 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedProject.longDescription}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Type:</span>
                        <span className="font-medium capitalize">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Completed:</span>
                        <span className="font-medium">{new Date(selectedProject.completedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Technologies:</span>
                        <span className="font-medium">{selectedProject.technologies.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
