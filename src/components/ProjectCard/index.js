import React from 'react';
import { Link } from 'react-router-dom';




export default function ProjectCard({ data }) {

  
 
  return (
    <main>
      
      <div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>{data.name}</h3>
      
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

   </main>

  );
};

