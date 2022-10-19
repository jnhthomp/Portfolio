import React from 'react'
import classes from './ProjectShowcase.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from '../Project/Project';

const ProjectShowcase = () => {
  // Array of objects containing name (string), img (imported image link), and desc (set within <p> tags - this makes adding <code> blocks around words easier)
  const projectList = [
    {
      name: 'Component Library',
      img: 'https://jtdev-asset-server.web.app/ComponentLibrary/gifs/ComponentLibrarySq.gif',
      desc: <p>A library of highly customizable and responsive React components. As I build and find interesting and useful components I add to this library so I can import them into projects as needed.</p>,
      gitLink: 'https://github.com/jnhthomp/jtdev-react-components',
      liveLink: 'https://incredible-bombolone-3ddb94.netlify.app/'
    },
    { name: 'Time Trials App',
      img: 'https://jtdev-asset-server.web.app/TimeTrial/gifs/TimeTrialSq.gif',
      desc: <p>Originally an api server to work in conjunction with the F1 Discord Bot, allowing users to submit time trial times for different games and tracks. It has since grown to include a React front-end with more features to come!</p>,
      gitLink: 'https://github.com/jnhthomp/time-trial-api-server',
      liveLink: 'https://jtdev-time-trial-api.herokuapp.com/'
    },
    {
      name: 'F1 Discord Bot',
      img: 'https://jtdev-asset-server.web.app/F1DiscordBot/gifs/F1DiscordBotSq.gif',
      desc: <p>An F1 bot that you can add to your discord to get up to date F1 stats and information Created using Node, Discord.js, and Ergast API - some commands include <code>/driverstandings</code>, <code>/nextrace</code>, <code>/results</code>, and more.</p>,
      gitLink: 'https://github.com/jnhthomp/f1-discord-bot'
    },
    {
      name: 'Restaurant App',
      img: 'https://jtdev-asset-server.web.app/FoodOrderApp/gifs/FoodOrderAppSq.gif',
      desc: <p>This is a react project that allows the user to create and submit an order to a fictional restaurant. It uses Firebase API to both fetch the menu data as well as submit user orders. </p>,
      gitLink: 'https://github.com/jnhthomp/practice-food-order-app',
      liveLink: 'https://jnhthomp.github.io/practice-food-order-app/'
    },
    { name: 'Alpha Blog',
      img: 'https://jtdev-asset-server.web.app/AlphaBlog/gifs/AlphaBlogSq.gif',
      desc: <p>This is a blog site that I created using Ruby on Rails. You can view browse articles, categories, and users while anonymous. Upon acount creation you can create your own articles to display on the site. </p>,
      gitLink: 'https://github.com/jnhthomp/alpha-blog2',
      liveLink: 'https://alpha-blog-jt2.herokuapp.com/'
    },
    { name: 'Stalks',
      img: 'https://jtdev-asset-server.web.app/Stalks/gifs/StalksSq.gif',
      desc: <p>A Ruby on Rails application which allows you to make a profile and add stock tickers to follow to your portfolio. You can also add other users to see what stocks they are interested in and tracking.</p>,
      gitLink: 'https://github.com/jnhthomp/finance-tracker',
      liveLink: 'https://finance-tracker-jt.herokuapp.com/'
    },
  ]

  const projectCards = projectList.map((projectDetails) => (
      <Project 
        title={projectDetails.name} 
        img={projectDetails.img} 
        projDescription={projectDetails.desc}
        gitLink={projectDetails.gitLink || false}
        liveLink={projectDetails.liveLink || false}
        key={projectDetails.name} 
      />
    )
  )

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1475 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1475, min: 1000 },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 1000, min: 525 },
      items: 1,
      partialVisibilityGutter: 80
    },
    other: {
      breakpoint: { max: 525, min: 0 },
      items: 0
    }
  };

  return (
    <div className={classes.carouselContainer}>
      <Carousel 
        partialVisible={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        renderButtonGroupOutside={false} 
        responsive={responsive} 
        infinite={true} 
        className={classes.projectSlider}
      >
        {projectCards}
        {/* <div className={classes.project}>
          <img src={alphaBlogImg}/>
          <h5>Alpha Blog</h5>
          <p>This is a blog site that I created using Ruby on Rails. You can view browse articles, categories, and users while anonymous. Upon acount creation you can create your own articles to display on the site. This project taught me about the MVC model in Ruby on Rails, hashing user passwords, authenticating users, and creating/managing a relational database.</p>
        </div>
        <div className={classes.project}>
          <img src={f1DiscordBotImg} />
          <h5>F1 Discord Bot</h5>
          <p>An F1 bot that you can add to your discord to get up to date F1 stats and information Created using Node, Discord.js, and Ergast API - some commands include <code>/driverstandings</code>, <code>/nextrace</code>, <code>/results</code>, and more. Includes instructions for cloning and hosting your own instance of the bot on your server.</p>
        </div>
        <div className={classes.project}>
          <img src={foodOrderAppImg} />
          <h5>Restaurant App</h5>
          <p>This is a react project that allows the user to create and submit an order to a fictional restaurant. It uses Firebase API to both fetch the menu data as well as submit user orders. This application taught me about using fetch requests within React to handle incoming and outgoing data. I also learned how to utilize React context in order to manage sitewide state data.</p>
        </div>
        <div className={classes.project}>
          <img src={stalksImg} />
          <h5>Stalks</h5>
          <p>A Ruby on Rails application which allows you to make a profile and add stock tickers to follow to your portfolio. You can also add other users to see what stocks they are interested in and tracking. This application taught me about using third party gems such as Devise for simpler user authentification and API usage in Ruby on Rails applications.</p>
        </div>
        <div className={classes.project}>
          <img src={timeTrialImg} />
          <h5>Time Trial App</h5>
          <p>Originally an api server to work in conjunction with the F1 Discord Bot (below), allowing users to submit time trial times for different games and tracks. It has since grown to include a React front-end with more features to come!</p>
        </div> */}
      </Carousel>
      <div className={classes.mobileProjects}>
        {projectCards}
      </div>
    </div>
  )
}

export default ProjectShowcase