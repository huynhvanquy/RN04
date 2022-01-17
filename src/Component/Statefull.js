import React, {Component} from 'react';
import { View, Text } from 'react-native';

class StateFull extends Component{
    render(){
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20}}>
                Hello {' '}
                <Text style={{fontSize: 24, fontWeight: '600'}}>React Native (Statefull component)</Text>
            </Text>
        </View>
        );
    }
}

export default StateFull;