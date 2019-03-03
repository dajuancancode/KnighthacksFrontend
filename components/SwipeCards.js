"use strict";

import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";

import SwipeCards from "react-native-swipe-cards";

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: this.props.restaurant.image }}
        />
        <Text style={styles.text}>{this.props.restaurant.name}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    );
  }
}
let restaurantName;
let restaurantPhone;
let restaurantaddress;

let restaurantCard =
  restaurantName + "\n" + restaurantPhone + "\n" + restaurantaddress;
const cards = [
  {
    name: restaurantCard,
    image: "https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif"
  }
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    };
  }

  handleYup(card) {
    console.log("yup");
    var url =
      "https://www.google.com/maps/dir/4151+Pyxis+Ln,+Orlando,+FL+32816/12101+University+Blvd+%23201,+Orlando,+FL+32817/@28.5964059,-81.2094796,16z/data=!4m13!4m12!1m5!1m1!1s0x88e7685da1e6e97d:0xae9b42c8f6e198ed!2m2!1d-81.1998242!2d28.5984064!1m5!1m1!1s0x88e768f52dd3903b:0x3acff2734e252ac3!2m2!1d-81.2091358!2d28.5990782%27)%7D%3E";
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

  handleNope(card) {
    console.log("nope");
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3;

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(
        `There are only ${this.state.cards.length - index - 1} cards left.`
      );

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`);

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        });
      }
    }
  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
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
  noMoreCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
