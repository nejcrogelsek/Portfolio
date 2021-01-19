import React from "react";
import image from "../assets/images/image1.png";

const ProjectBox = ({ title, description, website, github, technologies }) => {
  const openProject = () => {
    console.log("Projekt ODPRT!");
  };
  return (
    <div className='project-item-wrapper'>
      <div className='project-item'>
        <div className='project-item-image'>
          <img src={image} alt='Project image' />
        </div>
        <div className='project-item-content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className='heroBtn-resume' onClick={openProject}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
