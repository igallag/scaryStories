import axios from 'axios'
import history from '../history'

// INITIAL STATE
let initialState = {
  stories: []
}

// ACTION TYPES
const GET_ALL_STORIES = 'GET_ALL_STORIES'
const ADD_NEW_STORY = 'ADD_NEW_STORY'

// ACTION CREATORS
const getAllStories = stories => ({type: GET_ALL_STORIES, stories})
const addNewStory = story => ({type: ADD_NEW_STORY, story})

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
  // getting an error that is trying to use a "stories/api/stories"
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/stories', story)
      // console.log(story, 'THIS IS STORY IN THE addsroty thunk')
      // console.log(data, 'this is holder in the addstorythunk')
      dispatch(addNewStory(data))
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
    default:
      return state
  }
}
