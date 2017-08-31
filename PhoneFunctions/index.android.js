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
  TouchableOpacity,
  Button,
  Alert,
  TextInput,
  View
} from 'react-native';

import Communications from 'react-native-communications';


export default class PhoneFunctions extends Component {
	
	 constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
	 }
	
	
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Communications.phonecall('9891239876', false)}>
          
            <Text style={styles.text}>Calling Feature</Text>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.web('https://www.google.co.in/?gfe_rd=cr&ei=BEw-WabWFvTs8AebqacI&gws_rd=ssl')}>
          
            <Text style={styles.text}>Open Google</Text>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text('9891239876')}>
          
            <Text style={styles.text}>Simple Text Message</Text>
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
  text: {
    fontSize: 32,
  },
  textInputStyle :{
  width :500,
  },
});

AppRegistry.registerComponent('PhoneFunctions', () => PhoneFunctions);
