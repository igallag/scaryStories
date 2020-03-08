import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllStoriesThunk} from '../../store/story'
import SingleStory from './SingleStory'

class AllStories extends React.Component {
  componentDidMount() {
    this.props.getStories()
  }

  render() {
    const storyStyle = {
      display: 'flex',
      justifyContent: 'space-around'
    }
    return (
      <div>
        <h1>Stories</h1>
        <div id="all-stories-container" style={storyStyle}>
          {this.props.stories.map(story => {
            return (
              <SingleStory key={story.id} storyId={story.id} story={story} />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getStories: () => dispatch(getAllStoriesThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStories)
