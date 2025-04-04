// components/Home.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:h-screen flex items-center">
      <div className="container mx-auto px-4 md:flex items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-indigo-600 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              UI/UX Designer & Software Engineer
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div
            className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-indigo-100 mx-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-indigo-400 text-lg">Your Photo Here</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;