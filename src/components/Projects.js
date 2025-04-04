import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = ['all', 'web', 'design', 'mobile'];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: '/images/project1.jpg',
      description: 'A full-stack e-commerce platform built with React and Node.js.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '/images/project2.jpg',
      description: 'A mobile banking application with secure transaction features.',
      techStack: ['React Native', 'Firebase', 'Redux'],
      demoLink: '#',
      repoLink: '#',
    },
    {
      id: 3,
      title: 'Dashboard UI Design',
      category: 'design',
      image: '/images/project3.jpg',
      description: 'A modern dashboard UI design with interactive components.',
      techStack: ['Figma', 'Adobe XD', 'Illustrator'],
      demoLink: '#',
      repoLink: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 font-display">My Projects</h2>
          <div className="w-16 h-1 bg-primary-400 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-lg capitalize transition-all ${
                  activeFilter === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-primary-300 hover:bg-primary-200 shadow-sm'
                }`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-56 bg-primary-200 flex items-center justify-center relative overflow-hidden">
                <span className="text-primary-300 z-10">Project Image</span>
                <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-primary-500">{project.title}</h3>
                  <span className="px-2 py-1 bg-primary-100 text-primary-500 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-primary-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-primary-100 text-primary-500 text-xs rounded-full hover:bg-primary-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between border-t border-primary-200 pt-4">
                  <motion.a
                    href={project.demoLink}
                    className="text-primary-500 hover:text-primary-400 flex items-center transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    className="text-primary-300 hover:text-primary-400 flex items-center transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;