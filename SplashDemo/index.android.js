/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';


class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        this.props.navigation.navigate('AuthTab');
      });
    }, 5000);
  }

  render() {
    return (
      <View>
        <Text>This is Splash Screen</Text>
		<Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
}


class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Splash navigation={this.props.navigation} />
    );
  }
}


class LoginScreen extends Component {
  login = () => {
    this.props.navigation.navigate('AppTab');
  }

  render() {
    return (
      <View>
        <Text>LoginScreen</Text>
        <Button title="login" onPress={this.login} />
      </View>
    );
  }
}


class RegisterScreen extends Component {
  render() {
    return (
      <View>
        <Text>RegisterScreen</Text>
      </View>
    );
  }
}


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const nav = this.props.navigation;

    return (
      <View>
        <Text>This is home screen</Text>
        <Button title="Go to My Profile" onPress={() => nav.navigate('Profile', {name: 'TestName', id: 'ab@gmail.com'})} />
      </View>
    );
  }
}


class ProfileScreen extends Component {
  static navigationOptions({navigation}) {
    const state = navigation.state;
    const params = navigation.state.params;

    return {
      title: `${params.name} Profile`
    };
  }

  render() {
    const nav = this.props.navigation;
    const params = this.props.navigation.state.params;

    return (
      <View>
        <Text>State is :{JSON.stringify(nav.state)}</Text>
		
		
        <Text>This is {params.name} profile screen</Text>
		<Text>Email Id is {params.id}  </Text>
        <Button title="Go Back" onPress={() => nav.goBack()} />
      </View>
    );
  }
}


const AuthNavigator = StackNavigator({
  Login: {
    path: '/login',
    screen: LoginScreen
  },
  Register: {
    path: '/register',
    screen: RegisterScreen
  }
}, {
  initialRouteName: 'Login'
});


const AppNavigator = StackNavigator({
  Home: {
    path: '/home',
    screen: HomeScreen
  },
  Profile: {
    path: '/profile/:name',
    screen: ProfileScreen
  },
}, {
  initialRouteName: 'Home'
});


const TAB_ROUTES = {
  SplashTab: {
    screen: SplashScreen,
    navigationOptions: { title: 'Splash' }
  },
  AuthTab: {
    screen: AuthNavigator,
    navigationOptions: { title: 'Auth' }
  },
  AppTab: {
    screen: AppNavigator,
    navigationOptions: { title: 'App' }
  }
};

const TAB_NAVIGATOR_CONFIG = {
  initialRouteName: 'SplashTab',
  backBehavior: 'none',
  swipeEnabled: false,
  tabBarPosition: 'bottom',
  lazy: true,
  animationEnabled: true,
  tabBarOptions: {
    indicatorStyle: { backgroundColor: '#fff' }
  },
  navigationOptions: {
    tabBarVisible: false
  }
};

const Application = TabNavigator(TAB_ROUTES, TAB_NAVIGATOR_CONFIG);
AppRegistry.registerComponent('SplashDemo', () => Application);
