import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {selectStoryThunk} from '../../store/story'

const SingleStory = props => {
  const singleStoryStyle = {
    color: 'goldenrod',
    fontFamily: 'Arial',
    border: '3px solid goldenrod',
    borderRadius: '25px',
    overflow: 'auto'
  }

  const singleStoryDetailsStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  return (
    <div id="single-story" style={singleStoryStyle}>
      <Link
        to={{
          pathname: `/stories/content/${props.story.slug}`,
          state: {storyId: props.storyId}
        }}
        onClick={() => props.selectStory(props.story)}
      >
        <div id="story-details" style={singleStoryDetailsStyle}>
          <img
            src={props.story.imageUrl}
            height="100"
            width="100"
            alt={props.story.imageAltText}
          />
          <div id="story-details-text">
            <h3>{props.story.title}</h3>
            <p>{props.story.description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    selectStory: story => dispatch(selectStoryThunk(story))
  }
}

export default connect(null, mapDispatchToProps)(SingleStory)
