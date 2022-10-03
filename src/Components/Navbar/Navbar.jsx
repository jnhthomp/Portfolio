import React, {useState} from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {

  const [showMobile, setShowMobile] = useState(false)

  const toggleShowMobile = (e) => {
    setShowMobile((prevState) => !prevState)
  }
  return (
    <div className={`${classes.navContainer} ${showMobile ? classes.hasExpanded : ''}`}>
      <div onClick={toggleShowMobile} className={classes.burger}>{showMobile ? <>&#8212;</> : <>&#9776;</> }</div>
      <ul className={showMobile ? classes.expanded : ''}>
        <li className={classes.active}>Home</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Skills</li>
      </ul>
    </div>
  )
}

export default Navbar

// TODO: Add working links to navigate to sections of the page