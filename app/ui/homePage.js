import React, { Component } from 'react'
import { Text,Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  

export default class homePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedTab: 'home'
		};
	}
	render(){
		return (
			<TabNavigator  
                tabBarStyle={{height:60}}  
                style={{flex:1}}>  
                <TabNavigator.Item  
                    title="home"  
//                  selected={this.state.selectedTab=='home'}  
                    onPress={()=>this.setState({tab:'home'})}  
                    badgeText="122"  
                    renderIcon={()=><Image  
                        style={{width:40,height:33}}  
                        source={require('../res/images/logo.png')}></Image>}  
                    >  
                    home 
                </TabNavigator.Item>  
                <TabNavigator.Item  
                    title="second"  
//                  selected={this.state.selectedTab=='second'}  
                    onPress={()=>this.setState({tab:'second'})}  
                    renderIcon={()=><Image  
                        style={{width:40,height:33}}  
                        source={require('../res/images/logo.png')}></Image>}  
                    >  
                    second 
                </TabNavigator.Item>  
            </TabNavigator> 
		)
	}
}
