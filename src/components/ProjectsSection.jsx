import React from "react";
import image from "../assets/images/image1.png";

const ProjectsSection = () => {
  const openProject = () => {
    console.log("Projekt ODPRT!");
  };
  return (
    <section id='projects' className='projects-container'>
      <div className='container'>
        <div className='row text-center projects-top-section'>
          <div className='col-12'>
            <h2>Projects</h2>
          </div>
          <div className='col-12'>
            <p>
              From ideation to creation, here are some applications that I have
              developed.
            </p>
          </div>
        </div>
        <div className='row projects-wrapper'>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 project-item-wrapper'>
            <div className='project-item'>
              <div className='project-item-image'>
                <img src={image} alt='Project image' />
              </div>
              <div className='project-item-content'>
                <h3>Get Cookin</h3>
                <p>
                  A dynamic web application made for home cooks who want to use
                  up the items in their kitchen.
                </p>
                <button className='heroBtn-resume' onClick={openProject}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
