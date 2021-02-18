import React, { useEffect } from "react";
import ProjectBox from "./ProjectBox";
import { selectProjects } from "../features/projectsSlice";
import { useSelector } from "react-redux";

const ProjectsSection = () => {
  const allProjects = useSelector(selectProjects);
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
          {allProjects.map(
            ({
              id,
              title,
              description,
              website,
              github,
              technologies,
              url,
            }) => (
              <ProjectBox
                key={id}
                title={title}
                description={description}
                website={website}
                github={github}
                technologies={technologies}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
