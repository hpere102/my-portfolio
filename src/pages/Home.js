import React from 'react';
import { Link } from 'react-router-dom';





const Home = () => {

 
  return (
    <main className="home-cont">
      <div className="intro-cont">
      <p className="intro-line anim-typewriter">
        Hello, my name is <span>Hector Perez</span> and I am a Full Stack Developer.
      </p>
      </div>
      <p id="showMe" className="show-me-bio">
        To view my projects, click on the projects page and view my latest work.
      </p>
</main>

  );
};

export default Home;