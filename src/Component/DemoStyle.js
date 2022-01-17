import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DemoStyle extends Component{
    render(){
        return(
            <View style={{flex: 1, paddingTop: 10, paddingBottom: 50}}>
                <Text>Demo style</Text>
                <View style={{flex: 1, flexDirection: 'column',
                 paddingTop: 15, paddingBottom: 15}}>
                    <View style={[styles.box, styles.green]}></View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: 'blue', height: 100, width: 100}}></View>
                        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
                    </View>
                    <View style={{backgroundColor: 'pink', height: 100, width: 100}}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        borderStyle: 'dashed',
        borderWidth: 3,
        borderColor: 'red'
    },
    green: {
        backgroundColor: 'green'
    }
});