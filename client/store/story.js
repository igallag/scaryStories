import axios from 'axios'
import history from '../history'

// INITIAL STATE
let initialState = {
  stories: []
}

// ACTION TYPES
const GET_ALL_STORIES = 'GET_ALL_STORIES'

// ACTION CREATORS
const getAllStories = stories => ({type: GET_ALL_STORIES, stories})

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

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {...state, stories: action.stories}
    default:
      return state
  }
}
