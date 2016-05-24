import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import Colors from '../constants/Colors'

function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>ThoughtWorkers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.pink,
    height: 64,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  navBarTitle: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 16
  }
})

export default NavBar
