import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const SingleStory = props => {
  return (
    <div id="single-story">
      <Link
        to={{
          pathname: `/stories/content/${props.story.slug}`,
          state: {storyId: props.storyId}
        }}
      >
        <img
          src={props.story.imageUrl}
          height="100"
          width="100"
          alt={props.story.imageAltText}
        />
        <h3>{props.story.title}</h3>
        <p>{props.story.description}</p>
      </Link>
    </div>
  )
}

export default SingleStory
