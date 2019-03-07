import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import LandingScreen from './app/screens/LandingScreen'
import GettingStarted from './app/screens/GettingStarted'
import PriceRange from './app/screens/PriceRange'
import DistanceRange from './app/screens/Distance'
import RestaurantList from './app/screens/RestaurantList'
 
const AppNavigation = createStackNavigator({
  Home: LandingScreen,
  Start: GettingStarted,
  Price: PriceRange,
  Distance: DistanceRange,
  Test: RestaurantList

})

const NavigationContainer = createAppContainer(AppNavigation)

export default class myapp extends Component {
  render() {
    return(
      <NavigationContainer />
    )
  }
}

AppRegistry.registerComponent('myapp', () => myapp)