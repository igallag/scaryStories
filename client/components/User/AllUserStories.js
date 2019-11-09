import React, {useState, useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import SingleStory from '../Story/SingleStory'

const AllUserStories = props => {
  const dispatch = useDispatch()
  const [stories, setStories] = useState([])
  // populates a user's stories
  useEffect(() => {
    dispatch()
  })

  return (
    <div>
      <h1 />
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
