import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default class LayoutAnimationScreen extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await this.fetchItems();
    this.setState({ isLoading: false, data });
  }

  fetchItems = async () => {
    try {
      const res = await axios.get('https://uifaces.co/api?limit=20', { headers: { 'X-API-KEY': '407e264ea8ab423b337832348fa807' } });
      return res.data;
    } catch (ex) {
      console.log(ex);
    }
  };


  renderItem = (data) => {
    const { item, index } = data;
    return (
      <ListItem
        key={index}
        leftAvatar={{ source: { uri: item.photo } }}
        title={item.name}
        subtitle={item.position}
        rightIcon={{
          name: 'chevron-right',
          color: 'lightgray',
        }}
      />)
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={this.state.data}
          renderItem={this.renderItem}
          refreshing={this.state.isLoading}
        />
      </View>
    );
  }
}

LayoutAnimationScreen.navigationOptions = {
  title: 'List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
