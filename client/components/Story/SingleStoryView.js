import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStoryThunk} from '../../store/story'

const SingleStoryView = props => {
  const currStory = props.stories[props.location.state.storyId - 1]
  console.log(props.stories[props.location.state.storyId - 1])
  return currStory ? (
    <div>
      <img src={currStory.imageUrl} height="200" width="200" />
      <h1>{currStory.title}</h1>
      <p>{currStory.content}</p>

      {currStory.userId === props.user.id ? (
        <div>
          <button type="button">Edit</button>
          <button type="button" onClick={() => props.removeStory(currStory)}>
            Delete
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  ) : (
    <p>Problem Loading the story</p>
  )
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeStory: story => dispatch(removeStoryThunk(story))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStoryView)
