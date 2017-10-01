import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet} from 'react-native';


export default class TouchLine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title: ''
        };
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:20}}>
		        	<View style={{justifyContent:'center'}}>
		        	  <Text>头像</Text>
		        	</View>
		        	<View>
		        		<Image source={require('../res/images/logo.png')} style={{width:44,height:44,borderRadius:44}}/>
		        	</View>
		        </View>
        );
    }
}
