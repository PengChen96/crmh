import React, { Component } from 'react';
import { Text,Image,View,StatusBar,FlatList } from 'react-native';

export default class editInfo extends Component {
	
	_onRefresh = () => alert('已经是没有消息了！');
	render() {
    return (
      <View>
	      <StatusBar
				    backgroundColor="#1878fb"
				    barStyle="light-content"
				  />
	      <FlatList
					  data={[
					    {key: '一The easiest way to get started with React is to use this Hello World example code on CodePen. You dont need to install anything; you can just open it in another tab and follow along as we go through examples. If youd rather use a local development environment, check out the Installation page'},
							{key: '二我一直不理解这句话，总感觉有点矛盾，现在想来自己才是那个矛盾体。有些地方只有你去了才会明白，有些人你去了才会遇见。'},
							{key: '三笑，是尼泊尔另外一道美丽的风景线。他们喜欢笑，发自内心的那种微笑。不管是老人，孩子，还是其他年龄段的人都在笑。我喜欢笑，我也爱笑，所以我对他们也笑了。'},
							{key: '四从布丁山西面的望月山上迁徙过来的河马家族，它们的方法似乎更简单，直接把布丁河的上游连接到能量站，然后河水的沿岸都可以作为二次能量源进行释放和传递。它们主要考虑的是，饮水时随时可以吸收能量，让自己的身体更加强壮。'},
							{key: '五如果找一种饮品，来比喻汪曾祺的作品，非清茶莫属。刚入口的时候有点寡淡，好像索然无味，之后丝丝清甜顺着咽喉缓缓逆行而上，蔓延到口腔里，生出许多津液来。我不太会品茶，也不知行家眼里的好茶是什么味，但却喜欢这样的茶带来的舒服和惬意。'},
							{key: '六简洁、凝练，留有余地，将自己抽身于作品之外，克制住情感，平静地叙述，而不是把所有的喜怒哀乐都肆意地渲泄出来，这是汪曾祺常用的结尾方式。'},
							{key: '七她们的眼睛尤其像，白眼珠鸭蛋青，黑眼珠棋子黑，定神时如清水，闪动时像星星。浑身上下，头是头，脚是脚，头发滑溜溜的，衣服格挣挣的。'},
							{key: '八警报长鸣，其他同学都仓惶逃跑，但一罗姓女同学偏偏不跑，因为一有警报，大家都跑了，锅炉房的热水没人用，她一人就可以敞开来洗，想洗多久就洗多久。另一郑姓男同学，则用漱口缸在热锅炉上煮冰糖莲子，有次炸弹在不远处乒乒乓乓地响，而他却神色不动地搅着羹汤。'},
							{key: '九来往海上的人谈论立村，都说立村烟波浩瀚，难以找寻。村里人说起八礁山，烟云浩渺的景象可以亲眼看见。八礁山连着天际，高耸入云。八礁山的特点有两个。一个是高峰入云霄，清晨烟雾缭绕，颇为神秘。另一个是奇，它就奇在山向东面倾斜，且一侧立于海边。﻿'},
							{key: '十“八月十五月儿圆啊，爷爷为我打月饼啊，月饼圆圆，甜又香啊~~~”，美美快到中秋，吃月饼的季节，我不禁就会想起这首儿时的童谣，它勾起了我满满的回忆，勾起了小时侯和奶奶一起做“团圆馍”时的情景'},
							{key: 'A烟花三月之时，有计划下一趟江南，却因工作周折而未能成行，想来是时候未到。先前因为工作原因去过杭州两次，但水乡古镇杭州是看不到的，时间也匆忙，走过西湖，也谈不上太多感想。直到今年元旦，才得以成行。'},
							{key: 'B江南是温柔的，是多情的，是梦幻的，江南水乡是无数人编制出来的梦，没有哪一个地方会比梦里的那个江南更美。﻿'},
							{key: 'C放弃你自己，就如同放弃了我，我的精神家园世界因为没你而变得荒芜。村上村树说“你最爱的人，心中也有一片你无法到达的森林”。黑夜就在周围逡巡，我独自笼罩其中。'},
							{key: 'D我害怕那种经历了两个人的甜蜜后，努力适应分手后一个人的生活，我好不容易习惯了一个的自在惬意，好不容易从上一段感情的阴霾中走出来，我实在是很害怕，再次踏进旋涡，我也没有多少把握，我陷进去后，还能再次顽强的走出来。'},
						]}
					  onRefresh={this._onRefresh}
					  refreshing={false}
					  renderItem={ this._renderItem }
			    />
      </View>
    );
  }
	_renderItem = ({item}) => (
						<View>
							<View style={{marginTop:10}}>
								<View style={{backgroundColor:'#fff',paddingHorizontal:8,paddingTop:8,flex:1,flexDirection:'row'}}>
									<View style={{backgroundColor:"bisque",width:48,height:48}}>
										<Image source={require('../../../res/images/logo.png')} style={{width:48,height:48,borderRadius:48}}/>
									</View>
									<View style={{flex:1,flexDirection:'row'}}>
										<View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
											<Text>FlyingWWS</Text>
											<Text>2017-09-20</Text>
										</View>
										<View style={{justifyContent:'center',backgroundColor:'bisque'}}>
											<Text>? 问答</Text>
										</View>
									</View>
								</View>
								<View style={{backgroundColor:'#fff',paddingHorizontal:8,paddingVertical:4,borderBottomWidth:1,borderColor:'#eee'}}>
									<Text>{item.key}</Text>
								</View>
								<View style={{padding:8,flex:1,flexDirection:'row',backgroundColor:'#fcfcfc'}}>
									<View style={{flex:1}}>
										<Text> $ 1元</Text>
									</View>
									<View>
										<View style={{flex:1,flexDirection:'row'}}> 
											<Text style={{color:'#ffc727'}}>转发 </Text>
											<Text>抢单 </Text>
										</View>
									</View>
								</View>
							</View>
				  	</View>
	)
}