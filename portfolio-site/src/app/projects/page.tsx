"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Define project type
interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  technologies: string[];
  demoLink: string;
  completedAt: string;
}

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Project data
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Zyra Auctions - Real-Time Bidding Platform",
      description: "NestJS real-time auction e-commerce website with Next.js frontend, payment integration, and multi-vendor support.",
      image: "/project/zyra.png",
      category: "fullstack",
      technologies: ["Next.js", "NestJS", "WebSocket", "Payment Gateway", "Multi-Vendor"],
      demoLink: "https://zyraauctions.com/auctions",
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
      completedAt: "2024-12-10"
    }
  ];

  // Filter categories
  const filters = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Backend", value: "backend" },
    { name: "Full Stack", value: "fullstack" }
  ];

  // Filtered projects
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our complete portfolio of innovative solutions and successful client projects.
          </p>
          <Link href="/#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-primary dark:focus:border-primary outline-none transition-colors"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-bold text-primary">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-all" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 backdrop-blur-sm z-10">
                  {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Frontend' : 'Backend'}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Demo Button */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  View Live Demo
                </a>
              </div>

              {/* Completion Date */}
              <div className="px-6 pb-4 text-sm text-gray-500 dark:text-gray-400">
                Completed: {new Date(project.completedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-medium mb-2 text-gray-800 dark:text-gray-200">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
