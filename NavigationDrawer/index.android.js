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
  Image,
  Alert,
  View
} from 'react-native';

import {
  DrawerNavigator,
  TabNavigator,
} from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chat_image.png')}
        style={[styles.icon, {tintColor: tintColor}]}

      />
    ),
  };

  render() {
    return (
     <View style={styles.content} >
        <Text >This is HOME Screen</Text>
	
		<Image
          style={{width: 50, height: 50}}
          source={require('./chat_image.png')}		  		
		
        />
		
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notification_image.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.content}>
        <Text>This is NOTIFICATION Screen</Text>
		<Image
          style={{width: 50, height: 50}}
          source={require('./notification_image.png')}
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  
  content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
	
});

const MyApp = DrawerNavigator({
	
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  
  
  
},

	{
	drawerPosition: 'left' ,
	drawerWidth: 200,
	},


);


AppRegistry.registerComponent('NavigationDrawer', () => MyApp);
