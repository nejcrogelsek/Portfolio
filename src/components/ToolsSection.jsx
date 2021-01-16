import React from "react";
import VSCode from "../assets/images/tools/vscode.svg";
import Git from "../assets/images/tools/git.svg";
import GitHub from "../assets/images/tools/github.svg";
import npm from "../assets/images/tools/npm.svg";
import slack from "../assets/images/tools/slack.svg";
import AdobePhotoshop from "../assets/images/tools/adobe_photoshop.svg";

const ToolSection = () => {
  return (
    <section id='tools' className='reusable-container'>
      <div className='container'>
        <div className='row text-center reusable-top-section'>
          <div className='col-12'>
            <h2>Tools</h2>
          </div>
          <div className='col-12'>
            <p>My weapons of choice to help tackle any project.</p>
          </div>
        </div>
        <div className='row justify-content-center reusable-wrapper'>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={VSCode} alt='Visual Studio Code' />
            <h5>Visual Studio Code</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={Git} alt='Git' />
            <h5>Git</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={GitHub} alt='Github' />
            <h5>GitHub</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={npm} alt='npm' />
            <h5>npm</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={slack} alt='Slack' />
            <h5>Slack</h5>
          </div>
          <div className='col-12 col-sm-6 col-md-4 reusable-item'>
            <img src={AdobePhotoshop} alt='Adobe Photoshop' />
            <h5>Adobe Photoshop</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;
