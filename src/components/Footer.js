import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-primary-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            LinkedIn
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
            GitHub
          </a>
          <a href="mailto:your.email@example.com" className="opacity-80 hover:opacity-100 transition-opacity">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;