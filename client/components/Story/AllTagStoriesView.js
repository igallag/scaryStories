import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getTagStoriesThunk} from '../../store/story'
import SingleStory from './SingleStory'

class AllTagStories extends React.Component {
  componentDidMount() {
    this.props.getTagStories(this.props.match.params.storyTag)
  }

  render() {
    return (
      <div>
        <h1>Stories tagged with "{this.props.match.params.storyTag}"</h1>
        {this.props.stories.map(story => {
          return <SingleStory key={story.id} storyId={story.id} story={story} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stories: state.story.stories,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTagStories: tag => dispatch(getTagStoriesThunk(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTagStories)
