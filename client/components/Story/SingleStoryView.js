import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const SingleStoryView = props => {
  const currStory = props.stories[props.location.state.storyId - 1]
  return (
    <div>
      <img src={currStory.imageUrl} height="200" width="200" />
      <h1>{currStory.title}</h1>
      <p>{currStory.content}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories
  }
}

export default connect(mapStateToProps)(SingleStoryView)
