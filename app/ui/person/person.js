import React, { Component } from 'react';
import { Text,Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class person extends Component {
	static navigationOptions = {
	    headerTitle: '个人中心',
	};
	render(){
		return(
			<View>
			  <Text>个人中心</Text>
			</View>
		)
	}
}
const App = StackNavigator({
	Person: {screen: person}
})
export default App;