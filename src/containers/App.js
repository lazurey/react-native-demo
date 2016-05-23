import React from 'react'
import { Provider } from 'react-redux'

import reducers from '../reducers'
import configStore from '../store/configStore'

import FaceHub from './FaceHub'

const state = {
  shared: {
    user: {}
  }
}

const initialState = Object.assign(state, {})
const store = configStore(initialState, reducers)

function App() {
  return (
    <Provider store={store}>
      <FaceHub />
    </Provider>
  )
}

export default App
