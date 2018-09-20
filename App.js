import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Weather from './components/Weather'

export default class App extends React.Component {
  render() {
    return (
      <Weather zipCode="90110" />
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
