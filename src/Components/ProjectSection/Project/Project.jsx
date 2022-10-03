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
        <div className={classes.links}>
          {props.gitLink && <a href={props.gitLink} className={classes.git}>Github</a>}
          {props.liveLink && <a href={props.liveLink} className={classes.live}>Live Site</a>}
        </div>
      </div>
    </div>
  )
}

export default Project