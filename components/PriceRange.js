import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

import { Ionicons, FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row', 
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#fff',
    marginRight: 5,
    padding: 25,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  buttonText: {
    fontSize: 20
  }
})


export default class PriceRange extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static navigationOptions ={
    title: 'Choose Your Budget'
  }

  render() {
    const preference = this.props.navigation.getParam('preference', 'None')
    return (
     <View style={styles.container} >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Distance', {'preference':preference, 'budget':1})}>
          <Text style={styles.buttonText}>$</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Distance', {'preference':preference, 'budget':2})}>
          <Text style={styles.buttonText}>$$</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Distance', {'preference':preference, 'budget':3})}>
          <Text style={styles.buttonText}>$$$</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Distance', {'preference':preference, 'budget':4})}>
          <Text style={styles.buttonText}>$$$$</Text>
        </TouchableOpacity> 
      </View>
     </View>
    )
  }

  
}

