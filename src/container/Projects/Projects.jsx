import React from 'react'

import './Projects.css'

const Projects = () => {
  const projectList = [
    {
      title: "Fortress Restaurant",
      description: "Rebranded and developed the fine dining web app for a high-end restaurant.",
      link: "https://www.fortressforte.co.za/"
    },
    {
      title: "CERAT - Furniture & Engineering Solutions",
      description: "I am currently working on a design project for CERAT, an online store specializing in furniture and engineering solutions",
      link: "https://www.figma.com/proto/13xJb7nr1N7m5P7oH59eMb/CERAT?no=&node-id=11-23&starting-point-node-id=11%3A23"
    },
    {
      title: "LPTB Solutions Web App",
      description: "Building a dynamic web application for a software company to showcase their services and products and more",
      link: "https://lptb-solutions.netlify.app/"
    },
    {
      title: "Osazovela Photographer Portfolio",
      description: "A personal portfolio for a Photographer",
      link: "https://osazovela.netlify.app/"
    },
    {
      title: "The Chairman Fortaleza de Sol",
      description: "Website for a culinary sanctuary where the rich tapestry of Portuguese, Italian, Greek, and African cuisines unfolds.",
      link: "https://chairman-forte.netlify.app/"
    },
  ];

  return (
    <section id="projects" className='container'>
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
