import React from 'react'
import classes from './ProjectSection.module.css';
import baseStyle from '../../Styles/BaseStyles.module.css';

const ProjectSection = (props) => {
  return (
    <div className={`${baseStyle.section} ${baseStyle.purpleSection}`}>{props.children}</div>
  )
}

export default ProjectSection