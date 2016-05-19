import { handleActions } from 'redux-actions'
import { LOAD_NAMES } from '../actions/facehub'

const facehubListReducer = handleActions({
  [LOAD_NAMES]: (state = [], action) => [...action.payload]
}, [])

export default facehubListReducer
