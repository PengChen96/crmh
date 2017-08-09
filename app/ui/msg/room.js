import React, {Component} from 'react'
import {StyleSheet,Text,View} from 'react-native';

export default class HomeTwo extends Component {
  static navigationOptions = ({navigation}) => ({
  	title:navigation.state.params.val
  });
  componentDidMount() {
    console.log(this.props);
    console.log(this);
  }
  render() {
//	const {params} = this.props.navigation.state; 
    return (
      <View>
        <Text>我就是--{this.props.val}</Text>
      </View>
    );
  }
}
