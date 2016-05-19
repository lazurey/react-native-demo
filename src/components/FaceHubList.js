import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ListView
} from 'react-native'

import NavBar from './Facehub/NavBar'
import NameCard from './Facehub/NameCard'

class FaceHubList extends Component {
  static propTypes = {
    namelist: PropTypes.array
  }

  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2})
  }

  render() {
    const { namelist } = this.props
    const ds = this.dataSource.cloneWithRows(namelist);
    return (
        <View style={ styles.container }>
          <NavBar />
          <ListView
            dataSource={ ds }
            renderRow={ person => <NameCard person={ person } /> }
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
})

export default FaceHubList
