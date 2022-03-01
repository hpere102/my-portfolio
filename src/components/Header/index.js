import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    
    <header className="header-cont">
      
        <nav className="nav-link-cont">
              <NavLink className="nav-link" activeClassName='active' to="/">home</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/skills">skills</NavLink>    
              <NavLink className="nav-link" activeClassName='active' to ="/projects">projects</NavLink>
              <NavLink className="nav-link" activeClassName='active' to="/about">about me</NavLink>
        </nav>
      
    </header>

   
    
  );
};

export default Header;