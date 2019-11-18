/* eslint-disable no-case-declarations */
import axios from 'axios'
import history from '../history'

// INITIAL STATE
let initialState = {
  stories: []
}

// ACTION TYPES
const GET_ALL_STORIES = 'GET_ALL_STORIES'
const ADD_NEW_STORY = 'ADD_NEW_STORY'
const REMOVE_STORY = 'REMOVE_STORY'

// ACTION CREATORS
const getAllStories = stories => ({type: GET_ALL_STORIES, stories})
const addNewStory = story => ({type: ADD_NEW_STORY, story})
const removeStory = story => ({type: REMOVE_STORY, story})

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

export const removeStoryThunk = story => {
  return async dispatch => {
    try {
      console.log('inside the removeStoryThunk')
      const {data} = await axios.delete(`/api/stories/${story.id}`)
      dispatch(removeStory(data))
      history.push(`/stories`)
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
    default:
      return state
  }
}
