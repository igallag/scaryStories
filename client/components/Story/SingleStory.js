import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleStory = props => {
  return (
    <div>
      <img src={props.story.imageUrl} height="100" width="100" />
      <h3>{props.story.title}</h3>
      <p>{props.story.description}</p>
    </div>
  )
}

export default SingleStory
