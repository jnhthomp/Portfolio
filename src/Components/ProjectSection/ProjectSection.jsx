import React from 'react'
import classes from './ProjectSection.module.css';
import ProjectShowcase from './ProjectShowcase/ProjectShowcase';

const ProjectSection = (props) => {
  return (
    <div className={classes.projectSectionContainer} id="projects">
      {/* <div className={classes.projectsHeaderContainer}>
        <h2 className={classes.projectSectionHeader}>Projects</h2>
      </div> */}
      <ProjectShowcase />
    </div>
  )
}

export default ProjectSection