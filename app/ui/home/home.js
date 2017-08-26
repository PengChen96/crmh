import React, { Component } from 'react';
import { Text,Image,View,Button,StatusBar,FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

class home extends Component {
	static navigationOptions = {
	    headerTitle: '首页',
	};
	_onRefresh = () => alert('已经是没有消息了！');
	render(){
		return(
			<View>
			  <Text> hello Home !</Text>
			  <StatusBar
			    backgroundColor="#1878fb"
			    barStyle="light-content"
			  />
			  
			  <FlatList
				  data={[
				    {key: '一'},
						{key: '二'},
						{key: '三'},
						{key: '四'},
						{key: '五'},
						{key: '六'},
						{key: '七'},
						{key: '八'},
						{key: '九'},
						{key: '十'},
					]}
				  onRefresh={this._onRefresh}
				  refreshing={false}
				  renderItem={ ({item}) => 
				  	<View>
					  	<Text>{item.key}</Text>
				  	</View>
				  }
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