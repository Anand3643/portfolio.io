import React from 'react';
import './Certificate.css';
import cert1 from '../../assets/cert1 (1).png';
import cert2 from '../../assets/cert1 (2).png';
import cert3 from '../../assets/cert1 (3).png';
import cert4 from '../../assets/cert1 (4).png';
import cert5 from '../../assets/cert1 (5).png';
import cert6 from '../../assets/cert1 (6).png';
import cert7 from '../../assets/cert 1 (7).jpg';
import cert8 from '../../assets/cert 1 (8).jpg';
import cert9 from '../../assets/cert1 (9).jpg';

const Certificate = () => {
  return (
    <section  id='Certificate'  className="certificate">
        <h1 className="cert-title">Certificate</h1>
        <span className="cert-desc">These are documents that are awarded to individuals who have completed a course or a program taught online. These certificates serve as proof of successfully finishing the course and may be used to demonstrate knowledge or skills gained through the said course.</span>
         

 <div className="showcert">

                    <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert1}>
                <img src={cert1} alt="ghc" />
                </a>
                <div class="desc">Complete AWS</div>
            </div>
            </div>

            <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert2}>
                <img src={cert2} alt="chg" />
                </a>
                <div class="desc">Complete Java Script</div>
            </div>
            </div>

            <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert3}>
                <img src={cert3} alt="ghdc" />
                </a>
                <div class="desc">Complete Machine Learning</div>
            </div>
            </div>

           
            </div>




            <div className="showcert">

                            <div class="responsive">
                            <div class="gallery">
                            <a target="_blank" href={cert4}>
                            <img src={cert4} alt="ghc" />
                            </a>
                            <div class="desc">Complete My Sql</div>
                            </div>
                            </div>

                            <div class="responsive">
                            <div class="gallery">
                            <a target="_blank" href={cert5}>
                            <img src={cert5} alt="chg" />
                            </a>
                            <div class="desc">Complete MongoDB</div>
                            </div>
                            </div>

                            <div class="responsive">
                            <div class="gallery">
                            <a target="_blank" href={cert6}>
                            <img src={cert6} alt="ghdc" />
                            </a>
                            <div class="desc">Complete Html & Css</div>
                            </div>
                            </div>


</div>

<div className="showcert">

                    <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert7}>
                <img src={cert7} alt="ghc" />
                </a>
                <div class="desc">Intership Web Development</div>
            </div>
            </div>

            <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert8}>
                <img src={cert8} alt="chg" />
                </a>
                <div class="desc">Complete Course </div>
            </div>
            </div>

            <div class="responsive">
            <div class="gallery">
                <a target="_blank" href={cert9}>
                <img src={cert9} alt="ghdc" />
                </a>
                <div class="desc">Complete UDMY</div>
            </div>
            </div>

           
            </div>



           
            
                

            
  


    </section>
  )
}

export default Certificate