"use strict";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableHighlight,
  AppRegistry
} from "react-native";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  openLink(address) {
    var url =
      "https://www.google.com/maps/dir/?api=1&origin=4151 Pyxis Lane&destination=" +
      address;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  }
  render() {
    return (
      <View style={styles.card}>
        <TouchableHighlight
          onPress={() => this.openLink(this.props.restaurant.address)}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: this.props.restaurant.image }}
          />
        </TouchableHighlight>
        <Text style={styles.text}>
          {this.props.restaurant.name + "\n"}

          <Text style={styles.infoText}>
            {this.props.restaurant.address + "\n" + this.props.restaurant.phone}
          </Text>
          <Text style={styles.infoText}>
          {"\n" +this.props.restaurant.review}
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    textAlign: "left",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 1
  },
  thumbnail: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10
  },

  infoText: {
    fontSize: 15
  },
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

AppRegistry.registerComponent('Card', () => Card)