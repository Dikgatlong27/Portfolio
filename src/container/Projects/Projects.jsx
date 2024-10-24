import React from 'react'

import './Projects.css'

const Projects = () => {
  const projectList = [
    {
      title: "Fortress Restaurant",
      description: "Rebranded and developed the fine dining web app for a high-end restaurant.",
      link: "https://fortress-restaurant.netlify.app/"
    },
    {
      title: "CERAT - Furniture & Engineering Solutions",
      description: "I am currently working on a design project for CERAT, an online store specializing in furniture and engineering solutions",
      link: "https://www.figma.com/proto/13xJb7nr1N7m5P7oH59eMb/CERAT?no=&node-id=11-23&starting-point-node-id=11%3A23"
    },
    {
      title: "LPTB Solutions Web App",
      description: "Created a software company’s web platform to showcase their services and products.",
      link: "https://lptb-solutions.netlify.app/"
    },
    {
      title: "Fortress Restaurant",
      description: "Rebranded and developed the fine dining web app for a high-end restaurant.",
      link: "https://fortress-restaurant.netlify.app/"
    },
    {
      title: "Fortress Restaurant",
      description: "Rebranded and developed the fine dining web app for a high-end restaurant.",
      link: "https://fortress-restaurant.netlify.app/"
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects
