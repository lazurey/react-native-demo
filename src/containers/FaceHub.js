import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FaceHubList from '../components/FaceHubList'
import { loadNames } from '../actions/facehub'

class FaceHub extends Component {
  static propTypes = {
    list: PropTypes.array,
    actions: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.loadNames()
  }

  render() {
    const { list } = this.props
    return (
      <FaceHubList namelist={list} />
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
