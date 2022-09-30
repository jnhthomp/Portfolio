import React from 'react';
import classes from './Hero.module.css';

const Hero = (props) => {

  return (
    <img src={props.heroImg} alt="Myself and my dog on a walk in Griffith Park" className={classes.round} />
  )
}

export default Hero