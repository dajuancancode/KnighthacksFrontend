import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  AppRegistry
} from "react-native";

const backgroundImg2 = require("../assets/CityBackground.jpg");

export default class DistanceRange extends Component {
  static navigationOptions = {
    title: "Choose Your Max Distance"
  };

  render() {
    const preference = this.props.navigation.getParam("preference", "None");
    const budget = this.props.navigation.getParam("budget", 1);
    return (
      <ImageBackground
        source={backgroundImg2}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Test", {
                  preference: preference,
                  budget: budget,
                  distance: 5
                })
              }
            >
              <Text style={styles.buttonText}>5 Miles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Test", {
                  preference: preference,
                  budget: budget,
                  distance: 10
                })
              }
            >
              <Text style={styles.buttonText}>10 Miles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Test", {
                  preference: preference,
                  budget: budget,
                  distance: 5
                })
              }
            >
              <Text style={styles.buttonText}>15+ Miles</Text>
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
    textAlign: "center",
    backgroundColor: "#fff",
    marginRight: 5,
    padding: 15,
    borderRadius: 4,
    borderWidth: 0.5
  },
  buttonText: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('DistanceRange', () => DistanceRange)