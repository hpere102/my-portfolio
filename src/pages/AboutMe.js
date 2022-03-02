import React from 'react';
import { Link } from 'react-router-dom';
import Cat from '../../src/images/cat-1.jpeg'





function AboutMe() {
  return (
    <section className="about-cont">
        <div className="about-bio">
          <div className="about-bio-title">
          <h1 id="about">About Me</h1>
          <hr class="my-4"></hr>
          <p class="lead"></p>
          </div>
          <h1>hector perez</h1>
          <p class="lead">I'm a Full Stack Developer based out of Miami, FL with
          a passion for both back end and front end programming. With every project 
          I come across, I try to bring my most creative ideas and hard work ethic 
          to focus on and reach our goals. 
          </p>
          <p className="margin-p">
          Living in Miami for the entirety of my life, I grew up a massive sports fan 
          for most Florida teams and the Green Bay Packers somehow... Nowadays I just play
          videos games, hit the gym, and eat. 
            </p>

            <div>
              <Link className="link-edit-contact" to="/contact">
                  Contact Me
              </Link>
            </div>
          
         </div>
        
        <div className="about-img-cont">
        <img className="cat-img" src={Cat} />
        </div>
      </section>
  );
}

export default AboutMe;