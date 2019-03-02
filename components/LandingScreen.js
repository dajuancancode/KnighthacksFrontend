import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, Button, View} from 'react-native';


const myPic = require('../assets/shop2.png')
var styles = StyleSheet.create({
  landingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  button: {
    width: 75,
    position: 'absolute'
  }
})


export default class LandingScreen extends React.Component {

  static navigationOptions ={
    header: null
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={myPic} style={styles.landingContainer}>
          <Text style={styles.text}>What's Next</Text>
          <Button title="Get Started" onPress={() => this.props.navigation.navigate('Start')} />
        </ImageBackground>
      </View>
    );
  }
}
