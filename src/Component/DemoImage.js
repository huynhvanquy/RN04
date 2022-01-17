import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import Demo from '../Image/demo.png';

export default class DemoImage extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Demo Image component</Text>
                <Image source={require('../Image/demo.png')} />
                <Image source={Demo} />
                <Image style={{width: 200, height: 200 }}
                source={{uri: 'https://littleoldladycomedycom.files.wordpress.com/2019/08/pexels-photo-2681751.jpeg'}} />
            </View>
        );
    }
}