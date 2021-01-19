import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectBox = ({
  title,
  description,
  website,
  github,
  technologies,
  url,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openProject = () => {
    setShowModal(true);
  };
  return (
    <>
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
      <ProjectModal
        title={title}
        description={description}
        website={website}
        github={github}
        technologies={technologies}
        url={url}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ProjectBox;
