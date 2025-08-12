"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  }, [selectedProject]);
  
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
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, cart, checkout and payment integration.",
      image: "/projects/ecommerce.jpg",
      category: "fullstack",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/ecommerce",
      longDescription: "This comprehensive e-commerce solution features user authentication, product management, cart functionality, secure checkout with Stripe, order history, and an admin dashboard. The platform is built with performance and SEO in mind, utilizing Next.js for server-side rendering and optimized image loading.",
      features: [
        "User authentication and profiles",
        "Product search with filters and sorting",
        "Cart and wishlist functionality",
        "Secure payment processing",
        "Order tracking system",
        "Admin dashboard for inventory management"
      ],
      completedAt: "2023-07-15"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productive task manager with drag-and-drop interface and team collaboration features.",
      image: "/projects/task-app.jpg",
      category: "frontend",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/task-app",
      longDescription: "This intuitive task management application helps teams organize work efficiently with features like kanban boards, task assignments, due dates, and real-time updates. The app uses Redux for state management and Firebase for real-time data synchronization.",
      features: [
        "Kanban board with drag-and-drop",
        "Task assignments and mentions",
        "Due date reminders",
        "File attachments",
        "Team chat and comments",
        "Activity timeline"
      ],
      completedAt: "2023-05-20"
    },
    {
      id: 3,
      title: "Personal Blog Platform",
      description: "A content management system for bloggers with markdown support and SEO features.",
      image: "/projects/blog.jpg",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "Tailwind CSS"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/blog-platform",
      longDescription: "This modern blogging platform allows writers to create and manage content with a rich text editor, SEO tools, and analytics. The platform features server-side rendering for optimal performance and search engine visibility, along with a GraphQL API for flexible data querying.",
      features: [
        "Markdown and rich text editing",
        "SEO optimization tools",
        "Social media integration",
        "Content scheduling",
        "Reader comments and reactions",
        "Traffic analytics dashboard"
      ],
      completedAt: "2023-03-10"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive maps and 7-day forecasts.",
      image: "/projects/weather.jpg",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/weather-app",
      longDescription: "This weather application provides accurate forecasts with interactive visualizations, location-based weather updates, and severe weather alerts. The dashboard features responsive design and dark mode support for optimal viewing in any environment.",
      features: [
        "Current conditions and 7-day forecast",
        "Hourly weather breakdown",
        "Interactive weather maps",
        "Location-based recommendations",
        "Weather alerts and notifications",
        "Historical weather data comparison"
      ],
      completedAt: "2023-01-25"
    },
    {
      id: 5,
      title: "RESTful API Service",
      description: "A complete backend solution for managing user data with authentication and authorization.",
      image: "/projects/api.jpg",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/api-service",
      longDescription: "This robust API service provides a secure and scalable backend infrastructure for user management, data processing, and third-party integrations. The service implements JWT authentication, role-based access control, and comprehensive API documentation.",
      features: [
        "JWT authentication and authorization",
        "Role-based access control",
        "Rate limiting and request throttling",
        "Comprehensive error handling",
        "Swagger API documentation",
        "Automated testing with Jest"
      ],
      completedAt: "2023-02-18"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Feature-rich messaging platform with rooms, direct messages, and file sharing.",
      image: "/projects/chat.jpg",
      category: "fullstack",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/chat-app",
      longDescription: "This real-time messaging application enables seamless communication with features like instant messaging, group chats, file sharing, and message history. The app utilizes Socket.io for real-time functionality and includes features like typing indicators and read receipts.",
      features: [
        "Real-time messaging",
        "Group chats and channels",
        "File and media sharing",
        "Message reactions and threads",
        "Typing indicators and read receipts",
        "Online presence indicators"
      ],
      completedAt: "2023-04-05"
    }
  ] as ProjectType[];

  // Filter categories with icon indicators
  const filters = [
    { name: "All", value: "all", icon: "🔍" },
    { name: "Frontend", value: "frontend", icon: "🎨" },
    { name: "Backend", value: "backend", icon: "⚙️" },
    { name: "Full Stack", value: "fullstack", icon: "🚀" }
  ];
  
  // Filter and search projects
  const filteredProjects = projects
    .filter(project => activeFilter === 'all' || project.category === activeFilter)
    .filter(project => 
      searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  // Open and close modal functions
  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const modalVariants = {
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
  };

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
            My Projects
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
                  <span>{filter.icon}</span>
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
                          <a 
                            href={project.codeLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {project.title}
                      <motion.span
                        className="inline-block"
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {project.category === 'frontend' ? '🎨' :
                         project.category === 'backend' ? '⚙️' : '🚀'}
                      </motion.span>
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
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {project.title}
                        <motion.span
                          className="inline-block"
                          whileHover={{ rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.category === 'frontend' ? '🎨' :
                           project.category === 'backend' ? '⚙️' : '🚀'}
                        </motion.span>
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
                          <a 
                            href={project.codeLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary transition-colors p-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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
              <div className="text-6xl mb-4">🔍</div>
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
              <motion.button
                className="btn-secondary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
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
                  <a 
                    href={selectedProject.codeLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    View Code
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
