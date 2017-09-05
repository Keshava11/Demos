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
  View,
  TouchableOpacity 
} from 'react-native';

import Snackbar from 'react-native-snackbar';

export default class SnackBar extends Component {
 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title } >
          Snackbar Examples
        </Text>

        <TouchableOpacity
          onPress={() => Snackbar.show({
            title: 'Hello, !!!   How are you ?? .What are you doing today.',
            duration: Snackbar.LENGTH_LONG,
          })}
        >
          <Text style={styles.button}>
            Simple Snackbar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Snackbar.show({
            title: 'Please Confirm this.',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
              title: 'CONFIRM',
              onPress: () => Snackbar.show({ title: 'Thank you!' }),
              color: 'red',
            },
          })}
        >
          <Text style={styles.button}>
            Snackbar with action
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Snackbar.show({
            title: 'Please Confirm this.',
            duration: Snackbar.LENGTH_INDEFINITE,
            backgroundColor: 'purple',
            action: {
              title: 'CONFIRM',
              onPress: () => Snackbar.show({ title: 'Thank you!' }),
              color: 'red',
            },
          })}
        >
          <Text style={styles.button}>
            Snackbar with style
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Snackbar.dismiss()}
        >
          <Text style={styles.button}>
            Dismiss active Snackbar
          </Text>
</TouchableOpacity>
       
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
  
  button: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: 'green',
},
title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
},
});

AppRegistry.registerComponent('SnackBar', () => SnackBar);
