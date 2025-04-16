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
         
          <h1 className="text-2xl md:text-3xl lg:text-5xl p-2 font-bold bg-gradient-to-r from-blue-200 via-sky-300 to-blue-300 text-transparent bg-clip-text">
            Huzaifa Sajjad
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white">
          I’m Huzaifa Sajjad, the Founder and CEO of LogiNest a software company driven by innovation, precision, and results. With over 2 years of real-world experience working with startups, agencies, and corporate clients, I specialize in building scalable, high-performance web and mobile applications.

Throughout my journey, I’ve successfully delivered 100+ modern digital solutions, blending technical expertise with a deep understanding of user experience and business goals. At LogiNest, I lead a passionate team focused on transforming ideas into impactful digital products that help brands grow and thrive in today’s tech-driven world. </p>
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
