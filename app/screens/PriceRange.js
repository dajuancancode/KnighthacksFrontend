import React, { Component } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  AppRegistry
} from "react-native";

const backgroundImg3 = require("../assets/moneyBackgound.png");
const cheap = require("../assets/cheap.png");
const moderate = require("../assets/moderate.png");
const pricey = require("../assets/pricey.png");
const expensive = require("../assets/expensive.png");

export default class PriceRange extends Component {
  static navigationOptions = {
    title: "Choose Your Budget"
  };

  render() {
    const preference = this.props.navigation.getParam("preference", "None");
    return (
      <ImageBackground
        source={backgroundImg3}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Distance", {
                  preference: preference,
                  budget: 1
                })
              }
            >
              <Image source={cheap} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Distance", {
                  preference: preference,
                  budget: 2
                })
              }
            >
              <Image source={moderate} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Distance", {
                  preference: preference,
                  budget: 3
                })
              }
            >
              <Image source={pricey} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Distance", {
                  preference: preference,
                  budget: 4
                })
              }
            >
              <Image source={expensive} style={styles.button} />
            </TouchableOpacity>
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
  button: {
    marginRight: 7,
    marginBottom: 10,
    height: 150,
    width: 150
  },
  buttonText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('PriceRange', () => PriceRange)