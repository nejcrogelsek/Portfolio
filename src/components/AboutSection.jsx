import React from "react";
import MyProfile from "../assets/images/avatar.jpg";
import Resume from "../assets/pdf/resume.pdf";

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6 about-image-wrapper'>
            <img src={MyProfile} alt='Napaka pri povezavi.' />
          </div>
          <div className='col-12 col-md-12 col-lg-6 about-content-wrapper'>
            <h2>
              Hello! I'm Nejc Rogelšek,
              <br />
              A Full Stack Developer
              <br />
              From Slovenia.
            </h2>
            <p>
              Through High School and self taught education, I have developed a
              strong understanding of JavaScript (ES5 & ES6), React, Node.js,
              Express, relational and non relational database (PostgreSQL,
              MongoDB), HTML5, and CSS3. As a developer, I find a lot of joy and
              excitement utilizing my skills to help troubleshoot bugs and
              pushing projects forward. I enjoy learning new technologies and
              growing in a field that is constantly being pushed to new
              boundaries.
            </p>
            <p>
              Feel free to connect with me! Let's talk about web dev, tech,
              sports, music, video games, or how I can be of help to your team
              or business! I'd love to get to know more developers and expand my
              network.
            </p>
            <h3>Let’s build something cool.</h3>
            <p>
              <span>Mail: </span>
              <a href='mailto:nejcrogelsek0@gmail.com' target='_blank'>
                nejcrogelsek0@gmail.com
              </a>
            </p>
            <p>
              <span>LinkedIn: </span>
              <a
                href='https://www.linkedin.com/in/nejcrogelsek'
                target='_blank'>
                https://www.linkedin.com/in/nejcrogelsek
              </a>
            </p>
            <p>
              <span>GitHub: </span>
              <a href='https://github.com/nejcrogelsek' target='_blank'>
                https://github.com/nejcrogelsek
              </a>
            </p>
            <a href={Resume} className='heroBtn-resume'>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
