import React, { Component, Suspense } from 'react';
import { View, Text, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
const MapView = React.lazy(() => import('react-native-maps'));


export default class MapScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
  };

  async componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else if (Platform.OS === 'ios') {
      await this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };


  render() {
    if (Platform.OS !== 'web') {
      return (
        <Suspense fallback={<Text>Loading...</Text>}>
          <MapView
            style={{ flex: 1 }}
            showsUserLocation={true}
          />
        </Suspense>
      );
    } else
      return (
        <View><Text>native map not supported on web browser.</Text></View>
      );
  }
}

MapScreen.navigationOptions = {
  title: 'Map',
};
