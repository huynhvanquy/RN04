import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class BaiTap02 extends Component{
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#A1c99A',
                    alignItems: "center",
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10}}>
                    <View style={{backgroundColor: '#ffffc2', margin: 12, marginTop: 40, width: '90%', height: 100, borderRadius: 10}}></View>
                    <View style={{backgroundColor: '#ffffc2', margin: 12, marginTop: 40, width: '90%', height: 100, borderRadius: 10}}></View>
                </View>
                
                <View style={{flex: 1, marginTop: 10,
                     backgroundColor: '#c8c8fA',
                     flexDirection: 'row', 
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     justifyContent: 'center',
                     borderTopStartRadius: 10, 
                     borderTopEndRadius: 10}}>
                    <View style={{backgroundColor: '#4f82c0', margin: 12, width: 140, height: 140, borderRadius: 10}}></View>
                    <View style={{backgroundColor: '#4f82c0', margin: 12, width: 140, height: 140, borderRadius: 10}}></View>
                    <View style={{backgroundColor: '#4f82c0', margin: 12, width: 140, height: 140, borderRadius: 10}}></View>
                    <View style={{backgroundColor: '#4f82c0', margin: 12, width: 140, height: 140, borderRadius: 10}}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        flex: 1,
        borderRadius: 10,
    },
    box1: {
        width: 300,
        height: 10,
    },
    purple: {
        backgroundColor: '#C9C9FF'
    },
    blue: {
        backgroundColor: '#3D85C6'
    },
    green: {
        backgroundColor: '#A1c99A'
    },
    yellow: {
        backgroundColor: '#ffffc2'
    },
    infoTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});