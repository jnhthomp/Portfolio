# My Portfolio 🎮
<a href="https://jtdev.netlify.app/" target="_blank" rel="noreferrer"> <img src="https://jtdev-asset-server.web.app//assets/logos/png/logo-color.png" alt="JTDEV" width="100%" height="auto"/> </a> 
This website serves as a page for recruiters, hiring managers, or potential clients to view in order to learn about me, contact me, and see my experience/prior work. It was created with React and designed and created by myself from the ground up.

<!-- Application gif -->
<a href="https://jtdev-asset-server.web.app//Portfolio/gifs/PortfolioSq.gif" target="_blank" rel="noreferrer"> <img src="https://jtdev-asset-server.herokuapp.com/Portfolio/gifs/PortfolioSq.gif" alt="JTDEV" width="100%" height="auto" /> </a> 

## How It's Made:
**Tech used:** <!--JavaSCript =>--><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a><!--React =>--><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg" alt="react" width="40" height="40"/></a>
This application was bootstrapped with create-react-app. Styling is done with CSS modules. I do like styled-components as an alternative to CSS modules. However, I prefer to keep my CSS and JS separate unless I am incorporating something particularly dynamic where the JS and CSS interaction is necessary or more convenient.

### How to install/use
1. ```$npm install```
2. ```$npm start```

For deployment information see: https://facebook.github.io/create-react-app/docs/deployment

## Optimizations
- Consider switching to Vite to bundle/run the application instead of create-react-app
- Consider a way to have alternative themes that the user can select
  - Although this would be 'possible' with CSS modules it would likely require importing multiple CSS modules and selecting which one to use based on a state within the app. This sounds terribly inefficient compared to styled-components which can simply dynamically select a color and can use React context to access the current theme details.
- Fade in content on the screen instead of an instant load, may look a little nicer.
## Lessons Learned
- Creating dynamic layouts/content that looks good on all screens
- Using colors, type, and spacing to create visually appealing web applications
- Utilizing CSS animations to create more interesting web content

## Resources: 
- Color palette: https://colorkit.co/color-palette-generator/140045-260050-59127c-c6009e-d85ecd-5faed3-e68289-83fcea/
- Fonts: https://fonts.google.com/

## Other Examples:
Take a look at other examples from my <a href="https://jtdev.netlify.app/">portfolio</a>.

**Blog Site W/ Categories and Authentication:** https://github.com/jnhthomp/alpha-blog2

**Stock Based Social Network:** https://github.com/jnhthomp/finance-tracker

**Restaurant Web-Based Ordering System:** https://github.com/jnhthomp/practice-food-order-app

## TODO:
1. Add Vanta.js background main section
1. Use device type package to show/hide appropriate skill cards so css isn't needed
1. Add comments throughout application for easier changes

## Issues:
No known issues. Please submit any found via github issues.