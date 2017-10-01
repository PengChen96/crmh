// 点击出模态框
// 使用位置:
//	   (ui/person/subpage/editInfo)

import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, Modal, TouchableHighlight} from 'react-native';
import ModalDialog from './modalDialog';

export default class TouchLine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        	  modalVisible: false,  //modal
            renderSubLeftItem: this.props.renderSubLeftItem || null,    // 子内容 左边
            renderSubRightItem: this.props.renderSubRightItem || null   // 子内容 右边
        };
    }

		_renderModalBtn = (item) => (
			        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderColor:'#eee',backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:20}}>
			        	{ item.renderSubLeftItem }
			        	{ item.renderSubRightItem }
			        </View>
		)
    render() {
        return (
        	<View>
        		<ModalDialog title={this.state.title}
        			renderModalBtn={ this._renderModalBtn(this.state) }
        		/>
		      </View>
        );
    }
}
