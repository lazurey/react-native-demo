import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AryaList from '../components/AryaList'
import { loadNames } from '../actions/nameList'

class AryaListPage extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    nameList: PropTypes.array,
    actions: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.loadNames()
  }

  render() {
    const { nameList } = this.props
    return (
        <View>
          <View style={ styles.header }>
            <Text style={ styles.title }>Arya's List</Text>
          </View>
          <AryaList nameList={ nameList } />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30
  }
})

const AryaActions = {
  loadNames
}

const mapState = (state) => ({
  nameList: state.page.nameList
})

const mapAction = (dispatch) => ({
  actions: bindActionCreators(AryaActions, dispatch)
})

export default connect(mapState, mapAction)(AryaListPage)
