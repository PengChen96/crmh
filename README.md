# crmh

#### 一. 第三方 底部导航条 `react-native-tab-navigator`  
0. 项目地址  
https://github.com/happypancake/react-native-tab-navigator
1. 下载  
`npm install react-native-tab-navigator --save`
2. 导入  
`import TabNavigator from 'react-native-tab-navigator';`
3. 使用
```javascript
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
```
