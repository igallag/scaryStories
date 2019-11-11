import React from 'react'

const StoryEntry = props => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">
            <small>Title</small>
          </label>
          <input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="description">
            <small>description</small>
          </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label htmlFor="content">
            <small>Content</small>
          </label>
          <input name="content" type="text" />
        </div>
      </form>
    </div>
  )
}

export default StoryEntry
