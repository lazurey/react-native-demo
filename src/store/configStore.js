import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

export default function configureStore(initialState, rootReducer) {
  const store = compose(
    applyMiddleware(thunk),
  )(createStore)(rootReducer, initialState)
  return store
}
