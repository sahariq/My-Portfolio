import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary-500 font-display"
        >
          Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative text-primary-300 hover:text-primary-500 transition-colors capitalize group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-500 p-2 rounded-lg hover:bg-primary-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md p-6 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-6">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <motion.li 
                key={item}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * ['home', 'about', 'projects', 'contact'].indexOf(item) }}
              >
                <a
                  href={`#${item}`}
                  className="block text-primary-500 hover:text-primary-400 transition-colors capitalize text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;