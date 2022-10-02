import React from 'react'
import classes from './WorkHistory.module.css';
import anomalieLogo from '../../Assets/WorkHistory/anomalie-logo.svg';
import devsLogo from '../../Assets/WorkHistory/100devs-logo.svg';
import dmLogo from '../../Assets/WorkHistory/david-marrero-logo.svg';
import WorkListing from './WorkListing/WorkListing';

const WorkHistory = () => {
  // {
  //   title: '',
  //     company: '',
  //       date: '',
  //         img: ,
  //   responsibilities: [
  //     ''
  //   ],
  //    // Projects can be ommited if not applicable
  //     projects: [
  //       {
  //         title: '',
  //         description: '',
  //         tags: ['']
  //       }
  //     ]
  // }
  const workListings = [
    { title: 'Full Stack Software Engineer',
      company: '#100Devs',
      date: '1/22-Present',
      img: devsLogo,
      responsibilities: [
        'Created responsive web applications for local small businesses',
        'Worked collaboratively with other developers to build projects',
        'Trained other developers on how to create web applications using JavaScript, HTML, and CSS',
        'Developed node applications to solve problems for myself and other developers'
      ],
      projects: [
        {
          title: 'React Component Library',
          description: 'A library of highly customizable React components that each accept a ‘settings’ object. This object applies different styles and logic to individual components to make them reusable across different projects.',
          tags: ['React', 'styled-components', 'CSS']
        },
        {
          title: 'Time Trials API Server',
          description: 'A server utilizing a NoSql MongoDB cluster in order to store racing times for different games and compare them between users. V1.0 was primarily for testing and planning for the 2.0 MVC structured version which utilizes a relational MongoDB instance.',
          tags: ['Node', 'React', 'MongoDB', 'EJS']
        },
        {
          title: 'F1 Discord Bot',
          description: 'A bot that uses an API to fetch different F1 racing data based on user commands. Examples include next-race information, driver/constructor standings, and qualifying times. Integrated with Time Trials API server to allow the user to submit times directly through Discord.',
          tags: ['Node', 'REST']
        }
      ]
    },
    { title: 'Application Manager',
      company: 'Anomalie',
      date: '2/21-8/21',
      img: anomalieLogo,
      responsibilities: [
        'Managed application workflows to automate tasks and allow employees to focus on more productive tasks',
        'Created SQL queries to segment users which allowed more efficient customer targeting and led to an increase in KPI by 300% along with empowering business leaders making other more data driven decisions',
        'Deployed application n8n on Heroku to link and automate several independent services allowing previously unrelated workflows to interlink',
        'Used SQL to gather data and create dashboards allowing employees to get automatic updates on vital metrics used in their day to day workflowsResponsibility 4',
        'Migrated services between multiple different business intelligence platforms based on company needs while preserving important data',
        'Retired, reformatted, and re-issued returned hardware such as laptops from previous employees',
        'General technology help and troubleshooting for office staff such as faulty printers, desks, or computers to prevent unnecessary burden on limited engineering team',
        'Utilized work-study program to continually further my education by studying and building applications with technologies such as Ruby on Rails and React.js'
      ],
      projects: [
        {
          title: 'Food Ordering Application',
          description: 'Users select items from a menu of items fetched from a Firebase database. When an order is submitted the data is sent to Firebase.',
          tags: ['React', 'Redux', 'Firebase']
        },
        {
          title: 'Stalks',
          description: 'Users create a profile, search stocks by ticker symbol, and then add stocks to their profile. Then they can search for and add other users and see the stocks they are tracking as well.',
          tags: ['Ruby on Rails', 'MVC', 'SASS', 'PostgreSQL']
        }
      ]
    },
    { title: 'Senior Logistics Manager',
      company: 'Anomalie',
      date: '9/18-8/21',
      img: anomalieLogo,
      responsibilities: [
        'Designed the UI, the system, and the process for fulfilling customer orders that were integrated into the pre- existing admin website',
        'Used Ruby and JavaScript to automate repetitive processes and create more powerful spreadsheets',
        'Oversaw, planned, and coordinated multiple office relocations which allowed logistics operations to scale as needed while keeping expenses to a minimum',
        'Created and maintained documentation outlining all logistics processes as a reference for those unfamiliar with the role to oversee operations if needed',
        'Performed quality control on custom garments with over $2000 retail value and arranged for any necessary alterations or fixes on garments failing inspection',
        'Shipped up to 100 dresses a week that all received individual QC inspection and packaging',
        'Negotiated rates and service agreements between multiple postal carriers in order to lower shipping costs',
        'Responsible for managing stock and supply orders of up to $10, 000',
        'Maintained several storage units of returned merchandise moving them as necessary to keep costs low including organizing and performing a consolidation from San Francisco and Berkeley to Scottsdale AZ',
        'Onboard and train temporary hires during high demand periods to ensure customers still received orders in a timely manner',
        'Phased out US logistics operations and oversaw transfer to team in China who used documentation and guidance to ensure the move would not impact the customer'
      ],
      projects: [
        { 
          title: 'Logistics Dashboard',
          description: 'Tracks/organizes inventory from the point it is shipped from the factory through QC and receipt by the bride. Automates available tasks in between to reduce the burden on the logistics department and customer service.',
          tags: ['Project Planning', 'Wireframing', 'DB Scheming']
        },
        {
          title: 'Beta Dashboard',
          description: 'Document that integrated JavaScript to automate filing, moving, formatting data, and other tasks as a functional beta version of the Logistics Dashboard.',
          tags: ['Excel', 'JavaScript']
        }
      ]
    },
    { title: 'Web Developer Internship',
      company: 'David Marrero',
      date: '3/17-8/17',
      img: dmLogo,
      responsibilities: [
        'Learned how to use web technologies such as HTML, CSS, and JavaScript to deliver on client requests',
        'Contributed to the creation of full - stack web applications built to client specs',
        'Used Git to utilize version control in conjunction with a team of other developers',
        'Utilized ‘Stand Up’ meeting structure to communicate progress or issues on given tasks',
        'Practiced Scrum methodology to quickly plan, split up, and develop projects with other developers'
      ],
    }
  ]

  const workListingsEJS = workListings.map((listing, idx) => {
    return (
      <WorkListing 
        title={listing.title}
        company={listing.company}
        date={listing.date}
        img={listing.img}
        responsibilities={listing.responsibilities}
        projects={listing.projects}
        key={listing.company + '-' + listing.title + idx}
      />
    )
  })

  return (
    <div className={classes.container}>
      {/* <h2>Work History</h2> */}
      {/* <div className={classes.jobContainer}>
        <div className={classes.jobImage}>
          <img src={anomalieLogo} />
        </div>
        <div className={classes.jobDetails}>
          <h5>Application Manager</h5>
          <h4>Anomalie</h4>
          <h3>2/21-8/21</h3>
          <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
            <li>Responsibility 4</li>
            <li>Responsibility 5</li>
          </ul>
        </div>
      </div> */}
      {workListingsEJS}
    </div>
  )
}

export default WorkHistory