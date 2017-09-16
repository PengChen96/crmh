import React, { Component } from 'react';
import { Text,Image,View,SectionList,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
// subpage
import EditInfo from './subPage/editInfo';

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
	    {data:[
	    	{name:'PengChen',des:'浙江杭州',key:'A1'}],renderItem:this._renderTitle},
	    {data:[
	    	{name:'编辑资料',key:'B1',toPage:'EditInfo'},
	    	{name:'我的发单',key:'B2',toPage:'EditInfo'},
	    	{name:'我的抢单',key:'B3',toPage:'EditInfo'},
	    	{name:'我的追问',key:'B4',toPage:'EditInfo'}],renderItem:this._renderItem},
	    {data:[
	    	{name:'二手商城',key:'C1'}],renderItem:this._renderItem},
	    {data:[
	    	{name:'问题反馈',key:'D1'},
	    	{name:'设置',key:'D2'}],renderItem:this._renderItem}
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
												<Text style={{fontSize:18,lineHeight:24,color:'#333'}}>{item.name}</Text>
												<Text>{item.des}</Text>
											</View>
											<View style={{justifyContent: 'center'}}>
												<Text style={{fontFamily:'serif',fontWeight:'bold',color:'#d3d3d3',fontSize:24}}> > </Text>
											</View>
							  		</View>
							  	</View>
							  	);
	_renderItem = ({item}) => (
							<TouchableHighlight
						  	underlayColor="#d2e6ff"
						  	onPress={() => this.props.navigation.navigate(item.toPage,{val:item.name})}>
									<View style={{flex:1,flexDirection:'row',height:50,backgroundColor:'#fff',paddingVertical:5,paddingHorizontal:20}}>
										<View style={{width:40,height:40,borderRadius:40,backgroundColor:'#eee'}}>
											<Image source={require('../../res/images/logo.png')} style={{width:40,height:40,borderRadius:40}}/>
										</View>
										<View style={{flex:1,paddingLeft:20,justifyContent: 'center'}}>
											<Text style={{color:'#666'}}>{item.name}</Text>
										</View>
										<View style={{justifyContent: 'center'}}>
											<Text style={{fontFamily:'serif',fontWeight:'bold',color:'#d3d3d3',fontSize:24}}> > </Text>
										</View>
							  	</View>
						  </TouchableHighlight>
							);
}
const App = StackNavigator({
	Person: {screen: person},
	EditInfo: {screen: EditInfo}
})
export default App;