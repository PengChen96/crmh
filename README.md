# crmh
### 零. 打包jsbundle
```
React-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.jsbundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
```

### 一. 第三方 底部导航条 `react-native-tab-navigator`  
0. 项目地址  
https://github.com/happypancake/react-native-tab-navigator
1. 下载  
`npm install react-native-tab-navigator --save`
2. 导入  
`import TabNavigator from 'react-native-tab-navigator';`
3. 使用
```javascript
import TabNavigator from 'react-native-tab-navigator';  
import Home from './home';
import Profile from './warn';
export default class homePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render(){
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={...} />}
          renderSelectedIcon={() => <Image source={...} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={...} />}
          renderSelectedIcon={() => <Image source={...} />}
          renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
```
