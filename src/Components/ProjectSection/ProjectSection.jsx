import React from 'react'
import classes from './ProjectSection.module.css';

const ProjectSection = (props) => {
  return (
    <div className={classes.projectSectionContainer}>
      {/* <div className={classes.projectsHeaderContainer}>
        <h2 className={classes.projectSectionHeader}>Projects</h2>
      </div> */}
      {props.children}
    </div>
  )
}

export default ProjectSection