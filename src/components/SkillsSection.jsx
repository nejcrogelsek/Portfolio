import React from "react";
import JavaScript from "../assets/images/skills/javascript.svg";
import ReactJS from "../assets/images/skills/reactjs.svg";
import Redux from "../assets/images/skills/redux.svg";
import Firebase from "../assets/images/skills/firebase.svg";
import NodeJS from "../assets/images/skills/nodejs.svg";
import Express from "../assets/images/skills/express.svg";
import MongoDB from "../assets/images/skills/mongodb.svg";
import Django from "../assets/images/skills/django.svg";
import HTML5 from "../assets/images/skills/html5.svg";
import CSS3 from "../assets/images/skills/css3.svg";
import Bootstrap4 from "../assets/images/skills/bootstrap4.svg";
import SASS from "../assets/images/skills/sass.svg";

const SkillsSection = () => {
  return (
    <section id='skills'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-12'>
            <h2>Skills</h2>
          </div>
          <div className='col-12'>
            <p>
              Languages and Technologies that I have learned and applied to my
              projects
            </p>
          </div>
        </div>
        <div className='row justify-content-center skills-wrapper'>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={JavaScript} alt='JavaScript' />
            <h5>JavaScript (ES5/ES6)</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={ReactJS} alt='ReactJS' />
            <h5>React.js</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Redux} alt='Redux' />
            <h5>Redux</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Firebase} alt='Firebase' />
            <h5>Firebase Realtime Database</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={NodeJS} alt='NodeJS' />
            <h5>Node.js</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Express} alt='Express' />
            <h5>Express</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={MongoDB} alt='MongoDB' />
            <h5>MongoDB</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Django} alt='Django' />
            <h5>Django</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={HTML5} alt='HTML5' />
            <h5>HTML5</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={CSS3} alt='CSS3' />
            <h5>CSS 3</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Bootstrap4} alt='Bootstrap4' />
            <h5>Bootstrap 4</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={SASS} alt='SASS' />
            <h5>SASS</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
