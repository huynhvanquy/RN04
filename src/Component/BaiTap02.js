import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class BaiTap02 extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.box1}></View>
                    <View style={styles.box1}></View>
                </View>
                
                <View style={styles.bottom}>
                    <View style={styles.box2}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box2}></View>
                    <View style={styles.box2}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 1,
        backgroundColor: '#A1c99A',
        alignItems: "center",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    bottom: {
        flex: 1, marginTop: 10,
        backgroundColor: '#c8c8fA',
        flexDirection: 'row', 
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderTopStartRadius: 10, 
        borderTopEndRadius: 10
    },
    box1: {
        backgroundColor: '#ffffc2', 
        margin: 12, 
        marginTop: 40,
         width: '90%', 
         height: 100,
          borderRadius: 10
    },
    box2: {
        backgroundColor: '#4f82c0',
        margin: 12, 
        width: 140, 
        height: 140, 
        borderRadius: 10
    }
});