import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Search></Search>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
