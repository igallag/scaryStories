import React, {useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import SingleStory from '../Story/SingleStory'
import {getUserStoriesThunk} from '../../store/user'

const AllUserStories = props => {
  const dispatch = useDispatch()
  const [stories, setStories] = useState([])
  // populates a user's stories
  useEffect(() => {
    dispatch(getUserStoriesThunk())
  })

  console.log(stories, 'this is stories')

  return (
    <div>
      <h1>Your stories</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    stories: state.stories
  }
}

export default connect(mapStateToProps)(AllUserStories)
