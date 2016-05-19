import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FaceHubList from '../components/FaceHubList'
import { loadNames } from '../actions/facehub'

class FaceHub extends Component {
  static propTypes = {
    list: PropTypes.array
  }

  componentDidMount() {
    this.props.actions.loadNames()
  }

  render() {
    const { list } = this.props
    return (
        <FaceHubList namelist={ list } />
      )
  }
}

const FaceHubActions = {
  loadNames
}

const mapState = (state) => ({
  list: state.page.facehubList
})

const mapAction = (dispatch) => ({
  actions: bindActionCreators(FaceHubActions, dispatch)
})

export default connect(mapState, mapAction)(FaceHub)
