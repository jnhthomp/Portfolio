import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactForm from './Components/ContactForm/ContactForm';
import Hero from './Components/Hero/Hero';
import heroImg from './Assets/hero1.jpg'; // change import here (or add more) to change
import AboutDescription from './Components/AboutDescription/AboutDescription';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import ProjectShowcase from './Components/ProjectShowcase/ProjectShowcase';

function App(){
  // If making a hero image picture changer...
  // 1. import all hero images that will be used
  // 2. Add all to array
  // 3. Set timer to cycle through array to change what image is being sourced

  const submitFormHandler = (e) => {
  e.preventDefault()
    console.log('App.js: Form submitted')
  }

  return (
    <React.Fragment>
      <div className={classes.tallTest}>
        {/* Navbar */}
        <Navbar />
        {/* About... */}
        <AboutSection>
          {/* Start About-Left */}
          <div> 
            <h1>Jonah Thompson</h1>
            <div className={classes.formContainer}>
              <ContactForm onFormSubmit={submitFormHandler}/>
            </div>
          </div>
          {/* End About-Left */}
          {/* Start About-Center */}
          <div className={classes.heroContainer}>
            <Hero heroImg={heroImg}/>
          </div>
          {/* End About-Center */}
          {/* Start About-Right */}
          <div>
            <AboutDescription />
          </div>
        </AboutSection>
        {/* Projects */}
        <ProjectSection>
          <div className={classes.projectsHeaderContainer}>
            <h2 className={classes.projectSectionHeader}>Projects</h2>
          </div>
          <ProjectShowcase />
        </ProjectSection>
        
      </div>
    </React.Fragment>
  );
}

export default App;
