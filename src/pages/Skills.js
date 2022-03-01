import React from 'react';
import { Link } from 'react-router-dom';





const Skills = () => {

 
  return (
    <main className="skills-cont">
      <div className="skills-bio-cont">
        <h5 className="skills-bio">
          Languages, Frameworks, & Tools
        </h5>
        <p>Below are languages and other tools I have experience using on most projects I work on and my most current projects as well.  </p>
      </div>

     <div className="icon-cont">
       <div className="icon-row">
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      </div>
      <div className="icon-row">
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />
      </div>
      <div className="icon-row">
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
      <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
      </div>
      </div>
</main>

  );
};

export default Skills;