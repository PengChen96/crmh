import React, { Component } from 'react';
import { Text,Image,View,SectionList } from 'react-native';
import { StackNavigator } from 'react-navigation';



class person extends Component {
	static navigationOptions = {
    headerTitle: '我',
    headerStyle: {
			height: 48,
			backgroundColor: '#3b88ff',
		},
		headerTitleStyle: {
			alignSelf:'center',
			color: '#fff',
			fontWeight: "400"
		}
	};
	render(){
		//data: item; key(A):section;
		const dataSource = [
	    {data:[{name:'nader',key:'1'}],key:'A--section header'},
	    {data:[{name:'naccc',key:'2'},{name:'nader',key:'22'},{name:'nader',key:'222'}],key:'B--section header'},
	    {data:[{name:'nicks',key:'3'},{name:'nader',key:'33'}],key:'C--section header'}
		];
		return(
			<View>
			  <SectionList
				  renderItem={({item}) => 
				  	<View style={{height:40,backgroundColor:'#999'}}>
				  		<Text>{item.name}</Text>
				  	</View>
				  }
				  renderSectionHeader={({section}) => 
				  	<View style={{height:20,backgroundColor:'#fff'}}>
				  		<Text>{section.key}</Text>
				  	</View>
				  }
				  sections={dataSource}
				  ItemSeparatorComponent = {()=><View style={{height:1,backgroundColor:'#eee'}}></View>}
//				  SectionSeparatorComponent={()=><View style={{height:20,backgroundColor:'blue'}}></View>}
				/>
			</View>
		)
	}
}
const App = StackNavigator({
	Person: {screen: person}
})
export default App;