import React from 'react';
import classes from './AboutSection.module.css';
import baseStyle from '../../Styles/BaseStyles.module.css'
import ContactForm from './ContactForm/ContactForm';
import Hero from './Hero/Hero';
import heroImg from '../../Assets/hero1.jpg';
import AboutDescription from './AboutDescription/AboutDescription';

const AboutSection = (props) => {
  // If making a hero image picture changer...
  // 1. import all hero images that will be used
  // 2. Add all to array
  // 3. Set timer to cycle through array to change what image is being sourced

  const logForm = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div className={`${classes.aboutSectionLayout} ${baseStyle.section}`}>
      {/* Start About-Left */}
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Jonah<br/>Thompson</h1>
        </div>
        <div className={classes.formContainer}>
          <ContactForm onFormSubmit={logForm} />
        </div>
      </div>
      {/* End About-Left */}
      {/* Start About-Center */}
      <div className={`${classes.heroContainer} ${classes.container}`}>
        <Hero heroImg={heroImg} />
      </div>
      {/* End About-Center */}
      {/* Start About-Right */}
      <div className={classes.container}>
        <AboutDescription />
      </div>
    </div>
  )
}

export default AboutSection