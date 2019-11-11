import React, {useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import SingleStory from '../Story/SingleStory'
import {getUserStoriesThunk} from '../../store/user'

const AllUserStories = props => {
  // const dispatch = useDispatch()
  // const [stories, setStories] = useState(dispatch(getUserStoriesThunk()))

  // populates a user's stories. The empty array makes it run only on initial mount
  useEffect(() => {
    props.getUserStories()
  }, [])

  return (
    <div>
      <h1>Your stories</h1>
      {props.user.stories ? (
        props.user.stories.map(story => {
          return <SingleStory key={story.id} storyId={story.id} story={story} />
        })
      ) : (
        <p>Loading your stories!</p>
      )}
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
