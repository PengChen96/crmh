import React, { Component } from 'react';
import { AppRegistry,Text,Image,View,FlatList,StyleSheet,Button,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Room from './room';

class msg extends Component {
	static navigationOptions = {
	  headerTitle: '消息列表',
	};

	componentDidMount() {
		console.log("---msg---");
    console.log(this.props);
    console.log(this);
  }
	
	render(){
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
			  <FlatList
				  data={[
				    {key: '房间一'},
						{key: '房间二'},
						{key: '房间三'},
						{key: '房间四'},
						{key: '房间五'},
						{key: '房间六'},
						{key: '房间七'},
						{key: '房间八'},
						{key: '房间九'},
						{key: '房间十'},
					]}
				  renderItem={ ({item}) => 
				  	<View>
					  	<TouchableHighlight
					  	underlayColor="#d2e6ff"
					  	onPress={() => navigate('Room',{val:item.key})}>
						  	<View style={styles.roomContain}>
									<View style={styles.imgBox}>
										<Image source={require('../../res/images/logo.png')} style={{width:44,height:44,borderRadius:44}}/>
									</View>
									<View style={styles.roomDes}>
										<Text style={styles.roomName}>{item.key}</Text>
										<Text style={{fontSize:12,lineHeight:18}}> A man can’t ride your back unless it is bent. </Text>
									</View>
						  	</View>
					  	</TouchableHighlight>
				  	</View>
				  }
		    />
			</View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  roomContain: {
  	flex: 1,
  	flexDirection: 'row',
  	height:60,
  	padding:8,
  	borderBottomWidth:1,
  	borderColor:"#eee",
//	backgroundColor: 'bisque',
  },
  imgBox: {
  	width:44,
  	height:44,
  	borderRadius:44,
  	backgroundColor:'#eee'
  },
  roomDes:{
  	paddingLeft: 8,
//	backgroundColor:'#fff'
  },
  roomName: {
    fontSize: 16,
    lineHeight:24,
  },
})


const App = StackNavigator({
	Msg: {screen: msg},
	Room: {screen: Room},
})
export default App;

