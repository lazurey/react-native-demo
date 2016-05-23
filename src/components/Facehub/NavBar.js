import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navBarTitle}>ThoughtWorkers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#F50057',
    height: 64,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  navBarTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16
  }
})

export default NavBar
