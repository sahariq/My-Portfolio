import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, technologies, githubLink, image }) => {
    return (
      <div className="project-card">
        <div className="project-image">
          <img src={image} alt={title} />
          <div className="project-overlay">
            <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tech">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;