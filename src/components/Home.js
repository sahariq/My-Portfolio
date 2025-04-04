import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:h-screen flex items-center bg-primary-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary-300 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 md:flex items-center relative z-10">
        <div className="md:w-1/2 mb-16 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-medium text-primary-500 mb-2 tracking-wider">HELLO, I'M</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-primary-300 mb-8 max-w-lg">
              Crafting <span className="font-semibold text-primary-500">beautiful</span> digital experiences with a focus on <span className="font-semibold text-primary-400">user-centered</span> design.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-8 py-3.5 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3.5 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="md:w-1/2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-2xl bg-gradient-to-br from-primary-200 to-primary-300 shadow-2xl overflow-hidden border-8 border-white">
              <div className="w-full h-full flex items-center justify-center text-primary-300">
                Your Photo Here
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-400 rounded-xl -z-10 rotate-12"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-500 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;