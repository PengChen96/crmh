import React, { Component } from 'react';
import { Text,Image,View,Button,StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';

class home extends Component {
	static navigationOptions = {
	    title: 'Welcome Home',
	};
	render(){
		return(
			<View>
			  <Text> hello Home !</Text>
			  <StatusBar
			    backgroundColor="red"
			    barStyle="light-content"
			  />
			</View>
		)
	}
}
// 注册导航
const App = StackNavigator({
	Home: {screen: home}
},{
	initialRouteName: 'Home', // 默认显示界面
	mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
	headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
	onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
	onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});
// 导出components
export default App;  