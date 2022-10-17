import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <hr></hr>
      <h4>JTDEV</h4>
      <div className={classes.links}>
        <a className="interactable" data-type="link" href="https://github.com/jnhthomp">Github</a>
        <a className="interactable" data-type="link" href="https://www.linkedin.com/in/jnhthomp/">LinkedIn</a>
        <a className="interactable" data-type="link" href="mailto:jnh.thompson@gmail.com?subject=Feedback&body=Message">Email</a>
      </div>
    </div>
  )
}

export default Footer