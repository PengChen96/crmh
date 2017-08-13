# crmh
### 零. 打包APK
0. 打包jsbundle
```
React-native bundle --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.jsbundle --platform android --assets-dest ./android/app/src/main/res/ --dev false
```
1. 生成签名密钥
可以用keytool命令生成一个私有密钥，Windows上keytool命令在JDK的bin目录中；
```
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
2. 设置gradle变量
+ 把my-release-key.keystore文件放到你工程中的android/app文件夹下
+ 编辑工程android目录下的gradle.properties,添加下面代码
```
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```
3. 添加签名到应用的gradle配置中
+ 编辑工程目录下的android/app/build.gradle,添加下面配置
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file("E:/NativeApp/cmrh/android/app/peng-release.keystore")
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
4. 生成release版本的APK
+ 首先进入工程目录
`npm start`
+ 然后在根目录再运行下面命令
```
mkdir -p android/app/src/main/assets
curl -k "http://localhost:8081/index.android.bundle" >android/app/src/main/assets/index.android.bundle
cd android && ./gradlew assembleRelease
```
+ 然后你可以在工程目录下的`android\app\build\outputs\apk`中找到你打包的release版本的APK


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
### 二. 导航 `react-navigation`
0. 项目地址  
https://github.com/react-community/react-navigation
1. 下载  
`npm install react-navigation --save`
#### `TabNavigator`
导入：
`import { TabNavigator } from 'react-navigation';`  
使用：
```javascript
const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {  // 也可以写在组件的static navigationOptions内
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/home.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  },
  Bill: {
    screen: Msg,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/warn.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  },
  Me: {
    screen: Person,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor}) => (<Image source={require('../res/images/person.png')} style={[{tintColor: tintColor},styles.icon]}/>),
    }
  }
},{
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#1878fb', // 文字和图片选中颜色
    inactiveTintColor: '#666', // 文字和图片未选中颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    showLabel: true,
    pressColor: '#999',	//涟漪效果
    indicatorStyle: {
      height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      backgroundColor:'#1878fb'  // TabBar 下面那条线的颜色
    }, 
    style: {
      backgroundColor: '#eee', // TabBar 背景色
      height: 56,
      borderTopWidth: 1,
      borderColor: '#bbb'
    },
    labelStyle: {
      margin:0,
      fontSize: 10, // 文字大小
    }
  }
});
```
