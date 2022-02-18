import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class PlayerViewItem extends Component {
  render() {
      const {playerImage, playerSelectedImage} = this.props;
    return (
        <View style={styles.playerViewItemContainer}>
            <Image source={playerSelectedImage} style={styles.playerSelected} />
            <View style={styles.triangleDown}></View>
            <Image source={playerImage} style={styles.characterImage} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    playerViewItemContainer: {
        alignItems: 'center',
    },
    playerSelected: {
      height: 100,
      width: 100,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderColor: '#c0bf2c',
      borderWidth: 2,
      borderRadius: 10,
    },
    characterImage: {
      height: 100, width: 100
    },
    triangleDown: {
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 15,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#c0bf2c",
        marginTop: -1,
      marginBottom: 5
    },
});