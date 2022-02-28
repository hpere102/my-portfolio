import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    
    <header className="">
      
        <nav className="nav-links">
              <Link to="/">home</Link>
              <Link to="/skills">skills</Link>    
              <Link to ="/projects">projects</Link>
              <Link to="/about">about me</Link>
        </nav>
      
    </header>

   
    
  );
};

export default Header;