import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import HomePage from './ui/homePage';

export default class navig extends Component {
	constructor(props) {
    super(props);
    console.log(this.props);
    console.log("navig");
    this.renderScene = this.renderScene.bind(this);
  }
	
	renderScene(route, navigator) {
    //导航条跳转传递参数   params 为传递的参数 其他页面传值时的名字要和这里设置的一样
    return <route.component {...route.params} navigator={navigator}/>

    //没有参数
    // return <route.component navigator={navigator} />
  }
	render(){
    return(
      <Navigator
        initialRoute={{ name: 'HomePage', component: HomePage }}//默认加载的页面
        renderScene={this.renderScene}
      />
    )
	}
}
