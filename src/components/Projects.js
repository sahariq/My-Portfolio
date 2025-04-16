import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather Website',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description: 'Interactive weather forecasting application',
      githublink: 'https://github.com/sahariq/WeatherWebsite'
      },
      {
      id: 2,
      title: 'Movie Recommendation System Backend',
      skills: ['JavaScript'],
      description: 'RESTful API for movie recommendations',
      githubLink: 'https://github.com/sahariq/Backend-Development-for-Movie-Recommendation-System'
      },
      {
      id: 3,
      title: 'Event Management System',
      skills: ['C#'],
      description: 'Comprehensive event scheduling and management tool',
      githubLink: 'https://github.com/sahariq/Event-Management-System'
      },
      {
      id: 4,
      title: 'Genetic Algorithm for Date Validation',
      skills: ['Python'],
      description: 'Optimized date validation using genetic algorithms',
      githubLink: 'https://github.com/sahariq/Clinic-Appointment-System'
      },
    {
      id: 5,
      title: 'Clinic Appointment System',
      skills: ['React', 'Javascript', 'Node.js'],
      description: 'Web-based appointment scheduling system',
      githubLink: 'https://github.com/sahariq/Clinic-Appointment-System' // Replace with actual link
    },
    {
      id: 6,
      title: 'Book Lending System',
      skills: ['Node.js', 'Express', 'MongoDB'],
      description: 'Library management and book lending application',
      githubLink: 'https://github.com/sahariq/Node.js-based-Book-Lending-System' // Replace with actual link
    },
    {
      id: 7,
      title: 'Personal Portfolio Website',
      skills: ['HTML', 'Tailwind CSS'],
      description: 'Showcase of personal projects and skills',
      githubLink: 'https://github.com/sahariq/Personal-Portfolio-with-HTML-and-Tailwind' // Replace with actual link
    }
  ];

  const carouselRef = useRef();

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Adjust the scroll amount as needed
    }
  };

  return (
    <section id="projects" className="py-12 bg-primary-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-display text-primary-500">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary-400 mx-auto mt-2"></div>
        </div>

        <div className="relative overflow-hidden">
          {/* Left arrow */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
          >
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2"
          >
            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2"
            style={{ 
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory'
            }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
                whileHover={{ y: -5 }}
              >
                <div className="p-5 h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-primary-500 mb-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2.5 py-1 bg-primary-100 text-primary-500 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-primary-300 mb-4 flex-grow">{project.description}</p>

                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="self-start text-xs font-medium text-primary-400 hover:text-primary-500 transition-colors flex items-center"
                  >
                    GitHub
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;