import React, {Component} from 'react'
import { StyleSheet,Text,View,TextInput,Button,Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class HomeTwo extends Component {
  static navigationOptions = ({navigation}) => ({
  	title:navigation.state.params.val,
		tabBarVisible: false
  });
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  componentDidMount() {
		ws = new WebSocket("ws://119.23.209.74:8000/");
		ws.onopen = () => {
		  console.log("connected");
		};
		ws.onmessage = (e) => {
		  console.log(e);
		};
		ws.onerror = (e) => {
		  console.log(e.message);
		};
		ws.onclose = (e) => {
		  console.log(e.code, e.reason);
		};
  }
  _sendMessage(msg){
  	ws.send(msg);
  }
//ImagePicker = require('react-native-image-picker');
  _getImg(){
  	options = {
		  title: 'Select Avatar',
		  customButtons: [
		    {name: 'fb', title: 'Choose Photo from Facebook'},
		  ],
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
		
		    this.setState({
		      avatarSource: source
		    });
		  }
		});
  }
  render() {
	  const {params} = this.props.navigation.state; 
    return (
      <View>
        <Text>我就是--{params.val}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
        <Button
				  onPress={() => this._sendMessage(this.state.text)}
				  title="发送"
				/>
				<Button
				  onPress={() => this._getImg()}
				  title="图片"
				/>
				<Image source={this.state.avatarSource} style={{width:100,height:100}} />
      </View>
    );
  }
}