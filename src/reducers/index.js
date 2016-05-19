import { combineReducers } from 'redux'

import nameList from './nameList'
import facehubList from './facehubList'
import user from './user'

const pageDataReducer = combineReducers({
  nameList,
  facehubList
})

const sharedDataReducer = combineReducers({
  user
})

const rootReducer = combineReducers({
  page: pageDataReducer,
  shared: sharedDataReducer
})

export default rootReducer
