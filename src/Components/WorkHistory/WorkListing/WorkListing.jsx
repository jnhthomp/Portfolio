import React, {useState} from 'react'
import classes from './WorkListing.module.css'
import Button from '../../../UI/Button/Button'
import Tag from '../../../UI/Tag/Tag'

const WorkListing = (props) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => { 
    setExpanded((prevState) => !prevState)
  }

  const responsibilityList = props.responsibilities.map((el, idx) => <li key={idx}>{el}</li>)

  const projectList = props.projects ? 
    props.projects.map((project, idx) => {
      return (
        <li className={classes.projectListing} key={idx}>
          <h6>{project.title}:</h6>
          {project.description}
          <br/>
          <div className={classes.tagContainer}>{project.tags.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)}</div>
        </li>
      )
    }) : []

  return (
    <div className={classes.jobContainer}>
      <div className={classes.jobImage}>
        <img src={props.img} alt={props.company + ' logo'}/>
      </div>
      <div className={classes.jobDetails}>
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <h5>{props.date}</h5>
        <ul className={classes.responsibilityList}>
          {expanded ? responsibilityList : responsibilityList.slice(0, 3)}
        </ul>
        {expanded && projectList.length > 0 ? <ul>{projectList}</ul> : <></>}
        <Button buttonAction={toggleExpanded}>Show {expanded ? 'Less' : 'More' }</Button>
      </div>
    </div>
  )
}

export default WorkListing