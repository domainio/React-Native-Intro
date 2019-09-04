import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MapScreen extends Component {
  render() {
    return (<View><Text>MapScreen</Text></View>);
  }
}

MapScreen.navigationOptions = {
  title: 'Map',
};
