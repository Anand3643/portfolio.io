import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png'
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="Intro">
        <div className="introContent">

            <span className="hello">Hello,</span><br></br>
            <span className="introText">I'm</span> <span className="name">Anand</span><br />
           
            <span className="introname">Full Stack Developer</span>
            <p className="shortintro">The work is typically very project focused and involves collaborating with a team that helps to coordinate the client's needs into the end product</p>
            <Link><button className="btn"><img src={btnimg} alt="" className="btnImg"/>Hire me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro