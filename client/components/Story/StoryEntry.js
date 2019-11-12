import React from 'react'
import {connect} from 'react-redux'
import {addNewStoryThunk} from '../../store/story'

class StoryEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      content: '',
      imageUrl: '',
      imageAlt: '',
      tags: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // needs refactoring for this project
  handleSubmit(evt) {
    evt.preventDefault()

    this.props.addNewStory(this.state)
    this.setState({
      title: '',
      description: '',
      content: '',
      imageUrl: '',
      imageAlt: '',
      tags: []
    })
  }

  render() {
    return (
      <div id="story-entry">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">
              <small>Title</small>
            </label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">
              <small>Description</small>
            </label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="content">
              <small>Content</small>
            </label>
            <input
              name="content"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">
              <small>Image (optional)</small>
            </label>
            <input
              name="imageUrl"
              type="text"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="imageAlt">
              <small>Image Alt Text (optional)</small>
            </label>
            <input
              name="imageAlt"
              type="text"
              value={this.state.imageAlt}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="tags">
              <small>Tags (seperate with a comma and space)</small>
            </label>
            <input
              name="tags"
              type="text"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewStory: story => addNewStoryThunk(story)
  }
}

export default connect(null, mapDispatchToProps)(StoryEntry)
