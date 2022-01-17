import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';


export default class DemoInput extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Demo text input</Text>
                <TextInput
                placeholder='PLease input..'
                 style={{width: '70%', backgroundColor: '#bbb', fontSize: 18, borderWidth: 1, borderRadius: 8}} />
            </View>
        );
    }
}