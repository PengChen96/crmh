import React, { Component } from 'react';
import { Text,Image,View,FlatList } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Finished from './subPage/finished'
import Unfinished from './subPage/unfinished'

export default class topTabs extends Component {
	
	_onRefresh = () => alert('已经是没有消息了！');
	render() {
    return (
      <TopTabs/>
    );
  }
}
// tab 切换导航    完成||未完成
const TopTabs = TabNavigator({
  Finished: {
    screen: Finished,
    navigationOptions: {  // 也可以写在组件的static navigationOptions内
      tabBarLabel: '完成'
    }
  },
  Unfinished: {
    screen: Unfinished,
    navigationOptions: {
      tabBarLabel: '未完成'
    }
  }
},{
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'top', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#1878fb', // 文字和图片选中颜色
    inactiveTintColor: '#666', // 文字和图片未选中颜色
    showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
    showLabel: true,
    pressColor: '#999',	//涟漪效果
    indicatorStyle: {
      height: 1, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      backgroundColor:'#1878fb'  // TabBar 下面那条线的颜色
    }, 
    style: {
      backgroundColor: '#eee', // TabBar 背景色
      height: 40,
      justifyContent: 'center',
//    borderTopWidth: 1,
      borderColor: '#bbb'
    },
    labelStyle: {
      margin:0,
      fontSize: 12, // 文字大小
    }
  }
});