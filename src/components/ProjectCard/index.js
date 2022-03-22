import React from 'react';





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
        <a href={data.github} target="_blank"  rel="noreferrer">Github</a>
        <a href={data.deployed} target="_blank"  rel="noreferrer">Deployed</a>
      </div>
    </div>
  </div>
</div>

   </main>

  );
};

