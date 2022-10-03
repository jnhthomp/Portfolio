import React from 'react'
import classes from './SkillsSection.module.css'
import Skill from './Skill/Skill'
//+ Logo images from 'https://github.com/devicons/devicon'
import reactLogo from '../../Assets/Skills/react-original.svg'
import nodeLogo from '../../Assets/Skills/nodejs-plain.svg'
import gitLogo from '../../Assets/Skills/git-plain.svg'
import mongodbLogo from '../../Assets/Skills/mongodb-plain.svg'
import postgresqlLogo from '../../Assets/Skills/postgresql-plain.svg'
import rubyOnRailsLogo from '../../Assets/Skills/rails-plain.svg'

const SkillsSection = () => {
  const skillList = [
    // Add priority skills as needed here at the beginning of the array
    { logo: reactLogo, 
      title: 'React', 
      description: 'I prefer to use React to build clean, customizable, and maintainable front-ends' 
    },
    { logo: nodeLogo,
      title: 'Node',
      description: 'Node is my backend of choice due to its JS base and ability to add additional functionality via NPM packages'
    },
    { logo: gitLogo,
      title: 'Git',
      description: 'I use git to track changes to my projects and sync those changes across groups and devices'
    },
    { logo: mongodbLogo,
      title: 'MongoDB',
      description: 'I use MongoDB to quickly prototype data. This makes it easier to see and test different structures before committing to a relational SQL database'
    },
    { logo: postgresqlLogo,
      title: 'PostgreSQL',
      description: 'PostgreSQL is my favorite relational database because the open source nature and developer features'
    },
    { logo: rubyOnRailsLogo,
      title: 'Ruby on Rails',
      description: 'Ruby on Rails was the first backend framework I learned and I appreciated the MVC architecture that clearly separates concerns within the server'
    },
  ]

  const skillsEJS = skillList.map((skillObj) => {
    return <Skill logo={skillObj.logo} title={skillObj.title} description={skillObj.description} />
  }).reverse() // .reverse() so priority skills are shown top level (but to the left) will help ensure favorite skills are seen first

  return (
    <>
      <div className={`${classes.container} ${classes.overLap}`}>
        { skillsEJS }
      </div>
      <div className={classes.mobileSkills}>
        {skillsEJS}
      </div>
    </>
  )
}

export default SkillsSection