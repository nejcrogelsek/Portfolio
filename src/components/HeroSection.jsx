import React from "react";
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img5.jpg";

const HeroSection = () => {
  const openResume = () => {
    console.log("OPEN RESUME");
  };
  return (
    <section id='hero'>
      <div className='heroBg'>
        <img src={image2} alt='Napaka pri povezavi.' />
        <div className='container'>
          <div className='row'>
            <div className='col-12 hero-content'>
              <h1>
                Nejc
                <br />
                Rogelšek
              </h1>
              <div className='heroAnim-wrapper'>
                <span>Full-Stack Developer</span>
              </div>
              <button className='heroBtn-resume' onClick={openResume}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
