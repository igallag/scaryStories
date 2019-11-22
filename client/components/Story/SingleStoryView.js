import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  removeStoryThunk,
  getAllStoriesThunk,
  selectStoryThunk
} from '../../store/story'

const SingleStoryView = props => {
  let currStory = props.stories[props.location.state.storyId - 1]

  useEffect(() => {
    if (!currStory) {
      // fetch the selected story and make it the selected story
      // thinking of looking via the current slug
    }
  }, [])

  return currStory ? (
    <div>
      <img src={currStory.imageUrl} height="200" width="200" />
      <h1>{currStory.title}</h1>
      <p>{currStory.content}</p>
      <p>Tags:</p>
      <ul>
        {currStory.tags.map(tag => {
          return (
            <Link to={`/stories/tag/${tag}`} key={tag}>
              <li key={tag}>{tag}</li>
            </Link>
          )
        })}
      </ul>

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
    <div>
      <p>Problem Loading the story</p>
      <button type="button" onClick={() => getAllStoriesThunk()}>
        Try Again
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories,
    selectedStory: state.story.selectedStory,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeStory: story => dispatch(removeStoryThunk(story)),
    getAllStories: () => dispatch(getAllStoriesThunk()),
    selectStory: story => dispatch(selectStoryThunk(story))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStoryView)
