import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
  AppRegistry
} from "react-native";

const backgroundImg = require("../assets/WoodBackground.jpg");
const seafood = require("../assets/Seafood.png");
const american = require("../assets/American.png");
const mexican = require("../assets/mexican.png");
const upScale = require("../assets/UpScale.png");
const asian = require("../assets/Asian.png");
const vegan = require("../assets/Vegan.png");



export default class GettingStarted extends Component {
  static navigationOptions = {
    title: "Choose Your Preference"
  };

  render() {
    return (
      <ImageBackground
        source={backgroundImg}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.container}>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", {
                  preference: "Seafood"
                })
              }
            >
              <Image source={seafood} style={styles.box} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", {
                  preference: "Mexican"
                })
              }
            >
              <Image source={mexican} style={styles.box} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", { preference: "Asian" })
              }
            >
              <Image source={asian} style={styles.box} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", { preference: "Vegan" })
              }
            >
              <Image source={vegan} style={styles.box} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", {
                  preference: "American"
                })
              }
            >
              <Image source={american} style={styles.box} />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() =>
                this.props.navigation.navigate("Price", {
                  preference: "French"
                })
              }
            >
              <Image source={upScale} style={styles.box} />
            </TouchableNativeFeedback>
          </View>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
});

AppRegistry.registerComponent('GettingStarted', () => GettingStarted)