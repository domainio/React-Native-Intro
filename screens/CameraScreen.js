import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text>hellow world</Text>
    </View>
  );
}

CameraScreen.navigationOptions = {
  title: 'Camera',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
