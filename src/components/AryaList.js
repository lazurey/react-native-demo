import React, { Component, PropTypes } from 'react'

import {
  Alert,
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

import Colors from './constants/Colors'

class AryaList extends Component {
  static propTypes = {
    nameList: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    }
  }

  _renderName(rowData) {
    return (
      <View style={styles.item}>
        <View style={styles.action}>
          <TouchableHighlight
            style={styles.kill}
            onPress={() => Alert.alert('Kill him/her?', 'Are you sure he/she is dead?', [
              { text: 'OK', onPress: () => 'okay' },
              { text: 'Cancel', onPress: () => 'cancel' }])}
          >
            <Text>Kill</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.desc}>
          <Text style={styles.name}> {rowData.name} </Text>
          <View style={styles.wrapper}>
            <Text style={styles.reason} numberOfLines={2}> {rowData.reason} </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { nameList } = this.props
    const aryaList = this.state.ds.cloneWithRows(nameList)

    return (
      <ListView
        dataSource={aryaList}
        renderRow={this._renderName}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row'
  },
  action: {
    padding: 10
  },
  kill: {
    borderWidth: 1,
    borderColor: Colors.textGray,
    padding: 5
  },
  wrapper: {
    flexWrap: 'wrap'
  },
  desc: {
  },
  reason: {
    fontSize: 12,
    color: Colors.textGray,
    flexWrap: 'wrap'
  },
  name: {
    fontSize: 16,
    borderBottomWidth: 2
  }
})

export default AryaList
