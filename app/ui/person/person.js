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
	    {data:[{name:'nader',key:'1'}],renderItem:this._renderTitle},
	    {data:[{name:'naccc',key:'2'},{name:'nader',key:'22'},{name:'nader',key:'222'}],renderItem:this._renderItem},
	    {data:[{name:'nicks',key:'3'},{name:'nader',key:'33'}],renderItem:this._renderItem}
		];
		return(
			<View>
			  <SectionList
//				  renderItem={this._renderTitle}
				  renderSectionHeader={({section}) => 
				  	<View style={{height:10,backgroundColor:'#eee'}}>
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
	_renderTitle = ({item}) => (
									<View style={{height:80,paddingVertical:10,paddingHorizontal:20,backgroundColor:'#fff'}}>
							  		<View style={{flex:1,flexDirection:'row'}}>
							  			<View style={{width:60,height:60,borderRadius:60,backgroundColor:'#eee'}}>
												<Image source={require('../../res/images/logo.png')} style={{width:60,height:60,borderRadius:60}}/>
											</View>
											<View style={{flex:1,paddingLeft:20,justifyContent: 'center'}}>
												<Text style={{fontSize:18,lineHeight:24}}>PengChen</Text>
												<Text>浙江杭州</Text>
											</View>
											<View >
												<Text style={{fontFamily:'serif',fontWeight:'bold',color:'#999',fontSize:24,lineHeight:48}}> > </Text>
											</View>
							  		</View>
							  	</View>
							  	);
	_renderItem = ({item}) => (
									<View style={{height:40,backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:20}}>
							  		<Text style={{lineHeight:30}}>{item.name}</Text>
							  	</View>
							  	);
}
const App = StackNavigator({
	Person: {screen: person}
})
export default App;