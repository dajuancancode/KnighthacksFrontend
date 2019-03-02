import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const myPic = require('../assets/shop2.png')
var styles = StyleSheet.create({
  landingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    position: 'absolute'
  }
})

export default class LandingScreen extends Component {
  render() {
    return (
     <View style={styles.landingContainer} >
      <Image source={myPic} style={styles.image}  />
      <Text style={styles.text}>Hello World</Text>
     </View>
    );
  }
}

