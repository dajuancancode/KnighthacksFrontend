import React from 'react';
import { createStackNavigator , createAppContainer } from 'react-navigation';


import Landing from './components/LandingScreen';
import GettingStarted from './components/GettingStarted';
import PriceRange from './components/PriceRange';
import DistanceRange from './components/Distance';
import FetchTest from './components/TestFetch';


const AppStack = createStackNavigator({
  Home: Landing,
  Start: GettingStarted,
  Price: PriceRange,
  Distance: DistanceRange,
  Test: FetchTest
  
 
})

const AppContainer = createAppContainer(AppStack)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

