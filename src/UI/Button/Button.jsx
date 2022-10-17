import React from 'react'
import classes from './Button.module.css';

const Button = (props) => {

  return (
    <button onClick={props.buttonAction} className={`${classes.btn} interactable`} data-type={props.dataType || "button"}>{props.children}</button>
  )
}

export default Button