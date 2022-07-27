import React from 'react'
import classes from './AboutDescription.module.css';
import Button from '../../UI/Button/Button';
import Socials from '../../UI/Socials/Socials';

const AboutDescription = () => {
  // URL to hosted resume
  const resumeURL = 'https://jtdev-asset-server.herokuapp.com/assets/docs/JonahThompsonResume.pdf'; 
  const onResumeClick = () => {
    // TODO: Add a fetch request here that updates a database to see how many times my resume was downloaded
    // navigate to hosted resume on button click (if href somehow doesn't activate)
    window.location.href = resumeURL
  }

  return (
    <React.Fragment>
      <div className={classes.positionDescription}>
        <h3>Position: </h3>
        <span>Full Stack Web Developer</span>
      </div>
      {/* <!-- About paragraph --> */}
      <p className={classes.selfDescription}>I am a primarily self-taught and highly motivated full stack web devleoper with an associates degree in Informatics. I have experience with both front-end and backend web technologies to create exciting and modern full stack applications. I also have experience with product development having designed a logistics dashboard for processing and fulfilling orders as well as application management.</p>
      {/* <!-- Resume download button --> */}
      {/* <!-- TODO: Add resume file to download --> */}
      <div className={classes.resumeBtnContainer}>
        <Button buttonAction={onResumeClick}><span className={classes.btnText}>My Resume</span></Button>
      </div>
      {/* <!-- Social links --> */}
      <div className={classes.socialsContainer}>
        <Socials orientation="horizontal"/>
      </div>
    </React.Fragment>
  )
}

export default AboutDescription