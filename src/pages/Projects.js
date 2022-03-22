import React from 'react';
import projects from '../utils/projectData'
import ProjectCard from '../components/ProjectCard'




const Projects = () => {

  
 
  return (
    <main className="projects-cont">
 
      <div className="projects-bio-cont">
        <h5 className="projects-bio">
          Front End, Back End, and Full Stack Deployed Applications
        </h5>
        <p>
        For all of my projects please visit my Github account. The projects below are all deployed applications.
        </p>
      </div>

      <div className="project-row-cont">
        <div className="project-row">
          <ProjectCard data={projects[0]}/>
          <ProjectCard data={projects[1]}/>
          <ProjectCard data={projects[2]}/>
        </div>

        <div className="project-row">
        <ProjectCard data={projects[3]}/>
        <ProjectCard data={projects[4]}/>
        <ProjectCard data={projects[5]}/>
        </div>
      </div>

   </main>

  );
};

export default Projects;