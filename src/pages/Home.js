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
        To view my projects, click on the <Link className="click-link" to="/projects"><span>projects page</span></Link> and explore my latest work.
        You can get in touch with me through my <Link className="click-link" to="/contact"><span>contact page</span></Link> and leave me a message :)
      </p>
</main>

  );
};

export default Home;