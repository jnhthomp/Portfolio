import React, {useState} from 'react';
import { Link } from 'react-scroll';
import classes from './Navbar.module.css';

const Navbar = () => {

  const [showMobile, setShowMobile] = useState(false)

  const toggleShowMobile = (e) => {
    setShowMobile((prevState) => !prevState)
  }

  const closeMobile = () => {
    setShowMobile(false)
  }

  const handleSetActive = (to) => {
    closeMobile()
  }

  return (
    <div className={`${classes.navContainer} ${showMobile ? classes.hasExpanded : ''}`}>
      <div onClick={toggleShowMobile} className={classes.burger}>{showMobile ? <>&#8212;</> : <>&#9776;</> }</div>
      <ul className={showMobile ? classes.expanded : ''}>
        <li><Link onSetActive={handleSetActive} activeClass={classes.active} offset={-200} to="about" spy={true} smooth={true} duration={500} >Home</Link></li>
        <li><Link onSetActive={handleSetActive} activeClass={classes.active} offset={-150} to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li><Link onSetActive={handleSetActive} activeClass={classes.active} offset={-200} to="skills" spy={true} smooth={true} duration={500} >Skills</Link></li>
        <li><Link onSetActive={handleSetActive} activeClass={classes.active} offset={-75} to="experience" spy={true} smooth={true} duration={500}>Experience</Link></li>
      </ul>
    </div>
  )
}

export default Navbar