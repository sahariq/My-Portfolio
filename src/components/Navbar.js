import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = ({ darkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className={`nav-link ${darkMode ? 'dark' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500}
              className={`nav-link ${darkMode ? 'dark' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              className={`nav-link ${darkMode ? 'dark' : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className={`nav-link ${darkMode ? 'dark' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;