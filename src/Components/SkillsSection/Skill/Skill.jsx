import React from 'react'
import classes from './Skill.module.css'

const Skill = (props) => {
  return (
    <div className={classes.card}>
      <figure>
        <img src={props.logo} alt={`${props.title} logo`}></img>
      </figure>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default Skill