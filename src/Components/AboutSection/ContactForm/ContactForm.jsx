import React from 'react'
import classes from './ContactForm.module.css'
import Button from '../../../UI/Button/Button';

const ContactForm = (props) => {
  // TODO: Add nicer form features and custom form hook (see jtdev-component-library), may need stateful instructions: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

  return (
    <form className={classes.contactForm} name="contact" method="post">
      <input className={classes.hide} type="hidden" name="form-name" value="contact" />
      <div className={classes.formLine}>
        <div className={classes.inputGroup}>
          <label htmlFor='nameInput'>Your Name</label>
          <input id='nameInput' name="name" type="text" className={`${classes.textInput} interactable`} data-type="input" placeholder='' />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='emailInput'>Email Address</label>
          <input id='emailInput' name="email" type="email" className={`${classes.textInput} interactable`} data-type="input" />
        </div>
      </div>
      <div className={classes.formLine}>
        <div className={classes.inputGroup}>
          <label htmlFor="phoneInput">Phone</label>
          <input id="phoneInput" type="tel" name="phone" className={`${classes.textInput} interactable`} data-type="input" placeholder='(555)555-5555' />
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor='companyInput'>Company</label>
          <input id='companyInput' name="company" type="text" className={`${classes.textInput} interactable`} data-type="input" placeholder='N/A' />
        </div>
      </div>
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' name="message" type='text' className={`${classes.textInput} interactable`} data-type="input"
        placeholder="How can I help with your next website, company, or business?" />
      <div className={classes.btnPos}>
        <Button type="submit"><span className={classes.btnText}>Send Message</span></Button>
      </div>
    </form>
  )
}

export default ContactForm