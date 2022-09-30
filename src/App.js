import React from 'react';
import baseClasses from './Styles/BaseStyles.module.css';
import Navbar from './Components/Navbar/Navbar';
import AboutSection from './Components/AboutSection/AboutSection';
import ProjectSection from './Components/ProjectSection/ProjectSection';
import ProjectShowcase from './Components/ProjectSection/ProjectShowcase/ProjectShowcase';

function App(){
  
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar />
      {/* Group about section and projects with same background */}
      <div className={baseClasses.purpleSection}>
        {/* About... */}
        <AboutSection />
        {/* Projects */}
        <ProjectSection>
          <ProjectShowcase />
        </ProjectSection>
      </div>
    </React.Fragment>
  );
}

export default App;
