import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import pic from "../assets/pic2.jpg";

const AboutUs = () => {
  return (
    <div
      id="About"
      className="min-h-screen w-full px-4 py-12 md:px-8 lg:px-24 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 md:gap-16 lg:gap-24"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6 max-w-xl"
        >
         
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-200 via-sky-300 to-blue-300 text-transparent bg-clip-text">
            Huzaifa Sajjad
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-slate-400">
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. My journey in web
            development has been fueled by a desire to learn and grow, and I am
            excited to take on new challenges in this ever-evolving field.
          </p>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/huzaifasajjad012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <FaGithub className="text-amber-50 text-3xl" />
              </motion.div>
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifasajjad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                <FaLinkedin className="text-amber-50 text-3xl" />
              </motion.div>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src={pic}
          alt="Huzaifa Sajjad"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-64 sm:w-72 md:w-80 lg:w-[400px] rounded-full hover:scale-105 transform hover:rotate-2 transition-transform duration-300"
        />
      </motion.div>
    </div>
  );
};

export default AboutUs;
