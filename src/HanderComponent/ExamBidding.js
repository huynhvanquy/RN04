import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Alto_icon from '../images/Alto_icon.png';
import Alto_0 from '../images/Alto_0.png';

export default class ExamBidding extends Component {
    game = {
            id: 0,
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
              'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
              'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            age: '9+',
            rating: 4.5,
            banner: Alto_0,
            backgroundColor: '#6C3483',
    };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.game.banner}></Image>
        <View style={styles.box}>
            <Image style={styles.icon} source={this.game.icon}></Image>
            <View style={styles.body}>
                <Text style={styles.title}>{this.game.title}</Text>
                <Text style={styles.content}>{this.game.subTitle}</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343434',
    },
    icon: {
      width: 80,
      height: 80,  
      borderRadius: 10,
      margin: 10
    },
    box:{
        flexDirection: 'row',
        width: 400,
        height: 100,
        backgroundColor: '#6C3483',
        borderRadius: 8,
        marginTop: 5,
    },
    body: {
        marginLeft: 10,
    },
    title: {
        fontSize: 24,
    },
    content:{
        color: 'white',
        
    }
});