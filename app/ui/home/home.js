import React, { Component } from 'react';
import { Text,Image,View,StatusBar} from 'react-native';

export default class home extends Component {
	render(){
		return(
			<View>
			  <StatusBar
			    backgroundColor="red"
			    barStyle="light-content"
			  />
			</View>
		)
	}
}
