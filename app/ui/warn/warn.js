import React, { Component } from 'react';
import { Text,Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class warn extends Component {
	static navigationOptions = {
	    headerTitle: '消息列表',
	};
	render(){
		return(
			<View>
			  <Text>消息列表</Text>
			</View>
		)
	}
}

const App = StackNavigator({
	Warn: {screen: warn}
})

export default App;
