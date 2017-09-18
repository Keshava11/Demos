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
  View
} from 'react-native';
//var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'; 

var REQUEST_URL = 'https://developers.zomato.com/api/v2.1/search';
export default class ApiExample extends Component {
	
	
	
	constructor(props) { super(props); this.state = { dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }), loaded: false, }; }
	
	componentDidMount() { this.fetchData(); }
	
	 fetchData(){ 
	 const queryParameters = {first: '1', second: 'city'};
	 fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${queryParameters.first}&entity_type=${queryParameters.second}`,
	 { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json','user-key':'cc5b9f3ad0c0575f1227c608b4c3d557'}
	 
	 }) .then((response) => response.json()) .then((responseData) => { this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseData.restaurants), loaded: true, }); }) .done(); }
	
	
	
  render() {
	  
	  if (!this.state.loaded) { return this.renderLoadingView(); }
	  
    return (
	<View>
	 <ListView dataSource={this.state.dataSource} renderRow={this.renderRestaurants} style={styles.listView} />
	  </View>
    );
  }
  
  
  renderLoadingView() { return ( <View><Text>Please Wait while we load the restaurants......</Text></View> ); }
   
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
