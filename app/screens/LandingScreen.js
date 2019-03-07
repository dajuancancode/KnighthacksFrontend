import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  AppRegistry,
  ImageBackground
} from "react-native";

export default class LandingScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    let myImages = [
      "https://images-ext-1.discordapp.net/external/Iv8he1Ihvmkyh4-qqmh9lZ1N2zh7leZ2SGZaTVTUzJw/https/artvialight.com/wp-content/uploads/2017/07/Ramen-Steam.gif",
      "https://images-ext-1.discordapp.net/external/6i0Jtpry_uRpdmqCMmKKh6qQfhZCObEkeFB8yuoN7g0/https/raventools.com/blog/wp-content/uploads/2013/04/cab-window-429.gif",
      "https://thumbs.gfycat.com/HarshWhimsicalFlickertailsquirrel-size_restricted.gif"
    ];

    let pic = {
      uri: myImages[Math.floor(Math.random() * myImages.length)]
    };

    return (
      <View>
        <ImageBackground source = {pic} style = {styles.container}> 
          <Text style={styles.text}>WhatsNext</Text>
          <Button title="Get Started" onPress={() => this.props.navigation.navigate("Start")}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
    color: '#fff',
    fontSize: 30
  }
})

AppRegistry.registerComponent('LandingScreen', () => LandingScreen)