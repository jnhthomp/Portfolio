import React from 'react';
import { isMobile } from 'react-device-detect';
import baseClasses from './Styles/BaseStyles.module.css';
import Navbar from './Components/Navbar/Navbar';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import WorkHistory from './Components/WorkHistory/WorkHistory';
import Footer from './Components/Footer/Footer';
import Cursor from './UI/Cursor/Cursor';

function App(){
  
  return (
    <React.Fragment>
      {!isMobile && <Cursor />}
      {/* Navbar */}
      <Navbar />
      {/* Group about section and projects with same background */}
      <div className={baseClasses.purpleSection}>
        {/* About */}
        <AboutSection />
        {/* Projects */}
        <ProjectSection/>
        {/* Skills */}
        <SkillsSection/>
      </div>
      <div className={baseClasses.greySection}> 
        <WorkHistory />
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;