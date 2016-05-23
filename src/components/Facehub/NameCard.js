import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const avatar = require('./panda.jpg')

class NameCard extends Component {
  static propTypes = {
    person: PropTypes.object
  }

  render() {
    const { person } = this.props
    return (
      <View style={[styles.card, styles.shadow]}>
        <Image style={styles.avatar} source={avatar} />
        <View style={styles.desc}>
          <View style={styles.header}>
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.location}>{person.location}</Text>
          </View>
          <Text style={styles.title}>{person.title}</Text>
          <Text style={styles.email}>{person.email}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 70,
    height: 70
  },
  desc: {
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row'
  },
  location: {
    backgroundColor: '#F50057',
    color: '#fff',
    fontSize: 10,
    padding: 2,
    borderRadius: 5,
    marginLeft: 10
  },
  title: {
    color: '#666'
  },
  email: {
    color: '#666'
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
})

export default NameCard
