import { Image, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class PlayerSelect extends Component {
    render() {
        const { playerSelectedImage } = this.props;
        return (
            <View style={styles.playerViewItemContainer}>
                <Image source={playerSelectedImage} style={styles.playerSelected} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerViewItemContainer: {
        alignItems: 'center',
    },
    playerSelected: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: '#c0bf2c',
        borderWidth: 2,
        borderRadius: 10,
    },
    characterImage: {
        height: 100, width: 100
    }
});