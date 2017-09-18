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
							<View style={{backgroundColor:'bisque',padding:5,marginTop:10}}>
								<View style={{backgroundColor:'#fff',flex:1,flexDirection:'column'}}>
									<View style={{backgroundColor:"brown",width:30,height:30,flex:1}}>
										<Image source={require('../../../res/images/logo.png')} style={{width:30,height:30,borderRadius:30}}/>
									</View>
									<View style={{flex:1}}>
										<Text>aaa</Text>
									</View>
								</View>
								<View style={{backgroundColor:'#eee'}}>
									<Text>{item.key}</Text>
								</View>
							</View>
				  	</View>
	)
}