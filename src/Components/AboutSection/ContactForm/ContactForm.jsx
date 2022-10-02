import React from 'react'
import classes from './ContactForm.module.css'
import Button from '../../../UI/Button/Button';

const ContactForm = (props) => {
  // TODO: Add nicer form features and custom form hook (see jtdev-component-library)

  return (
    <form className={classes.contactForm} netlify>
      <div className={classes.formLine}>
        <div className={classes.inputGroup}>
          <label htmlFor='nameInput'>Your Name</label>
          <input id='nameInput' className={classes.textInput} placeholder=''/>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='emailInput'>Email Address</label>
          <input id='emailInput' className={classes.textInput} />
        </div>
      </div>
      <div className={classes.formLine}>
        <div className={classes.inputGroup}>
          <label htmlFor="phoneInput">Phone</label>
          <input id="phoneInput" type="text" className={classes.textInput} placeholder='(555)555-5555'/>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='companyInput'>Company</label>
          <input id='companyInput' type="text" className={classes.textInput} placeholder='N/A' />
        </div>
      </div>
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' type='text' className={classes.textInput} />
      <div className={classes.btnPos}>
        <Button buttonAction={props.onFormSubmit}><span className={classes.btnText}>Send Message</span></Button>
      </div>
    </form>
  )
}

export default ContactForm