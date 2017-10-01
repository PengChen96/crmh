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
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	render() {
    return (
    	<View>
    	  <Modal
          animationType={"slide"}
          transparent={false}		/*设置透明背景色*/
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22}}>
	          <View>
	            <Text>Hello World!</Text>
	
	            <TouchableHighlight 
	            underlayColor="#d2e6ff"
	            onPress={() => {
	              this._setModalVisible(!this.state.modalVisible)
	            }}>
	              <Text>Hide Modal</Text>
	            </TouchableHighlight>
	
	          </View>
          </View>
        </Modal>
        <TouchableHighlight
        underlayColor="#d2e6ff"
        onPress={() => {
          this._setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        
	      <ScrollView style={{backgroundColor:"bisque"}}>
	        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:20}}>
	        	<View style={{justifyContent:'center'}}>
	        	  <Text>头像</Text>
	        	</View>
	        	<View>
	        		<Image source={require('../../../res/images/logo.png')} style={{width:44,height:44,borderRadius:44}}/>
	        	</View>
	        </View>
	        <TouchLine/>
	      </ScrollView>
	    </View>
    );
  }
}