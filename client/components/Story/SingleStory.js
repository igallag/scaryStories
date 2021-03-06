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
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '250px',
    justifyContent: 'space-between',
    backgroundImage: `url(${props.story.imageUrl})`,
    backgroundSize: '100%',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    minWidth: '250px'
  }

  const singleStoryDetailsStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  const singleStoryDetailsTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '2%'
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
          {/* <img
            src={props.story.imageUrl}
            height="100"
            width="100"
            alt={props.story.imageAltText}
          /> */}
          <h3>{props.story.title}</h3>
        </div>
        <div id="story-details-text" style={singleStoryDetailsTextStyle}>
          <p>{props.story.description}</p>
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
