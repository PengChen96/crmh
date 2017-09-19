import React, { Component } from 'react';
import { Text,Image,View,StatusBar,FlatList } from 'react-native';

export default class editInfo extends Component {
	
	_onRefresh = () => alert('已经是没有消息了！');
	render() {
    return (
      <View>
	      <StatusBar
				    backgroundColor="#1878fb"
				    barStyle="light-content"
				  />
	      <FlatList
					  data={[
					    {key: '一The easiest way to get started with React is to use this Hello World example code on CodePen. You dont need to install anything; you can just open it in another tab and follow along as we go through examples. If youd rather use a local development environment, check out the Installation page'},
							{key: '二'},
							{key: '三'},
							{key: '四'},
							{key: '五'},
							{key: '六'},
							{key: '七'},
							{key: '八'},
							{key: '九'},
							{key: '十'},
							{key: 'A'},
							{key: 'B'},
							{key: 'C'},
							{key: 'D'},
						]}
					  onRefresh={this._onRefresh}
					  refreshing={false}
					  renderItem={ this._renderItem }
			    />
      </View>
    );
  }
	_renderItem = ({item}) => (
						<View>
							<View style={{backgroundColor:'bisque',padding:8,marginTop:10}}>
								<View style={{backgroundColor:'#fff',flex:1,flexDirection:'row'}}>
									<View style={{backgroundColor:"brown",width:48,height:48}}>
										<Image source={require('../../../res/images/logo.png')} style={{width:48,height:48,borderRadius:48}}/>
									</View>
									<View style={{flex:1,flexDirection:'row'}}>
										<View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
											<Text>FlyingWWS</Text>
											<Text>2017-09-20</Text>
										</View>
										<View style={{justifyContent:'center',backgroundColor:"brown"}}>
											<Text>? 问答</Text>
										</View>
									</View>
								</View>
								<View style={{backgroundColor:'#fff'}}>
									<Text>{item.key}</Text>
								</View>
								<View style={{flex:1,flexDirection:'row',backgroundColor:'#eee'}}>
									<View style={{flex:1}}>
										<Text> $ 1元</Text>
									</View>
									<View>
										<Text>抢单 </Text>
									</View>
								</View>
							</View>
				  	</View>
	)
}