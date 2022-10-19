import React from 'react';
import classes from './AboutSection.module.css';
import ContactForm from './ContactForm/ContactForm';
import Hero from './Hero/Hero';
import AboutDescription from './AboutDescription/AboutDescription';

const AboutSection = (props) => {
  // If making a hero image picture changer...
  // 1. import all hero images that will be used
  // 2. Add all to array
  // 3. Set timer to cycle through array to change what image is being sourced

  const heroImg = 'https://jtdev-asset-server.web.app/assets/images/SelfPier.png'
  const logForm = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div className={`${classes.aboutSectionLayout}`} id="about">
      {/* Start About-Left */}
      <div className={classes.formContainer}>
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
        <Hero heroImg={heroImg} className={classes.heroImg}/>
      </div>
      {/* End About-Center */}
      {/* Start About-Right */}
      <div className={`${classes.descriptionContainer} ${classes.container}`}>
        <AboutDescription />
      </div>
    </div>
  )
}

export default AboutSection