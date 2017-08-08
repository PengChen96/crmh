import React, {Component} from 'react'
import {StyleSheet,Text,View,Button,Image} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './home/home'
import Msg from './msg/msg'
import Person from './person/person'

class welcome extends Component {
//render() {
//  return (
//    <Button
//      onPress={() => this.props.navigation.navigate('Bill')}
//      title="Go to notifications"
//    />
//  );
//}
}

// 注册tabs
const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {  // 也可以写在组件的static navigationOptions内
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  },
  Bill: {
    screen: Msg,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/warn.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  },
  Me: {
    screen: Person,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/person.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  }
},{
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#1878fb', // 文字和图片选中颜色
    inactiveTintColor: '#666', // 文字和图片未选中颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    showLabel: true,
    pressColor: '#999',	//涟漪效果
    indicatorStyle: {
      height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      backgroundColor:'#1878fb'  // TabBar 下面那条线的颜色
    }, 
    style: {
      backgroundColor: '#eee', // TabBar 背景色
      height: 56,
      borderTopWidth: 1,
      borderColor: '#bbb'
    },
    labelStyle: {
      margin:0,
      fontSize: 10, // 文字大小
    }
  }
});
export default Tabs;

const styles = StyleSheet.create({
  icon: {
	width: 28,
	height: 28,
  },
})