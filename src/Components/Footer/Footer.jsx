import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h4>JTDEV</h4>
      <div className={classes.links}>
        <a href="https://github.com/jnhthomp">Github</a>
        <a href="https://www.linkedin.com/in/jnhthomp/">LinkedIn</a>
        <a href="mailto:jnh.thompson@gmail.com?subject=Feedback&body=Message">Email</a>
      </div>
    </div>
  )
}

export default Footer