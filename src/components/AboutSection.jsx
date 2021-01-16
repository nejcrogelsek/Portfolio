import React from "react";
import MyProfile from "../assets/images/avatar.jpg";

const AboutSection = () => {
  const openResume = () => {
    console.log("OPEN RESUME");
  };
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              similique commodi optio amet natus recusandae ut harum. Ut in
              commodi voluptatibus ab omnis hic libero aperiam atque numquam,
              ullam expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              itaque consequuntur velit quisquam a. Quasi exercitationem
              perferendis placeat tempora? Hic, quis sed! Sint nostrum eveniet,
              voluptate exercitationem sapiente laboriosam! Saepe?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus qui nostrum ratione, ullam, dolorem harum cupiditate
              modi quis porro architecto perferendis maiores a? Nobis natus unde
              aspernatur? Suscipit, officiis est.
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
            <button className='heroBtn-resume' onClick={openResume}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
