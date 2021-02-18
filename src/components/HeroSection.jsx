import React from "react";
import image2 from "../assets/images/img2.jpg";
import { Link as LinkS } from "react-scroll";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Typical from "react-typical";
import Resume from "../assets/pdf/resume.pdf";

const HeroSection = () => {
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
                <span className='wiggly-font'>N</span>
                <span className='wiggly-font'>E</span>
                <span className='wiggly-font'>J</span>
                <span className='wiggly-font'>C</span>
                <br />
                <span className='wiggly-font'>R</span>
                <span className='wiggly-font'>O</span>
                <span className='wiggly-font'>G</span>
                <span className='wiggly-font'>E</span>
                <span className='wiggly-font'>L</span>
                <span className='wiggly-font'>Š</span>
                <span className='wiggly-font'>E</span>
                <span className='wiggly-font'>K</span>
              </h1>
              <div className='heroAnim-wrapper'>
                <Typical
                  loop={Infinity}
                  steps={["Full Stack Developer", 1000, "Coder", 1000]}
                  wrapper='p'
                />
              </div>
              <a href={Resume} className='heroBtn-resume'>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
