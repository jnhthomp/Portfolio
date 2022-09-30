import React from 'react';
import baseClasses from './Styles/BaseStyles.module.css';
import Navbar from './Components/Navbar/Navbar';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import ProjectShowcase from './Components/ProjectSection/ProjectShowcase/ProjectShowcase';
import SkillsSection from './Components/SkillsSection/SkillsSection';

function App(){
  
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
