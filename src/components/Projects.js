// components/Projects.js
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
      demoLink: 'https://demo-link.com',
      repoLink: 'https://github.com/yourusername/project',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '/images/project2.jpg',
      description: 'A mobile banking application with secure transaction features.',
      techStack: ['React Native', 'Firebase', 'Redux'],
      demoLink: 'https://demo-link.com',
      repoLink: 'https://github.com/yourusername/project',
    },
    {
      id: 3,
      title: 'Dashboard UI Design',
      category: 'design',
      image: '/images/project3.jpg',
      description: 'A modern dashboard UI design with interactive components.',
      techStack: ['Figma', 'Adobe XD', 'Illustrator'],
      demoLink: 'https://demo-link.com',
      repoLink: 'https://github.com/yourusername/project',
    },
    {
      id: 4,
      title: 'Recipe Sharing Platform',
      category: 'web',
      image: '/images/project4.jpg',
      description: 'A platform for food enthusiasts to share and discover recipes.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://demo-link.com',
      repoLink: 'https://github.com/yourusername/project',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {projectCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-100'
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
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-600 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub Repo
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