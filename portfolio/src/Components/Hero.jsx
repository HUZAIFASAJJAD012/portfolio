import React from "react";
import { motion } from "framer-motion";
import pic1 from "../assets/pic2.jpg"; // Replace with actual paths
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic2.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Huzaifa Sajjad",
    role: "Full Stack Developer",
    img: pic1,
    skills: "React, Node.js, MongoDB",
    desc: "Loves building scalable and interactive full-stack web applications.",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    img: pic2,
    skills: "Figma, Adobe XD, Tailwind",
    desc: "Passionate about creating intuitive and beautiful interfaces.",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    role: "Backend Engineer",
    img: pic3,
    skills: "Express, PostgreSQL, Docker",
    desc: "Enjoys solving complex problems and optimizing APIs.",
  },
];

const Team = () => {
  return (
    <div id="Team" className="min-h-screen px-4 py-16 md:px-8 lg:px-24 bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-slate-400 text-lg">Meet the minds behind the magic</p>
      </motion.div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <p className="text-blue-400 text-sm">{member.role}</p>
            <p className="mt-2 text-slate-400 text-sm">{member.skills}</p>
            <p className="mt-3 text-slate-300 text-sm">{member.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
