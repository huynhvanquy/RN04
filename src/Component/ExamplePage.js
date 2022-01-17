import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ExamplePage extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.purple]}>
                    <Text style={styles.infoTxt}>Purple: #C9C9FF</Text>
                </View>
                <View style={[styles.box, styles.blue]}>
                    <Text style={styles.infoTxt}>Blue: #3D85C6</Text>
                </View>
                <View style={[styles.box, styles.green]}>
                    <Text style={styles.infoTxt}>Green: #96CC96</Text>
                </View>
                <View style={[styles.box, styles.yellow]}>
                    <Text style={styles.infoTxt}>Yellow: #F4B940</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    box: {
        flex: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    purple: {
        backgroundColor: '#C9C9FF'
    },
    blue: {
        backgroundColor: '#3D85C6'
    },
    green: {
        backgroundColor: '#96CC96'
    },
    yellow: {
        backgroundColor: '#F4B940'
    },
    infoTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});