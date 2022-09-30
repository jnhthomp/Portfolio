import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
  return (
    <div className={classes.project}>
      <img src={props.img} alt="Project preview" />
      <h5>{props.title}</h5>
      {props.projDescription}
    </div>
  )
}

export default Project