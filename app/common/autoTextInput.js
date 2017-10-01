// 多行输入框
// 使用位置: ( ui/msg/room )

import React, {Component} from 'react';
import {AppRegistry, TextInput, StyleSheet} from 'react-native';


export default class AutoExpandingTextInput extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: '',
            lines: 2		//默认两行
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log(event.nativeEvent);
        let height = event.nativeEvent.contentSize.height;
        lines = parseInt((height-39)/16.5)+1;
        console.log(lines);
        if(lines<=2){
        	lines = 2;
        }
        if(lines>6){
        	lines = 6;
        }
        this.setState({
            text: event.nativeEvent.text,
            lines:lines
        });
    }
    
    render() {
        return (
            <TextInput {...this.props}  //将组件定义的属性交给TextInput
                multiline={true}
                editable = {true}
        				maxLength = {4000}
        				numberOfLines = {this.state.lines}
                onChange={this.onChange}
                value={this.state.text}
//              underlineColorAndroid="transparent"
            />
        );
    }
}
