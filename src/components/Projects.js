import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Website',
      description: 'Interactive weather forecasting application',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/sahariq/WeatherWebsite'
    },
    {
      title: 'Movie Recommendation System Backend',
      description: 'RESTful API for movie recommendations',
      technologies: ['JavaScript'],
      githubLink: 'https://github.com/sahariq/Backend-Development-for-Movie-Recommendation-System'
    },
    {
      title: 'Event Management System',
      description: 'Comprehensive event scheduling and management tool',
      technologies: ['C#'],
      githubLink: 'https://github.com/sahariq/Event-Management-System'
    },
    {
      title: 'Genetic Algorithm for Date Validation',
      description: 'Optimized date validation using genetic algorithms',
      technologies: ['Python'],
      githubLink: 'https://github.com/sahariq/Clinic-Appointment-System'
    },
    {
      title: 'Clinic Appointment System',
      description: 'Web-based appointment scheduling system',
      technologies: ['React', 'Javascript', 'Node.js'],
      githubLink: 'https://github.com/sahariq/Clinic-Appointment-System'
    },
    {
      title: 'Book Lending System',
      description: 'Library management and book lending application',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/sahariq/Node.js-based-Book-Lending-System'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Showcase of personal projects and skills',
      technologies: ['HTML', 'Tailwind CSS'],
      githubLink: 'https://github.com/sahariq/Personal-Portfolio-with-HTML-and-Tailwind'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="underline"></div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
