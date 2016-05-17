import { handleActions } from 'redux-actions'
import { ADD_NAME, KILL, LOAD_NAMES } from '../actions/nameList'

const nameListReducer = handleActions({
  [LOAD_NAMES]: (state = [], action) => [...action.payload],
  [ADD_NAME]: (state = [], action) => [...state, ...action.payload],
  [KILL]: (state = [], action) => [...action.payload]
}, [])

export default nameListReducer
