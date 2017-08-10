import React, { Component } from 'react'
import { Text } from 'react-native';
//import {Navigator} from "react-native-deprecated-custom-components";
//import HomePage from './ui/homePage'
import HomePage from './ui/welcome'

export default class entry extends Component {

	render(){
		return (
			<HomePage/>
		)
	}
	
//	constructor(props) {
//      super(props);
//      this.state = {};
//  }
//
//  _renderScene(route, navigator) {
//      let Component = route.component;
//      return (
//          <Component {...route.params} navigator={navigator}/>
//      );
//  }
//  
//	render(){
//		return (
//          <Navigator
//              initialRoute={{
//                  name: 'HomePage',
//                  component: HomePage
//              }}
//              renderScene={(e, i) => this._renderScene(e, i)}
//          />
//      );
//	}
}
//AppRegistry.registerComponent('cmrh', () => entry);