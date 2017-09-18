import React, { Component } from 'react';
import { Text,Image,View } from 'react-native';
//import { StackNavigator } from 'react-navigation';

export default class editInfo extends Component {
	static navigationOptions = ({navigation}) => ({
  	title:navigation.state.params.val,
		tabBarVisible: false,
		headerStyle: {
			height: 48,
			backgroundColor: '#3b88ff',
		},
		headerTitleStyle: {
			alignSelf:'center',
			marginRight:56,
			color: '#fff',
			fontWeight: "400"
		},
		//返回按钮颜色
		headerTintColor:'#fff',
		gesturesEnabled: true,
  });
	render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}