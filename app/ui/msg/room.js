import React, {Component} from 'react'
import { StyleSheet,Text,View,TextInput,Button,Image,FlatList } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AutoTextInput from '../../common/autoTextInput';

export default class HomeTwo extends Component {
  static navigationOptions = ({navigation}) => ({
  	title:navigation.state.params.val,
		tabBarVisible: false,
		headerStyle: {
			height: 48,
//			backgroundColor: '#3b88ff',
		},
		headerTitleStyle: {
			fontWeight: "400"
		}
  });
  
  constructor(props) {
    super(props);
    this.state = {text:'', msgList:[]};		// sender false：表示自己发送的; true：表示别人发送的
    																			// type   0： 表示img; 1: 表示txt
  }
  
  componentDidMount() {
//	ws = new WebSocket("ws://192.168.56.1:8000/");
//	ws = new WebSocket("ws://10.231.1.77:8000/");
		ws = new WebSocket("ws://119.23.209.74:8000/");
		ws.onopen = () => {
		  console.log("connected");
		};
		ws.onmessage = (e) => {
			let prefix = e.data.split("://")[0];
			console.log(prefix);
			if(prefix=="http"||prefix=="https"){		//img
				console.log("image url");
				let {msgList} = this.state;
			  msgList.push({msg: e.data,sender: true,type:0});
			  this.setState({ msgList });
			}
			else{						// text
				//更新数组
				let {msgList} = this.state;
			  msgList.push({msg: e.data,sender: true,type:1});
			  this.setState({ msgList });
			}
			
		  //滚到底部
		  setTimeout(() => this.refs.msgFlatList.scrollToEnd(), 100);
		  console.log(e.data);
		};
		ws.onerror = (e) => {
		  console.log(e.message);
		};
		ws.onclose = (e) => {
		  console.log(e.code, e.reason);
		};
  }

//componentWillReceiveProps(){
//	this.state.msgList = this.state.msgList.slice(); 
//	console.log("1");
//	this.refs.msgFlatList.scrollToEnd();
//}
//shouldComponentUpdate(){
//	console.log("2");
//	return true;
//}
//componentWillUpdate(){
//	this.state.msgList = this.state.msgList.slice(); 
//	console.log("3");
//	this.refs.msgFlatList.scrollToEnd();
//}
//componentDidUpdate(){
//	this.state.msgList = this.state.msgList.slice(); 
//	console.log("4");
//	this.refs.msgFlatList.scrollToEnd();
//}
  //销毁&清理期
  componentWillUnmount(){
  	ws.close(1000,"exit normal");
  }
  _sendMessage(msg){
		ws.send(msg);
  	//更新数组
  	let {msgList} = this.state;
	  msgList.push({msg: this.state.text,sender: false,type:1});
//	  msgList = msgList.slice();
	  this.setState({ msgList });
	  console.log(this.state);
	  //滚到底部
//	  this.refs.msgFlatList.scrollToEnd();
	  setTimeout(() => this.refs.msgFlatList.scrollToEnd(), 100);
  }

  _selectImageFile(){
  	options = {
		  title: '选择一张图片',
		  cancelButtonTitle: '取消',
		  takePhotoButtonTitle: '拍照..',
		  chooseFromLibraryButtonTitle: '相册..',
//		  customButtons: [
//		    {name: 'fb', title: 'Choose Photo from Facebook'},
//		  ],
		  storageOptions: {
		    skipBackup: true,
		    path: 'images'
		  }
		};
  	ImagePicker.showImagePicker(options, (response) => {
		  console.log('Response = ', response);
		
		  if (response.didCancel) {
		    console.log('User cancelled image picker');
		  }
		  else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  }
		  else if (response.customButton) {
		    console.log('User tapped custom button: ', response.customButton);
		  }
		  else {
		    let source = { uri: response.uri };
		
		    // You can also display the image using data:
		    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
				console.log(source);
				this._sendImage(response.uri);
//		    this.setState({
//		      avatarSource: source
//		    });
		  }
		});
  }
  _sendImage(imageuri){
  	let self = this;
    let formData = new FormData();
    let imgFile = {uri: imageuri,type:'multipart/form-data',name:'image.png'};
    console.log(formData);
    formData.append('imgFile',imgFile);
		//  http://119.23.209.74:8080/upload
		//	http://10.231.1.151:8080/upload
    fetch('http://119.23.209.74:8080/upload',{
      method:'POST',
      headers:{
        'Content-Type':'multipart/form-data',
      },
      body:formData,
    })
    .then((response)=>response.json())
    .then((responseData)=>{
    	// 发送消息url
    	ws.send(responseData.fileUrl);
    	//
    	let {msgList} = self.state;
		  msgList.push({msg: responseData.fileUrl,sender: false,type:0});
		  self.setState({ msgList });
		  setTimeout(() => this.refs.msgFlatList.scrollToEnd(), 1000);
		  
      console.log('responseData',responseData);
    })
    .catch((error)=>{console.error('error',error)});
  }
  
  _keyExtractor = (item, index) => index;
  _onRefresh = () => alert('已经是没有消息了！');
//_onEndReached = () => alert('已经是最底部了！');
  render() {
	  const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
      	<View  style={styles.msgContainer}>
      		<FlatList
      			ref="msgFlatList"
					  data={this.state.msgList}
					  extraData={this.state}
					  keyExtractor={this._keyExtractor}
					  onRefresh={this._onRefresh}
					  refreshing={false}
//					  onEndReached={this._onEndReached}
					  onEndReachedThreshold={0}
					  renderItem={ ({item}) =>
					  	<View style={{marginTop:5}}>
						  	{item.sender?
						  		<View style={{flexDirection:"row",justifyContent:"flex-start"}}>
						  			<Image source={require('../../res/images/logo.png')} style={styles.msgAvatar}/>
								  	{item.type==0?
							  			<Image source={{uri:item.msg}} style={{width:100,height:100}} />
								  		:
								  		<View style={{padding:10,marginRight:76}}>
									  		<Text style={{fontSize:12,lineHeight:14,color:"#999"}}>Taylor Swift --- 8/30 13:00 {'\n'}</Text>
								  			<Text style={styles.msgOther}>Message-{item.msg} </Text>
								  		</View>
								  	}
							  	</View>
							  	:
							  	<View style={{flexDirection:"row",justifyContent:"flex-end"}}>
							  		{item.type==0?
							  			<Image source={{uri:item.msg}} style={{width:100,height:100}} />
								  		:
								  		<View style={{padding:10,marginLeft:76}}>
									  		<Text style={{textAlign:"right",fontSize:12,lineHeight:14,color:"#999"}}>8/30 13:00 {'\n'}</Text>
								  			<Text style={styles.msgMine}>Message-{item.msg} </Text>
								  		</View>
								  	}
								  	<Image source={require('../../res/images/logo.png')} style={styles.msgAvatar}/>
							  	</View>
							  }
					  	</View>
					  }
				  />
      	</View>
      	<View style={styles.msgInputContainer}>
          <AutoTextInput
          	style={{flex:1}}
	          placeholder="输入内容..."
	          onChangeText={(text) => this.setState({text})}
	        />
	        <View style={{width:40,height:40,margin:3}}>
			    	<Button
			    		onPress={() => this._selectImageFile()}
			    		title="+"/>
			    </View>
			    <View style={{width:60,height:40,margin:3}}>
			    	<Button
			    		onPress={() => this._sendMessage(this.state.text)}
			    		title="发送"/>
			    </View>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
//  backgroundColor:"red"
  },
  msgContainer: {
	  flex:1,
  	backgroundColor:"#eee"
  },
  msgAvatar:{
  	width:28,
  	height:28,
  	borderRadius:28,
  	margin:5
  },
  msgInputContainer: {
		backgroundColor: "#fff",
//  flex:1,
 		flexDirection: 'row',
 		justifyContent: "space-between",
 		alignItems: 'flex-end',
// 	height:48
  },
  msgOther: {
  	padding:5,
  	borderWidth:1,
  	borderColor:"#eee",
  	backgroundColor:"#fff",
  	borderRadius:3,
  },
  msgMine: {
  	padding:5,
  	borderWidth:1,
  	borderColor:"#eee",
  	backgroundColor:"#87ceeb",
  	borderRadius:3,
  }
})
