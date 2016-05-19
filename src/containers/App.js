import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import reducers from '../reducers'
import configStore from '../store/configStore'

import AryaListPage from './AryaListPage'
import FaceHub from './FaceHub'

const state = {
  shared: {
    user: {}
  }
}

const initialState = Object.assign(state, global.__INITIAL_STATE__ || {})
const store = configStore(initialState, reducers)

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <FaceHub />
        </Provider>
      )
  }
}

export default App
