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

  console.log(props.user.stories, 'this is props.user.stories')

  return (
    <div>
      <h1>Your stories</h1>
      {props.user.stories ? (
        props.user.stories.map(story => {
          return <p key={story.id}>{story.title}</p>
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
