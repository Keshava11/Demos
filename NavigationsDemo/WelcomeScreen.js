import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class WelcomeScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome  Screen`,
  });
  render() {
	  const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Your Email Id is {params.userId}</Text>
      </View>
    );
  }
}
module.exports = WelcomeScreen;