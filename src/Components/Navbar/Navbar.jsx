import React from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <ul>
        <li class={classes.active}>Home</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Skills</li>
      </ul>
    </div>
  )
}

export default Navbar