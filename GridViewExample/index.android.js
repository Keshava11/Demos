/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


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

import GridView from 'react-native-grid-view'

//var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'; 

var REQUEST_URL = 'https://developers.zomato.com/api/v2.1/search';
var RESTAURANTS_PER_ROW = 3;



class Restaurant extends Component {
  render() {
      return (
        <View style={styles.restaurant} >
          <Image
            source={{uri: this.props.currentrestaurant.restaurant.thumb}}
            style={styles.thumbnail}
          />
          <View >
            <Text 
            style={styles.title}
            numberOfLines={3}>{this.props.currentrestaurant.restaurant.location.locality}x</Text>
            <Text style={styles.year}>{this.props.currentrestaurant.restaurant.name}</Text>
          </View>
        </View>
      );
  }
  }


export default class GridViewExample extends Component {
	
	
	
	constructor(props) { 
	super(props);
	this.state = {
      dataSource: null,
      loaded: false,
    } }
	
	componentDidMount() { this.fetchData(); }
	
	 fetchData(){ 
	 const queryParameters = {first: '1', second: 'city'};
	 fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${queryParameters.first}&entity_type=${queryParameters.second}`,
	 { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json','user-key':'cc5b9f3ad0c0575f1227c608b4c3d557'}
	 
	 }) .then((response) => response.json()) .then((responseData) => { this.setState({ dataSource: responseData.restaurants, loaded: true, }); }) .done(); }
	
	
	
  render() {
	  
	  if (!this.state.loaded) { return this.renderLoadingView(); }
	  
    return (
	<View>
	 <GridView
        items={this.state.dataSource}
        itemsPerRow={RESTAURANTS_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />
	  </View>
    );
  }
  
  
  renderLoadingView() { return ( <View><Text>Please Wait while we load the restaurants......</Text></View> ); }
   
   renderItem(item) {
	   return (
	   <Restaurant currentrestaurant={item} />
	   
	   ); 
} 
  
}

var styles = StyleSheet.create(
{ container: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF', }, 
rightContainer: { flex: 1, }, 
title: { fontSize: 10, marginBottom: 8, textAlign: 'center', },
 year: { textAlign: 'center', },
 thumbnail: { width: 53, height: 81, },
 listView: { paddingTop: 20, backgroundColor: '#F5FCFF', }, 
 restaurant: {
    height: 150,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  }
 }); 

 AppRegistry.registerComponent('GridViewExample', () => GridViewExample);
