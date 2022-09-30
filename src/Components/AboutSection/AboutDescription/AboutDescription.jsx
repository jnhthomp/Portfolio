import React from 'react'
import classes from './AboutDescription.module.css';
import Button from '../../../UI/Button/Button';
import Socials from '../../../UI/Socials/Socials'

const AboutDescription = () => {
  // URL to hosted resume
  const resumeURL = 'https://jtdev-asset-server.herokuapp.com/assets/docs/JonahThompsonResume.pdf'; 
  const onResumeClick = () => {
    // TODO: Add a fetch request here that updates a database to see how many times my resume was downloaded
    // navigate to hosted resume on button click (if href somehow doesn't activate)
    window.location.href = resumeURL
  }

  return (
    <div className={classes.aboutDescription}>
      <div className={classes.positionDescription}>
        <h3>Position: </h3>
        <span>Full Stack Web Developer</span>
      </div>
      {/* <!-- About paragraph --> */}
      {/* <p className={classes.selfDescription}>I am a primarily self-taught and highly motivated full stack web devleoper with an associates degree in Informatics. I have experience with both front-end and backend web technologies to create exciting and modern full stack applications.</p> */}
      <p className={classes.selfDescription}>I am a web developer who loves solving real-world problems with code. I am used to fast-paced work environments having spent a large amount of my time in restaurants, retail, and a startup.</p>

      {/* <!-- Resume download button --> */}
      {/* <!-- TODO: Add resume file to download --> */}
      <div className={classes.resumeBtnContainer}>
        <Button buttonAction={onResumeClick}><span className={classes.btnText}>My Resume</span></Button>
      </div>
      {/* <!-- Social links --> */}
      <div className={classes.socialsContainer}>
        <Socials orientation="horizontal"/>
      </div>
    </div>
  )
}

export default AboutDescription