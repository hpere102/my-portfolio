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
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div className="data-row" >
        <a href={data.github} target="_blank">Github</a>
        <a href={data.deployed} target="_blank">Deployed</a>
      </div>
    </div>
  </div>
</div>

   </main>

  );
};

