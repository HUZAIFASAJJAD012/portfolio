import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import proj1 from "../assets/pic2.jpg";
import proj2 from "../assets/pic2.jpg";
import proj3 from "../assets/pic2.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: proj1,
    tech: "React, Node.js, MongoDB",
    desc: "A full e-commerce site with cart, admin panel, and Stripe integration.",
    link: "https://costacrave.com/",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    img: proj2,
    tech: "Next.js, Tailwind CSS",
    desc: "Track workouts and progress with a sleek, responsive design.",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    img: proj3,
    tech: "React, Framer Motion",
    desc: "A personal portfolio to showcase my latest development work.",
    link: "#",
  },
  {
    id: 4,
    title: "Chat App",
    img: proj1,
    tech: "React, Firebase",
    desc: "A real-time chat app with user authentication.",
    link: "#",
  },
  {
    id: 5,
    title: "Blog Platform",
    img: proj2,
    tech: "Next.js, MongoDB",
    desc: "A full-featured blog with markdown support and user dashboard.",
    link: "#",
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const nextProject = () => {
    setCurrent((prev) => (prev + 3) % total);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 3 + total) % total);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(current + i) % total]);
    }
    return visible;
  };

  return (
    <div id="Projects" className="min-h-screen bg-[#0d0d0d] text-white py-20 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-slate-400 text-lg">Check out some of my recent work</p>
      </motion.div>

      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={prevProject}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm"
        >
          ⬅ Prev
        </button>
        <button
          onClick={nextProject}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Next ➡
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {getVisibleProjects().map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm text-blue-400">{proj.tech}</p>
              <p className="text-slate-400 text-sm mt-2">{proj.desc}</p>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition duration-300"
              >
                🔗 Live Demo
              </motion.a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
