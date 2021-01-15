import React from "react";
import VSCode from "../assets/images/tools/vscode.svg";
import Git from "../assets/images/tools/git.svg";
import GitHub from "../assets/images/tools/github.svg";
import npm from "../assets/images/tools/npm.svg";
import AdobePhotoshop from "../assets/images/tools/adobe_photoshop.svg";

const ToolSection = () => {
  return (
    <section id='skills'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-12'>
            <h2>Tools</h2>
          </div>
          <div className='col-12'>
            <p>My weapons of choice to help tackle any project.</p>
          </div>
        </div>
        <div className='row justify-content-center skills-wrapper'>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={VSCode} alt='JavaScript' />
            <h5>Visual Studio Code</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={Git} alt='ReactJS' />
            <h5>Git</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={GitHub} alt='Redux' />
            <h5>GitHub</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={npm} alt='Firebase' />
            <h5>npm</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-3 skill-item'>
            <img src={AdobePhotoshop} alt='NodeJS' />
            <h5>Adobe Photoshop</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
