import React from "react";

const ProjectBox = ({
  title,
  description,
  website,
  github,
  technologies,
  url,
}) => {
  const openProject = () => {
    console.log("Projekt ODPRT!");
  };
  return (
    <div className='project-item-wrapper'>
      <div className='project-item'>
        <div className='project-item-image'>
          <img src={url} alt='Project image' />
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
