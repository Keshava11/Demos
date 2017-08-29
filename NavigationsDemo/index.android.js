/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var WelcomeScreen = require('./WelcomeScreen');

 class NavigationsDemo extends Component {
  
  static navigationOptions = {
    title: 'Login Page',
  };
  
  constructor(props) {
    super(props);
    this.state = { text: 'Put your Email ID' };
  }
  
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
	  
	  
	  <Button
          onPress={() => navigate('WelcomeScreen', { userId: this.state.text })}
          title="Login"
        />
	  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const SimpleApp = StackNavigator({
  Home: { screen: NavigationsDemo },
  
  WelcomeScreen: { screen: WelcomeScreen },
});







AppRegistry.registerComponent('NavigationsDemo', () => SimpleApp);
