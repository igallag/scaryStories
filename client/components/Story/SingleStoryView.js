import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const SingleStoryView = props => {
  const currStory = props.stories[props.location.state.storyId - 1]
  console.log(props.user, 'this is props.user')
  return currStory ? (
    <div>
      <img src={currStory.imageUrl} height="200" width="200" />
      <h1>{currStory.title}</h1>
      <p>{currStory.content}</p>
      <div>
        {currStory.userId === props.user.id ? (
          <button type="button">Delete</button>
        ) : (
          ''
        )}
      </div>
    </div>
  ) : (
    <p>Loading</p>
  )
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories,
    user: state.user
  }
}

export default connect(mapStateToProps)(SingleStoryView)
