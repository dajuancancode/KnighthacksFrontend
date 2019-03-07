import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = {name: 'DaJuan Harris'}
  }

  render() {
    let name = this.state.name ? this.state.name : "No Name"

    return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello {this.state.name}!</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp)