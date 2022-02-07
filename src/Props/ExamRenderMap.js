import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import Among_icon from '../images/Among_icon.png';

export default class ExamRenderMap extends Component {
    listGame = [{icon: Among_icon,
    title: 'Hello 1',
    subTitle: 'Content 1',
    backgroundColor: 'red'}];

  render() {
      const backgroundColor = this.listGame[0].backgroundColor;
    return (
      <View style={styles.container}>
        <Text>ExamRenderMap</Text>
        <View style={[styles.containerGame, {backgroundColor}]}>
            <Image source={this.listGame[0].icon} style={styles.iconGame} />
            <View style={styles.containerGame}>
                <Text>{this.listGame[0].title}</Text>
                <Text>{this.listGame[0].subTitle}</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343434',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconGame: {
        width: 80, height: 80,
    },
    containerGame: {

    }
});