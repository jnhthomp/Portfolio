import React from 'react'
import classes from './ContactForm.module.css'
import Button from '../../UI/Button/Button';

const ContactForm = (props) => {
  // TODO: Add nicer form features and custom form hook

  return (
    <form className={classes.contactForm} onSubmit={props.onFormSubmit}>
      <label htmlFor='nameInput'>Your Name</label>
      <input id='nameInput' className={classes.textInput} />
      <label htmlFor='emailInput'>Email Address</label>
      <input id='emailInput' className={classes.textInput} />
      <label htmlFor='companyInput'>Company</label>
      <input id='companyInput' className={classes.textInput} placeholder='N/A' />
      <label htmlFor='messageInput'>Message</label>
      <textarea id='messageInput' type='text' className={classes.textInput} />
      <Button buttonAction={props.onFormSubmit}>Send Message</Button>
    </form>
  )
}

export default ContactForm