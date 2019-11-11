import React from 'react'

const StoryEntry = props => {
  return (
    <div id="story-entry">
      <form>
        <div>
          <label htmlFor="title">
            <small>Title</small>
          </label>
          <input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">
            <small>Description</small>
          </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label htmlFor="content">
            <small>Content</small>
          </label>
          <input name="content" type="text" />
        </div>
        <div>
          <label htmlFor="imageUrl">
            <small>Image (optional)</small>
          </label>
          <input name="imageUrl" type="text" />
        </div>
        <div>
          <label htmlFor="imageAlt">
            <small>Image Alt Text (optional)</small>
          </label>
          <input name="imageAlt" type="text" />
        </div>
        <div>
          <label htmlFor="tags">
            <small>Tags (seperate with a comma and space)</small>
          </label>
          <input name="tags" type="text" />
        </div>
      </form>
    </div>
  )
}

export default StoryEntry
