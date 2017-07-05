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
<TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
    renderIcon={() => <Image source={...} />}
    renderSelectedIcon={() => <Image source={...} />}
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    {homeView}
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'profile'}
    title="Profile"
    renderIcon={() => <Image source={...} />}
    renderSelectedIcon={() => <Image source={...} />}
    renderBadge={() => <CustomBadgeView />}
    onPress={() => this.setState({ selectedTab: 'profile' })}>
    {profileView}
  </TabNavigator.Item>
</TabNavigator>
```
