/* eslint-disable no-case-declarations */
import axios from 'axios'
import history from '../history'

// INITIAL STATE
let initialState = {
  stories: [],
  selectedStory: {}
}

// ACTION TYPES
const GET_ALL_STORIES = 'GET_ALL_STORIES'
const ADD_NEW_STORY = 'ADD_NEW_STORY'
const SELECT_STORY = 'SELECT_STORY'
const REMOVE_STORY = 'REMOVE_STORY'
const GET_TAG_STORIES = 'GET_TAG_STORIES'

// ACTION CREATORS
const getAllStories = stories => ({type: GET_ALL_STORIES, stories})
const addNewStory = story => ({type: ADD_NEW_STORY, story})
const selectStory = story => ({type: SELECT_STORY, story})
const removeStory = story => ({type: REMOVE_STORY, story})
const getTagStories = stories => ({type: GET_TAG_STORIES, stories})

// THUNK CREATORS
export const getAllStoriesThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/stories')
      dispatch(getAllStories(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addNewStoryThunk = story => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/stories', story)

      dispatch(addNewStory(data))
      history.push(`/stories`)
    } catch (error) {
      console.error(error)
    }
  }
}

export const selectStoryThunk = story => {
  return async dispatch => {
    try {
      // make the selected story obj the current story so there is no problem loading the curr story.
      // probably call this in a use effect iin single story view instead of using the current method
      // maybe have this check the slug on the page to make it easier to locate and be abelt to go to a place using just the slug
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeStoryThunk = story => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/stories/${story.id}`)
      dispatch(removeStory(data))
      history.push(`/stories`)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getTagStoriesThunk = tag => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/stories/tag/${tag}`)

      dispatch(getTagStories(data))
    } catch (error) {
      console.error(error)
    }
  }
}

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {...state, stories: action.stories}
    case ADD_NEW_STORY:
      return {...state, stories: [...state.stories, action.story]}
    case REMOVE_STORY:
      const newStories = state.stories.filter(story => {
        if (story.id !== action.story.id) {
          return story
        }
      })
      return {...state, stories: newStories}
    case GET_TAG_STORIES:
      return {...state, stories: action.stories}
    default:
      return state
  }
}
