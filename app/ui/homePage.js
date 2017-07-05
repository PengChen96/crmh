import React, { Component } from 'react'
import { Text,Image,View,StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import Home from './home/home';
import Mid from './warn/warn';
import Person from './person/person';

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
                    title="首页"  
                    selectedTitleStyle={{color:'#1878fb'}}
                    selected={this.state.selectedTab=='home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    renderIcon={()=><Image  
                        style={{width:40,height:33,tintColor:'gray'}}  
                        source={require('../res/images/home.png')}></Image>}
                    renderSelectedIcon={() => <Image
                    	style={{width:40,height:33,tintColor:'#1878fb'}}
                    	source={require('../res/images/home.png')} />}
                    >
                    <Home/>
                </TabNavigator.Item> 
                <TabNavigator.Item  
                    title="消息"  
//                  badgeText="99+"
					renderBadge={()=><View style={styles.badgeView}>
						<Text style={styles.badgeText}>15</Text></View>}
                    selected={this.state.selectedTab=='warn'}
                    onPress={() => this.setState({ selectedTab: 'warn' })}
                    renderIcon={()=><Image  
                        style={{width:40,height:33,tintColor:'gray'}}
                        source={require('../res/images/warn.png')}></Image>}
                    renderSelectedIcon={() => <Image
                    	style={{width:40,height:33,tintColor:'#1878fb'}}
                    	source={require('../res/images/warn.png')} />}
                    >  
                    <Mid/>  
                </TabNavigator.Item>
                <TabNavigator.Item  
                    title="我"  
                    selected={this.state.selectedTab=='person'}
                    onPress={() => this.setState({ selectedTab: 'person' })}
                    renderIcon={()=><Image  
                        style={{width:40,height:33,tintColor:'gray'}}
                        source={require('../res/images/person.png')}></Image>}
                    renderSelectedIcon={() => <Image
                    	style={{width:40,height:33,tintColor:'#1878fb'}}
                    	source={require('../res/images/person.png')} />}
                    >  
                    <Person/> 
                </TabNavigator.Item> 
            </TabNavigator> 
		)
	}
}

const styles = StyleSheet.create({
	badgeView:{  
	    width:22,  
	    height:14 ,  
	    backgroundColor:'#f85959',  
		borderWidth:1,  
		marginLeft:10,  
		marginTop:3,  
		borderColor:'#FFF',  
		alignItems:'center',  
		justifyContent:'center',  
	    borderRadius:8,  
	},  
	badgeText:{  
	    color:'#fff',  
	    fontSize:8
	}
})
