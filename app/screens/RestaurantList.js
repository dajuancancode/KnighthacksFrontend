import React from "react";
import {
  FlatList,
  ActivityIndicator,
  AppRegistry,
  View,
  StyleSheet
} from "react-native";

import Card from '../components/SwipeCards'

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = {
    title: "Restaurant List Display"
  };

  componentDidMount() {
    return fetch(
      `http://whatsnext.hsauers.net/find?location=4151%20Pyxis%20Lane&category=${this.props.navigation.getParam(
        "preference",
        "None"
      )}&radius=${this.props.navigation.getParam(
        "distance",
        1
      )}&money=${this.props.navigation.getParam("budget", 2)}&open=false`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Card restaurant={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  }
});

AppRegistry.registerComponent('RestaurantList', () => RestaurantList)