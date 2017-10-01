// 模态框
// 使用位置:
//	   (common/touchLine)

import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';


export default class TouchLine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        	  modalVisible: false,  //modal
        	  renderModalBtn: this.props.renderModalBtn || null,			// 弹出框按钮   子内容
        	  title: this.props.title || '标题'
        };
    }
    _setModalVisible(visible) {
	    this.setState({modalVisible: visible});
	  }
    render() {
        return (
        	<View>
	        	<Modal
	          animationType={"slide"}
	          transparent={true}		/*设置透明背景色*/
	          visible={this.state.modalVisible}
	          onRequestClose={() => {alert("Modal has been closed.")}}
	          >
		          <View style={{flex:1}}>
		          	<View style={{flex:1,backgroundColor:'#000',opacity:0.3}}></View>
			          <View style={{position:'absolute',backgroundColor:'#fff'}}>
			            <Text>Hello World! {this.state.title}</Text>
			
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
		        onPress={ () => {this._setModalVisible(true)} }>
		          {this.state.renderModalBtn}	
		        </TouchableHighlight>
		      </View>
        );
    }
}
