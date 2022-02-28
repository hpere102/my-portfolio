import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    
    <header className="header-cont">
      
        <nav className="nav-link-cont">
              <Link className="nav-link" to="/">home</Link>
              <Link className="nav-link" to="/skills">skills</Link>    
              <Link className="nav-link" to ="/projects">projects</Link>
              <Link className="nav-link" to="/about">about me</Link>
        </nav>
      
    </header>

   
    
  );
};

export default Header;