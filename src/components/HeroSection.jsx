import React from "react";
import image2 from "../assets/images/img2.jpg";
import { Link as LinkS } from "react-scroll";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Typical from "react-typical";

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
                <span class='wiggly-font'>N</span>
                <span class='wiggly-font'>E</span>
                <span class='wiggly-font'>J</span>
                <span class='wiggly-font'>C</span>
                <br />
                <span class='wiggly-font'>R</span>
                <span class='wiggly-font'>O</span>
                <span class='wiggly-font'>G</span>
                <span class='wiggly-font'>E</span>
                <span class='wiggly-font'>L</span>
                <span class='wiggly-font'>Š</span>
                <span class='wiggly-font'>E</span>
                <span class='wiggly-font'>K</span>
              </h1>
              <div className='heroAnim-wrapper'>
                <Typical
                  loop={Infinity}
                  steps={["Full Stack Developer", 1000, "Coder", 1000]}
                  wrapper='p'
                />
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
