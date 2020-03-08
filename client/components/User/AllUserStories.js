import React, {useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import SingleStory from '../Story/SingleStory'
import {getUserStoriesThunk} from '../../store/user'

const AllUserStories = props => {
  useEffect(() => {
    props.getUserStories()
  }, [])

  const storyStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }

  return (
    <div>
      <h1>Your stories</h1>
      <div style={storyStyle}>
        {props.user.stories ? (
          props.user.stories.map(story => {
            return (
              <SingleStory key={story.id} storyId={story.id} story={story} />
            )
          })
        ) : (
          <p>Loading your stories!</p>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    stories: state.stories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserStories: () => dispatch(getUserStoriesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUserStories)
