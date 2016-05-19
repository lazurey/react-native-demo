import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native'

import NavBar from './Facehub/NavBar'

class FaceHubList extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
        <View style={ styles.container }>
          <NavBar />
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
