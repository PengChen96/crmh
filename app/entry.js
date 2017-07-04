import React, { Component } from 'react'
import { Text } from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import homePage from './ui/homePage'

export default class entry extends Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }
    
	render(){
		return (
            <Navigator
                initialRoute={{
                    name: 'homePage',
                    component: homePage
                }}
                renderScene={(e, i) => this._renderScene(e, i)}
            />
        );
	}
}
