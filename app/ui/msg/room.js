import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native';

export default class HomeTwo extends Component {
  static navigationOptions = ({navigation}) => ({
  	title:navigation.state.params.val
  });
  render() {
  	const {params} = this.props.navigation.state; 
    return (
      <View>
        <Text>我就是--{params.val}</Text>
      </View>
    );
  }
}
