import React from 'react';
import './About.css'

const About = () => {
  return (
    <section id='About'>
        <div className="about-head">
        <span className="title"> About Me</span><br />
        <p className='knowpara'>To secure position in a challenging a reputable organization learnings, to expand
            my knowledge, and skills. Secure a responsible career opportunity to fully utilize my
            training and skills, while making a significant contribution to the success of the
            company.</p>
</div><br />

       
        <span className="edu-head">EDUCATION</span><br />
        <div className="education">
            
          <div class="columns">
                <ul class="price">
                    <li class="header">MBA</li>
                    <li class="grey">Bharath Institute of Higher Education
                            And Research</li>
                    <li>Chennai</li>
                    <li>2022 - Present</li>
                    
                </ul>
                </div>

                <div class="columns">
                <ul class="price">
                    <li class="header">BACHELOR OF ENGINEERING</li>
                    <li class="grey">Surya Group Of Institution Vikiravandi, Villupuram</li>
                    <li>CGPA-81%</li>
                    <li>2019 - 2022  </li>
                    
                </ul>
                </div>
          <div class="columns">
                <ul class="price">
                    <li class="header">DIPLOMA CIVIL ENGINEERING</li>
                    <li class="grey">Surya Polytechnic College Vikiravandi, Villupuram </li>
                    <li>CGPA-83%</li>
                    <li>2016 - 2019 </li>
                    
                </ul>
                </div>
        

        </div>


    </section>
  )
}

export default About