import { combineReducers } from 'redux'

import nameList from './nameList'
import user from './user'

const pageDataReducer = combineReducers({
  nameList
})

const sharedDataReducer = combineReducers({
  user
})

const rootReducer = combineReducers({
  page: pageDataReducer,
  shared: sharedDataReducer
})

export default rootReducer
