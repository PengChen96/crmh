import React, { Component } from 'react';
import { Modal,TouchableHighlight,Text,Image,View,ScrollView } from 'react-native';
import TouchLine from '../../../common/touchLine';

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
  
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }
  
  _renderSubTxtItem = (item) => (
  					<View style={{justifyContent:'center',height:44}}>
	        	  <Text>{item}</Text>
	        	</View>
  )
  _renderSubImgItem = (
  	        <View>
	        		<Image source={require('../../../res/images/logo.png')} style={{width:44,height:44,borderRadius:44}}/>
	        	</View>
  )
	render() {
    return (
    	<View>
	      <ScrollView style={{backgroundColor:"bisque"}}>
	        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:20}}>
	        	<View style={{justifyContent:'center'}}>
	        	  <Text>头像</Text>
	        	</View>
	        	<View>
	        		<Image source={require('../../../res/images/logo.png')} style={{width:44,height:44,borderRadius:44}}/>
	        	</View>
	        </View>
	        <TouchLine renderSubLeftItem={this._renderSubTxtItem('头像')} renderSubRightItem = {this._renderSubImgItem}/>
	        <TouchLine renderSubLeftItem={this._renderSubTxtItem('姓名')} renderSubRightItem = {this._renderSubTxtItem('PengChen')}/>
	        <TouchLine renderSubLeftItem={this._renderSubTxtItem('学校')} renderSubRightItem = {this._renderSubTxtItem('杭州电子科技大学')}/>
	        <TouchLine renderSubLeftItem={this._renderSubTxtItem('简介')} renderSubRightItem = {this._renderSubTxtItem('热爱生命')}/>
	      </ScrollView>
	    </View>
    );
  }
}