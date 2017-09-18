import React, { Component } from 'react';
import { StyleSheet,Text,Image,View,Button,StatusBar,FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TopTabs from './topTabs';

class home extends Component {
	static navigationOptions = {
    headerTitle: '首页',
    headerStyle: {
			height: 48,
			backgroundColor: '#3b88ff',
		},
		headerTitleStyle: {
			alignSelf:'center',
			color: '#fff',
			fontWeight: "400"
		}
	};
	render(){
		return(
//			  <StatusBar
//			    backgroundColor="#1878fb"
//			    barStyle="light-content"
//			  />
			  <TopTabs/>
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
	onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
//	navigationOptions: {
//		headerTitle: '首页',
//		headerStyle: {
//			height: 48,
//			backgroundColor: '#3b88ff',
//		},
//		headerTitleStyle: {
//			alignSelf:'center',
//			color: '#fff',
//			fontWeight: "400"
//		}
//	}
});
// 导出components
export default App;  
