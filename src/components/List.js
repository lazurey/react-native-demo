import React, { Component } from 'react';
import {
  ListView,
  Text
} from 'react-native';

class List extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      names: ds.cloneWithRows([
        { name: '中央', year: '1988'},
        { name: 'Awaw', year: '1987'},
        { name: 'Blue', year: '1987'},
        { name: 'CC', year: '1989'}
      ])
    }
  }

  render() {
    return (
        <ListView
          dataSource={ this.state.names }
          renderRow={ (person) => <Text>{ person.name }</Text> }
        />
      )
  }
}

export default List
