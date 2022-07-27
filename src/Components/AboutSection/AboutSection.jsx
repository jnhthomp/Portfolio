import React from 'react';
import classes from './AboutSection.module.css';
import baseStyle from '../../Styles/BaseStyles.module.css'


const AboutSection = (props) => {
  const logForm = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div className={`${classes.aboutSectionLayout} ${baseStyle.greySection} ${baseStyle.section}`}>
      {props.children}
    </div>
  )
}

export default AboutSection