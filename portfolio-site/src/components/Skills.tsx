"use client";


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiApollographql, SiGithub, SiDocker, SiTypescript, SiJest, SiFigma, SiCss3, SiAmazon } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  // Skills data with more visually engaging structure
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      description: "Creating beautiful, responsive, and interactive user interfaces",
      icon: "💻",
      color: "from-blue-500 to-cyan-400",
      skills: [
  { name: "HTML5/CSS3", level: 95, icon: <SiHtml5 className="text-orange-500" />, description: "Semantic markup, CSS Grid, Flexbox" },
  { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400" />, description: "ES6+, DOM manipulation, async" },
  { name: "React", level: 88, icon: <SiReact className="text-blue-400" />, description: "Hooks, Context, Redux, Testing" },
  { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-black dark:text-white" />, description: "SSR, Static Generation, API Routes" },
  { name: "TailwindCSS", level: 90, icon: <SiTailwindcss className="text-cyan-400" />, description: "Responsive design, customization" },
  { name: "Framer Motion", level: 83, icon: <SiFramer className="text-fuchsia-500" />, description: "Animations, gestures, transitions" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      description: "Building robust, scalable and efficient server-side applications",
      icon: "⚙️",
      color: "from-green-500 to-emerald-400",
      skills: [
  { name: "Node.js", level: 87, icon: <SiNodedotjs className="text-green-600" />, description: "Event loop, streams, performance" },
  { name: "Express", level: 85, icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, description: "REST APIs, middleware, routing" },
  { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" />, description: "Schema design, aggregation, indexes" },
  { name: "PostgreSQL", level: 75, icon: <SiPostgresql className="text-blue-700" />, description: "Queries, transactions, indexing" },
  { name: "GraphQL", level: 78, icon: <SiGraphql className="text-pink-500" />, description: "Schemas, resolvers, Apollo Server" },
  { name: "API Design", level: 88, icon: <SiApollographql className="text-indigo-500" />, description: "REST, GraphQL, documentation" }
      ]
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      description: "Optimizing development workflow and deployment processes",
      icon: "🛠️",
      color: "from-purple-500 to-indigo-400",
      skills: [
  { name: "Git & GitHub", level: 92, icon: <SiGithub className="text-gray-800 dark:text-gray-100" />, description: "Version control, collaboration" },
  { name: "Docker", level: 78, icon: <SiDocker className="text-blue-400" />, description: "Containerization, Docker Compose" },
  { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-500" />, description: "Types, interfaces, generics" },
  { name: "Testing", level: 82, icon: <SiJest className="text-red-500" />, description: "Jest, React Testing Library, Cypress" },
  { name: "CI/CD", level: 76, icon: <SiGithub className="text-green-500" />, description: "GitHub Actions, automated workflows" },
  { name: "AWS", level: 70, icon: <SiAmazon className="text-yellow-500" />, description: "S3, EC2, Lambda, CloudFront" }
      ]
    },
    {
      id: "design",
      name: "Design & UX",
      description: "Creating intuitive user experiences with aesthetic appeal",
      icon: "🎨",
      color: "from-rose-500 to-pink-400",
      skills: [
  { name: "UI Design", level: 85, icon: <SiFigma className="text-pink-400" />, description: "Component design, visual hierarchy" },
  { name: "UX Principles", level: 80, icon: <SiCss3 className="text-blue-500" />, description: "User flows, accessibility, usability" },
  { name: "Figma", level: 75, icon: <SiFigma className="text-pink-400" />, description: "Prototyping, design systems" },
  { name: "Responsive Design", level: 90, icon: <SiTailwindcss className="text-cyan-400" />, description: "Mobile-first, adaptive layouts" },
  { name: "Animation", level: 83, icon: <SiFramer className="text-fuchsia-500" />, description: "Motion design, interactions" },
  { name: "Design Systems", level: 78, icon: <SiFigma className="text-pink-400" />, description: "Component libraries, patterns" }
      ]
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
  <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <svg className="absolute left-0 top-10 opacity-5 dark:opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-700" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#tech-pattern)"></rect>
        </svg>
        <svg className="absolute right-0 bottom-10 opacity-5 dark:opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="tech-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-700" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#tech-pattern-2)"></rect>
        </svg>
      </div>

      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.2 }}
            >
              Expertise
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 font-poppins tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
            >
              My <span className="gradient-text">Technical Skills</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ delay: 0.4 }}
            >
              I specialize in modern web technologies, focusing on building exceptional digital experiences with the perfect blend of form and function.
            </motion.p>
          </motion.div>
          
          {/* Tab navigation for skill categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                    layoutId="activeCategory"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Dynamic skill display */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {skillCategories.map((category) => (
                category.id === activeCategory && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <motion.div 
                        className="md:w-1/3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-r ${category.color} text-white text-2xl`}>
                          <span>{category.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.slice(0, 3).map((skill) => (
                            <span 
                              key={skill.name} 
                              className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                            >
                              {skill.name}
                            </span>
                          ))}
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full">
                            +{category.skills.length - 3} more
                          </span>
                        </div>
                      </motion.div>
                      
                      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {category.skills.map((skill, idx) => (
                          <motion.div 
                            key={skill.name}
                            className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            whileHover={{ scale: 1.03 }}
                          >
                            <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                  <span className="text-xl">{skill.icon}</span>
                                </div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                              </div>
                              <span className="text-sm font-bold text-primary">{skill.level}%</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{skill.description}</p>
                            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Additional certification section */}
          <motion.div 
            className="mt-20 text-center"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications & Achievements</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <motion.div 
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative card p-6 text-center">
                  <div className="mb-4 text-4xl">🏆</div>
                  <h4 className="text-lg font-bold mb-2">AWS Certified Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                </div>
              </motion.div>
              <motion.div 
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative card p-6 text-center">
                  <div className="mb-4 text-4xl">🏅</div>
                  <h4 className="text-lg font-bold mb-2">React Specialist</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Meta Frontend Certification</p>
                </div>
              </motion.div>
              <motion.div 
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <div className="relative card p-6 text-center">
                  <div className="mb-4 text-4xl">🥇</div>
                  <h4 className="text-lg font-bold mb-2">Hackathon Winner</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Regional Web Dev Competition</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
