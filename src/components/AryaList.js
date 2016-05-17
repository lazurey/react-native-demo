import React, { Component } from 'react'

import {
  Alert,
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class AryaList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  _renderName(rowData) {
    return (
      <View style={ styles.item }>
        <View style={ styles.action }>
          <TouchableHighlight style={ styles.kill } onPress={ () => Alert.alert('Kill him/her?', 'Are you sure he/she is dead?', [
            { text: 'OK', onPress: () => console.log('remove from list') },
            { text: 'Cancel', onPress: () => console.log('wrong touch') },
          ]) }>
            <Text>Kill</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.desc }>
          <Text style={ styles.name }> {rowData.name } </Text>
          <View style={ styles.wrapper }>
            <Text style={ styles.reason } numberOfLines={ 2 }> {rowData.reason } </Text>
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
          dataSource={ aryaList }
          renderRow={ this._renderName }
        />
      )
  }
}

const styles = StyleSheet.create({
  list: {
    textAlign: 'left'
  },
  item: {
    marginBottom: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  action: {
    padding: 10
  },
  kill: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 5
  },
  wrapper: {
    padding: 10,
    flexWrap: 'wrap'
  },
  desc: {
  },
  reason: {
    fontSize: 12,
    color: '#999',
    flexWrap: 'wrap'
  },
  name: {
    fontSize: 16,
    borderBottomWidth: 2,
  }
})

export default AryaList
