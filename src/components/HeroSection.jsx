import React from "react";
import image2 from "../assets/images/img2.jpg";
import { Link as LinkS } from "react-scroll";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const HeroSection = () => {
  const openResume = () => {
    console.log("OPEN RESUME");
  };
  return (
    <section id='hero'>
      <div className='heroBg'>
        <img src={image2} alt='Napaka pri povezavi.' />
        <span className='hero-arrow'>
          <LinkS
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={0}>
            <ArrowDownwardIcon />
          </LinkS>
        </span>
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
