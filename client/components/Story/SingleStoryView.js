import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios' // may just use a thunk for it and not this dumb short cut
import {
  removeStoryThunk,
  getAllStoriesThunk,
  selectStoryThunk
} from '../../store/story'

const SingleStoryView = props => {
  let currStory = props.selectedStory

  // const storyFetcher = (async function() {
  //   if (!currStory.title) {
  //     let {data} = await axios.get(`/api/${props.location.pathname}`)
  //     props.selectStory(data)
  //   }
  // })()

  useEffect(() => {
    const storyFetcher = (async function() {
      if (!currStory.title) {
        let {data} = await axios.get(`/api/${props.location.pathname}`)
        props.selectStory(data)
      }
    })()
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
