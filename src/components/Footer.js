// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;