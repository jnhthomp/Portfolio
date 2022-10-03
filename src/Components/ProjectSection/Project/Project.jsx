import React from 'react';
import classes from './Project.module.css';

// TODO: Add links to github/live version

const Project = (props) => {
  return (
    <div className={classes.project}>
      <img src={props.img} alt="Project preview" />
      <div>
        <h5>{props.title}</h5>
        <p>{props.projDescription}</p>
      </div>
    </div>
  )
}

export default Project