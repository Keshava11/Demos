/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  ListView,
  Text,
  View, ActivityIndicator
} from 'react-native';
//var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

import apimod from './apimod.js';


var REQUEST_URL = 'https://developers.zomato.com/api/v2.1/search';
export default class ApiExample extends Component {


	constructor(props) { super(props); this.state = { dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }), loaded: false, }; }

	componentDidMount() {

    // Following is required to access the component context as inside the getCity function this would be pointing
    // to it. And we also needed to access the component state
    var myObj = this;

    // Call search api here
    apimod.getCity("1", "city", function(responseData) {

        myObj.setState({
            dataSource: myObj.state.dataSource.cloneWithRows(responseData),
            loaded: true,
        });

    });


    // call getReviews api here
    apimod.getReviews("18337894", function(responseData) {
      // TODO add code to fetch the user reviews
    });

}


  render() {

	  if (!this.state.loaded) { return this.renderLoadingView(); }

    return (
	<View>
	 <ListView dataSource={this.state.dataSource} renderRow={this.renderRestaurants} style={styles.listView} />
	  </View>
    );
  }


  renderLoadingView() {
     return ( <View><ActivityIndicator size='large' color='#a2ae2a' /></View> );
  }

   renderRestaurants(restaurants) {
	   return (
	   <View style={styles.container}>
	   <Image source={{uri: restaurants.restaurant.thumb}} style={styles.thumbnail} />
	   <View style={styles.rightContainer}>
				<Text style={styles.title}>{restaurants.restaurant.location.locality}</Text>
			<Text style={styles.year}>{restaurants.restaurant.name}</Text>

	   </View>
	   </View>);
	   }

}

var styles = StyleSheet.create(
{ container: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', },
rightContainer: { flex: 1, },
title: { fontSize: 20, marginBottom: 8, textAlign: 'center', },
 year: { textAlign: 'center', },
 thumbnail: { width: 53, height: 81, },
 listView: { paddingTop: 20, backgroundColor: '#F5FCFF', },
 });

AppRegistry.registerComponent('ApiExample', () => ApiExample);
