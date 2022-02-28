import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

function App() {
  return (
    
    <Router>

      <Header />
    
      
      
      <Routes className="switch-margin">

        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/contact" element={<Contact />} />

     </Routes>

    

<Footer />

  </Router>

  );
}

export default App;
