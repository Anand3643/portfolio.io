import React from 'react';
import './Project.css';
import  projectimg1  from "../../assets/project1.jpg";
import  projectimg2  from "../../assets/project2.webp";
import  projectimg3  from "../../assets/project3.jpg";


const Project = () => {
  return (
    <section id="Project" className="projects">
        <spam className="pro-title">PROJECTS</spam>
       <p className="project-decp"> I designed and developed a dynamic and user-friendly website. That effectively showcased my skills in web development and design. This project was a testament to my ability to create engaging digital experiences while implementing best practices in front-end and back-end development.</p>
     <div className="project-card">
       <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">    
     <img src={projectimg1} alt="Avatar" className="avatarss"/>

    </div>
    <div class="flip-card-back">
      <h1>ECommerce website</h1><br />
      
      <p>I use HTML code to build the foundation of an e-commerce website, and CSS code to style it. Every code is discussed in depth</p><br />
       
       <a href="https://tks-mart.netlify.app/" target="_blank" rel="noopener noreferrer">
      <button className="btn-click">Click</button>
      </a><br />
      <spam className="visit">With Pleasure</spam>
    </div>
  </div>
</div> 


       <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">    
     <img src={projectimg2} alt="Avatar" className="avatarss"/>

    </div>
    <div class="flip-card-back">
      <h1>Movie Download </h1><br />
      
      <p>I use HTML code to build the foundation of an e-commerce website, and CSS code to style it. Every code is discussed in depth</p><br />
       
       <a href="https://movie-linked.netlify.app/index.html" target="_blank" rel="noopener noreferrer">
      <button className="btn-click">Click</button> </a><br />
      <spam className="visit">With Pleasure</spam>
    </div>
  </div>
</div> 

       <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">    
     <img src={projectimg3} alt="Avatar" className="avatarss"/>

    </div>
    <div class="flip-card-back">
      <h1>Social Media </h1><br />
      
      <p>React makes it simple to design interactive user interfaces.</p><br />
       
       <a href="https://anand3643.github.io/soccial/" target="_blank" rel="noopener noreferrer">
      <button className="btn-click">Click</button></a><br />
      <spam className="visit">With Pleasure</spam>
    </div>
  </div>
</div> 


</div>

    </section>
  )
}

export default Project