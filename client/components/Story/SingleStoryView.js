import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const SingleMovieView = props => {
  console.log(props, 'this is props')
  const currStory = props.stories[props.location.state.storyId - 1]
  return (
    <div>
      <h1>Hey Y'all</h1>
      <p>{currStory.title}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories
  }
}

export default connect(mapStateToProps)(SingleMovieView)
