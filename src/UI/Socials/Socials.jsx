import React from 'react'
import classes from './Socials.module.css';

const Socials = (props) => {
  
  const classList = props.orientation === 'horizontal' ? classes.socHoriz : classes.socVert

  
  return (
    <section className={classList}>
      {/* <!-- LinkedIn --> */}
      <a href="https://www.linkedin.com/in/jonah-thompson-91b74821a/">
        <svg height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32.9999 7.33337H10.9999C8.97487 7.33337 7.33325 8.975 7.33325 11V33C7.33325 35.0251 8.97487 36.6667 10.9999 36.6667H32.9999C35.025 36.6667 36.6666 35.0251 36.6666 33V11C36.6666 8.975 35.025 7.33337 32.9999 7.33337Z"
            stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.6667 20.1666V29.3333" stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M14.6667 14.6666V14.685" stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M22 29.3333V20.1666" stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M29.3333 29.3333V23.8333C29.3333 22.8608 28.947 21.9282 28.2594 21.2406C27.5718 20.5529 26.6391 20.1666 25.6667 20.1666C24.6942 20.1666 23.7616 20.5529 23.0739 21.2406C22.3863 21.9282 22 22.8608 22 23.8333"
            stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      {/* <!-- Github --> */}
      <a href="https://github.com/jnhthomp">
        <svg height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.5 38.5V32.0834C27.5 30.25 27.6833 29.5167 26.5833 28.4167C31.7167 27.8667 36.6667 25.85 36.6667 17.4167C36.6644 15.2258 35.8097 13.1218 34.2833 11.55C34.9992 9.64697 34.9333 7.53802 34.1 5.68337C34.1 5.68337 32.0833 5.13337 27.6833 8.0667C23.9566 7.09611 20.0434 7.09611 16.3167 8.0667C11.9167 5.13337 9.9 5.68337 9.9 5.68337C9.06672 7.53802 9.00081 9.64697 9.71667 11.55C8.19033 13.1218 7.33557 15.2258 7.33333 17.4167C7.33333 25.85 12.2833 27.8667 17.4167 28.4167C16.3167 29.5167 16.3167 30.6167 16.5 32.0834V38.5M16.5 34.8334C8.61667 37.4 8.61667 30.25 5.5 29.3334L16.5 34.8334Z"
            stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      {/* <!-- Email --> */}
      <a href="mailto:jnh.thompson@gmail.com?subject=Feedback&body=Message">
        <svg height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.8333 9.16663H9.16667C7.14162 9.16663 5.5 10.8082 5.5 12.8333V31.1666C5.5 33.1917 7.14162 34.8333 9.16667 34.8333H34.8333C36.8584 34.8333 38.5 33.1917 38.5 31.1666V12.8333C38.5 10.8082 36.8584 9.16663 34.8333 9.16663Z"
            stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 12.8334L22 23.8334L38.5 12.8334" stroke="#57BFC7" strokeWidth="2.75" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}

export default Socials