"use client";

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // State to track active tab
  const [activeTab, setActiveTab] = useState('story');

  // Memoized animation variants
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
  
  // Personal details and milestones
  const personalDetails = [
    { label: "Name", value: "Huzaifa Sajjad" },
    { label: "Role", value: "CEO & Team Lead" },
    { label: "Company", value: "LogiNest" },
    { label: "Experience", value: "3+ Years" },
    { label: "Location", value: "Pakistan" },
    { label: "Available", value: "Yes" }
  ];
  
  // Career milestones
  const milestones = [
    {
      year: "2024 - Present",
      position: "CEO & Founder",
      company: "LogiNest Software House",
      description: "Leading a talented team to build custom software solutions. Managing projects, client relationships, and business operations."
    },
    {
      year: "2021 - 2024",
      position: "Team Lead & Manager",
      company: "Firnas.tech",
      description: "Led development teams, managed project timelines, and ensured quality delivery. Guided junior developers and coordinated with clients."
    },
    {
      year: "2019 - 2021",
      position: "Full Stack Developer",
      company: "Software Development",
      description: "Built web applications using React, Node.js, and modern technologies. Worked on multiple client projects from design to deployment."
    },
    {
      year: "2018 - 2019",
      position: "Junior Developer",
      company: "Tech Projects",
      description: "Started my journey in web development. Learned best practices and gained experience in building real-world applications."
    }
  ];
  
  // Education history
  const education = [
    {
      year: "2020 - 2025",
      degree: "Bachelor of Software Engineering",
      institution: "COMSATS University Islamabad, Abbottabad Campus",
      description: "Studied software engineering, programming, and computer science. Built strong foundation in modern technologies and software development."
    },
    {
      year: "2018 - 2020",
      degree: "Web Development Course",
      institution: "Online Learning Platform",
      description: "Learned modern web development with HTML, CSS, JavaScript, React, and Node.js through practical projects."
    },
    {
      year: "2017 - 2018",
      degree: "Software Training",
      institution: "Tech Institute",
      description: "Started learning programming basics and got interested in building software and websites."
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      text: "LogiNest delivered our project on time with great quality. Huzaifa and his team understood our needs and built exactly what we wanted. Highly recommended!",
      name: "Imran",
      position: "Product Owner, Australia",
      image: "/imran.png"
    },
    {
      text: "Working with LogiNest on our Standard Financial Services (SFS) platform was excellent. They delivered a professional solution that exceeded our expectations. Highly skilled team!",
      name: "Qutaiba",
      position: "SFS Project Lead, UK",
      image: "/Q.jpeg"
    },
    {
      text: "Huzaifa keeps great communication throughout the project. He responds quickly, explains everything clearly, and makes sure we're always updated. Easy to work with!",
      name: "Omar Hassan",
      position: "Tech Consultant",
      image: "/testimonial3.jpg"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-secondary/5 to-transparent"></div>
        <svg className="absolute bottom-0 right-0 text-primary/5 dark:text-white/5 transform rotate-180" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#about-pattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay: 0.2 }}
            >
              About LogiNest
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 font-poppins tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
            >
              Meet Our <span className="gradient-text">CEO</span>
            </motion.h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Image column */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className="relative group">
                {/* Image frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-3 scale-105 opacity-30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl transform -rotate-3 scale-105 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 delay-100"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-xl"></div>
                
                {/* Main image */}
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="/ceoimage/huz.png"
                    alt="Huzaifa Sajjad - CEO & Team Lead at LogiNest"
                    className="w-full h-auto rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-bold text-xl">Huzaifa Sajjad</p>
                      <p>CEO & Team Lead at LogiNest</p>
                    </div>
                  </div>
                </div>
                
                {/* Experience badge */}
                <div className="absolute -right-5 top-1/4 bg-white dark:bg-gray-800 rounded-full shadow-xl p-4 z-20 transform transition-all duration-300 hover:scale-110">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-xl font-bold">3+</div>
                      <div className="text-xs">Years</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Personal info card */}
              <motion.div 
                className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Personal Details
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {personalDetails.map((detail, index) => (
                    <div key={index} className="py-2">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{detail.label}</div>
                      <div className="font-medium">{detail.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14"></path>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Content column */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              {/* Tab navigation */}
              <div className="flex mb-8 bg-white dark:bg-gray-800 p-1 rounded-xl shadow-md">
                {[
                  { id: 'story', label: 'My Story' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'education', label: 'Education' },
                  { id: 'testimonials', label: 'Testimonials' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-4 rounded-lg text-center relative z-0 transition-all duration-200 ${
                      activeTab === tab.id 
                        ? 'text-white font-medium' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Tab content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'story' && (
                    <motion.div
                      key="story"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                      
                      <p className="text-lg mb-6">
                        Hello! I'm <span className="font-bold text-primary">Huzaifa Sajjad</span>, the CEO and founder of LogiNest Software House. I lead a talented team that builds custom software solutions for businesses around the world.
                      </p>
                      
                      <p className="text-lg mb-6">
                        I started my journey in web development 3+ years ago. I learned by building real projects and solving real problems. Now, I not only code but also manage teams, guide projects, and help clients turn their ideas into working software.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 dark:bg-gray-700/40 p-6 rounded-xl">
                          <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Team Leadership</h4>
                          <p>I lead and manage our development team at LogiNest. I guide developers, plan projects, and make sure we deliver quality work on time.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/40 p-6 rounded-xl">
                          <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Technical Skills</h4>
                          <p>Expert in React, Next.js, Node.js, and modern web technologies. I build both the front-end and back-end of applications.</p>
                        </div>
                      </div>
                      
                      <p className="text-lg">
                        At LogiNest, we believe in clear communication, quality work, and building long-term relationships with our clients. I'm always excited to take on new challenges and help businesses grow through technology.
                      </p>
                    </motion.div>
                  )}
                  
                  {activeTab === 'experience' && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-primary">Work Experience</h3>
                      
                      {milestones.map((milestone, index) => (
                        <motion.div 
                          key={index}
                          className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                          
                          {/* Year badge */}
                          <div className="inline-block py-1 px-3 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
                            {milestone.year}
                          </div>
                          
                          <h4 className="text-xl font-bold">{milestone.position}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{milestone.company}</p>
                          <p className="text-gray-700 dark:text-gray-300">{milestone.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  
                  {activeTab === 'education' && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-primary">Education & Training</h3>
                      
                      {education.map((item, index) => (
                        <motion.div 
                          key={index}
                          className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                          
                          {/* Year badge */}
                          <div className="inline-block py-1 px-3 mb-3 text-sm font-medium bg-primary/10 text-primary rounded-full">
                            {item.year}
                          </div>
                          
                          <h4 className="text-xl font-bold">{item.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                        </motion.div>
                      ))}
                      
                      <div className="mt-6 bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl">
                        <h4 className="font-bold text-xl mb-3">Skills & Expertise</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Team Leadership & Management</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Project Management</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Full Stack Development</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>Client Communication</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'testimonials' && (
                    <motion.div
                      key="testimonials"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-primary">Client Testimonials</h3>
                      
                      <div className="grid gap-6">
                        {testimonials.map((testimonial, index) => (
                          <motion.div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <svg className="absolute top-6 left-6 w-12 h-12 text-gray-200 dark:text-gray-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            
                            <div className="pl-10">
                              <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.text}</p>
                              <div className="flex items-center">
                                <div className="mr-4">
                                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                                    {testimonial.image ? (
                                      <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z" />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
