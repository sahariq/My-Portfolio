
  /*const projects = [
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
    }*/
      import React from 'react';
      import ProjectCard from './ProjectCard';
      import '../styles/Projects.css';
      
      const Projects = () => {
        const projects = [
          {
            title: "Weather Website",
            description: "Interactive weather forecasting Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "#"
          },
          {
            title: "Weather Website",
            description: "Interactive weather forecasting Website",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "#"
          },
          {
            title: "Weather Website",
            description: "Interactive weather forecasting Website",
            technologies: ["HTML", "CSS"],
            githubLink: "#"
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